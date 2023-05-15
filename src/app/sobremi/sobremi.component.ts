import { Component, OnInit } from '@angular/core';
import { TextoService } from '../servicios/texto.service';
import { Texto } from '../clases/texto';
import { HabilidadService } from '../servicios/habilidad.service';
import { Habilidad } from '../clases/habilidad';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {


  texto: any = new Texto();
  habilidades:Habilidad[];
  
  constructor(private textoServicio: TextoService, private habilidadServicio:HabilidadService) { }

  ngOnInit(): void {
    this.obtenerTextoAbout();
    this.obtenerHabilidades();


  }


  obtenerTextoAbout() {
    this.textoServicio.obtenerTexto(1).subscribe(dato => {
      this.texto = dato;

    })
  }


  private obtenerHabilidades(){
    this.habilidadServicio.obtenerListaHabilidades().subscribe(dato =>{
    this.habilidades = dato;
    })
    }

  



  }
  






