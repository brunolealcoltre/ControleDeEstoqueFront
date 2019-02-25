import { Injectable } from '@angular/core';

import { Fabricante } from '../model/tela-fabricante';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/tela-produto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FabricanteService {
  baseUrl: any;
  saveUrl = "http://localhost:9000/estoque/"
  delUrl = "http://localhost:9000/estoque/"
  updateUrl = "http://localhost:9000/estoque/{codigo}"
  delProd = "http://localhost:9000/produtos/"


  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Fabricante[]>("http://localhost:9000/estoque/todos");
  }

  getProduto() {
    return this.http.get<Produto[]>("http://localhost:9000/produtos/todos");
  }

  createFabricante(fabricante: Object): Observable<Object> {
    console.log("Pegou = ====== " + fabricante);

    return this.http.post(this.saveUrl, fabricante);
    /*  return this.http.post(`${this.baseUrl}/create`,fabricante); */
  }
  deleteFabricante(id: string): Observable<any> {
    console.log("agora vai")
    return this.http.delete(this.delUrl + id);
    // return this.http.delete(`{this.baseUrl}/${id}`,{responseType:'text'});
  }

  deleteProduto(id:string):Observable<any>{
    console.log('testandoProd')
    return this.http.delete(this.delProd + id);
  }


}