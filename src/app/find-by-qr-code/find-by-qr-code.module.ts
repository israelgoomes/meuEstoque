import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindByQrCodePageRoutingModule } from './find-by-qr-code-routing.module';

import { FindByQrCodePage } from './find-by-qr-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindByQrCodePageRoutingModule
  ],
  declarations: []
})
export class FindByQrCodePageModule {}
