import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratodPage } from './pratod.page';

const routes: Routes = [
  {
    path: '',
    component: PratodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PratodPageRoutingModule {}
