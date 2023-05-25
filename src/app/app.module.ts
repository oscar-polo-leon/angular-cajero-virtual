import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TecladoNumericoComponent } from './paginas/teclado-numerico/teclado-numerico.component';
import { PantallaPrincipalComponent } from './paginas/pantalla-principal/pantalla-principal.component';
import { TableModule } from 'primeng/table';
import { UltimasTransaccionesComponent } from './paginas/ultimas-transacciones/ultimas-transacciones.component';
import { BtnCashWithdrawalComponent } from './paginas/btn-cash-withdrawal/btn-cash-withdrawal.component';

@NgModule({
  declarations: [
    AppComponent,
    TecladoNumericoComponent,
    PantallaPrincipalComponent,
    UltimasTransaccionesComponent,
    BtnCashWithdrawalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
