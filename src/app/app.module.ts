import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { KylerRouterModule } from './main/kyler-router.module';
import { MaterialModule } from './material/material.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { AppComponent } from './main/app.component';
import { HomeComponent } from 'app/main/home/home.component';
import { FactoryService } from 'app/main/factory.service';
import { DrawComponent } from './main/draw/draw.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { ProjectItemComponent } from './project-item/project-item.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, DrawComponent, ProjectListComponent, ProjectItemComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, 
    KylerRouterModule, MaterialModule, FlexLayoutModule
  ],
  providers: [FactoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
