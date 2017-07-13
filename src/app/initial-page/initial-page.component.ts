import { Component, OnInit } from '@angular/core';
import {InitialPageService} from "./initial-page.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit {

  constructor(private initialPageService: InitialPageService) { }
  boardInformations = null;
  ngOnInit() {
    this.initialPageService.pesquisarCards('').subscribe((response: Response) => {
      this.boardInformations = response.json().pipelines;
    });
  }

}
