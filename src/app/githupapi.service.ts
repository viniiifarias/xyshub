import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class GitHubApi {

  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'token f7810a4f69f8b3e0ec1f437e1a2f2d1c78169b29');

    headers.append('Content-Type', 'application/json; charset=utf-8');

    headers.append('Accept', 'application/json');
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
}
