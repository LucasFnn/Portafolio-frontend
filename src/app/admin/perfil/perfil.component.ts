import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Red } from 'src/app/clases/red';
import { Usuario } from 'src/app/clases/usuario';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { RedesService } from 'src/app/servicios/redes.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  redes:Red[];
  usuarios:Usuario[];
  red:Red = new Red();
  
  constructor(private router:Router  ,private redesService: RedesService, private perfilService:PerfilService, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.obtenerRedes();
    this.obtenerListaUsuarios();
  }


  verEditarUsuario(id:number){
    this.router.navigate(['editarusuario', id]);
  }


  
  private obtenerRedes(){
    this.redesService.obtenerListaRedes().subscribe(dato =>{
    this.redes = dato;
    })
    }
   

  eliminarRed(id:number){
          this.redesService.eliminarRed(id).subscribe(dato => {
            console.log(dato);
            window.location.href = '/perfil';
          }), console.error();
          ;
          
        }

  obtenerListaUsuarios(){
    this.usuarioService.obtenerListaUsuarios().subscribe(dato => {
    this.usuarios = dato;
    }), console.error();
  }


  verEditarRed(id:number){
    console.log("Has hecho click");
    this.router.navigate(['editarred', id]);

  }

  agregarRed(){
    window.location.href = '/addred';
  }

}
