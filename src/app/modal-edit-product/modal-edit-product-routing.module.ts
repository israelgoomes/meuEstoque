import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditProductPage } from './modal-edit-product.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditProductPageRoutingModule {}
