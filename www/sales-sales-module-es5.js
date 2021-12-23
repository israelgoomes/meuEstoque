function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sales-sales-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sale-table/sale-table.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sale-table/sale-table.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSaleTableSaleTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-form-field id=\"filter\">\n  <mat-label>Procurar</mat-label>\n  <input matInput (keyup)=\"applyFilter($event)\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\">\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Nome </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element?.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"manufacturer\">\n      <th mat-header-cell *matHeaderCellDef> Fabricante </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element?.manufacturer}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"provider\">\n      <th mat-header-cell *matHeaderCellDef> Fornecedor </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element?.provider}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"cdProductSold\">\n      <th mat-header-cell *matHeaderCellDef> Código </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element?.cdProductSold}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"vlInput\">\n      <th mat-header-cell *matHeaderCellDef> Valor Entrada</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element?.vlInput}} </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"vlOutput\">\n      <th mat-header-cell *matHeaderCellDef> Valor Saída</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element?.vlOutput}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"amount\">\n      <th mat-header-cell *matHeaderCellDef> Quantidade </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element?.amount}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"lucro\">\n      <th mat-header-cell *matHeaderCellDef> Lucro </th>\n      <td mat-cell *matCellDef=\"let element\"> {{(element?.vlOutput-element?.vlInput)*element?.amount}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"dtSale\">\n      <th mat-header-cell *matHeaderCellDef> Data </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element?.dtSale}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"delete\">\n      <th mat-header-cell *matHeaderCellDef>\n      </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <ion-icon id=\"delete\" (click)=\"cancelSale(element)\" name=\"trash-bin-outline\"></ion-icon>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20, 100]\" showFirstLastButtons>\n  </mat-paginator>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sales/sales.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sales/sales.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalesSalesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Gestão de Estoque</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <app-sale-table *ngIf=\"sales && !isDevice\" [data]=\"sales\" (cancel)=\"cancelSale($event)\"></app-sale-table>\n\n  <div *ngIf=\"isDevice\">\n\n    <mat-form-field id=\"filter\">\n      <mat-label>Procurar</mat-label>\n      <input matInput [(ngModel)]=\"args\">\n    </mat-form-field>\n\n    <mat-accordion>\n      <mat-expansion-panel *ngFor=\"let sale of sales | search : args\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            {{sale.name}}\n          </mat-panel-title>\n          <mat-panel-description>\n            {{(sale?.vlOutput-sale?.vlInput)*sale?.amount | currency: 'BRL'}}\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <p> Fabricante: {{sale.manufacturer}} </p>\n        <p> Fornecedor: {{sale.provider}} </p>\n        <p> Código: {{sale.cdProductSold}} </p>\n        <p> Preço entrada: {{sale.vlInput}} </p>\n        <p> Preço saida: {{sale.vlOutput}} </p>\n        <p> Quantidade: {{sale.amount}} </p>\n      </mat-expansion-panel>\n    </mat-accordion>\n\n  </div>\n\n  <ion-card>\n    <ion-card-header>\n      <h2>Total</h2>\n    </ion-card-header>\n    <ion-card-content style=\"text-align: center;\">\n      <h1 [ngClass]=\"total > 0 ? 'positivo' : 'negativo' \">{{total | currency: 'BRL'}}</h1>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/components/sale-table/sale-table.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/sale-table/sale-table.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSaleTableSaleTableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.mat-elevation-z8 {\n  margin: 10px;\n}\n\nion-icon#delete {\n  font-size: 20px;\n  color: red;\n}\n\nion-icon#edit {\n  font-size: 30px;\n  color: #62462B;\n}\n\nion-header {\n  --ion-background-color: #62462B;\n}\n\nion-title {\n  color: white;\n}\n\nmat-form-field#filter {\n  width: 99%;\n  margin: 10px;\n}\n\n.create {\n  margin: 10px;\n  width: 100%;\n}\n\nion-card-header {\n  text-align: center;\n}\n\n.positivo {\n  color: green;\n}\n\n.negativo {\n  color: red;\n}\n\nmat-expansion-panel {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.mat-expansion-panel-header-description {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYWxlLXRhYmxlL0M6XFxVc2Vyc1xcbHNyYWVsXFxEZXNrdG9wXFxkZXNrdG9wXFxlc3RvcXVlXFxpbUFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2FsZS10YWJsZVxcc2FsZS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zYWxlLXRhYmxlL3NhbGUtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0NBOztBREVBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDQTs7QURFQTtFQUNBLCtCQUFBO0FDQ0E7O0FERUE7RUFDQSxZQUFBO0FDQ0E7O0FERUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NBOztBREVBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDQTs7QURFQTtFQUNBLGtCQUFBO0FDQ0E7O0FERUE7RUFDQSxZQUFBO0FDQ0E7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNFQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2FsZS10YWJsZS9zYWxlLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWVsZXZhdGlvbi16OHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1pY29uI2RlbGV0ZXtcclxuZm9udC1zaXplOiAyMHB4O1xyXG5jb2xvcjogcmVkO1xyXG59XHJcblxyXG5pb24taWNvbiNlZGl0e1xyXG5mb250LXNpemU6IDMwcHg7XHJcbmNvbG9yOiAjNjI0NjJCO1xyXG59XHJcblxyXG5pb24taGVhZGVye1xyXG4tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI0NjJCO1xyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbmNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQjZmlsdGVye1xyXG53aWR0aDogOTklO1xyXG5tYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5jcmVhdGV7XHJcbm1hcmdpbjogMTBweDtcclxud2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWhlYWRlcntcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucG9zaXRpdm97XHJcbmNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLm5lZ2F0aXZve1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbm1hdC1leHBhbnNpb24tcGFuZWx7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn0iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16OCB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuaW9uLWljb24jZGVsZXRlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogcmVkO1xufVxuXG5pb24taWNvbiNlZGl0IHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzYyNDYyQjtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM2MjQ2MkI7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxubWF0LWZvcm0tZmllbGQjZmlsdGVyIHtcbiAgd2lkdGg6IDk5JTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY3JlYXRlIHtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucG9zaXRpdm8ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5uZWdhdGl2byB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/sale-table/sale-table.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/sale-table/sale-table.component.ts ***!
    \***************************************************************/

  /*! exports provided: SaleTableComponent */

  /***/
  function srcAppComponentsSaleTableSaleTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaleTableComponent", function () {
      return SaleTableComponent;
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


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");

    var SaleTableComponent = /*#__PURE__*/function () {
      function SaleTableComponent() {
        _classCallCheck(this, SaleTableComponent);

        this.displayedColumns = ['name', 'manufacturer', 'provider', 'cdProductSold', 'vlInput', 'vlOutput', 'amount', 'dtSale', 'lucro', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SaleTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('CHEGOU!!', this.data);
          this.dataSource.data = this.data;
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "cancelSale",
        value: function cancelSale(param) {
          this.cancel.emit(param);
        }
      }]);

      return SaleTableComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], SaleTableComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SaleTableComponent.prototype, "data", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SaleTableComponent.prototype, "cancel", void 0);
    SaleTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sale-table',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sale-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sale-table/sale-table.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sale-table.component.scss */
      "./src/app/components/sale-table/sale-table.component.scss"))["default"]]
    })], SaleTableComponent);
    /***/
  },

  /***/
  "./src/app/sales/sales-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/sales/sales-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: SalesPageRoutingModule */

  /***/
  function srcAppSalesSalesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesPageRoutingModule", function () {
      return SalesPageRoutingModule;
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


    var _sales_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sales.page */
    "./src/app/sales/sales.page.ts");

    var routes = [{
      path: '',
      component: _sales_page__WEBPACK_IMPORTED_MODULE_3__["SalesPage"]
    }];

    var SalesPageRoutingModule = function SalesPageRoutingModule() {
      _classCallCheck(this, SalesPageRoutingModule);
    };

    SalesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SalesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/sales/sales.module.ts":
  /*!***************************************!*\
    !*** ./src/app/sales/sales.module.ts ***!
    \***************************************/

  /*! exports provided: SalesPageModule */

  /***/
  function srcAppSalesSalesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesPageModule", function () {
      return SalesPageModule;
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


    var _sales_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sales-routing.module */
    "./src/app/sales/sales-routing.module.ts");
    /* harmony import */


    var _sales_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sales.page */
    "./src/app/sales/sales.page.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../pipes/pipes.module */
    "./src/pipes/pipes.module.ts");
    /* harmony import */


    var _components_sale_table_sale_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../components/sale-table/sale-table.component */
    "./src/app/components/sale-table/sale-table.component.ts");

    var SalesPageModule = function SalesPageModule() {
      _classCallCheck(this, SalesPageModule);
    };

    SalesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__["PipesModule"], _sales_routing_module__WEBPACK_IMPORTED_MODULE_5__["SalesPageRoutingModule"]],
      declarations: [_sales_page__WEBPACK_IMPORTED_MODULE_6__["SalesPage"], _components_sale_table_sale_table_component__WEBPACK_IMPORTED_MODULE_17__["SaleTableComponent"]]
    })], SalesPageModule);
    /***/
  },

  /***/
  "./src/app/sales/sales.page.scss":
  /*!***************************************!*\
    !*** ./src/app/sales/sales.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalesSalesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.mat-elevation-z8 {\n  margin: 10px;\n}\n\nion-icon#delete {\n  font-size: 20px;\n  color: red;\n}\n\nion-icon#edit {\n  font-size: 30px;\n  color: #62462B;\n}\n\nion-header {\n  --ion-background-color: #62462B;\n}\n\nion-title {\n  color: white;\n}\n\nmat-form-field#filter {\n  width: 99%;\n  margin: 10px;\n}\n\n.create {\n  margin: 10px;\n  width: 100%;\n}\n\nion-card-header {\n  text-align: center;\n}\n\n.positivo {\n  color: green;\n}\n\n.negativo {\n  color: red;\n}\n\nmat-expansion-panel {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.mat-expansion-panel-header-description {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsZXMvQzpcXFVzZXJzXFxsc3JhZWxcXERlc2t0b3BcXGRlc2t0b3BcXGVzdG9xdWVcXGltQXBwL3NyY1xcYXBwXFxzYWxlc1xcc2FsZXMucGFnZS5zY3NzIiwic3JjL2FwcC9zYWxlcy9zYWxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FERUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUU7RUFDRSxVQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3NhbGVzL3NhbGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1lbGV2YXRpb24tejh7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG5cclxuaW9uLWljb24jZGVsZXRle1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5pb24taWNvbiNlZGl0e1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogIzYyNDYyQjtcclxufVxyXG5cclxuaW9uLWhlYWRlcntcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI0NjJCO1xyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCNmaWx0ZXJ7XHJcbiAgd2lkdGg6IDk5JTtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5jcmVhdGV7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tY2FyZC1oZWFkZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucG9zaXRpdm97XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuICBcclxuICAubmVnYXRpdm97XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuXHJcbiAgbWF0LWV4cGFuc2lvbi1wYW5lbHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59IiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejgge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbmlvbi1pY29uI2RlbGV0ZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHJlZDtcbn1cblxuaW9uLWljb24jZWRpdCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM2MjQ2MkI7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI0NjJCO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbm1hdC1mb3JtLWZpZWxkI2ZpbHRlciB7XG4gIHdpZHRoOiA5OSU7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmNyZWF0ZSB7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBvc2l0aXZvIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ubmVnYXRpdm8ge1xuICBjb2xvcjogcmVkO1xufVxuXG5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/sales/sales.page.ts":
  /*!*************************************!*\
    !*** ./src/app/sales/sales.page.ts ***!
    \*************************************/

  /*! exports provided: SalesPage */

  /***/
  function srcAppSalesSalesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesPage", function () {
      return SalesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _configurations_configHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../configurations/configHelper */
    "./src/app/configurations/configHelper.ts");
    /* harmony import */


    var _services_sale_service_sale_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/sale-service/sale.service */
    "./src/app/services/sale-service/sale.service.ts");
    /* harmony import */


    var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/spinner-service/spinner.service */
    "./src/app/services/spinner-service/spinner.service.ts");
    /* harmony import */


    var _services_alert_service_alert_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/alert-service/alert-service.service */
    "./src/app/services/alert-service/alert-service.service.ts");
    /* harmony import */


    var _services_product_service_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/product-service/product.service */
    "./src/app/services/product-service/product.service.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);

    var SalesPage = /*#__PURE__*/function () {
      function SalesPage(saleSrvc, spinnerSrvc, alertSrvc, productSrvc, platform) {
        _classCallCheck(this, SalesPage);

        this.saleSrvc = saleSrvc;
        this.spinnerSrvc = spinnerSrvc;
        this.alertSrvc = alertSrvc;
        this.productSrvc = productSrvc;
        this.platform = platform;
        this.total = 0;
        this.onCampany = JSON.parse(localStorage.getItem(_configurations_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.user));
        this.isDevice = this.platform.is("cordova");
        this.displayedColumns = ['name', 'manufacturer', 'provider', 'cdProductSold', 'vlInput', 'vlOutput', 'amount', 'dtSale', 'lucro', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"]();
      }

      _createClass(SalesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.total = 0;
          this.saleSrvc.getSales(this.onCampany[0].idCompany).subscribe(function (sale) {
            console.log(sale);

            if (sale.length > 0) {
              sale.forEach(function (v) {
                v.dtSale = moment__WEBPACK_IMPORTED_MODULE_10__(v.dtSave).format("DD/MM/YYYY");
                _this.total += (v.vlOutput - v.vlInput) * v.amount;
              });
            }

            _this.dataSource.data = sale;
            _this.sales = sale;
            console.log('Sales', _this.sales);

            _this.spinnerSrvc.hide();
          });
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "cancelSale",
        value: function cancelSale(param) {
          var _this2 = this;

          this.alertSrvc.confirm("Deseja cancelar essa venda ?", function () {
            _this2.productSrvc.updateForSale(param.idProduct, param).subscribe(function () {
              _this2.saleSrvc.deleteSale(param.idSale).subscribe(function () {
                _this2.alertSrvc.toast("Venda cancelada com sucesso. ", 2000, 'top');

                _this2.spinnerSrvc.hide();

                _this2.ngOnInit();
              });

              _this2.spinnerSrvc.hide();
            }, function (error) {
              console.log('Erro ao excluir', error);

              _this2.alertSrvc.okAlert('Erro', 'Erro ao tentar excluir esse produto, entre em contato com o fornecedor.');

              _this2.spinnerSrvc.hide();
            });
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }]);

      return SalesPage;
    }();

    SalesPage.ctorParameters = function () {
      return [{
        type: _services_sale_service_sale_service__WEBPACK_IMPORTED_MODULE_4__["SaleService"]
      }, {
        type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]
      }, {
        type: _services_alert_service_alert_service_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
      }, {
        type: _services_product_service_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], {
      "static": true
    })], SalesPage.prototype, "paginator", void 0);
    SalesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-sales',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sales.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sales/sales.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sales.page.scss */
      "./src/app/sales/sales.page.scss"))["default"]]
    })], SalesPage);
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
//# sourceMappingURL=sales-sales-module-es5.js.map