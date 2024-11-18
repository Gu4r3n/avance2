import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperaPage } from './recupera.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperaPageRoutingModule {}
