import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  saveC(categoria:any){
    return this.http.post('http://127.0.0.1:8000/api/saveC',{
      categoria:categoria
    })
  }

  obtenerC(){
    return this.http.get('http://127.0.0.1:8000/api/obtenerC')
  }

  saveE(evento:any, categorita_id:any){
    return this.http.post('http://127.0.0.1:8000/api/saveE',{
      evento:evento,
      categorita_id: categorita_id
    })
  }

  obtenerE(id:any){
    return this.http.get('http://127.0.0.1:8000/api/obtenerE/'+id)
  }


}
