import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datosLogin = {
    "username" : '',
    "password" : ''
   }
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }


  submit() {
    console.log("LOGUEADO");
    if (this.datosLogin.username.trim() == '' || this.datosLogin.username.trim() == null) {
      alert("El nombre de usuario es requerido");
    }else{

    if (this.datosLogin.password.trim() == '' || this.datosLogin.password.trim() == null) {
      alert("La contraseña es requerida");
    }
  }

    this.loginService.generarToken(this.datosLogin).subscribe(
      (data: any) => {
        console.log(data);


        this.loginService.loginUsuario(data.token);
        this.loginService.getCurrentUser().subscribe(
          (usuario: any) => {
            
          this.loginService.establecerUsuario(usuario);
          console.log(usuario);

          if(this.loginService.getUserRole() == "ADMIN") {
            /*this.router.navigate(['admin']);*/
            window.location.href = '/admin';
            this.loginService.loginStatusSubjec.next(true);

            } else if(this.loginService.getUserRole() == 'NORMAL'){
              this.router.navigate(['home']);

            }
            else{
              this.loginService.deslogueo();
            }


          }
        )}, (error)=> {

          console.log(error);
          alert("Detalles invalidos, vuelva a internarlo");
          
          }
    )


    }

}
