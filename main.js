(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/administration/administration.component.css":
/*!*************************************************************!*\
  !*** ./src/app/administration/administration.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmF0aW9uL2FkbWluaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/administration/administration.component.html":
/*!**************************************************************!*\
  !*** ./src/app/administration/administration.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  administration works!\n</p>\n"

/***/ }),

/***/ "./src/app/administration/administration.component.ts":
/*!************************************************************!*\
  !*** ./src/app/administration/administration.component.ts ***!
  \************************************************************/
/*! exports provided: AdministrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationComponent", function() { return AdministrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdministrationComponent = /** @class */ (function () {
    function AdministrationComponent() {
    }
    AdministrationComponent.prototype.ngOnInit = function () {
    };
    AdministrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-administration',
            template: __webpack_require__(/*! ./administration.component.html */ "./src/app/administration/administration.component.html"),
            styles: [__webpack_require__(/*! ./administration.component.css */ "./src/app/administration/administration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdministrationComponent);
    return AdministrationComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _administration_administration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./administration/administration.component */ "./src/app/administration/administration.component.ts");
/* harmony import */ var _meals_meals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meals/meals.component */ "./src/app/meals/meals.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _ingredients_ingredients_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ingredients/ingredients.component */ "./src/app/ingredients/ingredients.component.ts");
/* harmony import */ var _ingredients_details_ingredients_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ingredients-details/ingredients-details.component */ "./src/app/ingredients-details/ingredients-details.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");












var routes = [
    { path: 'administration', component: _administration_administration_component__WEBPACK_IMPORTED_MODULE_3__["AdministrationComponent"] },
    { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"] },
    { path: 'ingredients', component: _ingredients_ingredients_component__WEBPACK_IMPORTED_MODULE_6__["IngredientsComponent"] },
    { path: 'ingredients/:id', component: _ingredients_details_ingredients_details_component__WEBPACK_IMPORTED_MODULE_7__["IngredientsDetailsComponent"] },
    { path: 'meals', component: _meals_meals_component__WEBPACK_IMPORTED_MODULE_4__["MealsComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"] },
    { path: 'project', component: _project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"] },
    { path: 'recipes', component: _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_10__["RecipesComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SigninComponent"] },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n\r\n.menu-row {\r\n    margin-top: 5px;\r\n    color : white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    height: 140px;\r\n}\r\n\r\n.menu-row a {\r\n    text-align:left;\r\n}\r\n\r\n.mat-button {\r\n    width: 150px;\r\n}\r\n\r\n.mat-sidenav {\r\n    /*background-color: #2196F3;*/\r\n    width: 150px;\r\n}\r\n\r\n.mat-sidenav .logo {\r\n    margin: 20px;\r\n    margin-top : 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.mat-list-item {\r\n    color:#FFF;\r\n}\r\n\r\nimg.logo {\r\n    height: 50px;\r\n    margin-right: 10px;\r\n    margin-top: 5px;\r\n}\r\n\r\nimg.macone-logo {\r\n    width: 110px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.auth-button {\r\n  position:absolute;\r\n  right:15px;\r\n  color:#fff;\r\n  font-size:0.8em;\r\n}\r\n\r\n.signup-button {\r\n  position:absolute;\r\n  right:100px;\r\n  color:#fff;\r\n  font-size:0.8em;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtFQUNWOztBQUVGO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4ubWVudS1yb3cge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgY29sb3IgOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbn1cclxuXHJcbi5tZW51LXJvdyBhIHtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxufVxyXG5cclxuLm1hdC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4ubWF0LXNpZGVuYXYge1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzOyovXHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5tYXQtc2lkZW5hdiAubG9nbyB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wIDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtbGlzdC1pdGVtIHtcclxuICAgIGNvbG9yOiNGRkY7XHJcbn1cclxuXHJcbmltZy5sb2dvIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuaW1nLm1hY29uZS1sb2dvIHtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmF1dGgtYnV0dG9uIHtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICByaWdodDoxNXB4O1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgZm9udC1zaXplOjAuOGVtO1xyXG59XHJcblxyXG4uc2lnbnVwLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgcmlnaHQ6MTAwcHg7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBmb250LXNpemU6MC44ZW07XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #sidenav mode=\"over\" [(opened)]=\"opened\" >\n    <span><img src=\"assets/images/mac_one.png\" class=\"macone-logo\" (click)=\"opened = !opened\"/></span>\n    <div class=\"menu-row\" (click)=\"opened = !opened\">\n      <a mat-button routerLink=\"/news\">\n        <mat-icon>info</mat-icon>&nbsp;Home Page</a>\n      <a mat-button routerLink=\"/ingredients\">\n        <mat-icon>room_service</mat-icon>&nbsp;My Ingredients</a>\n      <a mat-button routerLink=\"/recipes\">\n        <mat-icon>cake</mat-icon>&nbsp;My Recipes</a>        \n      <a mat-button routerLink=\"/meals\">\n        <mat-icon>calendar_today</mat-icon>&nbsp;My Meals</a>\n      <a mat-button routerLink=\"/profile\">\n        <mat-icon>perm_identity</mat-icon>&nbsp;My Profile</a>\n      <a mat-button routerLink=\"/project\">\n        <mat-icon>explore</mat-icon>&nbsp;The Project</a>        \n      <a mat-button routerLink=\"/administration\">\n        <mat-icon>settings</mat-icon>&nbsp;Administration</a>\n    </div>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"accent\">\n      <mat-toolbar-row>\n        <button mat-icon-button (click)=\"opened = !opened\"><mat-icon>menu</mat-icon></button>\n        <span><img src=\"assets/images/my-meals-logo.png\" class=\"logo\"/></span><span>My Meals Application</span>\n        <a class=\"auth-button\" routerLinkActive=\"active\" *ngIf=\"!isAuthenticated\" routerLink=\"signin\">Login</a>\n        <a class=\"auth-button\" (click)=\"onSignOut()\" style=\"cursor:pointer;\" *ngIf=\"isAuthenticated\">Logout</a>\n      </mat-toolbar-row>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.shouldRun = true;
        this.opened = false;
        console.log("AppComponent: constructor");
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _meals_meals_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./meals/meals.component */ "./src/app/meals/meals.component.ts");
/* harmony import */ var _administration_administration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./administration/administration.component */ "./src/app/administration/administration.component.ts");
/* harmony import */ var _ingredients_ingredients_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ingredients/ingredients.component */ "./src/app/ingredients/ingredients.component.ts");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _services_open_food_facts_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/open-food-facts.service */ "./src/app/services/open-food-facts.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ingredients_details_ingredients_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ingredients-details/ingredients-details.component */ "./src/app/ingredients-details/ingredients-details.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_10__["ProjectComponent"],
                _meals_meals_component__WEBPACK_IMPORTED_MODULE_11__["MealsComponent"],
                _administration_administration_component__WEBPACK_IMPORTED_MODULE_12__["AdministrationComponent"],
                _ingredients_ingredients_component__WEBPACK_IMPORTED_MODULE_13__["IngredientsComponent"],
                _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_14__["RecipesComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_16__["SigninComponent"],
                _ingredients_details_ingredients_details_component__WEBPACK_IMPORTED_MODULE_19__["IngredientsDetailsComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"]
            ],
            providers: [
                _services_open_food_facts_service__WEBPACK_IMPORTED_MODULE_17__["OpenFoodFactsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    width: 95%;\r\n    margin: auto;\r\n    margin-top : 10px;\r\n    margin-bottom: 10px;\r\n    font-family: Noto, \"Helvetica Neue\", sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwrQ0FBK0M7QUFDbkQiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3AgOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBOb3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>This is the homepage</h1>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/ingredients-details/ingredients-details.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/ingredients-details/ingredients-details.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZ3JlZGllbnRzLWRldGFpbHMvaW5ncmVkaWVudHMtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/ingredients-details/ingredients-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/ingredients-details/ingredients-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ingredients-details works!\n</p>\n"

/***/ }),

/***/ "./src/app/ingredients-details/ingredients-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ingredients-details/ingredients-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: IngredientsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsDetailsComponent", function() { return IngredientsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IngredientsDetailsComponent = /** @class */ (function () {
    function IngredientsDetailsComponent() {
    }
    IngredientsDetailsComponent.prototype.ngOnInit = function () {
    };
    IngredientsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ingredients-details',
            template: __webpack_require__(/*! ./ingredients-details.component.html */ "./src/app/ingredients-details/ingredients-details.component.html"),
            styles: [__webpack_require__(/*! ./ingredients-details.component.css */ "./src/app/ingredients-details/ingredients-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IngredientsDetailsComponent);
    return IngredientsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/ingredients/ingredients.component.css":
/*!*******************************************************!*\
  !*** ./src/app/ingredients/ingredients.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    width: 95%;\r\n    margin: auto;\r\n    margin-top : 10px;\r\n    margin-bottom: 10px;\r\n    font-family: Noto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\na {\r\n    color: white\r\n}\r\n\r\n.page-element {\r\n    margin-bottom:10px;\r\n    margin-top: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 95%;\r\n}\r\n\r\n.product-details {\r\n    margin-top: 10px;\r\n}\r\n\r\n.item-image {\r\n    width: 300px;\r\n}\r\n\r\n.blurry-overlay {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #fff;\r\n    opacity: 0.2;\r\n    z-index: 1;\r\n}\r\n\r\n.ingredient-details {\r\n    position: fixed;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    left: 0;\r\n    right: 0;\r\n    top: 60px;\r\n    width: 40%;\r\n    z-index: 2;\r\n}\r\n\r\n.search-actions {\r\n    margin-left: 10px;\r\n}\r\n\r\n.nav-bar {\r\n    margin-top: 10px;\r\n}\r\n\r\n#back-button {\r\n    position: fixed;\r\n    right:30px;\r\n    bottom:30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ncmVkaWVudHMvaW5ncmVkaWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvaW5ncmVkaWVudHMvaW5ncmVkaWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wIDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogTm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG4ucGFnZS1lbGVtZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA5NSU7XHJcbn1cclxuLnByb2R1Y3QtZGV0YWlscyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uaXRlbS1pbWFnZSB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5ibHVycnktb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmluZ3JlZGllbnQtZGV0YWlscyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNjBweDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc2VhcmNoLWFjdGlvbnMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXYtYmFyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNiYWNrLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDozMHB4O1xyXG4gICAgYm90dG9tOjMwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ingredients/ingredients.component.html":
/*!********************************************************!*\
  !*** ./src/app/ingredients/ingredients.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n\tSearch for an ingredient\r\n</h1>\r\n\r\n<div class='page-element'>\r\n  <mat-card class=\"search-form\">\r\n  \t<form role=\"form\">\r\n      <mat-list>\r\n        <mat-list-item>\r\n    \t  <mat-icon mat-list-icon>search</mat-icon>\r\n          <p mat-line>\r\n            <mat-form-field>\r\n              <input matInput id=\"searchName\" required maxlengtd=\"100\" class=\"form-control\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\">\r\n            </mat-form-field>\r\n          </p>\r\n        </mat-list-item>\r\n      </mat-list>\r\n      <mat-card-actions class=\"search-actions\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"onSearchItem()\">Search Item</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onClearResults()\">Clear</button>\r\n      </mat-card-actions>\r\n\t  </form>\r\n  </mat-card>\r\n\r\n  <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\" fxLayoutAlign=\"flex-start\" class=\"products-list\" *ngIf=(products)>\r\n    <mat-card fxFlex=\"0 1 calc(33.3% - 10px)\" class='product-details' *ngFor=\"let product of products\">\r\n      <mat-card-title-group>\r\n        <mat-card-title>\r\n          {{ product.product_name }}  <span *ngIf=\"product.quantity\"> - {{ product.quantity }} </span>\r\n        </mat-card-title>\r\n        <mat-card-subtitle>\r\n          {{ product.brands }}\r\n        </mat-card-subtitle>\r\n        <img *ngIf=\"product.image_url\" mat-card-sm-image src='{{ product.image_url }}'>\r\n      </mat-card-title-group>\r\n      \r\n      <mat-card-content>\r\n        <h4>Nutritional values per 100g</h4>\r\n        <table>\r\n          <tr>\r\n            <td>Protein (g)</td>\r\n            <td>Carbs (g)</td>\r\n            <td>Fat (g)</td>\r\n            <td>Energy (kcal)</td>\r\n          </tr>\r\n          <tr>\r\n            <td><i>{{ product.nutriments.proteins_100g }}</i></td>\r\n            <td><i>{{ product.nutriments.carbohydrates_100g }}</i></td>\r\n            <td><i>{{ product.nutriments.fat_100g }}</i></td>\r\n            <td><i>{{ product.nutriments.energy_value }}</i></td>\r\n          </tr>\r\n        </table>\r\n        <br>\r\n        <i>\r\n          More details on <a href='{{ product.url }}' target=\"_blank\">Open Food Facts.</a>\r\n        </i>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onAddFavorite(product.code)\">Favorite</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onDisplayDetails(product)\">Details</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <mat-card class=\"nav-bar\" *ngIf=(products)>\r\n    <mat-paginator [length]=\"totalResults\"\r\n              [pageSize]=\"pageSize\"\r\n              [pageSizeOptions]=\"pageSizeOptions\"\r\n              (page)=\"onNewPage($event)\">\r\n    </mat-paginator>\r\n  </mat-card>\r\n</div>\r\n\r\n<div class=\"blurry-overlay\" *ngIf='showDetails' (click)=\"onHideDetails()\"></div>\r\n\r\n<div class='ingredient-details' *ngIf='showDetails'>\r\n  <mat-card>\r\n    <mat-card-title-group>\r\n      <mat-card-title>\r\n        {{ productName }}  <span *ngIf=\"productQuantity\"> - {{ productQuantity }} </span>\r\n      </mat-card-title>\r\n      <mat-card-subtitle>\r\n        {{ productBrands }}\r\n      </mat-card-subtitle>\r\n      <img *ngIf=\"productImageUrl\" mat-card-lg-image src='{{ productImageUrl }}'>\r\n    </mat-card-title-group>\r\n    \r\n    <mat-card-content>\r\n      <h4>Nutritional values per 100g</h4>\r\n      <table>\r\n        <tr>\r\n          <td>Protein (g)</td>\r\n          <td>Carbs (g)</td>\r\n          <td>Fat (g)</td>\r\n          <td>Energy (kcal)</td>\r\n        </tr>\r\n        <tr>\r\n          <td><i>{{ productProteins100g }}</i></td>\r\n          <td><i>{{ productCarbohydrates100g }}</i></td>\r\n          <td><i>{{ productFat100g }}</i></td>\r\n          <td><i>{{ productEnergyValue }}</i></td>\r\n        </tr>\r\n      </table>\r\n      <br>\r\n      <i>\r\n        More details on <a href='{{ productUrl }}' target=\"_blank\">Open Food Facts.</a>\r\n      </i>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onAddFavorite(productCode)\">Favorite</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onHideDetails()\">Back</button>\r\n      </mat-card-actions>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/ingredients/ingredients.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ingredients/ingredients.component.ts ***!
  \******************************************************/
/*! exports provided: IngredientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsComponent", function() { return IngredientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_open_food_facts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/open-food-facts.service */ "./src/app/services/open-food-facts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var IngredientsComponent = /** @class */ (function () {
    function IngredientsComponent(openFoodFactsService, router) {
        this.openFoodFactsService = openFoodFactsService;
        this.router = router;
        this.products = null;
        this.showDetails = false;
    }
    IngredientsComponent.prototype.ngOnInit = function () {
    };
    IngredientsComponent.prototype.onSearchItem = function () {
        var _this = this;
        console.log("Searching Item : " + this.name);
        this.openFoodFactsService.searchItems(this.name, 1, function (data) {
            console.log(data);
            _this.products = data.products;
            _this.pageSize = data.page_size;
            _this.currentPage = data.page;
            _this.totalResults = data.count;
        });
    };
    IngredientsComponent.prototype.onAddFavorite = function (value) {
        console.log("Adding Item to Favorites : " + value);
    };
    IngredientsComponent.prototype.onHideDetails = function () {
        this.showDetails = false;
    };
    IngredientsComponent.prototype.onDisplayDetails = function (product) {
        console.log("Checking details of : " + product);
        this.productCode = product.code;
        this.productName = product.product_name;
        this.productQuantity = product.quantity;
        this.productBrands = product.brands;
        this.productImageUrl = product.image_url;
        this.productProteins100g = product.nutriments.proteins_100g;
        this.productCarbohydrates100g = product.nutriments.carbohydrates_100g;
        this.productFat100g = product.nutriments.fat_100g;
        this.productEnergyValue = product.nutriments.energy_value;
        this.productUrl = product.url;
        this.showDetails = true;
    };
    IngredientsComponent.prototype.onNewPage = function (event) {
        var _this = this;
        console.log("scanning page : " + event.pageIndex);
        this.openFoodFactsService.searchItems(this.name, event.pageIndex + 1, function (data) {
            console.log(data);
            _this.products = data.products;
            _this.pageSize = data.page_size;
            _this.currentPage = data.page;
            _this.totalResults = data.count;
        });
    };
    IngredientsComponent.prototype.onClearResults = function () {
        this.products = null;
    };
    IngredientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ingredients',
            template: __webpack_require__(/*! ./ingredients.component.html */ "./src/app/ingredients/ingredients.component.html"),
            styles: [__webpack_require__(/*! ./ingredients.component.css */ "./src/app/ingredients/ingredients.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_open_food_facts_service__WEBPACK_IMPORTED_MODULE_2__["OpenFoodFactsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], IngredientsComponent);
    return IngredientsComponent;
}());



/***/ }),

/***/ "./src/app/meals/meals.component.css":
/*!*******************************************!*\
  !*** ./src/app/meals/meals.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lYWxzL21lYWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/meals/meals.component.html":
/*!********************************************!*\
  !*** ./src/app/meals/meals.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  meals works!\n</p>\n"

/***/ }),

/***/ "./src/app/meals/meals.component.ts":
/*!******************************************!*\
  !*** ./src/app/meals/meals.component.ts ***!
  \******************************************/
/*! exports provided: MealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealsComponent", function() { return MealsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MealsComponent = /** @class */ (function () {
    function MealsComponent() {
    }
    MealsComponent.prototype.ngOnInit = function () {
    };
    MealsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meals',
            template: __webpack_require__(/*! ./meals.component.html */ "./src/app/meals/meals.component.html"),
            styles: [__webpack_require__(/*! ./meals.component.css */ "./src/app/meals/meals.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MealsComponent);
    return MealsComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/project/project.component.css":
/*!***********************************************!*\
  !*** ./src/app/project/project.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-grid-list {\r\n    margin: auto;\r\n    width: 100%\r\n}\r\n\r\nh1 {\r\n    width: 95%;\r\n    margin: auto;\r\n    margin-top : 10px;\r\n    margin-bottom: 10px;\r\n    font-family: Noto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n.page-element {\r\n    margin: auto;\r\n    width: 95%;\r\n}\r\n\r\na {\r\n\tcolor: white\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0NBQ0M7QUFDRCIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1ncmlkLWxpc3Qge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxuaDEge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3AgOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBOb3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5wYWdlLWVsZW1lbnQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxuYSB7XHJcblx0Y29sb3I6IHdoaXRlXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>The Project</h1>\n\n<div class='page-element'>\n<mat-card class=\"project\">\n    <p>\n    You always wanted to know what you eat ? How much carbs there is in your burger ?<br/>\n    The <strong>MyMeals</strong> project is here for you !<br/><br/>Our goal is to :\n    <li>Provide detailed inforamation about food</li>\n    <li></li>\n    </p>\n</mat-card>\n</div>\n\n<h1>The Team</h1>\n<div class='page-element team-list'>\n    <mat-card class=\"team-member\">\n        MEMBRE\n    </mat-card>\n</div>\n\n<h1>Legal stuff</h1>\n<div class='page-element'>\n\t<mat-card class=\"project\">\n\t\t<div>\n\t\t\tIcons made by <a href=\"https://www.freepik.com/\" title=\"Freepik\">Freepik</a> from <a href=\"https://www.flaticon.com/\" title=\"Flaticon\">www.flaticon.com</a> is licensed by <a href=\"http://creativecommons.org/licenses/by/3.0/\" title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0 BY</a>\n\t\t</div>\n\t</mat-card>\n</div>"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/project/project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.component.css":
/*!***********************************************!*\
  !*** ./src/app/recipes/recipes.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/recipes/recipes.component.html":
/*!************************************************!*\
  !*** ./src/app/recipes/recipes.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  recipes works!\n</p>\n"

/***/ }),

/***/ "./src/app/recipes/recipes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recipes/recipes.component.ts ***!
  \**********************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipesComponent = /** @class */ (function () {
    function RecipesComponent() {
    }
    RecipesComponent.prototype.ngOnInit = function () {
    };
    RecipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipes',
            template: __webpack_require__(/*! ./recipes.component.html */ "./src/app/recipes/recipes.component.html"),
            styles: [__webpack_require__(/*! ./recipes.component.css */ "./src/app/recipes/recipes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "./src/app/services/open-food-facts.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/open-food-facts.service.ts ***!
  \*****************************************************/
/*! exports provided: OpenFoodFactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenFoodFactsService", function() { return OpenFoodFactsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var OpenFoodFactsService = /** @class */ (function () {
    function OpenFoodFactsService(http) {
        this.http = http;
    }
    OpenFoodFactsService.prototype.searchItems = function (searchString, searchPage, apiCallback) {
        this.http.get('https://world.openfoodfacts.org/cgi/search.pl?search_simple=1&action=process&json=1&page_size=18&search_terms=' + searchString + '&page=' + searchPage).subscribe(function (data) {
            apiCallback(data);
        });
    };
    OpenFoodFactsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OpenFoodFactsService);
    return OpenFoodFactsService;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  signin works!\n</p>\n"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\User\E510319\GitHub\my-meals-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map