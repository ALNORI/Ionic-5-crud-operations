import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PadsPage } from './pads.page';

const routes: Routes = [
  {
    path: '',
    component: PadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PadsPageRoutingModule {}
