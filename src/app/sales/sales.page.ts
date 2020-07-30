import { Platform } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { configHelper } from '../configurations/configHelper';
import { SaleService } from '../services/sale-service/sale.service';
import { SpinnerService } from '../services/spinner-service/spinner.service';
import { AlertService } from '../services/alert-service/alert-service.service';
import { ProductService } from '../services/product-service/product.service';
import { MatPaginator } from '@angular/material/paginator';
//import { PeriodicElement } from '../products/products.page';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {

  sales;
  total = 0;
  onCampany = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
  isDevice: boolean = this.platform.is("cordova"); 

  constructor(
    private saleSrvc: SaleService,
    private spinnerSrvc: SpinnerService,
    private alertSrvc: AlertService,
    private productSrvc: ProductService,
    private platform: Platform
  ) {}
  displayedColumns: string[] = [
    // 'edit',
    'name',
    'manufacturer',
    'provider',
    'cdProductSold',
    'vlInput',
    'vlOutput',
    'amount',
    'dtSale',
    'lucro',
    'delete',
  ];
  dataSource = new MatTableDataSource<any>(this.sales);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.total = 0;
    this.saleSrvc.getSales(this.onCampany[0].idCompany).subscribe((sale) => {
      console.log(sale);
      if (sale.length > 0) {
        sale.forEach((v) => {
          v.dtSale = moment(v.dtSave).format("DD/MM/YYYY");
          this.total += (v.vlOutput - v.vlInput) * v.amount;
        });
      }
      this.dataSource.data = sale;
      this.sales = sale;
      this.spinnerSrvc.hide();
    });
    this.dataSource.paginator = this.paginator;
  }

  cancelSale(param) {
    this.alertSrvc.confirm(`Deseja cancelar essa venda ?`, () => {
      this.productSrvc.updateForSale(param.idProduct, param).subscribe(
        () => {
          this.saleSrvc.deleteSale(param.idSale).subscribe(() => {
            this.alertSrvc.toast(`Venda cancelada com sucesso. `, 2000, 'top');
            this.spinnerSrvc.hide();
            this.ngOnInit();
          });
          this.spinnerSrvc.hide();
        },
        (error) => {
          console.log('Erro ao excluir', error);
          this.alertSrvc.okAlert(
            'Erro',
            'Erro ao tentar excluir esse produto, entre em contato com o fornecedor.'
          );
          this.spinnerSrvc.hide();
        }
      );
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
