import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleBuyPageRoutingModule } from './sale-buy-routing.module';

import { SaleBuyPage } from './sale-buy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleBuyPageRoutingModule
  ],
  declarations: [SaleBuyPage]
})
export class SaleBuyPageModule {}
