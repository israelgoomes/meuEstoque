function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-sale-modal-sale-module"], {
  /***/
  "./src/app/modal-sale/modal-sale-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modal-sale/modal-sale-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ModalSalePageRoutingModule */

  /***/
  function srcAppModalSaleModalSaleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalSalePageRoutingModule", function () {
      return ModalSalePageRoutingModule;
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


    var _modal_sale_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modal-sale.page */
    "./src/app/modal-sale/modal-sale.page.ts");

    var routes = [{
      path: '',
      component: _modal_sale_page__WEBPACK_IMPORTED_MODULE_3__["ModalSalePage"]
    }];

    var ModalSalePageRoutingModule = function ModalSalePageRoutingModule() {
      _classCallCheck(this, ModalSalePageRoutingModule);
    };

    ModalSalePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ModalSalePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modal-sale/modal-sale.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/modal-sale/modal-sale.module.ts ***!
    \*************************************************/

  /*! exports provided: ModalSalePageModule */

  /***/
  function srcAppModalSaleModalSaleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalSalePageModule", function () {
      return ModalSalePageModule;
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


    var _modal_sale_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal-sale-routing.module */
    "./src/app/modal-sale/modal-sale-routing.module.ts");

    var ModalSalePageModule = function ModalSalePageModule() {
      _classCallCheck(this, ModalSalePageModule);
    };

    ModalSalePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modal_sale_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalSalePageRoutingModule"]],
      declarations: []
    })], ModalSalePageModule);
    /***/
  },

  /***/
  "./src/app/services/alert-service/alert-service.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/services/alert-service/alert-service.service.ts ***!
    \*****************************************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppServicesAlertServiceAlertServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var AlertService = /*#__PURE__*/function () {
      function AlertService(alertCtrl, toastCtrl) {
        _classCallCheck(this, AlertService);

        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
      }

      _createClass(AlertService, [{
        key: "okAlert",
        value: function okAlert(header, message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: header,
                      message: message,
                      buttons: [{
                        text: "Ok",
                        //        cssClass: "secondary",
                        handler: function handler(blah) {}
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "confirm",
        value: function confirm(message, callback) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertCtrl.create({
                      header: "Excluir?",
                      message: message,
                      buttons: [{
                        text: "Cancelar",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: function handler(blah) {
                          console.log("Confirm Cancel: blah");
                        }
                      }, {
                        text: "Ok",
                        handler: function handler() {
                          callback();
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "toast",
        value: function toast(message, duration, position) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      duration: duration,
                      position: position
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return AlertService;
    }();

    AlertService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AlertService);
    /***/
  },

  /***/
  "./src/app/services/product-service/product.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/services/product-service/product.service.ts ***!
    \*************************************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppServicesProductServiceProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _configurations_configHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../configurations/configHelper */
    "./src/app/configurations/configHelper.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _http_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../http-service/http.service */
    "./src/app/services/http-service/http.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProductService = /*#__PURE__*/function () {
      function ProductService(http, htt2) {
        _classCallCheck(this, ProductService);

        this.http = http;
        this.htt2 = htt2;
        this.updtaeProductData = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.url = "".concat(_configurations_configHelper__WEBPACK_IMPORTED_MODULE_1__["configHelper"].URL2, "/product");
      }

      _createClass(ProductService, [{
        key: "getProducts",
        value: function getProducts(id) {
          var product = this.http.get("".concat(this.url, "/").concat(id)); // const provider= this.http.get(`${configHelper.URL}/provider/${id}`);

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([product]); //this.http.get(`${this.url}/${id}`)
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(id) {
          return this.http["delete"]("".concat(this.url), id);
        }
      }, {
        key: "update",
        value: function update(data) {
          return this.http.put("".concat(this.url, "/").concat(data.idProduct), data);
        }
      }, {
        key: "createProduct",
        value: function createProduct(data) {
          return this.http.post("".concat(this.url), data);
        }
      }, {
        key: "updateForSale",
        value: function updateForSale(id, data) {
          return this.http.put("".concat(this.url, "/cancel-sale/").concat(id), data);
        }
      }, {
        key: "getScanCode",
        value: function getScanCode(id, cdProduct) {
          cdProduct = {
            cdProduct: cdProduct
          };
          return this.http.post("".concat(this.url, "/cdProduct/").concat(id), cdProduct);
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _http_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }];
    };

    ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], ProductService);
    /***/
  }
}]);
//# sourceMappingURL=modal-sale-modal-sale-module-es5.js.map