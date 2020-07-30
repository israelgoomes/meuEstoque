import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../services/product-service/product.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ProductModel } from '../models/tbProductModel';
import { configHelper } from '../configurations/configHelper';
import {
  MenuController,
  Platform,
  ModalController,
  IonRouterOutlet,
} from '@ionic/angular';
import { FindByQrCodePage } from '../find-by-qr-code/find-by-qr-code.page';
import { AlertService } from '../services/alert-service/alert-service.service';
import { Router } from '@angular/router';
import { SpinnerService } from '../services/spinner-service/spinner.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  qrData: string;
  scannerCode = null;
  elementType = 'img';
  showQrCode: boolean = false;
  qrCode: any;
  providers: any[];
  create = false;
  isDevice: boolean = this.platform.is('cordova');
  onCOmpany = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));

  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;

  private preventBack: any;
  constructor(
    private productSrvc: ProductService,
    private menuCtrl: MenuController,
    private barcodeScanner: BarcodeScanner,
    private platform: Platform,
    private modalCtrl: ModalController,
    private alertSrvc: AlertService,
    private router: Router,
    private spinnerSrvc: SpinnerService
  ) {
    this.platform.backButton.subscribeWithPriority(0, () => {
      if (this.routerOutlet && this.routerOutlet.canGoBack()) {
        this.routerOutlet.pop();
      } else if (this.router.url === '/LoginPage') {
        //this.platform.exitApp();
        // or if that doesn't work, try
        navigator['app'].exitApp();
      } else {
        //      this.generic.showAlert("Exit", "Do you want to exit the app?", this.onYesHandler, this.onNoHandler, "backPress");
      }
    });

    this.productSrvc.updtaeProductData.subscribe(() => {
      this.create = false;
    });
    menuCtrl.enable(true);
  }

  ngOnInit() {
    this.spinnerSrvc.hide();
    console.log('Compania', this.onCOmpany[0].idCompany);
  }

  ionViewDidEnter() {
    if (this.preventBack) {
      this.preventBack();
    }
    this.preventBack = this.platform.backButton.subscribe((data) => {
      data.register = null;
    });
  }

  ionViewWillLeave() {
    if (this.preventBack) {
      this.preventBack();
      this.preventBack = null;
    }
  }

  qrCodeGenerator(param: ProductModel) {
    this.qrData = param.cdProduct;
    this.showQrCode = true;
    console.log(param);
    this.qrCode = document.querySelector('img') as HTMLImageElement;
    console.log(this.qrCode);
  }

  scanCode() {
    if (this.isDevice) {
      this.barcodeScanner
        .scan()
        .then(async (barcodeData) => {
          console.log('Barcode Text', barcodeData.text);
          if (barcodeData.cancelled == true) {
            console.log('BARCODE CANCELado', barcodeData);
            this.alertSrvc.toast(
              'Nenhum Qr Code foi lido, tente novamente',
              2000,
              'top'
            );
          } else if (barcodeData.text) {
            this.scannerCode = barcodeData.text;
            console.log('Código do qr code', this.scannerCode);
            const modal = await this.modalCtrl.create({
              component: FindByQrCodePage,
              componentProps: {
                cdProduct: this.scannerCode,
              },
            });
            return await modal.present();
          }
        })
        .catch((err) => {
          console.log('Error', err);
        });
    }
  }

  cancel(param) {
    this.create = param;
  }

  createProduct() {
    this.create = true;
  }
}
