function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-edit-product-modal-edit-product-module"], {
  /***/
  "./src/app/modal-edit-product/modal-edit-product-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modal-edit-product/modal-edit-product-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ModalEditProductPageRoutingModule */

  /***/
  function srcAppModalEditProductModalEditProductRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalEditProductPageRoutingModule", function () {
      return ModalEditProductPageRoutingModule;
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


    var _modal_edit_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modal-edit-product.page */
    "./src/app/modal-edit-product/modal-edit-product.page.ts");

    var routes = [{
      path: '',
      component: _modal_edit_product_page__WEBPACK_IMPORTED_MODULE_3__["ModalEditProductPage"]
    }];

    var ModalEditProductPageRoutingModule = function ModalEditProductPageRoutingModule() {
      _classCallCheck(this, ModalEditProductPageRoutingModule);
    };

    ModalEditProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ModalEditProductPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modal-edit-product/modal-edit-product.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modal-edit-product/modal-edit-product.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ModalEditProductPageModule */

  /***/
  function srcAppModalEditProductModalEditProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalEditProductPageModule", function () {
      return ModalEditProductPageModule;
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


    var _modal_edit_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal-edit-product-routing.module */
    "./src/app/modal-edit-product/modal-edit-product-routing.module.ts");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var ModalEditProductPageModule = function ModalEditProductPageModule() {
      _classCallCheck(this, ModalEditProductPageModule);
    };

    ModalEditProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _modal_edit_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalEditProductPageRoutingModule"]],
      declarations: []
    })], ModalEditProductPageModule);
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

    var ProductService = /*#__PURE__*/function () {
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
        this.updtaeProductData = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.url = "".concat(_configurations_configHelper__WEBPACK_IMPORTED_MODULE_1__["configHelper"].URL, "/product");
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
      }];
    };

    ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], ProductService);
    /***/
  }
}]);
//# sourceMappingURL=modal-edit-product-modal-edit-product-module-es5.js.map