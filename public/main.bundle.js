webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot([], { useHash: false })
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header_wrapper{\n    background: #2A2A2A;\n    height: 50px;\n    position: fixed;\n    float: left;\n    width: 100%;\n    z-index: 100;\n}\n.header_wrapper span.logo_title{\n    color: #fff;\n    font-size: 25px;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.header_wrapper span.logo_title a{\n    color: inherit;\n    text-decoration: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"ui-g header_wrapper\">\n  <div class=\"ui-g-12 ui-md-10 ui-md-offset-1 main_container\">\n    <span class=\"logo_title\">\n      <a routerLink=\"/\">Tax Calculator</a>\n    </span>\n  </div>\n</div> -->\n<header class=\"site-header\" itemscope itemtype=\"http://schema.org/WPHeader\">\n  <div class=\"wrap container\">\n    <div class=\"widget-area header-widget-area\">\n      <section id=\"sow-editor-2\" class=\"widget-odd widget-last widget-first widget-1 info_header widget widget_sow-editor\">\n        <div class=\"widget-wrap\">\n          <div class=\"so-widget-sow-editor so-widget-sow-editor-base\">\n            <div class=\"siteorigin-widget-tinymce textwidget\">\n              <div class=\"logo\">\n                <a href=\"./\">\n                  <img src=\"http://taxsavingpros.com/wp-content/uploads/2017/06/logo.png\" alt=\"logo\" class=\"alignright size-full wp-image-8\"\n                  />\n                </a>\n              </div>\n              <div class=\"tel\">(772) 257-7888</div>\n              <div class=\"address\">601 21st Street, Suite 400, Vero Beach, FL 32960</div>\n              <div class=\"social\">\n                <ul id=\"\" class=\"cnss-social-icon \" style=\"text-align:right;\">\n                  <li class=\"cn-fa-facebook\" style=\"display:inline-block;\">\n                    <a class=\"\" title=\"facebook\" style=\"\">\n                      <img src=\"http://69.16.227.224/~taxsavin/wp-content/uploads/2016/08/sf.png\" border=\"0\" width=\"32\" height=\"32\" alt=\"facebook\"\n                        title=\"facebook\" style=\"margin:2px;\" />\n                    </a>\n                  </li>\n                  <li class=\"cn-fa-twitter\" style=\"display:inline-block;\">\n                    <a class=\"\" title=\"twitter\" style=\"\">\n                      <img src=\"http://69.16.227.224/~taxsavin/wp-content/uploads/2016/08/st.png\" border=\"0\" width=\"32\" height=\"32\" alt=\"twitter\"\n                        title=\"twitter\" style=\"margin:2px;\" />\n                    </a>\n                  </li>\n                  <li class=\"cn-fa-googleplus\" style=\"display:inline-block;\">\n                    <a class=\"\" title=\"googleplus\" style=\"\">\n                      <img src=\"http://69.16.227.224/~taxsavin/wp-content/uploads/2016/08/sg.png\" border=\"0\" width=\"32\" height=\"32\" alt=\"googleplus\"\n                        title=\"googleplus\" style=\"margin:2px;\" />\n                    </a>\n                  </li>\n                  <li class=\"cn-fa-youtube\" style=\"display:inline-block;\">\n                    <a class=\"\" title=\"youtube\" style=\"\">\n                      <img src=\"http://69.16.227.224/~taxsavin/wp-content/uploads/2016/08/sy.png\" border=\"0\" width=\"32\" height=\"32\" alt=\"youtube\"\n                        title=\"youtube\" style=\"margin:2px;\" />\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n</header>\n<div class=\"ui-g content_wrapper container\">\n  <div class=\"main_container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__question_answer_question_answer_module__ = __webpack_require__("../../../../../src/app/question-answer/question-answer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__result_result_module__ = __webpack_require__("../../../../../src/app/result/result.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//  Add the HttpModule to make API calls to the backend.





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__question_answer_question_answer_module__["a" /* QuestionAnswerModule */],
                __WEBPACK_IMPORTED_MODULE_10__result_result_module__["a" /* ResultModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/question-answer/question-answer-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionAnswerRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_answer_component__ = __webpack_require__("../../../../../src/app/question-answer/question-answer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { StatesResolve, SalePersonsResolve } from '../shared/resolve';
var QuestionAnswerRoutingModule = /** @class */ (function () {
    function QuestionAnswerRoutingModule() {
    }
    QuestionAnswerRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__question_answer_component__["a" /* QuestionAnswerComponent */],
                    }
                ])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], QuestionAnswerRoutingModule);
    return QuestionAnswerRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/question-answer/question-answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question-answer/question-answer.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-horizontal-stepper [linear]=\"true\" #stepper=\"matHorizontalStepper\">\n  <mat-step [stepControl]=\"personalForm\">\n    <h3>Personal Details</h3>\n    <form #personalForm=\"ngForm\">\n      <div class=\"new-dollar-form\">\n        <div class=\"top-table-form\">\n          <div class=\"detils-form\">\n            <div class=\"ui-g-12 ui-md-6\">\n              <label class=\"label\">First Name *</label>\n              <div class=\"input-wrap\">\n                <input type=\"text\" pInputText [(ngModel)]=\"qa.FirstName\" class=\"input-css\" name=\"firstName\" #firstName=\"ngModel\" required=\"true\"\n                />\n              </div>\n              <div *ngIf=\"firstName.invalid\">\n                <div class=\"error-alert\" *ngIf=\"firstName.errors.required\">\n                  First Name is required.\n                </div>\n              </div>\n            </div>\n            <div class=\"ui-g-12 ui-md-6\">\n              <label class=\"label\">Last Name *</label>\n              <div class=\"input-wrap\">\n                <input type=\"text\" [(ngModel)]=\"qa.LastName\" class=\"input-css\" name=\"lastName\" #lastName=\"ngModel\" required/>\n              </div>\n              <div *ngIf=\"lastName.invalid\">\n                <div class=\"error-alert\" *ngIf=\"lastName.errors.required\">\n                  Last Name is required.\n                </div>\n              </div>\n            </div>\n            <div class=\"clearfix\"></div>\n\n            <!-- <div class=\"ui-g-12 ui-md-6\">\n              <label class=\"label\">Filling Status *</label>\n              <div class=\"select-wrap\">\n                <p-dropdown [options]=\"statusOptions\" [(ngModel)]=\"qa._FilingStatus\" placeholder=\"Select Status\" optionLabel=\"name\" name=\"FilingStatus\"\n                  #FilingStatus=\"ngModel\" required=\"true\"></p-dropdown>\n              </div>\n              <div *ngIf=\"FilingStatus.invalid\">\n                <div class=\"error-alert\" *ngIf=\"FilingStatus.errors.required\">\n                  Select Filling Status.\n                </div>\n              </div>\n            </div> -->\n            <div class=\"ui-g-12 ui-md-6\">\n              <label class=\"label\">Do you file your taxes jointly with your spouse? </label>\n              <div class=\"select-wrap switch-wrap\">\n                <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" [(ngModel)]=\"qa._MarriedFilingJointly\" name=\"MarriedFilingJointly\" #MarriedFilingJointly=\"ngModel\"></p-inputSwitch>\n              </div>\n            </div>            \n\n            <div class=\"ui-g-12 ui-md-6\">\n              <label class=\"label\">State *</label>\n              <div class=\"select-wrap\">\n                <p-dropdown [options]=\"stateOptions\" [(ngModel)]=\"qa.State\" placeholder=\"Select State\" optionLabel=\"name\" name=\"State\" #State=\"ngModel\"\n                  required=\"true\"></p-dropdown>\n              </div>\n              <div *ngIf=\"State.invalid\">\n                <div class=\"error-alert\" *ngIf=\"State.errors.required\">\n                  Select State.\n                </div>\n              </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"ui-g-12 ui-md-6\">\n              <label class=\"label\">What is your taxable income? *</label>\n              <div class=\"input-wrap\">\n                <p-spinner size=\"30\" [(ngModel)]=\"qa._TaxableIncome\" [min]=\"0\" [step]=\"1000\" name=\"TaxableIncome\" #TaxableIncome=\"ngModel\"\n                  require=\"true\"></p-spinner>\n              </div>\n              <div *ngIf=\"TaxableIncome.invalid\">\n                <div class=\"error-alert\" *ngIf=\"TaxableIncome.errors.required\">\n                  Taxable Income is required.\n                </div>\n              </div>\n            </div>\n            <div class=\"ui-g-12 ui-md-6\">\n              <label class=\"label\">Do you currently own a business? </label>\n              <div class=\"select-wrap switch-wrap\">\n                <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" [(ngModel)]=\"qa._BusinessOwner\" name=\"BusinessOwner\" #BusinessOwner=\"ngModel\"></p-inputSwitch>\n              </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"ui-g-12 ui-md-6\">\n              <label class=\"label\">Who invited you to take this survey?</label>\n              <div class=\"select-wrap\">\n                <p-dropdown [options]=\"salePersons\" optionLabel=\"FullName\" [(ngModel)]=\"qa._SalePerson\" placeholder=\"Select the Person\" name=\"SalePerson\"\n                  #SalePerson=\"ngModel\" required=\"false\">\n                </p-dropdown>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" [disabled]=\"!personalForm.valid\" class=\"btn-secondary\" mat-button matStepperNext>Next</button>\n        </div>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"businessForm\" *ngIf=\"qa._BusinessOwner\">\n    <h3>Business Ownership Details</h3>\n    <form #businessForm=\"ngForm\">\n      <div class=\"new-dollar-form\">\n        <div class=\"top-table-form\">\n          <div class=\"detils-form\">\n            <div class=\"ui-g-12 ui-md-6\">\n              <label class=\"label\">Are you and/or your spouse the sole owner(s) of the business?</label>\n              <div class=\"select-wrap\">\n                <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" [(ngModel)]=\"qa._SoleOwner\" name=\"SoleOwner\" #SoleOwner=\"ngModel\"></p-inputSwitch>\n              </div>\n            </div>\n            <div class=\"ui-g-12 ui-md-6\">\n              <div *ngIf=\"!qa._SoleOwner\">\n                <label class=\"label\">What is the percentage of ownership?</label>\n                <div class=\"select-wrap\">\n                  <p-dropdown [options]=\"ownPercentageOptions\" [(ngModel)]=\"qa._PercentOwnership\" placeholder=\"Select Percentage\" name=\"PercentOwnership\"\n                    #PercentOwnership=\"ngModel\" required=\"true\"></p-dropdown>\n                </div>\n                <div *ngIf=\"PercentOwnership.invalid\">\n                  <div class=\"error-alert\" *ngIf=\"PercentOwnership.errors.required\">\n                    Select percentage of ownership.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"ui-g-12 ui-md-6\">\n              <div>\n                <label class=\"label\">What type of business are you in?</label>\n                <div class=\"input-wrap\">\n                  <input type=\"text\" [(ngModel)]=\"qa._BusinessType\" class=\"input-css\" name=\"BusinessType\" #BusinessType=\"ngModel\" required/>\n                </div>\n                <div *ngIf=\"BusinessType.invalid\">\n                  <div class=\"error-alert\" *ngIf=\"BusinessType.errors.required\">\n                    Enter type of business.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"ui-g-12 ui-md-6\">\n              <label class=\"label\">How many children do you claim on your tax return?</label>\n              <div class=\"input-wrap\">\n                <p-spinner size=\"30\" [(ngModel)]=\"qa._NumberOfChildren\" [min]=\"0\" [max]=\"6\" name=\"NumberOfChildren\" #NumberOfChildren=\"ngModel\"\n                  require=\"true\"></p-spinner>\n              </div>\n              <div *ngIf=\"NumberOfChildren.invalid\">\n                <div class=\"error-alert\" *ngIf=\"NumberOfChildren.errors.required\">\n                  Select no. of Children.\n                </div>\n              </div>\n            </div>\n            <div class=\"ui-g-12 ui-md-6\">\n              <div *ngIf=\"qa._NumberOfChildren > 0\">\n                <label class=\"label\">Can your children work in your business?</label>\n                <div class=\"select-wrap\">\n                  <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" [(ngModel)]=\"qa._ChildrenWorkInBusiness\" name=\"ChildrenWorkInBusiness\" #ChildrenWorkInBusiness=\"ngModel\"></p-inputSwitch>\n                </div>\n              </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"ui-g-12 ui-md-6\">\n              <label class=\"label\">How much do you spend on domestic vacations annually?</label>\n              <div class=\"input-wrap\">\n                <p-spinner size=\"30\" [(ngModel)]=\"qa._VacationAmount\" [min]=\"0\" [step]=\"1000\" name=\"VacationAmount\" #VacationAmount=\"ngModel\"\n                  require=\"true\"></p-spinner>\n              </div>\n              <div *ngIf=\"VacationAmount.invalid\">\n                <div class=\"error-alert\" *ngIf=\"VacationAmount.errors.required\">\n                  Enter annual vacation amount.\n                </div>\n              </div>\n            </div>\n            <div class=\"ui-g-12 ui-md-6\">\n              <label class=\"label\">Do you have a health savings account?</label>\n              <div class=\"select-wrap\">\n                <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" [(ngModel)]=\"qa._HSA\" name=\"HSA\" #HSA=\"ngModel\"></p-inputSwitch>\n              </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"ui-g-12 ui-md-6\">\n              <label class=\"label\">Do you have a home office?</label>\n              <div class=\"select-wrap\">\n                <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" [(ngModel)]=\"qa.HomeOffice\" name=\"HomeOffice\" #HomeOffice=\"ngModel\"></p-inputSwitch>\n              </div>\n            </div>\n            <div class=\"ui-g-12 ui-md-6\">\n              <label class=\"label\">Do you have a company wide retirement plan?</label>\n              <div class=\"select-wrap\">\n                <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" [(ngModel)]=\"qa._CompanyRetirementPlan\" name=\"CompanyRetirementPlan\" #CompanyRetirementPlan=\"ngModel\"></p-inputSwitch>\n              </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"ui-g-12 ui-md-6\">\n              <label class=\"label\">Have you purchased a building other than a personal residence or vacation home in the last 5 years?</label>\n              <div class=\"select-wrap\">\n                <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" [(ngModel)]=\"qa._BuildingPurchase\" name=\"BuildingPurchase\" #BuildingPurchase=\"ngModel\"></p-inputSwitch>\n              </div>\n            </div>\n            <div class=\"ui-g-12 ui-md-6\">\n              <div *ngIf=\"qa._BuildingPurchase\">\n                <label class=\"label\">Estimated cost</label>\n                <div class=\"input-wrap\">\n                  <p-spinner size=\"30\" [(ngModel)]=\"qa._BuildingCost\" [min]=\"0\" [step]=\"1000\" name=\"BuildingCost\" #BuildingCost=\"ngModel\" require=\"true\"></p-spinner>\n                </div>\n                <div *ngIf=\"BuildingCost.invalid\">\n                  <div class=\"error-alert\" *ngIf=\"BuildingCost.errors.required\">\n                    Enter building cost.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"ui-g-12 ui-md-6\">\n              <label class=\"label\">Are you current on your tax obligations including filing and payments?</label>\n              <div class=\"select-wrap\">\n                <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" [(ngModel)]=\"qa._CurrentOnTaxes\" name=\"CurrentOnTaxes\" #CurrentOnTaxes=\"ngModel\"></p-inputSwitch>\n              </div>\n            </div>\n            <div class=\"ui-g-12 ui-md-6\">\n              <label class=\"label\">How are you keeping your books?</label>\n              <div class=\"select-wrap\">\n                <p-dropdown [options]=\"keepBooksOptions\" [(ngModel)]=\"qa._BookKeepingMethod\" placeholder=\"Select\" name=\"BookKeepingMethod\"\n                  #BookKeepingMethod=\"ngModel\" required=\"true\"></p-dropdown>\n              </div>\n              <div *ngIf=\"BookKeepingMethod.invalid\">\n                <div class=\"error-alert\" *ngIf=\"BookKeepingMethod.errors.required\">\n                  Select book keeping method.\n                </div>\n              </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"ui-g-12 ui-md-6\">\n              <label class=\"label\">Are your books current?</label>\n              <div class=\"select-wrap\">\n                <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" [(ngModel)]=\"qa._BooksCurrent\" name=\"BooksCurrent\" #BooksCurrent=\"ngModel\"></p-inputSwitch>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <button class=\"btn-secondary\" mat-button matStepperPrevious>Prev</button>\n          <button class=\"btn-secondary\" [disabled]=\"!businessForm.valid\" mat-button matStepperNext>Next</button>\n        </div>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"extraForm\">\n    <h3>Extra Questions</h3>\n    <form #extraForm=\"ngForm\">\n      <div class=\"new-dollar-form\">\n        <div class=\"top-table-form\">\n          <div class=\"detils-form\">\n            <div class=\"ui-g-12 ui-md-6\">\n              <label class=\"label\">Do you have life insurance?</label>\n              <div class=\"select-wrap\">\n                <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" [(ngModel)]=\"qa._LifeInsurance\" name=\"LifeInsurance\" #LifeInsurance=\"ngModel\"\n                  require=\"true\"></p-inputSwitch>\n              </div>\n            </div>\n            <div class=\"ui-g-12 ui-md-6\">\n              <label class=\"label\">Do you have a living trust?</label>\n              <div class=\"select-wrap\">\n                <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" [(ngModel)]=\"qa._LivingTrust\" name=\"LivingTrust\" #LivingTrust=\"ngModel\" require=\"true\"></p-inputSwitch>\n              </div>\n            </div>\n            <div class=\"clearfix\"></div>\n\n            <div class=\"ui-g-12 ui-md-6\">\n              <label class=\"label\">Do you have a will?</label>\n              <div class=\"select-wrap\">\n                <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" [(ngModel)]=\"qa._HaveWill\" name=\"HaveWill\" #HaveWill=\"ngModel\" require=\"true\"></p-inputSwitch>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <button class=\"btn-secondary\" mat-button matStepperPrevious>Prev</button>\n          <button class=\"btn-secondary\" (click)=\"calculateTax()\" [disabled]=\"!extraForm.valid\" mat-button matStepperNext>Next</button>\n        </div>\n      </div>\n    </form>\n  </mat-step>\n</mat-horizontal-stepper>"

/***/ }),

/***/ "../../../../../src/app/question-answer/question-answer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionAnswerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_sharing__ = __webpack_require__("../../../../../src/app/shared/data-sharing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_answer_service__ = __webpack_require__("../../../../../src/app/question-answer/question-answer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionAnswerComponent = /** @class */ (function () {
    function QuestionAnswerComponent(route, router, dataSharing, questionAnswerService) {
        this.route = route;
        this.router = router;
        this.dataSharing = dataSharing;
        this.questionAnswerService = questionAnswerService;
        this.statusOptions = [
            { id: 'S', name: 'Single' },
            { id: 'MFJ', name: 'Married filing joint' },
            { id: 'MJS', name: 'Married filing separate' },
            { id: 'HOH', name: 'Head of Household' }
        ];
        this.keepBooksOptions = [
            { label: 'Quickbooks', value: 'Quickbooks' },
            { label: 'Excel', value: 'Excel' },
            { label: 'Other accounting softward', value: 'Other accounting softward' },
            { label: 'Do not have a regular method', value: 'Do not have a regular method' }
        ];
        this.ownPercentageOptions = [
            { label: '00', value: '00' },
            { label: '05', value: '05' },
            { label: '10', value: '10' },
            { label: '15', value: '15' },
            { label: '20', value: '20' },
            { label: '25', value: '25' },
            { label: '30', value: '30' },
            { label: '35', value: '35' },
            { label: '40', value: '40' },
            { label: '45', value: '45' },
            { label: '50', value: '50' },
            { label: '55', value: '55' },
            { label: '60', value: '60' },
            { label: '65', value: '65' },
            { label: '70', value: '70' },
            { label: '75', value: '75' },
            { label: '80', value: '80' },
            { label: '85', value: '85' },
            { label: '90', value: '90' },
            { label: '95', value: '95' },
            { label: '100', value: '100' }
        ];
        this.salePersons = [
            {
                ID: 0,
                FirstName: 'Loading',
                LastName: 'Data',
                FullName: 'Loading Data'
            }
        ];
        this.qa = {
            '_TaxableIncome': 0,
            '_BusinessOwner': false,
            '_MarriedFilingJointly': false,
            '_SoleOwner': false,
            '_PercentOwnership': '05',
            '_NumberOfChildren': 0,
            '_ChildrenWorkInBusiness': false,
            '_VacationAmount': 0,
            '_HSA': false,
            '_HomeOffice': false,
            '_BuildingPurchase': false,
            '_BuildingCost': 0,
            '_CompanyRetirementPlan': false,
            '_CurrentOnTaxes': false,
            '_BooksCurrent': false,
            '_LifeInsurance': false,
            '_LivingTrust': false,
            '_HaveWill': false,
            '_SalePerson': ''
        };
        // this.stateOptions = this.route.snapshot.data['states'];
        // this.salePersons = this.route.snapshot.data['salePersons'].Data;
    }
    QuestionAnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionAnswerService.getStates().then(function (data) { return _this.stateOptions = data; });
        this.questionAnswerService.getSalesPeople().then(function (data) {
            var sps = [];
            data.forEach(function (salePerson) {
                sps.push({
                    ID: salePerson.ID,
                    FirstName: salePerson.FirstName,
                    LastName: salePerson.LastName,
                    FullName: salePerson.FirstName + ' ' + salePerson.LastName
                });
            });
            _this.salePersons = sps;
        });
    };
    QuestionAnswerComponent.prototype.calculateTax = function () {
        // this.qa['_FilingStatus'] = this.qa['_FilingStatus']['id'];
        this.qa['State'] = this.qa['State']['code'];
        this.jsonStr = JSON.stringify(this.qa);
        // this.jsonStr = this.jsonStr.replace(/false/g, '"No"');
        // this.jsonStr = this.jsonStr.replace(/true/g, '"Yes"');
        this.dataSharing.changeMessage(this.jsonStr);
        this.router.navigate(['/result']);
    };
    QuestionAnswerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-question-answer',
            template: __webpack_require__("../../../../../src/app/question-answer/question-answer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/question-answer/question-answer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__shared_data_sharing__["a" /* DataSharingService */],
            __WEBPACK_IMPORTED_MODULE_3__question_answer_service__["a" /* QuestionAnswerService */]])
    ], QuestionAnswerComponent);
    return QuestionAnswerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/question-answer/question-answer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionAnswerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_stepper__ = __webpack_require__("../../../material/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_inputswitch__ = __webpack_require__("../../../../primeng/inputswitch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_inputswitch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_inputswitch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_keyfilter__ = __webpack_require__("../../../../primeng/keyfilter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_keyfilter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_keyfilter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_data_sharing__ = __webpack_require__("../../../../../src/app/shared/data-sharing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_secure_http_client__ = __webpack_require__("../../../../../src/app/shared/secure-http-client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__question_answer_component__ = __webpack_require__("../../../../../src/app/question-answer/question-answer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__question_answer_routing_module__ = __webpack_require__("../../../../../src/app/question-answer/question-answer-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__question_answer_service__ = __webpack_require__("../../../../../src/app/question-answer/question-answer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { StatesResolve, SalePersonsResolve } from '../shared/resolve';

// Add the SecureHttpClient to this modules (Injectable)




var QuestionAnswerModule = /** @class */ (function () {
    function QuestionAnswerModule() {
    }
    QuestionAnswerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_stepper__["a" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["SpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_inputswitch__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_keyfilter__["KeyFilterModule"],
                __WEBPACK_IMPORTED_MODULE_12__question_answer_routing_module__["a" /* QuestionAnswerRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_11__question_answer_component__["a" /* QuestionAnswerComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_11__question_answer_component__["a" /* QuestionAnswerComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_13__question_answer_service__["a" /* QuestionAnswerService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_data_sharing__["a" /* DataSharingService */],
                __WEBPACK_IMPORTED_MODULE_10__shared_secure_http_client__["a" /* SecureHttpClient */]
            ]
        })
    ], QuestionAnswerModule);
    return QuestionAnswerModule;
}());



/***/ }),

/***/ "../../../../../src/app/question-answer/question-answer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionAnswerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_secure_http_client__ = __webpack_require__("../../../../../src/app/shared/secure-http-client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionAnswerService = /** @class */ (function () {
    function QuestionAnswerService(httpClient, secureHttpClient) {
        this.httpClient = httpClient;
        this.secureHttpClient = secureHttpClient;
    }
    QuestionAnswerService.prototype.getStates = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'states';
        return this.secureHttpClient.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.calculateTax = function (data) {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'calculate';
        return this.secureHttpClient.post(url, data)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.getSalesPeople = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'salespeople';
        return this.secureHttpClient.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    QuestionAnswerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__shared_secure_http_client__["a" /* SecureHttpClient */]])
    ], QuestionAnswerService);
    return QuestionAnswerService;
}());



/***/ }),

/***/ "../../../../../src/app/result/result-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resultRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__result_component__ = __webpack_require__("../../../../../src/app/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_resolve__ = __webpack_require__("../../../../../src/app/shared/resolve/index.ts");


var resultRoutes = [{
        path: 'result',
        component: __WEBPACK_IMPORTED_MODULE_0__result_component__["a" /* ResultComponent */],
        resolve: {
            calculatedResponse: __WEBPACK_IMPORTED_MODULE_1__shared_resolve__["a" /* CalculateResolve */],
        }
    }];


/***/ }),

/***/ "../../../../../src/app/result/result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-block\">\n      <h3>Result</h3>\n      <div class=\"result_wrapper\">\n        <p>\n          <span>Company : </span> <span class=\"result-content\">{{result.company}}</span>\n        </p>\n        <p>\n          <span>Program : </span> <span class=\"result-content\">{{result.program}}</span>\n        </p>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultComponent = /** @class */ (function () {
    function ResultComponent(route) {
        this.route = route;
        this.TaxScale = [
            { key: 0, name: 'None Selected' },
            { key: 1, name: 'Single / W2' },
            { key: 2, name: 'Married / W2' },
            { key: 3, name: 'Single / Business Owner' },
            { key: 4, name: 'Married / Business Owner' }
        ];
        this.TaxProgram = [
            { key: 0, name: 'NADA' },
            { key: 1, name: 'ELOS' },
            { key: 2, name: 'LOS' },
            { key: 3, name: 'GLS / Tax Prep' },
            { key: 4, name: 'GLS / Tax Savings' },
            { key: 5, name: 'TSA' }
        ];
        this.result = this.route.snapshot.data['calculatedResponse'];
        console.log(this.result);
    }
    ResultComponent.prototype.ngOnInit = function () {
    };
    ResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-result',
            template: __webpack_require__("../../../../../src/app/result/result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/result/result.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/result/result.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_resolve__ = __webpack_require__("../../../../../src/app/shared/resolve/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_data_sharing__ = __webpack_require__("../../../../../src/app/shared/data-sharing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_answer_question_answer_service__ = __webpack_require__("../../../../../src/app/question-answer/question-answer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__result_component__ = __webpack_require__("../../../../../src/app/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__result_routing_module__ = __webpack_require__("../../../../../src/app/result/result-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ResultModule = /** @class */ (function () {
    function ResultModule() {
    }
    ResultModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(__WEBPACK_IMPORTED_MODULE_7__result_routing_module__["a" /* resultRoutes */]),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__result_component__["a" /* ResultComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_6__result_component__["a" /* ResultComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__shared_resolve__["a" /* CalculateResolve */],
                __WEBPACK_IMPORTED_MODULE_4__shared_data_sharing__["a" /* DataSharingService */],
                __WEBPACK_IMPORTED_MODULE_5__question_answer_question_answer_service__["a" /* QuestionAnswerService */]
            ]
        })
    ], ResultModule);
    return ResultModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/data-sharing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataSharingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataSharingService = /** @class */ (function () {
    function DataSharingService() {
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("default message");
        this.currentMessage = this.messageSource.asObservable();
    }
    DataSharingService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    DataSharingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataSharingService);
    return DataSharingService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/resolve/calculate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculateResolve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_answer_question_answer_service__ = __webpack_require__("../../../../../src/app/question-answer/question-answer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_sharing__ = __webpack_require__("../../../../../src/app/shared/data-sharing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalculateResolve = /** @class */ (function () {
    function CalculateResolve(questionAnswerService, dataSharing) {
        this.questionAnswerService = questionAnswerService;
        this.dataSharing = dataSharing;
    }
    CalculateResolve.prototype.resolve = function (route) {
        var _this = this;
        this.dataSharing.currentMessage.subscribe(function (message) { return _this.message = message; });
        return this.questionAnswerService.calculateTax(JSON.parse(this.message));
    };
    CalculateResolve = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_answer_question_answer_service__["a" /* QuestionAnswerService */],
            __WEBPACK_IMPORTED_MODULE_2__data_sharing__["a" /* DataSharingService */]])
    ], CalculateResolve);
    return CalculateResolve;
}());



/***/ }),

/***/ "../../../../../src/app/shared/resolve/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__salePersons__ = __webpack_require__("../../../../../src/app/shared/resolve/salePersons.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states__ = __webpack_require__("../../../../../src/app/shared/resolve/states.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculate__ = __webpack_require__("../../../../../src/app/shared/resolve/calculate.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__calculate__["a"]; });





/***/ }),

/***/ "../../../../../src/app/shared/resolve/salePersons.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SalePersonsResolve */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_answer_question_answer_service__ = __webpack_require__("../../../../../src/app/question-answer/question-answer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SalePersonsResolve = /** @class */ (function () {
    function SalePersonsResolve(questionAnswerService) {
        this.questionAnswerService = questionAnswerService;
    }
    SalePersonsResolve.prototype.resolve = function (route) {
        return this.questionAnswerService.getSalesPeople();
        // return this.questionAnswerService.getSalePersons();
    };
    SalePersonsResolve = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_answer_question_answer_service__["a" /* QuestionAnswerService */]])
    ], SalePersonsResolve);
    return SalePersonsResolve;
}());



/***/ }),

/***/ "../../../../../src/app/shared/resolve/states.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StatesResolve */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_answer_question_answer_service__ = __webpack_require__("../../../../../src/app/question-answer/question-answer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatesResolve = /** @class */ (function () {
    function StatesResolve(questionAnswerService) {
        this.questionAnswerService = questionAnswerService;
    }
    StatesResolve.prototype.resolve = function (route) {
        return this.questionAnswerService.getStates();
    };
    StatesResolve = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_answer_question_answer_service__["a" /* QuestionAnswerService */]])
    ], StatesResolve);
    return StatesResolve;
}());



/***/ }),

/***/ "../../../../../src/app/shared/secure-http-client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecureHttpClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//  This is a wrapper HttpClient that allows my to add an Authorization Header to every call.
var SecureHttpClient = /** @class */ (function () {
    function SecureHttpClient(http, router) {
        this.http = http;
        this.router = router;
    }
    SecureHttpClient.prototype.createAuthorizationHeader = function (headers) {
        //  Not used right now but keeping it in the mix for later.
        var auth = btoa('keyAuthorize:MyK3yC0d3');
        headers.append('Authorization', 'Basic ' + auth);
    };
    SecureHttpClient.prototype.get = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    };
    SecureHttpClient.prototype.post = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    };
    SecureHttpClient = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], SecureHttpClient);
    return SecureHttpClient;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: 'api/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map