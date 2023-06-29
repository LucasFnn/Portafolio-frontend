import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Texto } from '../clases/texto';

@Injectable({
  providedIn: 'root'
})
export class TextoService {

  constructor(private httpClient:HttpClient) { }

  private urlTextos = "https://backend-lucasfnn.onrender.com/textos";
  private urlTextosEliminar = "https://backend-lucasfnn.onrender.com/textos/eliminar";
  private urlTextosAgregar = "https://backend-lucasfnn.onrender.com/textos/guardarproyecto";
  private urlTextosBuscar = "https://backend-lucasfnn.onrender.com/textos/buscar";

  obtenerListaTextos():Observable<Texto[]>{
    return this.httpClient.get<Texto[]>(`${this.urlTextos}`);
   }


   eliminarTexto(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.urlTextosEliminar}/${id}`);
  }

  agregarTexto(texto:Texto): Observable<Object>{
   return this.httpClient.post(`${this.urlTextosAgregar}`, texto)
}


actualizarTexto(id:number, texto:Texto): Observable<Object>{
  return this.httpClient.put(`${this.urlTextos}/${id}`, texto);
}

obtenerTexto(id:number): Observable<Object>{
  return this.httpClient.get(`${this.urlTextosBuscar}/${id}`);
}

}
