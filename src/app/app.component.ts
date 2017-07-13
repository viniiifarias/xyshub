import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  menuList = [
    {'name': 'Maintenance', 'route': '/maintenance'},
    {'name': 'MI', 'route': '/'},
    {'name': 'ANTT', 'route': '/'},
    {'name': 'MMA', 'route': '/'},
    {'name': 'MS', 'route': '/'},
  ];
  constructor(private router:Router, private http: Http){}

  activeMenu = function(menuRoute){
    this.activeRouteName = menuRoute;
  };

  activeRouteName = this.router.url;
}
