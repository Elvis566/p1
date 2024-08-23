import { Component } from '@angular/core';
import { ApiService } from '../Servicios/api.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {

  dataCategoria:any

  constructor(private apis:ApiService){

  }

  ngOnInit(){
    this.getC();
  }

  saveCategoria(categoria:any){
    this.apis.saveC(categoria.value).subscribe()
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
}
