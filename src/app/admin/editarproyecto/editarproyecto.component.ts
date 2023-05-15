import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/clases/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-editarproyecto',
  templateUrl: './editarproyecto.component.html',
  styleUrls: ['./editarproyecto.component.css']
})
export class EditarproyectoComponent implements OnInit {

  id:number;
  proyecto:Proyecto = new Proyecto();

  constructor(private route:ActivatedRoute, private proyectoServicio:ProyectoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  onSubmit(){
    this.actualizarProyecto();
    window.location.href = '/proyectos_';
  }

  actualizarProyecto(){
    this.proyectoServicio.actualizarProyecto(this.id,this.proyecto).subscribe({next: (dato) => alert("Proyecto actualizado con èxito."), error: (error) => console.log(error) });
   }
  
}
