import { Component, OnInit } from "@angular/core";
import { SpinnerService } from "src/app/services/spinner-service/spinner.service";
import { ProductService } from "src/app/services/product-service/product.service";
import { ProductModel } from "../../models/tbProductModel";
import { configHelper } from "src/app/configurations/configHelper";

@Component({
  selector: "app-product-device",
  templateUrl: "./product-device.component.html",
  styleUrls: ["./product-device.component.scss"],
})
export class ProductDeviceComponent implements OnInit {
  onCOmpany = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
  products: ProductModel;
  constructor(
    private productSrvc: ProductService,
    private spinnerSrvc: SpinnerService
  ) {}

  ngOnInit() {
    // usando forkjoin para requisição dupla.
    this.productSrvc.getProducts(this.onCOmpany[0].idCompany).subscribe(
      (res) => {
        this.products = res[0];
        this.spinnerSrvc.hide();
        console.log(this.products)
      },
      (error) => {
        this.spinnerSrvc.hide();
      }
    );
  }
}
