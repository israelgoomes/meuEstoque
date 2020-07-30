function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-content>\n\n\n  <ion-card>\n    <ion-card-header>\n     <h2>Login</h2> \n     <mat-divider></mat-divider>\n\n    </ion-card-header>\n\n    <ion-card-content>\n      <form #f=\"ngForm\" (ngSubmit)=\"login(f)\" novalidate>\n      <mat-form-field appearance=\"outline\">\n        <mat-label>CNPJ/CPF</mat-label>\n        <input type=\"number\" name=\"cnpjCpf\" ngModel matInput placeholder=\"Placeholder\">\n        <mat-icon matSuffix>assignment_ind</mat-icon>\n        <mat-hint></mat-hint>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Password</mat-label>\n        <input name=\"password\" ngModel type=\"password\" matInput placeholder=\"Placeholder\">\n        <mat-icon matSuffix>vpn_key</mat-icon>\n        <mat-hint></mat-hint>\n      </mat-form-field>\n      <mat-checkbox style=\"float: left;\">Manter-me conectado.</mat-checkbox>\n      <br>\n      <button mat-raised-button type=\"submit\" style=\"border: 1px solid #62462B; width: 100%;\">Logar</button>\n\n    </form>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_12__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: #62462B;\n}\n\nion-card-header, ion-card-content {\n  background-color: white;\n}\n\nion-card-header {\n  text-align: center;\n}\n\nion-card-content {\n  text-align: center;\n}\n\nion-card {\n  max-width: 200px;\n  margin: 15% auto;\n  text-align: center;\n  max-width: 1024px;\n  background-color: white;\n  width: 400px;\n  height: 400px;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nmat-form-field-outline ng-tns-c2-0 ng-star-inserted {\n  border: 1px solid red;\n}\n\nmat-icon {\n  color: #62462B;\n}\n\nmat-divider {\n  color: #62462B;\n  background-color: #62462B;\n}\n\nmat-checkbox {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxsc3JhZWxcXERlc2t0b3BcXGVzdG9xdWVcXGltQXBwL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNBLGtCQUFBO0FDQ0E7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQUo7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI0NjJCO1xyXG59XHJcblxyXG5pb24tY2FyZC1oZWFkZXIsIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWNhcmQtaGVhZGVye1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5pb24tY2FyZC1jb250ZW50e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDE1JSBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOztcclxuICAgIG1heC13aWR0aDogMTAyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkLW91dGxpbmUgbmctdG5zLWMyLTAgbmctc3Rhci1pbnNlcnRlZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxubWF0LWljb257XHJcbiAgICBjb2xvcjogIzYyNDYyQjtcclxufVxyXG5cclxubWF0LWRpdmlkZXJ7XHJcbiAgICBjb2xvcjogIzYyNDYyQjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MjQ2MkI7XHJcbn1cclxuXHJcbm1hdC1jaGVja2JveHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA1cHg7XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjNjI0NjJCO1xufVxuXG5pb24tY2FyZC1oZWFkZXIsIGlvbi1jYXJkLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY2FyZCB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMTUlIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1mb3JtLWZpZWxkLW91dGxpbmUgbmctdG5zLWMyLTAgbmctc3Rhci1pbnNlcnRlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxubWF0LWljb24ge1xuICBjb2xvcjogIzYyNDYyQjtcbn1cblxubWF0LWRpdmlkZXIge1xuICBjb2xvcjogIzYyNDYyQjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyNDYyQjtcbn1cblxubWF0LWNoZWNrYm94IHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _configurations_configHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../configurations/configHelper */
    "./src/app/configurations/configHelper.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/login-service/login.service */
    "./src/app/services/login-service/login.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/spinner-service/spinner.service */
    "./src/app/services/spinner-service/spinner.service.ts");
    /* harmony import */


    var _services_alert_service_alert_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/alert-service/alert-service.service */
    "./src/app/services/alert-service/alert-service.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(menuCtrl, loginSrvc, route, spinnerSrvc, alertSrvc) {
        _classCallCheck(this, LoginPage);

        this.menuCtrl = menuCtrl;
        this.loginSrvc = loginSrvc;
        this.route = route;
        this.spinnerSrvc = spinnerSrvc;
        this.alertSrvc = alertSrvc;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menuCtrl.enable(false);

          if (localStorage.getItem(_configurations_configHelper__WEBPACK_IMPORTED_MODULE_2__["configHelper"].storageKeys.token)) {
            console.log('Token carregado');
            this.route.navigate(['/products']);
          }
        }
      }, {
        key: "login",
        value: function login(f) {
          var _this = this;

          console.log(f.value.cnpjCpf);
          this.loginSrvc.authenticate(f.value.cnpjCpf, f.value.password).subscribe(function (data) {
            console.log('token enviado', data.token);

            _this.loginSrvc.registerLogin(data.token);

            _this.loginSrvc.registerUser(JSON.stringify(data.usuario));

            _this.spinnerSrvc.hide();

            _this.route.navigate(['/products']);

            _this.alertSrvc.toast("Login efetuado com sucesso!", 2000, 'top');
          }, function (error) {
            console.log('erro', error.error.message);
            console.log('erro orig', error);

            _this.spinnerSrvc.hide();

            _this.alertSrvc.okAlert("Erro ao efetuar login", error.error.message);
          });
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }, {
        type: _services_login_service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"]
      }, {
        type: _services_alert_service_alert_service_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss"))["default"]]
    })], LoginPage);
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
  "./src/app/services/http-service/http.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/http-service/http.service.ts ***!
    \*******************************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppServicesHttpServiceHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../spinner-service/spinner.service */
    "./src/app/services/spinner-service/spinner.service.ts");

    var HttpService_1;

    var HttpService = HttpService_1 = /*#__PURE__*/function () {
      function HttpService(httpClient, spinnerSrvc) {
        _classCallCheck(this, HttpService);

        this.httpClient = httpClient;
        this.spinnerSrvc = spinnerSrvc;
      }

      _createClass(HttpService, [{
        key: "createHeader",
        value: function createHeader(header) {
          if (!header) {
            header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
          }

          header = header.append('Content-type', 'application/json');
          header = header.append('accept', 'application/json');
          var token = HttpService_1.getAcessToken;

          if (token) {
            header = header.append('user-token', token);
          }

          return header;
        }
      }, {
        key: "get",
        value: function get(url) {
          var header = this.createHeader();
          this.spinnerSrvc.show();
          return this.httpClient.get(url, {
            headers: header
          });
        }
      }, {
        key: "put",
        value: function put(url, data) {
          var header = this.createHeader();
          this.spinnerSrvc.show();
          return this.httpClient.put(url, data, {
            headers: header
          });
        }
      }, {
        key: "post",
        value: function post(url, data) {
          var header = this.createHeader();
          this.spinnerSrvc.show();
          return this.httpClient.post(url, data, {
            headers: header
          });
        }
      }, {
        key: "delete",
        value: function _delete(url, id) {
          var header = this.createHeader();
          this.spinnerSrvc.show();
          return this.httpClient["delete"]("".concat(url, "/").concat(id), {
            headers: header
          });
        }
      }], [{
        key: "getAcessToken",
        get: function get() {
          return localStorage.getItem(src_app_configurations_configHelper__WEBPACK_IMPORTED_MODULE_1__["configHelper"].storageKeys.token);
        }
      }]);

      return HttpService;
    }();

    HttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"]
      }];
    };

    HttpService = HttpService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], HttpService);
    /***/
  },

  /***/
  "./src/app/services/login-service/login.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/login-service/login.service.ts ***!
    \*********************************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginServiceLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
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


    var src_app_configurations_configHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/configurations/configHelper */
    "./src/app/configurations/configHelper.ts");
    /* harmony import */


    var _http_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../http-service/http.service */
    "./src/app/services/http-service/http.service.ts");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http;
        this.url = "".concat(src_app_configurations_configHelper__WEBPACK_IMPORTED_MODULE_2__["configHelper"].URL);
      }

      _createClass(LoginService, [{
        key: "authenticate",
        value: function authenticate(cnpjCpf, password) {
          return this.http.post("".concat(this.url, "/company/autenticar"), {
            cnpjCpf: cnpjCpf,
            password: password
          });
        }
      }, {
        key: "registerLogin",
        value: function registerLogin(result) {
          localStorage.setItem(src_app_configurations_configHelper__WEBPACK_IMPORTED_MODULE_2__["configHelper"].storageKeys.token, result);
        }
      }, {
        key: "registerUser",
        value: function registerUser(result) {
          localStorage.setItem(src_app_configurations_configHelper__WEBPACK_IMPORTED_MODULE_2__["configHelper"].storageKeys.user, result);
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _http_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }];
    };

    LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginService);
    /***/
  },

  /***/
  "./src/app/services/spinner-service/spinner.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/services/spinner-service/spinner.service.ts ***!
    \*************************************************************/

  /*! exports provided: SpinnerService */

  /***/
  function srcAppServicesSpinnerServiceSpinnerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerService", function () {
      return SpinnerService;
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

    var SpinnerService = /*#__PURE__*/function () {
      function SpinnerService(loading) {
        _classCallCheck(this, SpinnerService);

        this.loading = loading;
        this.isLoading = false;
      }

      _createClass(SpinnerService, [{
        key: "show",
        value: function show() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.isLoading = true;
                    _context4.next = 3;
                    return this.loading.create({
                      message: 'Carregando ...',
                      spinner: 'circles'
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this2.isLoading) {
                          a.dismiss().then(function () {
                            return console.log('abort laoding');
                          });
                        }
                      });
                    });

                  case 3:
                    return _context4.abrupt("return", _context4.sent);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "hide",
        value: function hide() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.isLoading = false;
                    _context5.next = 3;
                    return this.loading.dismiss().then(function () {
                      return console.log('loading dismissed');
                    });

                  case 3:
                    return _context5.abrupt("return", _context5.sent);

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return SpinnerService;
    }();

    SpinnerService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    SpinnerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SpinnerService);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map