import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { Formulario } from 'src/app/clases/formulario';
import { FormularioService } from 'src/app/servicios/formulario.service';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  formularios:Formulario[];

  constructor(private formularioServicio:FormularioService) { }

  ngOnInit(): void {
   this.obtenerFormularios();
  }

  private obtenerFormularios(){
    this.formularioServicio.obtenerListaFormularios().subscribe(dato =>{
    this.formularios = dato;
    })
    }

  
    eliminarFormulario(id:number){
      this.formularioServicio.eliminarFormulario(id).subscribe(dato => {
        window.location.href = '/formularios';
      
      }), console.error();
  
    }

}
