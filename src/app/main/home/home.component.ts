import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FactoryService } from 'app/main/factory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isNavbarCollapsed = true;

  constructor(public factory:FactoryService) {
  }

  ngOnInit() {

  }
  
  routeTo =(loc) => {
    if(loc == 'facebook'){
      window.open('https://www.facebook.com/kyler.love');
    }else if(loc == 'github'){
      window.open('https://github.com/kylertlove');
    }else if(loc == 'insta'){
      window.open('https://www.instagram.com/love.de.kyler/');
    }else if(loc == 'linkedin'){
      window.open('https://www.linkedin.com/in/kyler-love-86813861/');
    }
  }

  darkmode() {
    this.factory.updateSession();
    this.changeBG();
  }

  changeBG(){
    if(this.factory.isDarkMode) {
      document.body.style.backgroundColor = 'darkgray';
    }else{
      document.body.style.backgroundColor = 'white';
    }
  }

  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
 }
}
