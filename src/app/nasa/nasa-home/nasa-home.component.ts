import { Component, OnInit } from '@angular/core';
import { NasaService } from '../service/nasa.service';
import { NasaResponseObject } from '../models/NasaObjects';
import { FactoryService } from '../../main/factory.service';

@Component({
  selector: 'app-nasa-home',
  templateUrl: './nasa-home.component.html',
  styleUrls: ['./nasa-home.component.css']
})
export class NasaHomeComponent implements OnInit {

  nearEarthObjects:NasaResponseObject;
  date:string;
  avgSize:number;
  avgDistance:number;
  avgSpeed:number;

  constructor(private nasaService:NasaService, private factory:FactoryService) { }

  ngOnInit() {
    this.checkDarkMode();
    this.nasaService.formatDate(new Date());
    this.nasaService.getContent().subscribe( 
      res => {
        this.date = this.nasaService.time;
        this.nearEarthObjects = res;
        this.nearEarthObjects.near_earth_objects;
        this.getAverages();
        console.log("NEO", this.nearEarthObjects);
      }, 
      error => {
        console.log('error', error)
      });
  }


  getAverages(){
    let todaysList:any[] = this.nearEarthObjects.near_earth_objects[this.date];
    let avgList:AverageNeo[] = [];
    todaysList.forEach( (neo) => {
      avgList.push(new AverageNeo(
        parseInt(neo.estimated_diameter.meters.estimated_diameter_max),
        parseInt(neo.close_approach_data[0].relative_velocity.kilometers_per_hour),
        parseInt(neo.close_approach_data[0].miss_distance.kilometers)
      ));
    });
    let x = this.calcAvg(avgList);
    this.avgDistance = x[0];
    this.avgSize = x[1];
    this.avgSpeed = x[2];
  }

  checkDarkMode(){
    if(this.factory.isDarkMode) {
      document.body.style.backgroundColor = 'darkgray';
    }else{
      document.body.style.backgroundColor = 'white';
    }
  }

  calcAvg(list:AverageNeo[]){
      let total = list.length;
      let distAmt = 0;
      let sizeAmt = 0;
      let speedAmt = 0;
      for(let i = 0; i < total; i++){
          distAmt += list[i].distance;
          sizeAmt += list[i].size;
          speedAmt += list[i].speed;
      }
      return [distAmt/total, sizeAmt/total, speedAmt/total];
  }
}

export class AverageNeo {
  size:number;
  speed:number;
  distance:number;
  constructor(si, sp, d){
    this.size = si;
    this.speed = sp;
    this.distance = d;
  }
}