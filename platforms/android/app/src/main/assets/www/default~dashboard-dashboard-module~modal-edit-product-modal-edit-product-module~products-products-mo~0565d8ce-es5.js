function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~modal-edit-product-modal-edit-product-module~products-products-mo~0565d8ce"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/accordion.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/accordion.js ***!
    \**********************************************************************/

  /*! exports provided: CdkAccordion, CdkAccordionItem, CdkAccordionModule */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015AccordionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkAccordion", function () {
      return CdkAccordion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkAccordionItem", function () {
      return CdkAccordionItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkAccordionModule", function () {
      return CdkAccordionModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/accordion/accordion.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used to generate unique ID for each accordion.
     * @type {?}
     */


    var nextId = 0;
    /**
     * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
     */

    var CdkAccordion = /*#__PURE__*/function () {
      function CdkAccordion() {
        _classCallCheck(this, CdkAccordion);

        /**
         * Emits when the state of the accordion changes
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Stream that emits true/false when openAll/closeAll is triggered.
         */

        this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * A readonly id value to use for unique selection coordination.
         */

        this.id = "cdk-accordion-".concat(nextId++);
        this._multi = false;
      }
      /**
       * Whether the accordion should allow multiple expanded accordion items simultaneously.
       * @return {?}
       */


      _createClass(CdkAccordion, [{
        key: "openAll",

        /**
         * Opens all enabled accordion items in an accordion where multi is enabled.
         * @return {?}
         */
        value: function openAll() {
          this._openCloseAll(true);
        }
        /**
         * Closes all enabled accordion items in an accordion where multi is enabled.
         * @return {?}
         */

      }, {
        key: "closeAll",
        value: function closeAll() {
          this._openCloseAll(false);
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._stateChanges.next(changes);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
        /**
         * @private
         * @param {?} expanded
         * @return {?}
         */

      }, {
        key: "_openCloseAll",
        value: function _openCloseAll(expanded) {
          if (this.multi) {
            this._openCloseAllActions.next(expanded);
          }
        }
      }, {
        key: "multi",
        get: function get() {
          return this._multi;
        }
        /**
         * @param {?} multi
         * @return {?}
         */
        ,
        set: function set(multi) {
          this._multi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(multi);
        }
      }]);

      return CdkAccordion;
    }();

    CdkAccordion.ɵfac = function CdkAccordion_Factory(t) {
      return new (t || CdkAccordion)();
    };

    CdkAccordion.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkAccordion,
      selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
      inputs: {
        multi: "multi"
      },
      exportAs: ["cdkAccordion"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    CdkAccordion.propDecorators = {
      multi: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordion, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'cdk-accordion, [cdkAccordion]',
          exportAs: 'cdkAccordion'
        }]
      }], function () {
        return [];
      }, {
        multi: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/accordion/accordion-item.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used to generate unique ID for each accordion item.
     * @type {?}
     */


    var nextId$1 = 0;
    var ɵ0 = undefined;
    /**
     * An basic directive expected to be extended and decorated as a component.  Sets up all
     * events and attributes needed to be managed by a CdkAccordion parent.
     */

    var CdkAccordionItem = /*#__PURE__*/function () {
      /**
       * @param {?} accordion
       * @param {?} _changeDetectorRef
       * @param {?} _expansionDispatcher
       */
      function CdkAccordionItem(accordion, _changeDetectorRef, _expansionDispatcher) {
        var _this = this;

        _classCallCheck(this, CdkAccordionItem);

        this.accordion = accordion;
        this._changeDetectorRef = _changeDetectorRef;
        this._expansionDispatcher = _expansionDispatcher;
        /**
         * Subscription to openAll/closeAll events.
         */

        this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        /**
         * Event emitted every time the AccordionItem is closed.
         */

        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted every time the AccordionItem is opened.
         */

        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the AccordionItem is destroyed.
         */

        this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits whenever the expanded state of the accordion changes.
         * Primarily used to facilitate two-way binding.
         * \@docs-private
         */

        this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * The unique AccordionItem id.
         */

        this.id = "cdk-accordion-child-".concat(nextId$1++);
        this._expanded = false;
        this._disabled = false;
        /**
         * Unregister function for _expansionDispatcher.
         */

        this._removeUniqueSelectionListener =
        /**
        * @return {?}
        */
        function () {};

        this._removeUniqueSelectionListener = _expansionDispatcher.listen(
        /**
        * @param {?} id
        * @param {?} accordionId
        * @return {?}
        */
        function (id, accordionId) {
          if (_this.accordion && !_this.accordion.multi && _this.accordion.id === accordionId && _this.id !== id) {
            _this.expanded = false;
          }
        }); // When an accordion item is hosted in an accordion, subscribe to open/close events.

        if (this.accordion) {
          this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
        }
      }
      /**
       * Whether the AccordionItem is expanded.
       * @return {?}
       */


      _createClass(CdkAccordionItem, [{
        key: "ngOnDestroy",

        /**
         * Emits an event for the accordion item being destroyed.
         * @return {?}
         */
        value: function ngOnDestroy() {
          this.opened.complete();
          this.closed.complete();
          this.destroyed.emit();
          this.destroyed.complete();

          this._removeUniqueSelectionListener();

          this._openCloseAllSubscription.unsubscribe();
        }
        /**
         * Toggles the expanded state of the accordion item.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          if (!this.disabled) {
            this.expanded = !this.expanded;
          }
        }
        /**
         * Sets the expanded state of the accordion item to false.
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          if (!this.disabled) {
            this.expanded = false;
          }
        }
        /**
         * Sets the expanded state of the accordion item to true.
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          if (!this.disabled) {
            this.expanded = true;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribeToOpenCloseAllActions",
        value: function _subscribeToOpenCloseAllActions() {
          var _this2 = this;

          return this.accordion._openCloseAllActions.subscribe(
          /**
          * @param {?} expanded
          * @return {?}
          */
          function (expanded) {
            // Only change expanded state if item is enabled
            if (!_this2.disabled) {
              _this2.expanded = expanded;
            }
          });
        }
      }, {
        key: "expanded",
        get: function get() {
          return this._expanded;
        }
        /**
         * @param {?} expanded
         * @return {?}
         */
        ,
        set: function set(expanded) {
          expanded = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(expanded); // Only emit events and update the internal value if the value changes.

          if (this._expanded !== expanded) {
            this._expanded = expanded;
            this.expandedChange.emit(expanded);

            if (expanded) {
              this.opened.emit();
              /**
               * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
               * the name value is the id of the accordion.
               * @type {?}
               */

              var accordionId = this.accordion ? this.accordion.id : this.id;

              this._expansionDispatcher.notify(this.id, accordionId);
            } else {
              this.closed.emit();
            } // Ensures that the animation will run when the value is set outside of an `@Input`.
            // This includes cases like the open, close and toggle methods.


            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Whether the AccordionItem is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} disabled
         * @return {?}
         */
        ,
        set: function set(disabled) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(disabled);
        }
      }]);

      return CdkAccordionItem;
    }();

    CdkAccordionItem.ɵfac = function CdkAccordionItem_Factory(t) {
      return new (t || CdkAccordionItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkAccordion, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"]));
    };

    CdkAccordionItem.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkAccordionItem,
      selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
      inputs: {
        expanded: "expanded",
        disabled: "disabled"
      },
      outputs: {
        closed: "closed",
        opened: "opened",
        destroyed: "destroyed",
        expandedChange: "expandedChange"
      },
      exportAs: ["cdkAccordionItem"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// Provide CdkAccordion as undefined to prevent nested accordion items from registering
      // to the same accordion.
      {
        provide: CdkAccordion,
        useValue: ɵ0
      }])]
    });
    /** @nocollapse */

    CdkAccordionItem.ctorParameters = function () {
      return [{
        type: CdkAccordion,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"]
      }];
    };

    CdkAccordionItem.propDecorators = {
      closed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      opened: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      destroyed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      expandedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      expanded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'cdk-accordion-item, [cdkAccordionItem]',
          exportAs: 'cdkAccordionItem',
          providers: [// Provide CdkAccordion as undefined to prevent nested accordion items from registering
          // to the same accordion.
          {
            provide: CdkAccordion,
            useValue: ɵ0
          }]
        }]
      }], function () {
        return [{
          type: CdkAccordion,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["UniqueSelectionDispatcher"]
        }];
      }, {
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        destroyed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        expandedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        expanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/accordion/accordion-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CdkAccordionModule = function CdkAccordionModule() {
      _classCallCheck(this, CdkAccordionModule);
    };

    CdkAccordionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CdkAccordionModule
    });
    CdkAccordionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CdkAccordionModule_Factory(t) {
        return new (t || CdkAccordionModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CdkAccordionModule, {
        declarations: [CdkAccordion, CdkAccordionItem],
        exports: [CdkAccordion, CdkAccordionItem]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [CdkAccordion, CdkAccordionItem],
          declarations: [CdkAccordion, CdkAccordionItem]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/accordion/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=accordion.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js ***!
    \************************************************************************/

  /*! exports provided: ArrayDataSource, DataSource, SelectionModel, UniqueSelectionDispatcher, getMultipleValuesInSingleSelectionError, isDataSource */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015CollectionsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function () {
      return ArrayDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataSource", function () {
      return DataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionModel", function () {
      return SelectionModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function () {
      return UniqueSelectionDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function () {
      return getMultipleValuesInSingleSelectionError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isDataSource", function () {
      return isDataSource;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/data-source.ts
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
     * @abstract
     * @template T
     */


    var DataSource = function DataSource() {
      _classCallCheck(this, DataSource);
    };

    if (false) {}
    /**
     * Checks whether an object is a data source.
     * @param {?} value
     * @return {?}
     */


    function isDataSource(value) {
      // Check if the value is a DataSource by observing if it has a connect function. Cannot
      // be checked as an `instanceof DataSource` since people could create their own sources
      // that match the interface, but don't extend DataSource.
      return value && typeof value.connect === 'function';
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/array-data-source.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * DataSource wrapper for a native array.
     * @template T
     */


    var ArrayDataSource = /*#__PURE__*/function (_DataSource) {
      _inherits(ArrayDataSource, _DataSource);

      var _super = _createSuper(ArrayDataSource);

      /**
       * @param {?} _data
       */
      function ArrayDataSource(_data) {
        var _this3;

        _classCallCheck(this, ArrayDataSource);

        _this3 = _super.call(this);
        _this3._data = _data;
        return _this3;
      }
      /**
       * @return {?}
       */


      _createClass(ArrayDataSource, [{
        key: "connect",
        value: function connect() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["isObservable"])(this._data) ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this._data);
        }
        /**
         * @return {?}
         */

      }, {
        key: "disconnect",
        value: function disconnect() {}
      }]);

      return ArrayDataSource;
    }(DataSource);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/collection-viewer.ts
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
     * Interface for any component that provides a view of some data collection and wants to provide
     * information regarding the view and any changes made.
     * @record
     */


    function CollectionViewer() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/selection-model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class to be used to power selecting one or more options from a list.
     * @template T
     */


    var SelectionModel = /*#__PURE__*/function () {
      /**
       * @param {?=} _multiple
       * @param {?=} initiallySelectedValues
       * @param {?=} _emitChanges
       */
      function SelectionModel() {
        var _this4 = this;

        var _multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        var initiallySelectedValues = arguments.length > 1 ? arguments[1] : undefined;

        var _emitChanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        _classCallCheck(this, SelectionModel);

        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /**
         * Currently-selected values.
         */

        this._selection = new Set();
        /**
         * Keeps track of the deselected options that haven't been emitted by the change event.
         */

        this._deselectedToEmit = [];
        /**
         * Keeps track of the selected options that haven't been emitted by the change event.
         */

        this._selectedToEmit = [];
        /**
         * Event emitted when the value has changed.
         */

        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

        if (initiallySelectedValues && initiallySelectedValues.length) {
          if (_multiple) {
            initiallySelectedValues.forEach(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return _this4._markSelected(value);
            });
          } else {
            this._markSelected(initiallySelectedValues[0]);
          } // Clear the array in order to avoid firing the change event for preselected values.


          this._selectedToEmit.length = 0;
        }
      }
      /**
       * Selected values.
       * @return {?}
       */


      _createClass(SelectionModel, [{
        key: "select",

        /**
         * Selects a value or an array of values.
         * @param {...?} values
         * @return {?}
         */
        value: function select() {
          var _this5 = this;

          for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
            values[_key] = arguments[_key];
          }

          this._verifyValueAssignment(values);

          values.forEach(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return _this5._markSelected(value);
          });

          this._emitChangeEvent();
        }
        /**
         * Deselects a value or an array of values.
         * @param {...?} values
         * @return {?}
         */

      }, {
        key: "deselect",
        value: function deselect() {
          var _this6 = this;

          for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            values[_key2] = arguments[_key2];
          }

          this._verifyValueAssignment(values);

          values.forEach(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return _this6._unmarkSelected(value);
          });

          this._emitChangeEvent();
        }
        /**
         * Toggles a value between selected and deselected.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle(value) {
          this.isSelected(value) ? this.deselect(value) : this.select(value);
        }
        /**
         * Clears all of the selected values.
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear() {
          this._unmarkAll();

          this._emitChangeEvent();
        }
        /**
         * Determines whether a value is selected.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "isSelected",
        value: function isSelected(value) {
          return this._selection.has(value);
        }
        /**
         * Determines whether the model does not have a value.
         * @return {?}
         */

      }, {
        key: "isEmpty",
        value: function isEmpty() {
          return this._selection.size === 0;
        }
        /**
         * Determines whether the model has a value.
         * @return {?}
         */

      }, {
        key: "hasValue",
        value: function hasValue() {
          return !this.isEmpty();
        }
        /**
         * Sorts the selected values based on a predicate function.
         * @param {?=} predicate
         * @return {?}
         */

      }, {
        key: "sort",
        value: function sort(predicate) {
          if (this._multiple && this.selected) {
            /** @type {?} */
            this._selected.sort(predicate);
          }
        }
        /**
         * Gets whether multiple values can be selected.
         * @return {?}
         */

      }, {
        key: "isMultipleSelection",
        value: function isMultipleSelection() {
          return this._multiple;
        }
        /**
         * Emits a change event and clears the records of selected and deselected values.
         * @private
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          // Clear the selected values so they can be re-cached.
          this._selected = null;

          if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            this.changed.next({
              source: this,
              added: this._selectedToEmit,
              removed: this._deselectedToEmit
            });
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
          }
        }
        /**
         * Selects a value.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_markSelected",
        value: function _markSelected(value) {
          if (!this.isSelected(value)) {
            if (!this._multiple) {
              this._unmarkAll();
            }

            this._selection.add(value);

            if (this._emitChanges) {
              this._selectedToEmit.push(value);
            }
          }
        }
        /**
         * Deselects a value.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_unmarkSelected",
        value: function _unmarkSelected(value) {
          if (this.isSelected(value)) {
            this._selection["delete"](value);

            if (this._emitChanges) {
              this._deselectedToEmit.push(value);
            }
          }
        }
        /**
         * Clears out the selected values.
         * @private
         * @return {?}
         */

      }, {
        key: "_unmarkAll",
        value: function _unmarkAll() {
          var _this7 = this;

          if (!this.isEmpty()) {
            this._selection.forEach(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return _this7._unmarkSelected(value);
            });
          }
        }
        /**
         * Verifies the value assignment and throws an error if the specified value array is
         * including multiple values while the selection model is not supporting multiple values.
         * @private
         * @param {?} values
         * @return {?}
         */

      }, {
        key: "_verifyValueAssignment",
        value: function _verifyValueAssignment(values) {
          if (values.length > 1 && !this._multiple) {
            throw getMultipleValuesInSingleSelectionError();
          }
        }
      }, {
        key: "selected",
        get: function get() {
          if (!this._selected) {
            this._selected = Array.from(this._selection.values());
          }

          return this._selected;
        }
      }]);

      return SelectionModel;
    }();

    if (false) {}
    /**
     * Event emitted when the value of a MatSelectionModel has changed.
     * \@docs-private
     * @record
     * @template T
     */


    function SelectionChange() {}

    if (false) {}
    /**
     * Returns an error that reports that multiple values are passed into a selection model
     * with a single value.
     * \@docs-private
     * @return {?}
     */


    function getMultipleValuesInSingleSelectionError() {
      return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/unique-selection-dispatcher.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class to coordinate unique selection based on name.
     * Intended to be consumed as an Angular service.
     * This service is needed because native radio change events are only fired on the item currently
     * being selected, and we still need to uncheck the previous selection.
     *
     * This service does not *store* any IDs and names because they may change at any time, so it is
     * less error-prone if they are simply passed through when the events occur.
     */


    var UniqueSelectionDispatcher = /*#__PURE__*/function () {
      function UniqueSelectionDispatcher() {
        _classCallCheck(this, UniqueSelectionDispatcher);

        this._listeners = [];
      }
      /**
       * Notify other items that selection for the given name has been set.
       * @param {?} id ID of the item.
       * @param {?} name Name of the item.
       * @return {?}
       */


      _createClass(UniqueSelectionDispatcher, [{
        key: "notify",
        value: function notify(id, name) {
          var _iterator = _createForOfIteratorHelper(this._listeners),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var listener = _step.value;
              listener(id, name);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        /**
         * Listen for future changes to item selection.
         * @param {?} listener
         * @return {?} Function used to deregister listener
         */

      }, {
        key: "listen",
        value: function listen(listener) {
          var _this8 = this;

          this._listeners.push(listener);

          return (
            /**
            * @return {?}
            */
            function () {
              _this8._listeners = _this8._listeners.filter(
              /**
              * @param {?} registered
              * @return {?}
              */
              function (registered) {
                return listener !== registered;
              });
            }
          );
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._listeners = [];
        }
      }]);

      return UniqueSelectionDispatcher;
    }();

    UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) {
      return new (t || UniqueSelectionDispatcher)();
    };
    /** @nocollapse */


    UniqueSelectionDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function UniqueSelectionDispatcher_Factory() {
        return new UniqueSelectionDispatcher();
      },
      token: UniqueSelectionDispatcher,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UniqueSelectionDispatcher, [{
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
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/tree-adapter.ts
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
     * Interface for a class that can flatten hierarchical structured data and re-expand the flattened
     * data back into its original structure. Should be used in conjunction with the cdk-tree.
     * @record
     * @template T
     */


    function TreeDataNodeFlattener() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=collections.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js ***!
    \********************************************************************/

  /*! exports provided: CdkScrollable, ScrollDispatcher, ViewportRuler, BlockScrollStrategy, CdkConnectedOverlay, CdkOverlayOrigin, CloseScrollStrategy, ConnectedOverlayPositionChange, ConnectedPositionStrategy, ConnectionPositionPair, FlexibleConnectedPositionStrategy, FullscreenOverlayContainer, GlobalPositionStrategy, NoopScrollStrategy, OVERLAY_PROVIDERS, Overlay, OverlayConfig, OverlayContainer, OverlayKeyboardDispatcher, OverlayModule, OverlayPositionBuilder, OverlayRef, RepositionScrollStrategy, ScrollStrategyOptions, ScrollingVisibility, validateHorizontalPosition, validateVerticalPosition, ɵangular_material_src_cdk_overlay_overlay_a, ɵangular_material_src_cdk_overlay_overlay_b, ɵangular_material_src_cdk_overlay_overlay_c, ɵangular_material_src_cdk_overlay_overlay_d, ɵangular_material_src_cdk_overlay_overlay_e, ɵangular_material_src_cdk_overlay_overlay_f, ɵangular_material_src_cdk_overlay_overlay_g */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015OverlayJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlockScrollStrategy", function () {
      return BlockScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkConnectedOverlay", function () {
      return CdkConnectedOverlay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkOverlayOrigin", function () {
      return CdkOverlayOrigin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CloseScrollStrategy", function () {
      return CloseScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectedOverlayPositionChange", function () {
      return ConnectedOverlayPositionChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectedPositionStrategy", function () {
      return ConnectedPositionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectionPositionPair", function () {
      return ConnectionPositionPair;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexibleConnectedPositionStrategy", function () {
      return FlexibleConnectedPositionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullscreenOverlayContainer", function () {
      return FullscreenOverlayContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalPositionStrategy", function () {
      return GlobalPositionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoopScrollStrategy", function () {
      return NoopScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OVERLAY_PROVIDERS", function () {
      return OVERLAY_PROVIDERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Overlay", function () {
      return Overlay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayConfig", function () {
      return OverlayConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayContainer", function () {
      return OverlayContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher", function () {
      return OverlayKeyboardDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayModule", function () {
      return OverlayModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder", function () {
      return OverlayPositionBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayRef", function () {
      return OverlayRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepositionScrollStrategy", function () {
      return RepositionScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions", function () {
      return ScrollStrategyOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollingVisibility", function () {
      return ScrollingVisibility;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateHorizontalPosition", function () {
      return validateHorizontalPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateVerticalPosition", function () {
      return validateVerticalPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_a", function () {
      return OVERLAY_CONTAINER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_b", function () {
      return OVERLAY_CONTAINER_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_c", function () {
      return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_d", function () {
      return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_e", function () {
      return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_f", function () {
      return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_g", function () {
      return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER;
    });
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkScrollable"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"];
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/scroll/block-scroll-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Strategy that will prevent the user from scrolling while the overlay is visible.
     */


    var BlockScrollStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} _viewportRuler
       * @param {?} document
       */
      function BlockScrollStrategy(_viewportRuler, document) {
        _classCallCheck(this, BlockScrollStrategy);

        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = {
          top: '',
          left: ''
        };
        this._isEnabled = false;
        this._document = document;
      }
      /**
       * Attaches this scroll strategy to an overlay.
       * @return {?}
       */


      _createClass(BlockScrollStrategy, [{
        key: "attach",
        value: function attach() {}
        /**
         * Blocks page-level scroll while the attached overlay is open.
         * @return {?}
         */

      }, {
        key: "enable",
        value: function enable() {
          if (this._canBeEnabled()) {
            /** @type {?} */
            var root =
            /** @type {?} */
            this._document.documentElement;
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(); // Cache the previous inline styles in case the user had set them.

            this._previousHTMLStyles.left = root.style.left || '';
            this._previousHTMLStyles.top = root.style.top || ''; // Note: we're using the `html` node, instead of the `body`, because the `body` may
            // have the user agent margin, whereas the `html` is guaranteed not to have one.

            root.style.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(-this._previousScrollPosition.left);
            root.style.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(-this._previousScrollPosition.top);
            root.classList.add('cdk-global-scrollblock');
            this._isEnabled = true;
          }
        }
        /**
         * Unblocks page-level scroll while the attached overlay is open.
         * @return {?}
         */

      }, {
        key: "disable",
        value: function disable() {
          if (this._isEnabled) {
            /** @type {?} */
            var html =
            /** @type {?} */
            this._document.documentElement;
            /** @type {?} */

            var body =
            /** @type {?} */
            this._document.body;
            /** @type {?} */

            var htmlStyle =
            /** @type {?} */
            html.style;
            /** @type {?} */

            var bodyStyle =
            /** @type {?} */
            body.style;
            /** @type {?} */

            var previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
            /** @type {?} */

            var previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
            this._isEnabled = false;
            htmlStyle.left = this._previousHTMLStyles.left;
            htmlStyle.top = this._previousHTMLStyles.top;
            html.classList.remove('cdk-global-scrollblock'); // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
            // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior

            htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
            htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
            bodyStyle.scrollBehavior = previousBodyScrollBehavior;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_canBeEnabled",
        value: function _canBeEnabled() {
          // Since the scroll strategies can't be singletons, we have to use a global CSS class
          // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
          // scrolling multiple times.

          /** @type {?} */
          var html =
          /** @type {?} */
          this._document.documentElement;

          if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
            return false;
          }
          /** @type {?} */


          var body = this._document.body;
          /** @type {?} */

          var viewport = this._viewportRuler.getViewportSize();

          return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
        }
      }]);

      return BlockScrollStrategy;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/scroll/scroll-strategy.ts
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
     * Describes a strategy that will be used by an overlay to handle scroll events while it is open.
     * @record
     */


    function ScrollStrategy() {}

    if (false) {}
    /**
     * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
     * @return {?}
     */


    function getMatScrollStrategyAlreadyAttachedError() {
      return Error("Scroll strategy has already been attached.");
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/scroll/close-scroll-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Config options for the CloseScrollStrategy.
     * @record
     */


    function CloseScrollStrategyConfig() {}

    if (false) {}
    /**
     * Strategy that will close the overlay as soon as the user starts scrolling.
     */


    var CloseScrollStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} _scrollDispatcher
       * @param {?} _ngZone
       * @param {?} _viewportRuler
       * @param {?=} _config
       */
      function CloseScrollStrategy(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        var _this9 = this;

        _classCallCheck(this, CloseScrollStrategy);

        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
        this._scrollSubscription = null;
        /**
         * Detaches the overlay ref and disables the scroll strategy.
         */

        this._detach =
        /**
        * @return {?}
        */
        function () {
          _this9.disable();

          if (_this9._overlayRef.hasAttached()) {
            _this9._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return _this9._overlayRef.detach();
            });
          }
        };
      }
      /**
       * Attaches this scroll strategy to an overlay.
       * @param {?} overlayRef
       * @return {?}
       */


      _createClass(CloseScrollStrategy, [{
        key: "attach",
        value: function attach(overlayRef) {
          if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
          }

          this._overlayRef = overlayRef;
        }
        /**
         * Enables the closing of the attached overlay on scroll.
         * @return {?}
         */

      }, {
        key: "enable",
        value: function enable() {
          var _this10 = this;

          if (this._scrollSubscription) {
            return;
          }
          /** @type {?} */


          var stream = this._scrollDispatcher.scrolled(0);

          if (this._config && this._config.threshold && this._config.threshold > 1) {
            this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
            this._scrollSubscription = stream.subscribe(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var scrollPosition = _this10._viewportRuler.getViewportScrollPosition().top;

              if (Math.abs(scrollPosition - _this10._initialScrollPosition) >
              /** @type {?} */

              /** @type {?} */
              _this10._config.threshold) {
                _this10._detach();
              } else {
                _this10._overlayRef.updatePosition();
              }
            });
          } else {
            this._scrollSubscription = stream.subscribe(this._detach);
          }
        }
        /**
         * Disables the closing the attached overlay on scroll.
         * @return {?}
         */

      }, {
        key: "disable",
        value: function disable() {
          if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();

            this._scrollSubscription = null;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this.disable();
          this._overlayRef =
          /** @type {?} */
          null;
        }
      }]);

      return CloseScrollStrategy;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/scroll/noop-scroll-strategy.ts
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
     * Scroll strategy that doesn't do anything.
     */


    var NoopScrollStrategy = /*#__PURE__*/function () {
      function NoopScrollStrategy() {
        _classCallCheck(this, NoopScrollStrategy);
      }

      _createClass(NoopScrollStrategy, [{
        key: "enable",

        /**
         * Does nothing, as this scroll strategy is a no-op.
         * @return {?}
         */
        value: function enable() {}
        /**
         * Does nothing, as this scroll strategy is a no-op.
         * @return {?}
         */

      }, {
        key: "disable",
        value: function disable() {}
        /**
         * Does nothing, as this scroll strategy is a no-op.
         * @return {?}
         */

      }, {
        key: "attach",
        value: function attach() {}
      }]);

      return NoopScrollStrategy;
    }();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/position/scroll-clip.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // TODO(jelbourn): move this to live with the rest of the scrolling code
    // TODO(jelbourn): someday replace this with IntersectionObservers

    /**
     * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
     * \@docs-private
     * @param {?} element Dimensions of the element (from getBoundingClientRect)
     * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
     * @return {?} Whether the element is scrolled out of view
     */


    function isElementScrolledOutsideView(element, scrollContainers) {
      return scrollContainers.some(
      /**
      * @param {?} containerBounds
      * @return {?}
      */
      function (containerBounds) {
        /** @type {?} */
        var outsideAbove = element.bottom < containerBounds.top;
        /** @type {?} */

        var outsideBelow = element.top > containerBounds.bottom;
        /** @type {?} */

        var outsideLeft = element.right < containerBounds.left;
        /** @type {?} */

        var outsideRight = element.left > containerBounds.right;
        return outsideAbove || outsideBelow || outsideLeft || outsideRight;
      });
    }
    /**
     * Gets whether an element is clipped by any of its scrolling containers.
     * \@docs-private
     * @param {?} element Dimensions of the element (from getBoundingClientRect)
     * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
     * @return {?} Whether the element is clipped
     */


    function isElementClippedByScrolling(element, scrollContainers) {
      return scrollContainers.some(
      /**
      * @param {?} scrollContainerRect
      * @return {?}
      */
      function (scrollContainerRect) {
        /** @type {?} */
        var clippedAbove = element.top < scrollContainerRect.top;
        /** @type {?} */

        var clippedBelow = element.bottom > scrollContainerRect.bottom;
        /** @type {?} */

        var clippedLeft = element.left < scrollContainerRect.left;
        /** @type {?} */

        var clippedRight = element.right > scrollContainerRect.right;
        return clippedAbove || clippedBelow || clippedLeft || clippedRight;
      });
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/scroll/reposition-scroll-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Config options for the RepositionScrollStrategy.
     * @record
     */


    function RepositionScrollStrategyConfig() {}

    if (false) {}
    /**
     * Strategy that will update the element position as the user is scrolling.
     */


    var RepositionScrollStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} _scrollDispatcher
       * @param {?} _viewportRuler
       * @param {?} _ngZone
       * @param {?=} _config
       */
      function RepositionScrollStrategy(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        _classCallCheck(this, RepositionScrollStrategy);

        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
        this._scrollSubscription = null;
      }
      /**
       * Attaches this scroll strategy to an overlay.
       * @param {?} overlayRef
       * @return {?}
       */


      _createClass(RepositionScrollStrategy, [{
        key: "attach",
        value: function attach(overlayRef) {
          if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
          }

          this._overlayRef = overlayRef;
        }
        /**
         * Enables repositioning of the attached overlay on scroll.
         * @return {?}
         */

      }, {
        key: "enable",
        value: function enable() {
          var _this11 = this;

          if (!this._scrollSubscription) {
            /** @type {?} */
            var throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this11._overlayRef.updatePosition(); // TODO(crisbeto): make `close` on by default once all components can handle it.


              if (_this11._config && _this11._config.autoClose) {
                /** @type {?} */
                var overlayRect = _this11._overlayRef.overlayElement.getBoundingClientRect();

                var _this11$_viewportRule = _this11._viewportRuler.getViewportSize(),
                    width = _this11$_viewportRule.width,
                    height = _this11$_viewportRule.height; // TODO(crisbeto): include all ancestor scroll containers here once
                // we have a way of exposing the trigger element to the scroll strategy.

                /** @type {?} */


                var parentRects = [{
                  width: width,
                  height: height,
                  bottom: height,
                  right: width,
                  top: 0,
                  left: 0
                }];

                if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                  _this11.disable();

                  _this11._ngZone.run(
                  /**
                  * @return {?}
                  */
                  function () {
                    return _this11._overlayRef.detach();
                  });
                }
              }
            });
          }
        }
        /**
         * Disables repositioning of the attached overlay on scroll.
         * @return {?}
         */

      }, {
        key: "disable",
        value: function disable() {
          if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();

            this._scrollSubscription = null;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this.disable();
          this._overlayRef =
          /** @type {?} */
          null;
        }
      }]);

      return RepositionScrollStrategy;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/scroll/scroll-strategy-options.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Options for how an overlay will handle scrolling.
     *
     * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
     * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
     */


    var ScrollStrategyOptions =
    /**
     * @param {?} _scrollDispatcher
     * @param {?} _viewportRuler
     * @param {?} _ngZone
     * @param {?} document
     */
    function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler, _ngZone, document) {
      var _this12 = this;

      _classCallCheck(this, ScrollStrategyOptions);

      this._scrollDispatcher = _scrollDispatcher;
      this._viewportRuler = _viewportRuler;
      this._ngZone = _ngZone;
      /**
       * Do nothing on scroll.
       */

      this.noop =
      /**
      * @return {?}
      */
      function () {
        return new NoopScrollStrategy();
      };
      /**
       * Close the overlay as soon as the user scrolls.
       * @param config Configuration to be used inside the scroll strategy.
       */


      this.close =
      /**
      * @param {?=} config
      * @return {?}
      */
      function (config) {
        return new CloseScrollStrategy(_this12._scrollDispatcher, _this12._ngZone, _this12._viewportRuler, config);
      };
      /**
       * Block scrolling.
       */


      this.block =
      /**
      * @return {?}
      */
      function () {
        return new BlockScrollStrategy(_this12._viewportRuler, _this12._document);
      };
      /**
       * Update the overlay's position on scroll.
       * @param config Configuration to be used inside the scroll strategy.
       * Allows debouncing the reposition calls.
       */


      this.reposition =
      /**
      * @param {?=} config
      * @return {?}
      */
      function (config) {
        return new RepositionScrollStrategy(_this12._scrollDispatcher, _this12._viewportRuler, _this12._ngZone, config);
      };

      this._document = document;
    };

    ScrollStrategyOptions.ɵfac = function ScrollStrategyOptions_Factory(t) {
      return new (t || ScrollStrategyOptions)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
    };
    /** @nocollapse */


    ScrollStrategyOptions.ctorParameters = function () {
      return [{
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    ScrollStrategyOptions.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ScrollStrategyOptions_Factory() {
        return new ScrollStrategyOptions(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      },
      token: ScrollStrategyOptions,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollStrategyOptions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/scroll/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/overlay-config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Initial configuration used when creating an overlay.
     */


    var OverlayConfig =
    /**
     * @param {?=} config
     */
    function OverlayConfig(config) {
      _classCallCheck(this, OverlayConfig);

      /**
       * Strategy to be used when handling scroll events while the overlay is open.
       */
      this.scrollStrategy = new NoopScrollStrategy();
      /**
       * Custom class to add to the overlay pane.
       */

      this.panelClass = '';
      /**
       * Whether the overlay has a backdrop.
       */

      this.hasBackdrop = false;
      /**
       * Custom class to add to the backdrop
       */

      this.backdropClass = 'cdk-overlay-dark-backdrop';
      /**
       * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
       * Note that this usually doesn't include clicking on links (unless the user is using
       * the `HashLocationStrategy`).
       */

      this.disposeOnNavigation = false;

      if (config) {
        // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
        // loses the array generic type in the `for of`. But we *also* have to use `Array` because
        // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`

        /** @type {?} */
        var configKeys =
        /** @type {?} */
        Object.keys(config);

        for (var _i = 0, _configKeys = configKeys; _i < _configKeys.length; _i++) {
          var key = _configKeys[_i];

          if (config[key] !== undefined) {
            // TypeScript, as of version 3.5, sees the left-hand-side of this expression
            // as "I don't know *which* key this is, so the only valid value is the intersection
            // of all the posible values." In this case, that happens to be `undefined`. TypeScript
            // is not smart enough to see that the right-hand-side is actually an access of the same
            // exact type with the same exact key, meaning that the value type must be identical.
            // So we use `any` to work around this.
            this[key] =
            /** @type {?} */
            config[key];
          }
        }
      }
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/position/connected-position.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A connection point on the origin element.
     * @record
     */


    function OriginConnectionPosition() {}

    if (false) {}
    /**
     * A connection point on the overlay element.
     * @record
     */


    function OverlayConnectionPosition() {}

    if (false) {}
    /**
     * The points of the origin element and the overlay element to connect.
     */


    var ConnectionPositionPair =
    /**
     * @param {?} origin
     * @param {?} overlay
     * @param {?=} offsetX
     * @param {?=} offsetY
     * @param {?=} panelClass
     */
    function ConnectionPositionPair(origin, overlay, offsetX, offsetY, panelClass) {
      _classCallCheck(this, ConnectionPositionPair);

      this.offsetX = offsetX;
      this.offsetY = offsetY;
      this.panelClass = panelClass;
      this.originX = origin.originX;
      this.originY = origin.originY;
      this.overlayX = overlay.overlayX;
      this.overlayY = overlay.overlayY;
    };

    if (false) {}
    /**
     * Set of properties regarding the position of the origin and overlay relative to the viewport
     * with respect to the containing Scrollable elements.
     *
     * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
     * bounds of any one of the strategy's Scrollable's bounding client rectangle.
     *
     * The overlay and origin are outside view if there is no overlap between their bounding client
     * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
     *
     *       -----------                    -----------
     *       | outside |                    | clipped |
     *       |  view   |              --------------------------
     *       |         |              |     |         |        |
     *       ----------               |     -----------        |
     *  --------------------------    |                        |
     *  |                        |    |      Scrollable        |
     *  |                        |    |                        |
     *  |                        |     --------------------------
     *  |      Scrollable        |
     *  |                        |
     *  --------------------------
     *
     * \@docs-private
     */


    var ScrollingVisibility = function ScrollingVisibility() {
      _classCallCheck(this, ScrollingVisibility);
    };

    if (false) {}
    /**
     * The change event emitted by the strategy when a fallback position is used.
     */


    var ConnectedOverlayPositionChange =
    /**
     * @param {?} connectionPair
     * @param {?} scrollableViewProperties
     */
    function ConnectedOverlayPositionChange(connectionPair, scrollableViewProperties) {
      _classCallCheck(this, ConnectedOverlayPositionChange);

      this.connectionPair = connectionPair;
      this.scrollableViewProperties = scrollableViewProperties;
    };
    /** @nocollapse */


    ConnectedOverlayPositionChange.ctorParameters = function () {
      return [{
        type: ConnectionPositionPair
      }, {
        type: ScrollingVisibility,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    if (false) {}
    /**
     * Validates whether a vertical position property matches the expected values.
     * \@docs-private
     * @param {?} property Name of the property being validated.
     * @param {?} value Value of the property being validated.
     * @return {?}
     */


    function validateVerticalPosition(property, value) {
      if (value !== 'top' && value !== 'bottom' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"top\", \"bottom\" or \"center\".");
      }
    }
    /**
     * Validates whether a horizontal position property matches the expected values.
     * \@docs-private
     * @param {?} property Name of the property being validated.
     * @param {?} value Value of the property being validated.
     * @return {?}
     */


    function validateHorizontalPosition(property, value) {
      if (value !== 'start' && value !== 'end' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"start\", \"end\" or \"center\".");
      }
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/keyboard/overlay-keyboard-dispatcher.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
     * if any. It maintains a list of attached overlays to determine best suited overlay based
     * on event target and order of overlay opens.
     */


    var OverlayKeyboardDispatcher = /*#__PURE__*/function () {
      /**
       * @param {?} document
       */
      function OverlayKeyboardDispatcher(document) {
        var _this13 = this;

        _classCallCheck(this, OverlayKeyboardDispatcher);

        /**
         * Currently attached overlays in the order they were attached.
         */
        this._attachedOverlays = [];
        /**
         * Keyboard event listener that will be attached to the body.
         */

        this._keydownListener =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          /** @type {?} */
          var overlays = _this13._attachedOverlays;

          for (var i = overlays.length - 1; i > -1; i--) {
            // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
            // We want to target the most recent overlay, rather than trying to match where the event came
            // from, because some components might open an overlay, but keep focus on a trigger element
            // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
            // because we don't want overlays that don't handle keyboard events to block the ones below
            // them that do.
            if (overlays[i]._keydownEvents.observers.length > 0) {
              overlays[i]._keydownEvents.next(event);

              break;
            }
          }
        };

        this._document = document;
      }
      /**
       * @return {?}
       */


      _createClass(OverlayKeyboardDispatcher, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._detach();
        }
        /**
         * Add a new overlay to the list of attached overlay refs.
         * @param {?} overlayRef
         * @return {?}
         */

      }, {
        key: "add",
        value: function add(overlayRef) {
          // Ensure that we don't get the same overlay multiple times.
          this.remove(overlayRef); // Lazily start dispatcher once first overlay is added

          if (!this._isAttached) {
            this._document.body.addEventListener('keydown', this._keydownListener);

            this._isAttached = true;
          }

          this._attachedOverlays.push(overlayRef);
        }
        /**
         * Remove an overlay from the list of attached overlay refs.
         * @param {?} overlayRef
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove(overlayRef) {
          /** @type {?} */
          var index = this._attachedOverlays.indexOf(overlayRef);

          if (index > -1) {
            this._attachedOverlays.splice(index, 1);
          } // Remove the global listener once there are no more overlays.


          if (this._attachedOverlays.length === 0) {
            this._detach();
          }
        }
        /**
         * Detaches the global keyboard event listener.
         * @private
         * @return {?}
         */

      }, {
        key: "_detach",
        value: function _detach() {
          if (this._isAttached) {
            this._document.body.removeEventListener('keydown', this._keydownListener);

            this._isAttached = false;
          }
        }
      }]);

      return OverlayKeyboardDispatcher;
    }();

    OverlayKeyboardDispatcher.ɵfac = function OverlayKeyboardDispatcher_Factory(t) {
      return new (t || OverlayKeyboardDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
    };
    /** @nocollapse */


    OverlayKeyboardDispatcher.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    OverlayKeyboardDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function OverlayKeyboardDispatcher_Factory() {
        return new OverlayKeyboardDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      },
      token: OverlayKeyboardDispatcher,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayKeyboardDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} dispatcher
     * @param {?} _document
     * @return {?}
     */


    function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
      return dispatcher || new OverlayKeyboardDispatcher(_document);
    }
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @type {?}
     */


    var OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
      // If there is already an OverlayKeyboardDispatcher available, use that.
      // Otherwise, provide a new one.
      provide: OverlayKeyboardDispatcher,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), OverlayKeyboardDispatcher],
      /** @type {?} */
      // Coerce to `InjectionToken` so that the `deps` match the "shape"
      // of the type expected by Angular
      _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]],
      useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/overlay-container.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Whether we're in a testing environment.
     * TODO(crisbeto): remove this once we have an overlay testing module.
     * @type {?}
     */

    var isTestEnvironment = typeof window !== 'undefined' && !!window && !!(
    /** @type {?} */
    window.__karma__ ||
    /** @type {?} */
    window.jasmine);
    /**
     * Container inside which all overlays will render.
     */

    var OverlayContainer = /*#__PURE__*/function () {
      /**
       * @param {?} document
       * @param {?=} _platform
       */
      function OverlayContainer(document, _platform) {
        _classCallCheck(this, OverlayContainer);

        this._platform = _platform;
        this._document = document;
      }
      /**
       * @return {?}
       */


      _createClass(OverlayContainer, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var container = this._containerElement;

          if (container && container.parentNode) {
            container.parentNode.removeChild(container);
          }
        }
        /**
         * This method returns the overlay container element. It will lazily
         * create the element the first time  it is called to facilitate using
         * the container in non-browser environments.
         * @return {?} the container element
         */

      }, {
        key: "getContainerElement",
        value: function getContainerElement() {
          if (!this._containerElement) {
            this._createContainer();
          }

          return this._containerElement;
        }
        /**
         * Create the overlay container element, which is simply a div
         * with the 'cdk-overlay-container' class on the document body.
         * @protected
         * @return {?}
         */

      }, {
        key: "_createContainer",
        value: function _createContainer() {
          // @breaking-change 10.0.0 Remove null check for `_platform`.

          /** @type {?} */
          var isBrowser = this._platform ? this._platform.isBrowser : typeof window !== 'undefined';
          /** @type {?} */

          var containerClass = 'cdk-overlay-container';

          if (isBrowser || isTestEnvironment) {
            /** @type {?} */
            var oppositePlatformContainers = this._document.querySelectorAll(".".concat(containerClass, "[platform=\"server\"], ") + ".".concat(containerClass, "[platform=\"test\"]")); // Remove any old containers from the opposite platform.
            // This can happen when transitioning from the server to the client.


            for (var i = 0; i < oppositePlatformContainers.length; i++) {
              /** @type {?} */
              oppositePlatformContainers[i].parentNode.removeChild(oppositePlatformContainers[i]);
            }
          }
          /** @type {?} */


          var container = this._document.createElement('div');

          container.classList.add(containerClass); // A long time ago we kept adding new overlay containers whenever a new app was instantiated,
          // but at some point we added logic which clears the duplicate ones in order to avoid leaks.
          // The new logic was a little too aggressive since it was breaking some legitimate use cases.
          // To mitigate the problem we made it so that only containers from a different platform are
          // cleared, but the side-effect was that people started depending on the overly-aggressive
          // logic to clean up their tests for them. Until we can introduce an overlay-specific testing
          // module which does the cleanup, we try to detect that we're in a test environment and we
          // always clear the container. See #17006.
          // TODO(crisbeto): remove the test environment check once we have an overlay testing module.

          if (isTestEnvironment) {
            container.setAttribute('platform', 'test');
          } else if (!isBrowser) {
            container.setAttribute('platform', 'server');
          }

          this._document.body.appendChild(container);

          this._containerElement = container;
        }
      }]);

      return OverlayContainer;
    }();

    OverlayContainer.ɵfac = function OverlayContainer_Factory(t) {
      return new (t || OverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
    };
    /** @nocollapse */


    OverlayContainer.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };
    /** @nocollapse */


    OverlayContainer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function OverlayContainer_Factory() {
        return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      },
      token: OverlayContainer,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} parentContainer
     * @param {?} _document
     * @return {?}
     */


    function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
      return parentContainer || new OverlayContainer(_document);
    }
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @type {?}
     */


    var OVERLAY_CONTAINER_PROVIDER = {
      // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
      provide: OverlayContainer,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), OverlayContainer],
      /** @type {?} */
      _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]],
      useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/overlay-ref.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Reference to an overlay that has been created with the Overlay service.
     * Used to manipulate or dispose of said overlay.
     */

    var OverlayRef = /*#__PURE__*/function () {
      /**
       * @param {?} _portalOutlet
       * @param {?} _host
       * @param {?} _pane
       * @param {?} _config
       * @param {?} _ngZone
       * @param {?} _keyboardDispatcher
       * @param {?} _document
       * @param {?=} _location
       */
      function OverlayRef(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location) {
        var _this14 = this;

        _classCallCheck(this, OverlayRef);

        this._portalOutlet = _portalOutlet;
        this._host = _host;
        this._pane = _pane;
        this._config = _config;
        this._ngZone = _ngZone;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._document = _document;
        this._location = _location;
        this._backdropElement = null;
        this._backdropClick = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._attachments = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._detachments = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;

        this._backdropClickHandler =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          return _this14._backdropClick.next(event);
        };
        /**
         * Stream of keydown events dispatched to this overlay.
         */


        this._keydownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();

        if (_config.scrollStrategy) {
          this._scrollStrategy = _config.scrollStrategy;

          this._scrollStrategy.attach(this);
        }

        this._positionStrategy = _config.positionStrategy;
      }
      /**
       * The overlay's HTML element
       * @return {?}
       */


      _createClass(OverlayRef, [{
        key: "attach",

        /**
         * Attaches content, given via a Portal, to the overlay.
         * If the overlay is configured to have a backdrop, it will be created.
         *
         * @param {?} portal Portal instance to which to attach the overlay.
         * @return {?} The portal attachment result.
         */
        value: function attach(portal) {
          var _this15 = this;

          /** @type {?} */
          var attachResult = this._portalOutlet.attach(portal); // Update the pane element with the given configuration.


          if (!this._host.parentElement && this._previousHostParent) {
            this._previousHostParent.appendChild(this._host);
          }

          if (this._positionStrategy) {
            this._positionStrategy.attach(this);
          }

          this._updateStackingOrder();

          this._updateElementSize();

          this._updateElementDirection();

          if (this._scrollStrategy) {
            this._scrollStrategy.enable();
          } // Update the position once the zone is stable so that the overlay will be fully rendered
          // before attempting to position it, as the position may depend on the size of the rendered
          // content.


          this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            // The overlay could've been detached before the zone has stabilized.
            if (_this15.hasAttached()) {
              _this15.updatePosition();
            }
          }); // Enable pointer events for the overlay pane element.


          this._togglePointerEvents(true);

          if (this._config.hasBackdrop) {
            this._attachBackdrop();
          }

          if (this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, true);
          } // Only emit the `attachments` event once all other setup is done.


          this._attachments.next(); // Track this overlay by the keyboard dispatcher


          this._keyboardDispatcher.add(this); // @breaking-change 8.0.0 remove the null check for `_location`
          // once the constructor parameter is made required.


          if (this._config.disposeOnNavigation && this._location) {
            this._locationChanges = this._location.subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this15.dispose();
            });
          }

          return attachResult;
        }
        /**
         * Detaches an overlay from a portal.
         * @return {?} The portal detachment result.
         */

      }, {
        key: "detach",
        value: function detach() {
          if (!this.hasAttached()) {
            return;
          }

          this.detachBackdrop(); // When the overlay is detached, the pane element should disable pointer events.
          // This is necessary because otherwise the pane element will cover the page and disable
          // pointer events therefore. Depends on the position strategy and the applied pane boundaries.

          this._togglePointerEvents(false);

          if (this._positionStrategy && this._positionStrategy.detach) {
            this._positionStrategy.detach();
          }

          if (this._scrollStrategy) {
            this._scrollStrategy.disable();
          }
          /** @type {?} */


          var detachmentResult = this._portalOutlet.detach(); // Only emit after everything is detached.


          this._detachments.next(); // Remove this overlay from keyboard dispatcher tracking.


          this._keyboardDispatcher.remove(this); // Keeping the host element in the DOM can cause scroll jank, because it still gets
          // rendered, even though it's transparent and unclickable which is why we remove it.


          this._detachContentWhenStable(); // Stop listening for location changes.


          this._locationChanges.unsubscribe();

          return detachmentResult;
        }
        /**
         * Cleans up the overlay from the DOM.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          /** @type {?} */
          var isAttached = this.hasAttached();

          if (this._positionStrategy) {
            this._positionStrategy.dispose();
          }

          this._disposeScrollStrategy();

          this.detachBackdrop();

          this._locationChanges.unsubscribe();

          this._keyboardDispatcher.remove(this);

          this._portalOutlet.dispose();

          this._attachments.complete();

          this._backdropClick.complete();

          this._keydownEvents.complete();

          if (this._host && this._host.parentNode) {
            this._host.parentNode.removeChild(this._host);

            this._host =
            /** @type {?} */
            null;
          }

          this._previousHostParent = this._pane =
          /** @type {?} */
          null;

          if (isAttached) {
            this._detachments.next();
          }

          this._detachments.complete();
        }
        /**
         * Whether the overlay has attached content.
         * @return {?}
         */

      }, {
        key: "hasAttached",
        value: function hasAttached() {
          return this._portalOutlet.hasAttached();
        }
        /**
         * Gets an observable that emits when the backdrop has been clicked.
         * @return {?}
         */

      }, {
        key: "backdropClick",
        value: function backdropClick() {
          return this._backdropClick.asObservable();
        }
        /**
         * Gets an observable that emits when the overlay has been attached.
         * @return {?}
         */

      }, {
        key: "attachments",
        value: function attachments() {
          return this._attachments.asObservable();
        }
        /**
         * Gets an observable that emits when the overlay has been detached.
         * @return {?}
         */

      }, {
        key: "detachments",
        value: function detachments() {
          return this._detachments.asObservable();
        }
        /**
         * Gets an observable of keydown events targeted to this overlay.
         * @return {?}
         */

      }, {
        key: "keydownEvents",
        value: function keydownEvents() {
          return this._keydownEvents.asObservable();
        }
        /**
         * Gets the current overlay configuration, which is immutable.
         * @return {?}
         */

      }, {
        key: "getConfig",
        value: function getConfig() {
          return this._config;
        }
        /**
         * Updates the position of the overlay based on the position strategy.
         * @return {?}
         */

      }, {
        key: "updatePosition",
        value: function updatePosition() {
          if (this._positionStrategy) {
            this._positionStrategy.apply();
          }
        }
        /**
         * Switches to a new position strategy and updates the overlay position.
         * @param {?} strategy
         * @return {?}
         */

      }, {
        key: "updatePositionStrategy",
        value: function updatePositionStrategy(strategy) {
          if (strategy === this._positionStrategy) {
            return;
          }

          if (this._positionStrategy) {
            this._positionStrategy.dispose();
          }

          this._positionStrategy = strategy;

          if (this.hasAttached()) {
            strategy.attach(this);
            this.updatePosition();
          }
        }
        /**
         * Update the size properties of the overlay.
         * @param {?} sizeConfig
         * @return {?}
         */

      }, {
        key: "updateSize",
        value: function updateSize(sizeConfig) {
          this._config = Object.assign(Object.assign({}, this._config), sizeConfig);

          this._updateElementSize();
        }
        /**
         * Sets the LTR/RTL direction for the overlay.
         * @param {?} dir
         * @return {?}
         */

      }, {
        key: "setDirection",
        value: function setDirection(dir) {
          this._config = Object.assign(Object.assign({}, this._config), {
            direction: dir
          });

          this._updateElementDirection();
        }
        /**
         * Add a CSS class or an array of classes to the overlay pane.
         * @param {?} classes
         * @return {?}
         */

      }, {
        key: "addPanelClass",
        value: function addPanelClass(classes) {
          if (this._pane) {
            this._toggleClasses(this._pane, classes, true);
          }
        }
        /**
         * Remove a CSS class or an array of classes from the overlay pane.
         * @param {?} classes
         * @return {?}
         */

      }, {
        key: "removePanelClass",
        value: function removePanelClass(classes) {
          if (this._pane) {
            this._toggleClasses(this._pane, classes, false);
          }
        }
        /**
         * Returns the layout direction of the overlay panel.
         * @return {?}
         */

      }, {
        key: "getDirection",
        value: function getDirection() {
          /** @type {?} */
          var direction = this._config.direction;

          if (!direction) {
            return 'ltr';
          }

          return typeof direction === 'string' ? direction : direction.value;
        }
        /**
         * Switches to a new scroll strategy.
         * @param {?} strategy
         * @return {?}
         */

      }, {
        key: "updateScrollStrategy",
        value: function updateScrollStrategy(strategy) {
          if (strategy === this._scrollStrategy) {
            return;
          }

          this._disposeScrollStrategy();

          this._scrollStrategy = strategy;

          if (this.hasAttached()) {
            strategy.attach(this);
            strategy.enable();
          }
        }
        /**
         * Updates the text direction of the overlay panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateElementDirection",
        value: function _updateElementDirection() {
          this._host.setAttribute('dir', this.getDirection());
        }
        /**
         * Updates the size of the overlay element based on the overlay config.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateElementSize",
        value: function _updateElementSize() {
          if (!this._pane) {
            return;
          }
          /** @type {?} */


          var style = this._pane.style;
          style.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.width);
          style.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.height);
          style.minWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.minWidth);
          style.minHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.minHeight);
          style.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.maxWidth);
          style.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.maxHeight);
        }
        /**
         * Toggles the pointer events for the overlay pane element.
         * @private
         * @param {?} enablePointer
         * @return {?}
         */

      }, {
        key: "_togglePointerEvents",
        value: function _togglePointerEvents(enablePointer) {
          this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
        }
        /**
         * Attaches a backdrop for this overlay.
         * @private
         * @return {?}
         */

      }, {
        key: "_attachBackdrop",
        value: function _attachBackdrop() {
          var _this16 = this;

          /** @type {?} */
          var showingClass = 'cdk-overlay-backdrop-showing';
          this._backdropElement = this._document.createElement('div');

          this._backdropElement.classList.add('cdk-overlay-backdrop');

          if (this._config.backdropClass) {
            this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
          } // Insert the backdrop before the pane in the DOM order,
          // in order to handle stacked overlays properly.


          /** @type {?} */
          this._host.parentElement.insertBefore(this._backdropElement, this._host); // Forward backdrop clicks such that the consumer of the overlay can perform whatever
          // action desired when such a click occurs (usually closing the overlay).


          this._backdropElement.addEventListener('click', this._backdropClickHandler); // Add class to fade-in the backdrop after one frame.


          if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                if (_this16._backdropElement) {
                  _this16._backdropElement.classList.add(showingClass);
                }
              });
            });
          } else {
            this._backdropElement.classList.add(showingClass);
          }
        }
        /**
         * Updates the stacking order of the element, moving it to the top if necessary.
         * This is required in cases where one overlay was detached, while another one,
         * that should be behind it, was destroyed. The next time both of them are opened,
         * the stacking will be wrong, because the detached element's pane will still be
         * in its original DOM position.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateStackingOrder",
        value: function _updateStackingOrder() {
          if (this._host.nextSibling) {
            /** @type {?} */
            this._host.parentNode.appendChild(this._host);
          }
        }
        /**
         * Detaches the backdrop (if any) associated with the overlay.
         * @return {?}
         */

      }, {
        key: "detachBackdrop",
        value: function detachBackdrop() {
          var _this17 = this;

          /** @type {?} */
          var backdropToDetach = this._backdropElement;

          if (!backdropToDetach) {
            return;
          }
          /** @type {?} */


          var timeoutId;
          /** @type {?} */

          var finishDetach =
          /**
          * @return {?}
          */
          function finishDetach() {
            // It may not be attached to anything in certain cases (e.g. unit tests).
            if (backdropToDetach) {
              backdropToDetach.removeEventListener('click', _this17._backdropClickHandler);
              backdropToDetach.removeEventListener('transitionend', finishDetach);

              if (backdropToDetach.parentNode) {
                backdropToDetach.parentNode.removeChild(backdropToDetach);
              }
            } // It is possible that a new portal has been attached to this overlay since we started
            // removing the backdrop. If that is the case, only clear the backdrop reference if it
            // is still the same instance that we started to remove.


            if (_this17._backdropElement == backdropToDetach) {
              _this17._backdropElement = null;
            }

            if (_this17._config.backdropClass) {
              _this17._toggleClasses(
              /** @type {?} */
              backdropToDetach, _this17._config.backdropClass, false);
            }

            clearTimeout(timeoutId);
          };

          backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            backdropToDetach.addEventListener('transitionend', finishDetach);
          }); // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
          // In this case we make it unclickable and we try to remove it after a delay.


          backdropToDetach.style.pointerEvents = 'none'; // Run this outside the Angular zone because there's nothing that Angular cares about.
          // If it were to run inside the Angular zone, every test that used Overlay would have to be
          // either async or fakeAsync.

          timeoutId = this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return setTimeout(finishDetach, 500);
          });
        }
        /**
         * Toggles a single CSS class or an array of classes on an element.
         * @private
         * @param {?} element
         * @param {?} cssClasses
         * @param {?} isAdd
         * @return {?}
         */

      }, {
        key: "_toggleClasses",
        value: function _toggleClasses(element, cssClasses, isAdd) {
          /** @type {?} */
          var classList = element.classList;
          Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(cssClasses).forEach(
          /**
          * @param {?} cssClass
          * @return {?}
          */
          function (cssClass) {
            // We can't do a spread here, because IE doesn't support setting multiple classes.
            // Also trying to add an empty string to a DOMTokenList will throw.
            if (cssClass) {
              isAdd ? classList.add(cssClass) : classList.remove(cssClass);
            }
          });
        }
        /**
         * Detaches the overlay content next time the zone stabilizes.
         * @private
         * @return {?}
         */

      }, {
        key: "_detachContentWhenStable",
        value: function _detachContentWhenStable() {
          var _this18 = this;

          // Normally we wouldn't have to explicitly run this outside the `NgZone`, however
          // if the consumer is using `zone-patch-rxjs`, the `Subscription.unsubscribe` call will
          // be patched to run inside the zone, which will throw us into an infinite loop.
          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            // We can't remove the host here immediately, because the overlay pane's content
            // might still be animating. This stream helps us avoid interrupting the animation
            // by waiting for the pane to become empty.

            /** @type {?} */
            var subscription = _this18._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(_this18._attachments, _this18._detachments))).subscribe(
            /**
            * @return {?}
            */
            function () {
              // Needs a couple of checks for the pane and host, because
              // they may have been removed by the time the zone stabilizes.
              if (!_this18._pane || !_this18._host || _this18._pane.children.length === 0) {
                if (_this18._pane && _this18._config.panelClass) {
                  _this18._toggleClasses(_this18._pane, _this18._config.panelClass, false);
                }

                if (_this18._host && _this18._host.parentElement) {
                  _this18._previousHostParent = _this18._host.parentElement;

                  _this18._previousHostParent.removeChild(_this18._host);
                }

                subscription.unsubscribe();
              }
            });
          });
        }
        /**
         * Disposes of a scroll strategy.
         * @private
         * @return {?}
         */

      }, {
        key: "_disposeScrollStrategy",
        value: function _disposeScrollStrategy() {
          /** @type {?} */
          var scrollStrategy = this._scrollStrategy;

          if (scrollStrategy) {
            scrollStrategy.disable();

            if (scrollStrategy.detach) {
              scrollStrategy.detach();
            }
          }
        }
      }, {
        key: "overlayElement",
        get: function get() {
          return this._pane;
        }
        /**
         * The overlay's backdrop HTML element.
         * @return {?}
         */

      }, {
        key: "backdropElement",
        get: function get() {
          return this._backdropElement;
        }
        /**
         * Wrapper around the panel element. Can be used for advanced
         * positioning where a wrapper with specific styling is
         * required around the overlay pane.
         * @return {?}
         */

      }, {
        key: "hostElement",
        get: function get() {
          return this._host;
        }
      }]);

      return OverlayRef;
    }();

    if (false) {}
    /**
     * Size properties for an overlay.
     * @record
     */


    function OverlaySizeConfig() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/position/flexible-connected-position-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO: refactor clipping detection into a separate thing (part of scrolling module)
    // TODO: doesn't handle both flexible width and height when it has to scroll along both axis.

    /**
     * Class to be added to the overlay bounding box.
     * @type {?}
     */


    var boundingBoxClass = 'cdk-overlay-connected-position-bounding-box';
    /**
     * Regex used to split a string on its CSS units.
     * @type {?}
     */

    var cssUnitPattern = /([A-Za-z%]+)$/;
    /**
     * A strategy for positioning overlays. Using this strategy, an overlay is given an
     * implicit position relative some origin element. The relative position is defined in terms of
     * a point on the origin element that is connected to a point on the overlay element. For example,
     * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
     * of the overlay.
     */

    var FlexibleConnectedPositionStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} connectedTo
       * @param {?} _viewportRuler
       * @param {?} _document
       * @param {?} _platform
       * @param {?} _overlayContainer
       */
      function FlexibleConnectedPositionStrategy(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
        _classCallCheck(this, FlexibleConnectedPositionStrategy);

        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
        /**
         * Last size used for the bounding box. Used to avoid resizing the overlay after open.
         */

        this._lastBoundingBoxSize = {
          width: 0,
          height: 0
        };
        /**
         * Whether the overlay was pushed in a previous positioning.
         */

        this._isPushed = false;
        /**
         * Whether the overlay can be pushed on-screen on the initial open.
         */

        this._canPush = true;
        /**
         * Whether the overlay can grow via flexible width/height after the initial open.
         */

        this._growAfterOpen = false;
        /**
         * Whether the overlay's width and height can be constrained to fit within the viewport.
         */

        this._hasFlexibleDimensions = true;
        /**
         * Whether the overlay position is locked.
         */

        this._positionLocked = false;
        /**
         * Amount of space that must be maintained between the overlay and the edge of the viewport.
         */

        this._viewportMargin = 0;
        /**
         * The Scrollable containers used to check scrollable view properties on position change.
         */

        this._scrollables = [];
        /**
         * Ordered list of preferred positions, from most to least desirable.
         */

        this._preferredPositions = [];
        /**
         * Subject that emits whenever the position changes.
         */

        this._positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Subscription to viewport size changes.
         */

        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /**
         * Default offset for the overlay along the x axis.
         */

        this._offsetX = 0;
        /**
         * Default offset for the overlay along the y axis.
         */

        this._offsetY = 0;
        /**
         * Keeps track of the CSS classes that the position strategy has applied on the overlay panel.
         */

        this._appliedPanelClasses = [];
        /**
         * Observable sequence of position changes.
         */

        this.positionChanges = this._positionChanges.asObservable();
        this.setOrigin(connectedTo);
      }
      /**
       * Ordered list of preferred positions, from most to least desirable.
       * @return {?}
       */


      _createClass(FlexibleConnectedPositionStrategy, [{
        key: "attach",

        /**
         * Attaches this position strategy to an overlay.
         * @param {?} overlayRef
         * @return {?}
         */
        value: function attach(overlayRef) {
          var _this19 = this;

          if (this._overlayRef && overlayRef !== this._overlayRef) {
            throw Error('This position strategy is already attached to an overlay');
          }

          this._validatePositions();

          overlayRef.hostElement.classList.add(boundingBoxClass);
          this._overlayRef = overlayRef;
          this._boundingBox = overlayRef.hostElement;
          this._pane = overlayRef.overlayElement;
          this._isDisposed = false;
          this._isInitialRender = true;
          this._lastPosition = null;

          this._resizeSubscription.unsubscribe();

          this._resizeSubscription = this._viewportRuler.change().subscribe(
          /**
          * @return {?}
          */
          function () {
            // When the window is resized, we want to trigger the next reposition as if it
            // was an initial render, in order for the strategy to pick a new optimal position,
            // otherwise position locking will cause it to stay at the old one.
            _this19._isInitialRender = true;

            _this19.apply();
          });
        }
        /**
         * Updates the position of the overlay element, using whichever preferred position relative
         * to the origin best fits on-screen.
         *
         * The selection of a position goes as follows:
         *  - If any positions fit completely within the viewport as-is,
         *      choose the first position that does so.
         *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
         *      choose the position with the greatest available size modified by the positions' weight.
         *  - If pushing is enabled, take the position that went off-screen the least and push it
         *      on-screen.
         *  - If none of the previous criteria were met, use the position that goes off-screen the least.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "apply",
        value: function apply() {
          // We shouldn't do anything if the strategy was disposed or we're on the server.
          if (this._isDisposed || !this._platform.isBrowser) {
            return;
          } // If the position has been applied already (e.g. when the overlay was opened) and the
          // consumer opted into locking in the position, re-use the old position, in order to
          // prevent the overlay from jumping around.


          if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
            this.reapplyLastPosition();
            return;
          }

          this._clearPanelClasses();

          this._resetOverlayElementStyles();

          this._resetBoundingBoxStyles(); // We need the bounding rects for the origin and the overlay to determine how to position
          // the overlay relative to the origin.
          // We use the viewport rect to determine whether a position would go off-screen.


          this._viewportRect = this._getNarrowedViewportRect();
          this._originRect = this._getOriginRect();
          this._overlayRect = this._pane.getBoundingClientRect();
          /** @type {?} */

          var originRect = this._originRect;
          /** @type {?} */

          var overlayRect = this._overlayRect;
          /** @type {?} */

          var viewportRect = this._viewportRect; // Positions where the overlay will fit with flexible dimensions.

          /** @type {?} */

          var flexibleFits = []; // Fallback if none of the preferred positions fit within the viewport.

          /** @type {?} */

          var fallback; // Go through each of the preferred positions looking for a good fit.
          // If a good fit is found, it will be applied immediately.

          var _iterator2 = _createForOfIteratorHelper(this._preferredPositions),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var pos = _step2.value;

              // Get the exact (x, y) coordinate for the point-of-origin on the origin element.

              /** @type {?} */
              var originPoint = this._getOriginPoint(originRect, pos); // From that point-of-origin, get the exact (x, y) coordinate for the top-left corner of the
              // overlay in this position. We use the top-left corner for calculations and later translate
              // this into an appropriate (top, left, bottom, right) style.

              /** @type {?} */


              var overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos); // Calculate how well the overlay would fit into the viewport with this point.

              /** @type {?} */


              var overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos); // If the overlay, without any further work, fits into the viewport, use this position.


              if (overlayFit.isCompletelyWithinViewport) {
                this._isPushed = false;

                this._applyPosition(pos, originPoint);

                return;
              } // If the overlay has flexible dimensions, we can use this position
              // so long as there's enough space for the minimum dimensions.


              if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
                // Save positions where the overlay will fit with flexible dimensions. We will use these
                // if none of the positions fit *without* flexible dimensions.
                flexibleFits.push({
                  position: pos,
                  origin: originPoint,
                  overlayRect: overlayRect,
                  boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                });
                continue;
              } // If the current preferred position does not fit on the screen, remember the position
              // if it has more visible area on-screen than we've seen and move onto the next preferred
              // position.


              if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
                fallback = {
                  overlayFit: overlayFit,
                  overlayPoint: overlayPoint,
                  originPoint: originPoint,
                  position: pos,
                  overlayRect: overlayRect
                };
              }
            } // If there are any positions where the overlay would fit with flexible dimensions, choose the
            // one that has the greatest area available modified by the position's weight

          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          if (flexibleFits.length) {
            /** @type {?} */
            var bestFit = null;
            /** @type {?} */

            var bestScore = -1;

            var _iterator3 = _createForOfIteratorHelper(flexibleFits),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var fit = _step3.value;

                /** @type {?} */
                var score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);

                if (score > bestScore) {
                  bestScore = score;
                  bestFit = fit;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            this._isPushed = false;

            this._applyPosition(
            /** @type {?} */
            bestFit.position,
            /** @type {?} */
            bestFit.origin);

            return;
          } // When none of the preferred positions fit within the viewport, take the position
          // that went off-screen the least and attempt to push it on-screen.


          if (this._canPush) {
            // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
            this._isPushed = true;

            this._applyPosition(
            /** @type {?} */
            fallback.position,
            /** @type {?} */
            fallback.originPoint);

            return;
          } // All options for getting the overlay within the viewport have been exhausted, so go with the
          // position that went off-screen the least.


          this._applyPosition(
          /** @type {?} */
          fallback.position,
          /** @type {?} */
          fallback.originPoint);
        }
        /**
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this._clearPanelClasses();

          this._lastPosition = null;
          this._previousPushAmount = null;

          this._resizeSubscription.unsubscribe();
        }
        /**
         * Cleanup after the element gets destroyed.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this._isDisposed) {
            return;
          } // We can't use `_resetBoundingBoxStyles` here, because it resets
          // some properties to zero, rather than removing them.


          if (this._boundingBox) {
            extendStyles(this._boundingBox.style,
            /** @type {?} */
            {
              top: '',
              left: '',
              right: '',
              bottom: '',
              height: '',
              width: '',
              alignItems: '',
              justifyContent: ''
            });
          }

          if (this._pane) {
            this._resetOverlayElementStyles();
          }

          if (this._overlayRef) {
            this._overlayRef.hostElement.classList.remove(boundingBoxClass);
          }

          this.detach();

          this._positionChanges.complete();

          this._overlayRef = this._boundingBox =
          /** @type {?} */
          null;
          this._isDisposed = true;
        }
        /**
         * This re-aligns the overlay element with the trigger in its last calculated position,
         * even if a position higher in the "preferred positions" list would now fit. This
         * allows one to re-align the panel without changing the orientation of the panel.
         * @return {?}
         */

      }, {
        key: "reapplyLastPosition",
        value: function reapplyLastPosition() {
          if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
            this._originRect = this._getOriginRect();
            this._overlayRect = this._pane.getBoundingClientRect();
            this._viewportRect = this._getNarrowedViewportRect();
            /** @type {?} */

            var lastPosition = this._lastPosition || this._preferredPositions[0];
            /** @type {?} */

            var originPoint = this._getOriginPoint(this._originRect, lastPosition);

            this._applyPosition(lastPosition, originPoint);
          }
        }
        /**
         * Sets the list of Scrollable containers that host the origin element so that
         * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
         * Scrollable must be an ancestor element of the strategy's origin element.
         * @template THIS
         * @this {THIS}
         * @param {?} scrollables
         * @return {THIS}
         */

      }, {
        key: "withScrollableContainers",
        value: function withScrollableContainers(scrollables) {
          /** @type {?} */
          this._scrollables = scrollables;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Adds new preferred positions.
         * @template THIS
         * @this {THIS}
         * @param {?} positions List of positions options for this overlay.
         * @return {THIS}
         */

      }, {
        key: "withPositions",
        value: function withPositions(positions) {
          /** @type {?} */
          this._preferredPositions = positions; // If the last calculated position object isn't part of the positions anymore, clear
          // it in order to avoid it being picked up if the consumer tries to re-apply.

          if (positions.indexOf(
          /** @type {?} */

          /** @type {?} */
          this._lastPosition) === -1) {
            /** @type {?} */
            this._lastPosition = null;
          }

          /** @type {?} */
          this._validatePositions();

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
         * @template THIS
         * @this {THIS}
         * @param {?} margin Required margin between the overlay and the viewport edge in pixels.
         * @return {THIS}
         */

      }, {
        key: "withViewportMargin",
        value: function withViewportMargin(margin) {
          /** @type {?} */
          this._viewportMargin = margin;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets whether the overlay's width and height can be constrained to fit within the viewport.
         * @template THIS
         * @this {THIS}
         * @param {?=} flexibleDimensions
         * @return {THIS}
         */

      }, {
        key: "withFlexibleDimensions",
        value: function withFlexibleDimensions() {
          var flexibleDimensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._hasFlexibleDimensions = flexibleDimensions;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets whether the overlay can grow after the initial open via flexible width/height.
         * @template THIS
         * @this {THIS}
         * @param {?=} growAfterOpen
         * @return {THIS}
         */

      }, {
        key: "withGrowAfterOpen",
        value: function withGrowAfterOpen() {
          var growAfterOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._growAfterOpen = growAfterOpen;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets whether the overlay can be pushed on-screen if none of the provided positions fit.
         * @template THIS
         * @this {THIS}
         * @param {?=} canPush
         * @return {THIS}
         */

      }, {
        key: "withPush",
        value: function withPush() {
          var canPush = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._canPush = canPush;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets whether the overlay's position should be locked in after it is positioned
         * initially. When an overlay is locked in, it won't attempt to reposition itself
         * when the position is re-applied (e.g. when the user scrolls away).
         * @template THIS
         * @this {THIS}
         * @param {?=} isLocked Whether the overlay should locked in.
         * @return {THIS}
         */

      }, {
        key: "withLockedPosition",
        value: function withLockedPosition() {
          var isLocked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          /** @type {?} */
          this._positionLocked = isLocked;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the origin, relative to which to position the overlay.
         * Using an element origin is useful for building components that need to be positioned
         * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
         * used for cases like contextual menus which open relative to the user's pointer.
         * @template THIS
         * @this {THIS}
         * @param {?} origin Reference to the new origin.
         * @return {THIS}
         */

      }, {
        key: "setOrigin",
        value: function setOrigin(origin) {
          /** @type {?} */
          this._origin = origin;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the default offset for the overlay's connection point on the x-axis.
         * @template THIS
         * @this {THIS}
         * @param {?} offset New offset in the X axis.
         * @return {THIS}
         */

      }, {
        key: "withDefaultOffsetX",
        value: function withDefaultOffsetX(offset) {
          /** @type {?} */
          this._offsetX = offset;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the default offset for the overlay's connection point on the y-axis.
         * @template THIS
         * @this {THIS}
         * @param {?} offset New offset in the Y axis.
         * @return {THIS}
         */

      }, {
        key: "withDefaultOffsetY",
        value: function withDefaultOffsetY(offset) {
          /** @type {?} */
          this._offsetY = offset;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Configures that the position strategy should set a `transform-origin` on some elements
         * inside the overlay, depending on the current position that is being applied. This is
         * useful for the cases where the origin of an animation can change depending on the
         * alignment of the overlay.
         * @template THIS
         * @this {THIS}
         * @param {?} selector CSS selector that will be used to find the target
         *    elements onto which to set the transform origin.
         * @return {THIS}
         */

      }, {
        key: "withTransformOriginOn",
        value: function withTransformOriginOn(selector) {
          /** @type {?} */
          this._transformOriginSelector = selector;
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
         * @private
         * @param {?} originRect
         * @param {?} pos
         * @return {?}
         */

      }, {
        key: "_getOriginPoint",
        value: function _getOriginPoint(originRect, pos) {
          /** @type {?} */
          var x;

          if (pos.originX == 'center') {
            // Note: when centering we should always use the `left`
            // offset, otherwise the position will be wrong in RTL.
            x = originRect.left + originRect.width / 2;
          } else {
            /** @type {?} */
            var startX = this._isRtl() ? originRect.right : originRect.left;
            /** @type {?} */

            var endX = this._isRtl() ? originRect.left : originRect.right;
            x = pos.originX == 'start' ? startX : endX;
          }
          /** @type {?} */


          var y;

          if (pos.originY == 'center') {
            y = originRect.top + originRect.height / 2;
          } else {
            y = pos.originY == 'top' ? originRect.top : originRect.bottom;
          }

          return {
            x: x,
            y: y
          };
        }
        /**
         * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
         * origin point to which the overlay should be connected.
         * @private
         * @param {?} originPoint
         * @param {?} overlayRect
         * @param {?} pos
         * @return {?}
         */

      }, {
        key: "_getOverlayPoint",
        value: function _getOverlayPoint(originPoint, overlayRect, pos) {
          // Calculate the (overlayStartX, overlayStartY), the start of the
          // potential overlay position relative to the origin point.

          /** @type {?} */
          var overlayStartX;

          if (pos.overlayX == 'center') {
            overlayStartX = -overlayRect.width / 2;
          } else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl() ? -overlayRect.width : 0;
          } else {
            overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
          }
          /** @type {?} */


          var overlayStartY;

          if (pos.overlayY == 'center') {
            overlayStartY = -overlayRect.height / 2;
          } else {
            overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
          } // The (x, y) coordinates of the overlay.


          return {
            x: originPoint.x + overlayStartX,
            y: originPoint.y + overlayStartY
          };
        }
        /**
         * Gets how well an overlay at the given point will fit within the viewport.
         * @private
         * @param {?} point
         * @param {?} overlay
         * @param {?} viewport
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_getOverlayFit",
        value: function _getOverlayFit(point, overlay, viewport, position) {
          var x = point.x,
              y = point.y;
          /** @type {?} */

          var offsetX = this._getOffset(position, 'x');
          /** @type {?} */


          var offsetY = this._getOffset(position, 'y'); // Account for the offsets since they could push the overlay out of the viewport.


          if (offsetX) {
            x += offsetX;
          }

          if (offsetY) {
            y += offsetY;
          } // How much the overlay would overflow at this position, on each side.

          /** @type {?} */


          var leftOverflow = 0 - x;
          /** @type {?} */

          var rightOverflow = x + overlay.width - viewport.width;
          /** @type {?} */

          var topOverflow = 0 - y;
          /** @type {?} */

          var bottomOverflow = y + overlay.height - viewport.height; // Visible parts of the element on each axis.

          /** @type {?} */

          var visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
          /** @type {?} */


          var visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
          /** @type {?} */


          var visibleArea = visibleWidth * visibleHeight;
          return {
            visibleArea: visibleArea,
            isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
            fitsInViewportVertically: visibleHeight === overlay.height,
            fitsInViewportHorizontally: visibleWidth == overlay.width
          };
        }
        /**
         * Whether the overlay can fit within the viewport when it may resize either its width or height.
         * @private
         * @param {?} fit How well the overlay fits in the viewport at some position.
         * @param {?} point The (x, y) coordinates of the overlat at some position.
         * @param {?} viewport The geometry of the viewport.
         * @return {?}
         */

      }, {
        key: "_canFitWithFlexibleDimensions",
        value: function _canFitWithFlexibleDimensions(fit, point, viewport) {
          if (this._hasFlexibleDimensions) {
            /** @type {?} */
            var availableHeight = viewport.bottom - point.y;
            /** @type {?} */

            var availableWidth = viewport.right - point.x;
            /** @type {?} */

            var minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
            /** @type {?} */

            var minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
            /** @type {?} */

            var verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
            /** @type {?} */

            var horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
            return verticalFit && horizontalFit;
          }

          return false;
        }
        /**
         * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
         * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
         * right and bottom).
         *
         * @private
         * @param {?} start Starting point from which the overlay is pushed.
         * @param {?} overlay Dimensions of the overlay.
         * @param {?} scrollPosition Current viewport scroll position.
         * @return {?} The point at which to position the overlay after pushing. This is effectively a new
         *     originPoint.
         */

      }, {
        key: "_pushOverlayOnScreen",
        value: function _pushOverlayOnScreen(start, overlay, scrollPosition) {
          // If the position is locked and we've pushed the overlay already, reuse the previous push
          // amount, rather than pushing it again. If we were to continue pushing, the element would
          // remain in the viewport, which goes against the expectations when position locking is enabled.
          if (this._previousPushAmount && this._positionLocked) {
            return {
              x: start.x + this._previousPushAmount.x,
              y: start.y + this._previousPushAmount.y
            };
          }
          /** @type {?} */


          var viewport = this._viewportRect; // Determine how much the overlay goes outside the viewport on each
          // side, which we'll use to decide which direction to push it.

          /** @type {?} */

          var overflowRight = Math.max(start.x + overlay.width - viewport.right, 0);
          /** @type {?} */

          var overflowBottom = Math.max(start.y + overlay.height - viewport.bottom, 0);
          /** @type {?} */

          var overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
          /** @type {?} */

          var overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0); // Amount by which to push the overlay in each axis such that it remains on-screen.

          /** @type {?} */

          var pushX = 0;
          /** @type {?} */

          var pushY = 0; // If the overlay fits completely within the bounds of the viewport, push it from whichever
          // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
          // viewport and allow for the trailing end of the overlay to go out of bounds.

          if (overlay.width <= viewport.width) {
            pushX = overflowLeft || -overflowRight;
          } else {
            pushX = start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0;
          }

          if (overlay.height <= viewport.height) {
            pushY = overflowTop || -overflowBottom;
          } else {
            pushY = start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0;
          }

          this._previousPushAmount = {
            x: pushX,
            y: pushY
          };
          return {
            x: start.x + pushX,
            y: start.y + pushY
          };
        }
        /**
         * Applies a computed position to the overlay and emits a position change.
         * @private
         * @param {?} position The position preference
         * @param {?} originPoint The point on the origin element where the overlay is connected.
         * @return {?}
         */

      }, {
        key: "_applyPosition",
        value: function _applyPosition(position, originPoint) {
          this._setTransformOrigin(position);

          this._setOverlayElementStyles(originPoint, position);

          this._setBoundingBoxStyles(originPoint, position);

          if (position.panelClass) {
            this._addPanelClasses(position.panelClass);
          } // Save the last connected position in case the position needs to be re-calculated.


          this._lastPosition = position; // Notify that the position has been changed along with its change properties.
          // We only emit if we've got any subscriptions, because the scroll visibility
          // calculcations can be somewhat expensive.

          if (this._positionChanges.observers.length) {
            /** @type {?} */
            var scrollableViewProperties = this._getScrollVisibility();
            /** @type {?} */


            var changeEvent = new ConnectedOverlayPositionChange(position, scrollableViewProperties);

            this._positionChanges.next(changeEvent);
          }

          this._isInitialRender = false;
        }
        /**
         * Sets the transform origin based on the configured selector and the passed-in position.
         * @private
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_setTransformOrigin",
        value: function _setTransformOrigin(position) {
          if (!this._transformOriginSelector) {
            return;
          }
          /** @type {?} */


          var elements =
          /** @type {?} */
          this._boundingBox.querySelectorAll(this._transformOriginSelector);
          /** @type {?} */


          var xOrigin;
          /** @type {?} */

          var yOrigin = position.overlayY;

          if (position.overlayX === 'center') {
            xOrigin = 'center';
          } else if (this._isRtl()) {
            xOrigin = position.overlayX === 'start' ? 'right' : 'left';
          } else {
            xOrigin = position.overlayX === 'start' ? 'left' : 'right';
          }

          for (var i = 0; i < elements.length; i++) {
            elements[i].style.transformOrigin = "".concat(xOrigin, " ").concat(yOrigin);
          }
        }
        /**
         * Gets the position and size of the overlay's sizing container.
         *
         * This method does no measuring and applies no styles so that we can cheaply compute the
         * bounds for all positions and choose the best fit based on these results.
         * @private
         * @param {?} origin
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_calculateBoundingBoxRect",
        value: function _calculateBoundingBoxRect(origin, position) {
          /** @type {?} */
          var viewport = this._viewportRect;
          /** @type {?} */

          var isRtl = this._isRtl();
          /** @type {?} */


          var height;
          /** @type {?} */

          var top;
          /** @type {?} */

          var bottom;

          if (position.overlayY === 'top') {
            // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
            top = origin.y;
            height = viewport.height - top + this._viewportMargin;
          } else if (position.overlayY === 'bottom') {
            // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
            // the viewport margin back in, because the viewport rect is narrowed down to remove the
            // margin, whereas the `origin` position is calculated based on its `ClientRect`.
            bottom = viewport.height - origin.y + this._viewportMargin * 2;
            height = viewport.height - bottom + this._viewportMargin;
          } else {
            // If neither top nor bottom, it means that the overlay is vertically centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.bottom - origin.y` and
            // `origin.y - viewport.top`.

            /** @type {?} */
            var smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
            /** @type {?} */

            var previousHeight = this._lastBoundingBoxSize.height;
            height = smallestDistanceToViewportEdge * 2;
            top = origin.y - smallestDistanceToViewportEdge;

            if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
              top = origin.y - previousHeight / 2;
            }
          } // The overlay is opening 'right-ward' (the content flows to the right).

          /** @type {?} */


          var isBoundedByRightViewportEdge = position.overlayX === 'start' && !isRtl || position.overlayX === 'end' && isRtl; // The overlay is opening 'left-ward' (the content flows to the left).

          /** @type {?} */

          var isBoundedByLeftViewportEdge = position.overlayX === 'end' && !isRtl || position.overlayX === 'start' && isRtl;
          /** @type {?} */

          var width;
          /** @type {?} */

          var left;
          /** @type {?} */

          var right;

          if (isBoundedByLeftViewportEdge) {
            right = viewport.width - origin.x + this._viewportMargin;
            width = origin.x - this._viewportMargin;
          } else if (isBoundedByRightViewportEdge) {
            left = origin.x;
            width = viewport.right - origin.x;
          } else {
            // If neither start nor end, it means that the overlay is horizontally centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.right - origin.x` and
            // `origin.x - viewport.left`.

            /** @type {?} */
            var _smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
            /** @type {?} */


            var previousWidth = this._lastBoundingBoxSize.width;
            width = _smallestDistanceToViewportEdge * 2;
            left = origin.x - _smallestDistanceToViewportEdge;

            if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
              left = origin.x - previousWidth / 2;
            }
          }

          return {
            top:
            /** @type {?} */
            top,
            left:
            /** @type {?} */
            left,
            bottom:
            /** @type {?} */
            bottom,
            right:
            /** @type {?} */
            right,
            width: width,
            height: height
          };
        }
        /**
         * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
         * origin's connection point and stetches to the bounds of the viewport.
         *
         * @private
         * @param {?} origin The point on the origin element where the overlay is connected.
         * @param {?} position The position preference
         * @return {?}
         */

      }, {
        key: "_setBoundingBoxStyles",
        value: function _setBoundingBoxStyles(origin, position) {
          /** @type {?} */
          var boundingBoxRect = this._calculateBoundingBoxRect(origin, position); // It's weird if the overlay *grows* while scrolling, so we take the last size into account
          // when applying a new size.


          if (!this._isInitialRender && !this._growAfterOpen) {
            boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
            boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
          }
          /** @type {?} */


          var styles =
          /** @type {?} */
          {};

          if (this._hasExactPosition()) {
            styles.top = styles.left = '0';
            styles.bottom = styles.right = styles.maxHeight = styles.maxWidth = '';
            styles.width = styles.height = '100%';
          } else {
            /** @type {?} */
            var maxHeight = this._overlayRef.getConfig().maxHeight;
            /** @type {?} */


            var maxWidth = this._overlayRef.getConfig().maxWidth;

            styles.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.height);
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.top);
            styles.bottom = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.bottom);
            styles.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.width);
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.left);
            styles.right = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.right); // Push the pane content towards the proper direction.

            if (position.overlayX === 'center') {
              styles.alignItems = 'center';
            } else {
              styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
            }

            if (position.overlayY === 'center') {
              styles.justifyContent = 'center';
            } else {
              styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
            }

            if (maxHeight) {
              styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(maxHeight);
            }

            if (maxWidth) {
              styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(maxWidth);
            }
          }

          this._lastBoundingBoxSize = boundingBoxRect;
          extendStyles(
          /** @type {?} */
          this._boundingBox.style, styles);
        }
        /**
         * Resets the styles for the bounding box so that a new positioning can be computed.
         * @private
         * @return {?}
         */

      }, {
        key: "_resetBoundingBoxStyles",
        value: function _resetBoundingBoxStyles() {
          extendStyles(
          /** @type {?} */
          this._boundingBox.style,
          /** @type {?} */
          {
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            height: '',
            width: '',
            alignItems: '',
            justifyContent: ''
          });
        }
        /**
         * Resets the styles for the overlay pane so that a new positioning can be computed.
         * @private
         * @return {?}
         */

      }, {
        key: "_resetOverlayElementStyles",
        value: function _resetOverlayElementStyles() {
          extendStyles(this._pane.style,
          /** @type {?} */
          {
            top: '',
            left: '',
            bottom: '',
            right: '',
            position: '',
            transform: ''
          });
        }
        /**
         * Sets positioning styles to the overlay element.
         * @private
         * @param {?} originPoint
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_setOverlayElementStyles",
        value: function _setOverlayElementStyles(originPoint, position) {
          /** @type {?} */
          var styles =
          /** @type {?} */
          {};
          /** @type {?} */

          var hasExactPosition = this._hasExactPosition();
          /** @type {?} */


          var hasFlexibleDimensions = this._hasFlexibleDimensions;
          /** @type {?} */

          var config = this._overlayRef.getConfig();

          if (hasExactPosition) {
            /** @type {?} */
            var scrollPosition = this._viewportRuler.getViewportScrollPosition();

            extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
            extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
          } else {
            styles.position = 'static';
          } // Use a transform to apply the offsets. We do this because the `center` positions rely on
          // being in the normal flex flow and setting a `top` / `left` at all will completely throw
          // off the position. We also can't use margins, because they won't have an effect in some
          // cases where the element doesn't have anything to "push off of". Finally, this works
          // better both with flexible and non-flexible positioning.

          /** @type {?} */


          var transformString = '';
          /** @type {?} */

          var offsetX = this._getOffset(position, 'x');
          /** @type {?} */


          var offsetY = this._getOffset(position, 'y');

          if (offsetX) {
            transformString += "translateX(".concat(offsetX, "px) ");
          }

          if (offsetY) {
            transformString += "translateY(".concat(offsetY, "px)");
          }

          styles.transform = transformString.trim(); // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
          // we need these values to both be set to "100%" for the automatic flexible sizing to work.
          // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.
          // Note that this doesn't apply when we have an exact position, in which case we do want to
          // apply them because they'll be cleared from the bounding box.

          if (config.maxHeight) {
            if (hasExactPosition) {
              styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(config.maxHeight);
            } else if (hasFlexibleDimensions) {
              styles.maxHeight = '';
            }
          }

          if (config.maxWidth) {
            if (hasExactPosition) {
              styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(config.maxWidth);
            } else if (hasFlexibleDimensions) {
              styles.maxWidth = '';
            }
          }

          extendStyles(this._pane.style, styles);
        }
        /**
         * Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing.
         * @private
         * @param {?} position
         * @param {?} originPoint
         * @param {?} scrollPosition
         * @return {?}
         */

      }, {
        key: "_getExactOverlayY",
        value: function _getExactOverlayY(position, originPoint, scrollPosition) {
          // Reset any existing styles. This is necessary in case the
          // preferred position has changed since the last `apply`.

          /** @type {?} */
          var styles =
          /** @type {?} */
          {
            top: '',
            bottom: ''
          };
          /** @type {?} */

          var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

          if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
          }
          /** @type {?} */


          var virtualKeyboardOffset = this._overlayContainer.getContainerElement().getBoundingClientRect().top; // Normally this would be zero, however when the overlay is attached to an input (e.g. in an
          // autocomplete), mobile browsers will shift everything in order to put the input in the middle
          // of the screen and to make space for the virtual keyboard. We need to account for this offset,
          // otherwise our positioning will be thrown off.


          overlayPoint.y -= virtualKeyboardOffset; // We want to set either `top` or `bottom` based on whether the overlay wants to appear
          // above or below the origin and the direction in which the element will expand.

          if (position.overlayY === 'bottom') {
            // When using `bottom`, we adjust the y position such that it is the distance
            // from the bottom of the viewport rather than the top.

            /** @type {?} */
            var documentHeight =
            /** @type {?} */
            this._document.documentElement.clientHeight;
            styles.bottom = "".concat(documentHeight - (overlayPoint.y + this._overlayRect.height), "px");
          } else {
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(overlayPoint.y);
          }

          return styles;
        }
        /**
         * Gets the exact left/right for the overlay when not using flexible sizing or when pushing.
         * @private
         * @param {?} position
         * @param {?} originPoint
         * @param {?} scrollPosition
         * @return {?}
         */

      }, {
        key: "_getExactOverlayX",
        value: function _getExactOverlayX(position, originPoint, scrollPosition) {
          // Reset any existing styles. This is necessary in case the preferred position has
          // changed since the last `apply`.

          /** @type {?} */
          var styles =
          /** @type {?} */
          {
            left: '',
            right: ''
          };
          /** @type {?} */

          var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

          if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
          } // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
          // or "after" the origin, which determines the direction in which the element will expand.
          // For the horizontal axis, the meaning of "before" and "after" change based on whether the
          // page is in RTL or LTR.

          /** @type {?} */


          var horizontalStyleProperty;

          if (this._isRtl()) {
            horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
          } else {
            horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
          } // When we're setting `right`, we adjust the x position such that it is the distance
          // from the right edge of the viewport rather than the left edge.


          if (horizontalStyleProperty === 'right') {
            /** @type {?} */
            var documentWidth =
            /** @type {?} */
            this._document.documentElement.clientWidth;
            styles.right = "".concat(documentWidth - (overlayPoint.x + this._overlayRect.width), "px");
          } else {
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(overlayPoint.x);
          }

          return styles;
        }
        /**
         * Gets the view properties of the trigger and overlay, including whether they are clipped
         * or completely outside the view of any of the strategy's scrollables.
         * @private
         * @return {?}
         */

      }, {
        key: "_getScrollVisibility",
        value: function _getScrollVisibility() {
          // Note: needs fresh rects since the position could've changed.

          /** @type {?} */
          var originBounds = this._getOriginRect();
          /** @type {?} */


          var overlayBounds = this._pane.getBoundingClientRect(); // TODO(jelbourn): instead of needing all of the client rects for these scrolling containers
          // every time, we should be able to use the scrollTop of the containers if the size of those
          // containers hasn't changed.

          /** @type {?} */


          var scrollContainerBounds = this._scrollables.map(
          /**
          * @param {?} scrollable
          * @return {?}
          */
          function (scrollable) {
            return scrollable.getElementRef().nativeElement.getBoundingClientRect();
          });

          return {
            isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
            isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
            isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
            isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
          };
        }
        /**
         * Subtracts the amount that an element is overflowing on an axis from its length.
         * @private
         * @param {?} length
         * @param {...?} overflows
         * @return {?}
         */

      }, {
        key: "_subtractOverflows",
        value: function _subtractOverflows(length) {
          for (var _len3 = arguments.length, overflows = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            overflows[_key3 - 1] = arguments[_key3];
          }

          return overflows.reduce(
          /**
          * @param {?} currentValue
          * @param {?} currentOverflow
          * @return {?}
          */
          function (currentValue, currentOverflow) {
            return currentValue - Math.max(currentOverflow, 0);
          }, length);
        }
        /**
         * Narrows the given viewport rect by the current _viewportMargin.
         * @private
         * @return {?}
         */

      }, {
        key: "_getNarrowedViewportRect",
        value: function _getNarrowedViewportRect() {
          // We recalculate the viewport rect here ourselves, rather than using the ViewportRuler,
          // because we want to use the `clientWidth` and `clientHeight` as the base. The difference
          // being that the client properties don't include the scrollbar, as opposed to `innerWidth`
          // and `innerHeight` that do. This is necessary, because the overlay container uses
          // 100% `width` and `height` which don't include the scrollbar either.

          /** @type {?} */
          var width =
          /** @type {?} */
          this._document.documentElement.clientWidth;
          /** @type {?} */

          var height =
          /** @type {?} */
          this._document.documentElement.clientHeight;
          /** @type {?} */

          var scrollPosition = this._viewportRuler.getViewportScrollPosition();

          return {
            top: scrollPosition.top + this._viewportMargin,
            left: scrollPosition.left + this._viewportMargin,
            right: scrollPosition.left + width - this._viewportMargin,
            bottom: scrollPosition.top + height - this._viewportMargin,
            width: width - 2 * this._viewportMargin,
            height: height - 2 * this._viewportMargin
          };
        }
        /**
         * Whether the we're dealing with an RTL context
         * @private
         * @return {?}
         */

      }, {
        key: "_isRtl",
        value: function _isRtl() {
          return this._overlayRef.getDirection() === 'rtl';
        }
        /**
         * Determines whether the overlay uses exact or flexible positioning.
         * @private
         * @return {?}
         */

      }, {
        key: "_hasExactPosition",
        value: function _hasExactPosition() {
          return !this._hasFlexibleDimensions || this._isPushed;
        }
        /**
         * Retrieves the offset of a position along the x or y axis.
         * @private
         * @param {?} position
         * @param {?} axis
         * @return {?}
         */

      }, {
        key: "_getOffset",
        value: function _getOffset(position, axis) {
          if (axis === 'x') {
            // We don't do something like `position['offset' + axis]` in
            // order to avoid breking minifiers that rename properties.
            return position.offsetX == null ? this._offsetX : position.offsetX;
          }

          return position.offsetY == null ? this._offsetY : position.offsetY;
        }
        /**
         * Validates that the current position match the expected values.
         * @private
         * @return {?}
         */

      }, {
        key: "_validatePositions",
        value: function _validatePositions() {
          if (!this._preferredPositions.length) {
            throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
          } // TODO(crisbeto): remove these once Angular's template type
          // checking is advanced enough to catch these cases.


          this._preferredPositions.forEach(
          /**
          * @param {?} pair
          * @return {?}
          */
          function (pair) {
            validateHorizontalPosition('originX', pair.originX);
            validateVerticalPosition('originY', pair.originY);
            validateHorizontalPosition('overlayX', pair.overlayX);
            validateVerticalPosition('overlayY', pair.overlayY);
          });
        }
        /**
         * Adds a single CSS class or an array of classes on the overlay panel.
         * @private
         * @param {?} cssClasses
         * @return {?}
         */

      }, {
        key: "_addPanelClasses",
        value: function _addPanelClasses(cssClasses) {
          var _this20 = this;

          if (this._pane) {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(cssClasses).forEach(
            /**
            * @param {?} cssClass
            * @return {?}
            */
            function (cssClass) {
              if (cssClass !== '' && _this20._appliedPanelClasses.indexOf(cssClass) === -1) {
                _this20._appliedPanelClasses.push(cssClass);

                _this20._pane.classList.add(cssClass);
              }
            });
          }
        }
        /**
         * Clears the classes that the position strategy has applied from the overlay panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_clearPanelClasses",
        value: function _clearPanelClasses() {
          var _this21 = this;

          if (this._pane) {
            this._appliedPanelClasses.forEach(
            /**
            * @param {?} cssClass
            * @return {?}
            */
            function (cssClass) {
              _this21._pane.classList.remove(cssClass);
            });

            this._appliedPanelClasses = [];
          }
        }
        /**
         * Returns the ClientRect of the current origin.
         * @private
         * @return {?}
         */

      }, {
        key: "_getOriginRect",
        value: function _getOriginRect() {
          /** @type {?} */
          var origin = this._origin;

          if (origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]) {
            return origin.nativeElement.getBoundingClientRect();
          } // Check for Element so SVG elements are also supported.


          if (origin instanceof Element) {
            return origin.getBoundingClientRect();
          }
          /** @type {?} */


          var width = origin.width || 0;
          /** @type {?} */

          var height = origin.height || 0; // If the origin is a point, return a client rect as if it was a 0x0 element at the point.

          return {
            top: origin.y,
            bottom: origin.y + height,
            left: origin.x,
            right: origin.x + width,
            height: height,
            width: width
          };
        }
      }, {
        key: "positions",
        get: function get() {
          return this._preferredPositions;
        }
      }]);

      return FlexibleConnectedPositionStrategy;
    }();

    if (false) {}
    /**
     * A simple (x, y) coordinate.
     * @record
     */


    function Point() {}

    if (false) {}
    /**
     * Record of measurements for how an overlay (at a given position) fits into the viewport.
     * @record
     */


    function OverlayFit() {}

    if (false) {}
    /**
     * Record of the measurments determining whether an overlay will fit in a specific position.
     * @record
     */


    function FallbackPosition() {}

    if (false) {}
    /**
     * Position and size of the overlay sizing wrapper for a specific position.
     * @record
     */


    function BoundingBoxRect() {}

    if (false) {}
    /**
     * Record of measures determining how well a given position will fit with flexible dimensions.
     * @record
     */


    function FlexibleFit() {}

    if (false) {}
    /**
     * A connected position as specified by the user.
     * @record
     */


    function ConnectedPosition() {}

    if (false) {}
    /**
     * Shallow-extends a stylesheet object with another stylesheet object.
     * @param {?} destination
     * @param {?} source
     * @return {?}
     */


    function extendStyles(destination, source) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          destination[key] = source[key];
        }
      }

      return destination;
    }
    /**
     * Extracts the pixel value as a number from a value, if it's a number
     * or a CSS pixel string (e.g. `1337px`). Otherwise returns null.
     * @param {?} input
     * @return {?}
     */


    function getPixelValue(input) {
      if (typeof input !== 'number' && input != null) {
        var _input$split = input.split(cssUnitPattern),
            _input$split2 = _slicedToArray(_input$split, 2),
            value = _input$split2[0],
            units = _input$split2[1];

        return !units || units === 'px' ? parseFloat(value) : null;
      }

      return input || null;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/position/connected-position-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A strategy for positioning overlays. Using this strategy, an overlay is given an
     * implicit position relative to some origin element. The relative position is defined in terms of
     * a point on the origin element that is connected to a point on the overlay element. For example,
     * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
     * of the overlay.
     * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
     * \@breaking-change 8.0.0
     */


    var ConnectedPositionStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} originPos
       * @param {?} overlayPos
       * @param {?} connectedTo
       * @param {?} viewportRuler
       * @param {?} document
       * @param {?} platform
       * @param {?} overlayContainer
       */
      function ConnectedPositionStrategy(originPos, overlayPos, connectedTo, viewportRuler, document, platform, overlayContainer) {
        _classCallCheck(this, ConnectedPositionStrategy);

        /**
         * Ordered list of preferred positions, from most to least desirable.
         */
        this._preferredPositions = []; // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
        // the extra logic, we create an instance of the positioning strategy that has some
        // defaults that make it behave as the old position strategy and to which we'll
        // proxy all of the API calls.

        this._positionStrategy = new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform, overlayContainer).withFlexibleDimensions(false).withPush(false).withViewportMargin(0);
        this.withFallbackPosition(originPos, overlayPos);
      }
      /**
       * Whether the we're dealing with an RTL context
       * @return {?}
       */


      _createClass(ConnectedPositionStrategy, [{
        key: "attach",

        /**
         * Attach this position strategy to an overlay.
         * @param {?} overlayRef
         * @return {?}
         */
        value: function attach(overlayRef) {
          this._overlayRef = overlayRef;

          this._positionStrategy.attach(overlayRef);

          if (this._direction) {
            overlayRef.setDirection(this._direction);
            this._direction = null;
          }
        }
        /**
         * Disposes all resources used by the position strategy.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          this._positionStrategy.dispose();
        }
        /**
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this._positionStrategy.detach();
        }
        /**
         * Updates the position of the overlay element, using whichever preferred position relative
         * to the origin fits on-screen.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "apply",
        value: function apply() {
          this._positionStrategy.apply();
        }
        /**
         * Re-positions the overlay element with the trigger in its last calculated position,
         * even if a position higher in the "preferred positions" list would now fit. This
         * allows one to re-align the panel without changing the orientation of the panel.
         * @return {?}
         */

      }, {
        key: "recalculateLastPosition",
        value: function recalculateLastPosition() {
          this._positionStrategy.reapplyLastPosition();
        }
        /**
         * Sets the list of Scrollable containers that host the origin element so that
         * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
         * Scrollable must be an ancestor element of the strategy's origin element.
         * @param {?} scrollables
         * @return {?}
         */

      }, {
        key: "withScrollableContainers",
        value: function withScrollableContainers(scrollables) {
          this._positionStrategy.withScrollableContainers(scrollables);
        }
        /**
         * Adds a new preferred fallback position.
         * @template THIS
         * @this {THIS}
         * @param {?} originPos
         * @param {?} overlayPos
         * @param {?=} offsetX
         * @param {?=} offsetY
         * @return {THIS}
         */

      }, {
        key: "withFallbackPosition",
        value: function withFallbackPosition(originPos, overlayPos, offsetX, offsetY) {
          /** @type {?} */
          var position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);

          /** @type {?} */
          this._preferredPositions.push(position);

          /** @type {?} */
          this._positionStrategy.withPositions(
          /** @type {?} */
          this._preferredPositions);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the layout direction so the overlay's position can be adjusted to match.
         * @template THIS
         * @this {THIS}
         * @param {?} dir New layout direction.
         * @return {THIS}
         */

      }, {
        key: "withDirection",
        value: function withDirection(dir) {
          // Since the direction might be declared before the strategy is attached,
          // we save the value in a temporary property and we'll transfer it to the
          // overlay ref on attachment.
          if (
          /** @type {?} */
          this._overlayRef) {
            /** @type {?} */
            this._overlayRef.setDirection(dir);
          } else {
            /** @type {?} */
            this._direction = dir;
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets an offset for the overlay's connection point on the x-axis
         * @template THIS
         * @this {THIS}
         * @param {?} offset New offset in the X axis.
         * @return {THIS}
         */

      }, {
        key: "withOffsetX",
        value: function withOffsetX(offset) {
          /** @type {?} */
          this._positionStrategy.withDefaultOffsetX(offset);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets an offset for the overlay's connection point on the y-axis
         * @template THIS
         * @this {THIS}
         * @param {?} offset New offset in the Y axis.
         * @return {THIS}
         */

      }, {
        key: "withOffsetY",
        value: function withOffsetY(offset) {
          /** @type {?} */
          this._positionStrategy.withDefaultOffsetY(offset);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets whether the overlay's position should be locked in after it is positioned
         * initially. When an overlay is locked in, it won't attempt to reposition itself
         * when the position is re-applied (e.g. when the user scrolls away).
         * @template THIS
         * @this {THIS}
         * @param {?} isLocked Whether the overlay should locked in.
         * @return {THIS}
         */

      }, {
        key: "withLockedPosition",
        value: function withLockedPosition(isLocked) {
          /** @type {?} */
          this._positionStrategy.withLockedPosition(isLocked);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Overwrites the current set of positions with an array of new ones.
         * @template THIS
         * @this {THIS}
         * @param {?} positions Position pairs to be set on the strategy.
         * @return {THIS}
         */

      }, {
        key: "withPositions",
        value: function withPositions(positions) {
          /** @type {?} */
          this._preferredPositions = positions.slice();

          /** @type {?} */
          this._positionStrategy.withPositions(
          /** @type {?} */
          this._preferredPositions);

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the origin element, relative to which to position the overlay.
         * @template THIS
         * @this {THIS}
         * @param {?} origin Reference to the new origin element.
         * @return {THIS}
         */

      }, {
        key: "setOrigin",
        value: function setOrigin(origin) {
          /** @type {?} */
          this._positionStrategy.setOrigin(origin);

          return (
            /** @type {?} */
            this
          );
        }
      }, {
        key: "_isRtl",
        get: function get() {
          return this._overlayRef.getDirection() === 'rtl';
        }
        /**
         * Emits an event when the connection point changes.
         * @return {?}
         */

      }, {
        key: "onPositionChange",
        get: function get() {
          return this._positionStrategy.positionChanges;
        }
        /**
         * Ordered list of preferred positions, from most to least desirable.
         * @return {?}
         */

      }, {
        key: "positions",
        get: function get() {
          return this._preferredPositions;
        }
      }]);

      return ConnectedPositionStrategy;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/position/global-position-strategy.ts
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
     * Class to be added to the overlay pane wrapper.
     * @type {?}
     */


    var wrapperClass = 'cdk-global-overlay-wrapper';
    /**
     * A strategy for positioning overlays. Using this strategy, an overlay is given an
     * explicit position relative to the browser's viewport. We use flexbox, instead of
     * transforms, in order to avoid issues with subpixel rendering which can cause the
     * element to become blurry.
     */

    var GlobalPositionStrategy = /*#__PURE__*/function () {
      function GlobalPositionStrategy() {
        _classCallCheck(this, GlobalPositionStrategy);

        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
      }
      /**
       * @param {?} overlayRef
       * @return {?}
       */


      _createClass(GlobalPositionStrategy, [{
        key: "attach",
        value: function attach(overlayRef) {
          /** @type {?} */
          var config = overlayRef.getConfig();
          this._overlayRef = overlayRef;

          if (this._width && !config.width) {
            overlayRef.updateSize({
              width: this._width
            });
          }

          if (this._height && !config.height) {
            overlayRef.updateSize({
              height: this._height
            });
          }

          overlayRef.hostElement.classList.add(wrapperClass);
          this._isDisposed = false;
        }
        /**
         * Sets the top position of the overlay. Clears any previously set vertical position.
         * @template THIS
         * @this {THIS}
         * @param {?=} value New top offset.
         * @return {THIS}
         */

      }, {
        key: "top",
        value: function top() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this._bottomOffset = '';

          /** @type {?} */
          this._topOffset = value;

          /** @type {?} */
          this._alignItems = 'flex-start';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the left position of the overlay. Clears any previously set horizontal position.
         * @template THIS
         * @this {THIS}
         * @param {?=} value New left offset.
         * @return {THIS}
         */

      }, {
        key: "left",
        value: function left() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this._rightOffset = '';

          /** @type {?} */
          this._leftOffset = value;

          /** @type {?} */
          this._justifyContent = 'flex-start';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the bottom position of the overlay. Clears any previously set vertical position.
         * @template THIS
         * @this {THIS}
         * @param {?=} value New bottom offset.
         * @return {THIS}
         */

      }, {
        key: "bottom",
        value: function bottom() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this._topOffset = '';

          /** @type {?} */
          this._bottomOffset = value;

          /** @type {?} */
          this._alignItems = 'flex-end';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the right position of the overlay. Clears any previously set horizontal position.
         * @template THIS
         * @this {THIS}
         * @param {?=} value New right offset.
         * @return {THIS}
         */

      }, {
        key: "right",
        value: function right() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this._leftOffset = '';

          /** @type {?} */
          this._rightOffset = value;

          /** @type {?} */
          this._justifyContent = 'flex-end';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the overlay width and clears any previously set width.
         * @deprecated Pass the `width` through the `OverlayConfig`.
         * \@breaking-change 8.0.0
         * @template THIS
         * @this {THIS}
         * @param {?=} value New width for the overlay
         * @return {THIS}
         */

      }, {
        key: "width",
        value: function width() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          if (
          /** @type {?} */
          this._overlayRef) {
            /** @type {?} */
            this._overlayRef.updateSize({
              width: value
            });
          } else {
            /** @type {?} */
            this._width = value;
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Sets the overlay height and clears any previously set height.
         * @deprecated Pass the `height` through the `OverlayConfig`.
         * \@breaking-change 8.0.0
         * @template THIS
         * @this {THIS}
         * @param {?=} value New height for the overlay
         * @return {THIS}
         */

      }, {
        key: "height",
        value: function height() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          if (
          /** @type {?} */
          this._overlayRef) {
            /** @type {?} */
            this._overlayRef.updateSize({
              height: value
            });
          } else {
            /** @type {?} */
            this._height = value;
          }

          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Centers the overlay horizontally with an optional offset.
         * Clears any previously set horizontal position.
         *
         * @template THIS
         * @this {THIS}
         * @param {?=} offset Overlay offset from the horizontal center.
         * @return {THIS}
         */

      }, {
        key: "centerHorizontally",
        value: function centerHorizontally() {
          var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this.left(offset);

          /** @type {?} */
          this._justifyContent = 'center';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Centers the overlay vertically with an optional offset.
         * Clears any previously set vertical position.
         *
         * @template THIS
         * @this {THIS}
         * @param {?=} offset Overlay offset from the vertical center.
         * @return {THIS}
         */

      }, {
        key: "centerVertically",
        value: function centerVertically() {
          var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          /** @type {?} */
          this.top(offset);

          /** @type {?} */
          this._alignItems = 'center';
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Apply the position to the element.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "apply",
        value: function apply() {
          // Since the overlay ref applies the strategy asynchronously, it could
          // have been disposed before it ends up being applied. If that is the
          // case, we shouldn't do anything.
          if (!this._overlayRef || !this._overlayRef.hasAttached()) {
            return;
          }
          /** @type {?} */


          var styles = this._overlayRef.overlayElement.style;
          /** @type {?} */

          var parentStyles = this._overlayRef.hostElement.style;
          /** @type {?} */

          var config = this._overlayRef.getConfig();

          var width = config.width,
              height = config.height,
              maxWidth = config.maxWidth,
              maxHeight = config.maxHeight;
          /** @type {?} */

          var shouldBeFlushHorizontally = (width === '100%' || width === '100vw') && (!maxWidth || maxWidth === '100%' || maxWidth === '100vw');
          /** @type {?} */

          var shouldBeFlushVertically = (height === '100%' || height === '100vh') && (!maxHeight || maxHeight === '100%' || maxHeight === '100vh');
          styles.position = this._cssPosition;
          styles.marginLeft = shouldBeFlushHorizontally ? '0' : this._leftOffset;
          styles.marginTop = shouldBeFlushVertically ? '0' : this._topOffset;
          styles.marginBottom = this._bottomOffset;
          styles.marginRight = this._rightOffset;

          if (shouldBeFlushHorizontally) {
            parentStyles.justifyContent = 'flex-start';
          } else if (this._justifyContent === 'center') {
            parentStyles.justifyContent = 'center';
          } else if (this._overlayRef.getConfig().direction === 'rtl') {
            // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
            // don't want that because our positioning is explicitly `left` and `right`, hence
            // why we do another inversion to ensure that the overlay stays in the same position.
            // TODO: reconsider this if we add `start` and `end` methods.
            if (this._justifyContent === 'flex-start') {
              parentStyles.justifyContent = 'flex-end';
            } else if (this._justifyContent === 'flex-end') {
              parentStyles.justifyContent = 'flex-start';
            }
          } else {
            parentStyles.justifyContent = this._justifyContent;
          }

          parentStyles.alignItems = shouldBeFlushVertically ? 'flex-start' : this._alignItems;
        }
        /**
         * Cleans up the DOM changes from the position strategy.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this._isDisposed || !this._overlayRef) {
            return;
          }
          /** @type {?} */


          var styles = this._overlayRef.overlayElement.style;
          /** @type {?} */

          var parent = this._overlayRef.hostElement;
          /** @type {?} */

          var parentStyles = parent.style;
          parent.classList.remove(wrapperClass);
          parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
          this._overlayRef =
          /** @type {?} */
          null;
          this._isDisposed = true;
        }
      }]);

      return GlobalPositionStrategy;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/position/overlay-position-builder.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Builder for overlay position strategy.
     */


    var OverlayPositionBuilder = /*#__PURE__*/function () {
      /**
       * @param {?} _viewportRuler
       * @param {?} _document
       * @param {?} _platform
       * @param {?} _overlayContainer
       */
      function OverlayPositionBuilder(_viewportRuler, _document, _platform, _overlayContainer) {
        _classCallCheck(this, OverlayPositionBuilder);

        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
      }
      /**
       * Creates a global position strategy.
       * @return {?}
       */


      _createClass(OverlayPositionBuilder, [{
        key: "global",
        value: function global() {
          return new GlobalPositionStrategy();
        }
        /**
         * Creates a relative position strategy.
         * @deprecated Use `flexibleConnectedTo` instead.
         * \@breaking-change 8.0.0
         * @param {?} elementRef
         * @param {?} originPos
         * @param {?} overlayPos
         * @return {?}
         */

      }, {
        key: "connectedTo",
        value: function connectedTo(elementRef, originPos, overlayPos) {
          return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
        }
        /**
         * Creates a flexible position strategy.
         * @param {?} origin Origin relative to which to position the overlay.
         * @return {?}
         */

      }, {
        key: "flexibleConnectedTo",
        value: function flexibleConnectedTo(origin) {
          return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
        }
      }]);

      return OverlayPositionBuilder;
    }();

    OverlayPositionBuilder.ɵfac = function OverlayPositionBuilder_Factory(t) {
      return new (t || OverlayPositionBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayContainer));
    };
    /** @nocollapse */


    OverlayPositionBuilder.ctorParameters = function () {
      return [{
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: OverlayContainer
      }];
    };
    /** @nocollapse */


    OverlayPositionBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function OverlayPositionBuilder_Factory() {
        return new OverlayPositionBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(OverlayContainer));
      },
      token: OverlayPositionBuilder,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayPositionBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: OverlayContainer
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/overlay.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Next overlay unique ID.
     * @type {?}
     */


    var nextUniqueId = 0; // Note that Overlay is *not* scoped to the app root because of the ComponentFactoryResolver
    // which needs to be different depending on where OverlayModule is imported.

    /**
     * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
     * used as a low-level building block for other components. Dialogs, tooltips, menus,
     * selects, etc. can all be built using overlays. The service should primarily be used by authors
     * of re-usable components rather than developers building end-user applications.
     *
     * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
     */

    var Overlay = /*#__PURE__*/function () {
      /**
       * @param {?} scrollStrategies
       * @param {?} _overlayContainer
       * @param {?} _componentFactoryResolver
       * @param {?} _positionBuilder
       * @param {?} _keyboardDispatcher
       * @param {?} _injector
       * @param {?} _ngZone
       * @param {?} _document
       * @param {?} _directionality
       * @param {?=} _location
       */
      function Overlay(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, _location) {
        _classCallCheck(this, Overlay);

        this.scrollStrategies = scrollStrategies;
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._positionBuilder = _positionBuilder;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._injector = _injector;
        this._ngZone = _ngZone;
        this._document = _document;
        this._directionality = _directionality;
        this._location = _location;
      }
      /**
       * Creates an overlay.
       * @param {?=} config Configuration applied to the overlay.
       * @return {?} Reference to the created overlay.
       */


      _createClass(Overlay, [{
        key: "create",
        value: function create(config) {
          /** @type {?} */
          var host = this._createHostElement();
          /** @type {?} */


          var pane = this._createPaneElement(host);
          /** @type {?} */


          var portalOutlet = this._createPortalOutlet(pane);
          /** @type {?} */


          var overlayConfig = new OverlayConfig(config);
          overlayConfig.direction = overlayConfig.direction || this._directionality.value;
          return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location);
        }
        /**
         * Gets a position builder that can be used, via fluent API,
         * to construct and configure a position strategy.
         * @return {?} An overlay position builder.
         */

      }, {
        key: "position",
        value: function position() {
          return this._positionBuilder;
        }
        /**
         * Creates the DOM element for an overlay and appends it to the overlay container.
         * @private
         * @param {?} host
         * @return {?} Newly-created pane element
         */

      }, {
        key: "_createPaneElement",
        value: function _createPaneElement(host) {
          /** @type {?} */
          var pane = this._document.createElement('div');

          pane.id = "cdk-overlay-".concat(nextUniqueId++);
          pane.classList.add('cdk-overlay-pane');
          host.appendChild(pane);
          return pane;
        }
        /**
         * Creates the host element that wraps around an overlay
         * and can be used for advanced positioning.
         * @private
         * @return {?} Newly-create host element.
         */

      }, {
        key: "_createHostElement",
        value: function _createHostElement() {
          /** @type {?} */
          var host = this._document.createElement('div');

          this._overlayContainer.getContainerElement().appendChild(host);

          return host;
        }
        /**
         * Create a DomPortalOutlet into which the overlay content can be loaded.
         * @private
         * @param {?} pane The DOM element to turn into a portal outlet.
         * @return {?} A portal outlet for the given DOM element.
         */

      }, {
        key: "_createPortalOutlet",
        value: function _createPortalOutlet(pane) {
          // We have to resolve the ApplicationRef later in order to allow people
          // to use overlay-based providers during app initialization.
          if (!this._appRef) {
            this._appRef = this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]);
          }

          return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["DomPortalOutlet"](pane, this._componentFactoryResolver, this._appRef, this._injector, this._document);
        }
      }]);

      return Overlay;
    }();

    Overlay.ɵfac = function Overlay_Factory(t) {
      return new (t || Overlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ScrollStrategyOptions), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayPositionBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayKeyboardDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], 8));
    };

    Overlay.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: Overlay,
      factory: Overlay.ɵfac
    });
    /** @nocollapse */

    Overlay.ctorParameters = function () {
      return [{
        type: ScrollStrategyOptions
      }, {
        type: OverlayContainer
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: OverlayPositionBuilder
      }, {
        type: OverlayKeyboardDispatcher
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Overlay, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: ScrollStrategyOptions
        }, {
          type: OverlayContainer
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: OverlayPositionBuilder
        }, {
          type: OverlayKeyboardDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/overlay-directives.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default set of positions for the overlay. Follows the behavior of a dropdown.
     * @type {?}
     */


    var defaultPositionList = [{
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top'
    }, {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom'
    }, {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom'
    }, {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top'
    }];
    /**
     * Injection token that determines the scroll handling while the connected overlay is open.
     * @type {?}
     */

    var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-connected-overlay-scroll-strategy');
    /**
     * \@docs-private \@deprecated \@breaking-change 8.0.0
     * @param {?} overlay
     * @return {?}
     */

    function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_FACTORY(overlay) {
      return (
        /**
        * @param {?=} config
        * @return {?}
        */
        function (config) {
          return overlay.scrollStrategies.reposition(config);
        }
      );
    }
    /**
     * Directive applied to an element to make it usable as an origin for an Overlay using a
     * ConnectedPositionStrategy.
     */


    var CdkOverlayOrigin =
    /**
     * @param {?} elementRef
     */
    function CdkOverlayOrigin(elementRef) {
      _classCallCheck(this, CdkOverlayOrigin);

      this.elementRef = elementRef;
    };

    CdkOverlayOrigin.ɵfac = function CdkOverlayOrigin_Factory(t) {
      return new (t || CdkOverlayOrigin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    CdkOverlayOrigin.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkOverlayOrigin,
      selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]],
      exportAs: ["cdkOverlayOrigin"]
    });
    /** @nocollapse */

    CdkOverlayOrigin.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkOverlayOrigin, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
          exportAs: 'cdkOverlayOrigin'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Directive to facilitate declarative creation of an
     * Overlay using a FlexibleConnectedPositionStrategy.
     */


    var CdkConnectedOverlay = /*#__PURE__*/function () {
      // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.

      /**
       * @param {?} _overlay
       * @param {?} templateRef
       * @param {?} viewContainerRef
       * @param {?} scrollStrategyFactory
       * @param {?} _dir
       */
      function CdkConnectedOverlay(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
        _classCallCheck(this, CdkConnectedOverlay);

        this._overlay = _overlay;
        this._dir = _dir;
        this._hasBackdrop = false;
        this._lockPosition = false;
        this._growAfterOpen = false;
        this._flexibleDimensions = false;
        this._push = false;
        this._backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /**
         * Margin between the overlay and the viewport edges.
         */

        this.viewportMargin = 0;
        /**
         * Whether the overlay is open.
         */

        this.open = false;
        /**
         * Event emitted when the backdrop is clicked.
         */

        this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitted when the position has changed.
         */

        this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been attached.
         */

        this.attach = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been detached.
         */

        this.detach = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when there are keyboard events that are targeted at the overlay.
         */

        this.overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["TemplatePortal"](templateRef, viewContainerRef);
        this._scrollStrategyFactory = scrollStrategyFactory;
        this.scrollStrategy = this._scrollStrategyFactory();
      }
      /**
       * The offset in pixels for the overlay connection point on the x-axis
       * @return {?}
       */


      _createClass(CdkConnectedOverlay, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          if (this._overlayRef) {
            this._overlayRef.dispose();
          }

          this._backdropSubscription.unsubscribe();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this._position) {
            this._updatePositionStrategy(this._position);

            this._overlayRef.updateSize({
              width: this.width,
              minWidth: this.minWidth,
              height: this.height,
              minHeight: this.minHeight
            });

            if (changes['origin'] && this.open) {
              this._position.apply();
            }
          }

          if (changes['open']) {
            this.open ? this._attachOverlay() : this._detachOverlay();
          }
        }
        /**
         * Creates an overlay
         * @private
         * @return {?}
         */

      }, {
        key: "_createOverlay",
        value: function _createOverlay() {
          var _this22 = this;

          if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
          }

          this._overlayRef = this._overlay.create(this._buildConfig());

          this._overlayRef.keydownEvents().subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this22.overlayKeydown.next(event);

            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event)) {
              event.preventDefault();

              _this22._detachOverlay();
            }
          });
        }
        /**
         * Builds the overlay config based on the directive's inputs
         * @private
         * @return {?}
         */

      }, {
        key: "_buildConfig",
        value: function _buildConfig() {
          /** @type {?} */
          var positionStrategy = this._position = this.positionStrategy || this._createPositionStrategy();
          /** @type {?} */


          var overlayConfig = new OverlayConfig({
            direction: this._dir,
            positionStrategy: positionStrategy,
            scrollStrategy: this.scrollStrategy,
            hasBackdrop: this.hasBackdrop
          });

          if (this.width || this.width === 0) {
            overlayConfig.width = this.width;
          }

          if (this.height || this.height === 0) {
            overlayConfig.height = this.height;
          }

          if (this.minWidth || this.minWidth === 0) {
            overlayConfig.minWidth = this.minWidth;
          }

          if (this.minHeight || this.minHeight === 0) {
            overlayConfig.minHeight = this.minHeight;
          }

          if (this.backdropClass) {
            overlayConfig.backdropClass = this.backdropClass;
          }

          if (this.panelClass) {
            overlayConfig.panelClass = this.panelClass;
          }

          return overlayConfig;
        }
        /**
         * Updates the state of a position strategy, based on the values of the directive inputs.
         * @private
         * @param {?} positionStrategy
         * @return {?}
         */

      }, {
        key: "_updatePositionStrategy",
        value: function _updatePositionStrategy(positionStrategy) {
          var _this23 = this;

          /** @type {?} */
          var positions = this.positions.map(
          /**
          * @param {?} currentPosition
          * @return {?}
          */
          function (currentPosition) {
            return {
              originX: currentPosition.originX,
              originY: currentPosition.originY,
              overlayX: currentPosition.overlayX,
              overlayY: currentPosition.overlayY,
              offsetX: currentPosition.offsetX || _this23.offsetX,
              offsetY: currentPosition.offsetY || _this23.offsetY,
              panelClass: currentPosition.panelClass || undefined
            };
          });
          return positionStrategy.setOrigin(this.origin.elementRef).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector);
        }
        /**
         * Returns the position strategy of the overlay to be set on the overlay config
         * @private
         * @return {?}
         */

      }, {
        key: "_createPositionStrategy",
        value: function _createPositionStrategy() {
          var _this24 = this;

          /** @type {?} */
          var strategy = this._overlay.position().flexibleConnectedTo(this.origin.elementRef);

          this._updatePositionStrategy(strategy);

          strategy.positionChanges.subscribe(
          /**
          * @param {?} p
          * @return {?}
          */
          function (p) {
            return _this24.positionChange.emit(p);
          });
          return strategy;
        }
        /**
         * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
         * @private
         * @return {?}
         */

      }, {
        key: "_attachOverlay",
        value: function _attachOverlay() {
          var _this25 = this;

          if (!this._overlayRef) {
            this._createOverlay();
          } else {
            // Update the overlay size, in case the directive's inputs have changed
            this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
          }

          if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._templatePortal);

            this.attach.emit();
          }

          if (this.hasBackdrop) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              _this25.backdropClick.emit(event);
            });
          } else {
            this._backdropSubscription.unsubscribe();
          }
        }
        /**
         * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
         * @private
         * @return {?}
         */

      }, {
        key: "_detachOverlay",
        value: function _detachOverlay() {
          if (this._overlayRef) {
            this._overlayRef.detach();

            this.detach.emit();
          }

          this._backdropSubscription.unsubscribe();
        }
      }, {
        key: "offsetX",
        get: function get() {
          return this._offsetX;
        }
        /**
         * @param {?} offsetX
         * @return {?}
         */
        ,
        set: function set(offsetX) {
          this._offsetX = offsetX;

          if (this._position) {
            this._updatePositionStrategy(this._position);
          }
        }
        /**
         * The offset in pixels for the overlay connection point on the y-axis
         * @return {?}
         */

      }, {
        key: "offsetY",
        get: function get() {
          return this._offsetY;
        }
        /**
         * @param {?} offsetY
         * @return {?}
         */
        ,
        set: function set(offsetY) {
          this._offsetY = offsetY;

          if (this._position) {
            this._updatePositionStrategy(this._position);
          }
        }
        /**
         * Whether or not the overlay should attach a backdrop.
         * @return {?}
         */

      }, {
        key: "hasBackdrop",
        get: function get() {
          return this._hasBackdrop;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether or not the overlay should be locked when scrolling.
         * @return {?}
         */

      }, {
        key: "lockPosition",
        get: function get() {
          return this._lockPosition;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._lockPosition = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the overlay's width and height can be constrained to fit within the viewport.
         * @return {?}
         */

      }, {
        key: "flexibleDimensions",
        get: function get() {
          return this._flexibleDimensions;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._flexibleDimensions = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the overlay can grow after the initial open when flexible positioning is turned on.
         * @return {?}
         */

      }, {
        key: "growAfterOpen",
        get: function get() {
          return this._growAfterOpen;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._growAfterOpen = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the overlay can be pushed on-screen if none of the provided positions fit.
         * @return {?}
         */

      }, {
        key: "push",
        get: function get() {
          return this._push;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._push = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * The associated overlay reference.
         * @return {?}
         */

      }, {
        key: "overlayRef",
        get: function get() {
          return this._overlayRef;
        }
        /**
         * The element's layout direction.
         * @return {?}
         */

      }, {
        key: "dir",
        get: function get() {
          return this._dir ? this._dir.value : 'ltr';
        }
      }]);

      return CdkConnectedOverlay;
    }();

    CdkConnectedOverlay.ɵfac = function CdkConnectedOverlay_Factory(t) {
      return new (t || CdkConnectedOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8));
    };

    CdkConnectedOverlay.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkConnectedOverlay,
      selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]],
      inputs: {
        viewportMargin: ["cdkConnectedOverlayViewportMargin", "viewportMargin"],
        open: ["cdkConnectedOverlayOpen", "open"],
        scrollStrategy: ["cdkConnectedOverlayScrollStrategy", "scrollStrategy"],
        offsetX: ["cdkConnectedOverlayOffsetX", "offsetX"],
        offsetY: ["cdkConnectedOverlayOffsetY", "offsetY"],
        hasBackdrop: ["cdkConnectedOverlayHasBackdrop", "hasBackdrop"],
        lockPosition: ["cdkConnectedOverlayLockPosition", "lockPosition"],
        flexibleDimensions: ["cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions"],
        growAfterOpen: ["cdkConnectedOverlayGrowAfterOpen", "growAfterOpen"],
        push: ["cdkConnectedOverlayPush", "push"],
        positions: ["cdkConnectedOverlayPositions", "positions"],
        origin: ["cdkConnectedOverlayOrigin", "origin"],
        positionStrategy: ["cdkConnectedOverlayPositionStrategy", "positionStrategy"],
        width: ["cdkConnectedOverlayWidth", "width"],
        height: ["cdkConnectedOverlayHeight", "height"],
        minWidth: ["cdkConnectedOverlayMinWidth", "minWidth"],
        minHeight: ["cdkConnectedOverlayMinHeight", "minHeight"],
        backdropClass: ["cdkConnectedOverlayBackdropClass", "backdropClass"],
        panelClass: ["cdkConnectedOverlayPanelClass", "panelClass"],
        transformOriginSelector: ["cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"]
      },
      outputs: {
        backdropClick: "backdropClick",
        positionChange: "positionChange",
        attach: "attach",
        detach: "detach",
        overlayKeydown: "overlayKeydown"
      },
      exportAs: ["cdkConnectedOverlay"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    CdkConnectedOverlay.ctorParameters = function () {
      return [{
        type: Overlay
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    CdkConnectedOverlay.propDecorators = {
      origin: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayOrigin']
      }],
      positions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayPositions']
      }],
      positionStrategy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayPositionStrategy']
      }],
      offsetX: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayOffsetX']
      }],
      offsetY: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayOffsetY']
      }],
      width: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayWidth']
      }],
      height: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayHeight']
      }],
      minWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayMinWidth']
      }],
      minHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayMinHeight']
      }],
      backdropClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayBackdropClass']
      }],
      panelClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayPanelClass']
      }],
      viewportMargin: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayViewportMargin']
      }],
      scrollStrategy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayScrollStrategy']
      }],
      open: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayOpen']
      }],
      transformOriginSelector: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayTransformOriginOn']
      }],
      hasBackdrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayHasBackdrop']
      }],
      lockPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayLockPosition']
      }],
      flexibleDimensions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayFlexibleDimensions']
      }],
      growAfterOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayGrowAfterOpen']
      }],
      push: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayPush']
      }],
      backdropClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      positionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      attach: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      detach: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      overlayKeydown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkConnectedOverlay, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
          exportAs: 'cdkConnectedOverlay'
        }]
      }], function () {
        return [{
          type: Overlay
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        viewportMargin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayViewportMargin']
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOpen']
        }],
        backdropClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        positionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        attach: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        detach: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        overlayKeydown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        scrollStrategy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayScrollStrategy']
        }],
        offsetX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOffsetX']
        }],
        offsetY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOffsetY']
        }],
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayHasBackdrop']
        }],
        lockPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayLockPosition']
        }],
        flexibleDimensions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayFlexibleDimensions']
        }],
        growAfterOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayGrowAfterOpen']
        }],
        push: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPush']
        }],
        positions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPositions']
        }],
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOrigin']
        }],
        positionStrategy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPositionStrategy']
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayWidth']
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayHeight']
        }],
        minWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayMinWidth']
        }],
        minHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayMinHeight']
        }],
        backdropClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayBackdropClass']
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPanelClass']
        }],
        transformOriginSelector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayTransformOriginOn']
        }]
      });
    })();

    if (false) {}
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */


    function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition();
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
      provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
      deps: [Overlay],
      useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/overlay-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var OverlayModule = function OverlayModule() {
      _classCallCheck(this, OverlayModule);
    };

    OverlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: OverlayModule
    });
    OverlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function OverlayModule_Factory(t) {
        return new (t || OverlayModule)();
      },
      providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER],
      imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OverlayModule, {
        declarations: function declarations() {
          return [CdkConnectedOverlay, CdkOverlayOrigin];
        },
        imports: function imports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]];
        },
        exports: function exports() {
          return [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
          exports: [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
          declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
          providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER]
        }]
      }], null, null);
    })();
    /**
     * @deprecated Use `OverlayModule` instead.
     * \@breaking-change 8.0.0
     * \@docs-private
     * @type {?}
     */


    var OVERLAY_PROVIDERS = [Overlay, OverlayPositionBuilder, OVERLAY_KEYBOARD_DISPATCHER_PROVIDER, OVERLAY_CONTAINER_PROVIDER, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER];
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/fullscreen-overlay-container.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Alternative to OverlayContainer that supports correct displaying of overlay elements in
     * Fullscreen mode
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
     *
     * Should be provided in the root component.
     */

    var FullscreenOverlayContainer = /*#__PURE__*/function (_OverlayContainer) {
      _inherits(FullscreenOverlayContainer, _OverlayContainer);

      var _super2 = _createSuper(FullscreenOverlayContainer);

      /**
       * @param {?} _document
       * @param {?=} platform
       */
      function FullscreenOverlayContainer(_document,
      /**
       * @deprecated `platform` parameter to become required.
       * @breaking-change 10.0.0
       */
      platform) {
        _classCallCheck(this, FullscreenOverlayContainer);

        return _super2.call(this, _document, platform);
      }
      /**
       * @return {?}
       */


      _createClass(FullscreenOverlayContainer, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(FullscreenOverlayContainer.prototype), "ngOnDestroy", this).call(this);

          if (this._fullScreenEventName && this._fullScreenListener) {
            this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
          }
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "_createContainer",
        value: function _createContainer() {
          var _this26 = this;

          _get(_getPrototypeOf(FullscreenOverlayContainer.prototype), "_createContainer", this).call(this);

          this._adjustParentForFullscreenChange();

          this._addFullscreenChangeListener(
          /**
          * @return {?}
          */
          function () {
            return _this26._adjustParentForFullscreenChange();
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_adjustParentForFullscreenChange",
        value: function _adjustParentForFullscreenChange() {
          if (!this._containerElement) {
            return;
          }
          /** @type {?} */


          var fullscreenElement = this.getFullscreenElement();
          /** @type {?} */

          var parent = fullscreenElement || this._document.body;
          parent.appendChild(this._containerElement);
        }
        /**
         * @private
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "_addFullscreenChangeListener",
        value: function _addFullscreenChangeListener(fn) {
          /** @type {?} */
          var eventName = this._getEventName();

          if (eventName) {
            if (this._fullScreenListener) {
              this._document.removeEventListener(eventName, this._fullScreenListener);
            }

            this._document.addEventListener(eventName, fn);

            this._fullScreenListener = fn;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getEventName",
        value: function _getEventName() {
          if (!this._fullScreenEventName) {
            /** @type {?} */
            var _document =
            /** @type {?} */
            this._document;

            if (_document.fullscreenEnabled) {
              this._fullScreenEventName = 'fullscreenchange';
            } else if (_document.webkitFullscreenEnabled) {
              this._fullScreenEventName = 'webkitfullscreenchange';
            } else if (_document.mozFullScreenEnabled) {
              this._fullScreenEventName = 'mozfullscreenchange';
            } else if (_document.msFullscreenEnabled) {
              this._fullScreenEventName = 'MSFullscreenChange';
            }
          }

          return this._fullScreenEventName;
        }
        /**
         * When the page is put into fullscreen mode, a specific element is specified.
         * Only that element and its children are visible when in fullscreen mode.
         * @return {?}
         */

      }, {
        key: "getFullscreenElement",
        value: function getFullscreenElement() {
          /** @type {?} */
          var _document =
          /** @type {?} */
          this._document;
          return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
        }
      }]);

      return FullscreenOverlayContainer;
    }(OverlayContainer);

    FullscreenOverlayContainer.ɵfac = function FullscreenOverlayContainer_Factory(t) {
      return new (t || FullscreenOverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
    };
    /** @nocollapse */


    FullscreenOverlayContainer.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };
    /** @nocollapse */


    FullscreenOverlayContainer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function FullscreenOverlayContainer_Factory() {
        return new FullscreenOverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      },
      token: FullscreenOverlayContainer,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FullscreenOverlayContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/overlay/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=overlay.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js ***!
    \*******************************************************************/

  /*! exports provided: BasePortalHost, BasePortalOutlet, CdkPortal, CdkPortalOutlet, ComponentPortal, DomPortal, DomPortalHost, DomPortalOutlet, Portal, PortalHostDirective, PortalInjector, PortalModule, TemplatePortal, TemplatePortalDirective */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015PortalJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasePortalHost", function () {
      return BasePortalHost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasePortalOutlet", function () {
      return BasePortalOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkPortal", function () {
      return CdkPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet", function () {
      return CdkPortalOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentPortal", function () {
      return ComponentPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomPortal", function () {
      return DomPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomPortalHost", function () {
      return DomPortalHost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomPortalOutlet", function () {
      return DomPortalOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Portal", function () {
      return Portal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalHostDirective", function () {
      return PortalHostDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalInjector", function () {
      return PortalInjector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalModule", function () {
      return PortalModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplatePortal", function () {
      return TemplatePortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplatePortalDirective", function () {
      return TemplatePortalDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/portal/portal-errors.ts
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
     * Throws an exception when attempting to attach a null portal to a host.
     * \@docs-private
     * @return {?}
     */


    function throwNullPortalError() {
      throw Error('Must provide a portal to attach');
    }
    /**
     * Throws an exception when attempting to attach a portal to a host that is already attached.
     * \@docs-private
     * @return {?}
     */


    function throwPortalAlreadyAttachedError() {
      throw Error('Host already has a portal attached');
    }
    /**
     * Throws an exception when attempting to attach a portal to an already-disposed host.
     * \@docs-private
     * @return {?}
     */


    function throwPortalOutletAlreadyDisposedError() {
      throw Error('This PortalOutlet has already been disposed');
    }
    /**
     * Throws an exception when attempting to attach an unknown portal type.
     * \@docs-private
     * @return {?}
     */


    function throwUnknownPortalTypeError() {
      throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' + 'a ComponentPortal or a TemplatePortal.');
    }
    /**
     * Throws an exception when attempting to attach a portal to a null host.
     * \@docs-private
     * @return {?}
     */


    function throwNullPortalOutletError() {
      throw Error('Attempting to attach a portal to a null PortalOutlet');
    }
    /**
     * Throws an exception when attempting to detach a portal that is not attached.
     * \@docs-private
     * @return {?}
     */


    function throwNoPortalAttachedError() {
      throw Error('Attempting to detach a portal that is not attached to a host');
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/portal/portal.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Interface that can be used to generically type a class.
     * @record
     * @template T
     */


    function ComponentType() {}
    /**
     * A `Portal` is something that you want to render somewhere else.
     * It can be attach to / detached from a `PortalOutlet`.
     * @abstract
     * @template T
     */


    var Portal = /*#__PURE__*/function () {
      function Portal() {
        _classCallCheck(this, Portal);
      }

      _createClass(Portal, [{
        key: "attach",

        /**
         * Attach this portal to a host.
         * @param {?} host
         * @return {?}
         */
        value: function attach(host) {
          if (host == null) {
            throwNullPortalOutletError();
          }

          if (host.hasAttached()) {
            throwPortalAlreadyAttachedError();
          }

          this._attachedHost = host;
          return (
            /** @type {?} */
            host.attach(this)
          );
        }
        /**
         * Detach this portal from its host
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          /** @type {?} */
          var host = this._attachedHost;

          if (host == null) {
            throwNoPortalAttachedError();
          } else {
            this._attachedHost = null;
            host.detach();
          }
        }
        /**
         * Whether this portal is attached to a host.
         * @return {?}
         */

      }, {
        key: "setAttachedHost",

        /**
         * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
         * the PortalOutlet when it is performing an `attach()` or `detach()`.
         * @param {?} host
         * @return {?}
         */
        value: function setAttachedHost(host) {
          this._attachedHost = host;
        }
      }, {
        key: "isAttached",
        get: function get() {
          return this._attachedHost != null;
        }
      }]);

      return Portal;
    }();

    if (false) {}
    /**
     * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
     * @template T
     */


    var ComponentPortal = /*#__PURE__*/function (_Portal) {
      _inherits(ComponentPortal, _Portal);

      var _super3 = _createSuper(ComponentPortal);

      /**
       * @param {?} component
       * @param {?=} viewContainerRef
       * @param {?=} injector
       * @param {?=} componentFactoryResolver
       */
      function ComponentPortal(component, viewContainerRef, injector, componentFactoryResolver) {
        var _this27;

        _classCallCheck(this, ComponentPortal);

        _this27 = _super3.call(this);
        _this27.component = component;
        _this27.viewContainerRef = viewContainerRef;
        _this27.injector = injector;
        _this27.componentFactoryResolver = componentFactoryResolver;
        return _this27;
      }

      return ComponentPortal;
    }(Portal);

    if (false) {}
    /**
     * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
     * @template C
     */


    var TemplatePortal = /*#__PURE__*/function (_Portal2) {
      _inherits(TemplatePortal, _Portal2);

      var _super4 = _createSuper(TemplatePortal);

      /**
       * @param {?} template
       * @param {?} viewContainerRef
       * @param {?=} context
       */
      function TemplatePortal(template, viewContainerRef, context) {
        var _this28;

        _classCallCheck(this, TemplatePortal);

        _this28 = _super4.call(this);
        _this28.templateRef = template;
        _this28.viewContainerRef = viewContainerRef;
        _this28.context = context;
        return _this28;
      }
      /**
       * @return {?}
       */


      _createClass(TemplatePortal, [{
        key: "attach",

        /**
         * Attach the portal to the provided `PortalOutlet`.
         * When a context is provided it will override the `context` property of the `TemplatePortal`
         * instance.
         * @param {?} host
         * @param {?=} context
         * @return {?}
         */
        value: function attach(host) {
          var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;
          this.context = context;
          return _get(_getPrototypeOf(TemplatePortal.prototype), "attach", this).call(this, host);
        }
        /**
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this.context = undefined;
          return _get(_getPrototypeOf(TemplatePortal.prototype), "detach", this).call(this);
        }
      }, {
        key: "origin",
        get: function get() {
          return this.templateRef.elementRef;
        }
      }]);

      return TemplatePortal;
    }(Portal);

    if (false) {}
    /**
     * A `DomPortal` is a portal whose DOM element will be taken from its current position
     * in the DOM and moved into a portal outlet, when it is attached. On detach, the content
     * will be restored to its original position.
     * @template T
     */


    var DomPortal = /*#__PURE__*/function (_Portal3) {
      _inherits(DomPortal, _Portal3);

      var _super5 = _createSuper(DomPortal);

      /**
       * @param {?} element
       */
      function DomPortal(element) {
        var _this29;

        _classCallCheck(this, DomPortal);

        _this29 = _super5.call(this);
        _this29.element = element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? element.nativeElement : element;
        return _this29;
      }

      return DomPortal;
    }(Portal);

    if (false) {}
    /**
     * A `PortalOutlet` is an space that can contain a single `Portal`.
     * @record
     */


    function PortalOutlet() {}

    if (false) {}
    /**
     * Partial implementation of PortalOutlet that handles attaching
     * ComponentPortal and TemplatePortal.
     * @abstract
     */


    var BasePortalOutlet = /*#__PURE__*/function () {
      function BasePortalOutlet() {
        _classCallCheck(this, BasePortalOutlet);

        /**
         * Whether this host has already been permanently disposed.
         */
        this._isDisposed = false; // @breaking-change 10.0.0 `attachDomPortal` to become a required abstract method.

        this.attachDomPortal = null;
      }
      /**
       * Whether this host has an attached portal.
       * @return {?}
       */


      _createClass(BasePortalOutlet, [{
        key: "hasAttached",
        value: function hasAttached() {
          return !!this._attachedPortal;
        }
        /**
         * Attaches a portal.
         * @param {?} portal
         * @return {?}
         */

      }, {
        key: "attach",
        value: function attach(portal) {
          if (!portal) {
            throwNullPortalError();
          }

          if (this.hasAttached()) {
            throwPortalAlreadyAttachedError();
          }

          if (this._isDisposed) {
            throwPortalOutletAlreadyDisposedError();
          }

          if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
          } else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal); // @breaking-change 10.0.0 remove null check for `this.attachDomPortal`.
          } else if (this.attachDomPortal && portal instanceof DomPortal) {
            this._attachedPortal = portal;
            return this.attachDomPortal(portal);
          }

          throwUnknownPortalTypeError();
        }
        /**
         * Detaches a previously attached portal.
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);

            this._attachedPortal = null;
          }

          this._invokeDisposeFn();
        }
        /**
         * Permanently dispose of this portal host.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this.hasAttached()) {
            this.detach();
          }

          this._invokeDisposeFn();

          this._isDisposed = true;
        }
        /**
         * \@docs-private
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "setDisposeFn",
        value: function setDisposeFn(fn) {
          this._disposeFn = fn;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_invokeDisposeFn",
        value: function _invokeDisposeFn() {
          if (this._disposeFn) {
            this._disposeFn();

            this._disposeFn = null;
          }
        }
      }]);

      return BasePortalOutlet;
    }();

    if (false) {}
    /**
     * @deprecated Use `BasePortalOutlet` instead.
     * \@breaking-change 9.0.0
     * @abstract
     */


    var BasePortalHost = /*#__PURE__*/function (_BasePortalOutlet) {
      _inherits(BasePortalHost, _BasePortalOutlet);

      var _super6 = _createSuper(BasePortalHost);

      function BasePortalHost() {
        _classCallCheck(this, BasePortalHost);

        return _super6.apply(this, arguments);
      }

      return BasePortalHost;
    }(BasePortalOutlet);
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/portal/dom-portal-outlet.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
     * application context.
     */


    var DomPortalOutlet = /*#__PURE__*/function (_BasePortalOutlet2) {
      _inherits(DomPortalOutlet, _BasePortalOutlet2);

      var _super7 = _createSuper(DomPortalOutlet);

      /**
       * @param {?} outletElement
       * @param {?} _componentFactoryResolver
       * @param {?} _appRef
       * @param {?} _defaultInjector
       * @param {?=} _document
       */
      function DomPortalOutlet(outletElement, _componentFactoryResolver, _appRef, _defaultInjector,
      /**
       * @deprecated `_document` Parameter to be made required.
       * @breaking-change 10.0.0
       */
      _document) {
        var _thisSuper, _this30;

        _classCallCheck(this, DomPortalOutlet);

        _this30 = _super7.call(this);
        _this30.outletElement = outletElement;
        _this30._componentFactoryResolver = _componentFactoryResolver;
        _this30._appRef = _appRef;
        _this30._defaultInjector = _defaultInjector;
        /**
         * Attaches a DOM portal by transferring its content into the outlet.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * \@breaking-change 10.0.0
         */

        _this30.attachDomPortal =
        /**
        * @param {?} portal
        * @return {?}
        */
        function (portal) {
          // @breaking-change 10.0.0 Remove check and error once the
          // `_document` constructor parameter is required.
          if (!_this30._document) {
            throw Error('Cannot attach DOM portal without _document constructor parameter');
          }
          /** @type {?} */


          var element = portal.element;

          if (!element.parentNode) {
            throw Error('DOM portal content must be attached to a parent node.');
          } // Anchor used to save the element's previous position so
          // that we can restore it when the portal is detached.

          /** @type {?} */


          var anchorNode = _this30._document.createComment('dom-portal');

          element.parentNode.insertBefore(anchorNode, element);

          _this30.outletElement.appendChild(element);

          _get((_thisSuper = _assertThisInitialized(_this30), _getPrototypeOf(DomPortalOutlet.prototype)), "setDisposeFn", _thisSuper).call(_thisSuper,
          /**
          * @return {?}
          */
          function () {
            // We can't use `replaceWith` here because IE doesn't support it.
            if (anchorNode.parentNode) {
              anchorNode.parentNode.replaceChild(element, anchorNode);
            }
          });
        };

        _this30._document = _document;
        return _this30;
      }
      /**
       * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
       * @template T
       * @param {?} portal Portal to be attached
       * @return {?} Reference to the created component.
       */


      _createClass(DomPortalOutlet, [{
        key: "attachComponentPortal",
        value: function attachComponentPortal(portal) {
          var _this31 = this;

          /** @type {?} */
          var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
          /** @type {?} */

          var componentFactory = resolver.resolveComponentFactory(portal.component);
          /** @type {?} */

          var componentRef; // If the portal specifies a ViewContainerRef, we will use that as the attachment point
          // for the component (in terms of Angular's component tree, not rendering).
          // When the ViewContainerRef is missing, we use the factory to create the component directly
          // and then manually attach the view to the application.

          if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector);
            this.setDisposeFn(
            /**
            * @return {?}
            */
            function () {
              return componentRef.destroy();
            });
          } else {
            componentRef = componentFactory.create(portal.injector || this._defaultInjector);

            this._appRef.attachView(componentRef.hostView);

            this.setDisposeFn(
            /**
            * @return {?}
            */
            function () {
              _this31._appRef.detachView(componentRef.hostView);

              componentRef.destroy();
            });
          } // At this point the component has been instantiated, so we move it to the location in the DOM
          // where we want it to be rendered.


          this.outletElement.appendChild(this._getComponentRootNode(componentRef));
          return componentRef;
        }
        /**
         * Attaches a template portal to the DOM as an embedded view.
         * @template C
         * @param {?} portal Portal to be attached.
         * @return {?} Reference to the created embedded view.
         */

      }, {
        key: "attachTemplatePortal",
        value: function attachTemplatePortal(portal) {
          var _this32 = this;

          /** @type {?} */
          var viewContainer = portal.viewContainerRef;
          /** @type {?} */

          var viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context);
          viewRef.detectChanges(); // The method `createEmbeddedView` will add the view as a child of the viewContainer.
          // But for the DomPortalOutlet the view can be added everywhere in the DOM
          // (e.g Overlay Container) To move the view to the specified host element. We just
          // re-append the existing root nodes.

          viewRef.rootNodes.forEach(
          /**
          * @param {?} rootNode
          * @return {?}
          */
          function (rootNode) {
            return _this32.outletElement.appendChild(rootNode);
          });
          this.setDisposeFn(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var index = viewContainer.indexOf(viewRef);

            if (index !== -1) {
              viewContainer.remove(index);
            }
          }); // TODO(jelbourn): Return locals from view.

          return viewRef;
        }
        /**
         * Clears out a portal from the DOM.
         * @return {?}
         */

      }, {
        key: "dispose",
        value: function dispose() {
          _get(_getPrototypeOf(DomPortalOutlet.prototype), "dispose", this).call(this);

          if (this.outletElement.parentNode != null) {
            this.outletElement.parentNode.removeChild(this.outletElement);
          }
        }
        /**
         * Gets the root HTMLElement for an instantiated component.
         * @private
         * @param {?} componentRef
         * @return {?}
         */

      }, {
        key: "_getComponentRootNode",
        value: function _getComponentRootNode(componentRef) {
          return (
            /** @type {?} */

            /** @type {?} */
            componentRef.hostView.rootNodes[0]
          );
        }
      }]);

      return DomPortalOutlet;
    }(BasePortalOutlet);

    if (false) {}
    /**
     * @deprecated Use `DomPortalOutlet` instead.
     * \@breaking-change 9.0.0
     */


    var DomPortalHost = /*#__PURE__*/function (_DomPortalOutlet) {
      _inherits(DomPortalHost, _DomPortalOutlet);

      var _super8 = _createSuper(DomPortalHost);

      function DomPortalHost() {
        _classCallCheck(this, DomPortalHost);

        return _super8.apply(this, arguments);
      }

      return DomPortalHost;
    }(DomPortalOutlet);
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/portal/portal-directives.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
     * the directive instance itself can be attached to a host, enabling declarative use of portals.
     */


    var CdkPortal = /*#__PURE__*/function (_TemplatePortal) {
      _inherits(CdkPortal, _TemplatePortal);

      var _super9 = _createSuper(CdkPortal);

      /**
       * @param {?} templateRef
       * @param {?} viewContainerRef
       */
      function CdkPortal(templateRef, viewContainerRef) {
        _classCallCheck(this, CdkPortal);

        return _super9.call(this, templateRef, viewContainerRef);
      }

      return CdkPortal;
    }(TemplatePortal);

    CdkPortal.ɵfac = function CdkPortal_Factory(t) {
      return new (t || CdkPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
    };

    CdkPortal.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkPortal,
      selectors: [["", "cdkPortal", ""]],
      exportAs: ["cdkPortal"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    CdkPortal.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdkPortal]',
          exportAs: 'cdkPortal'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      }, null);
    })();
    /**
     * @deprecated Use `CdkPortal` instead.
     * \@breaking-change 9.0.0
     */


    var TemplatePortalDirective = /*#__PURE__*/function (_CdkPortal) {
      _inherits(TemplatePortalDirective, _CdkPortal);

      var _super10 = _createSuper(TemplatePortalDirective);

      function TemplatePortalDirective() {
        _classCallCheck(this, TemplatePortalDirective);

        return _super10.apply(this, arguments);
      }

      return TemplatePortalDirective;
    }(CdkPortal);

    TemplatePortalDirective.ɵfac = function TemplatePortalDirective_Factory(t) {
      return ɵTemplatePortalDirective_BaseFactory(t || TemplatePortalDirective);
    };

    TemplatePortalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TemplatePortalDirective,
      selectors: [["", "cdk-portal", ""], ["", "portal", ""]],
      exportAs: ["cdkPortal"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CdkPortal,
        useExisting: TemplatePortalDirective
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵTemplatePortalDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TemplatePortalDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplatePortalDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdk-portal], [portal]',
          exportAs: 'cdkPortal',
          providers: [{
            provide: CdkPortal,
            useExisting: TemplatePortalDirective
          }]
        }]
      }], null, null);
    })();
    /**
     * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
     * directly attached to it, enabling declarative use.
     *
     * Usage:
     * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
     */


    var CdkPortalOutlet = /*#__PURE__*/function (_BasePortalOutlet3) {
      _inherits(CdkPortalOutlet, _BasePortalOutlet3);

      var _super11 = _createSuper(CdkPortalOutlet);

      /**
       * @param {?} _componentFactoryResolver
       * @param {?} _viewContainerRef
       * @param {?=} _document
       */
      function CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef,
      /**
       * @deprecated `_document` parameter to be made required.
       * @breaking-change 9.0.0
       */
      _document) {
        var _thisSuper2, _this33;

        _classCallCheck(this, CdkPortalOutlet);

        _this33 = _super11.call(this);
        _this33._componentFactoryResolver = _componentFactoryResolver;
        _this33._viewContainerRef = _viewContainerRef;
        /**
         * Whether the portal component is initialized.
         */

        _this33._isInitialized = false;
        /**
         * Emits when a portal is attached to the outlet.
         */

        _this33.attached = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * \@breaking-change 10.0.0
         */

        _this33.attachDomPortal =
        /**
        * @param {?} portal
        * @return {?}
        */
        function (portal) {
          // @breaking-change 9.0.0 Remove check and error once the
          // `_document` constructor parameter is required.
          if (!_this33._document) {
            throw Error('Cannot attach DOM portal without _document constructor parameter');
          }
          /** @type {?} */


          var element = portal.element;

          if (!element.parentNode) {
            throw Error('DOM portal content must be attached to a parent node.');
          } // Anchor used to save the element's previous position so
          // that we can restore it when the portal is detached.

          /** @type {?} */


          var anchorNode = _this33._document.createComment('dom-portal');

          portal.setAttachedHost(_assertThisInitialized(_this33));
          element.parentNode.insertBefore(anchorNode, element);

          _this33._getRootNode().appendChild(element);

          _get((_thisSuper2 = _assertThisInitialized(_this33), _getPrototypeOf(CdkPortalOutlet.prototype)), "setDisposeFn", _thisSuper2).call(_thisSuper2,
          /**
          * @return {?}
          */
          function () {
            if (anchorNode.parentNode) {
              /** @type {?} */
              anchorNode.parentNode.replaceChild(element, anchorNode);
            }
          });
        };

        _this33._document = _document;
        return _this33;
      }
      /**
       * Portal associated with the Portal outlet.
       * @return {?}
       */


      _createClass(CdkPortalOutlet, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._isInitialized = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(CdkPortalOutlet.prototype), "dispose", this).call(this);

          this._attachedPortal = null;
          this._attachedRef = null;
        }
        /**
         * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
         *
         * @template T
         * @param {?} portal Portal to be attached to the portal outlet.
         * @return {?} Reference to the created component.
         */

      }, {
        key: "attachComponentPortal",
        value: function attachComponentPortal(portal) {
          portal.setAttachedHost(this); // If the portal specifies an origin, use that as the logical location of the component
          // in the application tree. Otherwise use the location of this PortalOutlet.

          /** @type {?} */

          var viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
          /** @type {?} */

          var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
          /** @type {?} */

          var componentFactory = resolver.resolveComponentFactory(portal.component);
          /** @type {?} */

          var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector); // If we're using a view container that's different from the injected one (e.g. when the portal
          // specifies its own) we need to move the component into the outlet, otherwise it'll be rendered
          // inside of the alternate view container.

          if (viewContainerRef !== this._viewContainerRef) {
            this._getRootNode().appendChild(
            /** @type {?} */
            ref.hostView.rootNodes[0]);
          }

          _get(_getPrototypeOf(CdkPortalOutlet.prototype), "setDisposeFn", this).call(this,
          /**
          * @return {?}
          */
          function () {
            return ref.destroy();
          });

          this._attachedPortal = portal;
          this._attachedRef = ref;
          this.attached.emit(ref);
          return ref;
        }
        /**
         * Attach the given TemplatePortal to this PortalHost as an embedded View.
         * @template C
         * @param {?} portal Portal to be attached.
         * @return {?} Reference to the created embedded view.
         */

      }, {
        key: "attachTemplatePortal",
        value: function attachTemplatePortal(portal) {
          var _this34 = this;

          portal.setAttachedHost(this);
          /** @type {?} */

          var viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);

          _get(_getPrototypeOf(CdkPortalOutlet.prototype), "setDisposeFn", this).call(this,
          /**
          * @return {?}
          */
          function () {
            return _this34._viewContainerRef.clear();
          });

          this._attachedPortal = portal;
          this._attachedRef = viewRef;
          this.attached.emit(viewRef);
          return viewRef;
        }
        /**
         * Gets the root node of the portal outlet.
         * @private
         * @return {?}
         */

      }, {
        key: "_getRootNode",
        value: function _getRootNode() {
          /** @type {?} */
          var nativeElement = this._viewContainerRef.element.nativeElement; // The directive could be set on a template which will result in a comment
          // node being the root. Use the comment's parent node if that is the case.

          return (
            /** @type {?} */
            nativeElement.nodeType === nativeElement.ELEMENT_NODE ? nativeElement :
            /** @type {?} */
            nativeElement.parentNode
          );
        }
      }, {
        key: "portal",
        get: function get() {
          return this._attachedPortal;
        }
        /**
         * @param {?} portal
         * @return {?}
         */
        ,
        set: function set(portal) {
          // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
          // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
          // and attach a portal programmatically in the parent component. When Angular does the first CD
          // round, it will fire the setter with empty string, causing the user's content to be cleared.
          if (this.hasAttached() && !portal && !this._isInitialized) {
            return;
          }

          if (this.hasAttached()) {
            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "detach", this).call(this);
          }

          if (portal) {
            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "attach", this).call(this, portal);
          }

          this._attachedPortal = portal;
        }
        /**
         * Component or view reference that is attached to the portal.
         * @return {?}
         */

      }, {
        key: "attachedRef",
        get: function get() {
          return this._attachedRef;
        }
      }]);

      return CdkPortalOutlet;
    }(BasePortalOutlet);

    CdkPortalOutlet.ɵfac = function CdkPortalOutlet_Factory(t) {
      return new (t || CdkPortalOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };

    CdkPortalOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkPortalOutlet,
      selectors: [["", "cdkPortalOutlet", ""]],
      inputs: {
        portal: ["cdkPortalOutlet", "portal"]
      },
      outputs: {
        attached: "attached"
      },
      exportAs: ["cdkPortalOutlet"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    CdkPortalOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };

    CdkPortalOutlet.propDecorators = {
      attached: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortalOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdkPortalOutlet]',
          exportAs: 'cdkPortalOutlet',
          inputs: ['portal: cdkPortalOutlet']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, {
        attached: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();

    if (false) {}
    /**
     * @deprecated Use `CdkPortalOutlet` instead.
     * \@breaking-change 9.0.0
     */


    var PortalHostDirective = /*#__PURE__*/function (_CdkPortalOutlet) {
      _inherits(PortalHostDirective, _CdkPortalOutlet);

      var _super12 = _createSuper(PortalHostDirective);

      function PortalHostDirective() {
        _classCallCheck(this, PortalHostDirective);

        return _super12.apply(this, arguments);
      }

      return PortalHostDirective;
    }(CdkPortalOutlet);

    PortalHostDirective.ɵfac = function PortalHostDirective_Factory(t) {
      return ɵPortalHostDirective_BaseFactory(t || PortalHostDirective);
    };

    PortalHostDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: PortalHostDirective,
      selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]],
      inputs: {
        portal: ["cdkPortalHost", "portal"]
      },
      exportAs: ["cdkPortalHost"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CdkPortalOutlet,
        useExisting: PortalHostDirective
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵPortalHostDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PortalHostDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalHostDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdkPortalHost], [portalHost]',
          exportAs: 'cdkPortalHost',
          inputs: ['portal: cdkPortalHost'],
          providers: [{
            provide: CdkPortalOutlet,
            useExisting: PortalHostDirective
          }]
        }]
      }], null, null);
    })();

    var PortalModule = function PortalModule() {
      _classCallCheck(this, PortalModule);
    };

    PortalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PortalModule
    });
    PortalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PortalModule_Factory(t) {
        return new (t || PortalModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalModule, {
        declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
        exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
          declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/portal/portal-injector.ts
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
     * Custom injector to be used when providing custom
     * injection tokens to components inside a portal.
     * \@docs-private
     */


    var PortalInjector = /*#__PURE__*/function () {
      /**
       * @param {?} _parentInjector
       * @param {?} _customTokens
       */
      function PortalInjector(_parentInjector, _customTokens) {
        _classCallCheck(this, PortalInjector);

        this._parentInjector = _parentInjector;
        this._customTokens = _customTokens;
      }
      /**
       * @param {?} token
       * @param {?=} notFoundValue
       * @return {?}
       */


      _createClass(PortalInjector, [{
        key: "get",
        value: function get(token, notFoundValue) {
          /** @type {?} */
          var value = this._customTokens.get(token);

          if (typeof value !== 'undefined') {
            return value;
          }

          return this._parentInjector.get(token, notFoundValue);
        }
      }]);

      return PortalInjector;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/portal/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=portal.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js ***!
    \**********************************************************************/

  /*! exports provided: CdkFixedSizeVirtualScroll, CdkScrollable, CdkScrollableModule, CdkVirtualForOf, CdkVirtualScrollViewport, DEFAULT_RESIZE_TIME, DEFAULT_SCROLL_TIME, FixedSizeVirtualScrollStrategy, ScrollDispatcher, ScrollingModule, VIRTUAL_SCROLL_STRATEGY, ViewportRuler, _fixedSizeVirtualScrollStrategyFactory */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015ScrollingJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function () {
      return CdkFixedSizeVirtualScroll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
      return CdkScrollable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollableModule", function () {
      return CdkScrollableModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function () {
      return CdkVirtualForOf;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function () {
      return CdkVirtualScrollViewport;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function () {
      return DEFAULT_RESIZE_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function () {
      return DEFAULT_SCROLL_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function () {
      return FixedSizeVirtualScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
      return ScrollDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollingModule", function () {
      return ScrollingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function () {
      return VIRTUAL_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
      return ViewportRuler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function () {
      return _fixedSizeVirtualScrollStrategyFactory;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/virtual-scroll-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The injection token used to specify the virtual scrolling strategy.
     * @type {?}
     */


    var _c0 = ["contentWrapper"];
    var _c1 = ["*"];
    var VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');
    /**
     * A strategy that dictates which items should be rendered in the viewport.
     * @record
     */

    function VirtualScrollStrategy() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/fixed-size-virtual-scroll.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Virtual scrolling strategy for lists with items of known fixed size.
     */


    var FixedSizeVirtualScrollStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} itemSize The size of the items in the virtually scrolling list.
       * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
       * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
       */
      function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
        _classCallCheck(this, FixedSizeVirtualScrollStrategy);

        this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         */

        this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        /**
         * The attached viewport.
         */

        this._viewport = null;
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
      }
      /**
       * Attaches this scroll strategy to a viewport.
       * @param {?} viewport The viewport to attach this strategy to.
       * @return {?}
       */


      _createClass(FixedSizeVirtualScrollStrategy, [{
        key: "attach",
        value: function attach(viewport) {
          this._viewport = viewport;

          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /**
         * Detaches this scroll strategy from the currently attached viewport.
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this._scrolledIndexChange.complete();

          this._viewport = null;
        }
        /**
         * Update the item size and buffer size.
         * @param {?} itemSize The size of the items in the virtually scrolling list.
         * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
         * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
         * @return {?}
         */

      }, {
        key: "updateItemAndBufferSize",
        value: function updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
          if (maxBufferPx < minBufferPx) {
            throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
          }

          this._itemSize = itemSize;
          this._minBufferPx = minBufferPx;
          this._maxBufferPx = maxBufferPx;

          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onContentScrolled",
        value: function onContentScrolled() {
          this._updateRenderedRange();
        }
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onDataLengthChanged",
        value: function onDataLengthChanged() {
          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onContentRendered",
        value: function onContentRendered() {}
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onRenderedOffsetChanged",
        value: function onRenderedOffsetChanged() {}
        /**
         * Scroll to the offset for the given index.
         * @param {?} index The index of the element to scroll to.
         * @param {?} behavior The ScrollBehavior to use when scrolling.
         * @return {?}
         */

      }, {
        key: "scrollToIndex",
        value: function scrollToIndex(index, behavior) {
          if (this._viewport) {
            this._viewport.scrollToOffset(index * this._itemSize, behavior);
          }
        }
        /**
         * Update the viewport's total content size.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateTotalContentSize",
        value: function _updateTotalContentSize() {
          if (!this._viewport) {
            return;
          }

          this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
        }
        /**
         * Update the viewport's rendered range.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateRenderedRange",
        value: function _updateRenderedRange() {
          if (!this._viewport) {
            return;
          }
          /** @type {?} */


          var scrollOffset = this._viewport.measureScrollOffset();
          /** @type {?} */


          var firstVisibleIndex = scrollOffset / this._itemSize;
          /** @type {?} */

          var renderedRange = this._viewport.getRenderedRange();
          /** @type {?} */


          var newRange = {
            start: renderedRange.start,
            end: renderedRange.end
          };
          /** @type {?} */

          var viewportSize = this._viewport.getViewportSize();
          /** @type {?} */


          var dataLength = this._viewport.getDataLength();
          /** @type {?} */


          var startBuffer = scrollOffset - newRange.start * this._itemSize;

          if (startBuffer < this._minBufferPx && newRange.start != 0) {
            /** @type {?} */
            var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
            newRange.start = Math.max(0, newRange.start - expandStart);
            newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
          } else {
            /** @type {?} */
            var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);

            if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
              /** @type {?} */
              var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);

              if (expandEnd > 0) {
                newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
              }
            }
          }

          this._viewport.setRenderedRange(newRange);

          this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);

          this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
        }
      }]);

      return FixedSizeVirtualScrollStrategy;
    }();

    if (false) {}
    /**
     * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
     * `FixedSizeVirtualScrollStrategy` from the given directive.
     * @param {?} fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
     *     `FixedSizeVirtualScrollStrategy` from.
     * @return {?}
     */


    function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
      return fixedSizeDir._scrollStrategy;
    }
    /**
     * A virtual scroll strategy that supports fixed-size items.
     */


    var CdkFixedSizeVirtualScroll = /*#__PURE__*/function () {
      function CdkFixedSizeVirtualScroll() {
        _classCallCheck(this, CdkFixedSizeVirtualScroll);

        this._itemSize = 20;
        this._minBufferPx = 100;
        this._maxBufferPx = 200;
        /**
         * The scroll strategy used by this directive.
         */

        this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
      }
      /**
       * The size of the items in the list (in pixels).
       * @return {?}
       */


      _createClass(CdkFixedSizeVirtualScroll, [{
        key: "ngOnChanges",

        /**
         * @return {?}
         */
        value: function ngOnChanges() {
          this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
        }
      }, {
        key: "itemSize",
        get: function get() {
          return this._itemSize;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        }
        /**
         * The minimum amount of buffer rendered beyond the viewport (in pixels).
         * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
         * @return {?}
         */

      }, {
        key: "minBufferPx",
        get: function get() {
          return this._minBufferPx;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        }
        /**
         * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
         * @return {?}
         */

      }, {
        key: "maxBufferPx",
        get: function get() {
          return this._maxBufferPx;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        }
      }]);

      return CdkFixedSizeVirtualScroll;
    }();

    CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) {
      return new (t || CdkFixedSizeVirtualScroll)();
    };

    CdkFixedSizeVirtualScroll.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkFixedSizeVirtualScroll,
      selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
      inputs: {
        itemSize: "itemSize",
        minBufferPx: "minBufferPx",
        maxBufferPx: "maxBufferPx"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return CdkFixedSizeVirtualScroll;
        })]
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    CdkFixedSizeVirtualScroll.propDecorators = {
      itemSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      minBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      maxBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkFixedSizeVirtualScroll, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'cdk-virtual-scroll-viewport[itemSize]',
          providers: [{
            provide: VIRTUAL_SCROLL_STRATEGY,
            useFactory: _fixedSizeVirtualScrollStrategyFactory,
            deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return CdkFixedSizeVirtualScroll;
            })]
          }]
        }]
      }], function () {
        return [];
      }, {
        itemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/scroll-dispatcher.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Time in ms to throttle the scrolling events by default.
     * @type {?}
     */


    var DEFAULT_SCROLL_TIME = 20;
    /**
     * Service contained all registered Scrollable references and emits an event when any one of the
     * Scrollable references emit a scrolled event.
     */

    var ScrollDispatcher = /*#__PURE__*/function () {
      /**
       * @param {?} _ngZone
       * @param {?} _platform
       * @param {?=} document
       */
      function ScrollDispatcher(_ngZone, _platform,
      /** @breaking-change 11.0.0 make document required */
      document) {
        _classCallCheck(this, ScrollDispatcher);

        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * Subject for notifying that a registered scrollable reference element has been scrolled.
         */

        this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Keeps track of the global `scroll` and `resize` subscriptions.
         */

        this._globalSubscription = null;
        /**
         * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
         */

        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */

        this.scrollContainers = new Map();
        this._document = document;
      }
      /**
       * Registers a scrollable instance with the service and listens for its scrolled events. When the
       * scrollable is scrolled, the service emits the event to its scrolled observable.
       * @param {?} scrollable Scrollable instance to be registered.
       * @return {?}
       */


      _createClass(ScrollDispatcher, [{
        key: "register",
        value: function register(scrollable) {
          var _this35 = this;

          if (!this.scrollContainers.has(scrollable)) {
            this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this35._scrolled.next(scrollable);
            }));
          }
        }
        /**
         * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
         * @param {?} scrollable Scrollable instance to be deregistered.
         * @return {?}
         */

      }, {
        key: "deregister",
        value: function deregister(scrollable) {
          /** @type {?} */
          var scrollableReference = this.scrollContainers.get(scrollable);

          if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers["delete"](scrollable);
          }
        }
        /**
         * Returns an observable that emits an event whenever any of the registered Scrollable
         * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
         * to override the default "throttle" time.
         *
         * **Note:** in order to avoid hitting change detection for every scroll event,
         * all of the events emitted from this stream will be run outside the Angular zone.
         * If you need to update any data bindings as a result of a scroll event, you have
         * to run the callback using `NgZone.run`.
         * @param {?=} auditTimeInMs
         * @return {?}
         */

      }, {
        key: "scrolled",
        value: function scrolled() {
          var _this36 = this;

          var auditTimeInMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCROLL_TIME;

          if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
          }

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            if (!_this36._globalSubscription) {
              _this36._addGlobalListener();
            } // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.

            /** @type {?} */


            var subscription = auditTimeInMs > 0 ? _this36._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) : _this36._scrolled.subscribe(observer);
            _this36._scrolledCount++;
            return (
              /**
              * @return {?}
              */
              function () {
                subscription.unsubscribe();
                _this36._scrolledCount--;

                if (!_this36._scrolledCount) {
                  _this36._removeGlobalListener();
                }
              }
            );
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this37 = this;

          this._removeGlobalListener();

          this.scrollContainers.forEach(
          /**
          * @param {?} _
          * @param {?} container
          * @return {?}
          */
          function (_, container) {
            return _this37.deregister(container);
          });

          this._scrolled.complete();
        }
        /**
         * Returns an observable that emits whenever any of the
         * scrollable ancestors of an element are scrolled.
         * @param {?} elementRef Element whose ancestors to listen for.
         * @param {?=} auditTimeInMs Time to throttle the scroll events.
         * @return {?}
         */

      }, {
        key: "ancestorScrolled",
        value: function ancestorScrolled(elementRef, auditTimeInMs) {
          /** @type {?} */
          var ancestors = this.getAncestorScrollContainers(elementRef);
          return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
          /**
          * @param {?} target
          * @return {?}
          */
          function (target) {
            return !target || ancestors.indexOf(target) > -1;
          }));
        }
        /**
         * Returns all registered Scrollables that contain the provided element.
         * @param {?} elementRef
         * @return {?}
         */

      }, {
        key: "getAncestorScrollContainers",
        value: function getAncestorScrollContainers(elementRef) {
          var _this38 = this;

          /** @type {?} */
          var scrollingContainers = [];
          this.scrollContainers.forEach(
          /**
          * @param {?} _subscription
          * @param {?} scrollable
          * @return {?}
          */
          function (_subscription, scrollable) {
            if (_this38._scrollableContainsElement(scrollable, elementRef)) {
              scrollingContainers.push(scrollable);
            }
          });
          return scrollingContainers;
        }
        /**
         * Access injected document if available or fallback to global document reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getDocument",
        value: function _getDocument() {
          return this._document || document;
        }
        /**
         * Use defaultView of injected document if available or fallback to global window reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          /** @type {?} */
          var doc = this._getDocument();

          return doc.defaultView || window;
        }
        /**
         * Returns true if the element is contained within the provided Scrollable.
         * @private
         * @param {?} scrollable
         * @param {?} elementRef
         * @return {?}
         */

      }, {
        key: "_scrollableContainsElement",
        value: function _scrollableContainsElement(scrollable, elementRef) {
          /** @type {?} */
          var element = elementRef.nativeElement;
          /** @type {?} */

          var scrollableElement = scrollable.getElementRef().nativeElement; // Traverse through the element parents until we reach null, checking if any of the elements
          // are the scrollable's element.

          do {
            if (element == scrollableElement) {
              return true;
            }
          } while (element =
          /** @type {?} */
          element.parentElement);

          return false;
        }
        /**
         * Sets up the global scroll listeners.
         * @private
         * @return {?}
         */

      }, {
        key: "_addGlobalListener",
        value: function _addGlobalListener() {
          var _this39 = this;

          this._globalSubscription = this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var window = _this39._getWindow();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this39._scrolled.next();
            });
          });
        }
        /**
         * Cleans up the global scroll listener.
         * @private
         * @return {?}
         */

      }, {
        key: "_removeGlobalListener",
        value: function _removeGlobalListener() {
          if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();

            this._globalSubscription = null;
          }
        }
      }]);

      return ScrollDispatcher;
    }();

    ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) {
      return new (t || ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
    };
    /** @nocollapse */


    ScrollDispatcher.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    ScrollDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ScrollDispatcher_Factory() {
        return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      },
      token: ScrollDispatcher,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/scrollable.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Sends an event when the directive's element is scrolled. Registers itself with the
     * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
     * can be listened to through the service.
     */


    var CdkScrollable = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       * @param {?} scrollDispatcher
       * @param {?} ngZone
       * @param {?=} dir
       */
      function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
        var _this40 = this;

        _classCallCheck(this, CdkScrollable);

        this.elementRef = elementRef;
        this.scrollDispatcher = scrollDispatcher;
        this.ngZone = ngZone;
        this.dir = dir;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          return _this40.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this40.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this40._destroyed)).subscribe(observer);
          });
        });
      }
      /**
       * @return {?}
       */


      _createClass(CdkScrollable, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.scrollDispatcher.register(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.scrollDispatcher.deregister(this);

          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Returns observable that emits when a scroll event is fired on the host element.
         * @return {?}
         */

      }, {
        key: "elementScrolled",
        value: function elementScrolled() {
          return this._elementScrolled;
        }
        /**
         * Gets the ElementRef for the viewport.
         * @return {?}
         */

      }, {
        key: "getElementRef",
        value: function getElementRef() {
          return this.elementRef;
        }
        /**
         * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
         * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
         * left and right always refer to the left and right side of the scrolling container irrespective
         * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
         * in an RTL context.
         * @param {?} options specified the offsets to scroll to.
         * @return {?}
         */

      }, {
        key: "scrollTo",
        value: function scrollTo(options) {
          /** @type {?} */
          var el = this.elementRef.nativeElement;
          /** @type {?} */

          var isRtl = this.dir && this.dir.value == 'rtl'; // Rewrite start & end offsets as right or left offsets.

          if (options.left == null) {
            options.left = isRtl ? options.end : options.start;
          }

          if (options.right == null) {
            options.right = isRtl ? options.start : options.end;
          } // Rewrite the bottom offset as a top offset.


          if (options.bottom != null) {
            /** @type {?} */
            options.top = el.scrollHeight - el.clientHeight - options.bottom;
          } // Rewrite the right offset as a left offset.


          if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != 0
          /* NORMAL */
          ) {
              if (options.left != null) {
                /** @type {?} */
                options.right = el.scrollWidth - el.clientWidth - options.left;
              }

              if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
              /* INVERTED */
              ) {
                  options.left = options.right;
                } else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
              /* NEGATED */
              ) {
                  options.left = options.right ? -options.right : options.right;
                }
            } else {
            if (options.right != null) {
              /** @type {?} */
              options.left = el.scrollWidth - el.clientWidth - options.right;
            }
          }

          this._applyScrollToOptions(options);
        }
        /**
         * @private
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "_applyScrollToOptions",
        value: function _applyScrollToOptions(options) {
          /** @type {?} */
          var el = this.elementRef.nativeElement;

          if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
            el.scrollTo(options);
          } else {
            if (options.top != null) {
              el.scrollTop = options.top;
            }

            if (options.left != null) {
              el.scrollLeft = options.left;
            }
          }
        }
        /**
         * Measures the scroll offset relative to the specified edge of the viewport. This method can be
         * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
         * about what scrollLeft means in RTL. The values returned by this method are normalized such that
         * left and right always refer to the left and right side of the scrolling container irrespective
         * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
         * in an RTL context.
         * @param {?} from The edge to measure from.
         * @return {?}
         */

      }, {
        key: "measureScrollOffset",
        value: function measureScrollOffset(from) {
          /** @type {?} */
          var LEFT = 'left';
          /** @type {?} */

          var RIGHT = 'right';
          /** @type {?} */

          var el = this.elementRef.nativeElement;

          if (from == 'top') {
            return el.scrollTop;
          }

          if (from == 'bottom') {
            return el.scrollHeight - el.clientHeight - el.scrollTop;
          } // Rewrite start & end as left or right offsets.

          /** @type {?} */


          var isRtl = this.dir && this.dir.value == 'rtl';

          if (from == 'start') {
            from = isRtl ? RIGHT : LEFT;
          } else if (from == 'end') {
            from = isRtl ? LEFT : RIGHT;
          }

          if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
          /* INVERTED */
          ) {
              // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
              // 0 when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
              } else {
                return el.scrollLeft;
              }
            } else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
          /* NEGATED */
          ) {
              // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
              // 0 when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollLeft + el.scrollWidth - el.clientWidth;
              } else {
                return -el.scrollLeft;
              }
            } else {
            // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
            // (scrollWidth - clientWidth) when scrolled all the way right.
            if (from == LEFT) {
              return el.scrollLeft;
            } else {
              return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
          }
        }
      }]);

      return CdkScrollable;
    }();

    CdkScrollable.ɵfac = function CdkScrollable_Factory(t) {
      return new (t || CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8));
    };

    CdkScrollable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkScrollable,
      selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
    });
    /** @nocollapse */

    CdkScrollable.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: ScrollDispatcher
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdk-scrollable], [cdkScrollable]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: ScrollDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/viewport-ruler.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Time in ms to throttle the resize events by default.
     * @type {?}
     */


    var DEFAULT_RESIZE_TIME = 20;
    /**
     * Object that holds the scroll position of the viewport in each direction.
     * @record
     */

    function ViewportScrollPosition() {}

    if (false) {}
    /**
     * Simple utility for getting the bounds of the browser viewport.
     * \@docs-private
     */


    var ViewportRuler = /*#__PURE__*/function () {
      /**
       * @param {?} _platform
       * @param {?} ngZone
       * @param {?=} document
       */
      function ViewportRuler(_platform, ngZone,
      /** @breaking-change 11.0.0 make document required */
      document) {
        var _this41 = this;

        _classCallCheck(this, ViewportRuler);

        this._platform = _platform;
        this._document = document;
        ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          var window = _this41._getWindow();

          _this41._change = _platform.isBrowser ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'orientationchange')) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(); // Note that we need to do the subscription inside `runOutsideAngular`
          // since subscribing is what causes the event listener to be added.

          _this41._invalidateCache = _this41.change().subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this41._updateViewportSize();
          });
        });
      }
      /**
       * @return {?}
       */


      _createClass(ViewportRuler, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._invalidateCache.unsubscribe();
        }
        /**
         * Returns the viewport's width and height.
         * @return {?}
         */

      }, {
        key: "getViewportSize",
        value: function getViewportSize() {
          if (!this._viewportSize) {
            this._updateViewportSize();
          }
          /** @type {?} */


          var output = {
            width: this._viewportSize.width,
            height: this._viewportSize.height
          }; // If we're not on a browser, don't cache the size since it'll be mocked out anyway.

          if (!this._platform.isBrowser) {
            this._viewportSize =
            /** @type {?} */
            null;
          }

          return output;
        }
        /**
         * Gets a ClientRect for the viewport's bounds.
         * @return {?}
         */

      }, {
        key: "getViewportRect",
        value: function getViewportRect() {
          // Use the document element's bounding rect rather than the window scroll properties
          // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
          // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
          // conceptual viewports. Under most circumstances these viewports are equivalent, but they
          // can disagree when the page is pinch-zoomed (on devices that support touch).
          // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
          // We use the documentElement instead of the body because, by default (without a css reset)
          // browsers typically give the document body an 8px margin, which is not included in
          // getBoundingClientRect().

          /** @type {?} */
          var scrollPosition = this.getViewportScrollPosition();

          var _this$getViewportSize = this.getViewportSize(),
              width = _this$getViewportSize.width,
              height = _this$getViewportSize.height;

          return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width
          };
        }
        /**
         * Gets the (top, left) scroll position of the viewport.
         * @return {?}
         */

      }, {
        key: "getViewportScrollPosition",
        value: function getViewportScrollPosition() {
          // While we can get a reference to the fake document
          // during SSR, it doesn't have getBoundingClientRect.
          if (!this._platform.isBrowser) {
            return {
              top: 0,
              left: 0
            };
          } // The top-left-corner of the viewport is determined by the scroll position of the document
          // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
          // whether `document.body` or `document.documentElement` is the scrolled element, so reading
          // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
          // `document.documentElement` works consistently, where the `top` and `left` values will
          // equal negative the scroll position.

          /** @type {?} */


          var document = this._getDocument();
          /** @type {?} */


          var window = this._getWindow();
          /** @type {?} */


          var documentElement =
          /** @type {?} */
          document.documentElement;
          /** @type {?} */

          var documentRect = documentElement.getBoundingClientRect();
          /** @type {?} */

          var top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
          /** @type {?} */

          var left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
          return {
            top: top,
            left: left
          };
        }
        /**
         * Returns a stream that emits whenever the size of the viewport changes.
         * @param {?=} throttleTime Time in milliseconds to throttle the stream.
         * @return {?}
         */

      }, {
        key: "change",
        value: function change() {
          var throttleTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_RESIZE_TIME;
          return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
        }
        /**
         * Access injected document if available or fallback to global document reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getDocument",
        value: function _getDocument() {
          return this._document || document;
        }
        /**
         * Use defaultView of injected document if available or fallback to global window reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          /** @type {?} */
          var doc = this._getDocument();

          return doc.defaultView || window;
        }
        /**
         * Updates the cached viewport size.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateViewportSize",
        value: function _updateViewportSize() {
          /** @type {?} */
          var window = this._getWindow();

          this._viewportSize = this._platform.isBrowser ? {
            width: window.innerWidth,
            height: window.innerHeight
          } : {
            width: 0,
            height: 0
          };
        }
      }]);

      return ViewportRuler;
    }();

    ViewportRuler.ɵfac = function ViewportRuler_Factory(t) {
      return new (t || ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
    };
    /** @nocollapse */


    ViewportRuler.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    ViewportRuler.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ViewportRuler_Factory() {
        return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      },
      token: ViewportRuler,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewportRuler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/virtual-scroll-viewport.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Checks if the given ranges are equal.
     * @param {?} r1
     * @param {?} r2
     * @return {?}
     */


    function rangesEqual(r1, r2) {
      return r1.start == r2.start && r1.end == r2.end;
    }
    /**
     * Scheduler to be used for scroll events. Needs to fall back to
     * something that doesn't rely on requestAnimationFrame on environments
     * that don't support it (e.g. server-side rendering).
     * @type {?}
     */


    var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
    /**
     * A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`.
     */

    var CdkVirtualScrollViewport = /*#__PURE__*/function (_CdkScrollable) {
      _inherits(CdkVirtualScrollViewport, _CdkScrollable);

      var _super13 = _createSuper(CdkVirtualScrollViewport);

      /**
       * @param {?} elementRef
       * @param {?} _changeDetectorRef
       * @param {?} ngZone
       * @param {?} _scrollStrategy
       * @param {?} dir
       * @param {?} scrollDispatcher
       * @param {?=} viewportRuler
       */
      function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher,
      /**
       * @deprecated `viewportRuler` parameter to become required.
       * @breaking-change 11.0.0
       */
      viewportRuler) {
        var _this42;

        _classCallCheck(this, CdkVirtualScrollViewport);

        _this42 = _super13.call(this, elementRef, scrollDispatcher, ngZone, dir);
        _this42.elementRef = elementRef;
        _this42._changeDetectorRef = _changeDetectorRef;
        _this42._scrollStrategy = _scrollStrategy;
        /**
         * Emits when the viewport is detached from a CdkVirtualForOf.
         */

        _this42._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the rendered range changes.
         */

        _this42._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this42._orientation = 'vertical'; // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
        // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
        // depending on how the strategy calculates the scrolled index, it may come at a cost to
        // performance.

        /**
         * Emits when the index of the first element visible in the viewport changes.
         */

        _this42.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          return _this42._scrollStrategy.scrolledIndexChange.subscribe(
          /**
          * @param {?} index
          * @return {?}
          */
          function (index) {
            return Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              return _this42.ngZone.run(
              /**
              * @return {?}
              */
              function () {
                return observer.next(index);
              });
            });
          });
        });
        /**
         * A stream that emits whenever the rendered range changes.
         */

        _this42.renderedRangeStream = _this42._renderedRangeSubject.asObservable();
        /**
         * The total size of all content (in pixels), including content that is not currently rendered.
         */

        _this42._totalContentSize = 0;
        /**
         * A string representing the `style.width` property value to be used for the spacer element.
         */

        _this42._totalContentWidth = '';
        /**
         * A string representing the `style.height` property value to be used for the spacer element.
         */

        _this42._totalContentHeight = '';
        /**
         * The currently rendered range of indices.
         */

        _this42._renderedRange = {
          start: 0,
          end: 0
        };
        /**
         * The length of the data bound to this viewport (in number of items).
         */

        _this42._dataLength = 0;
        /**
         * The size of the viewport (in pixels).
         */

        _this42._viewportSize = 0;
        /**
         * The last rendered content offset that was set.
         */

        _this42._renderedContentOffset = 0;
        /**
         * Whether the last rendered content offset was to the end of the content (and therefore needs to
         * be rewritten as an offset to the start of the content).
         */

        _this42._renderedContentOffsetNeedsRewrite = false;
        /**
         * Whether there is a pending change detection cycle.
         */

        _this42._isChangeDetectionPending = false;
        /**
         * A list of functions to run after the next change detection cycle.
         */

        _this42._runAfterChangeDetection = [];
        /**
         * Subscription to changes in the viewport size.
         */

        _this42._viewportChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;

        if (!_scrollStrategy) {
          throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        } // @breaking-change 11.0.0 Remove null check for `viewportRuler`.


        if (viewportRuler) {
          _this42._viewportChanges = viewportRuler.change().subscribe(
          /**
          * @return {?}
          */
          function () {
            _this42.checkViewportSize();
          });
        }

        return _this42;
      }
      /**
       * The direction the viewport scrolls.
       * @return {?}
       */


      _createClass(CdkVirtualScrollViewport, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this43 = this;

          _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnInit", this).call(this); // It's still too early to measure the viewport at this point. Deferring with a promise allows
          // the Viewport to be rendered with the correct size before we measure. We run this outside the
          // zone to avoid causing more change detection cycles. We handle the change detection loop
          // ourselves instead.


          this.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              _this43._measureViewportSize();

              _this43._scrollStrategy.attach(_this43);

              _this43.elementScrolled().pipe( // Start off with a fake scroll event so we properly detect our initial position.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(
              /** @type {?} */
              null), // Collect multiple events into one until the next animation frame. This way if
              // there are multiple scroll events in the same frame we only need to recheck
              // our layout once.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER)).subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this43._scrollStrategy.onContentScrolled();
              });

              _this43._markChangeDetectionNeeded();
            });
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.detach();

          this._scrollStrategy.detach(); // Complete all subjects


          this._renderedRangeSubject.complete();

          this._detachedSubject.complete();

          this._viewportChanges.unsubscribe();

          _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnDestroy", this).call(this);
        }
        /**
         * Attaches a `CdkVirtualForOf` to this viewport.
         * @param {?} forOf
         * @return {?}
         */

      }, {
        key: "attach",
        value: function attach(forOf) {
          var _this44 = this;

          if (this._forOf) {
            throw Error('CdkVirtualScrollViewport is already attached.');
          } // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
          // changes. Run outside the zone to avoid triggering change detection, since we're managing the
          // change detection loop ourselves.


          this.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this44._forOf = forOf;

            _this44._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this44._detachedSubject)).subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              /** @type {?} */
              var newLength = data.length;

              if (newLength !== _this44._dataLength) {
                _this44._dataLength = newLength;

                _this44._scrollStrategy.onDataLengthChanged();
              }

              _this44._doChangeDetection();
            });
          });
        }
        /**
         * Detaches the current `CdkVirtualForOf`.
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this._forOf = null;

          this._detachedSubject.next();
        }
        /**
         * Gets the length of the data bound to this viewport (in number of items).
         * @return {?}
         */

      }, {
        key: "getDataLength",
        value: function getDataLength() {
          return this._dataLength;
        }
        /**
         * Gets the size of the viewport (in pixels).
         * @return {?}
         */

      }, {
        key: "getViewportSize",
        value: function getViewportSize() {
          return this._viewportSize;
        } // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
        // cycle happens. I'm being careful to only call it after the render cycle is complete and before
        // setting it to something else, but its error prone and should probably be split into
        // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.

        /**
         * Get the current rendered range of items.
         * @return {?}
         */

      }, {
        key: "getRenderedRange",
        value: function getRenderedRange() {
          return this._renderedRange;
        }
        /**
         * Sets the total size of all content (in pixels), including content that is not currently
         * rendered.
         * @param {?} size
         * @return {?}
         */

      }, {
        key: "setTotalContentSize",
        value: function setTotalContentSize(size) {
          if (this._totalContentSize !== size) {
            this._totalContentSize = size;

            this._calculateSpacerSize();

            this._markChangeDetectionNeeded();
          }
        }
        /**
         * Sets the currently rendered range of indices.
         * @param {?} range
         * @return {?}
         */

      }, {
        key: "setRenderedRange",
        value: function setRenderedRange(range) {
          var _this45 = this;

          if (!rangesEqual(this._renderedRange, range)) {
            this._renderedRangeSubject.next(this._renderedRange = range);

            this._markChangeDetectionNeeded(
            /**
            * @return {?}
            */
            function () {
              return _this45._scrollStrategy.onContentRendered();
            });
          }
        }
        /**
         * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
         * @return {?}
         */

      }, {
        key: "getOffsetToRenderedContentStart",
        value: function getOffsetToRenderedContentStart() {
          return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
        }
        /**
         * Sets the offset from the start of the viewport to either the start or end of the rendered data
         * (in pixels).
         * @param {?} offset
         * @param {?=} to
         * @return {?}
         */

      }, {
        key: "setRenderedContentOffset",
        value: function setRenderedContentOffset(offset) {
          var _this46 = this;

          var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'to-start';
          // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
          // in the negative direction.

          /** @type {?} */
          var isRtl = this.dir && this.dir.value == 'rtl';
          /** @type {?} */

          var isHorizontal = this.orientation == 'horizontal';
          /** @type {?} */

          var axis = isHorizontal ? 'X' : 'Y';
          /** @type {?} */

          var axisDirection = isHorizontal && isRtl ? -1 : 1;
          /** @type {?} */

          var transform = "translate".concat(axis, "(").concat(Number(axisDirection * offset), "px)");
          this._renderedContentOffset = offset;

          if (to === 'to-end') {
            transform += " translate".concat(axis, "(-100%)"); // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
            // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
            // expand upward).

            this._renderedContentOffsetNeedsRewrite = true;
          }

          if (this._renderedContentTransform != transform) {
            // We know this value is safe because we parse `offset` with `Number()` before passing it
            // into the string.
            this._renderedContentTransform = transform;

            this._markChangeDetectionNeeded(
            /**
            * @return {?}
            */
            function () {
              if (_this46._renderedContentOffsetNeedsRewrite) {
                _this46._renderedContentOffset -= _this46.measureRenderedContentSize();
                _this46._renderedContentOffsetNeedsRewrite = false;

                _this46.setRenderedContentOffset(_this46._renderedContentOffset);
              } else {
                _this46._scrollStrategy.onRenderedOffsetChanged();
              }
            });
          }
        }
        /**
         * Scrolls to the given offset from the start of the viewport. Please note that this is not always
         * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
         * direction, this would be the equivalent of setting a fictional `scrollRight` property.
         * @param {?} offset The offset to scroll to.
         * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
         * @return {?}
         */

      }, {
        key: "scrollToOffset",
        value: function scrollToOffset(offset) {
          var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

          /** @type {?} */
          var options = {
            behavior: behavior
          };

          if (this.orientation === 'horizontal') {
            options.start = offset;
          } else {
            options.top = offset;
          }

          this.scrollTo(options);
        }
        /**
         * Scrolls to the offset for the given index.
         * @param {?} index The index of the element to scroll to.
         * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
         * @return {?}
         */

      }, {
        key: "scrollToIndex",
        value: function scrollToIndex(index) {
          var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

          this._scrollStrategy.scrollToIndex(index, behavior);
        }
        /**
         * Gets the current scroll offset from the start of the viewport (in pixels).
         * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
         *     in horizontal mode.
         * @return {?}
         */

      }, {
        key: "measureScrollOffset",
        value: function measureScrollOffset(from) {
          return from ? _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, from) : _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, this.orientation === 'horizontal' ? 'start' : 'top');
        }
        /**
         * Measure the combined size of all of the rendered items.
         * @return {?}
         */

      }, {
        key: "measureRenderedContentSize",
        value: function measureRenderedContentSize() {
          /** @type {?} */
          var contentEl = this._contentWrapper.nativeElement;
          return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
        }
        /**
         * Measure the total combined size of the given range. Throws if the range includes items that are
         * not rendered.
         * @param {?} range
         * @return {?}
         */

      }, {
        key: "measureRangeSize",
        value: function measureRangeSize(range) {
          if (!this._forOf) {
            return 0;
          }

          return this._forOf.measureRangeSize(range, this.orientation);
        }
        /**
         * Update the viewport dimensions and re-render.
         * @return {?}
         */

      }, {
        key: "checkViewportSize",
        value: function checkViewportSize() {
          // TODO: Cleanup later when add logic for handling content resize
          this._measureViewportSize();

          this._scrollStrategy.onDataLengthChanged();
        }
        /**
         * Measure the viewport size.
         * @private
         * @return {?}
         */

      }, {
        key: "_measureViewportSize",
        value: function _measureViewportSize() {
          /** @type {?} */
          var viewportEl = this.elementRef.nativeElement;
          this._viewportSize = this.orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
        }
        /**
         * Queue up change detection to run.
         * @private
         * @param {?=} runAfter
         * @return {?}
         */

      }, {
        key: "_markChangeDetectionNeeded",
        value: function _markChangeDetectionNeeded(runAfter) {
          var _this47 = this;

          if (runAfter) {
            this._runAfterChangeDetection.push(runAfter);
          } // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
          // properties sequentially we only have to run `_doChangeDetection` once at the end.


          if (!this._isChangeDetectionPending) {
            this._isChangeDetectionPending = true;
            this.ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                _this47._doChangeDetection();
              });
            });
          }
        }
        /**
         * Run change detection.
         * @private
         * @return {?}
         */

      }, {
        key: "_doChangeDetection",
        value: function _doChangeDetection() {
          var _this48 = this;

          this._isChangeDetectionPending = false; // Apply the content transform. The transform can't be set via an Angular binding because
          // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
          // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
          // the `Number` function first to coerce it to a numeric value.

          this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform; // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
          // from the root, since the repeated items are content projected in. Calling `detectChanges`
          // instead does not properly check the projected content.

          this.ngZone.run(
          /**
          * @return {?}
          */
          function () {
            return _this48._changeDetectorRef.markForCheck();
          });
          /** @type {?} */

          var runAfterChangeDetection = this._runAfterChangeDetection;
          this._runAfterChangeDetection = [];

          var _iterator4 = _createForOfIteratorHelper(runAfterChangeDetection),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var fn = _step4.value;
              fn();
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
        /**
         * Calculates the `style.width` and `style.height` for the spacer element.
         * @private
         * @return {?}
         */

      }, {
        key: "_calculateSpacerSize",
        value: function _calculateSpacerSize() {
          this._totalContentHeight = this.orientation === 'horizontal' ? '' : "".concat(this._totalContentSize, "px");
          this._totalContentWidth = this.orientation === 'horizontal' ? "".concat(this._totalContentSize, "px") : '';
        }
      }, {
        key: "orientation",
        get: function get() {
          return this._orientation;
        }
        /**
         * @param {?} orientation
         * @return {?}
         */
        ,
        set: function set(orientation) {
          if (this._orientation !== orientation) {
            this._orientation = orientation;

            this._calculateSpacerSize();
          }
        }
      }]);

      return CdkVirtualScrollViewport;
    }(CdkScrollable);

    CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) {
      return new (t || CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ViewportRuler, 8));
    };

    CdkVirtualScrollViewport.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CdkVirtualScrollViewport,
      selectors: [["cdk-virtual-scroll-viewport"]],
      viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
        }
      },
      hostAttrs: [1, "cdk-virtual-scroll-viewport"],
      hostVars: 4,
      hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
        }
      },
      inputs: {
        orientation: "orientation"
      },
      outputs: {
        scrolledIndexChange: "scrolledIndexChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: CdkScrollable,
        useExisting: CdkVirtualScrollViewport
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 4,
      consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]],
      template: function CdkVirtualScrollViewport_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
        }
      },
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    CdkVirtualScrollViewport.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [VIRTUAL_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: ScrollDispatcher
      }, {
        type: ViewportRuler,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    CdkVirtualScrollViewport.propDecorators = {
      orientation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      scrolledIndexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      _contentWrapper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['contentWrapper', {
          "static": true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualScrollViewport, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'cdk-virtual-scroll-viewport',
          template: "<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class=\"cdk-virtual-scroll-spacer\"\n     [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>\n",
          host: {
            'class': 'cdk-virtual-scroll-viewport',
            '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
            '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          providers: [{
            provide: CdkScrollable,
            useExisting: CdkVirtualScrollViewport
          }],
          styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [VIRTUAL_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: ScrollDispatcher
        }, {
          type: ViewportRuler,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        scrolledIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _contentWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['contentWrapper', {
            "static": true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/virtual-for-of.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Helper to extract size from a DOM Node.
     * @param {?} orientation
     * @param {?} node
     * @return {?}
     */


    function getSize(orientation, node) {
      /** @type {?} */
      var el =
      /** @type {?} */
      node;

      if (!el.getBoundingClientRect) {
        return 0;
      }
      /** @type {?} */


      var rect = el.getBoundingClientRect();
      return orientation == 'horizontal' ? rect.width : rect.height;
    }
    /**
     * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
     * container.
     * @template T
     */


    var CdkVirtualForOf = /*#__PURE__*/function () {
      /**
       * @param {?} _viewContainerRef
       * @param {?} _template
       * @param {?} _differs
       * @param {?} _viewport
       * @param {?} ngZone
       */
      function CdkVirtualForOf(_viewContainerRef, _template, _differs, _viewport, ngZone) {
        var _this49 = this;

        _classCallCheck(this, CdkVirtualForOf);

        this._viewContainerRef = _viewContainerRef;
        this._template = _template;
        this._differs = _differs;
        this._viewport = _viewport;
        /**
         * Emits when the rendered view of the data changes.
         */

        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject that emits when a new DataSource instance is given.
         */

        this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * The size of the cache used to store templates that are not being used for re-use later.
         * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
         */

        this.cdkVirtualForTemplateCacheSize = 20;
        /**
         * Emits whenever the data in the current DataSource changes.
         */

        this.dataStream = this._dataSourceChanges.pipe( // Start off with null `DataSource`.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(
        /** @type {?} */
        null), // Bundle up the previous and current data sources so we can work with both.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              prev = _ref2[0],
              cur = _ref2[1];

          return _this49._changeDataSource(prev, cur);
        }), // Replay the last emitted data when someone subscribes.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        /**
         * The differ used to calculate changes to the data.
         */

        this._differ = null;
        /**
         * The template cache used to hold on ot template instancess that have been stamped out, but don't
         * currently need to be rendered. These instances will be reused in the future rather than
         * stamping out brand new ones.
         */

        this._templateCache = [];
        /**
         * Whether the rendered data should be updated during the next ngDoCheck cycle.
         */

        this._needsUpdate = false;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataStream.subscribe(
        /**
        * @param {?} data
        * @return {?}
        */
        function (data) {
          _this49._data = data;

          _this49._onRenderedDataChange();
        });

        this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(
        /**
        * @param {?} range
        * @return {?}
        */
        function (range) {
          _this49._renderedRange = range;
          ngZone.run(
          /**
          * @return {?}
          */
          function () {
            return _this49.viewChange.next(_this49._renderedRange);
          });

          _this49._onRenderedDataChange();
        });

        this._viewport.attach(this);
      }
      /**
       * The DataSource to display.
       * @return {?}
       */


      _createClass(CdkVirtualForOf, [{
        key: "measureRangeSize",

        /**
         * Measures the combined size (width for horizontal orientation, height for vertical) of all items
         * in the specified range. Throws an error if the range includes items that are not currently
         * rendered.
         * @param {?} range
         * @param {?} orientation
         * @return {?}
         */
        value: function measureRangeSize(range, orientation) {
          if (range.start >= range.end) {
            return 0;
          }

          if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
            throw Error("Error: attempted to measure an item that isn't rendered.");
          } // The index into the list of rendered views for the first item in the range.

          /** @type {?} */


          var renderedStartIndex = range.start - this._renderedRange.start; // The length of the range we're measuring.

          /** @type {?} */

          var rangeLen = range.end - range.start; // Loop over all root nodes for all items in the range and sum up their size.

          /** @type {?} */

          var totalSize = 0;
          /** @type {?} */

          var i = rangeLen;

          while (i--) {
            /** @type {?} */
            var view =
            /** @type {?} */
            this._viewContainerRef.get(i + renderedStartIndex);
            /** @type {?} */


            var j = view ? view.rootNodes.length : 0;

            while (j--) {
              totalSize += getSize(orientation,
              /** @type {?} */
              view.rootNodes[j]);
            }
          }

          return totalSize;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this._differ && this._needsUpdate) {
            // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
            // this list being rendered (can use simpler algorithm) vs needs update due to data actually
            // changing (need to do this diff).

            /** @type {?} */
            var changes = this._differ.diff(this._renderedItems);

            if (!changes) {
              this._updateContext();
            } else {
              this._applyChanges(changes);
            }

            this._needsUpdate = false;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._viewport.detach();

          this._dataSourceChanges.next();

          this._dataSourceChanges.complete();

          this.viewChange.complete();

          this._destroyed.next();

          this._destroyed.complete();

          var _iterator5 = _createForOfIteratorHelper(this._templateCache),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var view = _step5.value;
              view.destroy();
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
        /**
         * React to scroll state changes in the viewport.
         * @private
         * @return {?}
         */

      }, {
        key: "_onRenderedDataChange",
        value: function _onRenderedDataChange() {
          if (!this._renderedRange) {
            return;
          }

          this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);

          if (!this._differ) {
            this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
          }

          this._needsUpdate = true;
        }
        /**
         * Swap out one `DataSource` for another.
         * @private
         * @param {?} oldDs
         * @param {?} newDs
         * @return {?}
         */

      }, {
        key: "_changeDataSource",
        value: function _changeDataSource(oldDs, newDs) {
          if (oldDs) {
            oldDs.disconnect(this);
          }

          this._needsUpdate = true;
          return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
        /**
         * Update the `CdkVirtualForOfContext` for all views.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateContext",
        value: function _updateContext() {
          /** @type {?} */
          var count = this._data.length;
          /** @type {?} */

          var i = this._viewContainerRef.length;

          while (i--) {
            /** @type {?} */
            var view =
            /** @type {?} */
            this._viewContainerRef.get(i);

            view.context.index = this._renderedRange.start + i;
            view.context.count = count;

            this._updateComputedContextProperties(view.context);

            view.detectChanges();
          }
        }
        /**
         * Apply changes to the DOM.
         * @private
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "_applyChanges",
        value: function _applyChanges(changes) {
          var _this50 = this;

          // Rearrange the views to put them in the right location.
          changes.forEachOperation(
          /**
          * @param {?} record
          * @param {?} adjustedPreviousIndex
          * @param {?} currentIndex
          * @return {?}
          */
          function (record, adjustedPreviousIndex, currentIndex) {
            if (record.previousIndex == null) {
              // Item added.
              // Item added.

              /** @type {?} */
              var view = _this50._insertViewForNewItem(
              /** @type {?} */
              currentIndex);

              view.context.$implicit = record.item;
            } else if (currentIndex == null) {
              // Item removed.
              _this50._cacheView(_this50._detachView(
              /** @type {?} */
              adjustedPreviousIndex));
            } else {
              // Item moved.
              // Item moved.

              /** @type {?} */
              var _view =
              /** @type {?} */
              _this50._viewContainerRef.get(
              /** @type {?} */
              adjustedPreviousIndex);

              _this50._viewContainerRef.move(_view, currentIndex);

              _view.context.$implicit = record.item;
            }
          }); // Update $implicit for any items that had an identity change.

          changes.forEachIdentityChange(
          /**
          * @param {?} record
          * @return {?}
          */
          function (record) {
            /** @type {?} */
            var view =
            /** @type {?} */
            _this50._viewContainerRef.get(
            /** @type {?} */
            record.currentIndex);

            view.context.$implicit = record.item;
          }); // Update the context variables on all items.

          /** @type {?} */

          var count = this._data.length;
          /** @type {?} */

          var i = this._viewContainerRef.length;

          while (i--) {
            /** @type {?} */
            var view =
            /** @type {?} */
            this._viewContainerRef.get(i);

            view.context.index = this._renderedRange.start + i;
            view.context.count = count;

            this._updateComputedContextProperties(view.context);
          }
        }
        /**
         * Cache the given detached view.
         * @private
         * @param {?} view
         * @return {?}
         */

      }, {
        key: "_cacheView",
        value: function _cacheView(view) {
          if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
            this._templateCache.push(view);
          } else {
            /** @type {?} */
            var index = this._viewContainerRef.indexOf(view); // It's very unlikely that the index will ever be -1, but just in case,
            // destroy the view on its own, otherwise destroy it through the
            // container to ensure that all the references are removed.


            if (index === -1) {
              view.destroy();
            } else {
              this._viewContainerRef.remove(index);
            }
          }
        }
        /**
         * Inserts a view for a new item, either from the cache or by creating a new one.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_insertViewForNewItem",
        value: function _insertViewForNewItem(index) {
          return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
        }
        /**
         * Update the computed properties on the `CdkVirtualForOfContext`.
         * @private
         * @param {?} context
         * @return {?}
         */

      }, {
        key: "_updateComputedContextProperties",
        value: function _updateComputedContextProperties(context) {
          context.first = context.index === 0;
          context.last = context.index === context.count - 1;
          context.even = context.index % 2 === 0;
          context.odd = !context.even;
        }
        /**
         * Creates a new embedded view and moves it to the given index
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_createEmbeddedViewAt",
        value: function _createEmbeddedViewAt(index) {
          // Note that it's important that we insert the item directly at the proper index,
          // rather than inserting it and the moving it in place, because if there's a directive
          // on the same node that injects the `ViewContainerRef`, Angular will insert another
          // comment node which can throw off the move when it's being repeated for all items.
          return this._viewContainerRef.createEmbeddedView(this._template, {
            $implicit:
            /** @type {?} */
            null,
            // It's guaranteed that the iterable is not "undefined" or "null" because we only
            // generate views for elements if the "cdkVirtualForOf" iterable has elements.
            cdkVirtualForOf:
            /** @type {?} */
            this._cdkVirtualForOf,
            index: -1,
            count: -1,
            first: false,
            last: false,
            odd: false,
            even: false
          }, index);
        }
        /**
         * Inserts a recycled view from the cache at the given index.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_insertViewFromCache",
        value: function _insertViewFromCache(index) {
          /** @type {?} */
          var cachedView = this._templateCache.pop();

          if (cachedView) {
            this._viewContainerRef.insert(cachedView, index);
          }

          return cachedView || null;
        }
        /**
         * Detaches the embedded view at the given index.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_detachView",
        value: function _detachView(index) {
          return (
            /** @type {?} */
            this._viewContainerRef.detach(index)
          );
        }
      }, {
        key: "cdkVirtualForOf",
        get: function get() {
          return this._cdkVirtualForOf;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._cdkVirtualForOf = value;

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["isDataSource"])(value)) {
            this._dataSourceChanges.next(value);
          } else {
            // Slice the value if its an NgIterable to ensure we're working with an array.
            this._dataSourceChanges.next(new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["ArrayDataSource"](Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(value) ? value : Array.prototype.slice.call(value || [])));
          }
        }
        /**
         * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
         * the item and produces a value to be used as the item's identity when tracking changes.
         * @return {?}
         */

      }, {
        key: "cdkVirtualForTrackBy",
        get: function get() {
          return this._cdkVirtualForTrackBy;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        ,
        set: function set(fn) {
          var _this51 = this;

          this._needsUpdate = true;
          this._cdkVirtualForTrackBy = fn ?
          /**
          * @param {?} index
          * @param {?} item
          * @return {?}
          */
          function (index, item) {
            return fn(index + (_this51._renderedRange ? _this51._renderedRange.start : 0), item);
          } : undefined;
        }
        /**
         * The template used to stamp out new elements.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "cdkVirtualForTemplate",
        set: function set(value) {
          if (value) {
            this._needsUpdate = true;
            this._template = value;
          }
        }
      }]);

      return CdkVirtualForOf;
    }();

    CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) {
      return new (t || CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    CdkVirtualForOf.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkVirtualForOf,
      selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
      inputs: {
        cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize",
        cdkVirtualForOf: "cdkVirtualForOf",
        cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
        cdkVirtualForTemplate: "cdkVirtualForTemplate"
      }
    });
    /** @nocollapse */

    CdkVirtualForOf.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
      }, {
        type: CdkVirtualScrollViewport,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    CdkVirtualForOf.propDecorators = {
      cdkVirtualForOf: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cdkVirtualForTrackBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cdkVirtualForTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cdkVirtualForTemplateCacheSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualForOf, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdkVirtualFor][cdkVirtualForOf]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
        }, {
          type: CdkVirtualScrollViewport,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        cdkVirtualForTemplateCacheSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForOf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTrackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/scrolling-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var CdkScrollableModule = function CdkScrollableModule() {
      _classCallCheck(this, CdkScrollableModule);
    };

    CdkScrollableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CdkScrollableModule
    });
    CdkScrollableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CdkScrollableModule_Factory(t) {
        return new (t || CdkScrollableModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CdkScrollableModule, {
        declarations: [CdkScrollable],
        exports: [CdkScrollable]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: [CdkScrollable],
          declarations: [CdkScrollable]
        }]
      }], null, null);
    })();

    var ScrollingModule = function ScrollingModule() {
      _classCallCheck(this, ScrollingModule);
    };

    ScrollingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ScrollingModule
    });
    ScrollingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ScrollingModule_Factory(t) {
        return new (t || ScrollingModule)();
      },
      imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScrollingModule, {
        declarations: function declarations() {
          return [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport];
        },
        imports: function imports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule];
        },
        exports: function exports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule],
          exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport],
          declarations: [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=scrolling.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js ***!
    \***************************************************************************/

  /*! exports provided: EXPANSION_PANEL_ANIMATION_TIMING, MAT_ACCORDION, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelContent, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle, matExpansionAnimations */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015ExpansionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EXPANSION_PANEL_ANIMATION_TIMING", function () {
      return EXPANSION_PANEL_ANIMATION_TIMING;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_ACCORDION", function () {
      return MAT_ACCORDION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_EXPANSION_PANEL_DEFAULT_OPTIONS", function () {
      return MAT_EXPANSION_PANEL_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAccordion", function () {
      return MatAccordion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionModule", function () {
      return MatExpansionModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanel", function () {
      return MatExpansionPanel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanelActionRow", function () {
      return MatExpansionPanelActionRow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanelContent", function () {
      return MatExpansionPanelContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanelDescription", function () {
      return MatExpansionPanelDescription;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanelHeader", function () {
      return MatExpansionPanelHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatExpansionPanelTitle", function () {
      return MatExpansionPanelTitle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matExpansionAnimations", function () {
      return matExpansionAnimations;
    });
    /* harmony import */


    var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/accordion */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/accordion.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/expansion/accordion-base.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Base interface for a `MatAccordion`.
     * \@docs-private
     * @record
     */


    var _c0 = ["body"];

    function MatExpansionPanel_ng_template_5_Template(rf, ctx) {}

    var _c1 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
    var _c2 = ["mat-expansion-panel-header", "*", "mat-action-row"];

    var _c3 = function _c3(a0, a1) {
      return {
        collapsedHeight: a0,
        expandedHeight: a1
      };
    };

    var _c4 = function _c4(a0, a1) {
      return {
        value: a0,
        params: a1
      };
    };

    function MatExpansionPanelHeader_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 2);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@indicatorRotate", ctx_r0._getExpandedState());
      }
    }

    var _c5 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
    var _c6 = ["mat-panel-title", "mat-panel-description", "*"];

    function MatAccordionBase() {}

    if (false) {}
    /**
     * Token used to provide a `MatAccordion` to `MatExpansionPanel`.
     * Used primarily to avoid circular imports between `MatAccordion` and `MatExpansionPanel`.
     * @type {?}
     */


    var MAT_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_ACCORDION');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/expansion/expansion-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Time and timing curve for expansion panel animations.
     * @type {?}
     */

    var EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
    /**
     * Animations used by the Material expansion panel.
     *
     * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
     * causes the animation state of moved components to become `void` upon exit, and not update again
     * upon reentry into the DOM.  This can lead a to situation for the expansion panel where the state
     * of the panel is `expanded` or `collapsed` but the animation state is `void`.
     *
     * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
     * are defined to have the same styles. Since angular animates from the current styles to the
     * destination state's style definition, in situations where we are moving from `void`'s styles to
     * `collapsed` this acts a noop since no style values change.
     *
     * In the case where angular's animation state is out of sync with the expansion panel's state, the
     * expansion panel being `expanded` and angular animations being `void`, the animation from the
     * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
     * occur as expected.
     *
     * Angular Bug: https://github.com/angular/angular/issues/18847
     *
     * \@docs-private
     * @type {?}
     */

    var matExpansionAnimations = {
      /**
       * Animation that rotates the indicator arrow.
       */
      indicatorRotate: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('indicatorRotate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'rotate(0deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'rotate(180deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING))]),

      /**
       * Animation that expands and collapses the panel header height.
       */
      expansionHeaderHeight: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('expansionHeight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        height: '{{collapsedHeight}}'
      }), {
        params: {
          collapsedHeight: '48px'
        }
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        height: '{{expandedHeight}}'
      }), {
        params: {
          expandedHeight: '64px'
        }
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["query"])('@indicatorRotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animateChild"])(), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING)]))]),

      /**
       * Animation that expands and collapses the panel content.
       */
      bodyExpansion: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('bodyExpansion', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        height: '0px',
        visibility: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        height: '*',
        visibility: 'visible'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING))])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/expansion/expansion-panel-content.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Expansion panel content that will be rendered lazily
     * after the panel is opened for the first time.
     */

    var MatExpansionPanelContent =
    /**
     * @param {?} _template
     */
    function MatExpansionPanelContent(_template) {
      _classCallCheck(this, MatExpansionPanelContent);

      this._template = _template;
    };

    MatExpansionPanelContent.ɵfac = function MatExpansionPanelContent_Factory(t) {
      return new (t || MatExpansionPanelContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]));
    };

    MatExpansionPanelContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatExpansionPanelContent,
      selectors: [["ng-template", "matExpansionPanelContent", ""]]
    });
    /** @nocollapse */

    MatExpansionPanelContent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'ng-template[matExpansionPanelContent]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/expansion/expansion-panel.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Counter for generating unique element ids.
     * @type {?}
     */


    var uniqueId = 0;
    /**
     * Object that can be used to override the default options
     * for all of the expansion panels in a module.
     * @record
     */

    function MatExpansionPanelDefaultOptions() {}

    if (false) {}
    /**
     * Injection token that can be used to configure the defalt
     * options for the expansion panel component.
     * @type {?}
     */


    var MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');
    var ɵ0 = undefined;
    /**
     * `<mat-expansion-panel>`
     *
     * This component can be used as a single element to show expandable content, or as one of
     * multiple children of an element with the MatAccordion directive attached.
     */

    var MatExpansionPanel = /*#__PURE__*/function (_angular_cdk_accordio) {
      _inherits(MatExpansionPanel, _angular_cdk_accordio);

      var _super14 = _createSuper(MatExpansionPanel);

      /**
       * @param {?} accordion
       * @param {?} _changeDetectorRef
       * @param {?} _uniqueSelectionDispatcher
       * @param {?} _viewContainerRef
       * @param {?} _document
       * @param {?} _animationMode
       * @param {?=} defaultOptions
       */
      function MatExpansionPanel(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
        var _this52;

        _classCallCheck(this, MatExpansionPanel);

        _this52 = _super14.call(this, accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
        _this52._viewContainerRef = _viewContainerRef;
        _this52._animationMode = _animationMode;
        _this52._hideToggle = false;
        /**
         * An event emitted after the body's expansion animation happens.
         */

        _this52.afterExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * An event emitted after the body's collapse animation happens.
         */

        _this52.afterCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Stream that emits for changes in `\@Input` properties.
         */

        _this52._inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        /**
         * ID for the associated header element. Used for a11y labelling.
         */

        _this52._headerId = "mat-expansion-panel-header-".concat(uniqueId++);
        /**
         * Stream of body animation done events.
         */

        _this52._bodyAnimationDone = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        _this52.accordion = accordion;
        _this52._document = _document; // We need a Subject with distinctUntilChanged, because the `done` event
        // fires twice on some browsers. See https://github.com/angular/angular/issues/24084

        _this52._bodyAnimationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(
        /**
        * @param {?} x
        * @param {?} y
        * @return {?}
        */
        function (x, y) {
          return x.fromState === y.fromState && x.toState === y.toState;
        })).subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (event.fromState !== 'void') {
            if (event.toState === 'expanded') {
              _this52.afterExpand.emit();
            } else if (event.toState === 'collapsed') {
              _this52.afterCollapse.emit();
            }
          }
        });

        if (defaultOptions) {
          _this52.hideToggle = defaultOptions.hideToggle;
        }

        return _this52;
      }
      /**
       * Whether the toggle indicator should be hidden.
       * @return {?}
       */


      _createClass(MatExpansionPanel, [{
        key: "_hasSpacing",

        /**
         * Determines whether the expansion panel should have spacing between it and its siblings.
         * @return {?}
         */
        value: function _hasSpacing() {
          if (this.accordion) {
            return this.expanded && this.accordion.displayMode === 'default';
          }

          return false;
        }
        /**
         * Gets the expanded state string.
         * @return {?}
         */

      }, {
        key: "_getExpandedState",
        value: function _getExpandedState() {
          return this.expanded ? 'expanded' : 'collapsed';
        }
        /**
         * Toggles the expanded state of the expansion panel.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          this.expanded = !this.expanded;
        }
        /**
         * Sets the expanded state of the expansion panel to false.
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          this.expanded = false;
        }
        /**
         * Sets the expanded state of the expansion panel to true.
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          this.expanded = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this53 = this;

          if (this._lazyContent) {
            // Render the content as soon as the panel becomes open.
            this.opened.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(
            /** @type {?} */
            null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
            /**
            * @return {?}
            */
            function () {
              return _this53.expanded && !_this53._portal;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
            /**
            * @return {?}
            */
            function () {
              _this53._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](_this53._lazyContent._template, _this53._viewContainerRef);
            });
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._inputChanges.next(changes);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(MatExpansionPanel.prototype), "ngOnDestroy", this).call(this);

          this._bodyAnimationDone.complete();

          this._inputChanges.complete();
        }
        /**
         * Checks whether the expansion panel's content contains the currently-focused element.
         * @return {?}
         */

      }, {
        key: "_containsFocus",
        value: function _containsFocus() {
          if (this._body) {
            /** @type {?} */
            var focusedElement = this._document.activeElement;
            /** @type {?} */

            var bodyElement = this._body.nativeElement;
            return focusedElement === bodyElement || bodyElement.contains(focusedElement);
          }

          return false;
        }
      }, {
        key: "hideToggle",
        get: function get() {
          return this._hideToggle || this.accordion && this.accordion.hideToggle;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
        /**
         * The position of the expansion indicator.
         * @return {?}
         */

      }, {
        key: "togglePosition",
        get: function get() {
          return this._togglePosition || this.accordion && this.accordion.togglePosition;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._togglePosition = value;
        }
      }]);

      return MatExpansionPanel;
    }(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionItem"]);

    MatExpansionPanel.ɵfac = function MatExpansionPanel_Factory(t) {
      return new (t || MatExpansionPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["UniqueSelectionDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8));
    };

    MatExpansionPanel.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MatExpansionPanel,
      selectors: [["mat-expansion-panel"]],
      contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelContent, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
        }
      },
      viewQuery: function MatExpansionPanel_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._body = _t.first);
        }
      },
      hostAttrs: [1, "mat-expansion-panel"],
      hostVars: 6,
      hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-expanded", ctx.expanded)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-expansion-panel-spacing", ctx._hasSpacing());
        }
      },
      inputs: {
        disabled: "disabled",
        expanded: "expanded",
        hideToggle: "hideToggle",
        togglePosition: "togglePosition"
      },
      outputs: {
        opened: "opened",
        closed: "closed",
        expandedChange: "expandedChange",
        afterExpand: "afterExpand",
        afterCollapse: "afterCollapse"
      },
      exportAs: ["matExpansionPanel"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([// Provide MatAccordion as undefined to prevent nested expansion panels from registering
      // to the same accordion.
      {
        provide: MAT_ACCORDION,
        useValue: ɵ0
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c2,
      decls: 7,
      vars: 4,
      consts: [["role", "region", 1, "mat-expansion-panel-content", 3, "id"], ["body", ""], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
      template: function MatExpansionPanel_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@bodyExpansion.done", function MatExpansionPanel_Template_div_animation_bodyExpansion_done_1_listener($event) {
            return ctx._bodyAnimationDone.next($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](4, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MatExpansionPanel_ng_template_5_Template, 0, 0, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](6, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@bodyExpansion", ctx._getExpandedState())("id", ctx.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-labelledby", ctx._headerId);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkPortalOutlet", ctx._portal);
        }
      },
      directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"]],
      styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
      encapsulation: 2,
      data: {
        animation: [matExpansionAnimations.bodyExpansion]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    MatExpansionPanel.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_ACCORDION]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["UniqueSelectionDispatcher"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    MatExpansionPanel.propDecorators = {
      hideToggle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      togglePosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      afterExpand: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      afterCollapse: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      _lazyContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
        args: [MatExpansionPanelContent]
      }],
      _body: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: ['body']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-expansion-panel',
          exportAs: 'matExpansionPanel',
          template: "<ng-content select=\"mat-expansion-panel-header\"></ng-content>\n<div class=\"mat-expansion-panel-content\"\n     role=\"region\"\n     [@bodyExpansion]=\"_getExpandedState()\"\n     (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\"\n     [attr.aria-labelledby]=\"_headerId\"\n     [id]=\"id\"\n     #body>\n  <div class=\"mat-expansion-panel-body\">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n  </div>\n  <ng-content select=\"mat-action-row\"></ng-content>\n</div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          inputs: ['disabled', 'expanded'],
          outputs: ['opened', 'closed', 'expandedChange'],
          animations: [matExpansionAnimations.bodyExpansion],
          providers: [// Provide MatAccordion as undefined to prevent nested expansion panels from registering
          // to the same accordion.
          {
            provide: MAT_ACCORDION,
            useValue: ɵ0
          }],
          host: {
            'class': 'mat-expansion-panel',
            '[class.mat-expanded]': 'expanded',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
            '[class.mat-expansion-panel-spacing]': '_hasSpacing()'
          },
          styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_ACCORDION]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["UniqueSelectionDispatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, {
        afterExpand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        afterCollapse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        hideToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        togglePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _lazyContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [MatExpansionPanelContent]
        }],
        _body: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['body']
        }]
      });
    })();

    if (false) {}

    var MatExpansionPanelActionRow = function MatExpansionPanelActionRow() {
      _classCallCheck(this, MatExpansionPanelActionRow);
    };

    MatExpansionPanelActionRow.ɵfac = function MatExpansionPanelActionRow_Factory(t) {
      return new (t || MatExpansionPanelActionRow)();
    };

    MatExpansionPanelActionRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatExpansionPanelActionRow,
      selectors: [["mat-action-row"]],
      hostAttrs: [1, "mat-action-row"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelActionRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'mat-action-row',
          host: {
            "class": 'mat-action-row'
          }
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/expansion/expansion-panel-header.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * `<mat-expansion-panel-header>`
     *
     * This component corresponds to the header element of an `<mat-expansion-panel>`.
     */


    var MatExpansionPanelHeader = /*#__PURE__*/function () {
      /**
       * @param {?} panel
       * @param {?} _element
       * @param {?} _focusMonitor
       * @param {?} _changeDetectorRef
       * @param {?=} defaultOptions
       */
      function MatExpansionPanelHeader(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions) {
        var _this54 = this;

        _classCallCheck(this, MatExpansionPanelHeader);

        this.panel = panel;
        this._element = _element;
        this._focusMonitor = _focusMonitor;
        this._changeDetectorRef = _changeDetectorRef;
        this._parentChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
        /**
         * Whether Angular animations in the panel header should be disabled.
         */

        this._animationsDisabled = true;
        /** @type {?} */

        var accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
        /**
        * @param {?} changes
        * @return {?}
        */
        function (changes) {
          return !!(changes['hideToggle'] || changes['togglePosition']);
        })) : rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"]; // Since the toggle state depends on an @Input on the panel, we
        // need to subscribe and trigger change detection manually.

        this._parentChangeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
        /**
        * @param {?} changes
        * @return {?}
        */
        function (changes) {
          return !!(changes['hideToggle'] || changes['disabled'] || changes['togglePosition']);
        }))).subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this54._changeDetectorRef.markForCheck();
        }); // Avoids focus being lost if the panel contained the focused element and was closed.

        panel.closed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(
        /**
        * @return {?}
        */
        function () {
          return panel._containsFocus();
        })).subscribe(
        /**
        * @return {?}
        */
        function () {
          return _focusMonitor.focusVia(_element, 'program');
        });

        _focusMonitor.monitor(_element).subscribe(
        /**
        * @param {?} origin
        * @return {?}
        */
        function (origin) {
          if (origin && panel.accordion) {
            panel.accordion._handleHeaderFocus(_this54);
          }
        });

        if (defaultOptions) {
          this.expandedHeight = defaultOptions.expandedHeight;
          this.collapsedHeight = defaultOptions.collapsedHeight;
        }
      }
      /**
       * @return {?}
       */


      _createClass(MatExpansionPanelHeader, [{
        key: "_animationStarted",
        value: function _animationStarted() {
          // Currently the `expansionHeight` animation has a `void => collapsed` transition which is
          // there to work around a bug in Angular (see #13088), however this introduces a different
          // issue. The new transition will cause the header to animate in on init (see #16067), if the
          // consumer has set a header height that is different from the default one. We work around it
          // by disabling animations on the header and re-enabling them after the first animation has run.
          // Note that Angular dispatches animation events even if animations are disabled. Ideally this
          // wouldn't be necessary if we remove the `void => collapsed` transition, but we have to wait
          // for https://github.com/angular/angular/issues/18847 to be resolved.
          this._animationsDisabled = false;
        }
        /**
         * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "_toggle",

        /**
         * Toggles the expanded state of the panel.
         * @return {?}
         */
        value: function _toggle() {
          if (!this.disabled) {
            this.panel.toggle();
          }
        }
        /**
         * Gets whether the panel is expanded.
         * @return {?}
         */

      }, {
        key: "_isExpanded",
        value: function _isExpanded() {
          return this.panel.expanded;
        }
        /**
         * Gets the expanded state string of the panel.
         * @return {?}
         */

      }, {
        key: "_getExpandedState",
        value: function _getExpandedState() {
          return this.panel._getExpandedState();
        }
        /**
         * Gets the panel id.
         * @return {?}
         */

      }, {
        key: "_getPanelId",
        value: function _getPanelId() {
          return this.panel.id;
        }
        /**
         * Gets the toggle position for the header.
         * @return {?}
         */

      }, {
        key: "_getTogglePosition",
        value: function _getTogglePosition() {
          return this.panel.togglePosition;
        }
        /**
         * Gets whether the expand indicator should be shown.
         * @return {?}
         */

      }, {
        key: "_showToggle",
        value: function _showToggle() {
          return !this.panel.hideToggle && !this.panel.disabled;
        }
        /**
         * Handle keydown event calling to toggle() if appropriate.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_keydown",
        value: function _keydown(event) {
          switch (event.keyCode) {
            // Toggle for space and enter keys.
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["SPACE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"]:
              if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event)) {
                event.preventDefault();

                this._toggle();
              }

              break;

            default:
              if (this.panel.accordion) {
                this.panel.accordion._handleHeaderKeydown(event);
              }

              return;
          }
        }
        /**
         * Focuses the panel header. Implemented as a part of `FocusableOption`.
         * \@docs-private
         * @param {?=} origin Origin of the action that triggered the focus.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
          var options = arguments.length > 1 ? arguments[1] : undefined;

          this._focusMonitor.focusVia(this._element, origin, options);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._parentChangeSubscription.unsubscribe();

          this._focusMonitor.stopMonitoring(this._element);
        }
      }, {
        key: "disabled",
        get: function get() {
          return this.panel.disabled;
        }
      }]);

      return MatExpansionPanelHeader;
    }();

    MatExpansionPanelHeader.ɵfac = function MatExpansionPanelHeader_Factory(t) {
      return new (t || MatExpansionPanelHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatExpansionPanel, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8));
    };

    MatExpansionPanelHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MatExpansionPanelHeader,
      selectors: [["mat-expansion-panel-header"]],
      hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
      hostVars: 19,
      hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcomponentHostSyntheticListener"]("@expansionHeight.start", function MatExpansionPanelHeader_animation_expansionHeight_start_HostBindingHandler() {
            return ctx._animationStarted();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
            return ctx._toggle();
          })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
            return ctx._keydown($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", ctx.panel._headerId)("tabindex", ctx.disabled ? 0 - 1 : 0)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵupdateSyntheticHostBinding"]("@.disabled", ctx._animationsDisabled)("@expansionHeight", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](16, _c4, ctx._getExpandedState(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](13, _c3, ctx.collapsedHeight, ctx.expandedHeight)));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before");
        }
      },
      inputs: {
        expandedHeight: "expandedHeight",
        collapsedHeight: "collapsedHeight"
      },
      ngContentSelectors: _c6,
      decls: 5,
      vars: 1,
      consts: [[1, "mat-content"], ["class", "mat-expansion-indicator", 4, "ngIf"], [1, "mat-expansion-indicator"]],
      template: function MatExpansionPanelHeader_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](3, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MatExpansionPanelHeader_span_4_Template, 1, 1, "span", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._showToggle());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;position:relative}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}\n"],
      encapsulation: 2,
      data: {
        animation: [matExpansionAnimations.indicatorRotate, matExpansionAnimations.expansionHeaderHeight]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    MatExpansionPanelHeader.ctorParameters = function () {
      return [{
        type: MatExpansionPanel,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }];
    };

    MatExpansionPanelHeader.propDecorators = {
      expandedHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      collapsedHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-expansion-panel-header',
          template: "<span class=\"mat-content\">\n  <ng-content select=\"mat-panel-title\"></ng-content>\n  <ng-content select=\"mat-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<span [@indicatorRotate]=\"_getExpandedState()\" *ngIf=\"_showToggle()\"\n      class=\"mat-expansion-indicator\"></span>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          animations: [matExpansionAnimations.indicatorRotate, matExpansionAnimations.expansionHeaderHeight],
          host: {
            'class': 'mat-expansion-panel-header mat-focus-indicator',
            'role': 'button',
            '[attr.id]': 'panel._headerId',
            '[attr.tabindex]': 'disabled ? -1 : 0',
            '[attr.aria-controls]': '_getPanelId()',
            '[attr.aria-expanded]': '_isExpanded()',
            '[attr.aria-disabled]': 'panel.disabled',
            '[class.mat-expanded]': '_isExpanded()',
            '[class.mat-expansion-toggle-indicator-after]': "_getTogglePosition() === 'after'",
            '[class.mat-expansion-toggle-indicator-before]': "_getTogglePosition() === 'before'",
            '(click)': '_toggle()',
            '(keydown)': '_keydown($event)',
            '[@.disabled]': '_animationsDisabled',
            '(@expansionHeight.start)': '_animationStarted()',
            '[@expansionHeight]': "{\n        value: _getExpandedState(),\n        params: {\n          collapsedHeight: collapsedHeight,\n          expandedHeight: expandedHeight\n        }\n    }"
          },
          styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;position:relative}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}\n"]
        }]
      }], function () {
        return [{
          type: MatExpansionPanel,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      }, {
        expandedHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        collapsedHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * `<mat-panel-description>`
     *
     * This directive is to be used inside of the MatExpansionPanelHeader component.
     */


    var MatExpansionPanelDescription = function MatExpansionPanelDescription() {
      _classCallCheck(this, MatExpansionPanelDescription);
    };

    MatExpansionPanelDescription.ɵfac = function MatExpansionPanelDescription_Factory(t) {
      return new (t || MatExpansionPanelDescription)();
    };

    MatExpansionPanelDescription.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatExpansionPanelDescription,
      selectors: [["mat-panel-description"]],
      hostAttrs: [1, "mat-expansion-panel-header-description"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelDescription, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'mat-panel-description',
          host: {
            "class": 'mat-expansion-panel-header-description'
          }
        }]
      }], null, null);
    })();
    /**
     * `<mat-panel-title>`
     *
     * This directive is to be used inside of the MatExpansionPanelHeader component.
     */


    var MatExpansionPanelTitle = function MatExpansionPanelTitle() {
      _classCallCheck(this, MatExpansionPanelTitle);
    };

    MatExpansionPanelTitle.ɵfac = function MatExpansionPanelTitle_Factory(t) {
      return new (t || MatExpansionPanelTitle)();
    };

    MatExpansionPanelTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatExpansionPanelTitle,
      selectors: [["mat-panel-title"]],
      hostAttrs: [1, "mat-expansion-panel-header-title"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionPanelTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'mat-panel-title',
          host: {
            "class": 'mat-expansion-panel-header-title'
          }
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/expansion/accordion.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive for a Material Design Accordion.
     */


    var MatAccordion = /*#__PURE__*/function (_angular_cdk_accordio2) {
      _inherits(MatAccordion, _angular_cdk_accordio2);

      var _super15 = _createSuper(MatAccordion);

      function MatAccordion() {
        var _this55;

        _classCallCheck(this, MatAccordion);

        _this55 = _super15.apply(this, arguments);
        /**
         * Headers belonging to this accordion.
         */

        _this55._ownHeaders = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
        _this55._hideToggle = false;
        /**
         * Display mode used for all expansion panels in the accordion. Currently two display
         * modes exist:
         *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
         *     panel at a different elevation from the rest of the accordion.
         *  flat - no spacing is placed around expanded panels, showing all panels at the same
         *     elevation.
         */

        _this55.displayMode = 'default';
        /**
         * The position of the expansion indicator.
         */

        _this55.togglePosition = 'after';
        return _this55;
      }
      /**
       * Whether the expansion indicator should be hidden.
       * @return {?}
       */


      _createClass(MatAccordion, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this56 = this;

          this._headers.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._headers)).subscribe(
          /**
          * @param {?} headers
          * @return {?}
          */
          function (headers) {
            _this56._ownHeaders.reset(headers.filter(
            /**
            * @param {?} header
            * @return {?}
            */
            function (header) {
              return header.panel.accordion === _this56;
            }));

            _this56._ownHeaders.notifyOnChanges();
          });

          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusKeyManager"](this._ownHeaders).withWrap();
        }
        /**
         * Handles keyboard events coming in from the panel headers.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleHeaderKeydown",
        value: function _handleHeaderKeydown(event) {
          var keyCode = event.keyCode;
          /** @type {?} */

          var manager = this._keyManager;

          if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"]) {
            if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event)) {
              manager.setFirstItemActive();
              event.preventDefault();
            }
          } else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["END"]) {
            if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event)) {
              manager.setLastItemActive();
              event.preventDefault();
            }
          } else {
            this._keyManager.onKeydown(event);
          }
        }
        /**
         * @param {?} header
         * @return {?}
         */

      }, {
        key: "_handleHeaderFocus",
        value: function _handleHeaderFocus(header) {
          this._keyManager.updateActiveItem(header);
        }
      }, {
        key: "hideToggle",
        get: function get() {
          return this._hideToggle;
        }
        /**
         * @param {?} show
         * @return {?}
         */
        ,
        set: function set(show) {
          this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(show);
        }
      }]);

      return MatAccordion;
    }(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordion"]);

    MatAccordion.ɵfac = function MatAccordion_Factory(t) {
      return ɵMatAccordion_BaseFactory(t || MatAccordion);
    };

    MatAccordion.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatAccordion,
      selectors: [["mat-accordion"]],
      contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelHeader, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._headers = _t);
        }
      },
      hostAttrs: [1, "mat-accordion"],
      hostVars: 2,
      hostBindings: function MatAccordion_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-accordion-multi", ctx.multi);
        }
      },
      inputs: {
        multi: "multi",
        displayMode: "displayMode",
        togglePosition: "togglePosition",
        hideToggle: "hideToggle"
      },
      exportAs: ["matAccordion"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: MAT_ACCORDION,
        useExisting: MatAccordion
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
    });
    MatAccordion.propDecorators = {
      _headers: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [MatExpansionPanelHeader, {
          descendants: true
        }]
      }],
      hideToggle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      displayMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      togglePosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }]
    };

    var ɵMatAccordion_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MatAccordion);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatAccordion, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'mat-accordion',
          exportAs: 'matAccordion',
          inputs: ['multi'],
          providers: [{
            provide: MAT_ACCORDION,
            useExisting: MatAccordion
          }],
          host: {
            "class": 'mat-accordion',
            // Class binding which is only used by the test harness as there is no other
            // way for the harness to detect if multiple panel support is enabled.
            '[class.mat-accordion-multi]': 'this.multi'
          }
        }]
      }], null, {
        displayMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        togglePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        hideToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _headers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [MatExpansionPanelHeader, {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/expansion/expansion-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatExpansionModule = function MatExpansionModule() {
      _classCallCheck(this, MatExpansionModule);
    };

    MatExpansionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: MatExpansionModule
    });
    MatExpansionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function MatExpansionModule_Factory(t) {
        return new (t || MatExpansionModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatExpansionModule, {
        declarations: function declarations() {
          return [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]];
        },
        exports: function exports() {
          return [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatExpansionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_0__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"]],
          exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
          declarations: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/expansion/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=expansion.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js ***!
    \************************************************************************/

  /*! exports provided: MAT_SELECT_CONFIG, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, MatSelect, MatSelectChange, MatSelectModule, MatSelectTrigger, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, matSelectAnimations */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015SelectJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECT_CONFIG", function () {
      return MAT_SELECT_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY", function () {
      return MAT_SELECT_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER", function () {
      return MAT_SELECT_SCROLL_STRATEGY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY", function () {
      return MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelect", function () {
      return MatSelect;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelectChange", function () {
      return MatSelectChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelectModule", function () {
      return MatSelectModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSelectTrigger", function () {
      return MatSelectTrigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function () {
      return SELECT_ITEM_HEIGHT_EM;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function () {
      return SELECT_MULTIPLE_PANEL_PADDING_X;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function () {
      return SELECT_PANEL_INDENT_PADDING_X;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function () {
      return SELECT_PANEL_MAX_HEIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function () {
      return SELECT_PANEL_PADDING_X;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function () {
      return SELECT_PANEL_VIEWPORT_PADDING;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matSelectAnimations", function () {
      return matSelectAnimations;
    });
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
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
     * Generated from: src/material/select/select-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The following are all the animations for the mat-select component, with each
     * const containing the metadata for one animation.
     *
     * The values below match the implementation of the AngularJS Material mat-select animation.
     * \@docs-private
     * @type {?}
     */


    var _c0 = ["trigger"];
    var _c1 = ["panel"];

    function MatSelect_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.placeholder || "\xA0");
      }
    }

    function MatSelect_span_5_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.triggerValue || "\xA0");
      }
    }

    function MatSelect_span_5_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 0, ["*ngSwitchCase", "true"]);
      }
    }

    function MatSelect_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MatSelect_span_5_span_1_Template, 2, 1, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MatSelect_span_5_2_Template, 1, 0, undefined, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", !!ctx_r3.customTrigger);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);
      }
    }

    function MatSelect_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13, 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("@transformPanel.done", function MatSelect_ng_template_8_Template_div_animation_transformPanel_done_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r8._panelDoneAnimatingStream.next($event.toState);
        })("keydown", function MatSelect_ng_template_8_Template_div_keydown_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r10._handleKeydown($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3, 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transformPanelWrap", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("mat-select-panel ", ctx_r4._getPanelTheme(), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("transform-origin", ctx_r4._transformOrigin)("font-size", ctx_r4._triggerFontSize, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r4.panelClass)("@transformPanel", ctx_r4.multiple ? "showing-multiple" : "showing");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx_r4.id + "-panel");
      }
    }

    var _c2 = [[["mat-select-trigger"]], "*"];
    var _c3 = ["mat-select-trigger", "*"];
    var matSelectAnimations = {
      /**
       * This animation ensures the select's overlay panel animation (transformPanel) is called when
       * closing the select.
       * This is needed due to https://github.com/angular/angular/issues/23302
       */
      transformPanelWrap: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('transformPanelWrap', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["query"])('@transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animateChild"])()], {
        optional: true
      }))]),

      /**
       * This animation transforms the select's overlay panel on and off the page.
       *
       * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
       * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
       * side to ensure the option text correctly overlaps the trigger text.
       *
       * When the panel is removed from the DOM, it simply fades out linearly.
       */
      transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        transform: 'scaleY(0.8)',
        minWidth: '100%',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 1,
        minWidth: 'calc(100% + 32px)',
        // 32px = 2 * 16px padding
        transform: 'scaleY(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('showing-multiple', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 1,
        minWidth: 'calc(100% + 64px)',
        // 64px = 48px padding on the left + 16px padding on the right
        transform: 'scaleY(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 0
      })))])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/select/select-errors.ts
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
     * Returns an exception to be thrown when attempting to change a select's `multiple` option
     * after initialization.
     * \@docs-private
     * @return {?}
     */

    function getMatSelectDynamicMultipleError() {
      return Error('Cannot change `multiple` mode of select after initialization.');
    }
    /**
     * Returns an exception to be thrown when attempting to assign a non-array value to a select
     * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
     * resetting the value.
     * \@docs-private
     * @return {?}
     */


    function getMatSelectNonArrayValueError() {
      return Error('Value must be an array in multiple-selection mode.');
    }
    /**
     * Returns an exception to be thrown when assigning a non-function value to the comparator
     * used to determine if a value corresponds to an option. Note that whether the function
     * actually takes two values and returns a boolean is not checked.
     * @return {?}
     */


    function getMatSelectNonFunctionValueError() {
      return Error('`compareWith` must be a function.');
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/select/select.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var nextUniqueId = 0;
    /**
     * The max height of the select's overlay panel
     * @type {?}
     */

    var SELECT_PANEL_MAX_HEIGHT = 256;
    /**
     * The panel's padding on the x-axis
     * @type {?}
     */

    var SELECT_PANEL_PADDING_X = 16;
    /**
     * The panel's x axis padding if it is indented (e.g. there is an option group).
     * @type {?}
     */

    var SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
    /**
     * The height of the select items in `em` units.
     * @type {?}
     */

    var SELECT_ITEM_HEIGHT_EM = 3; // TODO(josephperrott): Revert to a constant after 2018 spec updates are fully merged.

    /**
     * Distance between the panel edge and the option text in
     * multi-selection mode.
     *
     * Calculated as:
     * (SELECT_PANEL_PADDING_X * 1.5) + 16 = 40
     * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
     * The checkbox width is 16px.
     * @type {?}
     */

    var SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + 16;
    /**
     * The select panel will only "fit" inside the viewport if it is positioned at
     * this value or more away from the viewport boundary.
     * @type {?}
     */

    var SELECT_PANEL_VIEWPORT_PADDING = 8;
    /**
     * Injection token that determines the scroll handling while a select is open.
     * @type {?}
     */

    var MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-select-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition();
        }
      );
    }
    /**
     * Object that can be used to configure the default options for the select module.
     * @record
     */


    function MatSelectConfig() {}

    if (false) {}
    /**
     * Injection token that can be used to provide the default options the select module.
     * @type {?}
     */


    var MAT_SELECT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MAT_SELECT_CONFIG');
    /**
     * \@docs-private
     * @type {?}
     */

    var MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
      provide: MAT_SELECT_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
      useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    /**
     * Change event object that is emitted when the select value has changed.
     */

    var MatSelectChange =
    /**
     * @param {?} source
     * @param {?} value
     */
    function MatSelectChange(source, value) {
      _classCallCheck(this, MatSelectChange);

      this.source = source;
      this.value = value;
    };

    if (false) {} // Boilerplate for applying mixins to MatSelect.

    /**
     * \@docs-private
     */


    var MatSelectBase =
    /**
     * @param {?} _elementRef
     * @param {?} _defaultErrorStateMatcher
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} ngControl
     */
    function MatSelectBase(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
      _classCallCheck(this, MatSelectBase);

      this._elementRef = _elementRef;
      this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
      this._parentForm = _parentForm;
      this._parentFormGroup = _parentFormGroup;
      this.ngControl = ngControl;
    };

    if (false) {}
    /** @type {?} */


    var _MatSelectMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinErrorState"])(MatSelectBase))));
    /**
     * Allows the user to customize the trigger that is displayed when the select has a value.
     */


    var MatSelectTrigger = function MatSelectTrigger() {
      _classCallCheck(this, MatSelectTrigger);
    };

    MatSelectTrigger.ɵfac = function MatSelectTrigger_Factory(t) {
      return new (t || MatSelectTrigger)();
    };

    MatSelectTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: MatSelectTrigger,
      selectors: [["mat-select-trigger"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelectTrigger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: 'mat-select-trigger'
        }]
      }], null, null);
    })();

    var MatSelect = /*#__PURE__*/function (_MatSelectMixinBase2) {
      _inherits(MatSelect, _MatSelectMixinBase2);

      var _super16 = _createSuper(MatSelect);

      /**
       * @param {?} _viewportRuler
       * @param {?} _changeDetectorRef
       * @param {?} _ngZone
       * @param {?} _defaultErrorStateMatcher
       * @param {?} elementRef
       * @param {?} _dir
       * @param {?} _parentForm
       * @param {?} _parentFormGroup
       * @param {?} _parentFormField
       * @param {?} ngControl
       * @param {?} tabIndex
       * @param {?} scrollStrategyFactory
       * @param {?} _liveAnnouncer
       * @param {?=} defaults
       */
      function MatSelect(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer, defaults) {
        var _this57;

        _classCallCheck(this, MatSelect);

        _this57 = _super16.call(this, elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        _this57._viewportRuler = _viewportRuler;
        _this57._changeDetectorRef = _changeDetectorRef;
        _this57._ngZone = _ngZone;
        _this57._dir = _dir;
        _this57._parentFormField = _parentFormField;
        _this57.ngControl = ngControl;
        _this57._liveAnnouncer = _liveAnnouncer;
        /**
         * Whether or not the overlay panel is open.
         */

        _this57._panelOpen = false;
        /**
         * Whether filling out the select is required in the form.
         */

        _this57._required = false;
        /**
         * The scroll position of the overlay panel, calculated to center the selected option.
         */

        _this57._scrollTop = 0;
        /**
         * Whether the component is in multiple selection mode.
         */

        _this57._multiple = false;
        /**
         * Comparison function to specify which option is displayed. Defaults to object equality.
         */

        _this57._compareWith =
        /**
        * @param {?} o1
        * @param {?} o2
        * @return {?}
        */
        function (o1, o2) {
          return o1 === o2;
        };
        /**
         * Unique id for this input.
         */


        _this57._uid = "mat-select-".concat(nextUniqueId++);
        /**
         * Emits whenever the component is destroyed.
         */

        _this57._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * The cached font-size of the trigger element.
         */

        _this57._triggerFontSize = 0;
        /**
         * `View -> model callback called when value changes`
         */

        _this57._onChange =
        /**
        * @return {?}
        */
        function () {};
        /**
         * `View -> model callback called when select has been touched`
         */


        _this57._onTouched =
        /**
        * @return {?}
        */
        function () {};
        /**
         * The IDs of child options to be passed to the aria-owns attribute.
         */


        _this57._optionIds = '';
        /**
         * The value of the select panel's transform-origin property.
         */

        _this57._transformOrigin = 'top';
        /**
         * Emits when the panel element is finished transforming in.
         */

        _this57._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * The y-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text.
         * when the panel opens. Will change based on the y-position of the selected option.
         */

        _this57._offsetY = 0;
        /**
         * This position config ensures that the top "start" corner of the overlay
         * is aligned with with the top "start" of the origin by default (overlapping
         * the trigger completely). If the panel cannot fit below the trigger, it
         * will fall back to a position above the trigger.
         */

        _this57._positions = [{
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'top'
        }, {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'bottom'
        }];
        /**
         * Whether the component is disabling centering of the active option over the trigger.
         */

        _this57._disableOptionCentering = false;
        _this57._focused = false;
        /**
         * A name for this control that can be used by `mat-form-field`.
         */

        _this57.controlType = 'mat-select';
        /**
         * Aria label of the select. If not specified, the placeholder will be used as label.
         */

        _this57.ariaLabel = '';
        /**
         * Combined stream of all of the child options' change events.
         */

        _this57.optionSelectionChanges =
        /** @type {?} */
        Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["defer"])(
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          var options = _this57.options;

          if (options) {
            return options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(options), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(
            /**
            * @return {?}
            */
            function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"]).apply(void 0, _toConsumableArray(options.map(
              /**
              * @param {?} option
              * @return {?}
              */
              function (option) {
                return option.onSelectionChange;
              })));
            }));
          }

          return _this57._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(
          /**
          * @return {?}
          */
          function () {
            return _this57.optionSelectionChanges;
          }));
        });
        /**
         * Event emitted when the select panel has been toggled.
         */

        _this57.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event emitted when the select has been opened.
         */

        _this57._openedStream = _this57.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(
        /**
        * @param {?} o
        * @return {?}
        */
        function (o) {
          return o;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(
        /**
        * @return {?}
        */
        function () {}));
        /**
         * Event emitted when the select has been closed.
         */

        _this57._closedStream = _this57.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(
        /**
        * @param {?} o
        * @return {?}
        */
        function (o) {
          return !o;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(
        /**
        * @return {?}
        */
        function () {}));
        /**
         * Event emitted when the selected value has been changed by the user.
         */

        _this57.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event that emits whenever the raw value of the select changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */

        _this57.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();

        if (_this57.ngControl) {
          // Note: we provide the value accessor through here, instead of
          // the `providers` to avoid running into a circular import.
          _this57.ngControl.valueAccessor = _assertThisInitialized(_this57);
        }

        _this57._scrollStrategyFactory = scrollStrategyFactory;
        _this57._scrollStrategy = _this57._scrollStrategyFactory();
        _this57.tabIndex = parseInt(tabIndex) || 0; // Force setter to be called in case id was not specified.

        _this57.id = _this57.id;

        if (defaults) {
          if (defaults.disableOptionCentering != null) {
            _this57.disableOptionCentering = defaults.disableOptionCentering;
          }

          if (defaults.typeaheadDebounceInterval != null) {
            _this57.typeaheadDebounceInterval = defaults.typeaheadDebounceInterval;
          }
        }

        return _this57;
      }
      /**
       * Whether the select is focused.
       * @return {?}
       */


      _createClass(MatSelect, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this58 = this;

          this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](this.multiple);
          this.stateChanges.next(); // We need `distinctUntilChanged` here, because some browsers will
          // fire the animation end event twice for the same animation. See:
          // https://github.com/angular/angular/issues/24084

          this._panelDoneAnimatingStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this58.panelOpen) {
              _this58._scrollTop = 0;

              _this58.openedChange.emit(true);
            } else {
              _this58.openedChange.emit(false);

              _this58.overlayDir.offsetX = 0;

              _this58._changeDetectorRef.markForCheck();
            }
          });

          this._viewportRuler.change().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this58._panelOpen) {
              _this58._triggerRect = _this58.trigger.nativeElement.getBoundingClientRect();

              _this58._changeDetectorRef.markForCheck();
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this59 = this;

          this._initKeyManager();

          this._selectionModel.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            event.added.forEach(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option.select();
            });
            event.removed.forEach(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option.deselect();
            });
          });

          this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this59._resetOptions();

            _this59._initializeSelection();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.ngControl) {
            this.updateErrorState();
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
          // the parent form field know to run change detection when the disabled state changes.
          if (changes['disabled']) {
            this.stateChanges.next();
          }

          if (changes['typeaheadDebounceInterval'] && this._keyManager) {
            this._keyManager.withTypeAhead(this._typeaheadDebounceInterval);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroy.next();

          this._destroy.complete();

          this.stateChanges.complete();
        }
        /**
         * Toggles the overlay panel open or closed.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          this.panelOpen ? this.close() : this.open();
        }
        /**
         * Opens the overlay panel.
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          var _this60 = this;

          if (this.disabled || !this.options || !this.options.length || this._panelOpen) {
            return;
          }

          this._triggerRect = this.trigger.nativeElement.getBoundingClientRect(); // Note: The computed font-size will be a string pixel value (e.g. "16px").
          // `parseInt` ignores the trailing 'px' and converts this to a number.

          this._triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || '0');
          this._panelOpen = true;

          this._keyManager.withHorizontalOrientation(null);

          this._calculateOverlayPosition();

          this._highlightCorrectOption();

          this._changeDetectorRef.markForCheck(); // Set the font size on the panel element once it exists.


          this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this60._triggerFontSize && _this60.overlayDir.overlayRef && _this60.overlayDir.overlayRef.overlayElement) {
              _this60.overlayDir.overlayRef.overlayElement.style.fontSize = "".concat(_this60._triggerFontSize, "px");
            }
          });
        }
        /**
         * Closes the overlay panel and focuses the host element.
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          if (this._panelOpen) {
            this._panelOpen = false;

            this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');

            this._changeDetectorRef.markForCheck();

            this._onTouched();
          }
        }
        /**
         * Sets the select's value. Part of the ControlValueAccessor interface
         * required to integrate with Angular's core forms API.
         *
         * @param {?} value New value to be written to the model.
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (this.options) {
            this._setSelectionByValue(value);
          }
        }
        /**
         * Saves a callback function to be invoked when the select's value
         * changes from user input. Part of the ControlValueAccessor interface
         * required to integrate with Angular's core forms API.
         *
         * @param {?} fn Callback to be triggered when the value changes.
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        }
        /**
         * Saves a callback function to be invoked when the select is blurred
         * by the user. Part of the ControlValueAccessor interface required
         * to integrate with Angular's core forms API.
         *
         * @param {?} fn Callback to be triggered when the component has been touched.
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        }
        /**
         * Disables the select. Part of the ControlValueAccessor interface required
         * to integrate with Angular's core forms API.
         *
         * @param {?} isDisabled Sets whether the component is disabled.
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;

          this._changeDetectorRef.markForCheck();

          this.stateChanges.next();
        }
        /**
         * Whether or not the overlay panel is open.
         * @return {?}
         */

      }, {
        key: "_isRtl",

        /**
         * Whether the element is in RTL mode.
         * @return {?}
         */
        value: function _isRtl() {
          return this._dir ? this._dir.value === 'rtl' : false;
        }
        /**
         * Handles all keydown events on the select.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          if (!this.disabled) {
            this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
          }
        }
        /**
         * Handles keyboard events while the select is closed.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleClosedKeydown",
        value: function _handleClosedKeydown(event) {
          /** @type {?} */
          var keyCode = event.keyCode;
          /** @type {?} */

          var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"];
          /** @type {?} */

          var isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"];
          /** @type {?} */

          var manager = this._keyManager; // Open the select on ALT + arrow key to match the native <select>

          if (!manager.isTyping() && isOpenKey && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event) || (this.multiple || event.altKey) && isArrowKey) {
            event.preventDefault(); // prevents the page from scrolling down when pressing space

            this.open();
          } else if (!this.multiple) {
            /** @type {?} */
            var previouslySelectedOption = this.selected;

            if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]) {
              keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
              event.preventDefault();
            } else {
              manager.onKeydown(event);
            }
            /** @type {?} */


            var selectedOption = this.selected; // Since the value has changed, we need to announce it ourselves.

            if (selectedOption && previouslySelectedOption !== selectedOption) {
              // We set a duration on the live announcement, because we want the live element to be
              // cleared after a while so that users can't navigate to it using the arrow keys.
              this._liveAnnouncer.announce(
              /** @type {?} */
              selectedOption.viewValue, 10000);
            }
          }
        }
        /**
         * Handles keyboard events when the selected is open.
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleOpenKeydown",
        value: function _handleOpenKeydown(event) {
          /** @type {?} */
          var manager = this._keyManager;
          /** @type {?} */

          var keyCode = event.keyCode;
          /** @type {?} */

          var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"];
          /** @type {?} */

          var isTyping = manager.isTyping();

          if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]) {
            event.preventDefault();
            keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
          } else if (isArrowKey && event.altKey) {
            // Close the select on ALT + arrow key to match the native <select>
            event.preventDefault();
            this.close(); // Don't do anything in this case if the user is typing,
            // because the typing sequence can include the space key.
          } else if (!isTyping && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]) && manager.activeItem && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) {
            event.preventDefault();

            manager.activeItem._selectViaInteraction();
          } else if (!isTyping && this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["A"] && event.ctrlKey) {
            event.preventDefault();
            /** @type {?} */

            var hasDeselectedOptions = this.options.some(
            /**
            * @param {?} opt
            * @return {?}
            */
            function (opt) {
              return !opt.disabled && !opt.selected;
            });
            this.options.forEach(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              if (!option.disabled) {
                hasDeselectedOptions ? option.select() : option.deselect();
              }
            });
          } else {
            /** @type {?} */
            var previouslyFocusedIndex = manager.activeItemIndex;
            manager.onKeydown(event);

            if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
              manager.activeItem._selectViaInteraction();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onFocus",
        value: function _onFocus() {
          if (!this.disabled) {
            this._focused = true;
            this.stateChanges.next();
          }
        }
        /**
         * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
         * "blur" to the panel when it opens, causing a false positive.
         * @return {?}
         */

      }, {
        key: "_onBlur",
        value: function _onBlur() {
          this._focused = false;

          if (!this.disabled && !this.panelOpen) {
            this._onTouched();

            this._changeDetectorRef.markForCheck();

            this.stateChanges.next();
          }
        }
        /**
         * Callback that is invoked when the overlay panel has been attached.
         * @return {?}
         */

      }, {
        key: "_onAttached",
        value: function _onAttached() {
          var _this61 = this;

          this.overlayDir.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this61._changeDetectorRef.detectChanges();

            _this61._calculateOverlayOffsetX();

            _this61.panel.nativeElement.scrollTop = _this61._scrollTop;
          });
        }
        /**
         * Returns the theme to be used on the panel.
         * @return {?}
         */

      }, {
        key: "_getPanelTheme",
        value: function _getPanelTheme() {
          return this._parentFormField ? "mat-".concat(this._parentFormField.color) : '';
        }
        /**
         * Whether the select has a value.
         * @return {?}
         */

      }, {
        key: "_initializeSelection",

        /**
         * @private
         * @return {?}
         */
        value: function _initializeSelection() {
          var _this62 = this;

          // Defer setting the value in order to avoid the "Expression
          // has changed after it was checked" errors from Angular.
          Promise.resolve().then(
          /**
          * @return {?}
          */
          function () {
            _this62._setSelectionByValue(_this62.ngControl ? _this62.ngControl.value : _this62._value);

            _this62.stateChanges.next();
          });
        }
        /**
         * Sets the selected option based on a value. If no option can be
         * found with the designated value, the select trigger is cleared.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_setSelectionByValue",
        value: function _setSelectionByValue(value) {
          var _this63 = this;

          if (this.multiple && value) {
            if (!Array.isArray(value)) {
              throw getMatSelectNonArrayValueError();
            }

            this._selectionModel.clear();

            value.forEach(
            /**
            * @param {?} currentValue
            * @return {?}
            */
            function (currentValue) {
              return _this63._selectValue(currentValue);
            });

            this._sortValues();
          } else {
            this._selectionModel.clear();
            /** @type {?} */


            var correspondingOption = this._selectValue(value); // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what option the user interacted with last.


            if (correspondingOption) {
              this._keyManager.setActiveItem(correspondingOption);
            } else if (!this.panelOpen) {
              // Otherwise reset the highlighted option. Note that we only want to do this while
              // closed, because doing it while open can shift the user's focus unnecessarily.
              this._keyManager.setActiveItem(-1);
            }
          }

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Finds and selects and option based on its value.
         * @private
         * @param {?} value
         * @return {?} Option that has the corresponding value.
         */

      }, {
        key: "_selectValue",
        value: function _selectValue(value) {
          var _this64 = this;

          /** @type {?} */
          var correspondingOption = this.options.find(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            try {
              // Treat null as a special reset value.
              return option.value != null && _this64._compareWith(option.value, value);
            } catch (error) {
              if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])()) {
                // Notify developers of errors in their comparator.
                console.warn(error);
              }

              return false;
            }
          });

          if (correspondingOption) {
            this._selectionModel.select(correspondingOption);
          }

          return correspondingOption;
        }
        /**
         * Sets up a key manager to listen to keyboard events on the overlay panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_initKeyManager",
        value: function _initKeyManager() {
          var _this65 = this;

          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["ActiveDescendantKeyManager"](this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr').withAllowedModifierKeys(['shiftKey']);

          this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this65.panelOpen) {
              // Select the active item when tabbing away. This is consistent with how the native
              // select behaves. Note that we only want to do this in single selection mode.
              if (!_this65.multiple && _this65._keyManager.activeItem) {
                _this65._keyManager.activeItem._selectViaInteraction();
              } // Restore focus to the trigger before closing. Ensures that the focus
              // position won't be lost if the user got focus into the overlay.


              _this65.focus();

              _this65.close();
            }
          });

          this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(
          /**
          * @return {?}
          */
          function () {
            if (_this65._panelOpen && _this65.panel) {
              _this65._scrollActiveOptionIntoView();
            } else if (!_this65._panelOpen && !_this65.multiple && _this65._keyManager.activeItem) {
              _this65._keyManager.activeItem._selectViaInteraction();
            }
          });
        }
        /**
         * Drops current option subscriptions and IDs and resets from scratch.
         * @private
         * @return {?}
         */

      }, {
        key: "_resetOptions",
        value: function _resetOptions() {
          var _this66 = this;

          /** @type {?} */
          var changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(this.options.changes, this._destroy);
          this.optionSelectionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed)).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this66._onSelect(event.source, event.isUserInput);

            if (event.isUserInput && !_this66.multiple && _this66._panelOpen) {
              _this66.close();

              _this66.focus();
            }
          }); // Listen to changes in the internal state of the options and react accordingly.
          // Handles cases like the labels of the selected options changing.

          Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"]).apply(void 0, _toConsumableArray(this.options.map(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            return option._stateChanges;
          }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this66._changeDetectorRef.markForCheck();

            _this66.stateChanges.next();
          });

          this._setOptionIds();
        }
        /**
         * Invoked when an option is clicked.
         * @private
         * @param {?} option
         * @param {?} isUserInput
         * @return {?}
         */

      }, {
        key: "_onSelect",
        value: function _onSelect(option, isUserInput) {
          /** @type {?} */
          var wasSelected = this._selectionModel.isSelected(option);

          if (option.value == null && !this._multiple) {
            option.deselect();

            this._selectionModel.clear();

            this._propagateChanges(option.value);
          } else {
            if (wasSelected !== option.selected) {
              option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
            }

            if (isUserInput) {
              this._keyManager.setActiveItem(option);
            }

            if (this.multiple) {
              this._sortValues();

              if (isUserInput) {
                // In case the user selected the option with their mouse, we
                // want to restore focus back to the trigger, in order to
                // prevent the select keyboard controls from clashing with
                // the ones from `mat-option`.
                this.focus();
              }
            }
          }

          if (wasSelected !== this._selectionModel.isSelected(option)) {
            this._propagateChanges();
          }

          this.stateChanges.next();
        }
        /**
         * Sorts the selected values in the selected based on their order in the panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_sortValues",
        value: function _sortValues() {
          var _this67 = this;

          if (this.multiple) {
            /** @type {?} */
            var options = this.options.toArray();

            this._selectionModel.sort(
            /**
            * @param {?} a
            * @param {?} b
            * @return {?}
            */
            function (a, b) {
              return _this67.sortComparator ? _this67.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
            });

            this.stateChanges.next();
          }
        }
        /**
         * Emits change event to set the model value.
         * @private
         * @param {?=} fallbackValue
         * @return {?}
         */

      }, {
        key: "_propagateChanges",
        value: function _propagateChanges(fallbackValue) {
          /** @type {?} */
          var valueToEmit = null;

          if (this.multiple) {
            valueToEmit =
            /** @type {?} */
            this.selected.map(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option.value;
            });
          } else {
            valueToEmit = this.selected ?
            /** @type {?} */
            this.selected.value : fallbackValue;
          }

          this._value = valueToEmit;
          this.valueChange.emit(valueToEmit);

          this._onChange(valueToEmit);

          this.selectionChange.emit(new MatSelectChange(this, valueToEmit));

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Records option IDs to pass to the aria-owns property.
         * @private
         * @return {?}
         */

      }, {
        key: "_setOptionIds",
        value: function _setOptionIds() {
          this._optionIds = this.options.map(
          /**
          * @param {?} option
          * @return {?}
          */
          function (option) {
            return option.id;
          }).join(' ');
        }
        /**
         * Highlights the selected item. If no option is selected, it will highlight
         * the first item instead.
         * @private
         * @return {?}
         */

      }, {
        key: "_highlightCorrectOption",
        value: function _highlightCorrectOption() {
          if (this._keyManager) {
            if (this.empty) {
              this._keyManager.setFirstItemActive();
            } else {
              this._keyManager.setActiveItem(this._selectionModel.selected[0]);
            }
          }
        }
        /**
         * Scrolls the active option into view.
         * @private
         * @return {?}
         */

      }, {
        key: "_scrollActiveOptionIntoView",
        value: function _scrollActiveOptionIntoView() {
          /** @type {?} */
          var activeOptionIndex = this._keyManager.activeItemIndex || 0;
          /** @type {?} */

          var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(activeOptionIndex, this.options, this.optionGroups);
          this.panel.nativeElement.scrollTop = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_getOptionScrollPosition"])(activeOptionIndex + labelCount, this._getItemHeight(), this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
        }
        /**
         * Focuses the select element.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          this._elementRef.nativeElement.focus(options);
        }
        /**
         * Gets the index of the provided option in the option list.
         * @private
         * @param {?} option
         * @return {?}
         */

      }, {
        key: "_getOptionIndex",
        value: function _getOptionIndex(option) {
          return this.options.reduce(
          /**
          * @param {?} result
          * @param {?} current
          * @param {?} index
          * @return {?}
          */
          function (result, current, index) {
            if (result !== undefined) {
              return result;
            }

            return option === current ? index : undefined;
          }, undefined);
        }
        /**
         * Calculates the scroll position and x- and y-offsets of the overlay panel.
         * @private
         * @return {?}
         */

      }, {
        key: "_calculateOverlayPosition",
        value: function _calculateOverlayPosition() {
          /** @type {?} */
          var itemHeight = this._getItemHeight();
          /** @type {?} */


          var items = this._getItemCount();
          /** @type {?} */


          var panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
          /** @type {?} */

          var scrollContainerHeight = items * itemHeight; // The farthest the panel can be scrolled before it hits the bottom

          /** @type {?} */

          var maxScroll = scrollContainerHeight - panelHeight; // If no value is selected we open the popup to the first item.

          /** @type {?} */

          var selectedOptionOffset = this.empty ? 0 :
          /** @type {?} */
          this._getOptionIndex(this._selectionModel.selected[0]);
          selectedOptionOffset += Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(selectedOptionOffset, this.options, this.optionGroups); // We must maintain a scroll buffer so the selected option will be scrolled to the
          // center of the overlay panel rather than the top.

          /** @type {?} */

          var scrollBuffer = panelHeight / 2;
          this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
          this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);

          this._checkOverlayWithinViewport(maxScroll);
        }
        /**
         * Calculates the scroll position of the select's overlay panel.
         *
         * Attempts to center the selected option in the panel. If the option is
         * too high or too low in the panel to be scrolled to the center, it clamps the
         * scroll position to the min or max scroll positions respectively.
         * @param {?} selectedIndex
         * @param {?} scrollBuffer
         * @param {?} maxScroll
         * @return {?}
         */

      }, {
        key: "_calculateOverlayScroll",
        value: function _calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll) {
          /** @type {?} */
          var itemHeight = this._getItemHeight();
          /** @type {?} */


          var optionOffsetFromScrollTop = itemHeight * selectedIndex;
          /** @type {?} */

          var halfOptionHeight = itemHeight / 2; // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
          // scroll container, then subtracts the scroll buffer to scroll the option down to
          // the center of the overlay panel. Half the option height must be re-added to the
          // scrollTop so the option is centered based on its middle, not its top edge.

          /** @type {?} */

          var optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
          return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
        }
        /**
         * Returns the aria-label of the select component.
         * @return {?}
         */

      }, {
        key: "_getAriaLabel",
        value: function _getAriaLabel() {
          // If an ariaLabelledby value has been set by the consumer, the select should not overwrite the
          // `aria-labelledby` value by setting the ariaLabel to the placeholder.
          return this.ariaLabelledby ? null : this.ariaLabel || this.placeholder;
        }
        /**
         * Returns the aria-labelledby of the select component.
         * @return {?}
         */

      }, {
        key: "_getAriaLabelledby",
        value: function _getAriaLabelledby() {
          if (this.ariaLabelledby) {
            return this.ariaLabelledby;
          } // Note: we use `_getAriaLabel` here, because we want to check whether there's a
          // computed label. `this.ariaLabel` is only the user-specified label.


          if (!this._parentFormField || !this._parentFormField._hasFloatingLabel() || this._getAriaLabel()) {
            return null;
          }

          return this._parentFormField._labelId || null;
        }
        /**
         * Determines the `aria-activedescendant` to be set on the host.
         * @return {?}
         */

      }, {
        key: "_getAriaActiveDescendant",
        value: function _getAriaActiveDescendant() {
          if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
            return this._keyManager.activeItem.id;
          }

          return null;
        }
        /**
         * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text when
         * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
         * can't be calculated until the panel has been attached, because we need to know the
         * content width in order to constrain the panel within the viewport.
         * @private
         * @return {?}
         */

      }, {
        key: "_calculateOverlayOffsetX",
        value: function _calculateOverlayOffsetX() {
          /** @type {?} */
          var overlayRect = this.overlayDir.overlayRef.overlayElement.getBoundingClientRect();
          /** @type {?} */

          var viewportSize = this._viewportRuler.getViewportSize();
          /** @type {?} */


          var isRtl = this._isRtl();
          /** @type {?} */


          var paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X : SELECT_PANEL_PADDING_X * 2;
          /** @type {?} */

          var offsetX; // Adjust the offset, depending on the option padding.

          if (this.multiple) {
            offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
          } else {
            /** @type {?} */
            var selected = this._selectionModel.selected[0] || this.options.first;
            offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
          } // Invert the offset in LTR.


          if (!isRtl) {
            offsetX *= -1;
          } // Determine how much the select overflows on each side.

          /** @type {?} */


          var leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
          /** @type {?} */

          var rightOverflow = overlayRect.right + offsetX - viewportSize.width + (isRtl ? 0 : paddingWidth); // If the element overflows on either side, reduce the offset to allow it to fit.

          if (leftOverflow > 0) {
            offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
          } else if (rightOverflow > 0) {
            offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
          } // Set the offset directly in order to avoid having to go through change detection and
          // potentially triggering "changed after it was checked" errors. Round the value to avoid
          // blurry content in some browsers.


          this.overlayDir.offsetX = Math.round(offsetX);
          this.overlayDir.overlayRef.updatePosition();
        }
        /**
         * Calculates the y-offset of the select's overlay panel in relation to the
         * top start corner of the trigger. It has to be adjusted in order for the
         * selected option to be aligned over the trigger when the panel opens.
         * @private
         * @param {?} selectedIndex
         * @param {?} scrollBuffer
         * @param {?} maxScroll
         * @return {?}
         */

      }, {
        key: "_calculateOverlayOffsetY",
        value: function _calculateOverlayOffsetY(selectedIndex, scrollBuffer, maxScroll) {
          /** @type {?} */
          var itemHeight = this._getItemHeight();
          /** @type {?} */


          var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
          /** @type {?} */

          var maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
          /** @type {?} */

          var optionOffsetFromPanelTop; // Disable offset if requested by user by returning 0 as value to offset

          if (this._disableOptionCentering) {
            return 0;
          }

          if (this._scrollTop === 0) {
            optionOffsetFromPanelTop = selectedIndex * itemHeight;
          } else if (this._scrollTop === maxScroll) {
            /** @type {?} */
            var firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
            /** @type {?} */

            var selectedDisplayIndex = selectedIndex - firstDisplayedIndex; // The first item is partially out of the viewport. Therefore we need to calculate what
            // portion of it is shown in the viewport and account for it in our offset.

            /** @type {?} */

            var partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight; // Because the panel height is longer than the height of the options alone,
            // there is always extra padding at the top or bottom of the panel. When
            // scrolled to the very bottom, this padding is at the top of the panel and
            // must be added to the offset.

            optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
          } else {
            // If the option was scrolled to the middle of the panel using a scroll buffer,
            // its offset will be the scroll buffer minus the half height that was added to
            // center it.
            optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
          } // The final offset is the option's offset from the top, adjusted for the height difference,
          // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
          // The value is rounded to prevent some browsers from blurring the content.


          return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
        }
        /**
         * Checks that the attempted overlay position will fit within the viewport.
         * If it will not fit, tries to adjust the scroll position and the associated
         * y-offset so the panel can open fully on-screen. If it still won't fit,
         * sets the offset back to 0 to allow the fallback position to take over.
         * @private
         * @param {?} maxScroll
         * @return {?}
         */

      }, {
        key: "_checkOverlayWithinViewport",
        value: function _checkOverlayWithinViewport(maxScroll) {
          /** @type {?} */
          var itemHeight = this._getItemHeight();
          /** @type {?} */


          var viewportSize = this._viewportRuler.getViewportSize();
          /** @type {?} */


          var topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
          /** @type {?} */

          var bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
          /** @type {?} */

          var panelHeightTop = Math.abs(this._offsetY);
          /** @type {?} */

          var totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
          /** @type {?} */

          var panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;

          if (panelHeightBottom > bottomSpaceAvailable) {
            this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
          } else if (panelHeightTop > topSpaceAvailable) {
            this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
          } else {
            this._transformOrigin = this._getOriginBasedOnOption();
          }
        }
        /**
         * Adjusts the overlay panel up to fit in the viewport.
         * @private
         * @param {?} panelHeightBottom
         * @param {?} bottomSpaceAvailable
         * @return {?}
         */

      }, {
        key: "_adjustPanelUp",
        value: function _adjustPanelUp(panelHeightBottom, bottomSpaceAvailable) {
          // Browsers ignore fractional scroll offsets, so we need to round.

          /** @type {?} */
          var distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable); // Scrolls the panel up by the distance it was extending past the boundary, then
          // adjusts the offset by that amount to move the panel up into the viewport.

          this._scrollTop -= distanceBelowViewport;
          this._offsetY -= distanceBelowViewport;
          this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very top, it won't be able to fit the panel
          // by scrolling, so set the offset to 0 to allow the fallback position to take
          // effect.

          if (this._scrollTop <= 0) {
            this._scrollTop = 0;
            this._offsetY = 0;
            this._transformOrigin = "50% bottom 0px";
          }
        }
        /**
         * Adjusts the overlay panel down to fit in the viewport.
         * @private
         * @param {?} panelHeightTop
         * @param {?} topSpaceAvailable
         * @param {?} maxScroll
         * @return {?}
         */

      }, {
        key: "_adjustPanelDown",
        value: function _adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll) {
          // Browsers ignore fractional scroll offsets, so we need to round.

          /** @type {?} */
          var distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable); // Scrolls the panel down by the distance it was extending past the boundary, then
          // adjusts the offset by that amount to move the panel down into the viewport.

          this._scrollTop += distanceAboveViewport;
          this._offsetY += distanceAboveViewport;
          this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very bottom, it won't be able to fit the
          // panel by scrolling, so set the offset to 0 to allow the fallback position
          // to take effect.

          if (this._scrollTop >= maxScroll) {
            this._scrollTop = maxScroll;
            this._offsetY = 0;
            this._transformOrigin = "50% top 0px";
            return;
          }
        }
        /**
         * Sets the transform origin point based on the selected option.
         * @private
         * @return {?}
         */

      }, {
        key: "_getOriginBasedOnOption",
        value: function _getOriginBasedOnOption() {
          /** @type {?} */
          var itemHeight = this._getItemHeight();
          /** @type {?} */


          var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
          /** @type {?} */

          var originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
          return "50% ".concat(originY, "px 0px");
        }
        /**
         * Calculates the amount of items in the select. This includes options and group labels.
         * @private
         * @return {?}
         */

      }, {
        key: "_getItemCount",
        value: function _getItemCount() {
          return this.options.length + this.optionGroups.length;
        }
        /**
         * Calculates the height of the select's options.
         * @private
         * @return {?}
         */

      }, {
        key: "_getItemHeight",
        value: function _getItemHeight() {
          return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @param {?} ids
         * @return {?}
         */

      }, {
        key: "setDescribedByIds",
        value: function setDescribedByIds(ids) {
          this._ariaDescribedby = ids.join(' ');
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "onContainerClick",
        value: function onContainerClick() {
          this.focus();
          this.open();
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "focused",
        get: function get() {
          return this._focused || this._panelOpen;
        }
        /**
         * Placeholder to be shown if no value has been selected.
         * @return {?}
         */

      }, {
        key: "placeholder",
        get: function get() {
          return this._placeholder;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._placeholder = value;
          this.stateChanges.next();
        }
        /**
         * Whether the component is required.
         * @return {?}
         */

      }, {
        key: "required",
        get: function get() {
          return this._required;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
          this.stateChanges.next();
        }
        /**
         * Whether the user should be allowed to select multiple options.
         * @return {?}
         */

      }, {
        key: "multiple",
        get: function get() {
          return this._multiple;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (this._selectionModel) {
            throw getMatSelectDynamicMultipleError();
          }

          this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether to center the active option over the trigger.
         * @return {?}
         */

      }, {
        key: "disableOptionCentering",
        get: function get() {
          return this._disableOptionCentering;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disableOptionCentering = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
        }
        /**
         * Function to compare the option values with the selected values. The first argument
         * is a value from an option. The second is a value from the selection. A boolean
         * should be returned.
         * @return {?}
         */

      }, {
        key: "compareWith",
        get: function get() {
          return this._compareWith;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        ,
        set: function set(fn) {
          if (typeof fn !== 'function') {
            throw getMatSelectNonFunctionValueError();
          }

          this._compareWith = fn;

          if (this._selectionModel) {
            // A different comparator means the selection could change.
            this._initializeSelection();
          }
        }
        /**
         * Value of the select control.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this._value;
        }
        /**
         * @param {?} newValue
         * @return {?}
         */
        ,
        set: function set(newValue) {
          if (newValue !== this._value) {
            this.writeValue(newValue);
            this._value = newValue;
          }
        }
        /**
         * Time to wait in milliseconds after the last keystroke before moving focus to an item.
         * @return {?}
         */

      }, {
        key: "typeaheadDebounceInterval",
        get: function get() {
          return this._typeaheadDebounceInterval;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._typeaheadDebounceInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceNumberProperty"])(value);
        }
        /**
         * Unique id of the element.
         * @return {?}
         */

      }, {
        key: "id",
        get: function get() {
          return this._id;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._id = value || this._uid;
          this.stateChanges.next();
        }
      }, {
        key: "panelOpen",
        get: function get() {
          return this._panelOpen;
        }
        /**
         * The currently selected option.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
        }
        /**
         * The value displayed in the trigger.
         * @return {?}
         */

      }, {
        key: "triggerValue",
        get: function get() {
          if (this.empty) {
            return '';
          }

          if (this._multiple) {
            /** @type {?} */
            var selectedOptions = this._selectionModel.selected.map(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option.viewValue;
            });

            if (this._isRtl()) {
              selectedOptions.reverse();
            } // TODO(crisbeto): delimiter should be configurable for proper localization.


            return selectedOptions.join(', ');
          }

          return this._selectionModel.selected[0].viewValue;
        }
      }, {
        key: "empty",
        get: function get() {
          return !this._selectionModel || this._selectionModel.isEmpty();
        }
      }, {
        key: "shouldLabelFloat",
        get: function get() {
          return this._panelOpen || !this.empty;
        }
      }]);

      return MatSelect;
    }(_MatSelectMixinBase);

    MatSelect.ɵfac = function MatSelect_Factory(t) {
      return new (t || MatSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_SELECT_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_SELECT_CONFIG, 8));
    };

    MatSelect.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MatSelect,
      selectors: [["mat-select"]],
      contentQueries: function MatSelect_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatSelectTrigger, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.customTrigger = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.options = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
        }
      },
      viewQuery: function MatSelect_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.overlayDir = _t.first);
        }
      },
      hostAttrs: ["role", "listbox", 1, "mat-select"],
      hostVars: 19,
      hostBindings: function MatSelect_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function MatSelect_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          })("focus", function MatSelect_focus_HostBindingHandler() {
            return ctx._onFocus();
          })("blur", function MatSelect_blur_HostBindingHandler() {
            return ctx._onBlur();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("tabindex", ctx.tabIndex)("aria-label", ctx._getAriaLabel())("aria-labelledby", ctx._getAriaLabelledby())("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-owns", ctx.panelOpen ? ctx._optionIds : null)("aria-multiselectable", ctx.multiple)("aria-describedby", ctx._ariaDescribedby || null)("aria-activedescendant", ctx._getAriaActiveDescendant());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-select-disabled", ctx.disabled)("mat-select-invalid", ctx.errorState)("mat-select-required", ctx.required)("mat-select-empty", ctx.empty);
        }
      },
      inputs: {
        disabled: "disabled",
        disableRipple: "disableRipple",
        tabIndex: "tabIndex",
        ariaLabel: ["aria-label", "ariaLabel"],
        id: "id",
        disableOptionCentering: "disableOptionCentering",
        typeaheadDebounceInterval: "typeaheadDebounceInterval",
        placeholder: "placeholder",
        required: "required",
        multiple: "multiple",
        compareWith: "compareWith",
        value: "value",
        panelClass: "panelClass",
        ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
        errorStateMatcher: "errorStateMatcher",
        sortComparator: "sortComparator"
      },
      outputs: {
        openedChange: "openedChange",
        _openedStream: "opened",
        _closedStream: "closed",
        selectionChange: "selectionChange",
        valueChange: "valueChange"
      },
      exportAs: ["matSelect"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"],
        useExisting: MatSelect
      }, {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
        useExisting: MatSelect
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c3,
      decls: 9,
      vars: 9,
      consts: [["cdk-overlay-origin", "", "aria-hidden", "true", 1, "mat-select-trigger", 3, "click"], ["origin", "cdkOverlayOrigin", "trigger", ""], [1, "mat-select-value", 3, "ngSwitch"], ["class", "mat-select-placeholder", 4, "ngSwitchCase"], ["class", "mat-select-value-text", 3, "ngSwitch", 4, "ngSwitchCase"], [1, "mat-select-arrow-wrapper"], [1, "mat-select-arrow"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayOffsetY", "backdropClick", "attach", "detach"], [1, "mat-select-placeholder"], [1, "mat-select-value-text", 3, "ngSwitch"], [4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "mat-select-panel-wrap"], [3, "ngClass", "keydown"], ["panel", ""]],
      template: function MatSelect_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatSelect_Template_div_click_0_listener() {
            return ctx.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatSelect_span_4_Template, 2, 1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MatSelect_span_5_Template, 3, 2, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MatSelect_ng_template_8_Template, 4, 11, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("backdropClick", function MatSelect_Template_ng_template_backdropClick_8_listener() {
            return ctx.close();
          })("attach", function MatSelect_Template_ng_template_attach_8_listener() {
            return ctx._onAttached();
          })("detach", function MatSelect_Template_ng_template_detach_8_listener() {
            return ctx.close();
          });
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.empty);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.panelOpen)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayMinWidth", ctx._triggerRect == null ? null : ctx._triggerRect.width)("cdkConnectedOverlayOffsetY", ctx._offsetY);
        }
      },
      directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkOverlayOrigin"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}\n"],
      encapsulation: 2,
      data: {
        animation: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    MatSelect.ctorParameters = function () {
      return [{
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"]]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [MAT_SELECT_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [MAT_SELECT_CONFIG]
        }]
      }];
    };

    MatSelect.propDecorators = {
      trigger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['trigger']
      }],
      panel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['panel']
      }],
      overlayDir: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"]]
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
          descendants: true
        }]
      }],
      optionGroups: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"], {
          descendants: true
        }]
      }],
      panelClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      customTrigger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
        args: [MatSelectTrigger]
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      multiple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      disableOptionCentering: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
        args: ['aria-labelledby']
      }],
      errorStateMatcher: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      typeaheadDebounceInterval: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      sortComparator: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      openedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      _openedStream: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
        args: ['opened']
      }],
      _closedStream: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
        args: ['closed']
      }],
      selectionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }],
      valueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'mat-select',
          exportAs: 'matSelect',
          template: "<div cdk-overlay-origin\n     class=\"mat-select-trigger\"\n     aria-hidden=\"true\"\n     (click)=\"toggle()\"\n     #origin=\"cdkOverlayOrigin\"\n     #trigger>\n  <div class=\"mat-select-value\" [ngSwitch]=\"empty\">\n    <span class=\"mat-select-placeholder\" *ngSwitchCase=\"true\">{{placeholder || '\\u00A0'}}</span>\n    <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\">\n      <span *ngSwitchDefault>{{triggerValue || '\\u00A0'}}</span>\n      <ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content>\n    </span>\n  </div>\n\n  <div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div>\n</div>\n\n<ng-template\n  cdk-connected-overlay\n  cdkConnectedOverlayLockPosition\n  cdkConnectedOverlayHasBackdrop\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\n  [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"panelOpen\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayMinWidth]=\"_triggerRect?.width\"\n  [cdkConnectedOverlayOffsetY]=\"_offsetY\"\n  (backdropClick)=\"close()\"\n  (attach)=\"_onAttached()\"\n  (detach)=\"close()\">\n  <div class=\"mat-select-panel-wrap\" [@transformPanelWrap]>\n    <div\n      #panel\n      [attr.id]=\"id + '-panel'\"\n      class=\"mat-select-panel {{ _getPanelTheme() }}\"\n      [ngClass]=\"panelClass\"\n      [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\"\n      (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\"\n      [style.transformOrigin]=\"_transformOrigin\"\n      [style.font-size.px]=\"_triggerFontSize\"\n      (keydown)=\"_handleKeydown($event)\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
          inputs: ['disabled', 'disableRipple', 'tabIndex'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          host: {
            'role': 'listbox',
            '[attr.id]': 'id',
            '[attr.tabindex]': 'tabIndex',
            '[attr.aria-label]': '_getAriaLabel()',
            '[attr.aria-labelledby]': '_getAriaLabelledby()',
            '[attr.aria-required]': 'required.toString()',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[attr.aria-invalid]': 'errorState',
            '[attr.aria-owns]': 'panelOpen ? _optionIds : null',
            '[attr.aria-multiselectable]': 'multiple',
            '[attr.aria-describedby]': '_ariaDescribedby || null',
            '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
            '[class.mat-select-disabled]': 'disabled',
            '[class.mat-select-invalid]': 'errorState',
            '[class.mat-select-required]': 'required',
            '[class.mat-select-empty]': 'empty',
            'class': 'mat-select',
            '(keydown)': '_handleKeydown($event)',
            '(focus)': '_onFocus()',
            '(blur)': '_onBlur()'
          },
          animations: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel],
          providers: [{
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"],
            useExisting: MatSelect
          }, {
            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"],
            useExisting: MatSelect
          }],
          styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}\n"]
        }]
      }], function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_SELECT_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_SELECT_CONFIG]
          }]
        }];
      }, {
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['aria-label']
        }],
        openedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        _openedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
          args: ['opened']
        }],
        _closedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
          args: ['closed']
        }],
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        disableOptionCentering: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        typeaheadDebounceInterval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['trigger']
        }],
        panel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['panel']
        }],
        overlayDir: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"]]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], {
            descendants: true
          }]
        }],
        optionGroups: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptgroup"], {
            descendants: true
          }]
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        customTrigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatSelectTrigger]
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['aria-labelledby']
        }],
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        sortComparator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/select/select-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatSelectModule = function MatSelectModule() {
      _classCallCheck(this, MatSelectModule);
    };

    MatSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: MatSelectModule
    });
    MatSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function MatSelectModule_Factory(t) {
        return new (t || MatSelectModule)();
      },
      providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatSelectModule, {
        declarations: function declarations() {
          return [MatSelect, MatSelectTrigger];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
        },
        exports: function exports() {
          return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
          exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
          declarations: [MatSelect, MatSelectTrigger],
          providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/select/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=select.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~dashboard-dashboard-module~modal-edit-product-modal-edit-product-module~products-products-mo~0565d8ce-es5.js.map