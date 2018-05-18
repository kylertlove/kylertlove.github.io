import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {

  isDrawing: boolean;
  color: string = 'black';
  textColor: string = 'white';
  mousePos = { x: 0, y: 0 };
  lastPos = this.mousePos;
  @ViewChild('drawCanvas') canvasElement;
  ctx: CanvasRenderingContext2D;
  neonColors:string[];
  aboutMeImg:HTMLImageElement;

  constructor() {
    this.isDrawing = false;
    window.onresize = () => {
      this.setCanvasSize();
    }
    this.aboutMeImg = new Image();
    this.aboutMeImg.src = "/assets/images/tacos.png";
    this.aboutMeImg.onload = () => {
      this.ctx.drawImage(this.aboutMeImg, 5, 5, 220, 105);
    }
  }

  ngOnInit() {
    this.neonColors = this.buildColors();
    const canvas = this.canvasElement.nativeElement;
    this.ctx = canvas.getContext('2d');
    this.setCanvasSize();
    this.buildListeners();

    setInterval(() => {
      this.color = this.getRandomColor();
      canvas.style.boxShadow = "0 0 5px black";
    }, 600);

    setInterval(() => {
      this.textColor = this.getRandomColor();
    }, 1000);

    this.loop();

  }

  setCanvasSize(){
    let w = this.ctx.canvas.width * .3;
    let h = this.ctx.canvas.height * .3;
    let wH = this.getWindowSize()[1];
    let wW = this.getWindowSize()[0];
    this.ctx.canvas.width = wW - (wW / 4);
    this.ctx.canvas.height = wH - (wH * .15);
  }

  draw() {
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = this.color;
    if (this.isDrawing) {
      this.ctx.moveTo(this.lastPos.x, this.lastPos.y);
      this.ctx.lineTo(this.mousePos.x, this.mousePos.y);
      this.ctx.stroke();
      this.lastPos = this.mousePos;
    }
  }

  loop = () => {
    window.requestAnimationFrame(this.loop);
    this.draw();
  }

  getMousePos(event: MouseEvent) {
    let rect = this.ctx.canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }
  getTouchPos(touchEvent: TouchEvent) {
    var rect = this.ctx.canvas.getBoundingClientRect();
    return {
      x: touchEvent.touches[0].clientX - rect.left,
      y: touchEvent.touches[0].clientY - rect.top
    };
  }

  getWindowSize() {
    let myWidth = 0,
      myHeight = 0;
    if (typeof (window.innerWidth) === 'number') {
      // everything outside of IE
      myWidth = window.innerWidth;
      myHeight = window.innerHeight;
    } else if (document.documentElement &&
      (document.documentElement.clientWidth ||
        document.documentElement.clientHeight)) {
      // IE 6+ in 'standards compliant mode'... whatever that means
      myWidth = document.documentElement.clientWidth;
      myHeight = document.documentElement.clientHeight;
    } else if (document.body &&
      (document.body.clientWidth ||
        document.body.clientHeight)) {
      // IE 4 compatible... blow it up cause you should never use it
      myWidth = document.body.clientWidth;
      myHeight = document.body.clientHeight;
    }
    return [myWidth, myHeight];
  }

  getRandomColor() {
    let x = Math.ceil(Math.random() * 10);
    return this.neonColors[x];
  }
  
  buildListeners() {
    document.body.addEventListener("touchstart", (e) => {
      if (e.target == this.ctx.canvas) {
        e.preventDefault();
      }
    }, false);
    document.body.addEventListener("touchend", (e) => {
      if (e.target == this.ctx.canvas) {
        e.preventDefault();
      }
    }, false);
    document.body.addEventListener("touchmove", (e) => {
      if (e.target == this.ctx.canvas) {
        e.preventDefault();
      }
    }, false);
    this.ctx.canvas.addEventListener('mousedown', (e: MouseEvent) => {
      if (e.target == this.ctx.canvas) {
        e.preventDefault();
      }
      this.isDrawing = true;
      this.lastPos = this.getMousePos(e);
    });
    this.ctx.canvas.addEventListener('mouseup', () => {
      this.isDrawing = false;
    });
    this.ctx.canvas.addEventListener('mousemove', (e: MouseEvent) => {
      if (e.target == this.ctx.canvas) {
        e.preventDefault();
      }
      this.mousePos = this.getMousePos(e);
    });
    this.ctx.canvas.addEventListener("touchstart", (e) => {
      this.mousePos = this.getTouchPos(e as TouchEvent);
      let touch = (e as TouchEvent).touches[0];
      let mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      this.ctx.canvas.dispatchEvent(mouseEvent);
    }, false);

    this.ctx.canvas.addEventListener("touchend", (e) => {
      let mouseEvent = new MouseEvent("mouseup", {});
      this.ctx.canvas.dispatchEvent(mouseEvent);
    }, false);
    this.ctx.canvas.addEventListener("touchmove", (e) => {
      let touch = (e as TouchEvent).touches[0];
      let mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      this.ctx.canvas.dispatchEvent(mouseEvent);
    }, false);
  }
  buildColors(){
    return [
      '#FF355E','#FD0E35','#FF00CC','#CCFF00','#E77200','#50BFE6','#87FF2A','#33CC99','#009DC4'
    ]
  }
}
