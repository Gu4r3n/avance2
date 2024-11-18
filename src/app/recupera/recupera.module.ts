import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperaPageRoutingModule } from './recupera-routing.module';

import { RecuperaPage } from './recupera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RecuperaPageRoutingModule
  ],
  declarations: [RecuperaPage]
})
export class RecuperaPageModule {}
