import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginasService {
  info: InfoPagina = {};

  cargada: boolean = false;
  equipo: any[] = [];


  constructor( private http: HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();

  }
  private cargarInfo(){
    console.log('Servicio de pagina');
    //Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: InfoPagina) =>{
          this.cargada = true;
          this.info = resp;
          console.log(resp);
          console.log(this.cargada);
        });
  }
  private cargarEquipo(){
    this.http.get('https://angular-html-2aa29-default-rtdb.firebaseio.com/equipo.json')
        .subscribe((resp: any) =>{
        this.equipo = resp;
        console.log(resp);  
      });
  }  
}