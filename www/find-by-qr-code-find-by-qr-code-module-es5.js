function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["find-by-qr-code-find-by-qr-code-module"], {
  /***/
  "./src/app/find-by-qr-code/find-by-qr-code-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/find-by-qr-code/find-by-qr-code-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: FindByQrCodePageRoutingModule */

  /***/
  function srcAppFindByQrCodeFindByQrCodeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FindByQrCodePageRoutingModule", function () {
      return FindByQrCodePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _find_by_qr_code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./find-by-qr-code.page */
    "./src/app/find-by-qr-code/find-by-qr-code.page.ts");

    var routes = [{
      path: '',
      component: _find_by_qr_code_page__WEBPACK_IMPORTED_MODULE_3__["FindByQrCodePage"]
    }];

    var FindByQrCodePageRoutingModule = function FindByQrCodePageRoutingModule() {
      _classCallCheck(this, FindByQrCodePageRoutingModule);
    };

    FindByQrCodePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FindByQrCodePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/find-by-qr-code/find-by-qr-code.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/find-by-qr-code/find-by-qr-code.module.ts ***!
    \***********************************************************/

  /*! exports provided: FindByQrCodePageModule */

  /***/
  function srcAppFindByQrCodeFindByQrCodeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FindByQrCodePageModule", function () {
      return FindByQrCodePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _find_by_qr_code_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./find-by-qr-code-routing.module */
    "./src/app/find-by-qr-code/find-by-qr-code-routing.module.ts");

    var FindByQrCodePageModule = function FindByQrCodePageModule() {
      _classCallCheck(this, FindByQrCodePageModule);
    };

    FindByQrCodePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _find_by_qr_code_routing_module__WEBPACK_IMPORTED_MODULE_5__["FindByQrCodePageRoutingModule"]],
      declarations: []
    })], FindByQrCodePageModule);
    /***/
  }
}]);
//# sourceMappingURL=find-by-qr-code-find-by-qr-code-module-es5.js.map