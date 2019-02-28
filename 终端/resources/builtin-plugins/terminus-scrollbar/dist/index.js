(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("terminus-core"), require("terminus-terminal"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "terminus-core", "terminus-terminal"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@angular/core"), require("terminus-core"), require("terminus-terminal")) : factory(root["@angular/core"], root["terminus-core"], root["terminus-terminal"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/* no static exports found */
/* all exports used */
/*!************************************!*\
  !*** ./src/scrollbar/scrollbar.ts ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const scrollDebounce = 50;
const renderDebounce = 16;
class TerminusHtermScrollbar extends HTMLElement {
    constructor() {
        super();
        this.connected = false;
        this.terminalSubscriptions = [];
        this.nextScrollY = null;
        this.scrollIsDebounced = false;
        this.renderIsDebounced = false;
        this.renderIsDesired = false;
        this.desiredHandlePosition = null;
        this.desiredHandlePercent = null;
        this.alternateScreenActive = null;
        // Handlers connected to HTerm
        this.onTerminalUpdate = () => {
            setTimeout(() => {
                if (this.lastScrollTop !== this.screen.scrollTop || this.lastScrollHeight !== this.screen.scrollHeight) {
                    setTimeout(() => {
                        this.render();
                        this.handleInternalScroll();
                    }, 150);
                }
                this.lastScrollTop = this.screen.scrollTop;
                this.lastScrollHeight = this.screen.scrollHeight;
            }, 50);
        };
        this.onAlternateScreenChange = (isActive) => {
            if (isActive) {
                this.alternateScreenActive = true;
                this.fadeOut();
            }
            else {
                if (this.alternateScreenActive != null) {
                    this.onTerminalUpdate();
                }
                this.alternateScreenActive = false;
            }
        };
        this.handleDebouncedRender = () => {
            this.renderIsDebounced = false;
            if (this.renderIsDesired) {
                this.renderIsDesired = false;
                this.render();
            }
        };
        this.handleDebouncedScroll = () => {
            this.scrollIsDebounced = false;
            if (this.nextScrollY != null) {
                this.scrollTerminal(this.nextScrollY);
                this.nextScrollY = null;
            }
        };
        // User input event handlers for actually causing scrolling to happen
        this.onTrackClick = (click) => {
            click.preventDefault();
            click.stopPropagation();
            // Determine where to move the handle based on where the user click
            const clickPosition = click.pageY - this.track.getBoundingClientRect().top;
            const newHandlePosition = clickPosition - (this.handle.offsetHeight / 2);
            // Move the handle
            this.moveHandleToPosition(newHandlePosition);
            // Determine the new scroll percent based on where the handle moved to
            const newPercent = this.determineNewScrollPercentFromHandle();
            // Scroll the terminal to match
            this.scrollTerminalToPercent(newPercent);
        };
        this.onHandleMouseDown = (mouseDown) => {
            // Don't allow this event to continue, to avoid also triggering the track onclick
            mouseDown.preventDefault();
            mouseDown.stopPropagation();
            // Add a class to the scrollbar so it can be styled while dragging
            this.classList.add('dragging');
            // Bind the needed event listeners to track dragging the handle
            this.moveHandler = this.onHandleMouseMove(mouseDown.clientY);
            document.addEventListener('mousemove', this.moveHandler);
            document.addEventListener('mouseup', this.onMouseUp);
        };
        this.onHandleMouseMove = (startingMouseY) => {
            const startingHandleY = this.handle.offsetTop;
            return (mouseMove) => {
                mouseMove.preventDefault();
                mouseMove.stopPropagation();
                const mouseYDelta = mouseMove.clientY - startingMouseY;
                this.desiredHandlePosition = Math.max(startingHandleY + mouseYDelta, 0);
                // Update the scrollbar UI
                this.render();
                // Actually scroll the terminal to match the scrollbar state
                this.scrollTerminalToPercent(this.determineNewScrollPercentFromHandle());
            };
        };
        this.onMouseUp = (mouseUp) => {
            mouseUp.preventDefault();
            mouseUp.stopPropagation();
            // Remove the drag active class
            this.classList.remove('dragging');
            // Remove the event listeners for dragging
            document.removeEventListener('mousemove', this.moveHandler);
            this.moveHandler = null;
            document.removeEventListener('mouseup', this.onMouseUp);
        };
        this.handleInternalScroll = () => {
            const newPercent = this.getCurrentTerminalScrollPercent();
            this.moveHandleToPercent(newPercent);
        };
        this.shadow = this.attachShadow({ mode: 'open' });
        // Bind the css to the shadow root
        this.shadow.innerHTML = `<style>${__webpack_require__(/*! ./scrollbar.scss */ 7)}</style>`;
        // Create the actual scrollbar DOM
        this.track = this.shadow.appendChild(document.createElement('div'));
        this.handle = this.track.appendChild(document.createElement('div'));
        this.track.className = 'track';
        this.handle.className = 'handle';
        // Hide the scrollbar until it is attached to something and can actually render properly
        this.track.style.display = 'none';
        // Bind the mouse listeners to the scrollbar
        this.track.addEventListener('click', this.onTrackClick);
        this.handle.addEventListener('mousedown', this.onHandleMouseDown);
    }
    connectedCallback() {
        this.connected = true;
    }
    disconnectedCallback() {
        this.connected = false;
    }
    attachToTerminal(terminal) {
        // The terminal tab component that we will be creating a scrollbar for
        this.terminal = terminal;
        // The iframe that HTerm is hosted in
        this.frame = terminal.content.nativeElement.querySelector('iframe');
        // The x-screen element inside the frame that actually renders the terminal
        this.screen = this.frame.contentDocument.querySelector('x-screen');
        // Set the last known scroll info; used to detect changes that require a redraw
        this.lastScrollTop = this.screen.scrollTop;
        this.lastScrollHeight = this.screen.scrollHeight;
        // Listen for scroll events to update the scrollbar when someone scrolls with mousewheel
        this.screen.addEventListener('scroll', this.handleInternalScroll);
        // Start listening to terminal events so we know when something changes that requires a redraw
        this.terminalSubscriptions.push(this.terminal.resize$.subscribe(this.onTerminalUpdate), this.terminal.input$.subscribe(this.onTerminalUpdate), this.terminal.output$.subscribe(this.onTerminalUpdate), this.terminal.alternateScreenActive$.subscribe(this.onAlternateScreenChange));
    }
    detachFromTerminal() {
        // Stop listening to scroll events
        this.screen.removeEventListener('scroll', this.handleInternalScroll);
        // Stop listening to terminal events
        this.terminalSubscriptions.forEach((subscription) => {
            subscription.unsubscribe();
        });
        this.terminalSubscriptions.length = 0;
        // Remove the references to the terminal
        this.terminal = null;
        this.frame = null;
        this.screen = null;
        this.lastScrollTop = null;
        this.lastScrollHeight = null;
        // Hide the scrollbar as it is no longer connected to anything
        this.track.style.display = 'none';
    }
    // Once an update has "happened" inside the class, actually redraws the scrollbar UI and applies the
    // change in position to the terminal if requested
    render() {
        // If we're not actually connected to anything, don't bother trying to draw
        if (!this.connected || !this.frame) {
            return;
        }
        // If the terminal is small enough to not need a scrollbar, just hide
        if (!this.terminalNeedsScrollbar()) {
            this.fadeOut();
            return;
        }
        // If the render is currently debounced, just make it known that we would like to render, and
        // wait for the debounce to clear
        if (this.renderIsDebounced) {
            this.renderIsDesired = true;
            return;
        }
        // Debounce to ensure we don't render too often
        this.renderIsDebounced = true;
        setTimeout(this.handleDebouncedRender, renderDebounce);
        // If we've made it this far, make sure the element is visible
        this.fadeIn();
        const outputScreenCount = Math.max(this.getTerminalScrollableAmount() / this.screen.offsetHeight, 1);
        const newHeight = this.track.offsetHeight / outputScreenCount;
        // Update the handle height (this changes based on the amount of scrollable buffer)
        this.handle.style.height = newHeight + 'px';
        // If a given position is desired, move there
        if (this.desiredHandlePosition != null) {
            this.moveHandleToPosition(this.desiredHandlePosition);
        }
        // If a given percent is desired, move there. Otherwise, update to match the state of the terminal
        else {
            const scrollPercent = this.desiredHandlePercent == null
                ? this.getCurrentTerminalScrollPercent()
                : this.desiredHandlePercent;
            this.moveHandleToPercent(scrollPercent);
        }
        // Clear out the state about where to move
        this.desiredHandlePosition = null;
        this.desiredHandlePercent = null;
    }
    moveHandleToPercent(percent) {
        const availableSpace = this.getAvailableScrollSpace();
        const newScrollPosition = availableSpace * percent;
        this.moveHandleToPosition(newScrollPosition);
    }
    moveHandleToPosition(position) {
        this.handle.style.top = Math.max(0, Math.min(this.getAvailableScrollSpace(), position)) + 'px';
    }
    // Functions for reading data from the scrollbar UI
    getAvailableScrollSpace() {
        return this.track.offsetHeight - this.handle.offsetHeight;
    }
    determineNewScrollPercentFromHandle() {
        return this.handle.offsetTop / this.getAvailableScrollSpace();
    }
    // Functions for actually scrolling the live terminal
    scrollTerminal(newY) {
        if (this.scrollIsDebounced) {
            this.nextScrollY = newY;
            return;
        }
        this.screen.scrollTop = newY;
        this.lastScrollTop = this.screen.scrollTop;
        this.scrollIsDebounced = true;
        setTimeout(this.handleDebouncedScroll, scrollDebounce);
    }
    scrollTerminalToPercent(percent) {
        const newY = this.getTerminalScrollableAmount() * percent;
        this.scrollTerminal(newY);
    }
    // Functions for accessing information about the current state of the terminal
    getCurrentTerminalScrollPercent() {
        return this.screen.scrollTop / this.getTerminalScrollableAmount();
    }
    getTerminalScrollableAmount() {
        return this.screen.scrollHeight - this.screen.offsetHeight;
    }
    terminalNeedsScrollbar() {
        return this.screen.scrollHeight > this.screen.offsetHeight && !this.alternateScreenActive;
    }
    // Functions for showing/hiding the scrollbar element
    fadeIn() {
        const { display, opacity } = this.track.style;
        if (display !== 'block' || parseFloat(opacity) !== 1) {
            this.track.style.display = 'block';
            setTimeout(() => this.track.style.opacity = '1', 0);
        }
    }
    fadeOut() {
        const { display, opacity } = this.track.style;
        if (display !== 'none' || parseFloat(opacity) !== 0) {
            this.track.style.opacity = '0';
            setTimeout(() => this.track.style.display = 'none', 1000);
        }
    }
}
exports.TerminusHtermScrollbar = TerminusHtermScrollbar;


/***/ }),
/* 2 */
/* no static exports found */
/* all exports used */
/*!********************************!*\
  !*** ./src/scrollbar/index.ts ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const scrollbar_1 = __webpack_require__(/*! ./scrollbar */ 1);
var scrollbar_2 = __webpack_require__(/*! ./scrollbar */ 1);
exports.TerminusHtermScrollbar = scrollbar_2.TerminusHtermScrollbar;
customElements.define('terminus-hterm-scrollbar', scrollbar_1.TerminusHtermScrollbar);


/***/ }),
/* 3 */
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** ./src/services/scrollbar.ts ***!
  \***********************************/
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
const core_1 = __webpack_require__(/*! @angular/core */ 0);
const terminus_core_1 = __webpack_require__(/*! terminus-core */ 8);
const terminus_terminal_1 = __webpack_require__(/*! terminus-terminal */ 9);
let ScrollbarService = class ScrollbarService {
    constructor(app, log) {
        this.app = app;
        this.logger = log.create('scrollbar');
    }
    init() {
        this.logger.debug('scrollbar plugin starting up');
        this.knownTabs = new Map();
        this.onTabsChange();
        this.app.tabsChanged$.subscribe(() => {
            setTimeout(() => this.onTabsChange(), 1000);
        });
    }
    onTabsChange() {
        this.app.tabs.forEach((tab) => {
            if (!this.knownTabs.has(tab)) {
                this.logger.debug(`New terminal tab discovered id=${tab.id}`);
                if (tab instanceof terminus_terminal_1.TerminalTabComponent) {
                    this.initScrollbar(tab);
                }
            }
        });
        const newTabSet = new Set(this.app.tabs);
        this.knownTabs.forEach((tab) => {
            if (!newTabSet.has(tab.tab)) {
                this.knownTabs.delete(tab.tab);
                tab.scrollbar.detachFromTerminal();
            }
        });
    }
    initScrollbar(tab) {
        const scrollbar = document.createElement('terminus-hterm-scrollbar');
        tab.content.nativeElement.appendChild(scrollbar);
        scrollbar.attachToTerminal(tab);
        this.knownTabs.set(tab, new Tab(tab, scrollbar));
    }
};
ScrollbarService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [terminus_core_1.AppService,
        terminus_core_1.LogService])
], ScrollbarService);
exports.ScrollbarService = ScrollbarService;
class Tab {
    constructor(tab, scrollbar) {
        this.tab = tab;
        this.scrollbar = scrollbar;
    }
}


/***/ }),
/* 4 */
/* no static exports found */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
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
__webpack_require__(/*! ./scrollbar */ 2);
const core_1 = __webpack_require__(/*! @angular/core */ 0);
const scrollbar_1 = __webpack_require__(/*! ./services/scrollbar */ 3);
let ScrollbarModule = class ScrollbarModule {
    constructor(service) {
        this.service = service;
        this.service.init();
    }
};
ScrollbarModule = __decorate([
    core_1.NgModule({
        providers: [
            scrollbar_1.ScrollbarService,
        ]
    }),
    __metadata("design:paramtypes", [scrollbar_1.ScrollbarService])
], ScrollbarModule);
exports.default = ScrollbarModule;


/***/ }),
/* 5 */
/* no static exports found */
/* all exports used */
/*!***********************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader/lib/loader.js!./src/scrollbar/scrollbar.scss ***!
  \***********************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 6)(false);
// imports


// module
exports.push([module.i, ":host,\n:host * {\n  border: 0;\n  box-sizing: border-box;\n  font: inherit;\n  font-size: 100%;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  user-select: none;\n  vertical-align: baseline; }\n\n:host {\n  --scrollbar-min-handle-size: 50px;\n  --scrollbar-width: 8px;\n  --scrollbar-track-color: #2d373d;\n  --scrollbar-handle-color: #7c8c9c;\n  --scrollbar-border-color: #000;\n  display: block;\n  z-index: 200;\n  position: absolute;\n  top: 0;\n  right: calc(0px - var(--scrollbar-width));\n  bottom: 0; }\n\n:host(.dragging) {\n  left: 0; }\n\n.track {\n  border-radius: var(--scrollbar-width);\n  overflow: hidden;\n  position: absolute;\n  top: 10px;\n  right: var(--scrollbar-width);\n  bottom: 10px;\n  width: var(--scrollbar-width);\n  background-color: var(--scrollbar-track-color);\n  transition: opacity linear 1s; }\n\n.handle {\n  border-radius: var(--scrollbar-width);\n  min-height: var(--scrollbar-min-handle-size);\n  width: var(--scrollbar-width);\n  background-color: var(--scrollbar-handle-color);\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 1px transparent solid;\n  border-color: var(--scrollbar-border-color);\n  cursor: pointer; }\n", ""]);

// exports


/***/ }),
/* 6 */
/* no static exports found */
/* all exports used */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/* no static exports found */
/* all exports used */
/*!**************************************!*\
  !*** ./src/scrollbar/scrollbar.scss ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../~/css-loader!../../~/sass-loader/lib/loader.js!./scrollbar.scss */ 5);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 8 */
/* no static exports found */
/* all exports used */
/*!********************************!*\
  !*** external "terminus-core" ***!
  \********************************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/* no static exports found */
/* all exports used */
/*!************************************!*\
  !*** external "terminus-terminal" ***!
  \************************************/
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map