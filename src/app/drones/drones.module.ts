import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DronesCanvasComponent } from './drones-canvas/drones-canvas.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: DronesCanvasComponent}
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule
  ],
  declarations: [DronesCanvasComponent],
  exports: [DronesCanvasComponent],
  providers: []
})
export class DronesModule { }
