import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Http } from '@angular/http';
import { Observable } from "rxjs";
import { callbackify } from "util";

@Injectable({
    providedIn: 'root'
})

export class AlterarId {
    Url = 'http://localhost:9000/estoque/';
    updateUrl = 'http://localhost:9000/estoque';

    constructor(private http: Http) { }

    editarId1(id: string, callback) {
        console.log(`${this.Url}` + id)
        return this.http.get(`${this.Url}` + id).subscribe(response => {
            let resp = response.json();
            callback(resp);
        });
    }
    updateActive(id: string, value: any): Observable<Object> {
        console.log("teste do update.service+++++")
        return this.http.put(`${this.updateUrl}/${id}`, value);
    }

        }
    


