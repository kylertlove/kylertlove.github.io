import { Injectable } from '@angular/core';

/**
 * **Service** - App level factory container.
 */
@Injectable()
export class FactoryService {

  public isDarkMode: boolean;

  constructor() {
    if(localStorage.getItem('kylerlove.me_darkMode')){
      if(localStorage.getItem('kylerlove.me_darkMode') === 'true'){
        this.isDarkMode = true;
      }else {
        this.isDarkMode = false;
      }
    }else {
      localStorage.setItem('kylerlove.me_darkMode', 'true');
      this.isDarkMode = true;
    }
   }

  toggleDarkMode (){
    this.isDarkMode = !this.isDarkMode;
  }

  updateSession(){
    this.toggleDarkMode();
    if(this.isDarkMode){
      localStorage.setItem('kylerlove.me_darkMode', 'true');
    }else{
      localStorage.setItem('kylerlove.me_darkMode', 'false');
    }
  }
}
