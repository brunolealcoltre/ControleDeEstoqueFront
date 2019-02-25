import { Component, OnInit } from '@angular/core';
import { AlterarId } from '../service-update/alterar.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { Produto } from 'ControleDeEstoqueProdutoMinas/src/app/model/tela-produto';

@Component({
  selector: 'app-tela-altera-prod',
  templateUrl: './tela-altera-prod.component.html',
  styleUrls: ['./tela-altera-prod.component.css']
})
export class TelaAlteraProdComponent implements OnInit {
  //model = new Produto();
  
  constructor(private alterProduto:AlterarId,private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  // this.getProdutoId();
  }
  
 /* getProdutoId(){
    this.alterProduto.editarProd(this.activeRoute.snapshot.params['id'],(data)=>{
      this.model = data;
      console.log(this.model);
    });
  }
  updateActiveProd(){
    this.alterProduto.updateActiveProd(this.activeRoute.snapshot.params['id'],this.model).subscribe();
  }*/
}