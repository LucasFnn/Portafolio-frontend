import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/clases/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-addproyecto',
  templateUrl: './addproyecto.component.html',
  styleUrls: ['./addproyecto.component.css']
})
export class AddproyectoComponent implements OnInit {

  proyecto:Proyecto = new Proyecto();

  constructor( private proyectoServicio:ProyectoService) { }

  ngOnInit(): void {

  }

onSubmit(){
  this.guardarProyecto();
}

guardarProyecto(){
  this.proyectoServicio.agregarProyecto(this.proyecto).subscribe(dato =>{
    console.log("Proyecto guardado");
    window.location.href = '/proyectos_';
  })
}

}
