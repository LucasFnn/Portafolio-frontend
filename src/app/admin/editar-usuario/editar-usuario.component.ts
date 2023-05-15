import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario:Usuario = new Usuario();
  id:number;

  constructor(private usuarioServicio:UsuarioService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
  }


  onSubmit(){
this.actualizarUsuario();

  }

  actualizarUsuario(){
    this.usuarioServicio.actualizarUsuario(this.usuario).subscribe({next: (dato) => alert("Usuario actualizado con èxito."), error: (error) => console.log(error) });
   }
}
