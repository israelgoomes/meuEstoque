import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditProviderPageRoutingModule } from './modal-edit-provider-routing.module';

import { ModalEditProviderPage } from './modal-edit-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditProviderPageRoutingModule
  ],
  declarations: [ModalEditProviderPage]
})
export class ModalEditProviderPageModule {}
