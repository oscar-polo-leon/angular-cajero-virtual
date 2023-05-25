import { Component } from '@angular/core';
import { Data, Respuesta } from './model/transacciones.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cajero-virtual';
  mensaje: string = "Por favor ingrese su tarjeta para inciar el proceso";
  data! : any;
  preuba! : Respuesta;
  teclado : Boolean = true;
  mostrar : Boolean = false;
  total: string =  "";


  ngOnInit() {
    sessionStorage.removeItem("card");
    sessionStorage.removeItem("pin")
    if(!sessionStorage.getItem("data")){
      sessionStorage.setItem("data", JSON.stringify([
        {card : "555",pin: "123",responce : {response : true, data : {monto : 50000, transaciones : [{fecha : "20230505", monto: 1000}]}}},
        {card : "444",pin: "123",responce : {response : true, data : {monto : 40000, transaciones : [{fecha : "20230505", monto: 1000}]}}},
        {card : "333",pin: "123",responce : {response : true, data : {monto : 60000, transaciones : [{fecha : "20230505", monto: 1000},{fecha : "20230506", monto: 5000}]}}},
      ]))
    };
  }

  Enviar($event : any):void
  {
    this.mensaje = $event;
  }

  API($event : any):void
  {

    this.data = $event;
  }

  ActivarTeclado($event : any):void
  {
    this.teclado = $event;
    this.data = null;
    this.total = "";
  }

  MostrarInfo($event :any) : void
  {
    this.mostrar = $event;
  }

  onSave(variable:number):void{
    this.total = this.total + variable;
  }

  Guardar():void{

    if(!this.total){
      alert("Valor invalido");
      return;
    }
    const card = sessionStorage.getItem("card") || null;
    const pin = sessionStorage.getItem("pin") || null;
    console.log("card", card, "pin", pin)
    if(card && !pin) {
      sessionStorage.setItem("pin", this.total);
      const dataCard : any = sessionStorage.getItem("data") || [];
      const responseCard = JSON.parse(dataCard).filter((item : any) => item.card == card && item.pin == this.total)
      if (responseCard.length > 0) {
        this.data = responseCard[0].responce.data
        this.mensaje = "Informacion de la tarjeta"
        this.total = "";
        this.teclado = true;
      } else {
        sessionStorage.removeItem("card");
        sessionStorage.removeItem("pin");
        alert("Tarjeta no encontrada");
      }
    }else{
      console.log("netor acoa")
      this.mensaje = "Debemos validar su información. Por favor ingrese el PIN de su tarjeta.";
      sessionStorage.setItem("card",this.total);
      this.total = "";
    }
  }

  Cancelar():void{
    this.total = "";
  }
}
