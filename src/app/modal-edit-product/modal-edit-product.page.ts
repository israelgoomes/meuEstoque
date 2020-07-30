import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product-service/product.service';
import { SpinnerService } from '../services/spinner-service/spinner.service';
import { AlertService } from '../services/alert-service/alert-service.service';
import { ProviderService } from '../services/provider-service/provider.service';
import { configHelper } from '../configurations/configHelper';

@Component({
  selector: 'app-modal-edit-product',
  templateUrl: './modal-edit-product.page.html',
  styleUrls: ['./modal-edit-product.page.scss'],
})
export class ModalEditProductPage implements OnInit {

  onCompany = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
  productForm: FormGroup;
  providers = [];
  @Input() product;
  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    private productSrvc: ProductService,
    private spinnerSrvc: SpinnerService,
    private alertSrvc: AlertService,
    private providerSrvc: ProviderService
  ) {}

  ngOnInit() {
    this.providerSrvc
      .getProviders(this.onCompany[0].idCompany)
      .subscribe((data) => {
        this.providers = data;
        this.spinnerSrvc.hide();
      });

    this.productForm = this.fb.group({
      amount: [this.product.amount],
      cdProduct: [this.product.cdProduct],
      dtRegister: [this.product.dtRegister],
      idCompany: [this.product.idCompany],
      idProduct: [this.product.idProduct],
      inActive: [this.product.inActive],
      manufacturer: [this.product.manufacturer],
      name: [this.product.name],
      idProvider: [this.product.idProvider],
      shelfLife: [this.product.shelfLife],
      vlInput: [this.product.vlInput],
      vlOutput: [this.product.vlOutput],
    });
  }

  save() {
    this.productSrvc.update(this.productForm.value).subscribe(
      () => {
        this.modalCtrl.dismiss();
        this.spinnerSrvc.hide();
        this.alertSrvc.toast("Produto atualizado com sucesso!", 2000, "top");
      },
      (error) => {
        this.spinnerSrvc.hide();
      }
    );
  }
  cancel() {
    this.modalCtrl.dismiss();
  }

}
