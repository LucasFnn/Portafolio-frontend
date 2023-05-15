import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formulario } from '../clases/formulario';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private httpClient:HttpClient) { }

  private urlForms = "http://localhost:8080/formularios";
  private urlFormsEliminar = "http://localhost:8080/formularios/eliminar";
  private urlFormsAdd = "http://localhost:8080/formularios/guardarformulario";


  obtenerListaFormularios():Observable<Formulario[]>{
    return this.httpClient.get<Formulario[]>(`${this.urlForms}`);
   }


   eliminarFormulario(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.urlFormsEliminar}/${id}`);
  }

  agregarFormulario(formulario:Formulario): Observable<Object>{
   return this.httpClient.post(`${this.urlFormsAdd}`, formulario)
}

}
