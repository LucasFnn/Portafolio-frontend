import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../clases/habilidad';


@Injectable({
  providedIn: 'root'
})
export class HabilidadService {


  private urlHabilidades = "http://localhost:8080/habilidades";
  private urlHabilidadesEliminar = "http://localhost:8080/habilidades/eliminar";
  private urlHabilidadesAgregar = "http://localhost:8080/habilidades/guardarhabilidad"
  private urlHabilidadesEditar = "http://localhost:8080/habilidades/{id}"

  constructor(private httpClient:HttpClient) { }

  obtenerListaHabilidades():Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(`${this.urlHabilidades}`);
   }


   eliminarHabilidad(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.urlHabilidadesEliminar}/${id}`);
  }

  agregarHabilidad(habilidad:Habilidad): Observable<Object>{
   return this.httpClient.post(`${this.urlHabilidadesAgregar}`, habilidad)
}

obtenerHabilidadPorId(id:number){
  return this.httpClient.get<Habilidad>(`${this.urlHabilidadesAgregar}/${id}`);

}

actualizarHabilidad(id:number, habilidad:Habilidad): Observable<Object>{
  return this.httpClient.put(`${this.urlHabilidades}/${id}`, habilidad);
}

}