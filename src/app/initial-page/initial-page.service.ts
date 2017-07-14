import { Injectable, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "../http-api.service";
import {GitHubApi} from "../githupapi.service";

@Injectable()
export class InitialPageService {
  idBoard = 93065748
  constructor(private http: HttpClient, private githupApi: GitHubApi) {

  }

  pesquisarCards(nome: string) : Observable<Response>{
    const url = 'https://api.zenhub.io/p1/repositories/' + this.idBoard + '/board';
    return this.http.get(url);
  }

  pesquisarCardsGit(nome: string) : Observable<Response>{
    const url = 'https://api.github.com/users/viniiifarias/repos';
    return this.githupApi.get(url);
  }

}
