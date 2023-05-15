import { Component, OnInit } from '@angular/core';
import { Red } from 'src/app/clases/red';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-addred',
  templateUrl: './addred.component.html',
  styleUrls: ['./addred.component.css']
})
export class AddredComponent implements OnInit {

  red:Red = new Red();

  constructor( private redServicio:RedesService) { }

  ngOnInit(): void {
  }


  onSubmit(){
    this.guardarRed();
  }

  
  guardarRed(){
    this.redServicio.agregarRed(this.red).subscribe(dato =>{
      console.log("Red guardada");
      window.location.href = '/perfil';
    })
  }

}
