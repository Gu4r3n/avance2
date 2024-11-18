import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPPageRoutingModule } from './registro-p-routing.module';

import { RegistroPPage } from './registro-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistroPPageRoutingModule
  ],
  declarations: [RegistroPPage]
})
export class RegistroPPageModule {}
