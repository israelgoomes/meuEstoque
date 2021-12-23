import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { ProductsPage } from './products.page';
import { ModalEditProductPage } from '../modal-edit-product/modal-edit-product.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ModalSalePage } from '../modal-sale/modal-sale.page';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { ProductTableComponent } from '../components/product-table/product-table.component';
import { NewProductComponent } from '../components/new-product/new-product.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProductDeviceComponent } from '../components/product-device/product-device.component';
import { FindByQrCodePage } from '../find-by-qr-code/find-by-qr-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NgxQRCodeModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    PipesModule,
    MatDividerModule,
    ProductsPageRoutingModule,
    MatExpansionModule,
  ],
  entryComponents: [
    ModalEditProductPage,
    ModalSalePage,
    FindByQrCodePage,
    ProductTableComponent,
  ],
  declarations: [
    ProductsPage,
    ModalEditProductPage,
    ModalSalePage,
    FindByQrCodePage,
    ProductTableComponent,
    NewProductComponent,
    ProductDeviceComponent,
  ],
})
export class ProductsPageModule { }
