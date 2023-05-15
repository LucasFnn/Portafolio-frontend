import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estudio } from 'src/app/clases/estudio';
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-editarestudio',
  templateUrl: './editarestudio.component.html',
  styleUrls: ['./editarestudio.component.css']
})
export class EditarestudioComponent implements OnInit {

  id:number;
  estudio:Estudio = new Estudio();
  constructor(private estudioServicio:EstudioService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

   onSubmit(){
    this.actualizarEstudio();
    window.location.href = '/estudios';
   }


   actualizarEstudio(){
    this.estudioServicio.actualizarEstudio(this.id,this.estudio).subscribe({next: (dato) => alert("Estudio actualizado con èxito."), error: (error) => console.log(error) });
   }

}
