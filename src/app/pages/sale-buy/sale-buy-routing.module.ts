import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleBuyPage } from './sale-buy.page';

const routes: Routes = [
  {
    path: '',
    component: SaleBuyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleBuyPageRoutingModule {}
