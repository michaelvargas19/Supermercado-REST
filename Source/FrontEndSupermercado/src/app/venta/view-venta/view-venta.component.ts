import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Venta } from '../../modelo/venta';
import * as jsPDF from 'jspdf'; 


@Component({
  selector: 'app-view-venta',
  templateUrl: './view-venta.component.html',
  styleUrls: ['./view-venta.component.css']
})
export class ViewVentaComponent implements OnInit {

  @Input() venta: Venta;

  constructor() { }

  ngOnInit() {
  
  }

  

 getTotal(){
  let t = 0;
  for(let d of this.venta.detalles){
    t += d.producto.valor * d.cantidad;
  }

  return t;
}

}
