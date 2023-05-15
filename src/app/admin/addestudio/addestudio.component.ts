import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/clases/estudio';
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-addestudio',
  templateUrl: './addestudio.component.html',
  styleUrls: ['./addestudio.component.css']
})
export class AddestudioComponent implements OnInit {

  estudio:Estudio = new Estudio();
  constructor(private estudioServicio:EstudioService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.guardarEstudio();
  }


  guardarEstudio(){
    this.estudioServicio.agregarEstudio(this.estudio).subscribe(dato =>{
      console.log("Estudio guardado");
      window.location.href = '/estudios';
    })
  }

}
