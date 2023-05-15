import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Red } from 'src/app/clases/red';
import { RedesService } from 'src/app/servicios/redes.service';

@Component({
  selector: 'app-editarred',
  templateUrl: './editarred.component.html',
  styleUrls: ['./editarred.component.css']
})
export class EditarredComponent implements OnInit {
  id:number;
  red:Red = new Red();
  

  constructor(private redServicio:RedesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }


  onSubmit(){
    this.actualizarRed();
    window.location.href = '/perfil';
  }

  actualizarRed(){
    this.redServicio.actualizarRed(this.id,this.red).subscribe({next: (dato) => alert("Red Social actualizada con èxito."), error: (error) => console.log(error) });
   }
  
}
