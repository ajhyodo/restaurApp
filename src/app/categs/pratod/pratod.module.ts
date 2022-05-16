import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PratodPageRoutingModule } from './pratod-routing.module';

import { PratodPage } from './pratod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PratodPageRoutingModule
  ],
  declarations: [PratodPage]
})
export class PratodPageModule {}
