import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Red } from '../clases/red';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedesService {

  
  private urlRedes = "http://localhost:8080/redes";
  private urlEliminarRedes = "http://localhost:8080/redes/eliminar";
  private urlGuardarRed = "http://localhost:8080/redes/guardarred";

  constructor(private httpClient:HttpClient) { }

  obtenerListaRedes():Observable<Red[]>{
    return this.httpClient.get<Red[]>(`${this.urlRedes}`);
   }


   eliminarRed(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.urlEliminarRedes}/${id}`);
  }

  actualizarRed(id:number, red:Red): Observable<Object>{
    return this.httpClient.put(`${this.urlRedes}/${id}`, red);
  }


  agregarRed(red:Red){
    return this.httpClient.post(`${this.urlGuardarRed}`, red);
  }
 
}
