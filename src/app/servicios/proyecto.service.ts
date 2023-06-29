import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../clases/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private httpClient:HttpClient) { }


  private urlProyectos = "https://backend-lucasfnn.onrender.com/proyectos";
  private urlProyectosAgregar = "https://backend-lucasfnn.onrender.com/proyectos/guardarproyecto";
  private urlProyectosEliminar = "https://backend-lucasfnn.onrender.com/proyectos/eliminar";

  obtenerListaProyectos():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(`${this.urlProyectos}`);
   }

   eliminarProyecto(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.urlProyectosEliminar}/${id}`);
  }

  agregarProyecto(proyecto:Proyecto): Observable<Object>{
    return this.httpClient.post(`${this.urlProyectosAgregar}`, proyecto)
 }
   
 actualizarProyecto(id:number, proyecto:Proyecto): Observable<Object>{
  return this.httpClient.put(`${this.urlProyectos}/${id}`, proyecto);
}
}
