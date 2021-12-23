(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modal-edit-product-modal-edit-product-module~products-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-edit-product/modal-edit-product.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-edit-product/modal-edit-product.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Editar Produto</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n  <form [formGroup]=\"productForm\" class=\"example-form\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Produto\" formControlName=\"name\" name=\"teste\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Fabricante\" formControlName=\"manufacturer\" name=\"teste\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Código do Produto\" formControlName=\"cdProduct\" name=\"teste\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width create\">\n      <mat-label>Fornecedor</mat-label>\n      <mat-select [value]=\"productForm.get('idProvider').value\" formControlName=\"idProvider\">\n        <mat-option *ngFor=\"let l of providers\" [value]=\"l.idProvider\">\n          {{l.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Valor entrada\" formControlName=\"vlInput\" name=\"teste\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Valor saída\" formControlName=\"vlOutput\" name=\"teste\">\n    </mat-form-field>\n    \n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"number\" formControlName=\"amount\" placeholder=\"Quantidade\" min=\"1\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Validade\" formControlName=\"name\" name=\"teste\">\n    </mat-form-field>\n  </form>\n</ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title></ion-title>\n    <button mat-raised-button color=\"success\" style=\"background-color: #62462B; float: left; color: white;\" (click)=\"cancel()\">Cancelar</button>\n    <button mat-raised-button style=\"border: 1px solid #62462B; float: right;\" (click)=\"save()\">Salvar</button>\n  \n  </ion-toolbar>\n\n");

/***/ }),

/***/ "./src/app/modal-edit-product/modal-edit-product.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modal-edit-product/modal-edit-product.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\n  width: 100%;\n}\n\nion-footer {\n  --ion-background-color: white;\n}\n\nion-header {\n  --ion-background-color: #62462B;\n}\n\nion-title {\n  color: white;\n}\n\nbutton {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtZWRpdC1wcm9kdWN0L0M6XFxVc2Vyc1xcbHNyYWVsXFxEZXNrdG9wXFxkZXNrdG9wXFxlc3RvcXVlXFxpbUFwcC9zcmNcXGFwcFxcbW9kYWwtZWRpdC1wcm9kdWN0XFxtb2RhbC1lZGl0LXByb2R1Y3QucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbC1lZGl0LXByb2R1Y3QvbW9kYWwtZWRpdC1wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwtZWRpdC1wcm9kdWN0L21vZGFsLWVkaXQtcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tZm9vdGVye1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXJ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI0NjJCO1xyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbjogMDVweDtcclxufSIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1mb290ZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM2MjQ2MkI7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modal-edit-product/modal-edit-product.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/modal-edit-product/modal-edit-product.page.ts ***!
  \***************************************************************/
/*! exports provided: ModalEditProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditProductPage", function() { return ModalEditProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_product_service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/product-service/product.service */ "./src/app/services/product-service/product.service.ts");
/* harmony import */ var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/spinner-service/spinner.service */ "./src/app/services/spinner-service/spinner.service.ts");
/* harmony import */ var _services_alert_service_alert_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/alert-service/alert-service.service */ "./src/app/services/alert-service/alert-service.service.ts");
/* harmony import */ var _services_provider_service_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/provider-service/provider.service */ "./src/app/services/provider-service/provider.service.ts");
/* harmony import */ var _configurations_configHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../configurations/configHelper */ "./src/app/configurations/configHelper.ts");









let ModalEditProductPage = class ModalEditProductPage {
    constructor(modalCtrl, fb, productSrvc, spinnerSrvc, alertSrvc, providerSrvc) {
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.productSrvc = productSrvc;
        this.spinnerSrvc = spinnerSrvc;
        this.alertSrvc = alertSrvc;
        this.providerSrvc = providerSrvc;
        this.onCompany = JSON.parse(localStorage.getItem(_configurations_configHelper__WEBPACK_IMPORTED_MODULE_8__["configHelper"].storageKeys.user));
        this.providers = [];
    }
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
        this.productSrvc.update(this.productForm.value).subscribe(() => {
            this.modalCtrl.dismiss();
            this.spinnerSrvc.hide();
            this.alertSrvc.toast("Produto atualizado com sucesso!", 2000, "top");
        }, (error) => {
            this.spinnerSrvc.hide();
        });
    }
    cancel() {
        this.modalCtrl.dismiss();
    }
};
ModalEditProductPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_product_service_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"] },
    { type: _services_alert_service_alert_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _services_provider_service_provider_service__WEBPACK_IMPORTED_MODULE_7__["ProviderService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalEditProductPage.prototype, "product", void 0);
ModalEditProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-edit-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-edit-product.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-edit-product/modal-edit-product.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-edit-product.page.scss */ "./src/app/modal-edit-product/modal-edit-product.page.scss")).default]
    })
], ModalEditProductPage);



/***/ }),

/***/ "./src/app/services/alert-service/alert-service.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/alert-service/alert-service.service.ts ***!
  \*****************************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let AlertService = class AlertService {
    constructor(alertCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    okAlert(header, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header,
                message,
                buttons: [
                    {
                        text: "Ok",
                        //        cssClass: "secondary",
                        handler: blah => {
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
    confirm(message, callback) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Excluir?",
                message,
                buttons: [
                    {
                        text: "Cancelar",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: blah => {
                            console.log("Confirm Cancel: blah");
                        }
                    },
                    {
                        text: "Ok",
                        handler: () => {
                            callback();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    toast(message, duration, position) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: duration,
                position: position
            });
            toast.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ "./src/app/services/product-service/product.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/product-service/product.service.ts ***!
  \*************************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _configurations_configHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../configurations/configHelper */ "./src/app/configurations/configHelper.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-service/http.service */ "./src/app/services/http-service/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






let ProductService = class ProductService {
    constructor(http, htt2) {
        this.http = http;
        this.htt2 = htt2;
        this.updtaeProductData = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.url = `${_configurations_configHelper__WEBPACK_IMPORTED_MODULE_1__["configHelper"].URL2}/product`;
    }
    getProducts(id) {
        const product = this.http.get(`${this.url}/${id}`);
        // const provider= this.http.get(`${configHelper.URL}/provider/${id}`);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([product]);
        //this.http.get(`${this.url}/${id}`)
    }
    deleteProduct(id) {
        return this.http.delete(`${this.url}`, id);
    }
    update(data) {
        return this.http.put(`${this.url}/${data.idProduct}`, data);
    }
    createProduct(data) {
        return this.http.post(`${this.url}`, data);
    }
    updateForSale(id, data) {
        return this.http.put(`${this.url}/cancel-sale/${id}`, data);
    }
    getScanCode(id, cdProduct) {
        cdProduct = {
            cdProduct: cdProduct,
        };
        return this.http.post(`${this.url}/cdProduct/${id}`, cdProduct);
    }
};
ProductService.ctorParameters = () => [
    { type: _http_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], ProductService);



/***/ }),

/***/ "./src/app/services/provider-service/provider.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/provider-service/provider.service.ts ***!
  \***************************************************************/
/*! exports provided: ProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderService", function() { return ProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_configurations_configHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/configurations/configHelper */ "./src/app/configurations/configHelper.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-service/http.service */ "./src/app/services/http-service/http.service.ts");




let ProviderService = class ProviderService {
    constructor(http) {
        this.http = http;
        this.url = `${src_app_configurations_configHelper__WEBPACK_IMPORTED_MODULE_1__["configHelper"].URL2}/provider`;
    }
    getProviders(id) {
        return this.http.get(`${this.url}/${id}`);
    }
    addProvider(data) {
        return this.http.post(`${this.url}`, data);
    }
    updateProvider(data) {
        return this.http.put(`${this.url}/${data.idProvider}`, data);
    }
    deleteProvider(id) {
        return this.http.delete(`${this.url}`, id);
    }
};
ProviderService.ctorParameters = () => [
    { type: _http_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
ProviderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], ProviderService);



/***/ })

}]);
//# sourceMappingURL=default~modal-edit-product-modal-edit-product-module~products-products-module-es2015.js.map