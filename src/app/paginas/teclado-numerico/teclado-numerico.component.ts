import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ServicioService } from './service/servicio.service';
import { Data, Respuesta, Transacciones } from 'src/app/model/transacciones.model';

@Component({
  selector: 'app-teclado-numerico',
  templateUrl: './teclado-numerico.component.html',
  styleUrls: ['./teclado-numerico.component.css']
})
export class TecladoNumericoComponent implements OnInit {

  servicio: ServicioService = new ServicioService();
  @Output() enviar = new EventEmitter<string>();
  @Output() API = new EventEmitter<Data>();
  @Output() mostrar = new EventEmitter<Boolean>();
  @Input() teclado : Boolean = true;
  total: string =  "";

  constructor() {}

  ngOnInit() {
  }

  onSave(variable:number):void{
    this.total = this.total + variable;
  }

  Guardar():void{
    const card = sessionStorage.getItem("card") || null;
    const pin = sessionStorage.getItem("pin") || null;
    if(card && !pin) {
      sessionStorage.setItem("pin", this.total);
      const dataCard : any = sessionStorage.getItem("data") || [];
      const responseCard = JSON.parse(dataCard).filter((item : any) => item.card == card && item.pin == this.total)
      if (responseCard.length > 0) {
        this.API.emit(responseCard[0].responce.data);
        this.enviar.emit("Informacion de la tarjeta");
        this.mostrar.emit(true);
        this.total = "";
        this.teclado = true;
      } else {
        sessionStorage.removeItem("card");
        sessionStorage.removeItem("pin");
        alert("Tarjeta no encontrada");
      }
    }else{
      this.enviar.emit("Debemos validar su información. Por favor ingrese el PIN de su tarjeta.");
      sessionStorage.setItem("card",this.total);
      this.total = "";
    }
  }

  Cancelar():void{
    this.total = "";
  }

}
