import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formulario } from '../clases/formulario';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private httpClient:HttpClient) { }

  private urlForms = "https://backend-lucasfnn.onrender.com/formularios";
  private urlFormsEliminar = "https://backend-lucasfnn.onrender.com/formularios/eliminar";
  private urlFormsAdd = "https://backend-lucasfnn.onrender.com/formularios/guardarformulario";


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
