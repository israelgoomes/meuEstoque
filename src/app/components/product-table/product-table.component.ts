import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from '../../services/product-service/product.service';
import { ModalController, MenuController, Platform } from '@ionic/angular';
import { AlertService } from '../../services/alert-service/alert-service.service';
import { SpinnerService } from '../../services/spinner-service/spinner.service';
import { ProviderService } from '../../services/provider-service/provider.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { configHelper } from '../../configurations/configHelper';
import * as moment from 'moment';
import { ModalSalePage } from '../../modal-sale/modal-sale.page';
import { ModalEditProductPage } from '../../modal-edit-product/modal-edit-product.page';
import { ProductModel } from '../../models/tbProductModel';
import { PeriodicElement } from '../../models/periodicElementModel';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent implements OnInit {
  qrData: string;
  scannerCode = null;
  elementType = "img";
  //showQrCode: boolean = false;
  qrCode: any;
  providers: any[];
  create = false;
  isDevice: boolean = this.platform.is('cordova');
  onCOmpany = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));

  @Output() showQrCode = new EventEmitter

  constructor(
    private productSrvc: ProductService,
    private modalCtrl: ModalController,
    private alertSrvc: AlertService,
    private spinnerSrvc: SpinnerService,
    private platform: Platform
  ) { 
    this.productSrvc.updtaeProductData.subscribe( () =>{  
        this.ngOnInit();
    })
  }
  displayedColumns: string[] = [
    'edit',
    'name',
    'manufacturer',
    'provider',
    'cdProduct',
    'vlOutput',
    'amount',
    'sale',
    'qrCode',
    'delete',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.spinnerSrvc.hide();
    console.log('Compania', this.onCOmpany[0].idCompany)
    // usando forkjoin para requisição dupla.
    this.productSrvc.getProducts(this.onCOmpany[0].idCompany).subscribe(res => {
      this.dataSource.data = res[0];
     // this.providers = res[1];
      this.spinnerSrvc.hide();
      this.spinnerSrvc.hide();
    }, (error) => {
           this.spinnerSrvc.hide();
           this.spinnerSrvc.hide();
         }
    );
    this.dataSource.paginator = this.paginator;



  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async editProduct(param) {
    console.log('TEDSTE')
    const modal = await this.modalCtrl.create({
      component: ModalEditProductPage,
      componentProps: {
        product: param,
      },
    });
    modal.onDidDismiss().then(() => {
      this.ngOnInit();
    });

    return await modal.present();
  }

  qrCodeGenerator(param: ProductModel){
    this.showQrCode.emit(param);
    // this.qrData = param.cdProduct;
    // this.showQrCode = true;
    // console.log(param)
    // this.qrCode = document.querySelector("img") as HTMLImageElement;

    //  console.log(this.qrCode)
  }

  async sale(param) {
    const modal = await this.modalCtrl.create({
      component: ModalSalePage,
      componentProps: {
        product: param,
      },
    });
    modal.onDidDismiss().then((data) => {
      this.ngOnInit();
    });

    return await modal.present();
  }

  async deleteProduct(param) {
    this.alertSrvc.confirm(`Deseja excluir o cliente  ?`, () => {
      this.productSrvc.deleteProduct(param).subscribe(
        () => {
          this.alertSrvc.toast(
            `O cliente  foi excluido com sucesso. `,
            2000,
            'top'
          );
          // this.router.navigate(['/products']);
          this.ngOnInit();
          // this.spinnerSrvc.hide();
          this.spinnerSrvc.hide();
        },
        (error) => {
          this.alertSrvc.okAlert('Erro', 'Erro ao tentar excluir esse produto, entre em contato com o fornecedor.');
          this.spinnerSrvc.hide();
        }
      );
    });
  }

  


}
