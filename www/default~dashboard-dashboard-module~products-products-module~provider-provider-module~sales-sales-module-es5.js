function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~products-products-module~provider-provider-module~sales-sales-module"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js ***!
    \*******************************************************************/

  /*! exports provided: BreakpointObserver, Breakpoints, LayoutModule, MediaMatcher */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015LayoutJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreakpointObserver", function () {
      return BreakpointObserver;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Breakpoints", function () {
      return Breakpoints;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaMatcher", function () {
      return MediaMatcher;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/layout/layout-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LayoutModule
    });
    LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LayoutModule_Factory(t) {
        return new (t || LayoutModule)();
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/layout/media-matcher.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Global registry for all dynamically-created, injected media queries.
     * @type {?}
     */


    var mediaQueriesForWebkitCompatibility = new Set();
    /**
     * Style tag that holds all of the dynamically-created media queries.
     * @type {?}
     */

    var mediaQueryStyleNode;
    /**
     * A utility for calling matchMedia queries.
     */

    var MediaMatcher = /*#__PURE__*/function () {
      /**
       * @param {?} _platform
       */
      function MediaMatcher(_platform) {
        _classCallCheck(this, MediaMatcher);

        this._platform = _platform;
        this._matchMedia = this._platform.isBrowser && window.matchMedia ? // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
        // call it from a different scope.
        window.matchMedia.bind(window) : noopMatchMedia;
      }
      /**
       * Evaluates the given media query and returns the native MediaQueryList from which results
       * can be retrieved.
       * Confirms the layout engine will trigger for the selector query provided and returns the
       * MediaQueryList for the query provided.
       * @param {?} query
       * @return {?}
       */


      _createClass(MediaMatcher, [{
        key: "matchMedia",
        value: function matchMedia(query) {
          if (this._platform.WEBKIT) {
            createEmptyStyleRule(query);
          }

          return this._matchMedia(query);
        }
      }]);

      return MediaMatcher;
    }();

    MediaMatcher.ɵfac = function MediaMatcher_Factory(t) {
      return new (t || MediaMatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]));
    };
    /** @nocollapse */


    MediaMatcher.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]
      }];
    };
    /** @nocollapse */


    MediaMatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function MediaMatcher_Factory() {
        return new MediaMatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]));
      },
      token: MediaMatcher,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaMatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * For Webkit engines that only trigger the MediaQueryListListener when
     * there is at least one CSS selector for the respective media query.
     * @param {?} query
     * @return {?}
     */


    function createEmptyStyleRule(query) {
      if (mediaQueriesForWebkitCompatibility.has(query)) {
        return;
      }

      try {
        if (!mediaQueryStyleNode) {
          mediaQueryStyleNode = document.createElement('style');
          mediaQueryStyleNode.setAttribute('type', 'text/css');

          /** @type {?} */
          document.head.appendChild(mediaQueryStyleNode);
        }

        if (mediaQueryStyleNode.sheet) {
          /** @type {?} */
          mediaQueryStyleNode.sheet.insertRule("@media ".concat(query, " {.fx-query-test{ }}"), 0);
          mediaQueriesForWebkitCompatibility.add(query);
        }
      } catch (e) {
        console.error(e);
      }
    }
    /**
     * No-op matchMedia replacement for non-browser platforms.
     * @param {?} query
     * @return {?}
     */


    function noopMatchMedia(query) {
      // Use `as any` here to avoid adding additional necessary properties for
      // the noop matcher.
      return (
        /** @type {?} */
        {
          matches: query === 'all' || query === '',
          media: query,
          addListener:
          /**
          * @return {?}
          */
          function addListener() {},
          removeListener:
          /**
          * @return {?}
          */
          function removeListener() {}
        }
      );
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/layout/breakpoints-observer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The current state of a layout breakpoint.
     * @record
     */


    function BreakpointState() {}

    if (false) {}
    /**
     * The current state of a layout breakpoint.
     * @record
     */


    function InternalBreakpointState() {}

    if (false) {}
    /**
     * @record
     */


    function Query() {}

    if (false) {}
    /**
     * Utility for checking the matching state of \@media queries.
     */


    var BreakpointObserver = /*#__PURE__*/function () {
      /**
       * @param {?} _mediaMatcher
       * @param {?} _zone
       */
      function BreakpointObserver(_mediaMatcher, _zone) {
        _classCallCheck(this, BreakpointObserver);

        this._mediaMatcher = _mediaMatcher;
        this._zone = _zone;
        /**
         * A map of all media queries currently being listened for.
         */

        this._queries = new Map();
        /**
         * A subject for all other observables to takeUntil based on.
         */

        this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }
      /**
       * Completes the active subject, signalling to all other observables to complete.
       * @return {?}
       */


      _createClass(BreakpointObserver, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroySubject.next();

          this._destroySubject.complete();
        }
        /**
         * Whether one or more media queries match the current viewport size.
         * @param {?} value One or more media queries to check.
         * @return {?} Whether any of the media queries match.
         */

      }, {
        key: "isMatched",
        value: function isMatched(value) {
          var _this = this;

          /** @type {?} */
          var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
          return queries.some(
          /**
          * @param {?} mediaQuery
          * @return {?}
          */
          function (mediaQuery) {
            return _this._registerQuery(mediaQuery).mql.matches;
          });
        }
        /**
         * Gets an observable of results for the given queries that will emit new results for any changes
         * in matching of the given queries.
         * @param {?} value One or more media queries to check.
         * @return {?} A stream of matches for the given queries.
         */

      }, {
        key: "observe",
        value: function observe(value) {
          var _this2 = this;

          /** @type {?} */
          var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
          /** @type {?} */

          var observables = queries.map(
          /**
          * @param {?} query
          * @return {?}
          */
          function (query) {
            return _this2._registerQuery(query).observable;
          });
          /** @type {?} */

          var stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(observables); // Emit the first state immediately, and then debounce the subsequent emissions.

          stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)), stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0)));
          return stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
          /**
          * @param {?} breakpointStates
          * @return {?}
          */
          function (breakpointStates) {
            /** @type {?} */
            var response = {
              matches: false,
              breakpoints: {}
            };
            breakpointStates.forEach(
            /**
            * @param {?} state
            * @return {?}
            */
            function (state) {
              response.matches = response.matches || state.matches;
              response.breakpoints[state.query] = state.matches;
            });
            return response;
          }));
        }
        /**
         * Registers a specific query to be listened for.
         * @private
         * @param {?} query
         * @return {?}
         */

      }, {
        key: "_registerQuery",
        value: function _registerQuery(query) {
          var _this3 = this;

          // Only set up a new MediaQueryList if it is not already being listened for.
          if (this._queries.has(query)) {
            return (
              /** @type {?} */
              this._queries.get(query)
            );
          }
          /** @type {?} */


          var mql = this._mediaMatcher.matchMedia(query); // Create callback for match changes and add it is as a listener.

          /** @type {?} */


          var queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
            // back into the zone because matchMedia is only included in Zone.js by loading the
            // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
            // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
            // patches it.

            /** @type {?} */
            var handler =
            /**
            * @param {?} e
            * @return {?}
            */
            function handler(e) {
              return _this3._zone.run(
              /**
              * @return {?}
              */
              function () {
                return observer.next(e);
              });
            };

            mql.addListener(handler);
            return (
              /**
              * @return {?}
              */
              function () {
                mql.removeListener(handler);
              }
            );
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(mql), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
          /**
          * @param {?} nextMql
          * @return {?}
          */
          function (nextMql) {
            return {
              query: query,
              matches: nextMql.matches
            };
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroySubject)); // Add the MediaQueryList to the set of queries.

          /** @type {?} */

          var output = {
            observable: queryObservable,
            mql: mql
          };

          this._queries.set(query, output);

          return output;
        }
      }]);

      return BreakpointObserver;
    }();

    BreakpointObserver.ɵfac = function BreakpointObserver_Factory(t) {
      return new (t || BreakpointObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };
    /** @nocollapse */


    BreakpointObserver.ctorParameters = function () {
      return [{
        type: MediaMatcher
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };
    /** @nocollapse */


    BreakpointObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function BreakpointObserver_Factory() {
        return new BreakpointObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MediaMatcher), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      },
      token: BreakpointObserver,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakpointObserver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: MediaMatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Split each query string into separate query strings if two queries are provided as comma
     * separated.
     * @param {?} queries
     * @return {?}
     */


    function splitQueries(queries) {
      return queries.map(
      /**
      * @param {?} query
      * @return {?}
      */
      function (query) {
        return query.split(',');
      }).reduce(
      /**
      * @param {?} a1
      * @param {?} a2
      * @return {?}
      */
      function (a1, a2) {
        return a1.concat(a2);
      }).map(
      /**
      * @param {?} query
      * @return {?}
      */
      function (query) {
        return query.trim();
      });
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/layout/breakpoints.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // PascalCase is being used as Breakpoints is used like an enum.
    // tslint:disable-next-line:variable-name

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     * @type {?}
     */


    var Breakpoints = {
      XSmall: '(max-width: 599.99px)',
      Small: '(min-width: 600px) and (max-width: 959.99px)',
      Medium: '(min-width: 960px) and (max-width: 1279.99px)',
      Large: '(min-width: 1280px) and (max-width: 1919.99px)',
      XLarge: '(min-width: 1920px)',
      Handset: '(max-width: 599.99px) and (orientation: portrait), ' + '(max-width: 959.99px) and (orientation: landscape)',
      Tablet: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), ' + '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
      Web: '(min-width: 840px) and (orientation: portrait), ' + '(min-width: 1280px) and (orientation: landscape)',
      HandsetPortrait: '(max-width: 599.99px) and (orientation: portrait)',
      TabletPortrait: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)',
      WebPortrait: '(min-width: 840px) and (orientation: portrait)',
      HandsetLandscape: '(max-width: 959.99px) and (orientation: landscape)',
      TabletLandscape: '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
      WebLandscape: '(min-width: 1280px) and (orientation: landscape)'
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/layout/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=layout.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js ***!
    \******************************************************************/

  /*! exports provided: DataSource, BaseCdkCell, BaseRowDef, CDK_ROW_TEMPLATE, CDK_TABLE, CDK_TABLE_TEMPLATE, CdkCell, CdkCellDef, CdkCellOutlet, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkFooterRow, CdkFooterRowDef, CdkHeaderCell, CdkHeaderCellDef, CdkHeaderRow, CdkHeaderRowDef, CdkRow, CdkRowDef, CdkTable, CdkTableModule, CdkTextColumn, DataRowOutlet, FooterRowOutlet, HeaderRowOutlet, STICKY_DIRECTIONS, StickyStyler, TEXT_COLUMN_OPTIONS, mixinHasStickyInput */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015TableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseCdkCell", function () {
      return BaseCdkCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseRowDef", function () {
      return BaseRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_ROW_TEMPLATE", function () {
      return CDK_ROW_TEMPLATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_TABLE", function () {
      return CDK_TABLE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CDK_TABLE_TEMPLATE", function () {
      return CDK_TABLE_TEMPLATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkCell", function () {
      return CdkCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkCellDef", function () {
      return CdkCellDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkCellOutlet", function () {
      return CdkCellOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkColumnDef", function () {
      return CdkColumnDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFooterCell", function () {
      return CdkFooterCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFooterCellDef", function () {
      return CdkFooterCellDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFooterRow", function () {
      return CdkFooterRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFooterRowDef", function () {
      return CdkFooterRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkHeaderCell", function () {
      return CdkHeaderCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkHeaderCellDef", function () {
      return CdkHeaderCellDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkHeaderRow", function () {
      return CdkHeaderRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkHeaderRowDef", function () {
      return CdkHeaderRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkRow", function () {
      return CdkRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkRowDef", function () {
      return CdkRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTable", function () {
      return CdkTable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTableModule", function () {
      return CdkTableModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTextColumn", function () {
      return CdkTextColumn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataRowOutlet", function () {
      return DataRowOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterRowOutlet", function () {
      return FooterRowOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderRowOutlet", function () {
      return HeaderRowOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STICKY_DIRECTIONS", function () {
      return STICKY_DIRECTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StickyStyler", function () {
      return StickyStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TEXT_COLUMN_OPTIONS", function () {
      return TEXT_COLUMN_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinHasStickyInput", function () {
      return mixinHasStickyInput;
    });
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataSource", function () {
      return _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"];
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var _c0 = [[["caption"]]];
    var _c1 = ["caption"];

    function CdkTextColumn_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r0.justify);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
      }
    }

    function CdkTextColumn_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r1.justify);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
      }
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/can-stick.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Interface for a mixin to provide a directive with a function that checks if the sticky input has
     * been changed since the last time the function was called. Essentially adds a dirty-check to the
     * sticky value.
     * \@docs-private
     * @record
     */


    function CanStick() {}

    if (false) {}
    /**
     * Mixin to provide a directive with a function that checks if the sticky input has been
     * changed since the last time the function was called. Essentially adds a dirty-check to the
     * sticky value.
     * \@docs-private
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinHasStickyInput(base) {
      return /*#__PURE__*/function (_base) {
        _inherits(_class, _base);

        var _super = _createSuper(_class);

        /**
         * @param {...?} args
         */
        function _class() {
          var _this4;

          _classCallCheck(this, _class);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this4 = _super.call.apply(_super, [this].concat(args));
          _this4._sticky = false;
          /**
           * Whether the sticky input has changed since it was last checked.
           */

          _this4._hasStickyChanged = false;
          return _this4;
        }
        /**
         * Whether sticky positioning should be applied.
         * @return {?}
         */


        _createClass(_class, [{
          key: "hasStickyChanged",

          /**
           * Whether the sticky value has changed since this was last called.
           * @return {?}
           */
          value: function hasStickyChanged() {
            /** @type {?} */
            var hasStickyChanged = this._hasStickyChanged;
            this._hasStickyChanged = false;
            return hasStickyChanged;
          }
          /**
           * Resets the dirty check for cases where the sticky state has been used without checking.
           * @return {?}
           */

        }, {
          key: "resetStickyChanged",
          value: function resetStickyChanged() {
            this._hasStickyChanged = false;
          }
        }, {
          key: "sticky",
          get: function get() {
            return this._sticky;
          }
          /**
           * @param {?} v
           * @return {?}
           */
          ,
          set: function set(v) {
            /** @type {?} */
            var prevValue = this._sticky;
            this._sticky = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            this._hasStickyChanged = prevValue !== this._sticky;
          }
        }]);

        return _class;
      }(base);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/tokens.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used to provide a table to some of the sub-components without causing a circular dependency.
     * \@docs-private
     * @type {?}
     */


    var CDK_TABLE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_TABLE');
    /**
     * Configurable options for `CdkTextColumn`.
     * @record
     * @template T
     */

    function TextColumnOptions() {}

    if (false) {}
    /**
     * Injection token that can be used to specify the text column options.
     * @type {?}
     */


    var TEXT_COLUMN_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('text-column-options');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/cell.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Base interface for a cell definition. Captures a column's cell template definition.
     * @record
     */

    function CellDef() {}

    if (false) {}
    /**
     * Cell definition for a CDK table.
     * Captures the template of a column's data row cell as well as cell-specific properties.
     */


    var CdkCellDef =
    /**
     * @param {?} template
     */
    function CdkCellDef(
    /** @docs-private */
    template) {
      _classCallCheck(this, CdkCellDef);

      this.template = template;
    };

    CdkCellDef.ɵfac = function CdkCellDef_Factory(t) {
      return new (t || CdkCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
    };

    CdkCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkCellDef,
      selectors: [["", "cdkCellDef", ""]]
    });
    /** @nocollapse */

    CdkCellDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkCellDef]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Header cell definition for a CDK table.
     * Captures the template of a column's header cell and as well as cell-specific properties.
     */


    var CdkHeaderCellDef =
    /**
     * @param {?} template
     */
    function CdkHeaderCellDef(
    /** @docs-private */
    template) {
      _classCallCheck(this, CdkHeaderCellDef);

      this.template = template;
    };

    CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) {
      return new (t || CdkHeaderCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
    };

    CdkHeaderCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkHeaderCellDef,
      selectors: [["", "cdkHeaderCellDef", ""]]
    });
    /** @nocollapse */

    CdkHeaderCellDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkHeaderCellDef]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Footer cell definition for a CDK table.
     * Captures the template of a column's footer cell and as well as cell-specific properties.
     */


    var CdkFooterCellDef =
    /**
     * @param {?} template
     */
    function CdkFooterCellDef(
    /** @docs-private */
    template) {
      _classCallCheck(this, CdkFooterCellDef);

      this.template = template;
    };

    CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) {
      return new (t || CdkFooterCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
    };

    CdkFooterCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkFooterCellDef,
      selectors: [["", "cdkFooterCellDef", ""]]
    });
    /** @nocollapse */

    CdkFooterCellDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkFooterCellDef]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {} // Boilerplate for applying mixins to CdkColumnDef.

    /**
     * \@docs-private
     */


    var CdkColumnDefBase = function CdkColumnDefBase() {
      _classCallCheck(this, CdkColumnDefBase);
    };
    /** @type {?} */


    var _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
    /**
     * Column definition for the CDK table.
     * Defines a set of cells available for a table column.
     */


    var CdkColumnDef = /*#__PURE__*/function (_CdkColumnDefBase2) {
      _inherits(CdkColumnDef, _CdkColumnDefBase2);

      var _super2 = _createSuper(CdkColumnDef);

      /**
       * @param {?=} _table
       */
      function CdkColumnDef(_table) {
        var _this5;

        _classCallCheck(this, CdkColumnDef);

        _this5 = _super2.call(this);
        _this5._table = _table;
        _this5._stickyEnd = false;
        return _this5;
      }
      /**
       * Unique name for this column.
       * @return {?}
       */


      _createClass(CdkColumnDef, [{
        key: "name",
        get: function get() {
          return this._name;
        }
        /**
         * @param {?} name
         * @return {?}
         */
        ,
        set: function set(name) {
          // If the directive is set without a name (updated programatically), then this setter will
          // trigger with an empty string and should not overwrite the programatically set value.
          if (name) {
            this._name = name;
            this.cssClassFriendlyName = name.replace(/[^a-z0-9_-]/ig, '-');
          }
        }
        /**
         * Whether this column should be sticky positioned on the end of the row. Should make sure
         * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
         * has been changed.
         * @return {?}
         */

      }, {
        key: "stickyEnd",
        get: function get() {
          return this._stickyEnd;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          /** @type {?} */
          var prevValue = this._stickyEnd;
          this._stickyEnd = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
          this._hasStickyChanged = prevValue !== this._stickyEnd;
        }
      }]);

      return CdkColumnDef;
    }(_CdkColumnDefBase);

    CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) {
      return new (t || CdkColumnDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8));
    };

    CdkColumnDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkColumnDef,
      selectors: [["", "cdkColumnDef", ""]],
      contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkCellDef, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderCellDef, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterCellDef, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.footerCell = _t.first);
        }
      },
      inputs: {
        sticky: "sticky",
        name: ["cdkColumnDef", "name"],
        stickyEnd: "stickyEnd"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: 'MAT_SORT_HEADER_COLUMN_DEF',
        useExisting: CdkColumnDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    CdkColumnDef.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [CDK_TABLE]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    CdkColumnDef.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['cdkColumnDef']
      }],
      stickyEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['stickyEnd']
      }],
      cell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
        args: [CdkCellDef]
      }],
      headerCell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
        args: [CdkHeaderCellDef]
      }],
      footerCell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
        args: [CdkFooterCellDef]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkColumnDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkColumnDef]',
          inputs: ['sticky'],
          providers: [{
            provide: 'MAT_SORT_HEADER_COLUMN_DEF',
            useExisting: CdkColumnDef
          }]
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [CDK_TABLE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['cdkColumnDef']
        }],
        stickyEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['stickyEnd']
        }],
        cell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [CdkCellDef]
        }],
        headerCell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [CdkHeaderCellDef]
        }],
        footerCell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [CdkFooterCellDef]
        }]
      });
    })();

    if (false) {}
    /**
     * Base class for the cells. Adds a CSS classname that identifies the column it renders in.
     */


    var BaseCdkCell =
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    function BaseCdkCell(columnDef, elementRef) {
      _classCallCheck(this, BaseCdkCell);

      /** @type {?} */
      var columnClassName = "cdk-column-".concat(columnDef.cssClassFriendlyName);
      elementRef.nativeElement.classList.add(columnClassName);
    };
    /**
     * Header cell template container that adds the right classes and role.
     */


    var CdkHeaderCell = /*#__PURE__*/function (_BaseCdkCell) {
      _inherits(CdkHeaderCell, _BaseCdkCell);

      var _super3 = _createSuper(CdkHeaderCell);

      /**
       * @param {?} columnDef
       * @param {?} elementRef
       */
      function CdkHeaderCell(columnDef, elementRef) {
        _classCallCheck(this, CdkHeaderCell);

        return _super3.call(this, columnDef, elementRef);
      }

      return CdkHeaderCell;
    }(BaseCdkCell);

    CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) {
      return new (t || CdkHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
    };

    CdkHeaderCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkHeaderCell,
      selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
      hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    CdkHeaderCell.ctorParameters = function () {
      return [{
        type: CdkColumnDef
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'cdk-header-cell, th[cdk-header-cell]',
          host: {
            'class': 'cdk-header-cell',
            'role': 'columnheader'
          }
        }]
      }], function () {
        return [{
          type: CdkColumnDef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      }, null);
    })();
    /**
     * Footer cell template container that adds the right classes and role.
     */


    var CdkFooterCell = /*#__PURE__*/function (_BaseCdkCell2) {
      _inherits(CdkFooterCell, _BaseCdkCell2);

      var _super4 = _createSuper(CdkFooterCell);

      /**
       * @param {?} columnDef
       * @param {?} elementRef
       */
      function CdkFooterCell(columnDef, elementRef) {
        _classCallCheck(this, CdkFooterCell);

        return _super4.call(this, columnDef, elementRef);
      }

      return CdkFooterCell;
    }(BaseCdkCell);

    CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) {
      return new (t || CdkFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
    };

    CdkFooterCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkFooterCell,
      selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
      hostAttrs: ["role", "gridcell", 1, "cdk-footer-cell"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    CdkFooterCell.ctorParameters = function () {
      return [{
        type: CdkColumnDef
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'cdk-footer-cell, td[cdk-footer-cell]',
          host: {
            'class': 'cdk-footer-cell',
            'role': 'gridcell'
          }
        }]
      }], function () {
        return [{
          type: CdkColumnDef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      }, null);
    })();
    /**
     * Cell template container that adds the right classes and role.
     */


    var CdkCell = /*#__PURE__*/function (_BaseCdkCell3) {
      _inherits(CdkCell, _BaseCdkCell3);

      var _super5 = _createSuper(CdkCell);

      /**
       * @param {?} columnDef
       * @param {?} elementRef
       */
      function CdkCell(columnDef, elementRef) {
        _classCallCheck(this, CdkCell);

        return _super5.call(this, columnDef, elementRef);
      }

      return CdkCell;
    }(BaseCdkCell);

    CdkCell.ɵfac = function CdkCell_Factory(t) {
      return new (t || CdkCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
    };

    CdkCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkCell,
      selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
      hostAttrs: ["role", "gridcell", 1, "cdk-cell"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    CdkCell.ctorParameters = function () {
      return [{
        type: CdkColumnDef
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'cdk-cell, td[cdk-cell]',
          host: {
            'class': 'cdk-cell',
            'role': 'gridcell'
          }
        }]
      }], function () {
        return [{
          type: CdkColumnDef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/row.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The row template that can be used by the mat-table. Should not be used outside of the
     * material library.
     * @type {?}
     */


    var CDK_ROW_TEMPLATE = "<ng-container cdkCellOutlet></ng-container>";
    /**
     * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
     * for changes and notifying the table.
     * @abstract
     */

    var BaseRowDef = /*#__PURE__*/function () {
      /**
       * @param {?} template
       * @param {?} _differs
       */
      function BaseRowDef(template, _differs) {
        _classCallCheck(this, BaseRowDef);

        this.template = template;
        this._differs = _differs;
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(BaseRowDef, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // Create a new columns differ if one does not yet exist. Initialize it based on initial value
          // of the columns property or an empty array if none is provided.
          if (!this._columnsDiffer) {
            /** @type {?} */
            var columns = changes['columns'] && changes['columns'].currentValue || [];
            this._columnsDiffer = this._differs.find(columns).create();

            this._columnsDiffer.diff(columns);
          }
        }
        /**
         * Returns the difference between the current columns and the columns from the last diff, or null
         * if there is no difference.
         * @return {?}
         */

      }, {
        key: "getColumnsDiff",
        value: function getColumnsDiff() {
          return this._columnsDiffer.diff(this.columns);
        }
        /**
         * Gets this row def's relevant cell template from the provided column def.
         * @param {?} column
         * @return {?}
         */

      }, {
        key: "extractCellTemplate",
        value: function extractCellTemplate(column) {
          if (this instanceof CdkHeaderRowDef) {
            return column.headerCell.template;
          }

          if (this instanceof CdkFooterRowDef) {
            return column.footerCell.template;
          } else {
            return column.cell.template;
          }
        }
      }]);

      return BaseRowDef;
    }();

    BaseRowDef.ɵfac = function BaseRowDef_Factory(t) {
      return new (t || BaseRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]));
    };

    BaseRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: BaseRowDef,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    BaseRowDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BaseRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }];
      }, null);
    })();

    if (false) {} // Boilerplate for applying mixins to CdkHeaderRowDef.

    /**
     * \@docs-private
     */


    var CdkHeaderRowDefBase = /*#__PURE__*/function (_BaseRowDef) {
      _inherits(CdkHeaderRowDefBase, _BaseRowDef);

      var _super6 = _createSuper(CdkHeaderRowDefBase);

      function CdkHeaderRowDefBase() {
        _classCallCheck(this, CdkHeaderRowDefBase);

        return _super6.apply(this, arguments);
      }

      return CdkHeaderRowDefBase;
    }(BaseRowDef);
    /** @type {?} */


    var _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
    /**
     * Header row definition for the CDK table.
     * Captures the header row's template and other header properties such as the columns to display.
     */


    var CdkHeaderRowDef = /*#__PURE__*/function (_CdkHeaderRowDefBase2) {
      _inherits(CdkHeaderRowDef, _CdkHeaderRowDefBase2);

      var _super7 = _createSuper(CdkHeaderRowDef);

      /**
       * @param {?} template
       * @param {?} _differs
       * @param {?=} _table
       */
      function CdkHeaderRowDef(template, _differs, _table) {
        var _this6;

        _classCallCheck(this, CdkHeaderRowDef);

        _this6 = _super7.call(this, template, _differs);
        _this6._table = _table;
        return _this6;
      } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
      // Explicitly define it so that the method is called as part of the Angular lifecycle.

      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(CdkHeaderRowDef, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          _get(_getPrototypeOf(CdkHeaderRowDef.prototype), "ngOnChanges", this).call(this, changes);
        }
      }]);

      return CdkHeaderRowDef;
    }(_CdkHeaderRowDefBase);

    CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) {
      return new (t || CdkHeaderRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8));
    };

    CdkHeaderRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkHeaderRowDef,
      selectors: [["", "cdkHeaderRowDef", ""]],
      inputs: {
        columns: ["cdkHeaderRowDef", "columns"],
        sticky: ["cdkHeaderRowDefSticky", "sticky"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    CdkHeaderRowDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [CDK_TABLE]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkHeaderRowDef]',
          inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [CDK_TABLE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {} // Boilerplate for applying mixins to CdkFooterRowDef.

    /**
     * \@docs-private
     */


    var CdkFooterRowDefBase = /*#__PURE__*/function (_BaseRowDef2) {
      _inherits(CdkFooterRowDefBase, _BaseRowDef2);

      var _super8 = _createSuper(CdkFooterRowDefBase);

      function CdkFooterRowDefBase() {
        _classCallCheck(this, CdkFooterRowDefBase);

        return _super8.apply(this, arguments);
      }

      return CdkFooterRowDefBase;
    }(BaseRowDef);
    /** @type {?} */


    var _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
    /**
     * Footer row definition for the CDK table.
     * Captures the footer row's template and other footer properties such as the columns to display.
     */


    var CdkFooterRowDef = /*#__PURE__*/function (_CdkFooterRowDefBase2) {
      _inherits(CdkFooterRowDef, _CdkFooterRowDefBase2);

      var _super9 = _createSuper(CdkFooterRowDef);

      /**
       * @param {?} template
       * @param {?} _differs
       * @param {?=} _table
       */
      function CdkFooterRowDef(template, _differs, _table) {
        var _this7;

        _classCallCheck(this, CdkFooterRowDef);

        _this7 = _super9.call(this, template, _differs);
        _this7._table = _table;
        return _this7;
      } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
      // Explicitly define it so that the method is called as part of the Angular lifecycle.

      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(CdkFooterRowDef, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          _get(_getPrototypeOf(CdkFooterRowDef.prototype), "ngOnChanges", this).call(this, changes);
        }
      }]);

      return CdkFooterRowDef;
    }(_CdkFooterRowDefBase);

    CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) {
      return new (t || CdkFooterRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8));
    };

    CdkFooterRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkFooterRowDef,
      selectors: [["", "cdkFooterRowDef", ""]],
      inputs: {
        columns: ["cdkFooterRowDef", "columns"],
        sticky: ["cdkFooterRowDefSticky", "sticky"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    CdkFooterRowDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [CDK_TABLE]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkFooterRowDef]',
          inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [CDK_TABLE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Data row definition for the CDK table.
     * Captures the header row's template and other row properties such as the columns to display and
     * a when predicate that describes when this row should be used.
     * @template T
     */


    var CdkRowDef = /*#__PURE__*/function (_BaseRowDef3) {
      _inherits(CdkRowDef, _BaseRowDef3);

      var _super10 = _createSuper(CdkRowDef);

      // TODO(andrewseguin): Add an input for providing a switch function to determine
      //   if this template should be used.

      /**
       * @param {?} template
       * @param {?} _differs
       * @param {?=} _table
       */
      function CdkRowDef(template, _differs, _table) {
        var _this8;

        _classCallCheck(this, CdkRowDef);

        _this8 = _super10.call(this, template, _differs);
        _this8._table = _table;
        return _this8;
      }

      return CdkRowDef;
    }(BaseRowDef);

    CdkRowDef.ɵfac = function CdkRowDef_Factory(t) {
      return new (t || CdkRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8));
    };

    CdkRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkRowDef,
      selectors: [["", "cdkRowDef", ""]],
      inputs: {
        columns: ["cdkRowDefColumns", "columns"],
        when: ["cdkRowDefWhen", "when"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    CdkRowDef.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [CDK_TABLE]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkRowDef]',
          inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [CDK_TABLE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Context provided to the row cells when `multiTemplateDataRows` is false
     * @record
     * @template T
     */


    function CdkCellOutletRowContext() {}

    if (false) {}
    /**
     * Context provided to the row cells when `multiTemplateDataRows` is true. This context is the same
     * as CdkCellOutletRowContext except that the single `index` value is replaced by `dataIndex` and
     * `renderIndex`.
     * @record
     * @template T
     */


    function CdkCellOutletMultiRowContext() {}

    if (false) {}
    /**
     * Outlet for rendering cells inside of a row or header row.
     * \@docs-private
     */


    var CdkCellOutlet = /*#__PURE__*/function () {
      /**
       * @param {?} _viewContainer
       */
      function CdkCellOutlet(_viewContainer) {
        _classCallCheck(this, CdkCellOutlet);

        this._viewContainer = _viewContainer;
        CdkCellOutlet.mostRecentCellOutlet = this;
      }
      /**
       * @return {?}
       */


      _createClass(CdkCellOutlet, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // If this was the last outlet being rendered in the view, remove the reference
          // from the static property after it has been destroyed to avoid leaking memory.
          if (CdkCellOutlet.mostRecentCellOutlet === this) {
            CdkCellOutlet.mostRecentCellOutlet = null;
          }
        }
      }]);

      return CdkCellOutlet;
    }();

    CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) {
      return new (t || CdkCellOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]));
    };

    CdkCellOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: CdkCellOutlet,
      selectors: [["", "cdkCellOutlet", ""]]
    });
    /**
     * Static property containing the latest constructed instance of this class.
     * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
     * createEmbeddedView. After one of these components are created, this property will provide
     * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
     * construct the cells with the provided context.
     */

    CdkCellOutlet.mostRecentCellOutlet = null;
    /** @nocollapse */

    CdkCellOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCellOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[cdkCellOutlet]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Header template container that contains the cell outlet. Adds the right class and role.
     */


    var CdkHeaderRow = function CdkHeaderRow() {
      _classCallCheck(this, CdkHeaderRow);
    };

    CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) {
      return new (t || CdkHeaderRow)();
    };

    CdkHeaderRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CdkHeaderRow,
      selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
      hostAttrs: ["role", "row", 1, "cdk-header-row"],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function CdkHeaderRow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
        }
      },
      directives: [CdkCellOutlet],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'cdk-header-row, tr[cdk-header-row]',
          template: CDK_ROW_TEMPLATE,
          host: {
            'class': 'cdk-header-row',
            'role': 'row'
          },
          // See note on CdkTable for explanation on why this uses the default change detection strategy.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
        }]
      }], null, null);
    })();
    /**
     * Footer template container that contains the cell outlet. Adds the right class and role.
     */


    var CdkFooterRow = function CdkFooterRow() {
      _classCallCheck(this, CdkFooterRow);
    };

    CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) {
      return new (t || CdkFooterRow)();
    };

    CdkFooterRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CdkFooterRow,
      selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
      hostAttrs: ["role", "row", 1, "cdk-footer-row"],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function CdkFooterRow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
        }
      },
      directives: [CdkCellOutlet],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'cdk-footer-row, tr[cdk-footer-row]',
          template: CDK_ROW_TEMPLATE,
          host: {
            'class': 'cdk-footer-row',
            'role': 'row'
          },
          // See note on CdkTable for explanation on why this uses the default change detection strategy.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
        }]
      }], null, null);
    })();
    /**
     * Data row template container that contains the cell outlet. Adds the right class and role.
     */


    var CdkRow = function CdkRow() {
      _classCallCheck(this, CdkRow);
    };

    CdkRow.ɵfac = function CdkRow_Factory(t) {
      return new (t || CdkRow)();
    };

    CdkRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CdkRow,
      selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
      hostAttrs: ["role", "row", 1, "cdk-row"],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function CdkRow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
        }
      },
      directives: [CdkCellOutlet],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'cdk-row, tr[cdk-row]',
          template: CDK_ROW_TEMPLATE,
          host: {
            'class': 'cdk-row',
            'role': 'row'
          },
          // See note on CdkTable for explanation on why this uses the default change detection strategy.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/sticky-styler.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * List of all possible directions that can be used for sticky positioning.
     * \@docs-private
     * @type {?}
     */


    var STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
    /**
     * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
     * \@docs-private
     */

    var StickyStyler = /*#__PURE__*/function () {
      /**
       * @param {?} _isNativeHtmlTable Whether the sticky logic should be based on a table
       *     that uses the native `<table>` element.
       * @param {?} _stickCellCss The CSS class that will be applied to every row/cell that has
       *     sticky positioning applied.
       * @param {?} direction The directionality context of the table (ltr/rtl); affects column positioning
       *     by reversing left/right positions.
       * @param {?=} _isBrowser Whether the table is currently being rendered on the server or the client.
       */
      function StickyStyler(_isNativeHtmlTable, _stickCellCss, direction) {
        var _isBrowser = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

        _classCallCheck(this, StickyStyler);

        this._isNativeHtmlTable = _isNativeHtmlTable;
        this._stickCellCss = _stickCellCss;
        this.direction = direction;
        this._isBrowser = _isBrowser;
      }
      /**
       * Clears the sticky positioning styles from the row and its cells by resetting the `position`
       * style, setting the zIndex to 0, and unsetting each provided sticky direction.
       * @param {?} rows The list of rows that should be cleared from sticking in the provided directions
       * @param {?} stickyDirections The directions that should no longer be set as sticky on the rows.
       * @return {?}
       */


      _createClass(StickyStyler, [{
        key: "clearStickyPositioning",
        value: function clearStickyPositioning(rows, stickyDirections) {
          var _iterator = _createForOfIteratorHelper(rows),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var row = _step.value;

              // If the row isn't an element (e.g. if it's an `ng-container`),
              // it won't have inline styles or `children` so we skip it.
              if (row.nodeType !== row.ELEMENT_NODE) {
                continue;
              }

              this._removeStickyStyle(row, stickyDirections);

              for (var i = 0; i < row.children.length; i++) {
                /** @type {?} */
                var cell =
                /** @type {?} */
                row.children[i];

                this._removeStickyStyle(cell, stickyDirections);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        /**
         * Applies sticky left and right positions to the cells of each row according to the sticky
         * states of the rendered column definitions.
         * @param {?} rows The rows that should have its set of cells stuck according to the sticky states.
         * @param {?} stickyStartStates A list of boolean states where each state represents whether the cell
         *     in this index position should be stuck to the start of the row.
         * @param {?} stickyEndStates A list of boolean states where each state represents whether the cell
         *     in this index position should be stuck to the end of the row.
         * @return {?}
         */

      }, {
        key: "updateStickyColumns",
        value: function updateStickyColumns(rows, stickyStartStates, stickyEndStates) {
          /** @type {?} */
          var hasStickyColumns = stickyStartStates.some(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state;
          }) || stickyEndStates.some(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state;
          });

          if (!rows.length || !hasStickyColumns || !this._isBrowser) {
            return;
          }
          /** @type {?} */


          var firstRow = rows[0];
          /** @type {?} */

          var numCells = firstRow.children.length;
          /** @type {?} */

          var cellWidths = this._getCellWidths(firstRow);
          /** @type {?} */


          var startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
          /** @type {?} */


          var endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
          /** @type {?} */


          var isRtl = this.direction === 'rtl';

          var _iterator2 = _createForOfIteratorHelper(rows),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var row = _step2.value;

              for (var i = 0; i < numCells; i++) {
                /** @type {?} */
                var cell =
                /** @type {?} */
                row.children[i];

                if (stickyStartStates[i]) {
                  this._addStickyStyle(cell, isRtl ? 'right' : 'left', startPositions[i]);
                }

                if (stickyEndStates[i]) {
                  this._addStickyStyle(cell, isRtl ? 'left' : 'right', endPositions[i]);
                }
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        /**
         * Applies sticky positioning to the row's cells if using the native table layout, and to the
         * row itself otherwise.
         * @param {?} rowsToStick The list of rows that should be stuck according to their corresponding
         *     sticky state and to the provided top or bottom position.
         * @param {?} stickyStates A list of boolean states where each state represents whether the row
         *     should be stuck in the particular top or bottom position.
         * @param {?} position The position direction in which the row should be stuck if that row should be
         *     sticky.
         *
         * @return {?}
         */

      }, {
        key: "stickRows",
        value: function stickRows(rowsToStick, stickyStates, position) {
          // Since we can't measure the rows on the server, we can't stick the rows properly.
          if (!this._isBrowser) {
            return;
          } // If positioning the rows to the bottom, reverse their order when evaluating the sticky
          // position such that the last row stuck will be "bottom: 0px" and so on.

          /** @type {?} */


          var rows = position === 'bottom' ? rowsToStick.reverse() : rowsToStick;
          /** @type {?} */

          var stickyHeight = 0;

          for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
            if (!stickyStates[rowIndex]) {
              continue;
            }
            /** @type {?} */


            var row = rows[rowIndex];

            if (this._isNativeHtmlTable) {
              for (var j = 0; j < row.children.length; j++) {
                /** @type {?} */
                var cell =
                /** @type {?} */
                row.children[j];

                this._addStickyStyle(cell, position, stickyHeight);
              }
            } else {
              // Flex does not respect the stick positioning on the cells, needs to be applied to the row.
              // If this is applied on a native table, Safari causes the header to fly in wrong direction.
              this._addStickyStyle(row, position, stickyHeight);
            }

            if (rowIndex === rows.length - 1) {
              // prevent unnecessary reflow from getBoundingClientRect()
              return;
            }

            stickyHeight += row.getBoundingClientRect().height;
          }
        }
        /**
         * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
         * footer rows is to apply sticky styling to the tfoot container. This should only be done if
         * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
         * the tfoot element.
         * @param {?} tableElement
         * @param {?} stickyStates
         * @return {?}
         */

      }, {
        key: "updateStickyFooterContainer",
        value: function updateStickyFooterContainer(tableElement, stickyStates) {
          if (!this._isNativeHtmlTable) {
            return;
          }
          /** @type {?} */


          var tfoot =
          /** @type {?} */
          tableElement.querySelector('tfoot');

          if (stickyStates.some(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return !state;
          })) {
            this._removeStickyStyle(tfoot, ['bottom']);
          } else {
            this._addStickyStyle(tfoot, 'bottom', 0);
          }
        }
        /**
         * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
         * the zIndex, removing each of the provided sticky directions, and removing the
         * sticky position if there are no more directions.
         * @param {?} element
         * @param {?} stickyDirections
         * @return {?}
         */

      }, {
        key: "_removeStickyStyle",
        value: function _removeStickyStyle(element, stickyDirections) {
          var _iterator3 = _createForOfIteratorHelper(stickyDirections),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var dir = _step3.value;
              element.style[dir] = '';
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          element.style.zIndex = this._getCalculatedZIndex(element); // If the element no longer has any more sticky directions, remove sticky positioning and
          // the sticky CSS class.

          /** @type {?} */

          var hasDirection = STICKY_DIRECTIONS.some(
          /**
          * @param {?} dir
          * @return {?}
          */
          function (dir) {
            return !!element.style[dir];
          });

          if (!hasDirection) {
            element.style.position = '';
            element.classList.remove(this._stickCellCss);
          }
        }
        /**
         * Adds the sticky styling to the element by adding the sticky style class, changing position
         * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
         * direction and value.
         * @param {?} element
         * @param {?} dir
         * @param {?} dirValue
         * @return {?}
         */

      }, {
        key: "_addStickyStyle",
        value: function _addStickyStyle(element, dir, dirValue) {
          element.classList.add(this._stickCellCss);
          element.style[dir] = "".concat(dirValue, "px");
          element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
          element.style.zIndex = this._getCalculatedZIndex(element);
        }
        /**
         * Calculate what the z-index should be for the element, depending on what directions (top,
         * bottom, left, right) have been set. It should be true that elements with a top direction
         * should have the highest index since these are elements like a table header. If any of those
         * elements are also sticky in another direction, then they should appear above other elements
         * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
         * (e.g. footer rows) should then be next in the ordering such that they are below the header
         * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
         * should minimally increment so that they are above non-sticky elements but below top and bottom
         * elements.
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_getCalculatedZIndex",
        value: function _getCalculatedZIndex(element) {
          /** @type {?} */
          var zIndexIncrements = {
            top: 100,
            bottom: 10,
            left: 1,
            right: 1
          };
          /** @type {?} */

          var zIndex = 0; // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
          // loses the array generic type in the `for of`. But we *also* have to use `Array` because
          // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`

          var _iterator4 = _createForOfIteratorHelper(
          /** @type {?} */
          STICKY_DIRECTIONS),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var dir = _step4.value;

              if (element.style[dir]) {
                zIndex += zIndexIncrements[dir];
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          return zIndex ? "".concat(zIndex) : '';
        }
        /**
         * Gets the widths for each cell in the provided row.
         * @param {?} row
         * @return {?}
         */

      }, {
        key: "_getCellWidths",
        value: function _getCellWidths(row) {
          /** @type {?} */
          var cellWidths = [];
          /** @type {?} */

          var firstRowCells = row.children;

          for (var i = 0; i < firstRowCells.length; i++) {
            /** @type {?} */
            var cell =
            /** @type {?} */
            firstRowCells[i];
            cellWidths.push(cell.getBoundingClientRect().width);
          }

          return cellWidths;
        }
        /**
         * Determines the left and right positions of each sticky column cell, which will be the
         * accumulation of all sticky column cell widths to the left and right, respectively.
         * Non-sticky cells do not need to have a value set since their positions will not be applied.
         * @param {?} widths
         * @param {?} stickyStates
         * @return {?}
         */

      }, {
        key: "_getStickyStartColumnPositions",
        value: function _getStickyStartColumnPositions(widths, stickyStates) {
          /** @type {?} */
          var positions = [];
          /** @type {?} */

          var nextPosition = 0;

          for (var i = 0; i < widths.length; i++) {
            if (stickyStates[i]) {
              positions[i] = nextPosition;
              nextPosition += widths[i];
            }
          }

          return positions;
        }
        /**
         * Determines the left and right positions of each sticky column cell, which will be the
         * accumulation of all sticky column cell widths to the left and right, respectively.
         * Non-sticky cells do not need to have a value set since their positions will not be applied.
         * @param {?} widths
         * @param {?} stickyStates
         * @return {?}
         */

      }, {
        key: "_getStickyEndColumnPositions",
        value: function _getStickyEndColumnPositions(widths, stickyStates) {
          /** @type {?} */
          var positions = [];
          /** @type {?} */

          var nextPosition = 0;

          for (var i = widths.length; i > 0; i--) {
            if (stickyStates[i]) {
              positions[i] = nextPosition;
              nextPosition += widths[i];
            }
          }

          return positions;
        }
      }]);

      return StickyStyler;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/table-errors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Returns an error to be thrown when attempting to find an unexisting column.
     * \@docs-private
     * @param {?} id Id whose lookup failed.
     * @return {?}
     */


    function getTableUnknownColumnError(id) {
      return Error("Could not find column with id \"".concat(id, "\"."));
    }
    /**
     * Returns an error to be thrown when two column definitions have the same name.
     * \@docs-private
     * @param {?} name
     * @return {?}
     */


    function getTableDuplicateColumnNameError(name) {
      return Error("Duplicate column definition name provided: \"".concat(name, "\"."));
    }
    /**
     * Returns an error to be thrown when there are multiple rows that are missing a when function.
     * \@docs-private
     * @return {?}
     */


    function getTableMultipleDefaultRowDefsError() {
      return Error("There can only be one default row without a when predicate function.");
    }
    /**
     * Returns an error to be thrown when there are no matching row defs for a particular set of data.
     * \@docs-private
     * @param {?} data
     * @return {?}
     */


    function getTableMissingMatchingRowDefError(data) {
      return Error("Could not find a matching row definition for the" + "provided row data: ".concat(JSON.stringify(data)));
    }
    /**
     * Returns an error to be thrown when there is no row definitions present in the content.
     * \@docs-private
     * @return {?}
     */


    function getTableMissingRowDefsError() {
      return Error('Missing definitions for header, footer, and row; ' + 'cannot determine which columns should be rendered.');
    }
    /**
     * Returns an error to be thrown when the data source does not match the compatible types.
     * \@docs-private
     * @return {?}
     */


    function getTableUnknownDataSourceError() {
      return Error("Provided data source did not match an array, Observable, or DataSource");
    }
    /**
     * Returns an error to be thrown when the text column cannot find a parent table to inject.
     * \@docs-private
     * @return {?}
     */


    function getTableTextColumnMissingParentTableError() {
      return Error("Text column could not find a parent table for registration.");
    }
    /**
     * Returns an error to be thrown when a table text column doesn't have a name.
     * \@docs-private
     * @return {?}
     */


    function getTableTextColumnMissingNameError() {
      return Error("Table text column must have a name.");
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/table.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Interface used to provide an outlet for rows to be inserted into.
     * @record
     */


    function RowOutlet() {}

    if (false) {}
    /**
     * Provides a handle for the table to grab the view container's ng-container to insert data rows.
     * \@docs-private
     */


    var DataRowOutlet =
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    function DataRowOutlet(viewContainer, elementRef) {
      _classCallCheck(this, DataRowOutlet);

      this.viewContainer = viewContainer;
      this.elementRef = elementRef;
    };

    DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) {
      return new (t || DataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
    };

    DataRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: DataRowOutlet,
      selectors: [["", "rowOutlet", ""]]
    });
    /** @nocollapse */

    DataRowOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DataRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[rowOutlet]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Provides a handle for the table to grab the view container's ng-container to insert the header.
     * \@docs-private
     */


    var HeaderRowOutlet =
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    function HeaderRowOutlet(viewContainer, elementRef) {
      _classCallCheck(this, HeaderRowOutlet);

      this.viewContainer = viewContainer;
      this.elementRef = elementRef;
    };

    HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) {
      return new (t || HeaderRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
    };

    HeaderRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: HeaderRowOutlet,
      selectors: [["", "headerRowOutlet", ""]]
    });
    /** @nocollapse */

    HeaderRowOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](HeaderRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[headerRowOutlet]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Provides a handle for the table to grab the view container's ng-container to insert the footer.
     * \@docs-private
     */


    var FooterRowOutlet =
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    function FooterRowOutlet(viewContainer, elementRef) {
      _classCallCheck(this, FooterRowOutlet);

      this.viewContainer = viewContainer;
      this.elementRef = elementRef;
    };

    FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) {
      return new (t || FooterRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
    };

    FooterRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: FooterRowOutlet,
      selectors: [["", "footerRowOutlet", ""]]
    });
    /** @nocollapse */

    FooterRowOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FooterRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[footerRowOutlet]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * The table template that can be used by the mat-table. Should not be used outside of the
     * material library.
     * \@docs-private
     * @type {?}
     */


    var CDK_TABLE_TEMPLATE = // Note that according to MDN, the `caption` element has to be projected as the **first**
    // element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
    "\n  <ng-content select=\"caption\"></ng-content>\n  <ng-container headerRowOutlet></ng-container>\n  <ng-container rowOutlet></ng-container>\n  <ng-container footerRowOutlet></ng-container>\n";
    /**
     * Interface used to conveniently type the possible context interfaces for the render row.
     * \@docs-private
     * @record
     * @template T
     */

    function RowContext() {}
    /**
     * Class used to conveniently type the embedded view ref for rows with a context.
     * \@docs-private
     * @abstract
     * @template T
     */


    var RowViewRef = /*#__PURE__*/function (_angular_core__WEBPAC) {
      _inherits(RowViewRef, _angular_core__WEBPAC);

      var _super11 = _createSuper(RowViewRef);

      function RowViewRef() {
        _classCallCheck(this, RowViewRef);

        return _super11.apply(this, arguments);
      }

      return RowViewRef;
    }(_angular_core__WEBPACK_IMPORTED_MODULE_3__["EmbeddedViewRef"]);
    /**
     * Set of properties that represents the identity of a single rendered row.
     *
     * When the table needs to determine the list of rows to render, it will do so by iterating through
     * each data object and evaluating its list of row templates to display (when multiTemplateDataRows
     * is false, there is only one template per data object). For each pair of data object and row
     * template, a `RenderRow` is added to the list of rows to render. If the data object and row
     * template pair has already been rendered, the previously used `RenderRow` is added; else a new
     * `RenderRow` is * created. Once the list is complete and all data objects have been itereated
     * through, a diff is performed to determine the changes that need to be made to the rendered rows.
     *
     * \@docs-private
     * @record
     * @template T
     */


    function RenderRow() {}

    if (false) {}
    /**
     * A data table that can render a header row, data rows, and a footer row.
     * Uses the dataSource input to determine the data to be rendered. The data can be provided either
     * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
     * connect function that will return an Observable stream that emits the data array to render.
     * @template T
     */


    var CdkTable = /*#__PURE__*/function () {
      /**
       * @param {?} _differs
       * @param {?} _changeDetectorRef
       * @param {?} _elementRef
       * @param {?} role
       * @param {?} _dir
       * @param {?} _document
       * @param {?} _platform
       */
      function CdkTable(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform) {
        _classCallCheck(this, CdkTable);

        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._dir = _dir;
        this._platform = _platform;
        /**
         * Subject that emits when the component has been destroyed.
         */

        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Map of all the user's defined columns (header, data, and footer cell template) identified by
         * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
         * any custom column definitions added to `_customColumnDefs`.
         */

        this._columnDefsByName = new Map();
        /**
         * Column definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * column definitions as *its* content child.
         */

        this._customColumnDefs = new Set();
        /**
         * Data row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in data rows as *its* content child.
         */

        this._customRowDefs = new Set();
        /**
         * Header row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in header rows as *its* content child.
         */

        this._customHeaderRowDefs = new Set();
        /**
         * Footer row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
         * built-in footer row as *its* content child.
         */

        this._customFooterRowDefs = new Set();
        /**
         * Whether the header row definition has been changed. Triggers an update to the header row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */

        this._headerRowDefChanged = true;
        /**
         * Whether the footer row definition has been changed. Triggers an update to the footer row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */

        this._footerRowDefChanged = true;
        /**
         * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
         * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
         * the cached `RenderRow` objects when possible, the row identity is preserved when the data
         * and row template matches, which allows the `IterableDiffer` to check rows by reference
         * and understand which rows are added/moved/removed.
         *
         * Implemented as a map of maps where the first key is the `data: T` object and the second is the
         * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
         * contains an array of created pairs. The array is necessary to handle cases where the data
         * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
         * stored.
         */

        this._cachedRenderRowsMap = new Map();
        /**
         * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
         * table subclasses.
         */

        this.stickyCssClass = 'cdk-table-sticky';
        this._multiTemplateDataRows = false; // TODO(andrewseguin): Remove max value as the end index
        //   and instead calculate the view on init and scroll.

        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         *
         * \@docs-private
         */

        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]({
          start: 0,
          end: Number.MAX_VALUE
        });

        if (!role) {
          this._elementRef.nativeElement.setAttribute('role', 'grid');
        }

        this._document = _document;
        this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
      }
      /**
       * Tracking function that will be used to check the differences in data changes. Used similarly
       * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
       * relative to the function to know if a row should be added/removed/moved.
       * Accepts a function that takes two parameters, `index` and `item`.
       * @return {?}
       */


      _createClass(CdkTable, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this9 = this;

          this._setupStickyStyler();

          if (this._isNativeHtmlTable) {
            this._applyNativeTableSections();
          } // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
          // the user has provided a custom trackBy, return the result of that function as evaluated
          // with the values of the `RenderRow`'s data and index.


          this._dataDiffer = this._differs.find([]).create(
          /**
          * @param {?} _i
          * @param {?} dataRow
          * @return {?}
          */
          function (_i, dataRow) {
            return _this9.trackBy ? _this9.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
          this._cacheRowDefs();

          this._cacheColumnDefs(); // Make sure that the user has at least added header, footer, or data row def.


          if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length) {
            throw getTableMissingRowDefsError();
          } // Render updates if the list of columns have been changed for the header, row, or footer defs.


          this._renderUpdatedColumns(); // If the header row definition has been changed, trigger a render to the header row.


          if (this._headerRowDefChanged) {
            this._forceRenderHeaderRows();

            this._headerRowDefChanged = false;
          } // If the footer row definition has been changed, trigger a render to the footer row.


          if (this._footerRowDefChanged) {
            this._forceRenderFooterRows();

            this._footerRowDefChanged = false;
          } // If there is a data source and row definitions, connect to the data source unless a
          // connection has already been made.


          if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
            this._observeRenderChanges();
          }

          this._checkStickyStates();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._rowOutlet.viewContainer.clear();

          this._headerRowOutlet.viewContainer.clear();

          this._footerRowOutlet.viewContainer.clear();

          this._cachedRenderRowsMap.clear();

          this._onDestroy.next();

          this._onDestroy.complete();

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            this.dataSource.disconnect(this);
          }
        }
        /**
         * Renders rows based on the table's latest set of data, which was either provided directly as an
         * input or retrieved through an Observable stream (directly or from a DataSource).
         * Checks for differences in the data since the last diff to perform only the necessary
         * changes (add/remove/move rows).
         *
         * If the table's data source is a DataSource or Observable, this will be invoked automatically
         * each time the provided Observable stream emits a new data array. Otherwise if your data is
         * an array, this function will need to be called to render any changes.
         * @return {?}
         */

      }, {
        key: "renderRows",
        value: function renderRows() {
          var _this10 = this;

          this._renderRows = this._getAllRenderRows();
          /** @type {?} */

          var changes = this._dataDiffer.diff(this._renderRows);

          if (!changes) {
            return;
          }
          /** @type {?} */


          var viewContainer = this._rowOutlet.viewContainer;
          changes.forEachOperation(
          /**
          * @param {?} record
          * @param {?} prevIndex
          * @param {?} currentIndex
          * @return {?}
          */
          function (record, prevIndex, currentIndex) {
            if (record.previousIndex == null) {
              _this10._insertRow(record.item,
              /** @type {?} */
              currentIndex);
            } else if (currentIndex == null) {
              viewContainer.remove(
              /** @type {?} */
              prevIndex);
            } else {
              /** @type {?} */
              var view =
              /** @type {?} */
              viewContainer.get(
              /** @type {?} */
              prevIndex);
              viewContainer.move(
              /** @type {?} */
              view, currentIndex);
            }
          }); // Update the meta context of a row's context data (index, count, first, last, ...)

          this._updateRowIndexContext(); // Update rows that did not get added/removed/moved but may have had their identity changed,
          // e.g. if trackBy matched data on some property but the actual data reference changed.


          changes.forEachIdentityChange(
          /**
          * @param {?} record
          * @return {?}
          */
          function (record) {
            /** @type {?} */
            var rowView =
            /** @type {?} */
            viewContainer.get(
            /** @type {?} */
            record.currentIndex);
            rowView.context.$implicit = record.item.data;
          });
          this.updateStickyColumnStyles();
        }
        /**
         * Sets the header row definition to be used. Overrides the header row definition gathered by
         * using `ContentChild`, if one exists. Sets a flag that will re-render the header row after the
         * table's content is checked.
         * \@docs-private
         * @deprecated Use `addHeaderRowDef` and `removeHeaderRowDef` instead
         * \@breaking-change 8.0.0
         * @param {?} headerRowDef
         * @return {?}
         */

      }, {
        key: "setHeaderRowDef",
        value: function setHeaderRowDef(headerRowDef) {
          this._customHeaderRowDefs = new Set([headerRowDef]);
          this._headerRowDefChanged = true;
        }
        /**
         * Sets the footer row definition to be used. Overrides the footer row definition gathered by
         * using `ContentChild`, if one exists. Sets a flag that will re-render the footer row after the
         * table's content is checked.
         * \@docs-private
         * @deprecated Use `addFooterRowDef` and `removeFooterRowDef` instead
         * \@breaking-change 8.0.0
         * @param {?} footerRowDef
         * @return {?}
         */

      }, {
        key: "setFooterRowDef",
        value: function setFooterRowDef(footerRowDef) {
          this._customFooterRowDefs = new Set([footerRowDef]);
          this._footerRowDefChanged = true;
        }
        /**
         * Adds a column definition that was not included as part of the content children.
         * @param {?} columnDef
         * @return {?}
         */

      }, {
        key: "addColumnDef",
        value: function addColumnDef(columnDef) {
          this._customColumnDefs.add(columnDef);
        }
        /**
         * Removes a column definition that was not included as part of the content children.
         * @param {?} columnDef
         * @return {?}
         */

      }, {
        key: "removeColumnDef",
        value: function removeColumnDef(columnDef) {
          this._customColumnDefs["delete"](columnDef);
        }
        /**
         * Adds a row definition that was not included as part of the content children.
         * @param {?} rowDef
         * @return {?}
         */

      }, {
        key: "addRowDef",
        value: function addRowDef(rowDef) {
          this._customRowDefs.add(rowDef);
        }
        /**
         * Removes a row definition that was not included as part of the content children.
         * @param {?} rowDef
         * @return {?}
         */

      }, {
        key: "removeRowDef",
        value: function removeRowDef(rowDef) {
          this._customRowDefs["delete"](rowDef);
        }
        /**
         * Adds a header row definition that was not included as part of the content children.
         * @param {?} headerRowDef
         * @return {?}
         */

      }, {
        key: "addHeaderRowDef",
        value: function addHeaderRowDef(headerRowDef) {
          this._customHeaderRowDefs.add(headerRowDef);

          this._headerRowDefChanged = true;
        }
        /**
         * Removes a header row definition that was not included as part of the content children.
         * @param {?} headerRowDef
         * @return {?}
         */

      }, {
        key: "removeHeaderRowDef",
        value: function removeHeaderRowDef(headerRowDef) {
          this._customHeaderRowDefs["delete"](headerRowDef);

          this._headerRowDefChanged = true;
        }
        /**
         * Adds a footer row definition that was not included as part of the content children.
         * @param {?} footerRowDef
         * @return {?}
         */

      }, {
        key: "addFooterRowDef",
        value: function addFooterRowDef(footerRowDef) {
          this._customFooterRowDefs.add(footerRowDef);

          this._footerRowDefChanged = true;
        }
        /**
         * Removes a footer row definition that was not included as part of the content children.
         * @param {?} footerRowDef
         * @return {?}
         */

      }, {
        key: "removeFooterRowDef",
        value: function removeFooterRowDef(footerRowDef) {
          this._customFooterRowDefs["delete"](footerRowDef);

          this._footerRowDefChanged = true;
        }
        /**
         * Updates the header sticky styles. First resets all applied styles with respect to the cells
         * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
         * automatically called when the header row changes its displayed set of columns, or if its
         * sticky input changes. May be called manually for cases where the cell content changes outside
         * of these events.
         * @return {?}
         */

      }, {
        key: "updateStickyHeaderRowStyles",
        value: function updateStickyHeaderRowStyles() {
          /** @type {?} */
          var headerRows = this._getRenderedRows(this._headerRowOutlet);
          /** @type {?} */


          var tableElement =
          /** @type {?} */
          this._elementRef.nativeElement; // Hide the thead element if there are no header rows. This is necessary to satisfy
          // overzealous a11y checkers that fail because the `rowgroup` element does not contain
          // required child `row`.

          /** @type {?} */

          var thead = tableElement.querySelector('thead');

          if (thead) {
            thead.style.display = headerRows.length ? '' : 'none';
          }
          /** @type {?} */


          var stickyStates = this._headerRowDefs.map(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.sticky;
          });

          this._stickyStyler.clearStickyPositioning(headerRows, ['top']);

          this._stickyStyler.stickRows(headerRows, stickyStates, 'top'); // Reset the dirty state of the sticky input change since it has been used.


          this._headerRowDefs.forEach(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.resetStickyChanged();
          });
        }
        /**
         * Updates the footer sticky styles. First resets all applied styles with respect to the cells
         * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
         * automatically called when the footer row changes its displayed set of columns, or if its
         * sticky input changes. May be called manually for cases where the cell content changes outside
         * of these events.
         * @return {?}
         */

      }, {
        key: "updateStickyFooterRowStyles",
        value: function updateStickyFooterRowStyles() {
          /** @type {?} */
          var footerRows = this._getRenderedRows(this._footerRowOutlet);
          /** @type {?} */


          var tableElement =
          /** @type {?} */
          this._elementRef.nativeElement; // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
          // overzealous a11y checkers that fail because the `rowgroup` element does not contain
          // required child `row`.

          /** @type {?} */

          var tfoot = tableElement.querySelector('tfoot');

          if (tfoot) {
            tfoot.style.display = footerRows.length ? '' : 'none';
          }
          /** @type {?} */


          var stickyStates = this._footerRowDefs.map(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.sticky;
          });

          this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);

          this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');

          this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates); // Reset the dirty state of the sticky input change since it has been used.


          this._footerRowDefs.forEach(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.resetStickyChanged();
          });
        }
        /**
         * Updates the column sticky styles. First resets all applied styles with respect to the cells
         * sticking to the left and right. Then sticky styles are added for the left and right according
         * to the column definitions for each cell in each row. This is automatically called when
         * the data source provides a new set of data or when a column definition changes its sticky
         * input. May be called manually for cases where the cell content changes outside of these events.
         * @return {?}
         */

      }, {
        key: "updateStickyColumnStyles",
        value: function updateStickyColumnStyles() {
          var _this11 = this;

          /** @type {?} */
          var headerRows = this._getRenderedRows(this._headerRowOutlet);
          /** @type {?} */


          var dataRows = this._getRenderedRows(this._rowOutlet);
          /** @type {?} */


          var footerRows = this._getRenderedRows(this._footerRowOutlet); // Clear the left and right positioning from all columns in the table across all rows since
          // sticky columns span across all table sections (header, data, footer)


          this._stickyStyler.clearStickyPositioning([].concat(_toConsumableArray(headerRows), _toConsumableArray(dataRows), _toConsumableArray(footerRows)), ['left', 'right']); // Update the sticky styles for each header row depending on the def's sticky state


          headerRows.forEach(
          /**
          * @param {?} headerRow
          * @param {?} i
          * @return {?}
          */
          function (headerRow, i) {
            _this11._addStickyColumnStyles([headerRow], _this11._headerRowDefs[i]);
          }); // Update the sticky styles for each data row depending on its def's sticky state

          this._rowDefs.forEach(
          /**
          * @param {?} rowDef
          * @return {?}
          */
          function (rowDef) {
            // Collect all the rows rendered with this row definition.

            /** @type {?} */
            var rows = [];

            for (var i = 0; i < dataRows.length; i++) {
              if (_this11._renderRows[i].rowDef === rowDef) {
                rows.push(dataRows[i]);
              }
            }

            _this11._addStickyColumnStyles(rows, rowDef);
          }); // Update the sticky styles for each footer row depending on the def's sticky state


          footerRows.forEach(
          /**
          * @param {?} footerRow
          * @param {?} i
          * @return {?}
          */
          function (footerRow, i) {
            _this11._addStickyColumnStyles([footerRow], _this11._footerRowDefs[i]);
          }); // Reset the dirty state of the sticky input change since it has been used.

          Array.from(this._columnDefsByName.values()).forEach(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return def.resetStickyChanged();
          });
        }
        /**
         * Get the list of RenderRow objects to render according to the current list of data and defined
         * row definitions. If the previous list already contained a particular pair, it should be reused
         * so that the differ equates their references.
         * @private
         * @return {?}
         */

      }, {
        key: "_getAllRenderRows",
        value: function _getAllRenderRows() {
          /** @type {?} */
          var renderRows = []; // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
          // new cache while unused ones can be picked up by garbage collection.

          /** @type {?} */

          var prevCachedRenderRows = this._cachedRenderRowsMap;
          this._cachedRenderRowsMap = new Map(); // For each data object, get the list of rows that should be rendered, represented by the
          // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.

          for (var i = 0; i < this._data.length; i++) {
            /** @type {?} */
            var data = this._data[i];
            /** @type {?} */

            var renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));

            if (!this._cachedRenderRowsMap.has(data)) {
              this._cachedRenderRowsMap.set(data, new WeakMap());
            }

            for (var j = 0; j < renderRowsForData.length; j++) {
              /** @type {?} */
              var renderRow = renderRowsForData[j];
              /** @type {?} */

              var cache =
              /** @type {?} */
              this._cachedRenderRowsMap.get(renderRow.data);

              if (cache.has(renderRow.rowDef)) {
                /** @type {?} */
                cache.get(renderRow.rowDef).push(renderRow);
              } else {
                cache.set(renderRow.rowDef, [renderRow]);
              }

              renderRows.push(renderRow);
            }
          }

          return renderRows;
        }
        /**
         * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
         * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
         * `(T, CdkRowDef)` pair.
         * @private
         * @param {?} data
         * @param {?} dataIndex
         * @param {?=} cache
         * @return {?}
         */

      }, {
        key: "_getRenderRowsForData",
        value: function _getRenderRowsForData(data, dataIndex, cache) {
          /** @type {?} */
          var rowDefs = this._getRowDefs(data, dataIndex);

          return rowDefs.map(
          /**
          * @param {?} rowDef
          * @return {?}
          */
          function (rowDef) {
            /** @type {?} */
            var cachedRenderRows = cache && cache.has(rowDef) ?
            /** @type {?} */
            cache.get(rowDef) : [];

            if (cachedRenderRows.length) {
              /** @type {?} */
              var dataRow =
              /** @type {?} */
              cachedRenderRows.shift();
              dataRow.dataIndex = dataIndex;
              return dataRow;
            } else {
              return {
                data: data,
                rowDef: rowDef,
                dataIndex: dataIndex
              };
            }
          });
        }
        /**
         * Update the map containing the content's column definitions.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheColumnDefs",
        value: function _cacheColumnDefs() {
          var _this12 = this;

          this._columnDefsByName.clear();
          /** @type {?} */


          var columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
          columnDefs.forEach(
          /**
          * @param {?} columnDef
          * @return {?}
          */
          function (columnDef) {
            if (_this12._columnDefsByName.has(columnDef.name)) {
              throw getTableDuplicateColumnNameError(columnDef.name);
            }

            _this12._columnDefsByName.set(columnDef.name, columnDef);
          });
        }
        /**
         * Update the list of all available row definitions that can be used.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheRowDefs",
        value: function _cacheRowDefs() {
          this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
          this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
          this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs); // After all row definitions are determined, find the row definition to be considered default.

          /** @type {?} */

          var defaultRowDefs = this._rowDefs.filter(
          /**
          * @param {?} def
          * @return {?}
          */
          function (def) {
            return !def.when;
          });

          if (!this.multiTemplateDataRows && defaultRowDefs.length > 1) {
            throw getTableMultipleDefaultRowDefsError();
          }

          this._defaultRowDef = defaultRowDefs[0];
        }
        /**
         * Check if the header, data, or footer rows have changed what columns they want to display or
         * whether the sticky states have changed for the header or footer. If there is a diff, then
         * re-render that section.
         * @private
         * @return {?}
         */

      }, {
        key: "_renderUpdatedColumns",
        value: function _renderUpdatedColumns() {
          /** @type {?} */
          var columnsDiffReducer =
          /**
          * @param {?} acc
          * @param {?} def
          * @return {?}
          */
          function columnsDiffReducer(acc, def) {
            return acc || !!def.getColumnsDiff();
          }; // Force re-render data rows if the list of column definitions have changed.


          if (this._rowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderDataRows();
          } // Force re-render header/footer rows if the list of column definitions have changed..


          if (this._headerRowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderHeaderRows();
          }

          if (this._footerRowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderFooterRows();
          }
        }
        /**
         * Switch to the provided data source by resetting the data and unsubscribing from the current
         * render change subscription if one exists. If the data source is null, interpret this by
         * clearing the row outlet. Otherwise start listening for new data.
         * @private
         * @param {?} dataSource
         * @return {?}
         */

      }, {
        key: "_switchDataSource",
        value: function _switchDataSource(dataSource) {
          this._data = [];

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            this.dataSource.disconnect(this);
          } // Stop listening for data from the previous data source.


          if (this._renderChangeSubscription) {
            this._renderChangeSubscription.unsubscribe();

            this._renderChangeSubscription = null;
          }

          if (!dataSource) {
            if (this._dataDiffer) {
              this._dataDiffer.diff([]);
            }

            this._rowOutlet.viewContainer.clear();
          }

          this._dataSource = dataSource;
        }
        /**
         * Set up a subscription for the data provided by the data source.
         * @private
         * @return {?}
         */

      }, {
        key: "_observeRenderChanges",
        value: function _observeRenderChanges() {
          var _this13 = this;

          // If no data source has been set, there is nothing to observe for changes.
          if (!this.dataSource) {
            return;
          }
          /** @type {?} */


          var dataStream;

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            dataStream = this.dataSource.connect(this);
          } else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["isObservable"])(this.dataSource)) {
            dataStream = this.dataSource;
          } else if (Array.isArray(this.dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.dataSource);
          }

          if (dataStream === undefined) {
            throw getTableUnknownDataSourceError();
          }

          this._renderChangeSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy)).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            _this13._data = data || [];

            _this13.renderRows();
          });
        }
        /**
         * Clears any existing content in the header row outlet and creates a new embedded view
         * in the outlet using the header row definition.
         * @private
         * @return {?}
         */

      }, {
        key: "_forceRenderHeaderRows",
        value: function _forceRenderHeaderRows() {
          var _this14 = this;

          // Clear the header row outlet if any content exists.
          if (this._headerRowOutlet.viewContainer.length > 0) {
            this._headerRowOutlet.viewContainer.clear();
          }

          this._headerRowDefs.forEach(
          /**
          * @param {?} def
          * @param {?} i
          * @return {?}
          */
          function (def, i) {
            return _this14._renderRow(_this14._headerRowOutlet, def, i);
          });

          this.updateStickyHeaderRowStyles();
          this.updateStickyColumnStyles();
        }
        /**
         * Clears any existing content in the footer row outlet and creates a new embedded view
         * in the outlet using the footer row definition.
         * @private
         * @return {?}
         */

      }, {
        key: "_forceRenderFooterRows",
        value: function _forceRenderFooterRows() {
          var _this15 = this;

          // Clear the footer row outlet if any content exists.
          if (this._footerRowOutlet.viewContainer.length > 0) {
            this._footerRowOutlet.viewContainer.clear();
          }

          this._footerRowDefs.forEach(
          /**
          * @param {?} def
          * @param {?} i
          * @return {?}
          */
          function (def, i) {
            return _this15._renderRow(_this15._footerRowOutlet, def, i);
          });

          this.updateStickyFooterRowStyles();
          this.updateStickyColumnStyles();
        }
        /**
         * Adds the sticky column styles for the rows according to the columns' stick states.
         * @private
         * @param {?} rows
         * @param {?} rowDef
         * @return {?}
         */

      }, {
        key: "_addStickyColumnStyles",
        value: function _addStickyColumnStyles(rows, rowDef) {
          var _this16 = this;

          /** @type {?} */
          var columnDefs = Array.from(rowDef.columns || []).map(
          /**
          * @param {?} columnName
          * @return {?}
          */
          function (columnName) {
            /** @type {?} */
            var columnDef = _this16._columnDefsByName.get(columnName);

            if (!columnDef) {
              throw getTableUnknownColumnError(columnName);
            }

            return (
              /** @type {?} */
              columnDef
            );
          });
          /** @type {?} */

          var stickyStartStates = columnDefs.map(
          /**
          * @param {?} columnDef
          * @return {?}
          */
          function (columnDef) {
            return columnDef.sticky;
          });
          /** @type {?} */

          var stickyEndStates = columnDefs.map(
          /**
          * @param {?} columnDef
          * @return {?}
          */
          function (columnDef) {
            return columnDef.stickyEnd;
          });

          this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates);
        }
        /**
         * Gets the list of rows that have been rendered in the row outlet.
         * @param {?} rowOutlet
         * @return {?}
         */

      }, {
        key: "_getRenderedRows",
        value: function _getRenderedRows(rowOutlet) {
          /** @type {?} */
          var renderedRows = [];

          for (var i = 0; i < rowOutlet.viewContainer.length; i++) {
            /** @type {?} */
            var viewRef =
            /** @type {?} */

            /** @type {?} */
            rowOutlet.viewContainer.get(i);
            renderedRows.push(viewRef.rootNodes[0]);
          }

          return renderedRows;
        }
        /**
         * Get the matching row definitions that should be used for this row data. If there is only
         * one row definition, it is returned. Otherwise, find the row definitions that has a when
         * predicate that returns true with the data. If none return true, return the default row
         * definition.
         * @param {?} data
         * @param {?} dataIndex
         * @return {?}
         */

      }, {
        key: "_getRowDefs",
        value: function _getRowDefs(data, dataIndex) {
          if (this._rowDefs.length == 1) {
            return [this._rowDefs[0]];
          }
          /** @type {?} */


          var rowDefs = [];

          if (this.multiTemplateDataRows) {
            rowDefs = this._rowDefs.filter(
            /**
            * @param {?} def
            * @return {?}
            */
            function (def) {
              return !def.when || def.when(dataIndex, data);
            });
          } else {
            /** @type {?} */
            var rowDef = this._rowDefs.find(
            /**
            * @param {?} def
            * @return {?}
            */
            function (def) {
              return def.when && def.when(dataIndex, data);
            }) || this._defaultRowDef;

            if (rowDef) {
              rowDefs.push(rowDef);
            }
          }

          if (!rowDefs.length) {
            throw getTableMissingMatchingRowDefError(data);
          }

          return rowDefs;
        }
        /**
         * Create the embedded view for the data row template and place it in the correct index location
         * within the data row view container.
         * @private
         * @param {?} renderRow
         * @param {?} renderIndex
         * @return {?}
         */

      }, {
        key: "_insertRow",
        value: function _insertRow(renderRow, renderIndex) {
          /** @type {?} */
          var rowDef = renderRow.rowDef;
          /** @type {?} */

          var context = {
            $implicit: renderRow.data
          };

          this._renderRow(this._rowOutlet, rowDef, renderIndex, context);
        }
        /**
         * Creates a new row template in the outlet and fills it with the set of cell templates.
         * Optionally takes a context to provide to the row and cells, as well as an optional index
         * of where to place the new row template in the outlet.
         * @private
         * @param {?} outlet
         * @param {?} rowDef
         * @param {?} index
         * @param {?=} context
         * @return {?}
         */

      }, {
        key: "_renderRow",
        value: function _renderRow(outlet, rowDef, index) {
          var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
          outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);

          var _iterator5 = _createForOfIteratorHelper(this._getCellTemplates(rowDef)),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var cellTemplate = _step5.value;

              if (CdkCellOutlet.mostRecentCellOutlet) {
                CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Updates the index-related context for each row to reflect any changes in the index of the rows,
         * e.g. first/last/even/odd.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateRowIndexContext",
        value: function _updateRowIndexContext() {
          /** @type {?} */
          var viewContainer = this._rowOutlet.viewContainer;

          for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            /** @type {?} */
            var viewRef =
            /** @type {?} */
            viewContainer.get(renderIndex);
            /** @type {?} */

            var context =
            /** @type {?} */
            viewRef.context;
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;

            if (this.multiTemplateDataRows) {
              context.dataIndex = this._renderRows[renderIndex].dataIndex;
              context.renderIndex = renderIndex;
            } else {
              context.index = this._renderRows[renderIndex].dataIndex;
            }
          }
        }
        /**
         * Gets the column definitions for the provided row def.
         * @private
         * @param {?} rowDef
         * @return {?}
         */

      }, {
        key: "_getCellTemplates",
        value: function _getCellTemplates(rowDef) {
          var _this17 = this;

          if (!rowDef || !rowDef.columns) {
            return [];
          }

          return Array.from(rowDef.columns,
          /**
          * @param {?} columnId
          * @return {?}
          */
          function (columnId) {
            /** @type {?} */
            var column = _this17._columnDefsByName.get(columnId);

            if (!column) {
              throw getTableUnknownColumnError(columnId);
            }

            return rowDef.extractCellTemplate(column);
          });
        }
        /**
         * Adds native table sections (e.g. tbody) and moves the row outlets into them.
         * @private
         * @return {?}
         */

      }, {
        key: "_applyNativeTableSections",
        value: function _applyNativeTableSections() {
          /** @type {?} */
          var documentFragment = this._document.createDocumentFragment();
          /** @type {?} */


          var sections = [{
            tag: 'thead',
            outlet: this._headerRowOutlet
          }, {
            tag: 'tbody',
            outlet: this._rowOutlet
          }, {
            tag: 'tfoot',
            outlet: this._footerRowOutlet
          }];

          for (var _i2 = 0, _sections = sections; _i2 < _sections.length; _i2++) {
            var section = _sections[_i2];

            /** @type {?} */
            var element = this._document.createElement(section.tag);

            element.setAttribute('role', 'rowgroup');
            element.appendChild(section.outlet.elementRef.nativeElement);
            documentFragment.appendChild(element);
          } // Use a DocumentFragment so we don't hit the DOM on each iteration.


          this._elementRef.nativeElement.appendChild(documentFragment);
        }
        /**
         * Forces a re-render of the data rows. Should be called in cases where there has been an input
         * change that affects the evaluation of which rows should be rendered, e.g. toggling
         * `multiTemplateDataRows` or adding/removing row definitions.
         * @private
         * @return {?}
         */

      }, {
        key: "_forceRenderDataRows",
        value: function _forceRenderDataRows() {
          this._dataDiffer.diff([]);

          this._rowOutlet.viewContainer.clear();

          this.renderRows();
          this.updateStickyColumnStyles();
        }
        /**
         * Checks if there has been a change in sticky states since last check and applies the correct
         * sticky styles. Since checking resets the "dirty" state, this should only be performed once
         * during a change detection and after the inputs are settled (after content check).
         * @private
         * @return {?}
         */

      }, {
        key: "_checkStickyStates",
        value: function _checkStickyStates() {
          /** @type {?} */
          var stickyCheckReducer =
          /**
          * @param {?} acc
          * @param {?} d
          * @return {?}
          */
          function stickyCheckReducer(acc, d) {
            return acc || d.hasStickyChanged();
          }; // Note that the check needs to occur for every definition since it notifies the definition
          // that it can reset its dirty state. Using another operator like `some` may short-circuit
          // remaining definitions and leave them in an unchecked state.


          if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyHeaderRowStyles();
          }

          if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyFooterRowStyles();
          }

          if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
            this.updateStickyColumnStyles();
          }
        }
        /**
         * Creates the sticky styler that will be used for sticky rows and columns. Listens
         * for directionality changes and provides the latest direction to the styler. Re-applies column
         * stickiness when directionality changes.
         * @private
         * @return {?}
         */

      }, {
        key: "_setupStickyStyler",
        value: function _setupStickyStyler() {
          var _this18 = this;

          /** @type {?} */
          var direction = this._dir ? this._dir.value : 'ltr';
          this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._platform.isBrowser);
          (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy)).subscribe(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            _this18._stickyStyler.direction = value;

            _this18.updateStickyColumnStyles();
          });
        }
        /**
         * Filters definitions that belong to this table from a QueryList.
         * @private
         * @template I
         * @param {?} items
         * @return {?}
         */

      }, {
        key: "_getOwnDefs",
        value: function _getOwnDefs(items) {
          var _this19 = this;

          return items.filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return !item._table || item._table === _this19;
          });
        }
      }, {
        key: "trackBy",
        get: function get() {
          return this._trackByFn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        ,
        set: function set(fn) {
          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])() && fn != null && typeof fn !== 'function' &&
          /** @type {?} */
          console &&
          /** @type {?} */
          console.warn) {
            console.warn("trackBy must be a function, but received ".concat(JSON.stringify(fn), "."));
          }

          this._trackByFn = fn;
        }
        /**
         * The table's source of data, which can be provided in three ways (in order of complexity):
         *   - Simple data array (each object represents one table row)
         *   - Stream that emits a data array each time the array changes
         *   - `DataSource` object that implements the connect/disconnect interface.
         *
         * If a data array is provided, the table must be notified when the array's objects are
         * added, removed, or moved. This can be done by calling the `renderRows()` function which will
         * render the diff since the last table render. If the data array reference is changed, the table
         * will automatically trigger an update to the rows.
         *
         * When providing an Observable stream, the table will trigger an update automatically when the
         * stream emits a new array of data.
         *
         * Finally, when providing a `DataSource` object, the table will use the Observable stream
         * provided by the connect function and trigger updates when that stream emits new data array
         * values. During the table's ngOnDestroy or when the data source is removed from the table, the
         * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
         * subscriptions registered during the connect process).
         * @return {?}
         */

      }, {
        key: "dataSource",
        get: function get() {
          return this._dataSource;
        }
        /**
         * @param {?} dataSource
         * @return {?}
         */
        ,
        set: function set(dataSource) {
          if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
          }
        }
        /**
         * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
         * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
         * dataobject will render the first row that evaluates its when predicate to true, in the order
         * defined in the table, or otherwise the default row which does not have a when predicate.
         * @return {?}
         */

      }, {
        key: "multiTemplateDataRows",
        get: function get() {
          return this._multiTemplateDataRows;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._multiTemplateDataRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v); // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
          // this setter will be invoked before the row outlet has been defined hence the null check.

          if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
            this._forceRenderDataRows();
          }
        }
      }]);

      return CdkTable;
    }();

    CdkTable.ɵfac = function CdkTable_Factory(t) {
      return new (t || CdkTable)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]));
    };

    CdkTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CdkTable,
      selectors: [["cdk-table"], ["table", "cdk-table", ""]],
      contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkColumnDef, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkRowDef, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderRowDef, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterRowDef, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentColumnDefs = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentRowDefs = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentHeaderRowDefs = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentFooterRowDefs = _t);
        }
      },
      viewQuery: function CdkTable_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](DataRowOutlet, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](HeaderRowOutlet, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](FooterRowOutlet, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._rowOutlet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._headerRowOutlet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._footerRowOutlet = _t.first);
        }
      },
      hostAttrs: [1, "cdk-table"],
      inputs: {
        trackBy: "trackBy",
        dataSource: "dataSource",
        multiTemplateDataRows: "multiTemplateDataRows"
      },
      exportAs: ["cdkTable"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: CDK_TABLE,
        useExisting: CdkTable
      }])],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 0,
      consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["footerRowOutlet", ""]],
      template: function CdkTable_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](1, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](2, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](3, 2);
        }
      },
      directives: [HeaderRowOutlet, DataRowOutlet, FooterRowOutlet],
      encapsulation: 2
    });
    /** @nocollapse */

    CdkTable.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
          args: ['role']
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }];
    };

    CdkTable.propDecorators = {
      trackBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dataSource: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      multiTemplateDataRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      _rowOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [DataRowOutlet, {
          "static": true
        }]
      }],
      _headerRowOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [HeaderRowOutlet, {
          "static": true
        }]
      }],
      _footerRowOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [FooterRowOutlet, {
          "static": true
        }]
      }],
      _contentColumnDefs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [CdkColumnDef, {
          descendants: true
        }]
      }],
      _contentRowDefs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [CdkRowDef, {
          descendants: true
        }]
      }],
      _contentHeaderRowDefs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [CdkHeaderRowDef, {
          descendants: true
        }]
      }],
      _contentFooterRowDefs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [CdkFooterRowDef, {
          descendants: true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'cdk-table, table[cdk-table]',
          exportAs: 'cdkTable',
          template: CDK_TABLE_TEMPLATE,
          host: {
            'class': 'cdk-table'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          // The "OnPush" status for the `MatTable` component is effectively a noop, so we are removing it.
          // The view for `MatTable` consists entirely of templates declared in other views. As they are
          // declared elsewhere, they are checked when their declaration points are checked.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
          providers: [{
            provide: CDK_TABLE,
            useExisting: CdkTable
          }]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
            args: ['role']
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      }, {
        trackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dataSource: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        multiTemplateDataRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _rowOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [DataRowOutlet, {
            "static": true
          }]
        }],
        _headerRowOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [HeaderRowOutlet, {
            "static": true
          }]
        }],
        _footerRowOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [FooterRowOutlet, {
            "static": true
          }]
        }],
        _contentColumnDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkColumnDef, {
            descendants: true
          }]
        }],
        _contentRowDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkRowDef, {
            descendants: true
          }]
        }],
        _contentHeaderRowDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkHeaderRowDef, {
            descendants: true
          }]
        }],
        _contentFooterRowDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [CdkFooterRowDef, {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * Utility function that gets a merged list of the entries in an array and values of a Set.
     * @template T
     * @param {?} array
     * @param {?} set
     * @return {?}
     */


    function mergeArrayAndSet(array, set) {
      return array.concat(Array.from(set));
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/text-column.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Column that simply shows text content for the header and row cells. Assumes that the table
     * is using the native table implementation (`<table>`).
     *
     * By default, the name of this column will be the header text and data property accessor.
     * The header text can be overridden with the `headerText` input. Cell values can be overridden with
     * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
     * input.
     * @template T
     */


    var CdkTextColumn = /*#__PURE__*/function () {
      /**
       * @param {?} _table
       * @param {?} _options
       */
      function CdkTextColumn(_table, _options) {
        _classCallCheck(this, CdkTextColumn);

        this._table = _table;
        this._options = _options;
        /**
         * Alignment of the cell values.
         */

        this.justify = 'start';
        this._options = _options || {};
      }
      /**
       * Column name that should be used to reference this column.
       * @return {?}
       */


      _createClass(CdkTextColumn, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._syncColumnDefName();

          if (this.headerText === undefined) {
            this.headerText = this._createDefaultHeaderText();
          }

          if (!this.dataAccessor) {
            this.dataAccessor = this._options.defaultDataAccessor ||
            /**
            * @param {?} data
            * @param {?} name
            * @return {?}
            */
            function (data, name) {
              return (
                /** @type {?} */
                data[name]
              );
            };
          }

          if (this._table) {
            // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
            // since the columnDef will not pick up its content by the time the table finishes checking
            // its content and initializing the rows.
            this.columnDef.cell = this.cell;
            this.columnDef.headerCell = this.headerCell;

            this._table.addColumnDef(this.columnDef);
          } else {
            throw getTableTextColumnMissingParentTableError();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._table) {
            this._table.removeColumnDef(this.columnDef);
          }
        }
        /**
         * Creates a default header text. Use the options' header text transformation function if one
         * has been provided. Otherwise simply capitalize the column name.
         * @return {?}
         */

      }, {
        key: "_createDefaultHeaderText",
        value: function _createDefaultHeaderText() {
          /** @type {?} */
          var name = this.name;

          if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])() && !name) {
            throw getTableTextColumnMissingNameError();
          }

          if (this._options && this._options.defaultHeaderTextTransform) {
            return this._options.defaultHeaderTextTransform(name);
          }

          return name[0].toUpperCase() + name.slice(1);
        }
        /**
         * Synchronizes the column definition name with the text column name.
         * @private
         * @return {?}
         */

      }, {
        key: "_syncColumnDefName",
        value: function _syncColumnDefName() {
          if (this.columnDef) {
            this.columnDef.name = this.name;
          }
        }
      }, {
        key: "name",
        get: function get() {
          return this._name;
        }
        /**
         * @param {?} name
         * @return {?}
         */
        ,
        set: function set(name) {
          this._name = name; // With Ivy, inputs can be initialized before static query results are
          // available. In that case, we defer the synchronization until "ngOnInit" fires.

          this._syncColumnDefName();
        }
      }]);

      return CdkTextColumn;
    }();

    CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) {
      return new (t || CdkTextColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTable, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](TEXT_COLUMN_OPTIONS, 8));
    };

    CdkTextColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CdkTextColumn,
      selectors: [["cdk-text-column"]],
      viewQuery: function CdkTextColumn_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkColumnDef, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkCellDef, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkHeaderCellDef, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.columnDef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
        }
      },
      inputs: {
        justify: "justify",
        name: "name",
        headerText: "headerText",
        dataAccessor: "dataAccessor"
      },
      decls: 3,
      vars: 0,
      consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
      template: function CdkTextColumn_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CdkTextColumn_th_1_Template, 2, 3, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }
      },
      directives: [CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderCell, CdkCell],
      encapsulation: 2
    });
    /** @nocollapse */

    CdkTextColumn.ctorParameters = function () {
      return [{
        type: CdkTable,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [TEXT_COLUMN_OPTIONS]
        }]
      }];
    };

    CdkTextColumn.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      headerText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      dataAccessor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      justify: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      columnDef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [CdkColumnDef, {
          "static": true
        }]
      }],
      cell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [CdkCellDef, {
          "static": true
        }]
      }],
      headerCell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [CdkHeaderCellDef, {
          "static": true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTextColumn, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'cdk-text-column',
          template: "\n    <ng-container cdkColumnDef>\n      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td cdk-cell *cdkCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          // Change detection is intentionally not set to OnPush. This component's template will be provided
          // to the table to be inserted into its view. This is problematic when change detection runs since
          // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
          // mean's the template in the table's view will not have the updated value (and in fact will cause
          // an ExpressionChangedAfterItHasBeenCheckedError).
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default
        }]
      }], function () {
        return [{
          type: CdkTable,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [TEXT_COLUMN_OPTIONS]
          }]
        }];
      }, {
        justify: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        headerText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dataAccessor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        columnDef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [CdkColumnDef, {
            "static": true
          }]
        }],
        cell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [CdkCellDef, {
            "static": true
          }]
        }],
        headerCell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [CdkHeaderCellDef, {
            "static": true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/table-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn];

    var CdkTableModule = function CdkTableModule() {
      _classCallCheck(this, CdkTableModule);
    };

    CdkTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: CdkTableModule
    });
    CdkTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function CdkTableModule_Factory(t) {
        return new (t || CdkTableModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CdkTableModule, {
        declarations: [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn],
        exports: [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          exports: EXPORTED_DECLARATIONS,
          declarations: EXPORTED_DECLARATIONS
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/table/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=table.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js ***!
    \*************************************************************************/

  /*! exports provided: MatDivider, MatDividerModule */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015DividerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDivider", function () {
      return MatDivider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDividerModule", function () {
      return MatDividerModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/divider/divider.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatDivider = /*#__PURE__*/function () {
      function MatDivider() {
        _classCallCheck(this, MatDivider);

        this._vertical = false;
        this._inset = false;
      }
      /**
       * Whether the divider is vertically aligned.
       * @return {?}
       */


      _createClass(MatDivider, [{
        key: "vertical",
        get: function get() {
          return this._vertical;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the divider is an inset divider.
         * @return {?}
         */

      }, {
        key: "inset",
        get: function get() {
          return this._inset;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._inset = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
      }]);

      return MatDivider;
    }();

    MatDivider.ɵfac = function MatDivider_Factory(t) {
      return new (t || MatDivider)();
    };

    MatDivider.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatDivider,
      selectors: [["mat-divider"]],
      hostAttrs: ["role", "separator", 1, "mat-divider"],
      hostVars: 7,
      hostBindings: function MatDivider_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", ctx.vertical ? "vertical" : "horizontal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
        }
      },
      inputs: {
        vertical: "vertical",
        inset: "inset"
      },
      decls: 0,
      vars: 0,
      template: function MatDivider_Template(rf, ctx) {},
      styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    MatDivider.propDecorators = {
      vertical: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      inset: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDivider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-divider',
          host: {
            'role': 'separator',
            '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
            '[class.mat-divider-vertical]': 'vertical',
            '[class.mat-divider-horizontal]': '!vertical',
            '[class.mat-divider-inset]': 'inset',
            'class': 'mat-divider'
          },
          template: '',
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"]
        }]
      }], function () {
        return [];
      }, {
        vertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/divider/divider-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatDividerModule = function MatDividerModule() {
      _classCallCheck(this, MatDividerModule);
    };

    MatDividerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatDividerModule
    });
    MatDividerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatDividerModule_Factory(t) {
        return new (t || MatDividerModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatDividerModule, {
        declarations: function declarations() {
          return [MatDivider];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatDivider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDividerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          exports: [MatDivider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          declarations: [MatDivider]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/divider/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=divider.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js ***!
    \***************************************************************************/

  /*! exports provided: MAT_PAGINATOR_DEFAULT_OPTIONS, MAT_PAGINATOR_INTL_PROVIDER, MAT_PAGINATOR_INTL_PROVIDER_FACTORY, MatPaginator, MatPaginatorIntl, MatPaginatorModule, PageEvent */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015PaginatorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_DEFAULT_OPTIONS", function () {
      return MAT_PAGINATOR_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER", function () {
      return MAT_PAGINATOR_INTL_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY", function () {
      return MAT_PAGINATOR_INTL_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPaginator", function () {
      return MatPaginator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl", function () {
      return MatPaginatorIntl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPaginatorModule", function () {
      return MatPaginatorModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageEvent", function () {
      return PageEvent;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/paginator/paginator-intl.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
     * include it in a custom provider
     */


    function MatPaginator_div_2_mat_form_field_3_mat_option_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pageSizeOption_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", pageSizeOption_r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pageSizeOption_r6, " ");
      }
    }

    function MatPaginator_div_2_mat_form_field_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-select", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function MatPaginator_div_2_mat_form_field_3_Template_mat_select_selectionChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r7._changePageSize($event.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatPaginator_div_2_mat_form_field_3_mat_option_2_Template, 2, 2, "mat-option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r3.color);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.pageSize)("disabled", ctx_r3.disabled)("aria-label", ctx_r3._intl.itemsPerPageLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3._displayedPageSizeOptions);
      }
    }

    function MatPaginator_div_2_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.pageSize);
      }
    }

    function MatPaginator_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MatPaginator_div_2_mat_form_field_3_Template, 3, 5, "mat-form-field", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MatPaginator_div_2_div_4_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0._intl.itemsPerPageLabel, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length <= 1);
      }
    }

    function MatPaginator_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r9.firstPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._previousButtonsDisabled());

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r1._intl.firstPageLabel);
      }
    }

    function MatPaginator_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_button_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r11.lastPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r2._intl.lastPageLabel)("matTooltipDisabled", ctx_r2._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r2._nextButtonsDisabled());

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r2._intl.lastPageLabel);
      }
    }

    var MatPaginatorIntl = function MatPaginatorIntl() {
      _classCallCheck(this, MatPaginatorIntl);

      /**
       * Stream to emit from when labels are changed. Use this to notify components when the labels have
       * changed after initialization.
       */
      this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
      /**
       * A label for the page size selector.
       */

      this.itemsPerPageLabel = 'Items per page:';
      /**
       * A label for the button that increments the current page.
       */

      this.nextPageLabel = 'Next page';
      /**
       * A label for the button that decrements the current page.
       */

      this.previousPageLabel = 'Previous page';
      /**
       * A label for the button that moves to the first page.
       */

      this.firstPageLabel = 'First page';
      /**
       * A label for the button that moves to the last page.
       */

      this.lastPageLabel = 'Last page';
      /**
       * A label for the range of items within the current page and the length of the whole list.
       */

      this.getRangeLabel =
      /**
      * @param {?} page
      * @param {?} pageSize
      * @param {?} length
      * @return {?}
      */
      function (page, pageSize, length) {
        if (length == 0 || pageSize == 0) {
          return "0 of ".concat(length);
        }

        length = Math.max(length, 0);
        /** @type {?} */

        var startIndex = page * pageSize; // If the start index exceeds the list length, do not try and fix the end index to the end.

        /** @type {?} */

        var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return "".concat(startIndex + 1, " \u2013 ").concat(endIndex, " of ").concat(length);
      };
    };

    MatPaginatorIntl.ɵfac = function MatPaginatorIntl_Factory(t) {
      return new (t || MatPaginatorIntl)();
    };
    /** @nocollapse */


    MatPaginatorIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function MatPaginatorIntl_Factory() {
        return new MatPaginatorIntl();
      },
      token: MatPaginatorIntl,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatPaginatorIntl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * \@docs-private
     * @param {?} parentIntl
     * @return {?}
     */


    function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
      return parentIntl || new MatPaginatorIntl();
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_PAGINATOR_INTL_PROVIDER = {
      // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
      provide: MatPaginatorIntl,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), MatPaginatorIntl]],
      useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/paginator/paginator.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The default page size if there is no page size and there are no provided page size options.
     * @type {?}
     */

    var DEFAULT_PAGE_SIZE = 50;
    /**
     * Change event object that is emitted when the user selects a
     * different page size or navigates to another page.
     */

    var PageEvent = function PageEvent() {
      _classCallCheck(this, PageEvent);
    };

    if (false) {}
    /**
     * Object that can be used to configure the default options for the paginator module.
     * @record
     */


    function MatPaginatorDefaultOptions() {}

    if (false) {}
    /**
     * Injection token that can be used to provide the default options for the paginator module.
     * @type {?}
     */


    var MAT_PAGINATOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_PAGINATOR_DEFAULT_OPTIONS'); // Boilerplate for applying mixins to MatPaginator.

    /**
     * \@docs-private
     */

    var MatPaginatorBase = function MatPaginatorBase() {
      _classCallCheck(this, MatPaginatorBase);
    };
    /** @type {?} */


    var _MatPaginatorBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinInitialized"])(MatPaginatorBase));
    /**
     * Component to provide navigation between paged information. Displays the size of the current
     * page, user-selectable options to change that size, what items are being shown, and
     * navigational button to go to the previous or next page.
     */


    var MatPaginator = /*#__PURE__*/function (_MatPaginatorBase2) {
      _inherits(MatPaginator, _MatPaginatorBase2);

      var _super12 = _createSuper(MatPaginator);

      /**
       * @param {?} _intl
       * @param {?} _changeDetectorRef
       * @param {?=} defaults
       */
      function MatPaginator(_intl, _changeDetectorRef, defaults) {
        var _this20;

        _classCallCheck(this, MatPaginator);

        _this20 = _super12.call(this);
        _this20._intl = _intl;
        _this20._changeDetectorRef = _changeDetectorRef;
        _this20._pageIndex = 0;
        _this20._length = 0;
        _this20._pageSizeOptions = [];
        _this20._hidePageSize = false;
        _this20._showFirstLastButtons = false;
        /**
         * Event emitted when the paginator changes the page size or page index.
         */

        _this20.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this20._intlChanges = _intl.changes.subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this20._changeDetectorRef.markForCheck();
        });

        if (defaults) {
          var pageSize = defaults.pageSize,
              pageSizeOptions = defaults.pageSizeOptions,
              hidePageSize = defaults.hidePageSize,
              showFirstLastButtons = defaults.showFirstLastButtons;

          if (pageSize != null) {
            _this20._pageSize = pageSize;
          }

          if (pageSizeOptions != null) {
            _this20._pageSizeOptions = pageSizeOptions;
          }

          if (hidePageSize != null) {
            _this20._hidePageSize = hidePageSize;
          }

          if (showFirstLastButtons != null) {
            _this20._showFirstLastButtons = showFirstLastButtons;
          }
        }

        return _this20;
      }
      /**
       * The zero-based page index of the displayed list of items. Defaulted to 0.
       * @return {?}
       */


      _createClass(MatPaginator, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._initialized = true;

          this._updateDisplayedPageSizeOptions();

          this._markInitialized();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._intlChanges.unsubscribe();
        }
        /**
         * Advances to the next page if it exists.
         * @return {?}
         */

      }, {
        key: "nextPage",
        value: function nextPage() {
          if (!this.hasNextPage()) {
            return;
          }
          /** @type {?} */


          var previousPageIndex = this.pageIndex;
          this.pageIndex++;

          this._emitPageEvent(previousPageIndex);
        }
        /**
         * Move back to the previous page if it exists.
         * @return {?}
         */

      }, {
        key: "previousPage",
        value: function previousPage() {
          if (!this.hasPreviousPage()) {
            return;
          }
          /** @type {?} */


          var previousPageIndex = this.pageIndex;
          this.pageIndex--;

          this._emitPageEvent(previousPageIndex);
        }
        /**
         * Move to the first page if not already there.
         * @return {?}
         */

      }, {
        key: "firstPage",
        value: function firstPage() {
          // hasPreviousPage being false implies at the start
          if (!this.hasPreviousPage()) {
            return;
          }
          /** @type {?} */


          var previousPageIndex = this.pageIndex;
          this.pageIndex = 0;

          this._emitPageEvent(previousPageIndex);
        }
        /**
         * Move to the last page if not already there.
         * @return {?}
         */

      }, {
        key: "lastPage",
        value: function lastPage() {
          // hasNextPage being false implies at the end
          if (!this.hasNextPage()) {
            return;
          }
          /** @type {?} */


          var previousPageIndex = this.pageIndex;
          this.pageIndex = this.getNumberOfPages() - 1;

          this._emitPageEvent(previousPageIndex);
        }
        /**
         * Whether there is a previous page.
         * @return {?}
         */

      }, {
        key: "hasPreviousPage",
        value: function hasPreviousPage() {
          return this.pageIndex >= 1 && this.pageSize != 0;
        }
        /**
         * Whether there is a next page.
         * @return {?}
         */

      }, {
        key: "hasNextPage",
        value: function hasNextPage() {
          /** @type {?} */
          var maxPageIndex = this.getNumberOfPages() - 1;
          return this.pageIndex < maxPageIndex && this.pageSize != 0;
        }
        /**
         * Calculate the number of pages
         * @return {?}
         */

      }, {
        key: "getNumberOfPages",
        value: function getNumberOfPages() {
          if (!this.pageSize) {
            return 0;
          }

          return Math.ceil(this.length / this.pageSize);
        }
        /**
         * Changes the page size so that the first item displayed on the page will still be
         * displayed using the new page size.
         *
         * For example, if the page size is 10 and on the second page (items indexed 10-19) then
         * switching so that the page size is 5 will set the third page as the current page so
         * that the 10th item will still be displayed.
         * @param {?} pageSize
         * @return {?}
         */

      }, {
        key: "_changePageSize",
        value: function _changePageSize(pageSize) {
          // Current page needs to be updated to reflect the new page size. Navigate to the page
          // containing the previous page's first item.

          /** @type {?} */
          var startIndex = this.pageIndex * this.pageSize;
          /** @type {?} */

          var previousPageIndex = this.pageIndex;
          this.pageIndex = Math.floor(startIndex / pageSize) || 0;
          this.pageSize = pageSize;

          this._emitPageEvent(previousPageIndex);
        }
        /**
         * Checks whether the buttons for going forwards should be disabled.
         * @return {?}
         */

      }, {
        key: "_nextButtonsDisabled",
        value: function _nextButtonsDisabled() {
          return this.disabled || !this.hasNextPage();
        }
        /**
         * Checks whether the buttons for going backwards should be disabled.
         * @return {?}
         */

      }, {
        key: "_previousButtonsDisabled",
        value: function _previousButtonsDisabled() {
          return this.disabled || !this.hasPreviousPage();
        }
        /**
         * Updates the list of page size options to display to the user. Includes making sure that
         * the page size is an option and that the list is sorted.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateDisplayedPageSizeOptions",
        value: function _updateDisplayedPageSizeOptions() {
          if (!this._initialized) {
            return;
          } // If no page size is provided, use the first page size option or the default page size.


          if (!this.pageSize) {
            this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
          }

          this._displayedPageSizeOptions = this.pageSizeOptions.slice();

          if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
            this._displayedPageSizeOptions.push(this.pageSize);
          } // Sort the numbers using a number-specific sort function.


          this._displayedPageSizeOptions.sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            return a - b;
          });

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Emits an event notifying that a change of the paginator's properties has been triggered.
         * @private
         * @param {?} previousPageIndex
         * @return {?}
         */

      }, {
        key: "_emitPageEvent",
        value: function _emitPageEvent(previousPageIndex) {
          this.page.emit({
            previousPageIndex: previousPageIndex,
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
            length: this.length
          });
        }
      }, {
        key: "pageIndex",
        get: function get() {
          return this._pageIndex;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._pageIndex = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value), 0);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * The length of the total number of items that are being paginated. Defaulted to 0.
         * @return {?}
         */

      }, {
        key: "length",
        get: function get() {
          return this._length;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._length = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Number of items to display on a page. By default set to 50.
         * @return {?}
         */

      }, {
        key: "pageSize",
        get: function get() {
          return this._pageSize;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._pageSize = Math.max(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value), 0);

          this._updateDisplayedPageSizeOptions();
        }
        /**
         * The set of provided page size options to display to the user.
         * @return {?}
         */

      }, {
        key: "pageSizeOptions",
        get: function get() {
          return this._pageSizeOptions;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._pageSizeOptions = (value || []).map(
          /**
          * @param {?} p
          * @return {?}
          */
          function (p) {
            return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(p);
          });

          this._updateDisplayedPageSizeOptions();
        }
        /**
         * Whether to hide the page size selection UI from the user.
         * @return {?}
         */

      }, {
        key: "hidePageSize",
        get: function get() {
          return this._hidePageSize;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hidePageSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether to show the first/last buttons UI to the user.
         * @return {?}
         */

      }, {
        key: "showFirstLastButtons",
        get: function get() {
          return this._showFirstLastButtons;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._showFirstLastButtons = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
      }]);

      return MatPaginator;
    }(_MatPaginatorBase);

    MatPaginator.ɵfac = function MatPaginator_Factory(t) {
      return new (t || MatPaginator)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_PAGINATOR_DEFAULT_OPTIONS, 8));
    };

    MatPaginator.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatPaginator,
      selectors: [["mat-paginator"]],
      hostAttrs: [1, "mat-paginator"],
      inputs: {
        disabled: "disabled",
        pageIndex: "pageIndex",
        length: "length",
        pageSize: "pageSize",
        pageSizeOptions: "pageSizeOptions",
        hidePageSize: "hidePageSize",
        showFirstLastButtons: "showFirstLastButtons",
        color: "color"
      },
      outputs: {
        page: "page"
      },
      exportAs: ["matPaginator"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 14,
      vars: 14,
      consts: [[1, "mat-paginator-outer-container"], [1, "mat-paginator-container"], ["class", "mat-paginator-page-size", 4, "ngIf"], [1, "mat-paginator-range-actions"], [1, "mat-paginator-range-label"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-previous", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["viewBox", "0 0 24 24", "focusable", "false", 1, "mat-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-next", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], [1, "mat-paginator-page-size"], [1, "mat-paginator-page-size-label"], ["class", "mat-paginator-page-size-select", 3, "color", 4, "ngIf"], ["class", "mat-paginator-page-size-value", 4, "ngIf"], [1, "mat-paginator-page-size-select", 3, "color"], [3, "value", "disabled", "aria-label", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "mat-paginator-page-size-value"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
      template: function MatPaginator_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatPaginator_div_2_Template, 5, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MatPaginator_button_6_Template, 3, 5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_7_listener() {
            return ctx.previousPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_10_listener() {
            return ctx.nextPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MatPaginator_button_13_Template, 3, 5, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hidePageSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._previousButtonsDisabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx._intl.previousPageLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._nextButtonsDisabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx._intl.nextPageLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]],
      styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;min-height:56px;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatPaginator.ctorParameters = function () {
      return [{
        type: MatPaginatorIntl
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [MAT_PAGINATOR_DEFAULT_OPTIONS]
        }]
      }];
    };

    MatPaginator.propDecorators = {
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      pageIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      length: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      pageSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      pageSizeOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      hidePageSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      showFirstLastButtons: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      page: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatPaginator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mat-paginator',
          exportAs: 'matPaginator',
          template: "<div class=\"mat-paginator-outer-container\">\n  <div class=\"mat-paginator-container\">\n    <div class=\"mat-paginator-page-size\" *ngIf=\"!hidePageSize\">\n      <div class=\"mat-paginator-page-size-label\">\n        {{_intl.itemsPerPageLabel}}\n      </div>\n\n      <mat-form-field\n        *ngIf=\"_displayedPageSizeOptions.length > 1\"\n        [color]=\"color\"\n        class=\"mat-paginator-page-size-select\">\n        <mat-select\n          [value]=\"pageSize\"\n          [disabled]=\"disabled\"\n          [aria-label]=\"_intl.itemsPerPageLabel\"\n          (selectionChange)=\"_changePageSize($event.value)\">\n          <mat-option *ngFor=\"let pageSizeOption of _displayedPageSizeOptions\" [value]=\"pageSizeOption\">\n            {{pageSizeOption}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div\n        class=\"mat-paginator-page-size-value\"\n        *ngIf=\"_displayedPageSizeOptions.length <= 1\">{{pageSize}}</div>\n    </div>\n\n    <div class=\"mat-paginator-range-actions\">\n      <div class=\"mat-paginator-range-label\">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-first\"\n              (click)=\"firstPage()\"\n              [attr.aria-label]=\"_intl.firstPageLabel\"\n              [matTooltip]=\"_intl.firstPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-previous\"\n              (click)=\"previousPage()\"\n              [attr.aria-label]=\"_intl.previousPageLabel\"\n              [matTooltip]=\"_intl.previousPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-next\"\n              (click)=\"nextPage()\"\n              [attr.aria-label]=\"_intl.nextPageLabel\"\n              [matTooltip]=\"_intl.nextPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-last\"\n              (click)=\"lastPage()\"\n              [attr.aria-label]=\"_intl.lastPageLabel\"\n              [matTooltip]=\"_intl.lastPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"/>\n        </svg>\n      </button>\n    </div>\n  </div>\n</div>\n",
          inputs: ['disabled'],
          host: {
            'class': 'mat-paginator'
          },
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;min-height:56px;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}\n"]
        }]
      }], function () {
        return [{
          type: MatPaginatorIntl
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_PAGINATOR_DEFAULT_OPTIONS]
          }]
        }];
      }, {
        page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        pageIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        length: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageSizeOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hidePageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showFirstLastButtons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/paginator/paginator-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatPaginatorModule = function MatPaginatorModule() {
      _classCallCheck(this, MatPaginatorModule);
    };

    MatPaginatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatPaginatorModule
    });
    MatPaginatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MatPaginatorModule_Factory(t) {
        return new (t || MatPaginatorModule)();
      },
      providers: [MAT_PAGINATOR_INTL_PROVIDER],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatPaginatorModule, {
        declarations: function declarations() {
          return [MatPaginator];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]];
        },
        exports: function exports() {
          return [MatPaginator];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatPaginatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"]],
          exports: [MatPaginator],
          declarations: [MatPaginator],
          providers: [MAT_PAGINATOR_INTL_PROVIDER]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/paginator/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=paginator.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js ***!
    \***********************************************************************/

  /*! exports provided: MatCell, MatCellDef, MatColumnDef, MatFooterCell, MatFooterCellDef, MatFooterRow, MatFooterRowDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule, MatTextColumn */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015TableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCell", function () {
      return MatCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCellDef", function () {
      return MatCellDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatColumnDef", function () {
      return MatColumnDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFooterCell", function () {
      return MatFooterCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFooterCellDef", function () {
      return MatFooterCellDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFooterRow", function () {
      return MatFooterRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFooterRowDef", function () {
      return MatFooterRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHeaderCell", function () {
      return MatHeaderCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHeaderCellDef", function () {
      return MatHeaderCellDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHeaderRow", function () {
      return MatHeaderRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHeaderRowDef", function () {
      return MatHeaderRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatRow", function () {
      return MatRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatRowDef", function () {
      return MatRowDef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTable", function () {
      return MatTable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTableDataSource", function () {
      return MatTableDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTableModule", function () {
      return MatTableModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTextColumn", function () {
      return MatTextColumn;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/table/table.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wrapper for the CdkTable with Material design styles.
     * @template T
     */


    var _c0 = [[["caption"]]];
    var _c1 = ["caption"];

    function MatTextColumn_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r0.justify);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
      }
    }

    function MatTextColumn_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r1.justify);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
      }
    }

    var MatTable = /*#__PURE__*/function (_angular_cdk_table__W) {
      _inherits(MatTable, _angular_cdk_table__W);

      var _super13 = _createSuper(MatTable);

      function MatTable() {
        var _this21;

        _classCallCheck(this, MatTable);

        _this21 = _super13.apply(this, arguments);
        /**
         * Overrides the sticky CSS class set by the `CdkTable`.
         */

        _this21.stickyCssClass = 'mat-table-sticky';
        return _this21;
      }

      return MatTable;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"]);

    MatTable.ɵfac = function MatTable_Factory(t) {
      return ɵMatTable_BaseFactory(t || MatTable);
    };

    MatTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatTable,
      selectors: [["mat-table"], ["table", "mat-table", ""]],
      hostAttrs: [1, "mat-table"],
      exportAs: ["matTable"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"],
        useExisting: MatTable
      }, {
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE"],
        useExisting: MatTable
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 0,
      consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["footerRowOutlet", ""]],
      template: function MatTable_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](3, 2);
        }
      },
      directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["HeaderRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["FooterRowOutlet"]],
      styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type,[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type,[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}\n"],
      encapsulation: 2
    });

    var ɵMatTable_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTable);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-table, table[mat-table]',
          exportAs: 'matTable',
          template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE_TEMPLATE"],
          host: {
            'class': 'mat-table'
          },
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"],
            useExisting: MatTable
          }, {
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE"],
            useExisting: MatTable
          }],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          // See note on CdkTable for explanation on why this uses the default change detection strategy.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
          styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type,[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type,[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}\n"]
        }]
      }], null, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/table/cell.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Cell definition for the mat-table.
     * Captures the template of a column's data row cell as well as cell-specific properties.
     */


    var MatCellDef = /*#__PURE__*/function (_angular_cdk_table__W2) {
      _inherits(MatCellDef, _angular_cdk_table__W2);

      var _super14 = _createSuper(MatCellDef);

      function MatCellDef() {
        _classCallCheck(this, MatCellDef);

        return _super14.apply(this, arguments);
      }

      return MatCellDef;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"]);

    MatCellDef.ɵfac = function MatCellDef_Factory(t) {
      return ɵMatCellDef_BaseFactory(t || MatCellDef);
    };

    MatCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCellDef,
      selectors: [["", "matCellDef", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"],
        useExisting: MatCellDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCellDef);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[matCellDef]',
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"],
            useExisting: MatCellDef
          }]
        }]
      }], null, null);
    })();
    /**
     * Header cell definition for the mat-table.
     * Captures the template of a column's header cell and as well as cell-specific properties.
     */


    var MatHeaderCellDef = /*#__PURE__*/function (_angular_cdk_table__W3) {
      _inherits(MatHeaderCellDef, _angular_cdk_table__W3);

      var _super15 = _createSuper(MatHeaderCellDef);

      function MatHeaderCellDef() {
        _classCallCheck(this, MatHeaderCellDef);

        return _super15.apply(this, arguments);
      }

      return MatHeaderCellDef;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"]);

    MatHeaderCellDef.ɵfac = function MatHeaderCellDef_Factory(t) {
      return ɵMatHeaderCellDef_BaseFactory(t || MatHeaderCellDef);
    };

    MatHeaderCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatHeaderCellDef,
      selectors: [["", "matHeaderCellDef", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"],
        useExisting: MatHeaderCellDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatHeaderCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCellDef);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[matHeaderCellDef]',
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"],
            useExisting: MatHeaderCellDef
          }]
        }]
      }], null, null);
    })();
    /**
     * Footer cell definition for the mat-table.
     * Captures the template of a column's footer cell and as well as cell-specific properties.
     */


    var MatFooterCellDef = /*#__PURE__*/function (_angular_cdk_table__W4) {
      _inherits(MatFooterCellDef, _angular_cdk_table__W4);

      var _super16 = _createSuper(MatFooterCellDef);

      function MatFooterCellDef() {
        _classCallCheck(this, MatFooterCellDef);

        return _super16.apply(this, arguments);
      }

      return MatFooterCellDef;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"]);

    MatFooterCellDef.ɵfac = function MatFooterCellDef_Factory(t) {
      return ɵMatFooterCellDef_BaseFactory(t || MatFooterCellDef);
    };

    MatFooterCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatFooterCellDef,
      selectors: [["", "matFooterCellDef", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"],
        useExisting: MatFooterCellDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatFooterCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCellDef);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[matFooterCellDef]',
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"],
            useExisting: MatFooterCellDef
          }]
        }]
      }], null, null);
    })();
    /**
     * Column definition for the mat-table.
     * Defines a set of cells available for a table column.
     */


    var MatColumnDef = /*#__PURE__*/function (_angular_cdk_table__W5) {
      _inherits(MatColumnDef, _angular_cdk_table__W5);

      var _super17 = _createSuper(MatColumnDef);

      function MatColumnDef() {
        _classCallCheck(this, MatColumnDef);

        return _super17.apply(this, arguments);
      }

      return MatColumnDef;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]);

    MatColumnDef.ɵfac = function MatColumnDef_Factory(t) {
      return ɵMatColumnDef_BaseFactory(t || MatColumnDef);
    };

    MatColumnDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatColumnDef,
      selectors: [["", "matColumnDef", ""]],
      inputs: {
        sticky: "sticky",
        name: ["matColumnDef", "name"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"],
        useExisting: MatColumnDef
      }, {
        provide: 'MAT_SORT_HEADER_COLUMN_DEF',
        useExisting: MatColumnDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    MatColumnDef.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matColumnDef']
      }]
    };

    var ɵMatColumnDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatColumnDef);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatColumnDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[matColumnDef]',
          inputs: ['sticky'],
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"],
            useExisting: MatColumnDef
          }, {
            provide: 'MAT_SORT_HEADER_COLUMN_DEF',
            useExisting: MatColumnDef
          }]
        }]
      }], null, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matColumnDef']
        }]
      });
    })();

    if (false) {}
    /**
     * Header cell template container that adds the right classes and role.
     */


    var MatHeaderCell = /*#__PURE__*/function (_angular_cdk_table__W6) {
      _inherits(MatHeaderCell, _angular_cdk_table__W6);

      var _super18 = _createSuper(MatHeaderCell);

      /**
       * @param {?} columnDef
       * @param {?} elementRef
       */
      function MatHeaderCell(columnDef, elementRef) {
        var _this22;

        _classCallCheck(this, MatHeaderCell);

        _this22 = _super18.call(this, columnDef, elementRef);
        elementRef.nativeElement.classList.add("mat-column-".concat(columnDef.cssClassFriendlyName));
        return _this22;
      }

      return MatHeaderCell;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCell"]);

    MatHeaderCell.ɵfac = function MatHeaderCell_Factory(t) {
      return new (t || MatHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    MatHeaderCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatHeaderCell,
      selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
      hostAttrs: ["role", "columnheader", 1, "mat-header-cell"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    MatHeaderCell.ctorParameters = function () {
      return [{
        type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-header-cell, th[mat-header-cell]',
          host: {
            'class': 'mat-header-cell',
            'role': 'columnheader'
          }
        }]
      }], function () {
        return [{
          type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /**
     * Footer cell template container that adds the right classes and role.
     */


    var MatFooterCell = /*#__PURE__*/function (_angular_cdk_table__W7) {
      _inherits(MatFooterCell, _angular_cdk_table__W7);

      var _super19 = _createSuper(MatFooterCell);

      /**
       * @param {?} columnDef
       * @param {?} elementRef
       */
      function MatFooterCell(columnDef, elementRef) {
        var _this23;

        _classCallCheck(this, MatFooterCell);

        _this23 = _super19.call(this, columnDef, elementRef);
        elementRef.nativeElement.classList.add("mat-column-".concat(columnDef.cssClassFriendlyName));
        return _this23;
      }

      return MatFooterCell;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCell"]);

    MatFooterCell.ɵfac = function MatFooterCell_Factory(t) {
      return new (t || MatFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    MatFooterCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatFooterCell,
      selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
      hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    MatFooterCell.ctorParameters = function () {
      return [{
        type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-footer-cell, td[mat-footer-cell]',
          host: {
            'class': 'mat-footer-cell',
            'role': 'gridcell'
          }
        }]
      }], function () {
        return [{
          type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /**
     * Cell template container that adds the right classes and role.
     */


    var MatCell = /*#__PURE__*/function (_angular_cdk_table__W8) {
      _inherits(MatCell, _angular_cdk_table__W8);

      var _super20 = _createSuper(MatCell);

      /**
       * @param {?} columnDef
       * @param {?} elementRef
       */
      function MatCell(columnDef, elementRef) {
        var _this24;

        _classCallCheck(this, MatCell);

        _this24 = _super20.call(this, columnDef, elementRef);
        elementRef.nativeElement.classList.add("mat-column-".concat(columnDef.cssClassFriendlyName));
        return _this24;
      }

      return MatCell;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCell"]);

    MatCell.ɵfac = function MatCell_Factory(t) {
      return new (t || MatCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    MatCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatCell,
      selectors: [["mat-cell"], ["td", "mat-cell", ""]],
      hostAttrs: ["role", "gridcell", 1, "mat-cell"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    MatCell.ctorParameters = function () {
      return [{
        type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-cell, td[mat-cell]',
          host: {
            'class': 'mat-cell',
            'role': 'gridcell'
          }
        }]
      }], function () {
        return [{
          type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/table/row.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Header row definition for the mat-table.
     * Captures the header row's template and other header properties such as the columns to display.
     */


    var MatHeaderRowDef = /*#__PURE__*/function (_angular_cdk_table__W9) {
      _inherits(MatHeaderRowDef, _angular_cdk_table__W9);

      var _super21 = _createSuper(MatHeaderRowDef);

      function MatHeaderRowDef() {
        _classCallCheck(this, MatHeaderRowDef);

        return _super21.apply(this, arguments);
      }

      return MatHeaderRowDef;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"]);

    MatHeaderRowDef.ɵfac = function MatHeaderRowDef_Factory(t) {
      return ɵMatHeaderRowDef_BaseFactory(t || MatHeaderRowDef);
    };

    MatHeaderRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatHeaderRowDef,
      selectors: [["", "matHeaderRowDef", ""]],
      inputs: {
        columns: ["matHeaderRowDef", "columns"],
        sticky: ["matHeaderRowDefSticky", "sticky"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"],
        useExisting: MatHeaderRowDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatHeaderRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRowDef);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[matHeaderRowDef]',
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"],
            useExisting: MatHeaderRowDef
          }],
          inputs: ['columns: matHeaderRowDef', 'sticky: matHeaderRowDefSticky']
        }]
      }], null, null);
    })();

    if (false) {}
    /**
     * Footer row definition for the mat-table.
     * Captures the footer row's template and other footer properties such as the columns to display.
     */


    var MatFooterRowDef = /*#__PURE__*/function (_angular_cdk_table__W10) {
      _inherits(MatFooterRowDef, _angular_cdk_table__W10);

      var _super22 = _createSuper(MatFooterRowDef);

      function MatFooterRowDef() {
        _classCallCheck(this, MatFooterRowDef);

        return _super22.apply(this, arguments);
      }

      return MatFooterRowDef;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"]);

    MatFooterRowDef.ɵfac = function MatFooterRowDef_Factory(t) {
      return ɵMatFooterRowDef_BaseFactory(t || MatFooterRowDef);
    };

    MatFooterRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatFooterRowDef,
      selectors: [["", "matFooterRowDef", ""]],
      inputs: {
        columns: ["matFooterRowDef", "columns"],
        sticky: ["matFooterRowDefSticky", "sticky"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"],
        useExisting: MatFooterRowDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatFooterRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRowDef);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[matFooterRowDef]',
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"],
            useExisting: MatFooterRowDef
          }],
          inputs: ['columns: matFooterRowDef', 'sticky: matFooterRowDefSticky']
        }]
      }], null, null);
    })();

    if (false) {}
    /**
     * Data row definition for the mat-table.
     * Captures the data row's template and other properties such as the columns to display and
     * a when predicate that describes when this row should be used.
     * @template T
     */


    var MatRowDef = /*#__PURE__*/function (_angular_cdk_table__W11) {
      _inherits(MatRowDef, _angular_cdk_table__W11);

      var _super23 = _createSuper(MatRowDef);

      function MatRowDef() {
        _classCallCheck(this, MatRowDef);

        return _super23.apply(this, arguments);
      }

      return MatRowDef;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"]);

    MatRowDef.ɵfac = function MatRowDef_Factory(t) {
      return ɵMatRowDef_BaseFactory(t || MatRowDef);
    };

    MatRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatRowDef,
      selectors: [["", "matRowDef", ""]],
      inputs: {
        columns: ["matRowDefColumns", "columns"],
        when: ["matRowDefWhen", "when"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"],
        useExisting: MatRowDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRowDef);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[matRowDef]',
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"],
            useExisting: MatRowDef
          }],
          inputs: ['columns: matRowDefColumns', 'when: matRowDefWhen']
        }]
      }], null, null);
    })();
    /**
     * Header template container that contains the cell outlet. Adds the right class and role.
     */


    var MatHeaderRow = /*#__PURE__*/function (_angular_cdk_table__W12) {
      _inherits(MatHeaderRow, _angular_cdk_table__W12);

      var _super24 = _createSuper(MatHeaderRow);

      function MatHeaderRow() {
        _classCallCheck(this, MatHeaderRow);

        return _super24.apply(this, arguments);
      }

      return MatHeaderRow;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"]);

    MatHeaderRow.ɵfac = function MatHeaderRow_Factory(t) {
      return ɵMatHeaderRow_BaseFactory(t || MatHeaderRow);
    };

    MatHeaderRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatHeaderRow,
      selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
      hostAttrs: ["role", "row", 1, "mat-header-row"],
      exportAs: ["matHeaderRow"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"],
        useExisting: MatHeaderRow
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function MatHeaderRow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
        }
      },
      directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]],
      encapsulation: 2
    });

    var ɵMatHeaderRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRow);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-header-row, tr[mat-header-row]',
          template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
          host: {
            'class': 'mat-header-row',
            'role': 'row'
          },
          // See note on CdkTable for explanation on why this uses the default change detection strategy.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          exportAs: 'matHeaderRow',
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"],
            useExisting: MatHeaderRow
          }]
        }]
      }], null, null);
    })();
    /**
     * Footer template container that contains the cell outlet. Adds the right class and role.
     */


    var MatFooterRow = /*#__PURE__*/function (_angular_cdk_table__W13) {
      _inherits(MatFooterRow, _angular_cdk_table__W13);

      var _super25 = _createSuper(MatFooterRow);

      function MatFooterRow() {
        _classCallCheck(this, MatFooterRow);

        return _super25.apply(this, arguments);
      }

      return MatFooterRow;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"]);

    MatFooterRow.ɵfac = function MatFooterRow_Factory(t) {
      return ɵMatFooterRow_BaseFactory(t || MatFooterRow);
    };

    MatFooterRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatFooterRow,
      selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
      hostAttrs: ["role", "row", 1, "mat-footer-row"],
      exportAs: ["matFooterRow"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"],
        useExisting: MatFooterRow
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function MatFooterRow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
        }
      },
      directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]],
      encapsulation: 2
    });

    var ɵMatFooterRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRow);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-footer-row, tr[mat-footer-row]',
          template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
          host: {
            'class': 'mat-footer-row',
            'role': 'row'
          },
          // See note on CdkTable for explanation on why this uses the default change detection strategy.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          exportAs: 'matFooterRow',
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"],
            useExisting: MatFooterRow
          }]
        }]
      }], null, null);
    })();
    /**
     * Data row template container that contains the cell outlet. Adds the right class and role.
     */


    var MatRow = /*#__PURE__*/function (_angular_cdk_table__W14) {
      _inherits(MatRow, _angular_cdk_table__W14);

      var _super26 = _createSuper(MatRow);

      function MatRow() {
        _classCallCheck(this, MatRow);

        return _super26.apply(this, arguments);
      }

      return MatRow;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"]);

    MatRow.ɵfac = function MatRow_Factory(t) {
      return ɵMatRow_BaseFactory(t || MatRow);
    };

    MatRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatRow,
      selectors: [["mat-row"], ["tr", "mat-row", ""]],
      hostAttrs: ["role", "row", 1, "mat-row"],
      exportAs: ["matRow"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"],
        useExisting: MatRow
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function MatRow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
        }
      },
      directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]],
      encapsulation: 2
    });

    var ɵMatRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRow);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-row, tr[mat-row]',
          template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
          host: {
            'class': 'mat-row',
            'role': 'row'
          },
          // See note on CdkTable for explanation on why this uses the default change detection strategy.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          exportAs: 'matRow',
          providers: [{
            provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"],
            useExisting: MatRow
          }]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/table/text-column.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Column that simply shows text content for the header and row cells. Assumes that the table
     * is using the native table implementation (`<table>`).
     *
     * By default, the name of this column will be the header text and data property accessor.
     * The header text can be overridden with the `headerText` input. Cell values can be overridden with
     * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
     * input.
     * @template T
     */


    var MatTextColumn = /*#__PURE__*/function (_angular_cdk_table__W15) {
      _inherits(MatTextColumn, _angular_cdk_table__W15);

      var _super27 = _createSuper(MatTextColumn);

      function MatTextColumn() {
        _classCallCheck(this, MatTextColumn);

        return _super27.apply(this, arguments);
      }

      return MatTextColumn;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTextColumn"]);

    MatTextColumn.ɵfac = function MatTextColumn_Factory(t) {
      return ɵMatTextColumn_BaseFactory(t || MatTextColumn);
    };

    MatTextColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatTextColumn,
      selectors: [["mat-text-column"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 0,
      consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
      template: function MatTextColumn_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatTextColumn_th_1_Template, 2, 3, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTextColumn_td_2_Template, 2, 3, "td", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      },
      directives: [MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderCell, MatCell],
      encapsulation: 2
    });

    var ɵMatTextColumn_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTextColumn);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTextColumn, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-text-column',
          template: "\n    <ng-container matColumnDef>\n      <th mat-header-cell *matHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td mat-cell *matCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          // Change detection is intentionally not set to OnPush. This component's template will be provided
          // to the table to be inserted into its view. This is problematic when change detection runs since
          // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
          // mean's the template in the table's view will not have the updated value (and in fact will cause
          // an ExpressionChangedAfterItHasBeenCheckedError).
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/table/table-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var EXPORTED_DECLARATIONS = [// Table
    MatTable, // Template defs
    MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, // Cell directives
    MatHeaderCell, MatCell, MatFooterCell, // Row directives
    MatHeaderRow, MatRow, MatFooterRow, MatTextColumn];

    var MatTableModule = function MatTableModule() {
      _classCallCheck(this, MatTableModule);
    };

    MatTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatTableModule
    });
    MatTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatTableModule_Factory(t) {
        return new (t || MatTableModule)();
      },
      imports: [[_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatTableModule, {
        declarations: function declarations() {
          return [MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatTextColumn];
        },
        imports: function imports() {
          return [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        },
        exports: function exports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatTextColumn];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], EXPORTED_DECLARATIONS],
          declarations: EXPORTED_DECLARATIONS
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/table/table-data-source.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
     * flaky browser support and the value not being defined in Closure's typings.
     * @type {?}
     */


    var MAX_SAFE_INTEGER = 9007199254740991;
    /**
     * Data source that accepts a client-side data array and includes native support of filtering,
     * sorting (using MatSort), and pagination (using MatPaginator).
     *
     * Allows for sort customization by overriding sortingDataAccessor, which defines how data
     * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
     * which defines how row data is converted to a string for filter matching.
     *
     * **Note:** This class is meant to be a simple data source to help you get started. As such
     * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
     * interactions. If your app needs to support more advanced use cases, consider implementing your
     * own `DataSource`.
     * @template T
     */

    var MatTableDataSource = /*#__PURE__*/function (_angular_cdk_table__W16) {
      _inherits(MatTableDataSource, _angular_cdk_table__W16);

      var _super28 = _createSuper(MatTableDataSource);

      /**
       * @param {?=} initialData
       */
      function MatTableDataSource() {
        var _this25;

        var initialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, MatTableDataSource);

        _this25 = _super28.call(this);
        /**
         * Stream emitting render data to the table (depends on ordered data changes).
         */

        _this25._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        /**
         * Stream that emits when a new filter string is set on the data source.
         */

        _this25._filter = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        /**
         * Used to react to internal changes of the paginator that are made by the data source itself.
         */

        _this25._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Subscription to the changes that should trigger an update to the table's rendered rows, such
         * as filtering, sorting, pagination, or base data changes.
         */

        _this25._renderChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Data accessor function that is used for accessing data properties for sorting through
         * the default sortData function.
         * This default function assumes that the sort header IDs (which defaults to the column name)
         * matches the data's properties (e.g. column Xyz represents data['Xyz']).
         * May be set to a custom function for different behavior.
         * @param data Data object that is being accessed.
         * @param sortHeaderId The name of the column that represents the data.
         */

        _this25.sortingDataAccessor =
        /**
        * @param {?} data
        * @param {?} sortHeaderId
        * @return {?}
        */
        function (data, sortHeaderId) {
          /** @type {?} */
          var value =
          /** @type {?} */
          data[sortHeaderId];

          if (Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["_isNumberValue"])(value)) {
            /** @type {?} */
            var numberValue = Number(value); // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
            // leave them as strings. For more info: https://goo.gl/y5vbSg

            return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
          }

          return value;
        };
        /**
         * Gets a sorted copy of the data array based on the state of the MatSort. Called
         * after changes are made to the filtered data or when sort changes are emitted from MatSort.
         * By default, the function retrieves the active sort and its direction and compares data
         * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
         * of data ordering.
         * @param data The array of data that should be sorted.
         * @param sort The connected MatSort that holds the current sort state.
         */


        _this25.sortData =
        /**
        * @param {?} data
        * @param {?} sort
        * @return {?}
        */
        function (data, sort) {
          /** @type {?} */
          var active = sort.active;
          /** @type {?} */

          var direction = sort.direction;

          if (!active || direction == '') {
            return data;
          }

          return data.sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            /** @type {?} */
            var valueA = _this25.sortingDataAccessor(a, active);
            /** @type {?} */


            var valueB = _this25.sortingDataAccessor(b, active); // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
            // one value exists while the other doesn't. In this case, existing value should come last.
            // This avoids inconsistent results when comparing values to undefined/null.
            // If neither value exists, return 0 (equal).

            /** @type {?} */


            var comparatorResult = 0;

            if (valueA != null && valueB != null) {
              // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
              if (valueA > valueB) {
                comparatorResult = 1;
              } else if (valueA < valueB) {
                comparatorResult = -1;
              }
            } else if (valueA != null) {
              comparatorResult = 1;
            } else if (valueB != null) {
              comparatorResult = -1;
            }

            return comparatorResult * (direction == 'asc' ? 1 : -1);
          });
        };
        /**
         * Checks if a data object matches the data source's filter string. By default, each data object
         * is converted to a string of its properties and returns true if the filter has
         * at least one occurrence in that string. By default, the filter string has its whitespace
         * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
         * filter matching.
         * @param data Data object used to check against the filter.
         * @param filter Filter string that has been set on the data source.
         * @return Whether the filter matches against the data
         */


        _this25.filterPredicate =
        /**
        * @param {?} data
        * @param {?} filter
        * @return {?}
        */
        function (data, filter) {
          // Transform the data into a lowercase string of all property values.

          /** @type {?} */
          var dataStr = Object.keys(data).reduce(
          /**
          * @param {?} currentTerm
          * @param {?} key
          * @return {?}
          */
          function (currentTerm, key) {
            // Use an obscure Unicode character to delimit the words in the concatenated string.
            // This avoids matches where the values of two columns combined will match the user's query
            // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
            // that has a very low chance of being typed in by somebody in a text field. This one in
            // particular is "White up-pointing triangle with dot" from
            // https://en.wikipedia.org/wiki/List_of_Unicode_characters
            return currentTerm +
            /** @type {?} */
            data[key] + '◬';
          }, '').toLowerCase(); // Transform the filter by converting it to lowercase and removing whitespace.

          /** @type {?} */

          var transformedFilter = filter.trim().toLowerCase();
          return dataStr.indexOf(transformedFilter) != -1;
        };

        _this25._data = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](initialData);

        _this25._updateChangeSubscription();

        return _this25;
      }
      /**
       * Array of data that should be rendered by the table, where each object represents one row.
       * @return {?}
       */


      _createClass(MatTableDataSource, [{
        key: "_updateChangeSubscription",

        /**
         * Subscribe to changes that should trigger an update to the table's rendered rows. When the
         * changes occur, process the current state of the filter, sort, and pagination along with
         * the provided base data and send it to the table for rendering.
         * @return {?}
         */
        value: function _updateChangeSubscription() {
          var _this26 = this;

          // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
          // The events should emit whenever the component emits a change or initializes, or if no
          // component is provided, a stream with just a null event should be provided.
          // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
          // pipeline can progress to the next step. Note that the value from these streams are not used,
          // they purely act as a signal to progress in the pipeline.

          /** @type {?} */
          var sortChange = this._sort ?
          /** @type {?} */
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this._sort.sortChange, this._sort.initialized) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
          /** @type {?} */

          var pageChange = this._paginator ?
          /** @type {?} */
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
          /** @type {?} */

          var dataStream = this._data; // Watch for base data or filter changes to provide a filtered set of data.

          /** @type {?} */

          var filteredData = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([dataStream, this._filter]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref) {
            var _ref2 = _slicedToArray(_ref, 1),
                data = _ref2[0];

            return _this26._filterData(data);
          })); // Watch for filtered data or sort changes to provide an ordered set of data.

          /** @type {?} */

          var orderedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([filteredData, sortChange]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 1),
                data = _ref4[0];

            return _this26._orderData(data);
          })); // Watch for ordered data or page changes to provide a paged set of data.

          /** @type {?} */

          var paginatedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([orderedData, pageChange]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 1),
                data = _ref6[0];

            return _this26._pageData(data);
          })); // Watched for paged data changes and send the result to the table to render.

          this._renderChangesSubscription.unsubscribe();

          this._renderChangesSubscription = paginatedData.subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            return _this26._renderData.next(data);
          });
        }
        /**
         * Returns a filtered data array where each filter object contains the filter string within
         * the result of the filterTermAccessor function. If no filter is set, returns the data array
         * as provided.
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "_filterData",
        value: function _filterData(data) {
          var _this27 = this;

          // If there is a filter string, filter out data that does not contain it.
          // Each data object is converted to a string using the function defined by filterTermAccessor.
          // May be overridden for customization.
          this.filteredData = !this.filter ? data : data.filter(
          /**
          * @param {?} obj
          * @return {?}
          */
          function (obj) {
            return _this27.filterPredicate(obj, _this27.filter);
          });

          if (this.paginator) {
            this._updatePaginator(this.filteredData.length);
          }

          return this.filteredData;
        }
        /**
         * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
         * data array as provided. Uses the default data accessor for data lookup, unless a
         * sortDataAccessor function is defined.
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "_orderData",
        value: function _orderData(data) {
          // If there is no active sort or direction, return the data without trying to sort.
          if (!this.sort) {
            return data;
          }

          return this.sortData(data.slice(), this.sort);
        }
        /**
         * Returns a paged slice of the provided data array according to the provided MatPaginator's page
         * index and length. If there is no paginator provided, returns the data array as provided.
         * @param {?} data
         * @return {?}
         */

      }, {
        key: "_pageData",
        value: function _pageData(data) {
          if (!this.paginator) {
            return data;
          }
          /** @type {?} */


          var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
          return data.slice(startIndex, startIndex + this.paginator.pageSize);
        }
        /**
         * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
         * index does not exceed the paginator's last page. Values are changed in a resolved promise to
         * guard against making property changes within a round of change detection.
         * @param {?} filteredDataLength
         * @return {?}
         */

      }, {
        key: "_updatePaginator",
        value: function _updatePaginator(filteredDataLength) {
          var _this28 = this;

          Promise.resolve().then(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var paginator = _this28.paginator;

            if (!paginator) {
              return;
            }

            paginator.length = filteredDataLength; // If the page index is set beyond the page, reduce it to the last page.

            if (paginator.pageIndex > 0) {
              /** @type {?} */
              var lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
              /** @type {?} */

              var newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);

              if (newPageIndex !== paginator.pageIndex) {
                paginator.pageIndex = newPageIndex; // Since the paginator only emits after user-generated changes,
                // we need our own stream so we know to should re-render the data.

                _this28._internalPageChanges.next();
              }
            }
          });
        }
        /**
         * Used by the MatTable. Called when it connects to the data source.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "connect",
        value: function connect() {
          return this._renderData;
        }
        /**
         * Used by the MatTable. Called when it is destroyed. No-op.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "disconnect",
        value: function disconnect() {}
      }, {
        key: "data",
        get: function get() {
          return this._data.value;
        }
        /**
         * @param {?} data
         * @return {?}
         */
        ,
        set: function set(data) {
          this._data.next(data);
        }
        /**
         * Filter term that should be used to filter out objects from the data array. To override how
         * data objects match to this filter string, provide a custom function for filterPredicate.
         * @return {?}
         */

      }, {
        key: "filter",
        get: function get() {
          return this._filter.value;
        }
        /**
         * @param {?} filter
         * @return {?}
         */
        ,
        set: function set(filter) {
          this._filter.next(filter);
        }
        /**
         * Instance of the MatSort directive used by the table to control its sorting. Sort changes
         * emitted by the MatSort will trigger an update to the table's rendered data.
         * @return {?}
         */

      }, {
        key: "sort",
        get: function get() {
          return this._sort;
        }
        /**
         * @param {?} sort
         * @return {?}
         */
        ,
        set: function set(sort) {
          this._sort = sort;

          this._updateChangeSubscription();
        }
        /**
         * Instance of the MatPaginator component used by the table to control what page of the data is
         * displayed. Page changes emitted by the MatPaginator will trigger an update to the
         * table's rendered data.
         *
         * Note that the data source uses the paginator's properties to calculate which page of data
         * should be displayed. If the paginator receives its properties as template inputs,
         * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
         * initialized before assigning it to this data source.
         * @return {?}
         */

      }, {
        key: "paginator",
        get: function get() {
          return this._paginator;
        }
        /**
         * @param {?} paginator
         * @return {?}
         */
        ,
        set: function set(paginator) {
          this._paginator = paginator;

          this._updateChangeSubscription();
        }
      }]);

      return MatTableDataSource;
    }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataSource"]);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/table/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=table.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js ***!
    \*************************************************************************/

  /*! exports provided: MAT_TOOLTIP_DEFAULT_OPTIONS, MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MatTooltip, MatTooltipModule, SCROLL_THROTTLE_MS, TOOLTIP_PANEL_CLASS, TooltipComponent, getMatTooltipInvalidPositionError, matTooltipAnimations */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015TooltipJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS", function () {
      return MAT_TOOLTIP_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY", function () {
      return MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY", function () {
      return MAT_TOOLTIP_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY", function () {
      return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
      return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTooltip", function () {
      return MatTooltip;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTooltipModule", function () {
      return MatTooltipModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SCROLL_THROTTLE_MS", function () {
      return SCROLL_THROTTLE_MS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TOOLTIP_PANEL_CLASS", function () {
      return TOOLTIP_PANEL_CLASS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipComponent", function () {
      return TooltipComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatTooltipInvalidPositionError", function () {
      return getMatTooltipInvalidPositionError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matTooltipAnimations", function () {
      return matTooltipAnimations;
    });
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tooltip/tooltip-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by MatTooltip.
     * \@docs-private
     * @type {?}
     */


    var matTooltipAnimations = {
      /**
       * Animation that transitions a tooltip in and out.
       */
      tooltipState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('state', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('initial, void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 0,
        transform: 'scale(0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        transform: 'scale(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('200ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 0,
        transform: 'scale(0)',
        offset: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 0.5,
        transform: 'scale(0.99)',
        offset: 0.5
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 1,
        transform: 'scale(1)',
        offset: 1
      })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('100ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 0
      })))])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tooltip/tooltip.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Time in ms to throttle repositioning after scroll events.
     * @type {?}
     */

    var SCROLL_THROTTLE_MS = 20;
    /**
     * CSS class that will be attached to the overlay panel.
     * @type {?}
     */

    var TOOLTIP_PANEL_CLASS = 'mat-tooltip-panel';
    /**
     * Options used to bind passive event listeners.
     * @type {?}
     */

    var passiveListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["normalizePassiveListenerOptions"])({
      passive: true
    });
    /**
     * Time between the user putting the pointer on a tooltip
     * trigger and the long press event being fired.
     * @type {?}
     */

    var LONGPRESS_DELAY = 500;
    /**
     * Creates an error to be thrown if the user supplied an invalid tooltip position.
     * \@docs-private
     * @param {?} position
     * @return {?}
     */

    function getMatTooltipInvalidPositionError(position) {
      return Error("Tooltip position \"".concat(position, "\" is invalid."));
    }
    /**
     * Injection token that determines the scroll handling while a tooltip is visible.
     * @type {?}
     */


    var MAT_TOOLTIP_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-tooltip-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition({
            scrollThrottle: SCROLL_THROTTLE_MS
          });
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
      provide: MAT_TOOLTIP_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
      useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
    };
    /**
     * Default `matTooltip` options that can be overridden.
     * @record
     */

    function MatTooltipDefaultOptions() {}

    if (false) {}
    /**
     * Injection token to be used to override the default options for `matTooltip`.
     * @type {?}
     */


    var MAT_TOOLTIP_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-tooltip-default-options', {
      providedIn: 'root',
      factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
      return {
        showDelay: 0,
        hideDelay: 0,
        touchendHideDelay: 1500
      };
    }
    /**
     * Directive that attaches a material design tooltip to the host element. Animates the showing and
     * hiding of a tooltip provided position (defaults to below the element).
     *
     * https://material.io/design/components/tooltips.html
     */


    var MatTooltip = /*#__PURE__*/function () {
      /**
       * @param {?} _overlay
       * @param {?} _elementRef
       * @param {?} _scrollDispatcher
       * @param {?} _viewContainerRef
       * @param {?} _ngZone
       * @param {?} _platform
       * @param {?} _ariaDescriber
       * @param {?} _focusMonitor
       * @param {?} scrollStrategy
       * @param {?} _dir
       * @param {?} _defaultOptions
       * @param {?=} _hammerLoader
       */
      function MatTooltip(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, _platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions,
      /**
       * @deprecated _hammerLoader parameter to be removed.
       * @breaking-change 9.0.0
       */
      // Note that we need to give Angular something to inject here so it doesn't throw.
      _hammerLoader) {
        var _this29 = this;

        _classCallCheck(this, MatTooltip);

        this._overlay = _overlay;
        this._elementRef = _elementRef;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewContainerRef = _viewContainerRef;
        this._ngZone = _ngZone;
        this._platform = _platform;
        this._ariaDescriber = _ariaDescriber;
        this._focusMonitor = _focusMonitor;
        this._dir = _dir;
        this._defaultOptions = _defaultOptions;
        this._position = 'below';
        this._disabled = false;
        /**
         * The default delay in ms before showing the tooltip after show is called
         */

        this.showDelay = this._defaultOptions.showDelay;
        /**
         * The default delay in ms before hiding the tooltip after hide is called
         */

        this.hideDelay = this._defaultOptions.hideDelay;
        /**
         * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
         * uses a long press gesture to show and hide, however it can conflict with the native browser
         * gestures. To work around the conflict, Angular Material disables native gestures on the
         * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
         * elements). The different values for this option configure the touch event handling as follows:
         * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
         *   browser gestures on particular elements. In particular, it allows text selection on inputs
         *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
         * - `on` - Enables touch gestures for all elements and disables native
         *   browser gestures with no exceptions.
         * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
         *   showing on touch devices.
         */

        this.touchGestures = 'auto';
        this._message = '';
        /**
         * Manually-bound passive event listeners.
         */

        this._passiveListeners = new Map();
        /**
         * Emits when the component is destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * Handles the keydown events on the host element.
         * Needs to be an arrow function so that we can use it in addEventListener.
         */

        this._handleKeydown =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (_this29._isTooltipVisible() && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event)) {
            event.preventDefault();
            event.stopPropagation();

            _this29._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return _this29.hide(0);
            });
          }
        };

        this._scrollStrategy = scrollStrategy;

        if (_defaultOptions) {
          if (_defaultOptions.position) {
            this.position = _defaultOptions.position;
          }

          if (_defaultOptions.touchGestures) {
            this.touchGestures = _defaultOptions.touchGestures;
          }
        }

        _focusMonitor.monitor(_elementRef).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(
        /**
        * @param {?} origin
        * @return {?}
        */
        function (origin) {
          // Note that the focus monitor runs outside the Angular zone.
          if (!origin) {
            _ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return _this29.hide(0);
            });
          } else if (origin === 'keyboard') {
            _ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return _this29.show();
            });
          }
        });

        _ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          _elementRef.nativeElement.addEventListener('keydown', _this29._handleKeydown);
        });
      }
      /**
       * Allows the user to define the position of the tooltip relative to the parent element
       * @return {?}
       */


      _createClass(MatTooltip, [{
        key: "ngOnInit",

        /**
         * Setup styling-specific things
         * @return {?}
         */
        value: function ngOnInit() {
          // This needs to happen in `ngOnInit` so the initial values for all inputs have been set.
          this._setupPointerEvents();
        }
        /**
         * Dispose the tooltip when destroyed.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var nativeElement = this._elementRef.nativeElement;
          clearTimeout(this._touchstartTimeout);

          if (this._overlayRef) {
            this._overlayRef.dispose();

            this._tooltipInstance = null;
          } // Clean up the event listeners set in the constructor


          nativeElement.removeEventListener('keydown', this._handleKeydown);

          this._passiveListeners.forEach(
          /**
          * @param {?} listener
          * @param {?} event
          * @return {?}
          */
          function (listener, event) {
            nativeElement.removeEventListener(event, listener, passiveListenerOptions);
          });

          this._passiveListeners.clear();

          this._destroyed.next();

          this._destroyed.complete();

          this._ariaDescriber.removeDescription(nativeElement, this.message);

          this._focusMonitor.stopMonitoring(nativeElement);
        }
        /**
         * Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input
         * @param {?=} delay
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          var _this30 = this;

          var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.showDelay;

          if (this.disabled || !this.message || this._isTooltipVisible() && !
          /** @type {?} */
          this._tooltipInstance._showTimeoutId && !
          /** @type {?} */
          this._tooltipInstance._hideTimeoutId) {
            return;
          }
          /** @type {?} */


          var overlayRef = this._createOverlay();

          this._detach();

          this._portal = this._portal || new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["ComponentPortal"](TooltipComponent, this._viewContainerRef);
          this._tooltipInstance = overlayRef.attach(this._portal).instance;

          this._tooltipInstance.afterHidden().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this30._detach();
          });

          this._setTooltipClass(this._tooltipClass);

          this._updateTooltipMessage();

          /** @type {?} */
          this._tooltipInstance.show(delay);
        }
        /**
         * Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input
         * @param {?=} delay
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.hideDelay;

          if (this._tooltipInstance) {
            this._tooltipInstance.hide(delay);
          }
        }
        /**
         * Shows/hides the tooltip
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          this._isTooltipVisible() ? this.hide() : this.show();
        }
        /**
         * Returns true if the tooltip is currently visible to the user
         * @return {?}
         */

      }, {
        key: "_isTooltipVisible",
        value: function _isTooltipVisible() {
          return !!this._tooltipInstance && this._tooltipInstance.isVisible();
        }
        /**
         * Create the overlay config and position strategy
         * @private
         * @return {?}
         */

      }, {
        key: "_createOverlay",
        value: function _createOverlay() {
          var _this31 = this;

          if (this._overlayRef) {
            return this._overlayRef;
          }
          /** @type {?} */


          var scrollableAncestors = this._scrollDispatcher.getAncestorScrollContainers(this._elementRef); // Create connected position strategy that listens for scroll events to reposition.

          /** @type {?} */


          var strategy = this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn('.mat-tooltip').withFlexibleDimensions(false).withViewportMargin(8).withScrollableContainers(scrollableAncestors);

          strategy.positionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @param {?} change
          * @return {?}
          */
          function (change) {
            if (_this31._tooltipInstance) {
              if (change.scrollableViewProperties.isOverlayClipped && _this31._tooltipInstance.isVisible()) {
                // After position changes occur and the overlay is clipped by
                // a parent scrollable then close the tooltip.
                _this31._ngZone.run(
                /**
                * @return {?}
                */
                function () {
                  return _this31.hide(0);
                });
              }
            }
          });
          this._overlayRef = this._overlay.create({
            direction: this._dir,
            positionStrategy: strategy,
            panelClass: TOOLTIP_PANEL_CLASS,
            scrollStrategy: this._scrollStrategy()
          });

          this._updatePosition();

          this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this31._detach();
          });

          return this._overlayRef;
        }
        /**
         * Detaches the currently-attached tooltip.
         * @private
         * @return {?}
         */

      }, {
        key: "_detach",
        value: function _detach() {
          if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
          }

          this._tooltipInstance = null;
        }
        /**
         * Updates the position of the current tooltip.
         * @private
         * @return {?}
         */

      }, {
        key: "_updatePosition",
        value: function _updatePosition() {
          /** @type {?} */
          var position =
          /** @type {?} */

          /** @type {?} */
          this._overlayRef.getConfig().positionStrategy;
          /** @type {?} */


          var origin = this._getOrigin();
          /** @type {?} */


          var overlay = this._getOverlayPosition();

          position.withPositions([Object.assign(Object.assign({}, origin.main), overlay.main), Object.assign(Object.assign({}, origin.fallback), overlay.fallback)]);
        }
        /**
         * Returns the origin position and a fallback position based on the user's position preference.
         * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
         * @return {?}
         */

      }, {
        key: "_getOrigin",
        value: function _getOrigin() {
          /** @type {?} */
          var isLtr = !this._dir || this._dir.value == 'ltr';
          /** @type {?} */

          var position = this.position;
          /** @type {?} */

          var originPosition;

          if (position == 'above' || position == 'below') {
            originPosition = {
              originX: 'center',
              originY: position == 'above' ? 'top' : 'bottom'
            };
          } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
            originPosition = {
              originX: 'start',
              originY: 'center'
            };
          } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
            originPosition = {
              originX: 'end',
              originY: 'center'
            };
          } else {
            throw getMatTooltipInvalidPositionError(position);
          }

          var _this$_invertPosition = this._invertPosition(originPosition.originX, originPosition.originY),
              x = _this$_invertPosition.x,
              y = _this$_invertPosition.y;

          return {
            main: originPosition,
            fallback: {
              originX: x,
              originY: y
            }
          };
        }
        /**
         * Returns the overlay position and a fallback position based on the user's preference
         * @return {?}
         */

      }, {
        key: "_getOverlayPosition",
        value: function _getOverlayPosition() {
          /** @type {?} */
          var isLtr = !this._dir || this._dir.value == 'ltr';
          /** @type {?} */

          var position = this.position;
          /** @type {?} */

          var overlayPosition;

          if (position == 'above') {
            overlayPosition = {
              overlayX: 'center',
              overlayY: 'bottom'
            };
          } else if (position == 'below') {
            overlayPosition = {
              overlayX: 'center',
              overlayY: 'top'
            };
          } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
            overlayPosition = {
              overlayX: 'end',
              overlayY: 'center'
            };
          } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
            overlayPosition = {
              overlayX: 'start',
              overlayY: 'center'
            };
          } else {
            throw getMatTooltipInvalidPositionError(position);
          }

          var _this$_invertPosition2 = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY),
              x = _this$_invertPosition2.x,
              y = _this$_invertPosition2.y;

          return {
            main: overlayPosition,
            fallback: {
              overlayX: x,
              overlayY: y
            }
          };
        }
        /**
         * Updates the tooltip message and repositions the overlay according to the new message length
         * @private
         * @return {?}
         */

      }, {
        key: "_updateTooltipMessage",
        value: function _updateTooltipMessage() {
          var _this32 = this;

          // Must wait for the message to be painted to the tooltip so that the overlay can properly
          // calculate the correct positioning based on the size of the text.
          if (this._tooltipInstance) {
            this._tooltipInstance.message = this.message;

            this._tooltipInstance._markForCheck();

            this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @return {?}
            */
            function () {
              if (_this32._tooltipInstance) {
                /** @type {?} */
                _this32._overlayRef.updatePosition();
              }
            });
          }
        }
        /**
         * Updates the tooltip class
         * @private
         * @param {?} tooltipClass
         * @return {?}
         */

      }, {
        key: "_setTooltipClass",
        value: function _setTooltipClass(tooltipClass) {
          if (this._tooltipInstance) {
            this._tooltipInstance.tooltipClass = tooltipClass;

            this._tooltipInstance._markForCheck();
          }
        }
        /**
         * Inverts an overlay position.
         * @private
         * @param {?} x
         * @param {?} y
         * @return {?}
         */

      }, {
        key: "_invertPosition",
        value: function _invertPosition(x, y) {
          if (this.position === 'above' || this.position === 'below') {
            if (y === 'top') {
              y = 'bottom';
            } else if (y === 'bottom') {
              y = 'top';
            }
          } else {
            if (x === 'end') {
              x = 'start';
            } else if (x === 'start') {
              x = 'end';
            }
          }

          return {
            x: x,
            y: y
          };
        }
        /**
         * Binds the pointer events to the tooltip trigger.
         * @private
         * @return {?}
         */

      }, {
        key: "_setupPointerEvents",
        value: function _setupPointerEvents() {
          var _this33 = this;

          // The mouse events shouldn't be bound on mobile devices, because they can prevent the
          // first tap from firing its click event or can cause the tooltip to open for clicks.
          if (!this._platform.IOS && !this._platform.ANDROID) {
            this._passiveListeners.set('mouseenter',
            /**
            * @return {?}
            */
            function () {
              return _this33.show();
            }).set('mouseleave',
            /**
            * @return {?}
            */
            function () {
              return _this33.hide();
            });
          } else if (this.touchGestures !== 'off') {
            this._disableNativeGesturesIfNecessary();
            /** @type {?} */


            var touchendListener =
            /**
            * @return {?}
            */
            function touchendListener() {
              clearTimeout(_this33._touchstartTimeout);

              _this33.hide(_this33._defaultOptions.touchendHideDelay);
            };

            this._passiveListeners.set('touchend', touchendListener).set('touchcancel', touchendListener).set('touchstart',
            /**
            * @return {?}
            */
            function () {
              // Note that it's important that we don't `preventDefault` here,
              // because it can prevent click events from firing on the element.
              clearTimeout(_this33._touchstartTimeout);
              _this33._touchstartTimeout = setTimeout(
              /**
              * @return {?}
              */
              function () {
                return _this33.show();
              }, LONGPRESS_DELAY);
            });
          }

          this._passiveListeners.forEach(
          /**
          * @param {?} listener
          * @param {?} event
          * @return {?}
          */
          function (listener, event) {
            _this33._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
          });
        }
        /**
         * Disables the native browser gestures, based on how the tooltip has been configured.
         * @private
         * @return {?}
         */

      }, {
        key: "_disableNativeGesturesIfNecessary",
        value: function _disableNativeGesturesIfNecessary() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;
          /** @type {?} */

          var style = element.style;
          /** @type {?} */

          var gestures = this.touchGestures;

          if (gestures !== 'off') {
            // If gestures are set to `auto`, we don't disable text selection on inputs and
            // textareas, because it prevents the user from typing into them on iOS Safari.
            if (gestures === 'on' || element.nodeName !== 'INPUT' && element.nodeName !== 'TEXTAREA') {
              style.userSelect = style.msUserSelect = style.webkitUserSelect =
              /** @type {?} */
              style.MozUserSelect = 'none';
            } // If we have `auto` gestures and the element uses native HTML dragging,
            // we don't set `-webkit-user-drag` because it prevents the native behavior.


            if (gestures === 'on' || !element.draggable) {
              /** @type {?} */
              style.webkitUserDrag = 'none';
            }

            style.touchAction = 'none';
            style.webkitTapHighlightColor = 'transparent';
          }
        }
      }, {
        key: "position",
        get: function get() {
          return this._position;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this._position) {
            this._position = value;

            if (this._overlayRef) {
              this._updatePosition();

              if (this._tooltipInstance) {
                /** @type {?} */
                this._tooltipInstance.show(0);
              }

              this._overlayRef.updatePosition();
            }
          }
        }
        /**
         * Disables the display of the tooltip.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value); // If tooltip is disabled, hide immediately.

          if (this._disabled) {
            this.hide(0);
          }
        }
        /**
         * The message to be displayed in the tooltip
         * @return {?}
         */

      }, {
        key: "message",
        get: function get() {
          return this._message;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          var _this34 = this;

          this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message); // If the message is not a string (e.g. number), convert it to a string and trim it.


          this._message = value != null ? "".concat(value).trim() : '';

          if (!this._message && this._isTooltipVisible()) {
            this.hide(0);
          } else {
            this._updateTooltipMessage();

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              // The `AriaDescriber` has some functionality that avoids adding a description if it's the
              // same as the `aria-label` of an element, however we can't know whether the tooltip trigger
              // has a data-bound `aria-label` or when it'll be set for the first time. We can avoid the
              // issue by deferring the description by a tick so Angular has time to set the `aria-label`.
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                _this34._ariaDescriber.describe(_this34._elementRef.nativeElement, _this34.message);
              });
            });
          }
        }
        /**
         * Classes to be passed to the tooltip. Supports the same syntax as `ngClass`.
         * @return {?}
         */

      }, {
        key: "tooltipClass",
        get: function get() {
          return this._tooltipClass;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._tooltipClass = value;

          if (this._tooltipInstance) {
            this._setTooltipClass(this._tooltipClass);
          }
        }
      }]);

      return MatTooltip;
    }();

    MatTooltip.ɵfac = function MatTooltip_Factory(t) {
      return new (t || MatTooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_TOOLTIP_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_TOOLTIP_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
    };

    MatTooltip.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatTooltip,
      selectors: [["", "matTooltip", ""]],
      inputs: {
        showDelay: ["matTooltipShowDelay", "showDelay"],
        hideDelay: ["matTooltipHideDelay", "hideDelay"],
        touchGestures: ["matTooltipTouchGestures", "touchGestures"],
        position: ["matTooltipPosition", "position"],
        disabled: ["matTooltipDisabled", "disabled"],
        message: ["matTooltip", "message"],
        tooltipClass: ["matTooltipClass", "tooltipClass"]
      },
      exportAs: ["matTooltip"]
    });
    /** @nocollapse */

    MatTooltip.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_TOOLTIP_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]]
        }]
      }];
    };

    MatTooltip.propDecorators = {
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matTooltipPosition']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matTooltipDisabled']
      }],
      showDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matTooltipShowDelay']
      }],
      hideDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matTooltipHideDelay']
      }],
      touchGestures: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matTooltipTouchGestures']
      }],
      message: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matTooltip']
      }],
      tooltipClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matTooltipClass']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatTooltip, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[matTooltip]',
          exportAs: 'matTooltip'
        }]
      }], function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_TOOLTIP_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]]
          }]
        }];
      }, {
        showDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipShowDelay']
        }],
        hideDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipHideDelay']
        }],
        touchGestures: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipTouchGestures']
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipPosition']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipDisabled']
        }],
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltip']
        }],
        tooltipClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipClass']
        }]
      });
    })();

    if (false) {}
    /**
     * Internal component that wraps the tooltip's content.
     * \@docs-private
     */


    var TooltipComponent = /*#__PURE__*/function () {
      /**
       * @param {?} _changeDetectorRef
       * @param {?} _breakpointObserver
       */
      function TooltipComponent(_changeDetectorRef, _breakpointObserver) {
        _classCallCheck(this, TooltipComponent);

        this._changeDetectorRef = _changeDetectorRef;
        this._breakpointObserver = _breakpointObserver;
        /**
         * Property watched by the animation framework to show or hide the tooltip
         */

        this._visibility = 'initial';
        /**
         * Whether interactions on the page should close the tooltip
         */

        this._closeOnInteraction = false;
        /**
         * Subject for notifying that the tooltip has been hidden from the view
         */

        this._onHide = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * Stream that emits whether the user has a handset-sized display.
         */

        this._isHandset = this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Handset);
      }
      /**
       * Shows the tooltip with an animation originating from the provided origin
       * @param {?} delay Amount of milliseconds to the delay showing the tooltip.
       * @return {?}
       */


      _createClass(TooltipComponent, [{
        key: "show",
        value: function show(delay) {
          var _this35 = this;

          // Cancel the delayed hide if it is scheduled
          if (this._hideTimeoutId) {
            clearTimeout(this._hideTimeoutId);
            this._hideTimeoutId = null;
          } // Body interactions should cancel the tooltip if there is a delay in showing.


          this._closeOnInteraction = true;
          this._showTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this35._visibility = 'visible';
            _this35._showTimeoutId = null; // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways

            _this35._markForCheck();
          }, delay);
        }
        /**
         * Begins the animation to hide the tooltip after the provided delay in ms.
         * @param {?} delay Amount of milliseconds to delay showing the tooltip.
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide(delay) {
          var _this36 = this;

          // Cancel the delayed show if it is scheduled
          if (this._showTimeoutId) {
            clearTimeout(this._showTimeoutId);
            this._showTimeoutId = null;
          }

          this._hideTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this36._visibility = 'hidden';
            _this36._hideTimeoutId = null; // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways

            _this36._markForCheck();
          }, delay);
        }
        /**
         * Returns an observable that notifies when the tooltip has been hidden from view.
         * @return {?}
         */

      }, {
        key: "afterHidden",
        value: function afterHidden() {
          return this._onHide.asObservable();
        }
        /**
         * Whether the tooltip is being displayed.
         * @return {?}
         */

      }, {
        key: "isVisible",
        value: function isVisible() {
          return this._visibility === 'visible';
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._onHide.complete();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_animationStart",
        value: function _animationStart() {
          this._closeOnInteraction = false;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_animationDone",
        value: function _animationDone(event) {
          /** @type {?} */
          var toState =
          /** @type {?} */
          event.toState;

          if (toState === 'hidden' && !this.isVisible()) {
            this._onHide.next();
          }

          if (toState === 'visible' || toState === 'hidden') {
            this._closeOnInteraction = true;
          }
        }
        /**
         * Interactions on the HTML body should close the tooltip immediately as defined in the
         * material design spec.
         * https://material.io/design/components/tooltips.html#behavior
         * @return {?}
         */

      }, {
        key: "_handleBodyInteraction",
        value: function _handleBodyInteraction() {
          if (this._closeOnInteraction) {
            this.hide(0);
          }
        }
        /**
         * Marks that the tooltip needs to be checked in the next change detection run.
         * Mainly used for rendering the initial text before positioning a tooltip, which
         * can be problematic in components with OnPush change detection.
         * @return {?}
         */

      }, {
        key: "_markForCheck",
        value: function _markForCheck() {
          this._changeDetectorRef.markForCheck();
        }
      }]);

      return TooltipComponent;
    }();

    TooltipComponent.ɵfac = function TooltipComponent_Factory(t) {
      return new (t || TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"]));
    };

    TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: TooltipComponent,
      selectors: [["mat-tooltip-component"]],
      hostAttrs: ["aria-hidden", "true"],
      hostVars: 2,
      hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TooltipComponent_click_HostBindingHandler() {
            return ctx._handleBodyInteraction();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveBody"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("zoom", ctx._visibility === "visible" ? 1 : null);
        }
      },
      decls: 3,
      vars: 7,
      consts: [[1, "mat-tooltip", 3, "ngClass"]],
      template: function TooltipComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@state.start", function TooltipComponent_Template_div_animation_state_start_0_listener() {
            return ctx._animationStart();
          })("@state.done", function TooltipComponent_Template_div_animation_state_done_0_listener($event) {
            return ctx._animationDone($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tmp_0_0 = null;
          var currVal_0 = (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 5, ctx._isHandset)) == null ? null : tmp_0_0.matches;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-tooltip-handset", currVal_0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.tooltipClass)("@state", ctx._visibility);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.message);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"],
      encapsulation: 2,
      data: {
        animation: [matTooltipAnimations.tooltipState]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    TooltipComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-tooltip-component',
          template: "<div class=\"mat-tooltip\"\n     [ngClass]=\"tooltipClass\"\n     [class.mat-tooltip-handset]=\"(_isHandset | async)?.matches\"\n     [@state]=\"_visibility\"\n     (@state.start)=\"_animationStart()\"\n     (@state.done)=\"_animationDone($event)\">{{message}}</div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          animations: [matTooltipAnimations.tooltipState],
          host: {
            // Forces the element to have a layout in IE and Edge. This fixes issues where the element
            // won't be rendered if the animations are disabled or there is no web animations polyfill.
            '[style.zoom]': '_visibility === "visible" ? 1 : null',
            '(body:click)': 'this._handleBodyInteraction()',
            'aria-hidden': 'true'
          },
          styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tooltip/tooltip-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatTooltipModule = function MatTooltipModule() {
      _classCallCheck(this, MatTooltipModule);
    };

    MatTooltipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: MatTooltipModule
    });
    MatTooltipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function MatTooltipModule_Factory(t) {
        return new (t || MatTooltipModule)();
      },
      providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
      imports: [[_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatTooltipModule, {
        declarations: function declarations() {
          return [MatTooltip, TooltipComponent];
        },
        imports: function imports() {
          return [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatTooltipModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]],
          exports: [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"]],
          declarations: [MatTooltip, TooltipComponent],
          entryComponents: [TooltipComponent],
          providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tooltip/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=tooltip.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~dashboard-dashboard-module~products-products-module~provider-provider-module~sales-sales-module-es5.js.map