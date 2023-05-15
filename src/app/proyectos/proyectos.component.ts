import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../clases/proyecto';
import { ProyectoService } from '../servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos:Proyecto[];

  constructor(private proyectoServicio:ProyectoService) { }

  ngOnInit(): void {
    this.obtenerProyectos();
  }

  private obtenerProyectos(){
    this.proyectoServicio.obtenerListaProyectos().subscribe(dato =>{
    this.proyectos = dato;
    })
    }




}
