import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoulderPage } from './shoulder.page';

const routes: Routes = [
  {
    path: '',
    component: ShoulderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoulderPageRoutingModule {}
