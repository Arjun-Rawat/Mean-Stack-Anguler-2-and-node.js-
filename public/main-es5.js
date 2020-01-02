function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBlogBlogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\r\n<h2 class=\" \">Blog Feed</h2>\r\n<br>\r\n\r\n<div class=\"\" *ngIf=\"message && newPost\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<button type=\"button\" name=\"button\" class=\"btn btn-warning\" *ngIf=\"!newPost\" (click)\r\n=\"newBlogForm()\">New Post</button>\r\n&nbsp;\r\n<button [disabled]=\"lodingBlogs\" type=\"button\" name=\"button\" class=\"btn btn-dark\" *ngIf=\"!newPost\" (click)\r\n=\"relodBlogs()\"><i class=\"fas fa-redo\">\r\n</i>&nbsp;&nbsp;Reload</button>\r\n\r\n<br />\r\n<br />\r\n\r\n<form [formGroup]=\"form\" name=\"blogForm\" (submit)=\"onBlogSubmit()\" *ngIf=\"newPost\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"title\">Title</label>\r\n    <div [ngClass]=\"{'has-success': form.controls.title.valid, 'has-error': form.controls.title.dirty && form.controls.title.errors}\">\r\n      <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"*Blog Title\" autocomplete=\"off\" formControlName=\"title\" />\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.required\">This field is required.</li>\r\n        <li *ngIf=\"(form.controls.title.dirty && form.controls.title.errors?.minlength) || (form.controls.title.dirty && form.controls.title.errors?.maxlength)\">Max length: 50, Min length: 5</li>\r\n        <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.alphaNumericValidation\">Must be a letter or number</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"body\">Body</label>\r\n    <div [ngClass]=\"{'has-success': form.controls.body.valid, 'has-error': form.controls.body.dirty && form.controls.body.errors}\">\r\n      <textarea name=\"body\" rows=\"8\" cols=\"80\" placeholder=\"*Body\" class=\"form-control\" formControlName=\"body\"></textarea>\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.body.dirty && form.controls.body.errors?.required\">This field is required.</li>\r\n        <li *ngIf=\"(form.controls.body.dirty && form.controls.body.errors?.minlength) || (form.controls.body.dirty && form.controls.body.errors?.maxlength)\">Max length: 500, Min length: 5</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <button [disabled]=\"processing\" type=\"button\" name=\"button\" (click)=\"goBack()\" class=\"btn btn-warning\">Go Back</button>\r\n&nbsp;\r\n  <button [disabled]=\"processing || !form.valid\" type=\"submit\" name=\"button\" class=\"btn btn-success\">Submit</button>\r\n</form>\r\n\r\n\r\n<div *ngIf=\"!newPost\">\r\n  <div class=\"card card-primary\" *ngFor=\"let blog of blogPosts\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\">{{ blog.title }}</h3>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      {{ blog.body }}\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <strong>Posted by: </strong>{{ blog.createdBy }}\r\n      <br />\r\n      <strong>Date: </strong>{{ blog.createdAt | date:'MMM dd, yyyy' }}\r\n      <br />\r\n      <div *ngIf=\"username === blog.createdBy\">\r\n        <strong>Likes: </strong>{{ blog.likes }}\r\n        <br />\r\n        <strong>Dislikes: </strong>{{ blog.dislikes }}\r\n      </div>\r\n<br>\r\n      <a [routerLink]=\"['/edit-blog/', blog._id]\" *ngIf=\"username === blog.createdBy\"><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-info\">Edit</button></a>\r\n      &nbsp;\r\n      <a [routerLink]=\"['/delete-blog/', blog._id]\" *ngIf=\"username === blog.createdBy\"><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\">Delete</button></a>\r\n\r\n      &nbsp;\r\n      <div class=\"dropdown\">\r\n          <button [disabled]=\"blog.likedBy.indexOf(username)> -1\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-success\" *ngIf=\"username !==blog.createdBy\"\r\n          (click)=\"likeBlog(blog._id)\">\r\n            <i class=\"far fa-thumbs-up\">&nbsp;</i>Likes:{{blog.likes}}\r\n          </button>\r\n      <div class=\"dropdown-content\">\r\n          <a [routerLink]=\"['/user/',liker]\" *ngFor=\"let liker of blog.likedBy\">{{liker}}</a>\r\n      </div>\r\n    </div>\r\n&nbsp;\r\n    <div class=\"dropdown\">\r\n        <button [disabled]=\"blog.dislikedBy.indexOf(username)> -1\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-warning\" *ngIf=\"username !== blog.createdBy\"\r\n        (click)=\"dislikeBlog(blog._id)\">\r\n          <i class=\"far fa-thumbs-down\">&nbsp;</i>Dislikes:{{blog.dislikes}}\r\n        </button>\r\n    <div class=\"dropdown-content\">\r\n        <a [routerLink]=\"['/user/',disliker]\" *ngFor=\"let disliker of blog.dislikedBy\">{{disliker}}</a>\r\n    </div>\r\n  </div>\r\n\r\n    </div>\r\n    <!-- card Footer End -->\r\n\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">\r\n        <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\"\r\n        (click)=\"draftComment(blog._id)\" [disabled]=\"newComment.indexOf(blog._id) > -1\">Post Comment</button>\r\n        <br />\r\n        <br />\r\n        <div *ngIf=\"newComment.indexOf(blog._id) > -1\">\r\n          <form [formGroup]=\"commentForm\">\r\n            <textarea name=\"comment\" rows=\"10\" cols=\"30\" class=\"form-control\" formControlName=\"comment\"></textarea>\r\n            <div [ngClass]=\"{'is-valid':!commentForm.controls.comment.errors && commentForm.controls.comment.dirty, 'has-error': commentForm.controls.comment.dirty && commentForm.controls.comment.errors}\">\r\n              <ul class=\"help-block\">\r\n                <li *ngIf=\"commentForm.controls.comment.errors?.required && commentForm.controls.comment.dirty\">This field is required.</li>\r\n                <li *ngIf=\"(commentForm.controls.comment.errors?.maxlength && commentForm.controls.comment.dirty) ||\r\n                (commentForm.controls.comment.errors?.minlength && commentForm.controls.comment.dirty)\">Comment must be at least 1 character but no more than 200.</li>\r\n              </ul>\r\n            </div>\r\n            <br/>\r\n            <button [disabled]=\"!commentForm.valid || processing\" type=\"submit\" name=\"button\" class=\"btn btn-sm btn-info\" (click)=\"postComment(blog._id)\">Post</button>\r\n            &nbsp;\r\n            <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"cancelSubmission(blog._id)\">Cancel</button>\r\n          </form>\r\n        </div>\r\n\r\n        <!-- Show Comments -->\r\n        <li *ngIf=\"enabledComments.indexOf(blog._id) === -1 && blog.comments.length > 0\" class=\"list-group-item\">\r\n          <span (click)=\"expand(blog._id)\">\r\n            Show comments&nbsp;&nbsp;\r\n            <div class=\"far fa-comment\"></div>\r\n          </span>\r\n        </li>\r\n\r\n        <li *ngIf=\"enabledComments.indexOf(blog._id) > -1\" class=\"list-group-item\">\r\n          <span (click)=\"collapse(blog._id)\">\r\n            Hide Comments&nbsp;&nbsp;\r\n            <div class=\"far fa-comment\"></div>\r\n          </span>\r\n        </li>\r\n\r\n        <!-- Comment -->\r\n        <div *ngIf=\"enabledComments.indexOf(blog._id) > -1\">\r\n          <li *ngFor=\"let comment of blog.comments\" class=\"list-group-item\">\r\n            <strong>{{ comment.commentator }}:</strong> {{ comment.comment }}\r\n          </li>\r\n        </div>\r\n    </ul>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/delete-blog/delete-blog.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/delete-blog/delete-blog.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBlogDeleteBlogDeleteBlogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<h2 class=\"page-header\">Delete Blog</h2>\r\n\r\n<div class=\" \" *ngIf=\"message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{message }}\r\n  </div>\r\n</div>\r\n<div class=\"col-md-6\" *ngIf=\"foundBlog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"exampleModalLongTitle\">Confirm</h4>\r\n       <button type=\"button\" name=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n   <p>Are you sure you would like to delete this blog?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"deleteBlog()\">Yes</button>\r\n      <a routerLink=\"/blog\"><button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-danger\">No</button></a>\r\n      </div>\r\n    </div>\r\n    <br/>\r\n  <div class=\"card card-primary\">\r\n     <div class=\"card-header\">\r\n       <h3 class=\"card-title\">{{ blog.title }}</h3>\r\n     </div>\r\n     <div class=\"card-body\">\r\n       {{ blog.body }}\r\n     </div>\r\n     <div class=\"card-footer\">\r\n       <strong>Posted by: </strong> {{ blog.createdBy }}\r\n       <br />\r\n       <strong>Date: </strong> {{ blog.createdAt | date:'MMM dd, yyyy' }}\r\n     </div>\r\n  </div>\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/edit-blog/edit-blog.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/edit-blog/edit-blog.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBlogEditBlogEditBlogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <h2 class=\"page-header\">Edit Blog</h2>\r\n\r\n\r\n  <div class=\" \" *ngIf=\"message\">\r\n    <div [ngClass]=\"messageClass\">\r\n      {{message}}\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <form (submit)=\"updateBlogSubmit()\" *ngIf=\"!loading\">\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"title\">Title</label>\r\n\r\n      <input [disabled]=\"processing\" type=\"text\" name=\"title\" placeholder=\"*Blog Title\" class=\"form-control\" [(ngModel)]=\"blog.title\" />\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"body\">Body</label>\r\n\r\n      <textarea [disabled]=\"processing\" name=\"body\" rows=\"8\" cols=\"80\" [(ngModel)]=\"blog.body\" class=\"form-control\" placeholder=\"*Blog Body\"></textarea>\r\n    </div>\r\n\r\n\r\n    <a [routerLink]=\"['/delete-blog/', blog._id]\"><button  [disabled]=\"processing\"  type=\"button\" name=\"button\" class=\"btn btn-danger\">Delete</button></a>\r\n    &nbsp;\r\n    <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"goBack()\">Go Back</button>\r\n    &nbsp;\r\n    <button [disabled]=\"processing\" type=\"submit\" name=\"save\" class=\"btn btn-info\">Save Changes</button>\r\n\r\n  </form>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<br><br>\r\n<h1 class=\"jumbotron\">Dashboard Route</h1>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<br>\r\n<div class=\"jumbotron text-center\">\r\n  <h1>MEAN Stack Application</h1>\r\n  <p class=\"lead\">Welcome to the MEAN Stack Application by <strong>David Acosta</strong></p>\r\n  <div>\r\n    <a  *ngIf =\"authService.loggedIn()\" routerLink=\"/register\" class=\"btn btn-primary\">Register</a>\r\n      &nbsp;\r\n    <a *ngIf =\"authService.loggedIn()\" routerLink=\"/login\" class=\"btn btn-secondary\">Login</a>\r\n    &nbsp;\r\n    <a  *ngIf =\"!authService.loggedIn()\" routerLink=\"/blog\" class=\"btn btn-success\">View Blogs</a>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6 col-md-4\">\r\n    <div class=\"thumbnail\">\r\n      <img src=\"https://image.flaticon.com/icons/svg/417/417745.svg\" alt=\"placeholder image\" width=\"140\" height=\"140\">\r\n      <div class=\"caption\">\r\n        <h3>MongoDB</h3>\r\n        <p>MongoDB is a free and open-source cross-platform document-oriented database program. This NoSQL database program uses JSON-like documents with schemas.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-6 col-md-4\">\r\n    <div class=thumbnail> <img src=\"https://image.flaticon.com/icons/svg/417/417746.svg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n      <div class=caption>\r\n        <h3>ExpressJS</h3>\r\n        <p>Express.js is a Node.js framework. Node.js is a platform that allows JavaScript to be used outside the Web Browsers, for creating web and network applications.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-6 col-md-4\">\r\n    <div class=thumbnail> <img src=\"https://image.flaticon.com/icons/svg/417/417751.svg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n      <div class=caption>\r\n        <h3>Angular 2</h3>\r\n        <p>Angular is a development platform for building mobile and desktop web applications. Ut dignissim eleifend maximus. Ut dignissim eleifend maximus. Ut dignissim eleifend.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-6 col-md-4\">\r\n    <div class=thumbnail> <img src=\"https://image.flaticon.com/icons/svg/417/417754.svg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n      <div class=caption>\r\n        <h3>NodeJS</h3>\r\n        <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-6 col-md-4\">\r\n    <div class=thumbnail> <img src=\"https://image.flaticon.com/icons/svg/417/417768.svg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n      <div class=caption>\r\n        <h3>Lorem Ipsum</h3>\r\n        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-6 col-md-4\">\r\n    <div class=thumbnail> <img src=\"https://image.flaticon.com/icons/svg/417/417764.svg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n      <div class=caption>\r\n        <h3>Lorem Ipsum</h3>\r\n        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"page-header\">Login</h2>\r\n\r\n<div class=\"\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<form [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">Username</label>\r\n    <div [ngClass]=\"{'has-error': form.controls.username.errors && form.controls.username.dirty, 'has-success': form.controls.username.valid && form.controls.username.dirty }\">\r\n      <input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\" />\r\n\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required.</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <div [ngClass]=\"{'has-error': form.controls.password.errors && form.controls.password.dirty, 'has-success': form.controls.password.valid && form.controls.password.dirty }\">\r\n      <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" />\r\n\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required.</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <input [disabled]=\"!form.valid || processing\" class=\"btn btn-primary\" type=\"submit\" value=\"Login\" />\r\n</form>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div class=\"container\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\">Anguler + Node.js </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n    <ul class=\"navbar-nav navbar-left\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/home\">Home<span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      </ul>\r\n        <ul class =\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\">\r\n        <a class=\"nav-link\" routerLink=\"/dashboard\">Dashboard</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/profile\" *ngIf=\"!authService.loggedIn()\">Profile</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/blog\"*ngIf=\"!authService.loggedIn()\">Blog</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"  routerLink=\"/login\" *ngIf=\"authService.loggedIn()\">Login</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\"(click)=\"onLogoutClick()\" *ngIf=\"! authService.loggedIn()\">Logout</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/register\" *ngIf=\" authService.loggedIn()\">Register</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  </div>\r\n</nav>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"jumbotron\">Profile Page</h2>\r\n\r\n<ul class=\"list-group\">\r\n  <li class=\"list-group-item\">Username:{{username}}</li>\r\n  <li class=\"list-group-item\">Email:{{email}}</li>\r\n</ul>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/public-profile/public-profile.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/public-profile/public-profile.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPublicProfilePublicProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>Public Profile</h2>\r\n\r\n<div class=\" \" *ngIf=\"message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{message}}\r\n  </div>\r\n</div>\r\n\r\n<ul class=\"list-group\" *ngIf=\"foundProfile\">\r\n  <li class=\"list-group-item\">\r\n    <strong>Username:</strong>{{username}}\r\n  </li>\r\n  <li class=\"list-group-item\">\r\n    <strong>Email:</strong>{{email}}\r\n  </li>\r\n</ul>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<br>\r\n   <h2 class=\"jumbotro\">Registration Form</h2>\r\n  <div class=\"\" role=\"alert\">\r\n<div [ngClass]=\"messageClass\">\r\n  {{message}}\r\n</div>\r\n  </div>\r\n  <br>\r\n  <form [formGroup]=\"form\" (submit)=\"onRegisterSubmit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Username</label>\r\n      <div [ngClass]=\"{'has-error': (form.controls.username.errors && form.controls.username.dirty) || (!usernameValid && form.controls.username.dirty), 'has-success': !form.controls.username.errors && usernameValid}\">\r\n            <input type=\"text\" name=\"username\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Username\" formControlName=\"username\" (blur)=\"checkUsername()\"  />\r\n            <ul class=\"help-block\">\r\n              <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required</li>\r\n              <li *ngIf=\"form.controls.username.errors?.minlength && form.controls.username.dirty || form.controls.username.errors?.maxlength && form.controls.username.dirty \">Minimum characters: 3, Maximum characters: 15</li>\r\n              <li *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty\">Username must not have any special characters</li>\r\n              <li *ngIf=\"usernameMessage\">{{usernameMessage}}</li>\r\n            </ul>\r\n          </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email</label>\r\n      <div [ngClass]=\"{'has-error': (form.controls.email.errors && form.controls.email.dirty) || (!emailValid && form.controls.email.dirty), 'has-success': !form.controls.email.errors && emailValid}\">\r\n      <input type=\"text\" name=\"email\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Email\" formControlName=\"email\" (blur)=\"checkEmail()\" />\r\n      <ul class=\"help-block\">\r\n        <li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">This field is required</li>\r\n        <li *ngIf=\"(form.controls.email.errors?.minlength && form.controls.email.dirty || form.controls.email.errors?.maxlength && form.controls.email.dirty ) && form.controls.email.dirty\">Minimum characters: 5, Maximum characters: 30</li>\r\n        <li *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\">This must be a valid e-mail</li>\r\n        <li *ngIf=\"emailMessage\">{{ emailMessage}}</li>\r\n      </ul>\r\n    </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password</label>\r\n      <div [ngClass]=\"{'has-error': (form.controls.password.errors && form.controls.password.dirty), 'has-success': !form.controls.password.errors}\">\r\n        <input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Password\" formControlName=\"password\" />\r\n        <!-- Validation -->\r\n        <ul class=\"help-block\">\r\n          <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required</li>\r\n          <li *ngIf=\"form.controls.password.errors?.minlength && form.controls.password.dirty || form.controls.password.errors?.maxlength && form.controls.password.dirty \">Minimum characters: 8, Maximum characters: 35</li>\r\n          <li *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">Password must be at least 8 characters but no more than 35</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"confirm\">Confirm Password</label>\r\n      <div [ngClass]=\"{'has-error': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls.confirm.dirty), 'has-success': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\">\r\n        <input type=\"password\" name=\"confirm\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Confirm Password\" formControlName=\"confirm\" />\r\n        <!-- Validation -->\r\n        <ul class=\"help-block\">\r\n          <li *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\">This field is required</li>\r\n          <li *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">Password do not match</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n    <input [disabled]=\"!form.valid||processing\" type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\r\n\r\n  </form>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _components_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/public-profile/public-profile.component */
    "./src/app/components/public-profile/public-profile.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./guards/notAuth.guard */
    "./src/app/guards/notAuth.guard.ts");
    /* harmony import */


    var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/blog/blog.component */
    "./src/app/components/blog/blog.component.ts");
    /* harmony import */


    var _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/blog/edit-blog/edit-blog.component */
    "./src/app/components/blog/edit-blog/edit-blog.component.ts");
    /* harmony import */


    var _components_blog_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/blog/delete-blog/delete-blog.component */
    "./src/app/components/blog/delete-blog/delete-blog.component.ts");

    var appRoutes = [{
      path: '',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'dashboard',
      component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    }, {
      path: 'register',
      component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
      canActivate: [_guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_10__["NotAuthGuard"]]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
      canActivate: [_guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_10__["NotAuthGuard"]]
    }, {
      path: 'profile',
      component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    }, {
      path: 'blog',
      component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_11__["BlogComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    }, {
      path: 'edit-blog/:id',
      component: _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_12__["EditBlogComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    }, {
      path: 'delete-blog/:id',
      component: _components_blog_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_13__["DeleteBlogComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    }, {
      path: 'user/:username',
      component: _components_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_8__["PublicProfileComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    }, {
      path: '**',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      // imports: [RouterModule.forRoot(routes)],
      // exports: [RouterModule]
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
      providers: [],
      bootstrap: [],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'client';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_blog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/blog.service */
    "./src/app/services/blog.service.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./guards/notAuth.guard */
    "./src/app/guards/notAuth.guard.ts");
    /* harmony import */


    var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/blog/blog.component */
    "./src/app/components/blog/blog.component.ts");
    /* harmony import */


    var _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/blog/edit-blog/edit-blog.component */
    "./src/app/components/blog/edit-blog/edit-blog.component.ts");
    /* harmony import */


    var _components_blog_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/blog/delete-blog/delete-blog.component */
    "./src/app/components/blog/delete-blog/delete-blog.component.ts");
    /* harmony import */


    var _components_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/public-profile/public-profile.component */
    "./src/app/components/public-profile/public-profile.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"], _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_17__["BlogComponent"], _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_18__["EditBlogComponent"], _components_blog_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_19__["DeleteBlogComponent"], _components_public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_20__["PublicProfileComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_16__["NotAuthGuard"], _services_blog_service__WEBPACK_IMPORTED_MODULE_12__["BlogService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/blog/blog.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/blog/blog.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBlogBlogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dropbtn {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 16px;\r\n  font-size: 16px;\r\n  border: none;\r\n}\r\n\r\n/* The container <div> - needed to position the dropdown content */\r\n\r\n.dropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n/* Dropdown Content (Hidden by Default) */\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f1f1f1;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n/* Links inside the dropdown */\r\n\r\n.dropdown-content a {\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\n/* Change color of dropdown links on hover */\r\n\r\n.dropdown-content a:hover {background-color: #ddd;}\r\n\r\n/* Show the dropdown menu on hover */\r\n\r\n.dropdown:hover .dropdown-content {display: block;}\r\n\r\n/* Change the background color of the dropdown button when the dropdown content is shown */\r\n\r\n.dropdown:hover .dropbtn {background-color: #3e8e41;}\r\n\r\n/* valid */\r\n\r\n/* .form-control{\r\n  border-color: red;\r\n} */\r\n\r\n.card{\r\n  margin-bottom: 30px;  \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUEsa0VBQWtFOztBQUNsRTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUEseUNBQXlDOztBQUN6QztFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsVUFBVTtBQUNaOztBQUVBLDhCQUE4Qjs7QUFDOUI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBLDRDQUE0Qzs7QUFDNUMsMkJBQTJCLHNCQUFzQixDQUFDOztBQUVsRCxvQ0FBb0M7O0FBQ3BDLG1DQUFtQyxjQUFjLENBQUM7O0FBRWxELDBGQUEwRjs7QUFDMUYsMEJBQTBCLHlCQUF5QixDQUFDOztBQUdwRCxVQUFVOztBQUNWOztHQUVHOztBQUNIO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cclxuLmRyb3Bkb3duIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4vKiBEcm9wZG93biBDb250ZW50IChIaWRkZW4gYnkgRGVmYXVsdCkgKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4vKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXHJcbi5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XHJcblxyXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxyXG5cclxuLyogQ2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBkcm9wZG93biBidXR0b24gd2hlbiB0aGUgZHJvcGRvd24gY29udGVudCBpcyBzaG93biAqL1xyXG4uZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge2JhY2tncm91bmQtY29sb3I6ICMzZThlNDE7fVxyXG5cclxuXHJcbi8qIHZhbGlkICovXHJcbi8qIC5mb3JtLWNvbnRyb2x7XHJcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbn0gKi9cclxuLmNhcmR7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDsgIFxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/blog/blog.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/blog/blog.component.ts ***!
    \***************************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppComponentsBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/blog.service */
    "./src/app/services/blog.service.ts");

    var BlogComponent =
    /*#__PURE__*/
    function () {
      function BlogComponent(formBuilder, authService, blogService) {
        _classCallCheck(this, BlogComponent);

        this.formBuilder = formBuilder;
        this.authService = authService;
        this.blogService = blogService;
        this.newPost = false;
        this.lodingBlogs = false;
        this.processing = false;
        this.newComment = [];
        this.enabledComments = [];
        this.createNewBlogForm();
        this.createCommentForm();
      }

      _createClass(BlogComponent, [{
        key: "createNewBlogForm",
        value: function createNewBlogForm() {
          this.form = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), this.alphaNumericValidation])],
            body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])]
          });
        }
      }, {
        key: "createCommentForm",
        value: function createCommentForm() {
          this.commentForm = this.formBuilder.group({
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)])]
          });
        }
      }, {
        key: "enableCommentForm",
        value: function enableCommentForm() {
          this.commentForm.get('comment').enable();
        }
      }, {
        key: "disableCommentForm",
        value: function disableCommentForm() {
          this.commentForm.get('comment').disable();
        }
      }, {
        key: "enableNewBlogForm",
        value: function enableNewBlogForm() {
          this.form.get('title').disable();
          this.form.get('body').disable();
        }
      }, {
        key: "disableNewBlogForm",
        value: function disableNewBlogForm() {
          this.form.get('title').enable();
          this.form.get('body').enable();
        }
      }, {
        key: "alphaNumericValidation",
        value: function alphaNumericValidation(controls) {
          var regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);

          if (regExp.test(controls.value)) {
            return null;
          } else {
            return {
              'alphaNumericValidation': true
            };
          }
        }
      }, {
        key: "newBlogForm",
        value: function newBlogForm() {
          this.newPost = true;
        }
      }, {
        key: "relodBlogs",
        value: function relodBlogs() {
          var _this = this;

          this.lodingBlogs = true;
          this.getAllBlogs();
          setTimeout(function () {
            _this.lodingBlogs = false;
          }, 4000);
        }
      }, {
        key: "draftComment",
        value: function draftComment(id) {
          this.commentForm.reset();
          this.newComment = [];
          this.newComment.push(id);
        }
      }, {
        key: "cancelSubmission",
        value: function cancelSubmission(id) {
          var index = this.newComment.indexOf(id);
          this.newComment.splice(index, 1);
          this.commentForm.reset();
          this.enableCommentForm();
          this.processing = false;
        }
      }, {
        key: "onBlogSubmit",
        value: function onBlogSubmit() {
          var _this2 = this;

          this.processing = true;
          this.disableNewBlogForm();
          var blog = {
            title: this.form.get('title').value,
            body: this.form.get('body').value,
            createdBy: this.username
          };
          this.blogService.newBlog(blog).subscribe(function (data) {
            if (!data.success) {
              _this2.messageClass = 'alert alert-danger';
              _this2.message = data.message;
              _this2.processing = false;

              _this2.enableNewBlogForm();
            } else {
              _this2.messageClass = 'alert alert-success';
              _this2.message = data.message;

              _this2.getAllBlogs();

              setTimeout(function () {
                _this2.newPost = false;
                _this2.processing = false;
                _this2.message = false;

                _this2.form.reset();

                _this2.enableNewBlogForm();
              }, 2000);
            }
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          window.location.reload();
        }
      }, {
        key: "getAllBlogs",
        value: function getAllBlogs() {
          var _this3 = this;

          this.blogService.getAllBlogs().subscribe(function (data) {
            _this3.blogPosts = data.blogs;
          });
        }
      }, {
        key: "likeBlog",
        value: function likeBlog(id) {
          var _this4 = this;

          this.blogService.likeBlog(id).subscribe(function (data) {
            _this4.getAllBlogs();
          });
        }
      }, {
        key: "dislikeBlog",
        value: function dislikeBlog(id) {
          var _this5 = this;

          this.blogService.dislikeBlog(id).subscribe(function (data) {
            _this5.getAllBlogs();
          });
        }
      }, {
        key: "postComment",
        value: function postComment(id) {
          var _this6 = this;

          this.disableCommentForm();
          this.processing = true;
          var comment = this.commentForm.get('comment').value;
          this.blogService.postComment(id, comment).subscribe(function (data) {
            _this6.getAllBlogs();

            var index = _this6.newComment.indexOf(id);

            _this6.newComment.splice(index, 1);

            _this6.enableCommentForm();

            _this6.commentForm.reset();

            _this6.processing = false;
            if (_this6.enabledComments.indexOf(id) < 0) _this6.expand(id);
          });
        }
      }, {
        key: "expand",
        value: function expand(id) {
          this.enabledComments.push(id);
        }
      }, {
        key: "collapse",
        value: function collapse(id) {
          var index = this.enabledComments.indexOf(id);
          this.enabledComments.splice(index, 1);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.authService.getProfile().subscribe(function (profile) {
            _this7.username = profile.user.username;
          });
          this.getAllBlogs();
        }
      }]);

      return BlogComponent;
    }();

    BlogComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _services_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"]
      }];
    };

    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/blog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog.component.css */
      "./src/app/components/blog/blog.component.css")).default]
    })], BlogComponent);
    /***/
  },

  /***/
  "./src/app/components/blog/delete-blog/delete-blog.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/components/blog/delete-blog/delete-blog.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBlogDeleteBlogDeleteBlogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9kZWxldGUtYmxvZy9kZWxldGUtYmxvZy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/blog/delete-blog/delete-blog.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/blog/delete-blog/delete-blog.component.ts ***!
    \**********************************************************************/

  /*! exports provided: DeleteBlogComponent */

  /***/
  function srcAppComponentsBlogDeleteBlogDeleteBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteBlogComponent", function () {
      return DeleteBlogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/blog.service */
    "./src/app/services/blog.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DeleteBlogComponent =
    /*#__PURE__*/
    function () {
      function DeleteBlogComponent(blogService, activatedRoute, router) {
        _classCallCheck(this, DeleteBlogComponent);

        this.blogService = blogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.foundBlog = false;
        this.processing = false;
      }

      _createClass(DeleteBlogComponent, [{
        key: "deleteBlog",
        value: function deleteBlog() {
          var _this8 = this;

          this.processing = true;
          this.blogService.deleteBlog(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
              _this8.messageClass = 'alert alert-danger';
              _this8.message = data.message;
            } else {
              _this8.messageClass = 'alert alert-success';
              _this8.message = data.message;
              setTimeout(function () {
                _this8.router.navigate(['/blog']);
              }, 2000);
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.currentUrl = this.activatedRoute.snapshot.params;
          this.blogService.getSingleBlog(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
              _this9.messageClass = 'alert alert-danger';
              _this9.message = data.message;
            } else {
              _this9.blog = {
                title: data.blog.title,
                body: data.blog.body,
                createdBy: data.blog.createdBy,
                createAt: data.blog.createAt
              };
              _this9.foundBlog = true;
            }
          });
        }
      }]);

      return DeleteBlogComponent;
    }();

    DeleteBlogComponent.ctorParameters = function () {
      return [{
        type: _services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    DeleteBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-delete-blog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./delete-blog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/delete-blog/delete-blog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./delete-blog.component.css */
      "./src/app/components/blog/delete-blog/delete-blog.component.css")).default]
    })], DeleteBlogComponent);
    /***/
  },

  /***/
  "./src/app/components/blog/edit-blog/edit-blog.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/components/blog/edit-blog/edit-blog.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBlogEditBlogEditBlogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9lZGl0LWJsb2cvZWRpdC1ibG9nLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/blog/edit-blog/edit-blog.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/blog/edit-blog/edit-blog.component.ts ***!
    \******************************************************************/

  /*! exports provided: EditBlogComponent */

  /***/
  function srcAppComponentsBlogEditBlogEditBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditBlogComponent", function () {
      return EditBlogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/blog.service */
    "./src/app/services/blog.service.ts");

    var EditBlogComponent =
    /*#__PURE__*/
    function () {
      function EditBlogComponent(location, activatedRoute, blogService, router) {
        _classCallCheck(this, EditBlogComponent);

        this.location = location;
        this.activatedRoute = activatedRoute;
        this.blogService = blogService;
        this.router = router;
        this.processing = false;
        this.loading = true;
      }

      _createClass(EditBlogComponent, [{
        key: "updateBlogSubmit",
        value: function updateBlogSubmit() {
          var _this10 = this;

          this.processing = true;
          this.blogService.editBlog(this.blog).subscribe(function (data) {
            if (!data.success) {
              _this10.messageClass = 'alert alert-danger';
              _this10.message = data.message;
              _this10.processing = false;
            } else {
              _this10.messageClass = 'alert alert-success';
              _this10.message = data.message;
              setTimeout(function () {
                _this10.router.navigate(['/blog']);
              }, 2000);
            }
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.currentUrl = this.activatedRoute.snapshot.params;
          this.blogService.getSingleBlog(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
              _this11.messageClass = 'alert alert-danger';
              _this11.message = data.message;
            } else {
              _this11.blog = data.blog;
              _this11.loading = false;
            }
          });
        }
      }]);

      return EditBlogComponent;
    }();

    EditBlogComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    EditBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-blog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-blog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog/edit-blog/edit-blog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-blog.component.css */
      "./src/app/components/blog/edit-blog/edit-blog.component.css")).default]
    })], EditBlogComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/dashboard.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/dashboard.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/components/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(authService) {
        _classCallCheck(this, HomeComponent);

        this.authService = authService;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../guards/auth.guard */
    "./src/app/guards/auth.guard.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(formBuilder, authService, router, authGuard) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.authGuard = authGuard;
        this.processing = false;
        this.createForm();
      }

      _createClass(LoginComponent, [{
        key: "createForm",
        value: function createForm() {
          this.form = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "disableForm",
        value: function disableForm() {
          this.form.controls['username'].disable();
          this.form.controls['password'].disable();
        }
      }, {
        key: "enableForm",
        value: function enableForm() {
          this.form.controls['username'].enable();
          this.form.controls['password'].enable();
        }
      }, {
        key: "onLoginSubmit",
        value: function onLoginSubmit() {
          var _this12 = this;

          this.processing = true;
          this.disableForm();
          var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value
          };
          this.authService.login(user).subscribe(function (data) {
            if (!data.success) {
              _this12.messageClass = 'alert  alert-danger';
              _this12.message = data.message;
              _this12.processing = false;

              _this12.enableForm();
            } else {
              _this12.messageClass = 'alert alert-success';
              _this12.message = data.message;

              _this12.authService.storeUserData(data.token, data.user);

              setTimeout(function () {
                if (_this12.previousUrl) {
                  _this12.router.navigate([_this12.previousUrl]);
                } else {
                  _this12.router.navigate(['/dashboard']);
                }
              }, 2000);
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.authGuard.redirectUrl) {
            this.messageClass = 'alert alert-danger';
            this.message = 'You must be logged in to view this page.';
            this.previousUrl = this.authGuard.redirectUrl;
            this.authGuard.redirectUrl = undefined;
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(authService, router) {
        _classCallCheck(this, NavbarComponent);

        this.authService = authService;
        this.router = router;
      }

      _createClass(NavbarComponent, [{
        key: "onLogoutClick",
        value: function onLogoutClick() {
          this.authService.logout();
          this.router.navigate(['/']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/components/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/components/profile/profile.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/profile/profile.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/profile/profile.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/profile/profile.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(authService) {
        _classCallCheck(this, ProfileComponent);

        this.authService = authService;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.authService.getProfile().subscribe(function (profile) {
            _this13.username = profile.user.username;
            _this13.email = profile.user.email;
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/components/profile/profile.component.css")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/components/public-profile/public-profile.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/public-profile/public-profile.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPublicProfilePublicProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljLXByb2ZpbGUvcHVibGljLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/public-profile/public-profile.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/public-profile/public-profile.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PublicProfileComponent */

  /***/
  function srcAppComponentsPublicProfilePublicProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicProfileComponent", function () {
      return PublicProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PublicProfileComponent =
    /*#__PURE__*/
    function () {
      function PublicProfileComponent(authService, activatedRoute) {
        _classCallCheck(this, PublicProfileComponent);

        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.foundProfile = false;
      }

      _createClass(PublicProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.currentUrl = this.activatedRoute.snapshot.params;
          this.authService.getPublicProfile(this.currentUrl.username).subscribe(function (data) {
            if (!data.success) {
              _this14.messageClass = 'alert alert-danger';
              _this14.message = data.message;
            } else {
              _this14.foundProfile = true;
              _this14.username = data.user.username;
              _this14.email = data.user.email;
            }
          });
        }
      }]);

      return PublicProfileComponent;
    }();

    PublicProfileComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    PublicProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-public-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./public-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/public-profile/public-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./public-profile.component.css */
      "./src/app/components/public-profile/public-profile.component.css")).default]
    })], PublicProfileComponent);
    /***/
  },

  /***/
  "./src/app/components/register/register.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/register/register.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(formBuilder, authService) {
        _classCallCheck(this, RegisterComponent);

        this.formBuilder = formBuilder;
        this.authService = authService;
        this.processing = false;
        this.createForm();
      }

      _createClass(RegisterComponent, [{
        key: "createForm",
        value: function createForm() {
          this.form = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), this.validateEmail])],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15), this.validateUsername])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(35), this.validatePassword])],
            confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }, {
            validator: this.matchingPasswords('password', 'confirm')
          });
        }
      }, {
        key: "disableForm",
        value: function disableForm() {
          this.form.controls['email'].disable();
          this.form.controls['username'].disable();
          this.form.controls['password'].disable();
          this.form.controls['confirm'].disable();
        }
      }, {
        key: "enableForm",
        value: function enableForm() {
          this.form.controls['email'].enable();
          this.form.controls['username'].enable();
          this.form.controls['password'].enable();
          this.form.controls['confirm'].enable();
        }
      }, {
        key: "validateEmail",
        value: function validateEmail(controls) {
          var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

          if (regExp.test(controls.value)) {
            return null;
          } else {
            return {
              'validateEmail': true
            };
          }
        }
      }, {
        key: "validateUsername",
        value: function validateUsername(controls) {
          var regExp = new RegExp(/^[a-zA-Z0-9]+$/);

          if (regExp.test(controls.value)) {
            return null;
          } else return {
            'validateUsername': true
          };
        }
      }, {
        key: "validatePassword",
        value: function validatePassword(controls) {
          var regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);

          if (regExp.test(controls.value)) {
            return null;
          } else {
            return {
              'validatePassword': true
            };
          }
        }
      }, {
        key: "matchingPasswords",
        value: function matchingPasswords(password, confirm) {
          return function (group) {
            if (group.controls[password].value === group.controls[confirm].value) {
              return null;
            } else {
              return {
                'matchingPasswords': true
              };
            }
          };
        }
      }, {
        key: "onRegisterSubmit",
        value: function onRegisterSubmit() {
          var _this15 = this;

          this.processing = true;
          this.disableForm();
          var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value
          };
          this.authService.registerUser(user).subscribe(function (data) {
            if (!data.success) {
              _this15.messageClass = 'alert alert-danger';
              _this15.message = data.message;
              _this15.processing = true;

              _this15.enableForm();
            } else {
              _this15.messageClass = 'alert alert-success';
              _this15.message = data.message;
            }
          });
        }
      }, {
        key: "checkEmail",
        value: function checkEmail() {
          var _this16 = this;

          this.authService.checkEmail(this.form.get('email').value).subscribe(function (data) {
            if (!data.success) {
              _this16.emailValid = false;
              _this16.emailMessage = data.message;
            } else {
              _this16.emailValid = true;
              _this16.emailMessage = data.message;
            }
          });
        }
      }, {
        key: "checkUsername",
        value: function checkUsername() {
          var _this17 = this;

          this.authService.checkUsername(this.form.get('username').value).subscribe(function (data) {
            if (!data.success) {
              _this17.usernameValid = false;
              _this17.usernameMessage = data.message;
            } else {
              _this17.usernameValid = true;
              _this17.usernameMessage = data.message;
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/components/register/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(router, state) {
          if (this.authService.loggedIn()) {
            this.redirectUrl = state.url;
            this.router.navigate(['/login']);
            return false;
          } else {
            return true;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthGuard);
    /***/
  },

  /***/
  "./src/app/guards/notAuth.guard.ts":
  /*!*****************************************!*\
    !*** ./src/app/guards/notAuth.guard.ts ***!
    \*****************************************/

  /*! exports provided: NotAuthGuard */

  /***/
  function srcAppGuardsNotAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotAuthGuard", function () {
      return NotAuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var NotAuthGuard =
    /*#__PURE__*/
    function () {
      function NotAuthGuard(authService, router) {
        _classCallCheck(this, NotAuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(NotAuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authService.loggedIn()) {
            return true;
          } else {
            this.router.navigate(['/']);
            return false;
          }
        }
      }]);

      return NotAuthGuard;
    }();

    NotAuthGuard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    NotAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], NotAuthGuard);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.domain = "http://localhost:8080/";
      }

      _createClass(AuthService, [{
        key: "createAuthenticatoinHeader",
        value: function createAuthenticatoinHeader() {
          this.loadToken(); // this.options=new RequestOptions({

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-type': 'application/json',
            'authorization': this.authToken
          });
          this.options = {
            headers: headers
          }; // });
        }
      }, {
        key: "loadToken",
        value: function loadToken() {
          var token = localStorage.getItem('token');
          this.authToken = token;
        }
      }, {
        key: "registerUser",
        value: function registerUser(user) {
          return this.http.post(this.domain + 'authentication/register', user);
        }
      }, {
        key: "checkUsername",
        value: function checkUsername(username) {
          var url = this.domain + 'authentication/checkUsername/' + username;
          console.log(url);
          return this.http.get(url);
        }
      }, {
        key: "checkEmail",
        value: function checkEmail(email) {
          return this.http.get(this.domain + 'authentication/checkEmail/' + email);
        }
      }, {
        key: "login",
        value: function login(user) {
          return this.http.post(this.domain + 'authentication/login', user);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authToken = null;
          this.user = null;
          localStorage.clear();
        }
      }, {
        key: "storeUserData",
        value: function storeUserData(token, user) {
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          this.authToken = token;
          this.user = user;
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          this.createAuthenticatoinHeader();
          return this.http.get(this.domain + 'authentication/profile', this.options);
        }
      }, {
        key: "getPublicProfile",
        value: function getPublicProfile(username) {
          this.createAuthenticatoinHeader();
          return this.http.get(this.domain + 'authentication/publicProfile/' + username, this.options);
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          this.loadToken();

          if (this.authToken) {
            return false;
          } else {
            return true;
          }
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthService);
    /***/
  },

  /***/
  "./src/app/services/blog.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/blog.service.ts ***!
    \******************************************/

  /*! exports provided: BlogService */

  /***/
  function srcAppServicesBlogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogService", function () {
      return BlogService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");

    var BlogService =
    /*#__PURE__*/
    function () {
      function BlogService(authService, http) {
        _classCallCheck(this, BlogService);

        this.authService = authService;
        this.http = http;
        this.domain = this.authService.domain;
      }

      _createClass(BlogService, [{
        key: "createAuthenticatoinHeader",
        value: function createAuthenticatoinHeader() {
          this.authService.loadToken(); // this.options=new RequestOptions({

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-type': 'application/json',
            'authorization': this.authService.authToken
          });
          this.options = {
            headers: headers
          }; // });
        }
      }, {
        key: "newBlog",
        value: function newBlog(blog) {
          this.createAuthenticatoinHeader();
          return this.http.post(this.domain + 'blogs/newBlog', blog, this.options);
        }
      }, {
        key: "getAllBlogs",
        value: function getAllBlogs() {
          this.createAuthenticatoinHeader();
          return this.http.get(this.domain + 'blogs/allBlogs', this.options);
        }
      }, {
        key: "getSingleBlog",
        value: function getSingleBlog(id) {
          this.createAuthenticatoinHeader();
          return this.http.get(this.domain + 'blogs/singleBlog/' + id, this.options);
        }
      }, {
        key: "editBlog",
        value: function editBlog(blog) {
          this.createAuthenticatoinHeader();
          return this.http.put(this.domain + 'blogs/updateBlog/', blog, this.options);
        }
      }, {
        key: "deleteBlog",
        value: function deleteBlog(id) {
          this.createAuthenticatoinHeader();
          return this.http.delete(this.domain + 'blogs/deleteBlog/' + id, this.options);
        }
      }, {
        key: "likeBlog",
        value: function likeBlog(id) {
          var blogData = {
            id: id
          };
          return this.http.put(this.domain + 'blogs/likeBlog', blogData, this.options);
        }
      }, {
        key: "dislikeBlog",
        value: function dislikeBlog(id) {
          var blogData = {
            id: id
          };
          return this.http.put(this.domain + 'blogs/dislikeBlog', blogData, this.options);
        }
      }, {
        key: "postComment",
        value: function postComment(id, comment) {
          this.createAuthenticatoinHeader();
          var blogData = {
            id: id,
            comment: comment
          };
          return this.http.post(this.domain + 'blogs/comment', blogData, this.options);
        }
      }]);

      return BlogService;
    }();

    BlogService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    BlogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BlogService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Arjun Rawat\Desktop\Mean-stack\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map