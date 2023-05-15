import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Estudio } from 'src/app/clases/estudio';
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {


  estudios : Estudio[];

  constructor(private estudioServicio:EstudioService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerEstudios();
  }


  private obtenerEstudios(){
    this.estudioServicio.obtenerListaEstudios().subscribe(dato =>{
    this.estudios = dato;
    })
    }


  

    eliminarEstudio(id:number){

      this.estudioServicio.eliminarEstudio(id).subscribe(dato => {
        window.location.href = '/estudios';
      
      }), console.error();
    }

    agregarEstudio(){

      window.location.href = '/addestudio';
    }


    verEditarEstudio(id:number){
      this.router.navigate(['editarestudio', id]);
      
      }
}
