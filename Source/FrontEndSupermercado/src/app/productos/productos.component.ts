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
    
    this.producto.nombre = "Manzana Verde";
    this.producto.sku = "FRUT-MANZ-VE-1"
    this.producto.uniMedida = "unidad";
    this.producto.valor = 2000;
    this.producto.descuento = 0;

        if(this.restClient.addProducto(this.producto)){
          this.producto = new Producto();
        }else{
          alert("Ha ocurrido un error");
        }

    this.producto.nombre = "Manzana Roja";
    this.producto.sku = "FRUT-MANZ-RO-2"
    this.producto.uniMedida = "unidad";
    this.producto.valor = 2000;
    this.producto.descuento = 0;

        if(this.restClient.addProducto(this.producto)){
          this.producto = new Producto();
        }else{
          alert("Ha ocurrido un error");
        }

    this.producto.nombre = "Banano Tradicional";
    this.producto.sku = "FRUT-BANA-TR-1"
    this.producto.uniMedida = "unidad";
    this.producto.valor = 500;
    this.producto.descuento = 0;

        if(this.restClient.addProducto(this.producto)){
          this.producto = new Producto();
        }else{
          alert("Ha ocurrido un error");
        }

    this.producto.nombre = "Banano Bocadillo";
    this.producto.sku = "FRUT-BANA-BO-2"
    this.producto.uniMedida = "unidad";
    this.producto.valor = 500;
    this.producto.descuento = 0;
    
        if(this.restClient.addProducto(this.producto)){
          this.producto = new Producto();
        }else{
          alert("Ha ocurrido un error");
        }
   
  }

}
