import { Component, OnInit } from '@angular/core';
import { VentaService } from '../servicios/venta.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  showAdd= false;
  showEdit= false;
  showList= false;
  showView= false;

  constructor(private restClient: VentaService) { }

  ngOnInit() {
  }

  agregarProducto(){
    this.showAdd = true;
    this.showEdit = false;
    this.showList = false;
    this.showView = false;
  }

  listaVentas(event){
    this.showAdd = false;
    this.showEdit = false;
    this.showList = true;
    this.showView = false;
  }

  verVenta(){
    this.showAdd = false;
    this.showEdit = false;
    this.showList = false;
    this.showView = true;
  }

  editarVenta(event){
    this.showAdd = false;
    this.showEdit = true;
    this.showList = false;
    this.showView = false;
  }
  
  borrarVenta(event){
    this.showAdd = false;
    this.showEdit = false;
    this.showList = true;
    this.showView = false;
  }

}
