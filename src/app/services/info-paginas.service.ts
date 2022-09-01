import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginasService {
  info: InfoPagina = {};

  cargada: boolean = false;

  constructor( private http: HttpClient) { 
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
}