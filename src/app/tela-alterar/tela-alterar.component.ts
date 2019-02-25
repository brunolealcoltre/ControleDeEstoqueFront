import { Component, OnInit, Input } from '@angular/core';
import { Fabricante } from '../model/tela-fabricante';
import { AlterarId } from '../service-update/alterar.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tela-alterar',
  templateUrl: './tela-alterar.component.html',
  styleUrls: ['./tela-alterar.component.css']
})
export class TelaAlterarComponent implements OnInit {
  alterando :string
  model = new Fabricante();
  //t = [];

  constructor(private alterFabricante:AlterarId,private activeRoute: ActivatedRoute) { 
  }
 
  //@Input() nomeFabricante
  
  ngOnInit() {
     this.getFabricanteID();
     this.updateActive('id');
  }
 
 getFabricanteID(){
    this.alterFabricante.editarId1(this.activeRoute.snapshot.params['id'], (data)=>{
      this.model = data;
      //console.log(data);
      console.log(this.model);
    });
  }
   updateActive(id) {
     console.log("teste do update.component")
    this.alterFabricante.updateActive(this.activeRoute.snapshot.params['id'],this.model).subscribe();
   
  }

}
