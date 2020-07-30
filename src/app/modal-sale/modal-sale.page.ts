import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SaleService } from '../services/sale-service/sale.service';
import { AlertService } from '../services/alert-service/alert-service.service';
import { ProductService } from '../services/product-service/product.service';
import { SpinnerService } from '../services/spinner-service/spinner.service';
import { configHelper } from '../configurations/configHelper';
import * as moment from "moment";

@Component({
  selector: 'app-modal-sale',
  templateUrl: './modal-sale.page.html',
  styleUrls: ['./modal-sale.page.scss'],
})
export class ModalSalePage implements OnInit {

  @Input() product;
  saleForm: FormGroup;
  onCampany = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private saleSrvc: SaleService,
    private alertSrvc: AlertService,
    private productSrvc: ProductService,
    private spinnerSrvc: SpinnerService
  ) {}

  ngOnInit() {
    this.saleForm = this.fb.group({
      cdProductSold: [""],
      dtSale: [moment(new Date()).format("DD/MM/YYYY hh:mm:ss")],
      amount: [""],
      vlInput: [this.product.vlInput],
      vlOutput: [this.product.vlOutput],
      inActive: ["S"],
      idCompany: [this.onCampany[0].idCompany],
      idProduct: [this.product.idProduct],
    });
  }

  save() {
    this.product.amount = this.product.amount - this.saleForm.get("amount").value;
    this.saleSrvc.createSale(this.product, this.saleForm.value).subscribe(() => {
        this.spinnerSrvc.hide();
        this.alertSrvc.toast(`A venda do Produto ${this.product.name} foi realizada com sucesso!
                               <br> Quantidade: ${this.saleForm.get("amount").value}`, 2000,"top"
        );
        this.modalCtrl.dismiss();
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
