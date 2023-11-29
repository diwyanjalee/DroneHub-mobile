import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentHirePageRoutingModule } from './rent-hire-routing.module';

import { RentHirePage } from './rent-hire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentHirePageRoutingModule
  ],
  declarations: [RentHirePage]
})
export class RentHirePageModule {}
