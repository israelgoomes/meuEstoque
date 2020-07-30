(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/find-by-qr-code/find-by-qr-code.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/find-by-qr-code/find-by-qr-code.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\n  <ion-icon (click)=\"voltar()\" name=\"arrow-back-outline\"></ion-icon>\n</ion-toolbar>\n\n<ion-content>\n\n<ion-card text-center>\n  <ion-card-header>\n    <ngx-qrcode element-type=\"img\" [value]=\"product[0]?.cdProduct\" class=\"my-code\">\n    </ngx-qrcode>\n    {{product[0]?.cdProduct}}\n    <h2>Produto: {{product[0]?.name}}</h2>\n  </ion-card-header>\n  <ion-card-content>\n    <p>Fabricante: {{product[0]?.manufacturer}}</p>\n    <p>Fornecedor: {{product[0]?.provider}}</p>\n    <p>Quantidade: {{product[0]?.amount}}</p>\n    <p>Data de Registro: {{product[0]?.dtRegister}}</p>\n    <p>Código: {{product[0]?.cdProduct}}</p>\n    <p>Preço: R$ {{product[0]?.vlInput}}</p>\n    <p>Valor de entrada: R$ {{product[0]?.vlOutput}}</p>\n    <!-- <p>{{product[0]?.name}}</p> -->\n\n\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n");

/***/ }),

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-sale/modal-sale.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-sale/modal-sale.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Cadastro de venda</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-card>\n  <ion-card-header>\n    \n  </ion-card-header>\n  <ion-card-content>\n    <form [formGroup]=\"saleForm\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"number\" formControlName=\"amount\" placeholder=\"Quantidade\" min=\"1\" [max]=\"product.amount\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"\" formControlName=\"cdProductSold\" placeholder=\"Código da venda\" min=\"1\" [max]=\"product.amount\">\n    </mat-form-field>\n  </form>\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title></ion-title>\n    <button mat-raised-button color=\"success\" style=\"background-color: #62462B; float: left; color: white;\" (click)=\"cancel()\">Cancelar</button>\n    <button mat-raised-button style=\"border: 1px solid #62462B; float: right;\" (click)=\"save()\">Salvar</button>\n  \n  </ion-toolbar>");

/***/ }),

/***/ "./src/app/find-by-qr-code/find-by-qr-code.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/find-by-qr-code/find-by-qr-code.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  font-size: 30px;\n}\n\nion-card-header {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluZC1ieS1xci1jb2RlL0M6XFxVc2Vyc1xcbHNyYWVsXFxEZXNrdG9wXFxlc3RvcXVlXFxpbUFwcC9zcmNcXGFwcFxcZmluZC1ieS1xci1jb2RlXFxmaW5kLWJ5LXFyLWNvZGUucGFnZS5zY3NzIiwic3JjL2FwcC9maW5kLWJ5LXFyLWNvZGUvZmluZC1ieS1xci1jb2RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9maW5kLWJ5LXFyLWNvZGUvZmluZC1ieS1xci1jb2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5pb24tY2FyZC1oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCJpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/find-by-qr-code/find-by-qr-code.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/find-by-qr-code/find-by-qr-code.page.ts ***!
  \*********************************************************/
/*! exports provided: FindByQrCodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindByQrCodePage", function() { return FindByQrCodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_product_service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/product-service/product.service */ "./src/app/services/product-service/product.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _configurations_configHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configurations/configHelper */ "./src/app/configurations/configHelper.ts");
/* harmony import */ var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/spinner-service/spinner.service */ "./src/app/services/spinner-service/spinner.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let FindByQrCodePage = class FindByQrCodePage {
    constructor(productSrvc, spinnerSrvc, modalCtrl) {
        this.productSrvc = productSrvc;
        this.spinnerSrvc = spinnerSrvc;
        this.modalCtrl = modalCtrl;
        this.onCOmpany = JSON.parse(localStorage.getItem(_configurations_configHelper__WEBPACK_IMPORTED_MODULE_3__["configHelper"].storageKeys.user));
    }
    ngOnInit() {
        console.log('Código do qr code', this.cdProduct);
        this.productSrvc.getScanCode(this.onCOmpany[0].idCompany, this.cdProduct).subscribe((product) => {
            console.log('Produto pelo codigo', product);
            product.dtRegister = moment__WEBPACK_IMPORTED_MODULE_5__(product.dtRegister).format("DD/MM/YYYY HH:mm:ss");
            this.product = product;
            this.spinnerSrvc.hide();
        });
    }
    voltar() {
        this.modalCtrl.dismiss();
    }
};
FindByQrCodePage.ctorParameters = () => [
    { type: src_app_services_product_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] },
    { type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], FindByQrCodePage.prototype, "cdProduct", void 0);
FindByQrCodePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-find-by-qr-code',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./find-by-qr-code.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/find-by-qr-code/find-by-qr-code.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./find-by-qr-code.page.scss */ "./src/app/find-by-qr-code/find-by-qr-code.page.scss")).default]
    })
], FindByQrCodePage);



/***/ }),

/***/ "./src/app/modal-edit-product/modal-edit-product.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modal-edit-product/modal-edit-product.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\n  width: 100%;\n}\n\nion-footer {\n  --ion-background-color: white;\n}\n\nion-header {\n  --ion-background-color: #62462B;\n}\n\nion-title {\n  color: white;\n}\n\nbutton {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtZWRpdC1wcm9kdWN0L0M6XFxVc2Vyc1xcbHNyYWVsXFxEZXNrdG9wXFxlc3RvcXVlXFxpbUFwcC9zcmNcXGFwcFxcbW9kYWwtZWRpdC1wcm9kdWN0XFxtb2RhbC1lZGl0LXByb2R1Y3QucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbC1lZGl0LXByb2R1Y3QvbW9kYWwtZWRpdC1wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwtZWRpdC1wcm9kdWN0L21vZGFsLWVkaXQtcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tZm9vdGVye1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXJ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI0NjJCO1xyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbjogMDVweDtcclxufSIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1mb290ZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM2MjQ2MkI7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59Il19 */");

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

/***/ "./src/app/modal-sale/modal-sale.page.scss":
/*!*************************************************!*\
  !*** ./src/app/modal-sale/modal-sale.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\n  width: 100%;\n}\n\nion-footer {\n  --ion-background-color: white;\n}\n\nion-header {\n  --ion-background-color: #62462B;\n}\n\nion-title {\n  color: white;\n}\n\nbutton {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtc2FsZS9DOlxcVXNlcnNcXGxzcmFlbFxcRGVza3RvcFxcZXN0b3F1ZVxcaW1BcHAvc3JjXFxhcHBcXG1vZGFsLXNhbGVcXG1vZGFsLXNhbGUucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbC1zYWxlL21vZGFsLXNhbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2RhbC1zYWxlL21vZGFsLXNhbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLWZvb3RlcntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24taGVhZGVye1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzYyNDYyQjtcclxufVxyXG5cclxuaW9uLXRpdGxle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBtYXJnaW46IDA1cHg7XHJcbn0iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI0NjJCO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modal-sale/modal-sale.page.ts":
/*!***********************************************!*\
  !*** ./src/app/modal-sale/modal-sale.page.ts ***!
  \***********************************************/
/*! exports provided: ModalSalePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSalePage", function() { return ModalSalePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_sale_service_sale_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/sale-service/sale.service */ "./src/app/services/sale-service/sale.service.ts");
/* harmony import */ var _services_alert_service_alert_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/alert-service/alert-service.service */ "./src/app/services/alert-service/alert-service.service.ts");
/* harmony import */ var _services_product_service_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/product-service/product.service */ "./src/app/services/product-service/product.service.ts");
/* harmony import */ var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/spinner-service/spinner.service */ "./src/app/services/spinner-service/spinner.service.ts");
/* harmony import */ var _configurations_configHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../configurations/configHelper */ "./src/app/configurations/configHelper.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);










let ModalSalePage = class ModalSalePage {
    constructor(fb, modalCtrl, saleSrvc, alertSrvc, productSrvc, spinnerSrvc) {
        this.fb = fb;
        this.modalCtrl = modalCtrl;
        this.saleSrvc = saleSrvc;
        this.alertSrvc = alertSrvc;
        this.productSrvc = productSrvc;
        this.spinnerSrvc = spinnerSrvc;
        this.onCampany = JSON.parse(localStorage.getItem(_configurations_configHelper__WEBPACK_IMPORTED_MODULE_8__["configHelper"].storageKeys.user));
    }
    ngOnInit() {
        this.saleForm = this.fb.group({
            cdProductSold: [""],
            dtSale: [moment__WEBPACK_IMPORTED_MODULE_9__(new Date()).format("DD/MM/YYYY hh:mm:ss")],
            amount: [""],
            vlInput: [this.product.vlInput],
            vlOutput: [this.product.vlOutput],
            inActive: ["S"],
            idCompany: [this.onCampany[0].idCompany],
            idProduct: [this.product.idProduct],
        });
    }
    save() {
        this.product.amount = this.product.amount - this.saleForm.get("amount").value;
        this.saleSrvc.createSale(this.product, this.saleForm.value).subscribe(() => {
            this.spinnerSrvc.hide();
            this.alertSrvc.toast(`A venda do Produto ${this.product.name} foi realizada com sucesso!
                               <br> Quantidade: ${this.saleForm.get("amount").value}`, 2000, "top");
            this.modalCtrl.dismiss();
        }, (error) => {
            this.spinnerSrvc.hide();
        });
    }
    cancel() {
        this.modalCtrl.dismiss();
    }
};
ModalSalePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _services_sale_service_sale_service__WEBPACK_IMPORTED_MODULE_4__["SaleService"] },
    { type: _services_alert_service_alert_service_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _services_product_service_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] },
    { type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalSalePage.prototype, "product", void 0);
ModalSalePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-sale',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-sale.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-sale/modal-sale.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-sale.page.scss */ "./src/app/modal-sale/modal-sale.page.scss")).default]
    })
], ModalSalePage);



/***/ }),

/***/ "./src/app/services/sale-service/sale.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/sale-service/sale.service.ts ***!
  \*******************************************************/
/*! exports provided: SaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleService", function() { return SaleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _configurations_configHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../configurations/configHelper */ "./src/app/configurations/configHelper.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-service/http.service */ "./src/app/services/http-service/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let SaleService = class SaleService {
    constructor(http) {
        this.http = http;
        this.url = `${_configurations_configHelper__WEBPACK_IMPORTED_MODULE_1__["configHelper"].URL}/sale`;
    }
    getSales(id) {
        return this.http.get(`${this.url}/${id}`);
    }
    createSale(dataUpdate, dataCreate) {
        const updateProduct = this.http.put(`${_configurations_configHelper__WEBPACK_IMPORTED_MODULE_1__["configHelper"].URL}/product/${dataUpdate.idProduct}`, dataUpdate);
        const createSale = this.http.post(`${this.url}`, dataCreate);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([updateProduct, createSale]);
    }
    deleteSale(id) {
        // console.log('idProduct', idProduct)
        // console.log('uantidade', idProduct)
        // console.log('idSale', idSale)
        // console.log('idCompany', idCompnay)
        // const updateProduct = this.http.put(`${configHelper.URL2}/product/${idCompnay}/cancel-sale/${idProduct}`, amount);
        // const deleteSale = this.http.delete(`${this.url}`, idSale);
        return this.http.delete(`${this.url}`, id);
    }
};
SaleService.ctorParameters = () => [
    { type: _http_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
SaleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], SaleService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map