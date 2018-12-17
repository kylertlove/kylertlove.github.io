import { Component, OnInit } from '@angular/core';
import { FactoryService } from '../main/factory.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor(public factory:FactoryService) { }

  ngOnInit() {
  }

  redirect(url:string){
    window.open(url);
  }

}
