import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Red } from '../clases/red';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedesService {

  
  private urlRedes = "https://backend-lucasfnn.onrender.com/redes";
  private urlEliminarRedes = "https://backend-lucasfnn.onrender.com/redes/eliminar";
  private urlGuardarRed = "https://backend-lucasfnn.onrender.com/redes/guardarred";

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
