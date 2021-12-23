function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modal-edit-product-modal-edit-product-module~products-products-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-edit-product/modal-edit-product.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-edit-product/modal-edit-product.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalEditProductModalEditProductPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Editar Produto</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n  <form [formGroup]=\"productForm\" class=\"example-form\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Produto\" formControlName=\"name\" name=\"teste\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Fabricante\" formControlName=\"manufacturer\" name=\"teste\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Código do Produto\" formControlName=\"cdProduct\" name=\"teste\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width create\">\n      <mat-label>Fornecedor</mat-label>\n      <mat-select [value]=\"productForm.get('idProvider').value\" formControlName=\"idProvider\">\n        <mat-option *ngFor=\"let l of providers\" [value]=\"l.idProvider\">\n          {{l.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Valor entrada\" formControlName=\"vlInput\" name=\"teste\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Valor saída\" formControlName=\"vlOutput\" name=\"teste\">\n    </mat-form-field>\n    \n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"number\" formControlName=\"amount\" placeholder=\"Quantidade\" min=\"1\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Validade\" formControlName=\"name\" name=\"teste\">\n    </mat-form-field>\n  </form>\n</ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title></ion-title>\n    <button mat-raised-button color=\"success\" style=\"background-color: #62462B; float: left; color: white;\" (click)=\"cancel()\">Cancelar</button>\n    <button mat-raised-button style=\"border: 1px solid #62462B; float: right;\" (click)=\"save()\">Salvar</button>\n  \n  </ion-toolbar>\n\n";
    /***/
  },

  /***/
  "./src/app/modal-edit-product/modal-edit-product.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/modal-edit-product/modal-edit-product.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalEditProductModalEditProductPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field {\n  width: 100%;\n}\n\nion-footer {\n  --ion-background-color: white;\n}\n\nion-header {\n  --ion-background-color: #62462B;\n}\n\nion-title {\n  color: white;\n}\n\nbutton {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtZWRpdC1wcm9kdWN0L0M6XFxVc2Vyc1xcbHNyYWVsXFxEZXNrdG9wXFxkZXNrdG9wXFxlc3RvcXVlXFxpbUFwcC9zcmNcXGFwcFxcbW9kYWwtZWRpdC1wcm9kdWN0XFxtb2RhbC1lZGl0LXByb2R1Y3QucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbC1lZGl0LXByb2R1Y3QvbW9kYWwtZWRpdC1wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwtZWRpdC1wcm9kdWN0L21vZGFsLWVkaXQtcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tZm9vdGVye1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXJ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI0NjJCO1xyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbjogMDVweDtcclxufSIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1mb290ZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM2MjQ2MkI7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modal-edit-product/modal-edit-product.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modal-edit-product/modal-edit-product.page.ts ***!
    \***************************************************************/

  /*! exports provided: ModalEditProductPage */

  /***/
  function srcAppModalEditProductModalEditProductPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalEditProductPage", function () {
      return ModalEditProductPage;
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_product_service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/product-service/product.service */
    "./src/app/services/product-service/product.service.ts");
    /* harmony import */


    var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/spinner-service/spinner.service */
    "./src/app/services/spinner-service/spinner.service.ts");
    /* harmony import */


    var _services_alert_service_alert_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/alert-service/alert-service.service */
    "./src/app/services/alert-service/alert-service.service.ts");
    /* harmony import */


    var _services_provider_service_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/provider-service/provider.service */
    "./src/app/services/provider-service/provider.service.ts");
    /* harmony import */


    var _configurations_configHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../configurations/configHelper */
    "./src/app/configurations/configHelper.ts");

    var ModalEditProductPage = /*#__PURE__*/function () {
      function ModalEditProductPage(modalCtrl, fb, productSrvc, spinnerSrvc, alertSrvc, providerSrvc) {
        _classCallCheck(this, ModalEditProductPage);

        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.productSrvc = productSrvc;
        this.spinnerSrvc = spinnerSrvc;
        this.alertSrvc = alertSrvc;
        this.providerSrvc = providerSrvc;
        this.onCompany = JSON.parse(localStorage.getItem(_configurations_configHelper__WEBPACK_IMPORTED_MODULE_8__["configHelper"].storageKeys.user));
        this.providers = [];
      }

      _createClass(ModalEditProductPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.providerSrvc.getProviders(this.onCompany[0].idCompany).subscribe(function (data) {
            _this.providers = data;

            _this.spinnerSrvc.hide();
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
            vlOutput: [this.product.vlOutput]
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this2 = this;

          this.productSrvc.update(this.productForm.value).subscribe(function () {
            _this2.modalCtrl.dismiss();

            _this2.spinnerSrvc.hide();

            _this2.alertSrvc.toast("Produto atualizado com sucesso!", 2000, "top");
          }, function (error) {
            _this2.spinnerSrvc.hide();
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.modalCtrl.dismiss();
        }
      }]);

      return ModalEditProductPage;
    }();

    ModalEditProductPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_product_service_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }, {
        type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]
      }, {
        type: _services_alert_service_alert_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
      }, {
        type: _services_provider_service_provider_service__WEBPACK_IMPORTED_MODULE_7__["ProviderService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalEditProductPage.prototype, "product", void 0);
    ModalEditProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-edit-product',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal-edit-product.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-edit-product/modal-edit-product.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modal-edit-product.page.scss */
      "./src/app/modal-edit-product/modal-edit-product.page.scss"))["default"]]
    })], ModalEditProductPage);
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
  },

  /***/
  "./src/app/services/provider-service/provider.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/services/provider-service/provider.service.ts ***!
    \***************************************************************/

  /*! exports provided: ProviderService */

  /***/
  function srcAppServicesProviderServiceProviderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProviderService", function () {
      return ProviderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_configurations_configHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/configurations/configHelper */
    "./src/app/configurations/configHelper.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _http_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../http-service/http.service */
    "./src/app/services/http-service/http.service.ts");

    var ProviderService = /*#__PURE__*/function () {
      function ProviderService(http) {
        _classCallCheck(this, ProviderService);

        this.http = http;
        this.url = "".concat(src_app_configurations_configHelper__WEBPACK_IMPORTED_MODULE_1__["configHelper"].URL2, "/provider");
      }

      _createClass(ProviderService, [{
        key: "getProviders",
        value: function getProviders(id) {
          return this.http.get("".concat(this.url, "/").concat(id));
        }
      }, {
        key: "addProvider",
        value: function addProvider(data) {
          return this.http.post("".concat(this.url), data);
        }
      }, {
        key: "updateProvider",
        value: function updateProvider(data) {
          return this.http.put("".concat(this.url, "/").concat(data.idProvider), data);
        }
      }, {
        key: "deleteProvider",
        value: function deleteProvider(id) {
          return this.http["delete"]("".concat(this.url), id);
        }
      }]);

      return ProviderService;
    }();

    ProviderService.ctorParameters = function () {
      return [{
        type: _http_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }];
    };

    ProviderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], ProviderService);
    /***/
  }
}]);
//# sourceMappingURL=default~modal-edit-product-modal-edit-product-module~products-products-module-es5.js.map