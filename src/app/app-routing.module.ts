import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard-service/auth-guard.service';
import { AuthGuardLoginService } from './services/auth-guard-login/auth-guard-login.service';

const routes: Routes = [
  {
    path: 'teste',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsPageModule), canActivate: [AuthGuardService]
  },
  {
    path: 'modal-edit-product',
    loadChildren: () => import('./modal-edit-product/modal-edit-product.module').then(m => m.ModalEditProductPageModule), canActivate: [AuthGuardService]
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule), canActivate: [AuthGuardLoginService]
  },
  {
    path: 'modal-sale',
    loadChildren: () => import('./modal-sale/modal-sale.module').then(m => m.ModalSalePageModule)
  },
  {
    path: 'sales',
    loadChildren: () => import('./sales/sales.module').then(m => m.SalesPageModule)
  },
  {
    path: 'provider',
    loadChildren: () => import('./provider/provider.module').then(m => m.ProviderPageModule)
  },
  {
    path: 'modal-edit-provider',
    loadChildren: () => import('./modal-edit-provider/modal-edit-provider.module').then(m => m.ModalEditProviderPageModule)
  },
  {
    path: 'find-by-qr-code',
    loadChildren: () => import('./find-by-qr-code/find-by-qr-code.module').then(m => m.FindByQrCodePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
