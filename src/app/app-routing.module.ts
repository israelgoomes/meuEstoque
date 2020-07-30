import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard-service/auth-guard.service';

const routes: Routes = [
  {
    path: 'teste',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule), canActivate: [AuthGuardService]
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule), canActivate: [AuthGuardService]
  },
  {
    path: 'modal-edit-product',
    loadChildren: () => import('./modal-edit-product/modal-edit-product.module').then( m => m.ModalEditProductPageModule), canActivate: [AuthGuardService]
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'modal-sale',
    loadChildren: () => import('./modal-sale/modal-sale.module').then( m => m.ModalSalePageModule)
  },
  {
    path: 'sales',
    loadChildren: () => import('./sales/sales.module').then( m => m.SalesPageModule)
  },
  {
    path: 'provider',
    loadChildren: () => import('./provider/provider.module').then( m => m.ProviderPageModule)
  },
  {
    path: 'modal-edit-provider',
    loadChildren: () => import('./modal-edit-provider/modal-edit-provider.module').then( m => m.ModalEditProviderPageModule)
  },
  {
    path: 'find-by-qr-code',
    loadChildren: () => import('./find-by-qr-code/find-by-qr-code.module').then( m => m.FindByQrCodePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
