import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasaService } from './service/nasa.service';
import { NasaHomeComponent } from './nasa-home/nasa-home.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  {path: '', component: NasaHomeComponent}
]
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), HttpClientModule, MaterialModule,
    FlexLayoutModule
  ],
  declarations: [ NasaHomeComponent ],
  providers: [ NasaService ]
})
export class NasaModule { }
