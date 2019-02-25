import { Component, OnInit, Input } from '@angular/core';
import { FabricanteService } from '../service/fabrProd.service';
import { Fabricante } from '../model/tela-fabricante';
import { ListaFabricantes } from '../serviceListaFabr/listaFabricantes.service';
import { error } from 'util';

@Component({
  selector: 'app-tela-fabricante',
  templateUrl: './tela-fabricante.component.html',
  styleUrls: ['./tela-fabricante.component.css']
})
export class TelaFabricanteComponent implements OnInit {
  fabricante: Fabricante[];
  nomeFabricante:string
  model: Fabricante = new Fabricante();
  submitted: boolean;
  fabricantes: Array<any>;
  fabricantePut: Fabricante;
  //FabricanteLista:Fabricante[]=[];

  constructor(private fabSevico: FabricanteService, private listaFabricantes: ListaFabricantes) { }


  ngOnInit() {
    this.model = new Fabricante();
    this.getFab();
    this.listar();
  }
  getFab() {
    this.fabSevico.get().subscribe(data => {
      this.fabricante = data 
      console.log(data);
    })
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    this.save();
  }

  adicionar(){
    console.log(`adicioanando ${this.model.nomeFabricante}`)
  }

  save() {

    console.log("pegando " + this.model); location.reload()
    

    this.fabSevico.createFabricante(this.model)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  listar() {
    this.listaFabricantes.listar().subscribe(dados => this.fabricantes = dados);
  }
  deleteFabricante(id: string) {
    console.log('okok');  location.reload()

    this.fabSevico.deleteFabricante(id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
  }
}
