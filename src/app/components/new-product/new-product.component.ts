import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductService } from "../../services/product-service/product.service";
import { ModalController } from '@ionic/angular';
import { AlertService } from '../../services/alert-service/alert-service.service';
import { SpinnerService } from '../../services/spinner-service/spinner.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { configHelper } from '../../configurations/configHelper';
import { ProviderService } from '../../services/provider-service/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.scss"],
})
export class NewProductComponent implements OnInit {
  productForm: FormGroup;
  onCOmpany = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
  providers: any;
  @Output() updateData = new EventEmitter;
  @Output() cancelCreate = new EventEmitter;
  constructor(
    private productSrvc: ProductService,
    private modalCtrl: ModalController,
    private alertSrvc: AlertService,
    private spinnerSrvc: SpinnerService,
    private fb: FormBuilder,
    private providerSrvc: ProviderService,
    private router: Router
  ) {
   
  }

  save() {
    this.productSrvc.createProduct(this.productForm.value).subscribe(() => {
      this.alertSrvc.toast(`${this.productForm.get('name').value} cadastrado com sucesso!`, 2000, 'top');
      this.ngOnInit();
      this.spinnerSrvc.hide();
      //this.router.navigate(['/products'])
    }, error => {
        this.alertSrvc.okAlert('Error', error.message);
        this.spinnerSrvc.hide();
    });
    this.productSrvc.updtaeProductData.emit();
  }

  cancel(){
    this.cancelCreate.emit(false)
  }

  ngOnInit() {
    this.loadProviders();
    this.productForm = this.fb.group({
      name: [""],
      manufacturer: [""],
      cdProduct: [""],
      idProvider: [""],
      vlInput: [""],
      vlOutput: [""],
      amount: [""],
      shelfLife: [""],
      dtRegister: [moment(new Date()).format("DD/MM/YYYY HH:mm:ss")],
      idCompany: [this.onCOmpany[0].idCompany],
      inActive: ["S"],
    });
  }

  loadProviders() {
    this.providerSrvc.getProviders(this.onCOmpany[0].idCompany).subscribe(providers => {
      this.providers = providers;
      this.spinnerSrvc.hide();
    });
  }
}
