(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("ngx-toastr"), require("terminus-terminal"), require("fs"), require("rxjs/operators"), require("terminus-core"), require("untildify"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "ngx-toastr", "terminus-terminal", "fs", "rxjs/operators", "terminus-core", "untildify"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@angular/core"), require("ngx-toastr"), require("terminus-terminal"), require("fs"), require("rxjs/operators"), require("terminus-core"), require("untildify")) : factory(root["@angular/core"], root["ngx-toastr"], root["terminus-terminal"], root["fs"], root["rxjs/operators"], root["terminus-core"], root["untildify"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!********************!*\
  !*** ./src/api.ts ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class LinkHandler {
    convert(uri) { return uri; }
    verify(_uri) { return true; }
}
exports.LinkHandler = LinkHandler;


/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** external "ngx-toastr" ***!
  \*****************************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** external "terminus-terminal" ***!
  \************************************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./src/decorator.ts ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const operators_1 = __webpack_require__(/*! rxjs/operators */ 8);
const core_1 = __webpack_require__(/*! @angular/core */ 1);
const terminus_terminal_1 = __webpack_require__(/*! terminus-terminal */ 3);
const api_1 = __webpack_require__(/*! ./api */ 0);
let LinkHighlighterDecorator = class LinkHighlighterDecorator extends terminus_terminal_1.TerminalDecorator {
    constructor(handlers) {
        super();
        this.handlers = handlers;
    }
    attach(terminal) {
        terminal.frontend.contentUpdated$.pipe(operators_1.debounceTime(500)).subscribe(() => {
            if (!terminal.frontend.term) {
                return;
            }
            this.insertLinks(terminal.frontend.term.screen_);
        });
    }
    insertLinks(screen) {
        if ('#text' === screen.cursorNode_.nodeName) {
            // replace text node to element
            const cursorNode = document.createElement('span');
            cursorNode.textContent = screen.cursorNode_.textContent;
            screen.cursorRowNode_.replaceChild(cursorNode, screen.cursorNode_);
            screen.cursorNode_ = cursorNode;
        }
        const traverse = (parentNode) => {
            Array.from(parentNode.childNodes).forEach((node) => {
                if (node.nodeName === '#text') {
                    parentNode.replaceChild(this.urlizeNode(node), node);
                }
                else if (node.nodeName !== 'A') {
                    traverse(node);
                }
            });
        };
        screen.rowsArray.forEach((x) => traverse(x));
    }
    urlizeNode(node) {
        let matches = [];
        this.handlers.forEach((handler) => {
            let regex = new RegExp(handler.regex, 'gi');
            while (true) {
                let match = regex.exec(node.textContent);
                if (!match) {
                    break;
                }
                let uri = handler.convert(match[0]);
                if (!handler.verify(uri)) {
                    continue;
                }
                matches.push({
                    start: regex.lastIndex - match[0].length,
                    end: regex.lastIndex,
                    text: match[0],
                    uri,
                    handler
                });
            }
        });
        if (matches.length === 0) {
            return node;
        }
        matches.sort((a, b) => a.start < b.start ? -1 : 1);
        let span = document.createElement('span');
        let position = 0;
        matches.forEach((match) => {
            if (match.start < position) {
                return;
            }
            if (match.start > position) {
                span.appendChild(document.createTextNode(node.textContent.slice(position, match.start)));
            }
            let a = document.createElement('a');
            a.textContent = match.text;
            a.addEventListener('click', () => {
                match.handler.handle(match.uri);
            });
            span.appendChild(a);
            position = match.end;
        });
        span.appendChild(document.createTextNode(node.textContent.slice(position)));
        return span;
    }
};
LinkHighlighterDecorator = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(api_1.LinkHandler)),
    __metadata("design:paramtypes", [Array])
], LinkHighlighterDecorator);
exports.LinkHighlighterDecorator = LinkHighlighterDecorator;


/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** ./src/handlers.ts ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __webpack_require__(/*! fs */ 7);
const untildify = __webpack_require__(/*! untildify */ 10);
const core_1 = __webpack_require__(/*! @angular/core */ 1);
const ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ 2);
const terminus_core_1 = __webpack_require__(/*! terminus-core */ 9);
const api_1 = __webpack_require__(/*! ./api */ 0);
let URLHandler = class URLHandler extends api_1.LinkHandler {
    constructor(electron) {
        super();
        this.electron = electron;
        this.regex = 'http(s)?://[^\\s;\'"]+[^,;\\s]';
    }
    handle(uri) {
        this.electron.shell.openExternal(uri);
    }
};
URLHandler = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [terminus_core_1.ElectronService])
], URLHandler);
exports.URLHandler = URLHandler;
let UnixFileHandler = class UnixFileHandler extends api_1.LinkHandler {
    constructor(toastr, electron) {
        super();
        this.toastr = toastr;
        this.electron = electron;
        this.regex = '[~/][^\\s,;\'"]+';
    }
    convert(uri) {
        return untildify(uri);
    }
    handle(uri) {
        if (!fs.existsSync(uri)) {
            this.toastr.error('This path does not exist');
            return;
        }
        this.electron.shell.openExternal('file://' + uri);
    }
};
UnixFileHandler = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ngx_toastr_1.ToastrService,
        terminus_core_1.ElectronService])
], UnixFileHandler);
exports.UnixFileHandler = UnixFileHandler;
let WindowsFileHandler = class WindowsFileHandler extends api_1.LinkHandler {
    constructor(toastr, electron) {
        super();
        this.toastr = toastr;
        this.electron = electron;
        this.regex = '\\w:[^\\s,;/\'"]+';
    }
    convert(uri) {
        return untildify(uri);
    }
    handle(uri) {
        if (!fs.existsSync(uri)) {
            this.toastr.error('This path does not exist');
            return;
        }
        this.electron.shell.openExternal('file://' + uri);
    }
};
WindowsFileHandler = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ngx_toastr_1.ToastrService,
        terminus_core_1.ElectronService])
], WindowsFileHandler);
exports.WindowsFileHandler = WindowsFileHandler;


/***/ }),
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
    This plugin is based on Hyperterm Hyperlinks:
    https://github.com/zeit/hyperlinks/blob/master/index.js
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ 1);
const ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ 2);
const terminus_terminal_1 = __webpack_require__(/*! terminus-terminal */ 3);
const api_1 = __webpack_require__(/*! ./api */ 0);
const handlers_1 = __webpack_require__(/*! ./handlers */ 5);
const decorator_1 = __webpack_require__(/*! ./decorator */ 4);
let LinkHighlighterModule = class LinkHighlighterModule {
};
LinkHighlighterModule = __decorate([
    core_1.NgModule({
        imports: [
            ngx_toastr_1.ToastrModule,
        ],
        providers: [
            { provide: api_1.LinkHandler, useClass: handlers_1.UnixFileHandler, multi: true },
            { provide: api_1.LinkHandler, useClass: handlers_1.WindowsFileHandler, multi: true },
            { provide: api_1.LinkHandler, useClass: handlers_1.URLHandler, multi: true },
            { provide: terminus_terminal_1.TerminalDecorator, useClass: decorator_1.LinkHighlighterDecorator, multi: true },
        ],
    })
], LinkHighlighterModule);
exports.default = LinkHighlighterModule;
__export(__webpack_require__(/*! ./api */ 0));


/***/ }),
/* 7 */
/* unknown exports provided */
/* all exports used */
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** external "terminus-core" ***!
  \********************************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** external "untildify" ***!
  \****************************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map