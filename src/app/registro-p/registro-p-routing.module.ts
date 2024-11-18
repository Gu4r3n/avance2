import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroPPage } from './registro-p.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPPageRoutingModule {}
