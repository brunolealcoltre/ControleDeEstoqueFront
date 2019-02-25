import { RouterModule, Routes } from "@angular/router";
import { TelaFabricanteComponent } from "./tela-fabricante/tela-fabricante.component";
import { TelaInicialComponent } from "./tela-inicial/tela-inicial.component";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { TelaProdutoComponent } from "./tela-produto/tela-produto.component";
import { TelaVendasComponent } from "./tela-vendas/tela-vendas.component";
import{TelaAlterarComponent}from "./tela-alterar/tela-alterar.component"


const APP_ROUTES: Routes = [
    { path: 'telaFabricante',component:TelaFabricanteComponent},
    { path: 'telaInicia',component:TelaInicialComponent},
    { path: 'telaProduto',component:TelaProdutoComponent},
    { path: 'telaVendas',component:TelaVendasComponent},
    {path:'telaAlterar/:id',component:TelaAlterarComponent},
    { path: '',component:TelaInicialComponent},

];
export const rounting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);