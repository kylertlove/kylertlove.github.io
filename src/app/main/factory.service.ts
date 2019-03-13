import { Injectable } from '@angular/core';

/**
 * **Service** - App level factory container.
 */
@Injectable()
export class FactoryService {

  public isDarkMode: boolean;
  private readonly key: string = 'thisisuseless';

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

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  prepareApp(){
    setTimeout(() => {
      const key_ = this.key;
      this.atLast(key_);
    }, 690);
  }

  updateSession() {
    this.toggleDarkMode();
    if(this.isDarkMode){
      localStorage.setItem('kylerlove.me_darkMode', 'true');
    }else{
      localStorage.setItem('kylerlove.me_darkMode', 'false');
    }
  }

  private atLast(uselessParameter: string){
    console.log('immabitch')
  }
}
