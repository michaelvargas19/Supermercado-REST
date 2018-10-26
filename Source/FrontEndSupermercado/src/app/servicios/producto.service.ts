import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Producto } from '../modelo/producto';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductoService {

  constructor(private http: HttpClient) { }


  addProducto(producto: Producto){
    
    return this.http.post('http://localhost:8080/producto/add', producto)
      .subscribe(
        res => {
          return true;
        },
        err => {
          return false;
        }
      );
  }

  findZonaById (id: number): Observable <Producto>{
    
    return this.http.get<Producto>('http://localhost:8080/producto/'+id,
  {withCredentials: true});
}

//-----------------------------------------
findAll(): Observable<Producto[]> {
  return this.http.get<Producto[]>('http://localhost:8080/producto');
}
//-----------------------------------------

}



