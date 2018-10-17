import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Venta } from '../modelo/venta';

@Injectable()
export class VentaService {

  constructor(private http: HttpClient) { }

  addVenta(venta: Venta){
    
    return this.http.post('http://localhost:8080/venta/add', venta)
      .subscribe(
        res => {
          return true;
        },
        err => {
          return false;
        }
      )   ;
  }

}
