import { Component, OnInit, Input } from '@angular/core';
import { FactoryService } from 'app/main/factory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  constructor(public factory:FactoryService, private router: Router) { }

  @Input() cardTitle: string;
  @Input() cardSubTitle: string;
  @Input() cardContent: string;
  @Input() cardImg: string;
  @Input() cardImgAlt: string; 
  @Input() cardRouterLink: string;
  @Input() cardIcon: string;


  ngOnInit() {
  }

  routeTo(link: string) {
    if(link.includes("http")) {
      window.open(link)
    } else {
      this.router.navigate([link]);
    }
  }

}
