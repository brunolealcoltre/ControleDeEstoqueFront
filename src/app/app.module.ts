import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaFabricanteComponent } from './tela-fabricante/tela-fabricante.component';
import { rounting } from './app.routing';
import { TelaProdutoComponent } from './tela-produto/tela-produto.component';
import { TelaVendasComponent } from './tela-vendas/tela-vendas.component';
import {FabricanteService} from './service/fabrProd.service';
import { ProdutoService } from './serviceProdCad/produto.service';
import {ListaFabricantes} from './serviceListaFabr/listaFabricantes.service';
import{HttpClientModule} from '@angular/common/http';
import { TelaAlterarComponent } from './tela-alterar/tela-alterar.component';
import { AlterarId } from './service-update/alterar.service';


//import { from } from 'rxjs';
//import { DeletarFabricantesComponent } from './deletar-fabricantes/deletar-fabricantes.component';


@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    TelaFabricanteComponent,
    TelaProdutoComponent,
    TelaVendasComponent,
    TelaAlterarComponent
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    rounting,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [FabricanteService,ProdutoService,ListaFabricantes,AlterarId,],
  bootstrap: [AppComponent]
})
export class AppModule { }
