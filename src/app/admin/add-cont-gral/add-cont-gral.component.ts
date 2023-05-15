import { Component, OnInit } from '@angular/core';
import { Texto } from 'src/app/clases/texto';
import { TextoService } from 'src/app/servicios/texto.service';

@Component({
  selector: 'app-add-cont-gral',
  templateUrl: './add-cont-gral.component.html',
  styleUrls: ['./add-cont-gral.component.css']
})
export class AddContGralComponent implements OnInit {

  texto:Texto = new Texto();

  constructor(private textoServicio:TextoService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.guardarTexto();
  }


  guardarTexto(){
    this.textoServicio.agregarTexto(this.texto).subscribe(dato =>{
      console.log("Texto guardado");
      window.location.href = '/general';
    })
  }
}
