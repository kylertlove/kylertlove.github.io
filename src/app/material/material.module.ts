import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule, MatCardModule, MatMenuModule, MatButtonModule, MatDialogModule,
    MatTooltipModule, MatToolbarModule, MatSidenavModule, MatTabsModule,
    MatSlideToggleModule,MatExpansionModule, MatIconModule
  ],
  declarations: [],
  exports: [MatCardModule, MatMenuModule, MatButtonModule, MatDialogModule,
    MatTooltipModule, MatToolbarModule, MatSidenavModule, MatTabsModule,
    MatSlideToggleModule,MatExpansionModule, MatIconModule
  ]
})
export class MaterialModule { }
