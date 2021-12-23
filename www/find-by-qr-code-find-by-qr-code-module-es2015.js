(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["find-by-qr-code-find-by-qr-code-module"],{

/***/ "./src/app/find-by-qr-code/find-by-qr-code-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/find-by-qr-code/find-by-qr-code-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: FindByQrCodePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindByQrCodePageRoutingModule", function() { return FindByQrCodePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _find_by_qr_code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find-by-qr-code.page */ "./src/app/find-by-qr-code/find-by-qr-code.page.ts");




const routes = [
    {
        path: '',
        component: _find_by_qr_code_page__WEBPACK_IMPORTED_MODULE_3__["FindByQrCodePage"]
    }
];
let FindByQrCodePageRoutingModule = class FindByQrCodePageRoutingModule {
};
FindByQrCodePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FindByQrCodePageRoutingModule);



/***/ }),

/***/ "./src/app/find-by-qr-code/find-by-qr-code.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/find-by-qr-code/find-by-qr-code.module.ts ***!
  \***********************************************************/
/*! exports provided: FindByQrCodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindByQrCodePageModule", function() { return FindByQrCodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _find_by_qr_code_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./find-by-qr-code-routing.module */ "./src/app/find-by-qr-code/find-by-qr-code-routing.module.ts");






let FindByQrCodePageModule = class FindByQrCodePageModule {
};
FindByQrCodePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _find_by_qr_code_routing_module__WEBPACK_IMPORTED_MODULE_5__["FindByQrCodePageRoutingModule"]
        ],
        declarations: []
    })
], FindByQrCodePageModule);



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



/***/ })

}]);
//# sourceMappingURL=find-by-qr-code-find-by-qr-code-module-es2015.js.map