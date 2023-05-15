import { Component } from '@angular/core';
import { LoginService } from './servicios/login.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DesafioModulo3';
  deslogueado : boolean;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private loginService:LoginService) {
    
  }

  ngOnInit(): void {
    var identificado = localStorage.getItem("token");
    
    if(identificado !== null){
      this.deslogueado = false;
    }else{
      this.deslogueado = true;
    }
    
    }
  
  desloguear(){
    this.loginService.deslogueo();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.deslogueado = true;
    window.location.href = '/home';
  }


}
