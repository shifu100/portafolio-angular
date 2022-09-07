import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
   cargando:boolean = true;
   productos: Producto[] = [];
   productosFiltrado: Producto[] = [];
  
  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos(){
    return new Promise( ( resolve, reject ) => {
      this.http.get('https://angular-html-2aa29-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe( ( resp: any) => {
          this.productos = resp;
          this.cargando= false;
        });
    });    
  }

  getProducto( id: string){
    console.log('id:'+id);
    return this.http.get(`https://angular-html-2aa29-default-rtdb.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto( valor: string) {
    if ( this.productos.length === 0 ){//si hay datos cargar productos
      this.cargarProductos().then ( () => {
        this.filtrarProductos( valor );
      });
    } else{
      this.filtrarProductos( valor );
    }
     
  }
  private filtrarProductos( valor: string){
    this.productosFiltrado = [];
    valor = valor.toLocaleLowerCase();

    this.productos.forEach( (prod:any) => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if ( prod.categoria.indexOf( valor ) >= 0 || tituloLower.indexOf( valor ) >= 0){
          this.productosFiltrado.push( prod );
      }
    });
  }
}