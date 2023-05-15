import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../servicios/formulario.service';
import { Formulario } from '../clases/formulario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  formulario:Formulario = new Formulario();

  constructor(private formularioServicio:FormularioService) { }

  ngOnInit(): void {
   
  }

  onSubmit(){
    this.guardarFormulario();
  }

  guardarFormulario(){
    this.formularioServicio.agregarFormulario(this.formulario).subscribe(dato =>{
      console.log("Formulario enviado");
      window.location.href = '/contacto';
    })
  }

 

}
