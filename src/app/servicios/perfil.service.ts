import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private urlPerfil = "https://backend-lucasfnn.onrender.com/perfil";

  constructor(private httpClient:HttpClient) { }

  obtenerDatosPerfilAdmin():Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.urlPerfil}`);
   }


   
}
