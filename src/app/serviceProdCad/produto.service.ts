import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "../model/tela-produto";


@Injectable({
    providedIn: 'root'
})
export class ProdutoService {
    baseUrl:any;
    saveUrl = "http://localhost:9000/produtos"

    constructor(private http: HttpClient){}

    createProduto(produto:Produto):Observable<Produto>{
        console.log("Pegou = =====" + produto);

        return this.http.post(this.saveUrl,produto);
    }
}
