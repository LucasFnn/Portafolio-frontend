import { Component, OnInit } from '@angular/core';
import { Estudio } from '../clases/estudio';
import { EstudioService } from '../servicios/estudio.service';

@Component({
  selector: 'app-estudiosver',
  templateUrl: './estudiosver.component.html',
  styleUrls: ['./estudiosver.component.css']
})
export class EstudiosverComponent implements OnInit {

  estudios:Estudio[];

  constructor(private estudioService:EstudioService) { }

  ngOnInit(): void {
this.obtenerEstudios();

  }

  private obtenerEstudios(){
    this.estudioService.obtenerListaEstudios().subscribe(dato =>{
    this.estudios = dato;
    })
    }

}
