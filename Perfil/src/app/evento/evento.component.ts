import { Component } from '@angular/core';
import { ApiService } from '../Servicios/api.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
// import { NgFor } from '@angular/common';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './evento.component.html',
  styleUrl: './evento.component.css'
})
export class EventoComponent {
  dataCategoria:any
  dataEvent:any


  constructor(private apis:ApiService) {}


  ngOnInit(){
    this.getC();
    this.getE(1)

  }

  saveEvent(evento:any, categoria_id:any){
    this.apis.saveE(evento.value, categoria_id.value).subscribe()
  }

  getC(){
    this.apis.obtenerC().subscribe({
      next:(data:any)=>{
        this.dataCategoria= data.categorias
      },error:(e:any)=>{
        console.log(e);
      }
    })
  }

  getE(id:any){
    console.log(id.value);
    this.apis.obtenerE(id.value).subscribe({
      next:(data:any)=>{
        this.dataEvent = data.eventos
        console.log(this.dataEvent.id);
      },error:(e:any)=>{
        console.log(e);
      }
    })
  }

}
