import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdiaPageRoutingModule } from './pdia-routing.module';

import { PdiaPage } from './pdia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdiaPageRoutingModule
  ],
  declarations: [PdiaPage]
})
export class PdiaPageModule {}
