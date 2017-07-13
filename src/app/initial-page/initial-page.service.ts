import { Injectable, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "../http-api.service";

@Injectable()
export class InitialPageService {
  idBoard = 93065748
  constructor(private http: HttpClient) {

  }

  pesquisarCards(nome: string) : Observable<Response>{
    const url = 'https://api.zenhub.io/p1/repositories/' + this.idBoard + '/board';
    return this.http.get(url);
  }

}
