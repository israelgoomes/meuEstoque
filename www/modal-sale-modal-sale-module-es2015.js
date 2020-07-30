(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-sale-modal-sale-module"],{

/***/ "./src/app/modal-sale/modal-sale-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modal-sale/modal-sale-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ModalSalePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSalePageRoutingModule", function() { return ModalSalePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modal_sale_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-sale.page */ "./src/app/modal-sale/modal-sale.page.ts");




const routes = [
    {
        path: '',
        component: _modal_sale_page__WEBPACK_IMPORTED_MODULE_3__["ModalSalePage"]
    }
];
let ModalSalePageRoutingModule = class ModalSalePageRoutingModule {
};
ModalSalePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalSalePageRoutingModule);



/***/ }),

/***/ "./src/app/modal-sale/modal-sale.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modal-sale/modal-sale.module.ts ***!
  \*************************************************/
/*! exports provided: ModalSalePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSalePageModule", function() { return ModalSalePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_sale_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-sale-routing.module */ "./src/app/modal-sale/modal-sale-routing.module.ts");






let ModalSalePageModule = class ModalSalePageModule {
};
ModalSalePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_sale_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalSalePageRoutingModule"]
        ],
        declarations: []
    })
], ModalSalePageModule);



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



/***/ })

}]);
//# sourceMappingURL=modal-sale-modal-sale-module-es2015.js.map