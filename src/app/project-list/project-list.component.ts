import { Component, OnInit } from '@angular/core';
import { FactoryService } from '../main/factory.service';
import { ProjectItem } from '../models/project-item';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projectItems: ProjectItem[] = [
    new ProjectItem("Drones", "HTML5 Game", "Drones is an Arcade style space shooting game written in TypeScript", "/assets/images/drones.png", "Drones", "/drones", "fa-rocket"),
    new ProjectItem("NASA API", "Armageddon Tracker", " NASA api that tracks 'near earth objects'", "/assets/images/space.jpg", "NASA", "/nasa", "fa-hand-spock-o"),
    new ProjectItem("POE", "Top Down Game", "Java/Open GL Top Down Shooter", "/assets/images/poe.png", "POE", "https://github.com/kylertlove/poe", "fa-bullseye"),
    new ProjectItem("Fulcrum", "Electron Network Monitoring Tool", "Network Monitoring tool", "/assets/images/no-img.jpg", "fulcrum", "https://github.com/kylertlove/fulcrum", "fa-tachometer"),
    new ProjectItem("ng-statistics", "Angular Statistics Module", "Abstracted Statistics/Probability Library", "/assets/images/Statistics.jpg", "ng-statistics", "https://github.com/kylertlove/ng-statistics", "fa-bar-chart"),
    new ProjectItem("Angular/Electron", "App Boilerplate", "Baseline Build for Angular 5/Electron Application", "/assets/images/no-img.jpg", "boilerplate", "https://github.com/kylertlove/electron-angular-boilerplate", "fa-terminal")
  ];

  constructor(public factory:FactoryService) { 
  }

  ngOnInit() {
  }

  redirect(url:string){
    window.open(url);
  }

}
