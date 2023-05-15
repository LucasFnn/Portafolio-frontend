import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/clases/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-addhabilidad',
  templateUrl: './addhabilidad.component.html',
  styleUrls: ['./addhabilidad.component.css']
})
export class AddhabilidadComponent implements OnInit {

  habilidad :Habilidad = new Habilidad();

  constructor(private habilidadService:HabilidadService) { }

  ngOnInit(): void {
  }

  guardarRed(){
    this.habilidadService.agregarHabilidad(this.habilidad).subscribe(dato =>{
      console.log("Habilidad guardada");
      window.location.href = '/habilidades';
    })
  }

  onSubmit(){
    console.log(this.habilidad);
    this.guardarRed();
  }
}
