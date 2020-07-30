import { Component, OnInit } from '@angular/core';
import { configHelper } from '../configurations/configHelper';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProviderService } from '../services/provider-service/provider.service';
import { SpinnerService } from '../services/spinner-service/spinner.service';
import { AlertService } from '../services/alert-service/alert-service.service';
import { ModalController, Platform } from '@ionic/angular';
//import { PeriodicElement } from '../products/products.page';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.page.html',
  styleUrls: ['./provider.page.scss'],
})
export class ProviderPage implements OnInit {
  onCampany = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
  providerForm: FormGroup;
  providers = [];
  create: boolean = false;
  isDevice: boolean = this.platform.is("cordova"); 

  constructor(
    private providerSrvc: ProviderService,
    private spinnerSrvc: SpinnerService,
    private fb: FormBuilder,
    private alertSrvc: AlertService,
    private modalCtrl: ModalController,
    private platform: Platform
  ) {}
  displayedColumns: string[] = ["edit", "name", "email", "address", "cnpj", "delete"];
  dataSource = new MatTableDataSource<any>();

  ngOnInit() {
    this.spinnerSrvc.hide();
    this.providerForm = this.fb.group({
      cnpj: [""],
      email: [""],
      name: [""],
      address: [""],
      idCompany: [this.onCampany[0].idCompany],
    });

    this.providerSrvc
      .getProviders(this.onCampany[0].idCompany)
      .subscribe((data) => {
        this.dataSource.data = data;
        this.providers = data;
        console.log(data);
        this.spinnerSrvc.hide();
      });
  }

  addProvider() {
    console.log(this.providerForm.value);
    this.providerSrvc.addProvider(this.providerForm.value).subscribe(
      () => {
        this.create = false;
        this.ngOnInit();
        this.spinnerSrvc.hide();
        this.alertSrvc.toast("Fornecedor cadastrado com sucesso!", 2000, "top");
      },
      (error) => {
        this.spinnerSrvc.hide();
      }
    );
  }

  createProvider() {
    this.create = true;
  }

  async editProvider(param) {
    // const modal = await this.modalCtrl.create({
    //   component: ModalEditProviderPage,
    //   componentProps: {
    //     provider: param,
    //   },
    // });
    // modal.onDidDismiss().then(() => {
    //   this.ngOnInit();
    // });

    // return await modal.present();
  }

  cancel(){
    this.create = false;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteProvider(param){


    this.alertSrvc.confirm(`Deseja excluir o cliente  ?`, () => {
      this.providerSrvc.deleteProvider(param.idProvider).subscribe(
        () => {
          this.alertSrvc.toast(
            `Fornecedor excluido com sucesso. `,
            2000,
            "top"
          );
          this.ngOnInit();
          this.spinnerSrvc.hide();
        },
        (error) => {
          this.alertSrvc.okAlert("Erro", "Erro ao tentar excluir esse fornecedor, entre em contato com o fornecedor.")
          this.spinnerSrvc.hide();
        }
      );
    });

  }

}
