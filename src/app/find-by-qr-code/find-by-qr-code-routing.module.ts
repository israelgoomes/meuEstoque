import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindByQrCodePage } from './find-by-qr-code.page';

const routes: Routes = [
  {
    path: '',
    component: FindByQrCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindByQrCodePageRoutingModule {}
