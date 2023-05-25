import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data, Transacciones } from 'src/app/model/transacciones.model';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {

  @Input() mensaje! : string;
  @Input() data! : Data;
  @Input() mostrar : Boolean = true;
  @Output() teclado = new EventEmitter<boolean>();
  inTransaction : boolean = false;
  labelBtn : string = "Realizar transaccion";

  constructor() { }

  ngOnInit() {

  }

  CleanData($event : any):void
  {
    this.mostrar = false;
    this.mensaje = "Por favor ingrese su tarjeta para inciar el proceso";
    this.labelBtn = "Realizar transaccion";
      sessionStorage.removeItem("card")
      sessionStorage.removeItem("pin")
      this.teclado.emit(true);
      this.inTransaction = false;

  }

  Transaccion(): void {
    if(!this.inTransaction){
      this.labelBtn = "Finalizar transaccion";
      this.teclado.emit(false);
      this.inTransaction = true;
    }else{
      this.CleanData(false);
    }
  }
}
