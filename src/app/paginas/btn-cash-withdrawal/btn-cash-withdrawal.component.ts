import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-cash-withdrawal',
  templateUrl: './btn-cash-withdrawal.component.html',
  styleUrls: ['./btn-cash-withdrawal.component.css']
})
export class BtnCashWithdrawalComponent implements OnInit {

  @Output() enviar = new EventEmitter<Boolean>();
  constructor() { }

  ngOnInit() {
  }

  onClickCash(amount:number):void{
    const card = sessionStorage.getItem("card") || null;
    const pin = sessionStorage.getItem("pin") || null;
    const dataCard : any = sessionStorage.getItem("data") || [];
    const data = JSON.parse(dataCard)

    data.map((item : any) => {
      if(item.card == card && item.pin == pin){
        item.responce.data.monto = item.responce.data.monto - amount;
        item.responce.data.transaciones.push({fecha: "19990101", monto: amount})
      }
    })
    sessionStorage.setItem("data", JSON.stringify(data));
    alert("Transaccion realizar con exito");
    this.enviar.emit(false);

  }

}
