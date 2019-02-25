import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Fabricante } from "../model/tela-fabricante";





@Injectable()
export class ListaFabricantes{
   
    Url = 'http://localhost:9000/estoque/todos';
   

    constructor (private http:HttpClient){} 
 
    listar(){
        return this.http.get<Fabricante[]>(`${this.Url}`);
    }
 
}