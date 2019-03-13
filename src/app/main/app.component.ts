import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FactoryService } from 'app/main/factory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public _factoryService: FactoryService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this._factoryService.prepareApp();
  }

}
