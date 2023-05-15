import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Habilidad } from 'src/app/clases/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-editarhabilidad',
  templateUrl: './editarhabilidad.component.html',
  styleUrls: ['./editarhabilidad.component.css']
})
export class EditarhabilidadComponent implements OnInit {
  id:number;
  habilidad: Habilidad;
  constructor(private habilidadServicio:HabilidadService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.habilidad = new Habilidad();
 
  }

  onSubmit(){
  this.actualizarHabilidad();
  window.location.href = '/habilidades';
  }


  actualizarHabilidad(){
    this.habilidadServicio.actualizarHabilidad(this.id,this.habilidad).subscribe({next: (dato) => alert("Habilidad actualizada con èxito."), error: (error) => console.log(error) });
   }
  


}
