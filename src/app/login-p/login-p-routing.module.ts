import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPPage } from './login-p.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPPageRoutingModule {}
