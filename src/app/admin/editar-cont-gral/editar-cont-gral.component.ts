import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Texto } from 'src/app/clases/texto';
import { TextoService } from 'src/app/servicios/texto.service';

@Component({
  selector: 'app-editar-cont-gral',
  templateUrl: './editar-cont-gral.component.html',
  styleUrls: ['./editar-cont-gral.component.css']
})
export class EditarContGralComponent implements OnInit {

  id:number;
  texto:Texto = new Texto();
  constructor(private textoServicio:TextoService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  onSubmit(){
    this.actualizarTexto();
    window.location.href = '/general';
  }

  actualizarTexto(){
    this.textoServicio.actualizarTexto(this.id,this.texto).subscribe({next: (dato) => alert("Texto actualizado con èxito."), error: (error) => console.log(error) });
   }



}
