import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/tela-produto';
import { ProdutoService } from '../serviceProdCad/produto.service';
import { FabricanteService } from '../service/fabrProd.service';
import { ListaFabricantes } from '../serviceListaFabr/listaFabricantes.service';
import { Fabricante } from '../model/tela-fabricante';




@Component({
  selector: 'app-tela-produto',
  templateUrl: './tela-produto.component.html',
  styleUrls: ['./tela-produto.component.css']
})
export class TelaProdutoComponent implements OnInit {
  produto : Produto[]
  fabricante:Fabricante[]
  model:Produto = new Produto();
  teste
  submitted: boolean;


  constructor(private prodServico : FabricanteService,
              private produtoServ : ProdutoService,
              private list:ListaFabricantes
              ) { }

  ngOnInit() {
    this.model = new Produto();
 /*    this.model.Fabricante.nomeFabricante = "fabricante dahor" */
    this.getFab() 
     this.listar() 
    this.getProd();
    console.log(this.model.id); 
  }
  getProd(){
    this.prodServico.getProduto().subscribe(data =>{
      this.produto =  data
    })
  }

  getFab() {
    this.prodServico.get().subscribe(data => {
      this.fabricante = data 
      console.log(data);
    })
  }
  teste2(item){
    console.log("Pegannndop teste2" + item.codigo);
    
  }

  listar(){
    this.list.listar().subscribe(data => this.fabricante = data
    )
  }
  onSubmit(){
    this.submitted = true;
    console.log(this.model);
   /*  this.save(); */
  }
  save(){
    console.log("pegando "+ this.model.nomeProduto);
    console.log("pegando "+ this.model.preco);
    console.log("pegando "+ this.model.quantidade);
    console.log("pegando "+ this.teste.nomeFabricante); 
      this.model.Fabricante.id = this.teste.codigo

     /*  this.produtoServ.createProduto(this.model)
        .subscribe(data => console.log(data),
          error => console.log(error)); */  
  }
  deleteProduto(id: string){
    location.reload();
    console.log('ok');
    
    this.prodServico.deleteProduto(id)
    .subscribe(
      data => {
        console.log(data);
      },
    error => console.log(error));
  }

  

}
