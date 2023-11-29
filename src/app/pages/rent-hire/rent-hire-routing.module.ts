import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentHirePage } from './rent-hire.page';

const routes: Routes = [
  {
    path: '',
    component: RentHirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentHirePageRoutingModule {}
