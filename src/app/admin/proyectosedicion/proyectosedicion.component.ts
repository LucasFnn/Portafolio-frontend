import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/clases/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectosedicion',
  templateUrl: './proyectosedicion.component.html',
  styleUrls: ['./proyectosedicion.component.css']
})
export class ProyectosedicionComponent implements OnInit {

  proyectos:Proyecto[];

  constructor(private proyectoServicio:ProyectoService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerProyectos();
  }

  
  agregarProyecto(){
    window.location.href = '/addproyecto';
  }

  verEditarProyecto(id:number){
    this.router.navigate(['editarproyecto', id]);
  }

  eliminarProyecto(id:number){
    this.proyectoServicio.eliminarProyecto(id).subscribe(dato => {
      window.location.href = '/proyectos_';
    
    }), console.error();
  }

  private obtenerProyectos(){
    this.proyectoServicio.obtenerListaProyectos().subscribe(dato =>{
    this.proyectos = dato;
    })
    }
}
