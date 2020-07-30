import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditProviderPage } from './modal-edit-provider.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditProviderPageRoutingModule {}
