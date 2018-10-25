import { Component, OnInit } from '@angular/core';
import { Venta } from '../../modelo/venta';
import { VentaService } from '../../servicios/venta.service';
import { ProductoService } from '../../servicios/producto.service';
import { Detalle } from '../../modelo/detalle';
import { Producto } from '../../modelo/producto';

@Component({
  selector: 'app-add-venta',
  templateUrl: './add-venta.component.html',
  styleUrls: ['./add-venta.component.css']
})
export class AddVentaComponent implements OnInit {

  venta :Venta;
  showSelecter = true;
  

  constructor(private restClient: VentaService, private restClient2: ProductoService) { }

  ngOnInit() {
    this.venta = new Venta();
    this.showSelecter = true;
  }

  addVenta(){
    let det = new Detalle();
    
    this.restClient2.findZonaById(1).subscribe(
      res => {
        det.producto=res;
      },
      err => {
        alert("error");
      }
    )
    ;
    this.venta.detalles.push(det);
    this.venta.detalles.push(new Detalle());
    this.venta.detalles.push(new Detalle());
    
    
    if(this.restClient.addVenta(this.venta)){
      alert("Se agregó el Producto");
      this.venta = new Venta();
    }else{
      alert("Ha ocurrido un error");
    }
   
  }

  onProductSelected(event){
    alert("llego el producto");
    this.showSelecter = false;
  }

} 
