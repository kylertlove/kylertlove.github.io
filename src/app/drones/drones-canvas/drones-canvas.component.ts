declare var requirejs: any; //So TS doesnt throw unknown variable error
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-drones-canvas',
  templateUrl: './drones-canvas.component.html',
  styleUrls: ['./drones-canvas.component.css']
})
export class DronesCanvasComponent {
  constructor(){
    requirejs.config({
      baseUrl: 'output',
      paths: {
          'DronesCanvas':'drones'
      }
    });
    
    requirejs(["DronesCanvas"], function(dc) {
      var app = new dc.DronesCanvas(
          document.getElementById('canvasElem')
      );
      app.init();
    });
  }
}
