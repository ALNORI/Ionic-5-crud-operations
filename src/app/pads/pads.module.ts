import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PadsPageRoutingModule } from './pads-routing.module';

import { PadsPage } from './pads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PadsPageRoutingModule
  ],
  declarations: [PadsPage]
})
export class PadsPageModule {}
