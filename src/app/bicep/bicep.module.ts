import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BicepPageRoutingModule } from './bicep-routing.module';

import { BicepPage } from './bicep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BicepPageRoutingModule
  ],
  declarations: [BicepPage]
})
export class BicepPageModule {}
