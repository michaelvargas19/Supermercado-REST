import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Producto } from '../modelo/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  producto : Producto;

  constructor(private restClient: ProductoService) { }

  ngOnInit() {
      this.producto = new Producto();
  }

  addProducto(){
    
    if(this.restClient.addProducto(this.producto)){
      alert("Se agregó el Producto");
      this.producto = new Producto();
    }else{
      alert("Ha ocurrido un error");
    }
   
  }

}
