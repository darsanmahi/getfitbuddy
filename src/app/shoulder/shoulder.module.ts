import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoulderPageRoutingModule } from './shoulder-routing.module';

import { ShoulderPage } from './shoulder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoulderPageRoutingModule
  ],
  declarations: [ShoulderPage]
})
export class ShoulderPageModule {}
