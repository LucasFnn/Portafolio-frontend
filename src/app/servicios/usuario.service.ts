import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios:Usuario[];

  constructor(private httpClient:HttpClient) { }


  private urlUsuarios = "http://localhost:8080/usuarios/listar";
  private urlUsuarioEditar = "http://localhost:8080/usuarios";

  obtenerListaUsuarios():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.urlUsuarios}`);
   }

   actualizarUsuario(usuario:Usuario): Observable<Object>{
    return this.httpClient.put(`${this.urlUsuarioEditar}`, usuario);
  }




}
