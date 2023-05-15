import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Texto } from 'src/app/clases/texto';
import { TextoService } from 'src/app/servicios/texto.service';

@Component({
  selector: 'app-contenido-general',
  templateUrl: './contenido-general.component.html',
  styleUrls: ['./contenido-general.component.css']
})
export class ContenidoGeneralComponent implements OnInit {

  textos:Texto[];


  constructor(private router:Router,  private textoServicio:TextoService) { }

  ngOnInit(): void {
    this.obtenerTextos();
  }

  private obtenerTextos(){
    this.textoServicio.obtenerListaTextos().subscribe(dato =>{
    this.textos = dato;
    })
    }


  agregarTexto(){
    window.location.href = '/addtexto';
  }

  verEditarTexto(id:number){
    this.router.navigate(['editartexto', id]);
  }

  eliminarTexto(id:number){
    this.textoServicio.eliminarTexto(id).subscribe(dato =>{
      window.location.href = '/general'; 
    })
  }

  

 

}
