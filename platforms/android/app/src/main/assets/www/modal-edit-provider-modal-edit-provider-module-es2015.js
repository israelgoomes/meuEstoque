(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-edit-provider-modal-edit-provider-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-edit-provider/modal-edit-provider.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-edit-provider/modal-edit-provider.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>modal-edit-provider</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/modal-edit-provider/modal-edit-provider-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modal-edit-provider/modal-edit-provider-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ModalEditProviderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditProviderPageRoutingModule", function() { return ModalEditProviderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modal_edit_provider_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-edit-provider.page */ "./src/app/modal-edit-provider/modal-edit-provider.page.ts");




const routes = [
    {
        path: '',
        component: _modal_edit_provider_page__WEBPACK_IMPORTED_MODULE_3__["ModalEditProviderPage"]
    }
];
let ModalEditProviderPageRoutingModule = class ModalEditProviderPageRoutingModule {
};
ModalEditProviderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalEditProviderPageRoutingModule);



/***/ }),

/***/ "./src/app/modal-edit-provider/modal-edit-provider.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modal-edit-provider/modal-edit-provider.module.ts ***!
  \*******************************************************************/
/*! exports provided: ModalEditProviderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditProviderPageModule", function() { return ModalEditProviderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_edit_provider_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-edit-provider-routing.module */ "./src/app/modal-edit-provider/modal-edit-provider-routing.module.ts");
/* harmony import */ var _modal_edit_provider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-edit-provider.page */ "./src/app/modal-edit-provider/modal-edit-provider.page.ts");







let ModalEditProviderPageModule = class ModalEditProviderPageModule {
};
ModalEditProviderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_edit_provider_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalEditProviderPageRoutingModule"]
        ],
        declarations: [_modal_edit_provider_page__WEBPACK_IMPORTED_MODULE_6__["ModalEditProviderPage"]]
    })
], ModalEditProviderPageModule);



/***/ }),

/***/ "./src/app/modal-edit-provider/modal-edit-provider.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modal-edit-provider/modal-edit-provider.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWVkaXQtcHJvdmlkZXIvbW9kYWwtZWRpdC1wcm92aWRlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modal-edit-provider/modal-edit-provider.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modal-edit-provider/modal-edit-provider.page.ts ***!
  \*****************************************************************/
/*! exports provided: ModalEditProviderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditProviderPage", function() { return ModalEditProviderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ModalEditProviderPage = class ModalEditProviderPage {
    constructor() { }
    ngOnInit() {
    }
};
ModalEditProviderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-edit-provider',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-edit-provider.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-edit-provider/modal-edit-provider.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-edit-provider.page.scss */ "./src/app/modal-edit-provider/modal-edit-provider.page.scss")).default]
    })
], ModalEditProviderPage);



/***/ })

}]);
//# sourceMappingURL=modal-edit-provider-modal-edit-provider-module-es2015.js.map