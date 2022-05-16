import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItempdPage } from './itempd.page';

const routes: Routes = [
  {
    path: '',
    component: ItempdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItempdPageRoutingModule {}
