import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {

    public mapPageGrade = { tela1: false, tela3: false, tela4: false };
    dadosForm;
    url = 'https://api.myjson.com/bins/wxdig';

    constructor(
        private http: HttpClient
    ) { }

    routePagGrade(page) {
        this.mapPageGrade = { tela1: false, tela3: false, tela4: false };
        this.mapPageGrade[page] = true;
    }

    buscarForm() { return this.http.get<any>(this.url) };
}

