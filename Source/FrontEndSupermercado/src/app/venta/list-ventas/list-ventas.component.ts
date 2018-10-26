import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-ventas',
  templateUrl: './list-ventas.component.html',
  styleUrls: ['./list-ventas.component.css']
})
export class ListVentasComponent implements OnInit {

  @Output() verVenta = new EventEmitter<Boolean>();
  @Output() editarVenta = new EventEmitter<Boolean>();
  @Output() borrarVenta = new EventEmitter<Boolean>();

  constructor() { }

  ngOnInit() {
  }

  ver(){
    this.verVenta.emit(true);
  }

  editar(){
    this.editarVenta.emit(true);
  }

  borrar(){
    this.borrarVenta.emit(true);
  }

  

}
