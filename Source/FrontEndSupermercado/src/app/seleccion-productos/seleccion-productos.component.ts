import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Producto } from '../modelo/producto';

@Component({
  selector: 'app-seleccion-productos',
  templateUrl: './seleccion-productos.component.html',
  styleUrls: ['./seleccion-productos.component.css']
})
export class SeleccionProductosComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onProductSelected = new EventEmitter<Boolean>();

  productos : Producto[]=[];

  constructor(private restClient: ProductoService) { }

  ngOnInit() {
    this.listar();    
  }

  productSelected(){
    this.onProductSelected.emit(true);
  }

  listar(){
    this.restClient.findAll().subscribe(datos => {
      this.productos = datos;
      alert(this.productos.length);
    },
    error => {     alert("error");
  });
  }


}
