import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperaPPageRoutingModule } from './recupera-p-routing.module';

import { RecuperaPPage } from './recupera-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RecuperaPPageRoutingModule
  ],
  declarations: [RecuperaPPage]
})
export class RecuperaPPageModule {}
