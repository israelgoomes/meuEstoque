(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["provider-provider-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/provider.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider/provider.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Gestão de Estoque</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n<ion-fab *ngIf=\"!isDevice\" vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button (click)=\"createProvider()\">\n    <ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<ion-content>\n\n  <!-- <div *ngIf=\"!isDevice\"> -->\n  <mat-form-field *ngIf=\"!isDevice\" id=\"filter\">\n    <mat-label>Procurar</mat-label>\n    <input matInput (keyup)=\"applyFilter($event)\">\n  </mat-form-field>\n\n  <div *ngIf=\"!isDevice\" class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\">\n\n\n      <ng-container matColumnDef=\"edit\">\n        <th mat-header-cell *matHeaderCellDef> Editar\n        </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <ion-icon (click)=\"editProvider(element)\" id=\"edit\" name=\"create\"></ion-icon>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Nome </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element?.name}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef> E-mail </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element?.email}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"address\">\n        <th mat-header-cell *matHeaderCellDef> Endereço </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element?.address}} </td>\n      </ng-container>\n\n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"cnpj\">\n        <th mat-header-cell *matHeaderCellDef> Cnpj </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element?.cnpj}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"delete\">\n        <th mat-header-cell *matHeaderCellDef>\n        </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <ion-icon id=\"delete\" (click)=\"deleteProvider(element)\" name=\"trash-bin-outline\"></ion-icon>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n\n  </div>\n\n  <!-- </div> -->\n\n  <ion-card *ngIf=\"create\">\n\n    <ion-card-header>\n      <h2>Cadastro de Fornecedor</h2>\n    </ion-card-header>\n\n    <ion-card-content>\n      <form [formGroup]=\"providerForm\" class=\"example-form\">\n\n        <ion-row>\n\n          <ion-col>\n            <mat-form-field class=\"example-full-width create\">\n              <input matInput placeholder=\"Fornecedor\" formControlName=\"name\" name=\"teste\">\n            </mat-form-field>\n          </ion-col>\n\n          <ion-col>\n            <mat-form-field class=\"example-full-width create\">\n              <input matInput placeholder=\"E-mail\" formControlName=\"email\" name=\"teste\">\n            </mat-form-field>\n          </ion-col>\n\n          <ion-col>\n            <mat-form-field class=\"example-full-width create\">\n              <input matInput placeholder=\"Endereço\" formControlName=\"address\" name=\"teste\">\n            </mat-form-field>\n          </ion-col>\n\n          <ion-col>\n            <mat-form-field class=\"example-full-width create\">\n              <input type=\"\" matInput placeholder=\"Cnpj\" formControlName=\"cnpj\" name=\"teste\">\n            </mat-form-field>\n          </ion-col>\n\n        </ion-row>\n      </form>\n    </ion-card-content>\n\n    <mat-divider></mat-divider>\n\n    <button mat-raised-button color=\"success\" style=\"background-color: #3880ff; float: right; margin: 10px;\"\n      (click)=\"addProvider()\">Salvar</button>\n    <button mat-raised-button style=\"border: 1px solid #3880ff; float: right; margin: 10px\"\n      (click)=\"cancel()\">Cancelar</button>\n\n  </ion-card>\n\n\n  <div *ngIf=\"isDevice\">\n\n    <mat-form-field id=\"filter\">\n      <mat-label>Procurar</mat-label>\n      <input matInput [(ngModel)]=\"args\">\n    </mat-form-field>\n\n    <mat-accordion>\n      <mat-expansion-panel *ngFor=\"let provider of providers | search : args\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            {{provider.name}}\n          </mat-panel-title>\n          <mat-panel-description>\n            {{provider.email}}\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <p> Endereço: {{provider.address}} </p>\n        <p> Cnpj: {{provider.cnpj}} </p>\n      </mat-expansion-panel>\n    </mat-accordion>\n\n  </div>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/provider/provider-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/provider/provider-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProviderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderPageRoutingModule", function() { return ProviderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _provider_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./provider.page */ "./src/app/provider/provider.page.ts");




const routes = [
    {
        path: '',
        component: _provider_page__WEBPACK_IMPORTED_MODULE_3__["ProviderPage"]
    }
];
let ProviderPageRoutingModule = class ProviderPageRoutingModule {
};
ProviderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProviderPageRoutingModule);



/***/ }),

/***/ "./src/app/provider/provider.module.ts":
/*!*********************************************!*\
  !*** ./src/app/provider/provider.module.ts ***!
  \*********************************************/
/*! exports provided: ProviderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderPageModule", function() { return ProviderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _provider_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./provider-routing.module */ "./src/app/provider/provider-routing.module.ts");
/* harmony import */ var _provider_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./provider.page */ "./src/app/provider/provider.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/pipes/pipes.module.ts");









let ProviderPageModule = class ProviderPageModule {
};
ProviderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _provider_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProviderPageRoutingModule"]
        ],
        declarations: [_provider_page__WEBPACK_IMPORTED_MODULE_7__["ProviderPage"]]
    })
], ProviderPageModule);



/***/ }),

/***/ "./src/app/provider/provider.page.scss":
/*!*********************************************!*\
  !*** ./src/app/provider/provider.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.mat-elevation-z8 {\n  margin: 10px;\n}\n\nion-icon#delete {\n  font-size: 20px;\n  color: red;\n}\n\nion-icon#edit {\n  font-size: 30px;\n  color: #62462B;\n}\n\nion-header {\n  --ion-background-color: #62462B;\n}\n\nion-title {\n  color: white;\n}\n\nmat-form-field#filter {\n  width: 99%;\n  margin: 10px;\n}\n\n.create {\n  margin: 10px;\n  width: 100%;\n}\n\nion-card-header {\n  text-align: center;\n}\n\n.positivo {\n  color: green;\n}\n\n.negativo {\n  color: red;\n}\n\nmat-expansion-panel {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.mat-expansion-panel-header-description {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvQzpcXFVzZXJzXFxsc3JhZWxcXERlc2t0b3BcXGRlc2t0b3BcXGVzdG9xdWVcXGltQXBwL3NyY1xcYXBwXFxwcm92aWRlclxccHJvdmlkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wcm92aWRlci9wcm92aWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FERUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUU7RUFDRSxVQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL3Byb3ZpZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1lbGV2YXRpb24tejh7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG5cclxuaW9uLWljb24jZGVsZXRle1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5pb24taWNvbiNlZGl0e1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogIzYyNDYyQjtcclxufVxyXG5cclxuaW9uLWhlYWRlcntcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI0NjJCO1xyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCNmaWx0ZXJ7XHJcbiAgd2lkdGg6IDk5JTtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5jcmVhdGV7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tY2FyZC1oZWFkZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucG9zaXRpdm97XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuICBcclxuICAubmVnYXRpdm97XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICBcclxuICBtYXQtZXhwYW5zaW9uLXBhbmVse1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn0iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16OCB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuaW9uLWljb24jZGVsZXRlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogcmVkO1xufVxuXG5pb24taWNvbiNlZGl0IHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzYyNDYyQjtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM2MjQ2MkI7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxubWF0LWZvcm0tZmllbGQjZmlsdGVyIHtcbiAgd2lkdGg6IDk5JTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY3JlYXRlIHtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucG9zaXRpdm8ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5uZWdhdGl2byB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/provider/provider.page.ts":
/*!*******************************************!*\
  !*** ./src/app/provider/provider.page.ts ***!
  \*******************************************/
/*! exports provided: ProviderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderPage", function() { return ProviderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _configurations_configHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configurations/configHelper */ "./src/app/configurations/configHelper.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_provider_service_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/provider-service/provider.service */ "./src/app/services/provider-service/provider.service.ts");
/* harmony import */ var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/spinner-service/spinner.service */ "./src/app/services/spinner-service/spinner.service.ts");
/* harmony import */ var _services_alert_service_alert_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/alert-service/alert-service.service */ "./src/app/services/alert-service/alert-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");








//import { PeriodicElement } from '../products/products.page';


let ProviderPage = class ProviderPage {
    constructor(providerSrvc, spinnerSrvc, fb, alertSrvc, modalCtrl, platform) {
        this.providerSrvc = providerSrvc;
        this.spinnerSrvc = spinnerSrvc;
        this.fb = fb;
        this.alertSrvc = alertSrvc;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.onCampany = JSON.parse(localStorage.getItem(_configurations_configHelper__WEBPACK_IMPORTED_MODULE_2__["configHelper"].storageKeys.user));
        this.providers = [];
        this.create = false;
        this.isDevice = this.platform.is("cordova");
        this.displayedColumns = ["edit", "name", "email", "address", "cnpj", "delete"];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"]();
    }
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
        this.dataSource.paginator = this.paginator;
    }
    addProvider() {
        console.log(this.providerForm.value);
        this.providerSrvc.addProvider(this.providerForm.value).subscribe(() => {
            this.create = false;
            this.ngOnInit();
            this.spinnerSrvc.hide();
            this.alertSrvc.toast("Fornecedor cadastrado com sucesso!", 2000, "top");
        }, (error) => {
            this.spinnerSrvc.hide();
        });
    }
    createProvider() {
        this.create = true;
    }
    editProvider(param) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        });
    }
    cancel() {
        this.create = false;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    deleteProvider(param) {
        this.alertSrvc.confirm(`Deseja excluir o fornecedor  ?`, () => {
            this.providerSrvc.deleteProvider(param.idProvider).subscribe(() => {
                this.alertSrvc.toast(`Fornecedor excluido com sucesso. `, 2000, "top");
                this.ngOnInit();
                this.spinnerSrvc.hide();
            }, (error) => {
                this.alertSrvc.okAlert("Erro", "Erro ao tentar excluir esse fornecedor, entre em contato com o fornecedor.");
                this.spinnerSrvc.hide();
            });
        });
    }
};
ProviderPage.ctorParameters = () => [
    { type: _services_provider_service_provider_service__WEBPACK_IMPORTED_MODULE_4__["ProviderService"] },
    { type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_alert_service_alert_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], { static: true })
], ProviderPage.prototype, "paginator", void 0);
ProviderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-provider',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./provider.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider/provider.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./provider.page.scss */ "./src/app/provider/provider.page.scss")).default]
    })
], ProviderPage);



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
//# sourceMappingURL=provider-provider-module-es2015.js.map