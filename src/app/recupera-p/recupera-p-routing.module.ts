import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperaPPage } from './recupera-p.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperaPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperaPPageRoutingModule {}
