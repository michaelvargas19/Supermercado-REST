import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-ventas',
  templateUrl: './list-ventas.component.html',
  styleUrls: ['./list-ventas.component.css']
})
export class ListVentasComponent implements OnInit {

  @Output() editarVenta = new EventEmitter<Boolean>();

  constructor() { }

  ngOnInit() {
  }

  emitir(){
    this.editarVenta.emit(true);
  }

  

}
