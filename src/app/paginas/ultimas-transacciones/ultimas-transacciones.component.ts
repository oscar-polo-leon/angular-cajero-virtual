import { Component, Input, OnInit } from '@angular/core';
import { Transacciones } from 'src/app/model/transacciones.model';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-ultimas-transacciones',
  templateUrl: './ultimas-transacciones.component.html',
  styleUrls: ['./ultimas-transacciones.component.css']
})
export class UltimasTransaccionesComponent implements OnInit {

  @Input() transacciones!: Transacciones[];

  constructor() { }

  ngOnInit() {
    this.transacciones = this.transacciones.slice(this.transacciones.length-5)
  }

}
