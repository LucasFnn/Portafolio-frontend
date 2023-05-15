import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/clases/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades:Habilidad[];

  constructor(private habilidadServicio:HabilidadService, private route:ActivatedRoute, private router:Router) {
    
   }

  ngOnInit(): void {
this.obtenerHabilidades();
 
  }

  private obtenerHabilidades(){
    this.habilidadServicio.obtenerListaHabilidades().subscribe(dato =>{
    this.habilidades = dato;
    })
    }

  
 
    eliminarHabilidad(id:number){
    this.habilidadServicio.eliminarHabilidad(id).subscribe(dato => {
      window.location.href = '/habilidades';
    
    }), console.error();

  }

  agregarHabilidad(){
    window.location.href = '/addhabilidad';
  }


verEditarHabilidad(id:number){
this.router.navigate(['editarhabilidad', id]);

}

}
