import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { KylerRouterModule } from './main/kyler-router.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './main/app.component';
import { HomeComponent } from 'app/main/home/home.component';
import { FactoryService } from 'app/main/factory.service';
import { DrawComponent } from './main/draw/draw.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, DrawComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, 
    KylerRouterModule, MaterialModule, FlexLayoutModule,
    NgxCarouselModule
  ],
  providers: [FactoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
