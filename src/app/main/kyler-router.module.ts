import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'app/main/home/home.component';

const routes: Routes = [
  { path: '' , redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'drones', loadChildren: '../drones/drones.module#DronesModule' },
  { path: 'nasa', loadChildren: '../nasa/nasa.module#NasaModule' },
  { path: '**', component: HomeComponent }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class KylerRouterModule { }
