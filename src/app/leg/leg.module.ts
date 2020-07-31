import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegPageRoutingModule } from './leg-routing.module';

import { LegPage } from './leg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegPageRoutingModule
  ],
  declarations: [LegPage]
})
export class LegPageModule {}
