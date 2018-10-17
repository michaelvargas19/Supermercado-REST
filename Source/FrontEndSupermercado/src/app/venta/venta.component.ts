import { Component, OnInit } from '@angular/core';
import { VentaService } from '../servicios/venta.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  constructor(private restClient: VentaService) { }

  ngOnInit() {
  }

  

}
