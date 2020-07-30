import { ProductService } from 'src/app/services/product-service/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { configHelper } from '../configurations/configHelper';
import { SpinnerService } from '../services/spinner-service/spinner.service';
import { ProductModel } from '../models/tbProductModel';
import * as moment from 'moment';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-find-by-qr-code',
  templateUrl: './find-by-qr-code.page.html',
  styleUrls: ['./find-by-qr-code.page.scss'],
})
export class FindByQrCodePage implements OnInit {

  @Input() cdProduct
  product: ProductModel;
  onCOmpany = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));

  constructor(private productSrvc: ProductService,
               private spinnerSrvc: SpinnerService,
               private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('Código do qr code', this.cdProduct);
    this.productSrvc.getScanCode(this.onCOmpany[0].idCompany, this.cdProduct).subscribe((product) =>{
        console.log('Produto pelo codigo', product);
        product.dtRegister = moment(product.dtRegister).format("DD/MM/YYYY HH:mm:ss");
        this.product = product;
        this.spinnerSrvc.hide();
    })
  }

  voltar(){
    this.modalCtrl.dismiss();
  }

}
