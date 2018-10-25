import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seleccion-productos',
  templateUrl: './seleccion-productos.component.html',
  styleUrls: ['./seleccion-productos.component.css']
})
export class SeleccionProductosComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onProductSelected = new EventEmitter<Boolean>();

  constructor() { }

  ngOnInit() {
  }

  productSelected(){
    this.onProductSelected.emit(true);
  }

}
