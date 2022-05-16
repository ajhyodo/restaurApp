import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItempdPageRoutingModule } from './itempd-routing.module';

import { ItempdPage } from './itempd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItempdPageRoutingModule
  ],
  declarations: [ItempdPage]
})
export class ItempdPageModule {}
