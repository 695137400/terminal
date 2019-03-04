(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("terminus-terminal"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "terminus-terminal"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@angular/core"), require("terminus-terminal")) : factory(root["@angular/core"], root["terminus-terminal"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__) {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/*!************************************!*\
  !*** external "terminus-terminal" ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ 0);
const terminus_terminal_1 = __webpack_require__(/*! terminus-terminal */ 1);
const colorSchemes_1 = __webpack_require__(/*! ./colorSchemes */ 3);
let PopularThemesModule = class PopularThemesModule {
};
PopularThemesModule = __decorate([
    core_1.NgModule({
        providers: [
            { provide: terminus_terminal_1.TerminalColorSchemeProvider, useClass: colorSchemes_1.ColorSchemes, multi: true },
        ],
    })
], PopularThemesModule);
exports.default = PopularThemesModule;


/***/ }),
/* 3 */
/*!*****************************!*\
  !*** ./src/colorSchemes.ts ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ 0);
const terminus_terminal_1 = __webpack_require__(/*! terminus-terminal */ 1);
const schemeContents = __webpack_require__(4);
let ColorSchemes = class ColorSchemes extends terminus_terminal_1.TerminalColorSchemeProvider {
    getSchemes() {
        return __awaiter(this, void 0, void 0, function* () {
            let schemes = [];
            schemeContents.keys().forEach(schemeFile => {
                let lines = schemeContents(schemeFile).split('\n');
                // process #define variables
                let variables = {};
                lines
                    .filter(x => x.startsWith('#define'))
                    .map(x => x.split(' ').map(v => v.trim()))
                    .forEach(([ignore, variableName, variableValue]) => {
                    variables[variableName] = variableValue;
                });
                let values = {};
                lines
                    .filter(x => x.startsWith('*.'))
                    .map(x => x.substring(2))
                    .map(x => x.split(':').map(v => v.trim()))
                    .forEach(([key, value]) => {
                    values[key] = variables[value] ? variables[value] : value;
                });
                let colors = [];
                let colorIndex = 0;
                while (values[`color${colorIndex}`]) {
                    colors.push(values[`color${colorIndex}`]);
                    colorIndex++;
                }
                schemes.push({
                    name: schemeFile.split('/')[1].trim(),
                    foreground: values.foreground,
                    background: values.background,
                    cursor: values.cursorColor,
                    colors,
                });
            });
            return schemes;
        });
    }
};
ColorSchemes = __decorate([
    core_1.Injectable()
], ColorSchemes);
exports.ColorSchemes = ColorSchemes;


/***/ }),
/* 4 */
/*!*************************!*\
  !*** ./schemes sync .* ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./3024 Day": 5,
	"./3024 Night": 6,
	"./AdventureTime": 7,
	"./Afterglow": 8,
	"./AlienBlood": 9,
	"./Argonaut": 10,
	"./Arthur": 11,
	"./AtelierSulphurpool": 12,
	"./Atom": 13,
	"./AtomOneLight": 14,
	"./Base16 Default Dark": 15,
	"./Batman": 16,
	"./Belafonte Day": 17,
	"./Belafonte Night": 18,
	"./BirdsOfParadise": 19,
	"./Blazer": 20,
	"./Borland": 21,
	"./Bright Lights": 22,
	"./Broadcast": 23,
	"./Brogrammer": 24,
	"./C64": 25,
	"./CLRS": 26,
	"./Chalk": 27,
	"./Chalkboard": 28,
	"./Ciapre": 29,
	"./Cobalt Neon": 30,
	"./Cobalt2": 31,
	"./CrayonPonyFish": 32,
	"./Dark Pastel": 33,
	"./Darkside": 34,
	"./Desert": 35,
	"./DimmedMonokai": 36,
	"./DotGov": 37,
	"./Dracula": 38,
	"./Duotone Dark": 39,
	"./ENCOM": 40,
	"./Earthsong": 41,
	"./Elemental": 42,
	"./Elementary": 43,
	"./Espresso": 44,
	"./Espresso Libre": 45,
	"./Fideloper": 46,
	"./FirefoxDev": 47,
	"./Firewatch": 48,
	"./FishTank": 49,
	"./Flat": 50,
	"./Flatland": 51,
	"./Floraverse": 52,
	"./ForestBlue": 53,
	"./FrontEndDelight": 54,
	"./FunForrest": 55,
	"./Galaxy": 56,
	"./Github": 57,
	"./Glacier": 58,
	"./Grape": 59,
	"./Grass": 60,
	"./Gruvbox Dark": 61,
	"./Hardcore": 62,
	"./Harper": 63,
	"./Highway": 64,
	"./Hipster Green": 65,
	"./Homebrew": 66,
	"./Hurtado": 67,
	"./Hybrid": 68,
	"./IC_Green_PPL": 69,
	"./IC_Orange_PPL": 70,
	"./IR_Black": 71,
	"./Jackie Brown": 72,
	"./Japanesque": 73,
	"./Jellybeans": 74,
	"./JetBrains Darcula": 75,
	"./Kibble": 76,
	"./Later This Evening": 77,
	"./Lavandula": 78,
	"./LiquidCarbon": 79,
	"./LiquidCarbonTransparent": 80,
	"./LiquidCarbonTransparentInverse": 81,
	"./Man Page": 82,
	"./Material": 83,
	"./MaterialDark": 84,
	"./Mathias": 85,
	"./Medallion": 86,
	"./Misterioso": 87,
	"./Molokai": 88,
	"./MonaLisa": 89,
	"./Monokai Soda": 90,
	"./Monokai Vivid": 91,
	"./N0tch2k": 92,
	"./Neopolitan": 93,
	"./Neutron": 94,
	"./NightLion v1": 95,
	"./NightLion v2": 96,
	"./Novel": 97,
	"./Obsidian": 98,
	"./Ocean": 99,
	"./OceanicMaterial": 100,
	"./Ollie": 101,
	"./OneHalfDark": 102,
	"./OneHalfLight": 103,
	"./Pandora": 104,
	"./Paraiso Dark": 105,
	"./Parasio Dark": 106,
	"./PaulMillr": 107,
	"./PencilDark": 108,
	"./PencilLight": 109,
	"./Piatto Light": 110,
	"./Pnevma": 111,
	"./Pro": 112,
	"./Red Alert": 113,
	"./Red Sands": 114,
	"./Rippedcasts": 115,
	"./Royal": 116,
	"./Ryuuko": 117,
	"./SeaShells": 118,
	"./Seafoam Pastel": 119,
	"./Seti": 120,
	"./Shaman": 121,
	"./Slate": 122,
	"./Smyck": 123,
	"./SoftServer": 124,
	"./Solarized Darcula": 125,
	"./Solarized Dark": 126,
	"./Solarized Dark - Patched": 127,
	"./Solarized Dark Higher Contrast": 128,
	"./Solarized Light": 129,
	"./SpaceGray": 130,
	"./SpaceGray Eighties": 131,
	"./SpaceGray Eighties Dull": 132,
	"./Spacedust": 133,
	"./Spiderman": 134,
	"./Spring": 135,
	"./Square": 136,
	"./Sundried": 137,
	"./Symfonic": 138,
	"./Tango": 139,
	"./Teerb": 140,
	"./Terminal Basic": 141,
	"./Thayer Bright": 142,
	"./The Hulk": 143,
	"./Tomorrow": 144,
	"./Tomorrow Night": 145,
	"./Tomorrow Night Blue": 146,
	"./Tomorrow Night Bright": 147,
	"./Tomorrow Night Eighties": 148,
	"./ToyChest": 149,
	"./Treehouse": 150,
	"./Twilight": 151,
	"./Ubuntu": 152,
	"./UnderTheSea": 153,
	"./Urple": 154,
	"./Vaughn": 155,
	"./VibrantInk": 156,
	"./Violet Dark": 157,
	"./Violet Light": 158,
	"./WarmNeon": 159,
	"./Wez": 160,
	"./WildCherry": 161,
	"./Wombat": 162,
	"./Wryan": 163,
	"./Zenburn": 164,
	"./ayu": 165,
	"./ayu_light": 166,
	"./base2tone-cave-dark": 167,
	"./base2tone-desert-dark": 168,
	"./base2tone-drawbridge-dark": 169,
	"./base2tone-evening-dark": 170,
	"./base2tone-forest-dark": 171,
	"./base2tone-heath-dark": 172,
	"./base2tone-heath-light": 173,
	"./base2tone-lake-dark": 174,
	"./base2tone-meadow-dark": 175,
	"./base2tone-morning-light": 176,
	"./base2tone-pool-dark": 177,
	"./base2tone-sea-dark": 178,
	"./base2tone-space-dark": 179,
	"./deep": 180,
	"./idleToes": 181
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 4;

/***/ }),
/* 5 */
/*!**************************!*\
  !*** ./schemes/3024 Day ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #4a4543\n*.background:  #f7f7f7\n*.cursorColor: #4a4543\n!\n! Black\n*.color0:      #090300\n*.color8:      #5c5855\n!\n! Red\n*.color1:      #db2d20\n*.color9:      #e8bbd0\n!\n! Green\n*.color2:      #01a252\n*.color10:     #3a3432\n!\n! Yellow\n*.color3:      #fded02\n*.color11:     #4a4543\n!\n! Blue\n*.color4:      #01a0e4\n*.color12:     #807d7c\n!\n! Magenta\n*.color5:      #a16a94\n*.color13:     #d6d5d4\n!\n! Cyan\n*.color6:      #b5e4f4\n*.color14:     #cdab53\n!\n! White\n*.color7:      #a5a2a2\n*.color15:     #f7f7f7\n!\n! Bold, Italic, Underline\n*.colorBD:     #4a4543\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 6 */
/*!****************************!*\
  !*** ./schemes/3024 Night ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #a5a2a2\n*.background:  #090300\n*.cursorColor: #a5a2a2\n!\n! Black\n*.color0:      #090300\n*.color8:      #5c5855\n!\n! Red\n*.color1:      #db2d20\n*.color9:      #e8bbd0\n!\n! Green\n*.color2:      #01a252\n*.color10:     #3a3432\n!\n! Yellow\n*.color3:      #fded02\n*.color11:     #4a4543\n!\n! Blue\n*.color4:      #01a0e4\n*.color12:     #807d7c\n!\n! Magenta\n*.color5:      #a16a94\n*.color13:     #d6d5d4\n!\n! Cyan\n*.color6:      #b5e4f4\n*.color14:     #cdab53\n!\n! White\n*.color7:      #a5a2a2\n*.color15:     #f7f7f7\n!\n! Bold, Italic, Underline\n*.colorBD:     #a5a2a2\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 7 */
/*!*******************************!*\
  !*** ./schemes/AdventureTime ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #f8dcc0\n*.background:  #1f1d45\n*.cursorColor: #efbf38\n!\n! Black\n*.color0:      #050404\n*.color8:      #4e7cbf\n!\n! Red\n*.color1:      #bd0013\n*.color9:      #fc5f5a\n!\n! Green\n*.color2:      #4ab118\n*.color10:     #9eff6e\n!\n! Yellow\n*.color3:      #e7741e\n*.color11:     #efc11a\n!\n! Blue\n*.color4:      #0f4ac6\n*.color12:     #1997c6\n!\n! Magenta\n*.color5:      #665993\n*.color13:     #9b5953\n!\n! Cyan\n*.color6:      #70a598\n*.color14:     #c8faf4\n!\n! White\n*.color7:      #f8dcc0\n*.color15:     #f6f5fb\n!\n! Bold, Italic, Underline\n*.colorBD:     #bd0013\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 8 */
/*!***************************!*\
  !*** ./schemes/Afterglow ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #d0d0d0\n*.background:  #212121\n*.cursorColor: #d0d0d0\n!\n! Black\n*.color0:      #151515\n*.color8:      #505050\n!\n! Red\n*.color1:      #ac4142\n*.color9:      #ac4142\n!\n! Green\n*.color2:      #7e8e50\n*.color10:     #7e8e50\n!\n! Yellow\n*.color3:      #e5b567\n*.color11:     #e5b567\n!\n! Blue\n*.color4:      #6c99bb\n*.color12:     #6c99bb\n!\n! Magenta\n*.color5:      #9f4e85\n*.color13:     #9f4e85\n!\n! Cyan\n*.color6:      #7dd6cf\n*.color14:     #7dd6cf\n!\n! White\n*.color7:      #d0d0d0\n*.color15:     #f5f5f5\n!\n! Bold, Italic, Underline\n*.colorBD:     #d0d0d0\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 9 */
/*!****************************!*\
  !*** ./schemes/AlienBlood ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #637d75\n*.background:  #0f1610\n*.cursorColor: #73fa91\n!\n! Black\n*.color0:      #112616\n*.color8:      #3c4812\n!\n! Red\n*.color1:      #7f2b27\n*.color9:      #e08009\n!\n! Green\n*.color2:      #2f7e25\n*.color10:     #18e000\n!\n! Yellow\n*.color3:      #717f24\n*.color11:     #bde000\n!\n! Blue\n*.color4:      #2f6a7f\n*.color12:     #00aae0\n!\n! Magenta\n*.color5:      #47587f\n*.color13:     #0058e0\n!\n! Cyan\n*.color6:      #327f77\n*.color14:     #00e0c4\n!\n! White\n*.color7:      #647d75\n*.color15:     #73fa91\n!\n! Bold, Italic, Underline\n*.colorBD:     #7afa87\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 10 */
/*!**************************!*\
  !*** ./schemes/Argonaut ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #fffaf4\n*.background:  #0e1019\n*.cursorColor: #ff0018\n!\n! Black\n*.color0:      #232323\n*.color8:      #444444\n!\n! Red\n*.color1:      #ff000f\n*.color9:      #ff2740\n!\n! Green\n*.color2:      #8ce10b\n*.color10:     #abe15b\n!\n! Yellow\n*.color3:      #ffb900\n*.color11:     #ffd242\n!\n! Blue\n*.color4:      #008df8\n*.color12:     #0092ff\n!\n! Magenta\n*.color5:      #6d43a6\n*.color13:     #9a5feb\n!\n! Cyan\n*.color6:      #00d8eb\n*.color14:     #67fff0\n!\n! White\n*.color7:      #ffffff\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #9e9c9a\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 11 */
/*!************************!*\
  !*** ./schemes/Arthur ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ddeedd\n*.background:  #1c1c1c\n*.cursorColor: #e2bbef\n!\n! Black\n*.color0:      #3d352a\n*.color8:      #554444\n!\n! Red\n*.color1:      #cd5c5c\n*.color9:      #cc5533\n!\n! Green\n*.color2:      #86af80\n*.color10:     #88aa22\n!\n! Yellow\n*.color3:      #e8ae5b\n*.color11:     #ffa75d\n!\n! Blue\n*.color4:      #6495ed\n*.color12:     #87ceeb\n!\n! Magenta\n*.color5:      #deb887\n*.color13:     #996600\n!\n! Cyan\n*.color6:      #b0c4de\n*.color14:     #b0c4de\n!\n! White\n*.color7:      #bbaa99\n*.color15:     #ddccbb\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 12 */
/*!************************************!*\
  !*** ./schemes/AtelierSulphurpool ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #979db4\n*.background:  #202746\n*.cursorColor: #979db4\n!\n! Black\n*.color0:      #202746\n*.color8:      #6b7394\n!\n! Red\n*.color1:      #c94922\n*.color9:      #c76b29\n!\n! Green\n*.color2:      #ac9739\n*.color10:     #293256\n!\n! Yellow\n*.color3:      #c08b30\n*.color11:     #5e6687\n!\n! Blue\n*.color4:      #3d8fd1\n*.color12:     #898ea4\n!\n! Magenta\n*.color5:      #6679cc\n*.color13:     #dfe2f1\n!\n! Cyan\n*.color6:      #22a2c9\n*.color14:     #9c637a\n!\n! White\n*.color7:      #979db4\n*.color15:     #f5f7ff\n!\n! Bold, Italic, Underline\n*.colorBD:     #979db4\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 13 */
/*!**********************!*\
  !*** ./schemes/Atom ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #c5c8c6\n*.background:  #161719\n*.cursorColor: #d0d0d0\n!\n! Black\n*.color0:      #000000\n*.color8:      #000000\n!\n! Red\n*.color1:      #fd5ff1\n*.color9:      #fd5ff1\n!\n! Green\n*.color2:      #87c38a\n*.color10:     #94fa36\n!\n! Yellow\n*.color3:      #ffd7b1\n*.color11:     #f5ffa8\n!\n! Blue\n*.color4:      #85befd\n*.color12:     #96cbfe\n!\n! Magenta\n*.color5:      #b9b6fc\n*.color13:     #b9b6fc\n!\n! Cyan\n*.color6:      #85befd\n*.color14:     #85befd\n!\n! White\n*.color7:      #e0e0e0\n*.color15:     #e0e0e0\n!\n! Bold, Italic, Underline\n*.colorBD:     #c5c8c6\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 14 */
/*!******************************!*\
  !*** ./schemes/AtomOneLight ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #2a2c33\n*.background:  #f9f9f9\n*.cursorColor: #bbbbbb\n!\n! Black\n*.color0:      #000000\n*.color8:      #000000\n!\n! Red\n*.color1:      #de3e35\n*.color9:      #de3e35\n!\n! Green\n*.color2:      #3f953a\n*.color10:     #3f953a\n!\n! Yellow\n*.color3:      #d2b67c\n*.color11:     #d2b67c\n!\n! Blue\n*.color4:      #2f5af3\n*.color12:     #2f5af3\n!\n! Magenta\n*.color5:      #950095\n*.color13:     #a00095\n!\n! Cyan\n*.color6:      #3f953a\n*.color14:     #3f953a\n!\n! White\n*.color7:      #bbbbbb\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #000000\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 15 */
/*!*************************************!*\
  !*** ./schemes/Base16 Default Dark ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "! Base16 Default Dark\n! Scheme: Chris Kempson (http://chriskempson.com)\n\n#define base00 #181818\n#define base01 #282828\n#define base02 #383838\n#define base03 #585858\n#define base04 #b8b8b8\n#define base05 #d8d8d8\n#define base06 #e8e8e8\n#define base07 #f8f8f8\n#define base08 #ab4642\n#define base09 #dc9656\n#define base0A #f7ca88\n#define base0B #a1b56c\n#define base0C #86c1b9\n#define base0D #7cafc2\n#define base0E #ba8baf\n#define base0F #a16946\n\n*.foreground:   base05\n#ifdef background_opacity\n*.background:   [background_opacity]base00\n#else\n*.background:   base00\n#endif\n*.cursorColor:  base05\n\n*.color0:       base00\n*.color1:       base08\n*.color2:       base0B\n*.color3:       base0A\n*.color4:       base0D\n*.color5:       base0E\n*.color6:       base0C\n*.color7:       base05\n\n*.color8:       base03\n*.color9:       base08\n*.color10:      base0B\n*.color11:      base0A\n*.color12:      base0D\n*.color13:      base0E\n*.color14:      base0C\n*.color15:      base07\n\n! Note: colors beyond 15 might not be loaded (e.g., xterm, urxvt),\n! use 'shell' template to set these if necessary\n*.color16:      base09\n*.color17:      base0F\n*.color18:      base01\n*.color19:      base02\n*.color20:      base04\n*.color21:      base06\n"

/***/ }),
/* 16 */
/*!************************!*\
  !*** ./schemes/Batman ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #6f6f6f\n*.background:  #1b1d1e\n*.cursorColor: #fcef0c\n!\n! Black\n*.color0:      #1b1d1e\n*.color8:      #505354\n!\n! Red\n*.color1:      #e6dc44\n*.color9:      #fff78e\n!\n! Green\n*.color2:      #c8be46\n*.color10:     #fff27d\n!\n! Yellow\n*.color3:      #f4fd22\n*.color11:     #feed6c\n!\n! Blue\n*.color4:      #737174\n*.color12:     #919495\n!\n! Magenta\n*.color5:      #747271\n*.color13:     #9a9a9d\n!\n! Cyan\n*.color6:      #62605f\n*.color14:     #a3a3a6\n!\n! White\n*.color7:      #c6c5bf\n*.color15:     #dadbd6\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 17 */
/*!*******************************!*\
  !*** ./schemes/Belafonte Day ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #45373c\n*.background:  #d5ccba\n*.cursorColor: #45373c\n!\n! Black\n*.color0:      #20111b\n*.color8:      #5e5252\n!\n! Red\n*.color1:      #be100e\n*.color9:      #be100e\n!\n! Green\n*.color2:      #858162\n*.color10:     #858162\n!\n! Yellow\n*.color3:      #eaa549\n*.color11:     #eaa549\n!\n! Blue\n*.color4:      #426a79\n*.color12:     #426a79\n!\n! Magenta\n*.color5:      #97522c\n*.color13:     #97522c\n!\n! Cyan\n*.color6:      #989a9c\n*.color14:     #989a9c\n!\n! White\n*.color7:      #968c83\n*.color15:     #d5ccba\n!\n! Bold, Italic, Underline\n*.colorBD:     #45373c\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 18 */
/*!*********************************!*\
  !*** ./schemes/Belafonte Night ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #968c83\n*.background:  #20111b\n*.cursorColor: #968c83\n!\n! Black\n*.color0:      #20111b\n*.color8:      #5e5252\n!\n! Red\n*.color1:      #be100e\n*.color9:      #be100e\n!\n! Green\n*.color2:      #858162\n*.color10:     #858162\n!\n! Yellow\n*.color3:      #eaa549\n*.color11:     #eaa549\n!\n! Blue\n*.color4:      #426a79\n*.color12:     #426a79\n!\n! Magenta\n*.color5:      #97522c\n*.color13:     #97522c\n!\n! Cyan\n*.color6:      #989a9c\n*.color14:     #989a9c\n!\n! White\n*.color7:      #968c83\n*.color15:     #d5ccba\n!\n! Bold, Italic, Underline\n*.colorBD:     #968c83\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 19 */
/*!*********************************!*\
  !*** ./schemes/BirdsOfParadise ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #e0dbb7\n*.background:  #2a1f1d\n*.cursorColor: #573d26\n!\n! Black\n*.color0:      #573d26\n*.color8:      #9b6c4a\n!\n! Red\n*.color1:      #be2d26\n*.color9:      #e84627\n!\n! Green\n*.color2:      #6ba18a\n*.color10:     #95d8ba\n!\n! Yellow\n*.color3:      #e99d2a\n*.color11:     #d0d150\n!\n! Blue\n*.color4:      #5a86ad\n*.color12:     #b8d3ed\n!\n! Magenta\n*.color5:      #ac80a6\n*.color13:     #d19ecb\n!\n! Cyan\n*.color6:      #74a6ad\n*.color14:     #93cfd7\n!\n! White\n*.color7:      #e0dbb7\n*.color15:     #fff9d5\n!\n! Bold, Italic, Underline\n*.colorBD:     #fff8d8\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 20 */
/*!************************!*\
  !*** ./schemes/Blazer ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #d9e6f2\n*.background:  #0d1926\n*.cursorColor: #d9e6f2\n!\n! Black\n*.color0:      #000000\n*.color8:      #262626\n!\n! Red\n*.color1:      #b87a7a\n*.color9:      #dbbdbd\n!\n! Green\n*.color2:      #7ab87a\n*.color10:     #bddbbd\n!\n! Yellow\n*.color3:      #b8b87a\n*.color11:     #dbdbbd\n!\n! Blue\n*.color4:      #7a7ab8\n*.color12:     #bdbddb\n!\n! Magenta\n*.color5:      #b87ab8\n*.color13:     #dbbddb\n!\n! Cyan\n*.color6:      #7ab8b8\n*.color14:     #bddbdb\n!\n! White\n*.color7:      #d9d9d9\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n!*.colorBD:\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 21 */
/*!*************************!*\
  !*** ./schemes/Borland ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ffff4e\n*.background:  #0000a4\n*.cursorColor: #ffa560\n!\n! Black\n*.color0:      #4f4f4f\n*.color8:      #7c7c7c\n!\n! Red\n*.color1:      #ff6c60\n*.color9:      #ffb6b0\n!\n! Green\n*.color2:      #a8ff60\n*.color10:     #ceffac\n!\n! Yellow\n*.color3:      #ffffb6\n*.color11:     #ffffcc\n!\n! Blue\n*.color4:      #96cbfe\n*.color12:     #b5dcff\n!\n! Magenta\n*.color5:      #ff73fd\n*.color13:     #ff9cfe\n!\n! Cyan\n*.color6:      #c6c5fe\n*.color14:     #dfdffe\n!\n! White\n*.color7:      #eeeeee\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffff4e\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 22 */
/*!*******************************!*\
  !*** ./schemes/Bright Lights ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #b3c9d7\n*.background:  #191919\n*.cursorColor: #f34b00\n!\n! Black\n*.color0:      #191919\n*.color8:      #191919\n!\n! Red\n*.color1:      #ff355b\n*.color9:      #ff355b\n!\n! Green\n*.color2:      #b7e876\n*.color10:     #b7e876\n!\n! Yellow\n*.color3:      #ffc251\n*.color11:     #ffc251\n!\n! Blue\n*.color4:      #76d4ff\n*.color12:     #76d5ff\n!\n! Magenta\n*.color5:      #ba76e7\n*.color13:     #ba76e7\n!\n! Cyan\n*.color6:      #6cbfb5\n*.color14:     #6cbfb5\n!\n! White\n*.color7:      #c2c8d7\n*.color15:     #c2c8d7\n!\n! Bold, Italic, Underline\n*.colorBD:     #9fb3c1\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 23 */
/*!***************************!*\
  !*** ./schemes/Broadcast ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #e6e1dc\n*.background:  #2b2b2b\n*.cursorColor: #ffffff\n!\n! Black\n*.color0:      #000000\n*.color8:      #323232\n!\n! Red\n*.color1:      #da4939\n*.color9:      #ff7b6b\n!\n! Green\n*.color2:      #519f50\n*.color10:     #83d182\n!\n! Yellow\n*.color3:      #ffd24a\n*.color11:     #ffff7c\n!\n! Blue\n*.color4:      #6d9cbe\n*.color12:     #9fcef0\n!\n! Magenta\n*.color5:      #d0d0ff\n*.color13:     #ffffff\n!\n! Cyan\n*.color6:      #6e9cbe\n*.color14:     #a0cef0\n!\n! White\n*.color7:      #ffffff\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #e6e1dc\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 24 */
/*!****************************!*\
  !*** ./schemes/Brogrammer ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #d6dbe5\n*.background:  #131313\n*.cursorColor: #b9b9b9\n!\n! Black\n*.color0:      #1f1f1f\n*.color8:      #d6dbe5\n!\n! Red\n*.color1:      #f81118\n*.color9:      #de352e\n!\n! Green\n*.color2:      #2dc55e\n*.color10:     #1dd361\n!\n! Yellow\n*.color3:      #ecba0f\n*.color11:     #f3bd09\n!\n! Blue\n*.color4:      #2a84d2\n*.color12:     #1081d6\n!\n! Magenta\n*.color5:      #4e5ab7\n*.color13:     #5350b9\n!\n! Cyan\n*.color6:      #1081d6\n*.color14:     #0f7ddb\n!\n! White\n*.color7:      #d6dbe5\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #d6dbe5\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 25 */
/*!*********************!*\
  !*** ./schemes/C64 ***!
  \*********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #7869c4\n*.background:  #40318d\n*.cursorColor: #7869c4\n!\n! Black\n*.color0:      #090300\n*.color8:      #000000\n!\n! Red\n*.color1:      #883932\n*.color9:      #883932\n!\n! Green\n*.color2:      #55a049\n*.color10:     #55a049\n!\n! Yellow\n*.color3:      #bfce72\n*.color11:     #bfce72\n!\n! Blue\n*.color4:      #40318d\n*.color12:     #40318d\n!\n! Magenta\n*.color5:      #8b3f96\n*.color13:     #8b3f96\n!\n! Cyan\n*.color6:      #67b6bd\n*.color14:     #67b6bd\n!\n! White\n*.color7:      #ffffff\n*.color15:     #f7f7f7\n!\n! Bold, Italic, Underline\n*.colorBD:     #a5a2a2\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 26 */
/*!**********************!*\
  !*** ./schemes/CLRS ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #262626\n*.background:  #ffffff\n*.cursorColor: #6fd3fc\n!\n! Black\n*.color0:      #000000\n*.color8:      #555753\n!\n! Red\n*.color1:      #f8282a\n*.color9:      #fb0416\n!\n! Green\n*.color2:      #328a5d\n*.color10:     #2cc631\n!\n! Yellow\n*.color3:      #fa701d\n*.color11:     #fdd727\n!\n! Blue\n*.color4:      #135cd0\n*.color12:     #1670ff\n!\n! Magenta\n*.color5:      #9f00bd\n*.color13:     #e900b0\n!\n! Cyan\n*.color6:      #33c3c1\n*.color14:     #3ad5ce\n!\n! White\n*.color7:      #b3b3b3\n*.color15:     #eeeeec\n!\n! Bold, Italic, Underline\n*.colorBD:     #1a1a1a\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 27 */
/*!***********************!*\
  !*** ./schemes/Chalk ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #d2d8d9\n*.background:  #2b2d2e\n*.cursorColor: #708284\n!\n! Black\n*.color0:      #7d8b8f\n*.color8:      #888888\n!\n! Red\n*.color1:      #b23a52\n*.color9:      #f24840\n!\n! Green\n*.color2:      #789b6a\n*.color10:     #80c470\n!\n! Yellow\n*.color3:      #b9ac4a\n*.color11:     #ffeb62\n!\n! Blue\n*.color4:      #2a7fac\n*.color12:     #4196ff\n!\n! Magenta\n*.color5:      #bd4f5a\n*.color13:     #fc5275\n!\n! Cyan\n*.color6:      #44a799\n*.color14:     #53cdbd\n!\n! White\n*.color7:      #d2d8d9\n*.color15:     #d2d8d9\n!\n! Bold, Italic, Underline\n*.colorBD:     #ececec\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 28 */
/*!****************************!*\
  !*** ./schemes/Chalkboard ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #d9e6f2\n*.background:  #29262f\n*.cursorColor: #d9e6f2\n!\n! Black\n*.color0:      #000000\n*.color8:      #323232\n!\n! Red\n*.color1:      #c37372\n*.color9:      #dbaaaa\n!\n! Green\n*.color2:      #72c373\n*.color10:     #aadbaa\n!\n! Yellow\n*.color3:      #c2c372\n*.color11:     #dadbaa\n!\n! Blue\n*.color4:      #7372c3\n*.color12:     #aaaadb\n!\n! Magenta\n*.color5:      #c372c2\n*.color13:     #dbaada\n!\n! Cyan\n*.color6:      #72c2c3\n*.color14:     #aadadb\n!\n! White\n*.color7:      #d9d9d9\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #d96f5f\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 29 */
/*!************************!*\
  !*** ./schemes/Ciapre ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #aea47a\n*.background:  #191c27\n*.cursorColor: #92805b\n!\n! Black\n*.color0:      #181818\n*.color8:      #555555\n!\n! Red\n*.color1:      #810009\n*.color9:      #ac3835\n!\n! Green\n*.color2:      #48513b\n*.color10:     #a6a75d\n!\n! Yellow\n*.color3:      #cc8b3f\n*.color11:     #dcdf7c\n!\n! Blue\n*.color4:      #576d8c\n*.color12:     #3097c6\n!\n! Magenta\n*.color5:      #724d7c\n*.color13:     #d33061\n!\n! Cyan\n*.color6:      #5c4f4b\n*.color14:     #f3dbb2\n!\n! White\n*.color7:      #aea47f\n*.color15:     #f4f4f4\n!\n! Bold, Italic, Underline\n*.colorBD:     #f4f4f4\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 30 */
/*!*****************************!*\
  !*** ./schemes/Cobalt Neon ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #8ff586\n*.background:  #142838\n*.cursorColor: #c4206f\n!\n! Black\n*.color0:      #142631\n*.color8:      #fff688\n!\n! Red\n*.color1:      #ff2320\n*.color9:      #d4312e\n!\n! Green\n*.color2:      #3ba5ff\n*.color10:     #8ff586\n!\n! Yellow\n*.color3:      #e9e75c\n*.color11:     #e9f06d\n!\n! Blue\n*.color4:      #8ff586\n*.color12:     #3c7dd2\n!\n! Magenta\n*.color5:      #781aa0\n*.color13:     #8230a7\n!\n! Cyan\n*.color6:      #8ff586\n*.color14:     #6cbc67\n!\n! White\n*.color7:      #ba46b2\n*.color15:     #8ff586\n!\n! Bold, Italic, Underline\n*.colorBD:     #248b70\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 31 */
/*!*************************!*\
  !*** ./schemes/Cobalt2 ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ffffff\n*.background:  #132738\n*.cursorColor: #f0cc09\n!\n! Black\n*.color0:      #000000\n*.color8:      #555555\n!\n! Red\n*.color1:      #ff0000\n*.color9:      #f40e17\n!\n! Green\n*.color2:      #38de21\n*.color10:     #3bd01d\n!\n! Yellow\n*.color3:      #ffe50a\n*.color11:     #edc809\n!\n! Blue\n*.color4:      #1460d2\n*.color12:     #5555ff\n!\n! Magenta\n*.color5:      #ff005d\n*.color13:     #ff55ff\n!\n! Cyan\n*.color6:      #00bbbb\n*.color14:     #6ae3fa\n!\n! White\n*.color7:      #bbbbbb\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #f7fcff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 32 */
/*!********************************!*\
  !*** ./schemes/CrayonPonyFish ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #68525a\n*.background:  #150707\n*.cursorColor: #68525a\n!\n! Black\n*.color0:      #2b1b1d\n*.color8:      #3d2b2e\n!\n! Red\n*.color1:      #91002b\n*.color9:      #c5255d\n!\n! Green\n*.color2:      #579524\n*.color10:     #8dff57\n!\n! Yellow\n*.color3:      #ab311b\n*.color11:     #c8381d\n!\n! Blue\n*.color4:      #8c87b0\n*.color12:     #cfc9ff\n!\n! Magenta\n*.color5:      #692f50\n*.color13:     #fc6cba\n!\n! Cyan\n*.color6:      #e8a866\n*.color14:     #ffceaf\n!\n! White\n*.color7:      #68525a\n*.color15:     #b0949d\n!\n! Bold, Italic, Underline\n*.colorBD:     #c8381d\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 33 */
/*!*****************************!*\
  !*** ./schemes/Dark Pastel ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ffffff\n*.background:  #000000\n*.cursorColor: #bbbbbb\n!\n! Black\n*.color0:      #000000\n*.color8:      #555555\n!\n! Red\n*.color1:      #ff5555\n*.color9:      #ff5555\n!\n! Green\n*.color2:      #55ff55\n*.color10:     #55ff55\n!\n! Yellow\n*.color3:      #ffff55\n*.color11:     #ffff55\n!\n! Blue\n*.color4:      #5555ff\n*.color12:     #5555ff\n!\n! Magenta\n*.color5:      #ff55ff\n*.color13:     #ff55ff\n!\n! Cyan\n*.color6:      #55ffff\n*.color14:     #55ffff\n!\n! White\n*.color7:      #bbbbbb\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ff5e7d\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 34 */
/*!**************************!*\
  !*** ./schemes/Darkside ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #bababa\n*.background:  #222324\n*.cursorColor: #bbbbbb\n!\n! Black\n*.color0:      #000000\n*.color8:      #000000\n!\n! Red\n*.color1:      #e8341c\n*.color9:      #e05a4f\n!\n! Green\n*.color2:      #68c256\n*.color10:     #77b869\n!\n! Yellow\n*.color3:      #f2d42c\n*.color11:     #efd64b\n!\n! Blue\n*.color4:      #1c98e8\n*.color12:     #387cd3\n!\n! Magenta\n*.color5:      #8e69c9\n*.color13:     #957bbe\n!\n! Cyan\n*.color6:      #1c98e8\n*.color14:     #3d97e2\n!\n! White\n*.color7:      #bababa\n*.color15:     #bababa\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 35 */
/*!************************!*\
  !*** ./schemes/Desert ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ffffff\n*.background:  #333333\n*.cursorColor: #00ff00\n!\n! Black\n*.color0:      #4d4d4d\n*.color8:      #555555\n!\n! Red\n*.color1:      #ff2b2b\n*.color9:      #ff5555\n!\n! Green\n*.color2:      #98fb98\n*.color10:     #55ff55\n!\n! Yellow\n*.color3:      #f0e68c\n*.color11:     #ffff55\n!\n! Blue\n*.color4:      #cd853f\n*.color12:     #87ceff\n!\n! Magenta\n*.color5:      #ffdead\n*.color13:     #ff55ff\n!\n! Cyan\n*.color6:      #ffa0a0\n*.color14:     #ffd700\n!\n! White\n*.color7:      #f5deb3\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffd700\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 36 */
/*!*******************************!*\
  !*** ./schemes/DimmedMonokai ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #b9bcba\n*.background:  #1f1f1f\n*.cursorColor: #f83e19\n!\n! Black\n*.color0:      #3a3d43\n*.color8:      #888987\n!\n! Red\n*.color1:      #be3f48\n*.color9:      #fb001f\n!\n! Green\n*.color2:      #879a3b\n*.color10:     #0f722f\n!\n! Yellow\n*.color3:      #c5a635\n*.color11:     #c47033\n!\n! Blue\n*.color4:      #4f76a1\n*.color12:     #186de3\n!\n! Magenta\n*.color5:      #855c8d\n*.color13:     #fb0067\n!\n! Cyan\n*.color6:      #578fa4\n*.color14:     #2e706d\n!\n! White\n*.color7:      #b9bcba\n*.color15:     #fdffb9\n!\n! Bold, Italic, Underline\n*.colorBD:     #feffb2\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 37 */
/*!************************!*\
  !*** ./schemes/DotGov ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ebebeb\n*.background:  #262c35\n*.cursorColor: #d9002f\n!\n! Black\n*.color0:      #191919\n*.color8:      #191919\n!\n! Red\n*.color1:      #bf091d\n*.color9:      #bf091d\n!\n! Green\n*.color2:      #3d9751\n*.color10:     #3d9751\n!\n! Yellow\n*.color3:      #f6bb34\n*.color11:     #f6bb34\n!\n! Blue\n*.color4:      #17b2e0\n*.color12:     #17b2e0\n!\n! Magenta\n*.color5:      #7830b0\n*.color13:     #7830b0\n!\n! Cyan\n*.color6:      #8bd2ed\n*.color14:     #8bd2ed\n!\n! White\n*.color7:      #ffffff\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #fbab19\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 38 */
/*!*************************!*\
  !*** ./schemes/Dracula ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #f8f8f2\n*.background:  #1e1f29\n*.cursorColor: #bbbbbb\n!\n! Black\n*.color0:      #000000\n*.color8:      #555555\n!\n! Red\n*.color1:      #ff5555\n*.color9:      #ff5555\n!\n! Green\n*.color2:      #50fa7b\n*.color10:     #50fa7b\n!\n! Yellow\n*.color3:      #f1fa8c\n*.color11:     #f1fa8c\n!\n! Blue\n*.color4:      #bd93f9\n*.color12:     #bd93f9\n!\n! Magenta\n*.color5:      #ff79c6\n*.color13:     #ff79c6\n!\n! Cyan\n*.color6:      #8be9fd\n*.color14:     #8be9fd\n!\n! White\n*.color7:      #bbbbbb\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 39 */
/*!******************************!*\
  !*** ./schemes/Duotone Dark ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #b7a1ff\n*.background:  #1f1d27\n*.cursorColor: #ff9839\n!\n! Black\n*.color0:      #1f1d27\n*.color8:      #353147\n!\n! Red\n*.color1:      #d9393e\n*.color9:      #d9393e\n!\n! Green\n*.color2:      #2dcd73\n*.color10:     #2dcd73\n!\n! Yellow\n*.color3:      #d9b76e\n*.color11:     #d9b76e\n!\n! Blue\n*.color4:      #ffc284\n*.color12:     #ffc284\n!\n! Magenta\n*.color5:      #de8d40\n*.color13:     #de8d40\n!\n! Cyan\n*.color6:      #2488ff\n*.color14:     #2488ff\n!\n! White\n*.color7:      #b7a1ff\n*.color15:     #eae5ff\n!\n! Bold, Italic, Underline\n*.colorBD:     #b7a2ff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 40 */
/*!***********************!*\
  !*** ./schemes/ENCOM ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #00a595\n*.background:  #000000\n*.cursorColor: #bbbbbb\n!\n! Black\n*.color0:      #000000\n*.color8:      #555555\n!\n! Red\n*.color1:      #9f0000\n*.color9:      #ff0000\n!\n! Green\n*.color2:      #008b00\n*.color10:     #00ee00\n!\n! Yellow\n*.color3:      #ffd000\n*.color11:     #ffff00\n!\n! Blue\n*.color4:      #0081ff\n*.color12:     #0000ff\n!\n! Magenta\n*.color5:      #bc00ca\n*.color13:     #ff00ff\n!\n! Cyan\n*.color6:      #008b8b\n*.color14:     #00cdcd\n!\n! White\n*.color7:      #bbbbbb\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #4cf1e1\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 41 */
/*!***************************!*\
  !*** ./schemes/Earthsong ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #e5c7a9\n*.background:  #292520\n*.cursorColor: #f6f7ec\n!\n! Black\n*.color0:      #121418\n*.color8:      #675f54\n!\n! Red\n*.color1:      #c94234\n*.color9:      #ff645a\n!\n! Green\n*.color2:      #85c54c\n*.color10:     #98e036\n!\n! Yellow\n*.color3:      #f5ae2e\n*.color11:     #e0d561\n!\n! Blue\n*.color4:      #1398b9\n*.color12:     #5fdaff\n!\n! Magenta\n*.color5:      #d0633d\n*.color13:     #ff9269\n!\n! Cyan\n*.color6:      #509552\n*.color14:     #84f088\n!\n! White\n*.color7:      #e5c6aa\n*.color15:     #f6f7ec\n!\n! Bold, Italic, Underline\n*.colorBD:     #f6f7ec\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 42 */
/*!***************************!*\
  !*** ./schemes/Elemental ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #807a74\n*.background:  #22211d\n*.cursorColor: #facb80\n!\n! Black\n*.color0:      #3c3c30\n*.color8:      #555445\n!\n! Red\n*.color1:      #98290f\n*.color9:      #e0502a\n!\n! Green\n*.color2:      #479a43\n*.color10:     #61e070\n!\n! Yellow\n*.color3:      #7f7111\n*.color11:     #d69927\n!\n! Blue\n*.color4:      #497f7d\n*.color12:     #79d9d9\n!\n! Magenta\n*.color5:      #7f4e2f\n*.color13:     #cd7c54\n!\n! Cyan\n*.color6:      #387f58\n*.color14:     #59d599\n!\n! White\n*.color7:      #807974\n*.color15:     #fff1e9\n!\n! Bold, Italic, Underline\n*.colorBD:     #fae679\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 43 */
/*!****************************!*\
  !*** ./schemes/Elementary ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #efefef\n*.background:  #181818\n*.cursorColor: #bbbbbb\n!\n! Black\n*.color0:      #242424\n*.color8:      #4b4b4b\n!\n! Red\n*.color1:      #d71c15\n*.color9:      #fc1c18\n!\n! Green\n*.color2:      #5aa513\n*.color10:     #6bc219\n!\n! Yellow\n*.color3:      #fdb40c\n*.color11:     #fec80e\n!\n! Blue\n*.color4:      #063b8c\n*.color12:     #0955ff\n!\n! Magenta\n*.color5:      #e40038\n*.color13:     #fb0050\n!\n! Cyan\n*.color6:      #2595e1\n*.color14:     #3ea8fc\n!\n! White\n*.color7:      #efefef\n*.color15:     #8c00ec\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 44 */
/*!**************************!*\
  !*** ./schemes/Espresso ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ffffff\n*.background:  #323232\n*.cursorColor: #d6d6d6\n!\n! Black\n*.color0:      #353535\n*.color8:      #535353\n!\n! Red\n*.color1:      #d25252\n*.color9:      #f00c0c\n!\n! Green\n*.color2:      #a5c261\n*.color10:     #c2e075\n!\n! Yellow\n*.color3:      #ffc66d\n*.color11:     #e1e48b\n!\n! Blue\n*.color4:      #6c99bb\n*.color12:     #8ab7d9\n!\n! Magenta\n*.color5:      #d197d9\n*.color13:     #efb5f7\n!\n! Cyan\n*.color6:      #bed6ff\n*.color14:     #dcf4ff\n!\n! White\n*.color7:      #eeeeec\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 45 */
/*!********************************!*\
  !*** ./schemes/Espresso Libre ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #b8a898\n*.background:  #2a211c\n*.cursorColor: #ffffff\n!\n! Black\n*.color0:      #000000\n*.color8:      #555753\n!\n! Red\n*.color1:      #cc0000\n*.color9:      #ef2929\n!\n! Green\n*.color2:      #1a921c\n*.color10:     #9aff87\n!\n! Yellow\n*.color3:      #f0e53a\n*.color11:     #fffb5c\n!\n! Blue\n*.color4:      #0066ff\n*.color12:     #43a8ed\n!\n! Magenta\n*.color5:      #c5656b\n*.color13:     #ff818a\n!\n! Cyan\n*.color6:      #06989a\n*.color14:     #34e2e2\n!\n! White\n*.color7:      #d3d7cf\n*.color15:     #eeeeec\n!\n! Bold, Italic, Underline\n*.colorBD:     #d3c1af\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 46 */
/*!***************************!*\
  !*** ./schemes/Fideloper ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #dbdae0\n*.background:  #292f33\n*.cursorColor: #d4605a\n!\n! Black\n*.color0:      #292f33\n*.color8:      #092028\n!\n! Red\n*.color1:      #cb1e2d\n*.color9:      #d4605a\n!\n! Green\n*.color2:      #edb8ac\n*.color10:     #d4605a\n!\n! Yellow\n*.color3:      #b7ab9b\n*.color11:     #a86671\n!\n! Blue\n*.color4:      #2e78c2\n*.color12:     #7c85c4\n!\n! Magenta\n*.color5:      #c0236f\n*.color13:     #5c5db2\n!\n! Cyan\n*.color6:      #309186\n*.color14:     #819090\n!\n! White\n*.color7:      #eae3ce\n*.color15:     #fcf4df\n!\n! Bold, Italic, Underline\n*.colorBD:     #6b7c7c\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 47 */
/*!****************************!*\
  !*** ./schemes/FirefoxDev ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #7c8fa4\n*.background:  #0e1011\n*.cursorColor: #708284\n!\n! Black\n*.color0:      #002831\n*.color8:      #001e27\n!\n! Red\n*.color1:      #e63853\n*.color9:      #e1003f\n!\n! Green\n*.color2:      #5eb83c\n*.color10:     #1d9000\n!\n! Yellow\n*.color3:      #a57706\n*.color11:     #cd9409\n!\n! Blue\n*.color4:      #359ddf\n*.color12:     #006fc0\n!\n! Magenta\n*.color5:      #d75cff\n*.color13:     #a200da\n!\n! Cyan\n*.color6:      #4b73a2\n*.color14:     #005794\n!\n! White\n*.color7:      #dcdcdc\n*.color15:     #e2e2e2\n!\n! Bold, Italic, Underline\n*.colorBD:     #a7acb2\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 48 */
/*!***************************!*\
  !*** ./schemes/Firewatch ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #9ba2b2\n*.background:  #1e2027\n*.cursorColor: #f6f7ec\n!\n! Black\n*.color0:      #585f6d\n*.color8:      #585f6d\n!\n! Red\n*.color1:      #d95360\n*.color9:      #d95360\n!\n! Green\n*.color2:      #5ab977\n*.color10:     #5ab977\n!\n! Yellow\n*.color3:      #dfb563\n*.color11:     #dfb563\n!\n! Blue\n*.color4:      #4d89c4\n*.color12:     #4c89c5\n!\n! Magenta\n*.color5:      #d55119\n*.color13:     #d55119\n!\n! Cyan\n*.color6:      #44a8b6\n*.color14:     #44a8b6\n!\n! White\n*.color7:      #e6e5ff\n*.color15:     #e6e5ff\n!\n! Bold, Italic, Underline\n*.colorBD:     #e6e5ff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 49 */
/*!**************************!*\
  !*** ./schemes/FishTank ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ecf0fe\n*.background:  #232537\n*.cursorColor: #fecd5e\n!\n! Black\n*.color0:      #03073c\n*.color8:      #6c5b30\n!\n! Red\n*.color1:      #c6004a\n*.color9:      #da4b8a\n!\n! Green\n*.color2:      #acf157\n*.color10:     #dbffa9\n!\n! Yellow\n*.color3:      #fecd5e\n*.color11:     #fee6a9\n!\n! Blue\n*.color4:      #525fb8\n*.color12:     #b2befa\n!\n! Magenta\n*.color5:      #986f82\n*.color13:     #fda5cd\n!\n! Cyan\n*.color6:      #968763\n*.color14:     #a5bd86\n!\n! White\n*.color7:      #ecf0fc\n*.color15:     #f6ffec\n!\n! Bold, Italic, Underline\n*.colorBD:     #f6ffeb\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 50 */
/*!**********************!*\
  !*** ./schemes/Flat ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #2cc55d\n*.background:  #002240\n*.cursorColor: #e5be0c\n!\n! Black\n*.color0:      #222d3f\n*.color8:      #212c3c\n!\n! Red\n*.color1:      #a82320\n*.color9:      #d4312e\n!\n! Green\n*.color2:      #32a548\n*.color10:     #2d9440\n!\n! Yellow\n*.color3:      #e58d11\n*.color11:     #e5be0c\n!\n! Blue\n*.color4:      #3167ac\n*.color12:     #3c7dd2\n!\n! Magenta\n*.color5:      #781aa0\n*.color13:     #8230a7\n!\n! Cyan\n*.color6:      #2c9370\n*.color14:     #35b387\n!\n! White\n*.color7:      #b0b6ba\n*.color15:     #e7eced\n!\n! Bold, Italic, Underline\n*.colorBD:     #e7eced\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 51 */
/*!**************************!*\
  !*** ./schemes/Flatland ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #b8dbef\n*.background:  #1d1f21\n*.cursorColor: #708284\n!\n! Black\n*.color0:      #1d1d19\n*.color8:      #1d1d19\n!\n! Red\n*.color1:      #f18339\n*.color9:      #d22a24\n!\n! Green\n*.color2:      #9fd364\n*.color10:     #a7d42c\n!\n! Yellow\n*.color3:      #f4ef6d\n*.color11:     #ff8949\n!\n! Blue\n*.color4:      #5096be\n*.color12:     #61b9d0\n!\n! Magenta\n*.color5:      #695abc\n*.color13:     #695abc\n!\n! Cyan\n*.color6:      #d63865\n*.color14:     #d63865\n!\n! White\n*.color7:      #ffffff\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 52 */
/*!****************************!*\
  !*** ./schemes/Floraverse ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #dbd1b9\n*.background:  #0e0d15\n*.cursorColor: #bbbbbb\n!\n! Black\n*.color0:      #08002e\n*.color8:      #331e4d\n!\n! Red\n*.color1:      #64002c\n*.color9:      #d02063\n!\n! Green\n*.color2:      #5d731a\n*.color10:     #b4ce59\n!\n! Yellow\n*.color3:      #cd751c\n*.color11:     #fac357\n!\n! Blue\n*.color4:      #1d6da1\n*.color12:     #40a4cf\n!\n! Magenta\n*.color5:      #b7077e\n*.color13:     #f12aae\n!\n! Cyan\n*.color6:      #42a38c\n*.color14:     #62caa8\n!\n! White\n*.color7:      #f3e0b8\n*.color15:     #fff5db\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 53 */
/*!****************************!*\
  !*** ./schemes/ForestBlue ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #e2d8cd\n*.background:  #051519\n*.cursorColor: #9e9ecb\n!\n! Black\n*.color0:      #333333\n*.color8:      #3d3d3d\n!\n! Red\n*.color1:      #f8818e\n*.color9:      #fb3d66\n!\n! Green\n*.color2:      #92d3a2\n*.color10:     #6bb48d\n!\n! Yellow\n*.color3:      #1a8e63\n*.color11:     #30c85a\n!\n! Blue\n*.color4:      #8ed0ce\n*.color12:     #39a7a2\n!\n! Magenta\n*.color5:      #5e468c\n*.color13:     #7e62b3\n!\n! Cyan\n*.color6:      #31658c\n*.color14:     #6096bf\n!\n! White\n*.color7:      #e2d8cd\n*.color15:     #e2d8cd\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 54 */
/*!*********************************!*\
  !*** ./schemes/FrontEndDelight ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #adadad\n*.background:  #1b1c1d\n*.cursorColor: #cdcdcd\n!\n! Black\n*.color0:      #242526\n*.color8:      #5fac6d\n!\n! Red\n*.color1:      #f8511b\n*.color9:      #f74319\n!\n! Green\n*.color2:      #565747\n*.color10:     #74ec4c\n!\n! Yellow\n*.color3:      #fa771d\n*.color11:     #fdc325\n!\n! Blue\n*.color4:      #2c70b7\n*.color12:     #3393ca\n!\n! Magenta\n*.color5:      #f02e4f\n*.color13:     #e75e4f\n!\n! Cyan\n*.color6:      #3ca1a6\n*.color14:     #4fbce6\n!\n! White\n*.color7:      #adadad\n*.color15:     #8c735b\n!\n! Bold, Italic, Underline\n*.colorBD:     #cdcdcd\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 55 */
/*!****************************!*\
  !*** ./schemes/FunForrest ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #dec165\n*.background:  #251200\n*.cursorColor: #e5591c\n!\n! Black\n*.color0:      #000000\n*.color8:      #7f6a55\n!\n! Red\n*.color1:      #d6262b\n*.color9:      #e55a1c\n!\n! Green\n*.color2:      #919c00\n*.color10:     #bfc65a\n!\n! Yellow\n*.color3:      #be8a13\n*.color11:     #ffcb1b\n!\n! Blue\n*.color4:      #4699a3\n*.color12:     #7cc9cf\n!\n! Magenta\n*.color5:      #8d4331\n*.color13:     #d26349\n!\n! Cyan\n*.color6:      #da8213\n*.color14:     #e6a96b\n!\n! White\n*.color7:      #ddc265\n*.color15:     #ffeaa3\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffeaa3\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 56 */
/*!************************!*\
  !*** ./schemes/Galaxy ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ffffff\n*.background:  #1d2837\n*.cursorColor: #bbbbbb\n!\n! Black\n*.color0:      #000000\n*.color8:      #555555\n!\n! Red\n*.color1:      #f9555f\n*.color9:      #fa8c8f\n!\n! Green\n*.color2:      #21b089\n*.color10:     #35bb9a\n!\n! Yellow\n*.color3:      #fef02a\n*.color11:     #ffff55\n!\n! Blue\n*.color4:      #589df6\n*.color12:     #589df6\n!\n! Magenta\n*.color5:      #944d95\n*.color13:     #e75699\n!\n! Cyan\n*.color6:      #1f9ee7\n*.color14:     #3979bc\n!\n! White\n*.color7:      #bbbbbb\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 57 */
/*!************************!*\
  !*** ./schemes/Github ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #3e3e3e\n*.background:  #f4f4f4\n*.cursorColor: #3f3f3f\n!\n! Black\n*.color0:      #3e3e3e\n*.color8:      #666666\n!\n! Red\n*.color1:      #970b16\n*.color9:      #de0000\n!\n! Green\n*.color2:      #07962a\n*.color10:     #87d5a2\n!\n! Yellow\n*.color3:      #f8eec7\n*.color11:     #f1d007\n!\n! Blue\n*.color4:      #003e8a\n*.color12:     #2e6cba\n!\n! Magenta\n*.color5:      #e94691\n*.color13:     #ffa29f\n!\n! Cyan\n*.color6:      #89d1ec\n*.color14:     #1cfafe\n!\n! White\n*.color7:      #ffffff\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #c95500\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 58 */
/*!*************************!*\
  !*** ./schemes/Glacier ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ffffff\n*.background:  #0c1115\n*.cursorColor: #6c6c6c\n!\n! Black\n*.color0:      #2e343c\n*.color8:      #404a55\n!\n! Red\n*.color1:      #bd0f2f\n*.color9:      #bd0f2f\n!\n! Green\n*.color2:      #35a770\n*.color10:     #49e998\n!\n! Yellow\n*.color3:      #fb9435\n*.color11:     #fddf6e\n!\n! Blue\n*.color4:      #1f5872\n*.color12:     #2a8bc1\n!\n! Magenta\n*.color5:      #bd2523\n*.color13:     #ea4727\n!\n! Cyan\n*.color6:      #778397\n*.color14:     #a0b6d3\n!\n! White\n*.color7:      #ffffff\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 59 */
/*!***********************!*\
  !*** ./schemes/Grape ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #9f9fa1\n*.background:  #171423\n*.cursorColor: #a288f7\n!\n! Black\n*.color0:      #2d283f\n*.color8:      #59516a\n!\n! Red\n*.color1:      #ed2261\n*.color9:      #f0729a\n!\n! Green\n*.color2:      #1fa91b\n*.color10:     #53aa5e\n!\n! Yellow\n*.color3:      #8ddc20\n*.color11:     #b2dc87\n!\n! Blue\n*.color4:      #487df4\n*.color12:     #a9bcec\n!\n! Magenta\n*.color5:      #8d35c9\n*.color13:     #ad81c2\n!\n! Cyan\n*.color6:      #3bdeed\n*.color14:     #9de3eb\n!\n! White\n*.color7:      #9e9ea0\n*.color15:     #a288f7\n!\n! Bold, Italic, Underline\n*.colorBD:     #9f87ff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 60 */
/*!***********************!*\
  !*** ./schemes/Grass ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #fff0a5\n*.background:  #13773d\n*.cursorColor: #8c2800\n!\n! Black\n*.color0:      #000000\n*.color8:      #555555\n!\n! Red\n*.color1:      #bb0000\n*.color9:      #bb0000\n!\n! Green\n*.color2:      #00bb00\n*.color10:     #00bb00\n!\n! Yellow\n*.color3:      #e7b000\n*.color11:     #e7b000\n!\n! Blue\n*.color4:      #0000a3\n*.color12:     #0000bb\n!\n! Magenta\n*.color5:      #950062\n*.color13:     #ff55ff\n!\n! Cyan\n*.color6:      #00bbbb\n*.color14:     #55ffff\n!\n! White\n*.color7:      #bbbbbb\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffb03b\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 61 */
/*!******************************!*\
  !*** ./schemes/Gruvbox Dark ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #e6d4a3\n*.background:  #1e1e1e\n*.cursorColor: #bbbbbb\n!\n! Black\n*.color0:      #161819\n*.color8:      #7f7061\n!\n! Red\n*.color1:      #f73028\n*.color9:      #be0f17\n!\n! Green\n*.color2:      #aab01e\n*.color10:     #868715\n!\n! Yellow\n*.color3:      #f7b125\n*.color11:     #cc881a\n!\n! Blue\n*.color4:      #719586\n*.color12:     #377375\n!\n! Magenta\n*.color5:      #c77089\n*.color13:     #a04b73\n!\n! Cyan\n*.color6:      #7db669\n*.color14:     #578e57\n!\n! White\n*.color7:      #faefbb\n*.color15:     #e6d4a3\n!\n! Bold, Italic, Underline\n*.colorBD:     #978771\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 62 */
/*!**************************!*\
  !*** ./schemes/Hardcore ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #a0a0a0\n*.background:  #121212\n*.cursorColor: #bbbbbb\n!\n! Black\n*.color0:      #1b1d1e\n*.color8:      #505354\n!\n! Red\n*.color1:      #f92672\n*.color9:      #ff669d\n!\n! Green\n*.color2:      #a6e22e\n*.color10:     #beed5f\n!\n! Yellow\n*.color3:      #fd971f\n*.color11:     #e6db74\n!\n! Blue\n*.color4:      #66d9ef\n*.color12:     #66d9ef\n!\n! Magenta\n*.color5:      #9e6ffe\n*.color13:     #9e6ffe\n!\n! Cyan\n*.color6:      #5e7175\n*.color14:     #a3babf\n!\n! White\n*.color7:      #ccccc6\n*.color15:     #f8f8f2\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 63 */
/*!************************!*\
  !*** ./schemes/Harper ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #a8a49d\n*.background:  #010101\n*.cursorColor: #a8a49d\n!\n! Black\n*.color0:      #010101\n*.color8:      #726e6a\n!\n! Red\n*.color1:      #f8b63f\n*.color9:      #f8b63f\n!\n! Green\n*.color2:      #7fb5e1\n*.color10:     #7fb5e1\n!\n! Yellow\n*.color3:      #d6da25\n*.color11:     #d6da25\n!\n! Blue\n*.color4:      #489e48\n*.color12:     #489e48\n!\n! Magenta\n*.color5:      #b296c6\n*.color13:     #b296c6\n!\n! Cyan\n*.color6:      #f5bfd7\n*.color14:     #f5bfd7\n!\n! White\n*.color7:      #a8a49d\n*.color15:     #fefbea\n!\n! Bold, Italic, Underline\n*.colorBD:     #a8a49d\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 64 */
/*!*************************!*\
  !*** ./schemes/Highway ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ededed\n*.background:  #222225\n*.cursorColor: #e0d9b9\n!\n! Black\n*.color0:      #000000\n*.color8:      #5d504a\n!\n! Red\n*.color1:      #d00e18\n*.color9:      #f07e18\n!\n! Green\n*.color2:      #138034\n*.color10:     #b1d130\n!\n! Yellow\n*.color3:      #ffcb3e\n*.color11:     #fff120\n!\n! Blue\n*.color4:      #006bb3\n*.color12:     #4fc2fd\n!\n! Magenta\n*.color5:      #6b2775\n*.color13:     #de0071\n!\n! Cyan\n*.color6:      #384564\n*.color14:     #5d504a\n!\n! White\n*.color7:      #ededed\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #fff8d8\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 65 */
/*!*******************************!*\
  !*** ./schemes/Hipster Green ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #84c138\n*.background:  #100b05\n*.cursorColor: #23ff18\n!\n! Black\n*.color0:      #000000\n*.color8:      #666666\n!\n! Red\n*.color1:      #b6214a\n*.color9:      #e50000\n!\n! Green\n*.color2:      #00a600\n*.color10:     #86a93e\n!\n! Yellow\n*.color3:      #bfbf00\n*.color11:     #e5e500\n!\n! Blue\n*.color4:      #246eb2\n*.color12:     #0000ff\n!\n! Magenta\n*.color5:      #b200b2\n*.color13:     #e500e5\n!\n! Cyan\n*.color6:      #00a6b2\n*.color14:     #00e5e5\n!\n! White\n*.color7:      #bfbfbf\n*.color15:     #e5e5e5\n!\n! Bold, Italic, Underline\n*.colorBD:     #00db00\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 66 */
/*!**************************!*\
  !*** ./schemes/Homebrew ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #00ff00\n*.background:  #000000\n*.cursorColor: #23ff18\n!\n! Black\n*.color0:      #000000\n*.color8:      #666666\n!\n! Red\n*.color1:      #990000\n*.color9:      #e50000\n!\n! Green\n*.color2:      #00a600\n*.color10:     #00d900\n!\n! Yellow\n*.color3:      #999900\n*.color11:     #e5e500\n!\n! Blue\n*.color4:      #0000b2\n*.color12:     #0000ff\n!\n! Magenta\n*.color5:      #b200b2\n*.color13:     #e500e5\n!\n! Cyan\n*.color6:      #00a6b2\n*.color14:     #00e5e5\n!\n! White\n*.color7:      #bfbfbf\n*.color15:     #e5e5e5\n!\n! Bold, Italic, Underline\n*.colorBD:     #00ff00\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 67 */
/*!*************************!*\
  !*** ./schemes/Hurtado ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #dbdbdb\n*.background:  #000000\n*.cursorColor: #bbbbbb\n!\n! Black\n*.color0:      #575757\n*.color8:      #262626\n!\n! Red\n*.color1:      #ff1b00\n*.color9:      #d51d00\n!\n! Green\n*.color2:      #a5e055\n*.color10:     #a5df55\n!\n! Yellow\n*.color3:      #fbe74a\n*.color11:     #fbe84a\n!\n! Blue\n*.color4:      #496487\n*.color12:     #89beff\n!\n! Magenta\n*.color5:      #fd5ff1\n*.color13:     #c001c1\n!\n! Cyan\n*.color6:      #86e9fe\n*.color14:     #86eafe\n!\n! White\n*.color7:      #cbcccb\n*.color15:     #dbdbdb\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 68 */
/*!************************!*\
  !*** ./schemes/Hybrid ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #b7bcba\n*.background:  #161719\n*.cursorColor: #b7bcba\n!\n! Black\n*.color0:      #2a2e33\n*.color8:      #1d1f22\n!\n! Red\n*.color1:      #b84d51\n*.color9:      #8d2e32\n!\n! Green\n*.color2:      #b3bf5a\n*.color10:     #798431\n!\n! Yellow\n*.color3:      #e4b55e\n*.color11:     #e58a50\n!\n! Blue\n*.color4:      #6e90b0\n*.color12:     #4b6b88\n!\n! Magenta\n*.color5:      #a17eac\n*.color13:     #6e5079\n!\n! Cyan\n*.color6:      #7fbfb4\n*.color14:     #4d7b74\n!\n! White\n*.color7:      #b5b9b6\n*.color15:     #5a626a\n!\n! Bold, Italic, Underline\n*.colorBD:     #b7bcba\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 69 */
/*!******************************!*\
  !*** ./schemes/IC_Green_PPL ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #d9efd3\n*.background:  #3a3d3f\n*.cursorColor: #42ff58\n!\n! Black\n*.color0:      #1f1f1f\n*.color8:      #032710\n!\n! Red\n*.color1:      #fb002a\n*.color9:      #a7ff3f\n!\n! Green\n*.color2:      #339c24\n*.color10:     #9fff6d\n!\n! Yellow\n*.color3:      #659b25\n*.color11:     #d2ff6d\n!\n! Blue\n*.color4:      #149b45\n*.color12:     #72ffb5\n!\n! Magenta\n*.color5:      #53b82c\n*.color13:     #50ff3e\n!\n! Cyan\n*.color6:      #2cb868\n*.color14:     #22ff71\n!\n! White\n*.color7:      #e0ffef\n*.color15:     #daefd0\n!\n! Bold, Italic, Underline\n*.colorBD:     #9fff6d\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 70 */
/*!*******************************!*\
  !*** ./schemes/IC_Orange_PPL ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ffcb83\n*.background:  #262626\n*.cursorColor: #fc531d\n!\n! Black\n*.color0:      #000000\n*.color8:      #6a4f2a\n!\n! Red\n*.color1:      #c13900\n*.color9:      #ff8c68\n!\n! Green\n*.color2:      #a4a900\n*.color10:     #f6ff40\n!\n! Yellow\n*.color3:      #caaf00\n*.color11:     #ffe36e\n!\n! Blue\n*.color4:      #bd6d00\n*.color12:     #ffbe55\n!\n! Magenta\n*.color5:      #fc5e00\n*.color13:     #fc874f\n!\n! Cyan\n*.color6:      #f79500\n*.color14:     #c69752\n!\n! White\n*.color7:      #ffc88a\n*.color15:     #fafaff\n!\n! Bold, Italic, Underline\n*.colorBD:     #fafaff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 71 */
/*!**************************!*\
  !*** ./schemes/IR_Black ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #f1f1f1\n*.background:  #000000\n*.cursorColor: #808080\n!\n! Black\n*.color0:      #4f4f4f\n*.color8:      #7b7b7b\n!\n! Red\n*.color1:      #fa6c60\n*.color9:      #fcb6b0\n!\n! Green\n*.color2:      #a8ff60\n*.color10:     #cfffab\n!\n! Yellow\n*.color3:      #fffeb7\n*.color11:     #ffffcc\n!\n! Blue\n*.color4:      #96cafe\n*.color12:     #b5dcff\n!\n! Magenta\n*.color5:      #fa73fd\n*.color13:     #fb9cfe\n!\n! Cyan\n*.color6:      #c6c5fe\n*.color14:     #e0e0fe\n!\n! White\n*.color7:      #efedef\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 72 */
/*!******************************!*\
  !*** ./schemes/Jackie Brown ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ffcc2f\n*.background:  #2c1d16\n*.cursorColor: #23ff18\n!\n! Black\n*.color0:      #2c1d16\n*.color8:      #666666\n!\n! Red\n*.color1:      #ef5734\n*.color9:      #e50000\n!\n! Green\n*.color2:      #2baf2b\n*.color10:     #86a93e\n!\n! Yellow\n*.color3:      #bebf00\n*.color11:     #e5e500\n!\n! Blue\n*.color4:      #246eb2\n*.color12:     #0000ff\n!\n! Magenta\n*.color5:      #d05ec1\n*.color13:     #e500e5\n!\n! Cyan\n*.color6:      #00acee\n*.color14:     #00e5e5\n!\n! White\n*.color7:      #bfbfbf\n*.color15:     #e5e5e5\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffcc2f\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 73 */
/*!****************************!*\
  !*** ./schemes/Japanesque ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #f7f6ec\n*.background:  #1e1e1e\n*.cursorColor: #edcf4f\n!\n! Black\n*.color0:      #343935\n*.color8:      #595b59\n!\n! Red\n*.color1:      #cf3f61\n*.color9:      #d18fa6\n!\n! Green\n*.color2:      #7bb75b\n*.color10:     #767f2c\n!\n! Yellow\n*.color3:      #e9b32a\n*.color11:     #78592f\n!\n! Blue\n*.color4:      #4c9ad4\n*.color12:     #135979\n!\n! Magenta\n*.color5:      #a57fc4\n*.color13:     #604291\n!\n! Cyan\n*.color6:      #389aad\n*.color14:     #76bbca\n!\n! White\n*.color7:      #fafaf6\n*.color15:     #b2b5ae\n!\n! Bold, Italic, Underline\n*.colorBD:     #fffffa\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 74 */
/*!****************************!*\
  !*** ./schemes/Jellybeans ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #dedede\n*.background:  #121212\n*.cursorColor: #ffa560\n!\n! Black\n*.color0:      #929292\n*.color8:      #bdbdbd\n!\n! Red\n*.color1:      #e27373\n*.color9:      #ffa1a1\n!\n! Green\n*.color2:      #94b979\n*.color10:     #bddeab\n!\n! Yellow\n*.color3:      #ffba7b\n*.color11:     #ffdca0\n!\n! Blue\n*.color4:      #97bedc\n*.color12:     #b1d8f6\n!\n! Magenta\n*.color5:      #e1c0fa\n*.color13:     #fbdaff\n!\n! Cyan\n*.color6:      #00988e\n*.color14:     #1ab2a8\n!\n! White\n*.color7:      #dedede\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 75 */
/*!***********************************!*\
  !*** ./schemes/JetBrains Darcula ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #adadad\n*.background:  #202020\n*.cursorColor: #ffffff\n!\n! Black\n*.color0:      #000000\n*.color8:      #555555\n!\n! Red\n*.color1:      #fa5355\n*.color9:      #fb7172\n!\n! Green\n*.color2:      #126e00\n*.color10:     #67ff4f\n!\n! Yellow\n*.color3:      #c2c300\n*.color11:     #ffff00\n!\n! Blue\n*.color4:      #4581eb\n*.color12:     #6d9df1\n!\n! Magenta\n*.color5:      #fa54ff\n*.color13:     #fb82ff\n!\n! Cyan\n*.color6:      #33c2c1\n*.color14:     #60d3d1\n!\n! White\n*.color7:      #adadad\n*.color15:     #eeeeee\n!\n! Bold, Italic, Underline\n*.colorBD:     #eeeeee\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 76 */
/*!************************!*\
  !*** ./schemes/Kibble ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #f7f7f7\n*.background:  #0e100a\n*.cursorColor: #9fda9c\n!\n! Black\n*.color0:      #4d4d4d\n*.color8:      #5a5a5a\n!\n! Red\n*.color1:      #c70031\n*.color9:      #f01578\n!\n! Green\n*.color2:      #29cf13\n*.color10:     #6ce05c\n!\n! Yellow\n*.color3:      #d8e30e\n*.color11:     #f3f79e\n!\n! Blue\n*.color4:      #3449d1\n*.color12:     #97a4f7\n!\n! Magenta\n*.color5:      #8400ff\n*.color13:     #c495f0\n!\n! Cyan\n*.color6:      #0798ab\n*.color14:     #68f2e0\n!\n! White\n*.color7:      #e2d1e3\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ca631e\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 77 */
/*!************************************!*\
  !*** ./schemes/Later This Evening ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #959595\n*.background:  #222222\n*.cursorColor: #424242\n!\n! Black\n*.color0:      #2b2b2b\n*.color8:      #454747\n!\n! Red\n*.color1:      #d45a60\n*.color9:      #d3232f\n!\n! Green\n*.color2:      #afba67\n*.color10:     #aabb39\n!\n! Yellow\n*.color3:      #e5d289\n*.color11:     #e5be39\n!\n! Blue\n*.color4:      #a0bad6\n*.color12:     #6699d6\n!\n! Magenta\n*.color5:      #c092d6\n*.color13:     #ab53d6\n!\n! Cyan\n*.color6:      #91bfb7\n*.color14:     #5fc0ae\n!\n! White\n*.color7:      #3c3d3d\n*.color15:     #c1c2c2\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 78 */
/*!***************************!*\
  !*** ./schemes/Lavandula ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #736e7d\n*.background:  #050014\n*.cursorColor: #8c91fa\n!\n! Black\n*.color0:      #230046\n*.color8:      #372d46\n!\n! Red\n*.color1:      #7d1625\n*.color9:      #e05167\n!\n! Green\n*.color2:      #337e6f\n*.color10:     #52e0c4\n!\n! Yellow\n*.color3:      #7f6f49\n*.color11:     #e0c386\n!\n! Blue\n*.color4:      #4f4a7f\n*.color12:     #8e87e0\n!\n! Magenta\n*.color5:      #5a3f7f\n*.color13:     #a776e0\n!\n! Cyan\n*.color6:      #58777f\n*.color14:     #9ad4e0\n!\n! White\n*.color7:      #736e7d\n*.color15:     #8c91fa\n!\n! Bold, Italic, Underline\n*.colorBD:     #8c91fa\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 79 */
/*!******************************!*\
  !*** ./schemes/LiquidCarbon ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #afc2c2\n*.background:  #303030\n*.cursorColor: #ffffff\n!\n! Black\n*.color0:      #000000\n*.color8:      #000000\n!\n! Red\n*.color1:      #ff3030\n*.color9:      #ff3030\n!\n! Green\n*.color2:      #559a70\n*.color10:     #559a70\n!\n! Yellow\n*.color3:      #ccac00\n*.color11:     #ccac00\n!\n! Blue\n*.color4:      #0099cc\n*.color12:     #0099cc\n!\n! Magenta\n*.color5:      #cc69c8\n*.color13:     #cc69c8\n!\n! Cyan\n*.color6:      #7ac4cc\n*.color14:     #7ac4cc\n!\n! White\n*.color7:      #bccccc\n*.color15:     #bccccc\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 80 */
/*!*****************************************!*\
  !*** ./schemes/LiquidCarbonTransparent ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #afc2c2\n*.background:  #000000\n*.cursorColor: #ffffff\n!\n! Black\n*.color0:      #000000\n*.color8:      #000000\n!\n! Red\n*.color1:      #ff3030\n*.color9:      #ff3030\n!\n! Green\n*.color2:      #559a70\n*.color10:     #559a70\n!\n! Yellow\n*.color3:      #ccac00\n*.color11:     #ccac00\n!\n! Blue\n*.color4:      #0099cc\n*.color12:     #0099cc\n!\n! Magenta\n*.color5:      #cc69c8\n*.color13:     #cc69c8\n!\n! Cyan\n*.color6:      #7ac4cc\n*.color14:     #7ac4cc\n!\n! White\n*.color7:      #bccccc\n*.color15:     #bccccc\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 81 */
/*!************************************************!*\
  !*** ./schemes/LiquidCarbonTransparentInverse ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #afc2c2\n*.background:  #000000\n*.cursorColor: #ffffff\n!\n! Black\n*.color0:      #bccccd\n*.color8:      #ffffff\n!\n! Red\n*.color1:      #ff3030\n*.color9:      #ff3030\n!\n! Green\n*.color2:      #559a70\n*.color10:     #559a70\n!\n! Yellow\n*.color3:      #ccac00\n*.color11:     #ccac00\n!\n! Blue\n*.color4:      #0099cc\n*.color12:     #0099cc\n!\n! Magenta\n*.color5:      #cc69c8\n*.color13:     #cc69c8\n!\n! Cyan\n*.color6:      #7ac4cc\n*.color14:     #7ac4cc\n!\n! White\n*.color7:      #000000\n*.color15:     #000000\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 82 */
/*!**************************!*\
  !*** ./schemes/Man Page ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #000000\n*.background:  #fef49c\n*.cursorColor: #7f7f7f\n!\n! Black\n*.color0:      #000000\n*.color8:      #666666\n!\n! Red\n*.color1:      #cc0000\n*.color9:      #e50000\n!\n! Green\n*.color2:      #00a600\n*.color10:     #00d900\n!\n! Yellow\n*.color3:      #999900\n*.color11:     #e5e500\n!\n! Blue\n*.color4:      #0000b2\n*.color12:     #0000ff\n!\n! Magenta\n*.color5:      #b200b2\n*.color13:     #e500e5\n!\n! Cyan\n*.color6:      #00a6b2\n*.color14:     #00e5e5\n!\n! White\n*.color7:      #cccccc\n*.color15:     #e5e5e5\n!\n! Bold, Italic, Underline\n*.colorBD:     #000000\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 83 */
/*!**************************!*\
  !*** ./schemes/Material ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #232322\n*.background:  #eaeaea\n*.cursorColor: #16afca\n!\n! Black\n*.color0:      #212121\n*.color8:      #424242\n!\n! Red\n*.color1:      #b7141f\n*.color9:      #e83b3f\n!\n! Green\n*.color2:      #457b24\n*.color10:     #7aba3a\n!\n! Yellow\n*.color3:      #f6981e\n*.color11:     #ffea2e\n!\n! Blue\n*.color4:      #134eb2\n*.color12:     #54a4f3\n!\n! Magenta\n*.color5:      #560088\n*.color13:     #aa4dbc\n!\n! Cyan\n*.color6:      #0e717c\n*.color14:     #26bbd1\n!\n! White\n*.color7:      #efefef\n*.color15:     #d9d9d9\n!\n! Bold, Italic, Underline\n*.colorBD:     #b7141f\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 84 */
/*!******************************!*\
  !*** ./schemes/MaterialDark ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #e5e5e5\n*.background:  #232322\n*.cursorColor: #16afca\n!\n! Black\n*.color0:      #212121\n*.color8:      #424242\n!\n! Red\n*.color1:      #b7141f\n*.color9:      #e83b3f\n!\n! Green\n*.color2:      #457b24\n*.color10:     #7aba3a\n!\n! Yellow\n*.color3:      #f6981e\n*.color11:     #ffea2e\n!\n! Blue\n*.color4:      #134eb2\n*.color12:     #54a4f3\n!\n! Magenta\n*.color5:      #560088\n*.color13:     #aa4dbc\n!\n! Cyan\n*.color6:      #0e717c\n*.color14:     #26bbd1\n!\n! White\n*.color7:      #efefef\n*.color15:     #d9d9d9\n!\n! Bold, Italic, Underline\n*.colorBD:     #b7141f\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 85 */
/*!*************************!*\
  !*** ./schemes/Mathias ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #bbbbbb\n*.background:  #000000\n*.cursorColor: #bbbbbb\n!\n! Black\n*.color0:      #000000\n*.color8:      #555555\n!\n! Red\n*.color1:      #e52222\n*.color9:      #ff5555\n!\n! Green\n*.color2:      #a6e32d\n*.color10:     #55ff55\n!\n! Yellow\n*.color3:      #fc951e\n*.color11:     #ffff55\n!\n! Blue\n*.color4:      #c48dff\n*.color12:     #5555ff\n!\n! Magenta\n*.color5:      #fa2573\n*.color13:     #ff55ff\n!\n! Cyan\n*.color6:      #67d9f0\n*.color14:     #55ffff\n!\n! White\n*.color7:      #f2f2f2\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 86 */
/*!***************************!*\
  !*** ./schemes/Medallion ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #cac296\n*.background:  #1d1908\n*.cursorColor: #d3ba30\n!\n! Black\n*.color0:      #000000\n*.color8:      #5e5219\n!\n! Red\n*.color1:      #b64c00\n*.color9:      #ff9149\n!\n! Green\n*.color2:      #7c8b16\n*.color10:     #b2ca3b\n!\n! Yellow\n*.color3:      #d3bd26\n*.color11:     #ffe54a\n!\n! Blue\n*.color4:      #616bb0\n*.color12:     #acb8ff\n!\n! Magenta\n*.color5:      #8c5a90\n*.color13:     #ffa0ff\n!\n! Cyan\n*.color6:      #916c25\n*.color14:     #ffbc51\n!\n! White\n*.color7:      #cac29a\n*.color15:     #fed698\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffd890\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 87 */
/*!****************************!*\
  !*** ./schemes/Misterioso ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #e1e1e0\n*.background:  #2d3743\n*.cursorColor: #000000\n!\n! Black\n*.color0:      #000000\n*.color8:      #555555\n!\n! Red\n*.color1:      #ff4242\n*.color9:      #ff3242\n!\n! Green\n*.color2:      #74af68\n*.color10:     #74cd68\n!\n! Yellow\n*.color3:      #ffad29\n*.color11:     #ffb929\n!\n! Blue\n*.color4:      #338f86\n*.color12:     #23d7d7\n!\n! Magenta\n*.color5:      #9414e6\n*.color13:     #ff37ff\n!\n! Cyan\n*.color6:      #23d7d7\n*.color14:     #00ede1\n!\n! White\n*.color7:      #e1e1e0\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #000000\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 88 */
/*!*************************!*\
  !*** ./schemes/Molokai ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #bbbbbb\n*.background:  #121212\n*.cursorColor: #bbbbbb\n!\n! Black\n*.color0:      #121212\n*.color8:      #555555\n!\n! Red\n*.color1:      #fa2573\n*.color9:      #f6669d\n!\n! Green\n*.color2:      #98e123\n*.color10:     #b1e05f\n!\n! Yellow\n*.color3:      #dfd460\n*.color11:     #fff26d\n!\n! Blue\n*.color4:      #1080d0\n*.color12:     #00afff\n!\n! Magenta\n*.color5:      #8700ff\n*.color13:     #af87ff\n!\n! Cyan\n*.color6:      #43a8d0\n*.color14:     #51ceff\n!\n! White\n*.color7:      #bbbbbb\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 89 */
/*!**************************!*\
  !*** ./schemes/MonaLisa ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #f7d66a\n*.background:  #120b0d\n*.cursorColor: #c46c32\n!\n! Black\n*.color0:      #351b0e\n*.color8:      #874228\n!\n! Red\n*.color1:      #9b291c\n*.color9:      #ff4331\n!\n! Green\n*.color2:      #636232\n*.color10:     #b4b264\n!\n! Yellow\n*.color3:      #c36e28\n*.color11:     #ff9566\n!\n! Blue\n*.color4:      #515c5d\n*.color12:     #9eb2b4\n!\n! Magenta\n*.color5:      #9b1d29\n*.color13:     #ff5b6a\n!\n! Cyan\n*.color6:      #588056\n*.color14:     #8acd8f\n!\n! White\n*.color7:      #f7d75c\n*.color15:     #ffe598\n!\n! Bold, Italic, Underline\n*.colorBD:     #fee4a0\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 90 */
/*!******************************!*\
  !*** ./schemes/Monokai Soda ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #c4c5b5\n*.background:  #1a1a1a\n*.cursorColor: #f6f7ec\n!\n! Black\n*.color0:      #1a1a1a\n*.color8:      #625e4c\n!\n! Red\n*.color1:      #f4005f\n*.color9:      #f4005f\n!\n! Green\n*.color2:      #98e024\n*.color10:     #98e024\n!\n! Yellow\n*.color3:      #fa8419\n*.color11:     #e0d561\n!\n! Blue\n*.color4:      #9d65ff\n*.color12:     #9d65ff\n!\n! Magenta\n*.color5:      #f4005f\n*.color13:     #f4005f\n!\n! Cyan\n*.color6:      #58d1eb\n*.color14:     #58d1eb\n!\n! White\n*.color7:      #c4c5b5\n*.color15:     #f6f6ef\n!\n! Bold, Italic, Underline\n*.colorBD:     #c4c5b5\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 91 */
/*!*******************************!*\
  !*** ./schemes/Monokai Vivid ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #f9f9f9\n*.background:  #121212\n*.cursorColor: #fb0007\n!\n! Black\n*.color0:      #121212\n*.color8:      #838383\n!\n! Red\n*.color1:      #fa2934\n*.color9:      #f6669d\n!\n! Green\n*.color2:      #98e123\n*.color10:     #b1e05f\n!\n! Yellow\n*.color3:      #fff30a\n*.color11:     #fff26d\n!\n! Blue\n*.color4:      #0443ff\n*.color12:     #0443ff\n!\n! Magenta\n*.color5:      #f800f8\n*.color13:     #f200f6\n!\n! Cyan\n*.color6:      #01b6ed\n*.color14:     #51ceff\n!\n! White\n*.color7:      #ffffff\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 92 */
/*!*************************!*\
  !*** ./schemes/N0tch2k ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #a0a0a0\n*.background:  #222222\n*.cursorColor: #aa9175\n!\n! Black\n*.color0:      #383838\n*.color8:      #474747\n!\n! Red\n*.color1:      #a95551\n*.color9:      #a97775\n!\n! Green\n*.color2:      #666666\n*.color10:     #8c8c8c\n!\n! Yellow\n*.color3:      #a98051\n*.color11:     #a99175\n!\n! Blue\n*.color4:      #657d3e\n*.color12:     #98bd5e\n!\n! Magenta\n*.color5:      #767676\n*.color13:     #a3a3a3\n!\n! Cyan\n*.color6:      #c9c9c9\n*.color14:     #dcdcdc\n!\n! White\n*.color7:      #d0b8a3\n*.color15:     #d8c8bb\n!\n! Bold, Italic, Underline\n*.colorBD:     #e5e5e5\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 93 */
/*!****************************!*\
  !*** ./schemes/Neopolitan ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ffffff\n*.background:  #271f19\n*.cursorColor: #ffffff\n!\n! Black\n*.color0:      #000000\n*.color8:      #000000\n!\n! Red\n*.color1:      #800000\n*.color9:      #800000\n!\n! Green\n*.color2:      #61ce3c\n*.color10:     #61ce3c\n!\n! Yellow\n*.color3:      #fbde2d\n*.color11:     #fbde2d\n!\n! Blue\n*.color4:      #253b76\n*.color12:     #253b76\n!\n! Magenta\n*.color5:      #ff0080\n*.color13:     #ff0080\n!\n! Cyan\n*.color6:      #8da6ce\n*.color14:     #8da6ce\n!\n! White\n*.color7:      #f8f8f8\n*.color15:     #f8f8f8\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 94 */
/*!*************************!*\
  !*** ./schemes/Neutron ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #e6e8ef\n*.background:  #1c1e22\n*.cursorColor: #f6f7ec\n!\n! Black\n*.color0:      #23252b\n*.color8:      #23252b\n!\n! Red\n*.color1:      #b54036\n*.color9:      #b54036\n!\n! Green\n*.color2:      #5ab977\n*.color10:     #5ab977\n!\n! Yellow\n*.color3:      #deb566\n*.color11:     #deb566\n!\n! Blue\n*.color4:      #6a7c93\n*.color12:     #6a7c93\n!\n! Magenta\n*.color5:      #a4799d\n*.color13:     #a4799d\n!\n! Cyan\n*.color6:      #3f94a8\n*.color14:     #3f94a8\n!\n! White\n*.color7:      #e6e8ef\n*.color15:     #ebedf2\n!\n! Bold, Italic, Underline\n*.colorBD:     #52606b\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 95 */
/*!******************************!*\
  !*** ./schemes/NightLion v1 ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #bbbbbb\n*.background:  #000000\n*.cursorColor: #bbbbbb\n!\n! Black\n*.color0:      #4c4c4c\n*.color8:      #555555\n!\n! Red\n*.color1:      #bb0000\n*.color9:      #ff5555\n!\n! Green\n*.color2:      #5fde8f\n*.color10:     #55ff55\n!\n! Yellow\n*.color3:      #f3f167\n*.color11:     #ffff55\n!\n! Blue\n*.color4:      #276bd8\n*.color12:     #5555ff\n!\n! Magenta\n*.color5:      #bb00bb\n*.color13:     #ff55ff\n!\n! Cyan\n*.color6:      #00dadf\n*.color14:     #55ffff\n!\n! White\n*.color7:      #bbbbbb\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #e3e3e3\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 96 */
/*!******************************!*\
  !*** ./schemes/NightLion v2 ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #bbbbbb\n*.background:  #171717\n*.cursorColor: #bbbbbb\n!\n! Black\n*.color0:      #4c4c4c\n*.color8:      #555555\n!\n! Red\n*.color1:      #bb0000\n*.color9:      #ff5555\n!\n! Green\n*.color2:      #04f623\n*.color10:     #7df71d\n!\n! Yellow\n*.color3:      #f3f167\n*.color11:     #ffff55\n!\n! Blue\n*.color4:      #64d0f0\n*.color12:     #62cbe8\n!\n! Magenta\n*.color5:      #ce6fdb\n*.color13:     #ff9bf5\n!\n! Cyan\n*.color6:      #00dadf\n*.color14:     #00ccd8\n!\n! White\n*.color7:      #bbbbbb\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #e3e3e3\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 97 */
/*!***********************!*\
  !*** ./schemes/Novel ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #3b2322\n*.background:  #dfdbc3\n*.cursorColor: #73635a\n!\n! Black\n*.color0:      #000000\n*.color8:      #808080\n!\n! Red\n*.color1:      #cc0000\n*.color9:      #cc0000\n!\n! Green\n*.color2:      #009600\n*.color10:     #009600\n!\n! Yellow\n*.color3:      #d06b00\n*.color11:     #d06b00\n!\n! Blue\n*.color4:      #0000cc\n*.color12:     #0000cc\n!\n! Magenta\n*.color5:      #cc00cc\n*.color13:     #cc00cc\n!\n! Cyan\n*.color6:      #0087cc\n*.color14:     #0087cc\n!\n! White\n*.color7:      #cccccc\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #8e2a19\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 98 */
/*!**************************!*\
  !*** ./schemes/Obsidian ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #cdcdcd\n*.background:  #283033\n*.cursorColor: #c0cad0\n!\n! Black\n*.color0:      #000000\n*.color8:      #555555\n!\n! Red\n*.color1:      #a60001\n*.color9:      #ff0003\n!\n! Green\n*.color2:      #00bb00\n*.color10:     #93c863\n!\n! Yellow\n*.color3:      #fecd22\n*.color11:     #fef874\n!\n! Blue\n*.color4:      #3a9bdb\n*.color12:     #a1d7ff\n!\n! Magenta\n*.color5:      #bb00bb\n*.color13:     #ff55ff\n!\n! Cyan\n*.color6:      #00bbbb\n*.color14:     #55ffff\n!\n! White\n*.color7:      #bbbbbb\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 99 */
/*!***********************!*\
  !*** ./schemes/Ocean ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ffffff\n*.background:  #224fbc\n*.cursorColor: #7f7f7f\n!\n! Black\n*.color0:      #000000\n*.color8:      #666666\n!\n! Red\n*.color1:      #990000\n*.color9:      #e50000\n!\n! Green\n*.color2:      #00a600\n*.color10:     #00d900\n!\n! Yellow\n*.color3:      #999900\n*.color11:     #e5e500\n!\n! Blue\n*.color4:      #0000b2\n*.color12:     #0000ff\n!\n! Magenta\n*.color5:      #b200b2\n*.color13:     #e500e5\n!\n! Cyan\n*.color6:      #00a6b2\n*.color14:     #00e5e5\n!\n! White\n*.color7:      #bfbfbf\n*.color15:     #e5e5e5\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 100 */
/*!*********************************!*\
  !*** ./schemes/OceanicMaterial ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #c2c8d7\n*.background:  #1c262b\n*.cursorColor: #b3b8c3\n!\n! Black\n*.color0:      #000000\n*.color8:      #777777\n!\n! Red\n*.color1:      #ee2b2a\n*.color9:      #dc5c60\n!\n! Green\n*.color2:      #40a33f\n*.color10:     #70be71\n!\n! Yellow\n*.color3:      #ffea2e\n*.color11:     #fff163\n!\n! Blue\n*.color4:      #1e80f0\n*.color12:     #54a4f3\n!\n! Magenta\n*.color5:      #8800a0\n*.color13:     #aa4dbc\n!\n! Cyan\n*.color6:      #16afca\n*.color14:     #42c7da\n!\n! White\n*.color7:      #a4a4a4\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 101 */
/*!***********************!*\
  !*** ./schemes/Ollie ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #8a8dae\n*.background:  #222125\n*.cursorColor: #5b6ea7\n!\n! Black\n*.color0:      #000000\n*.color8:      #5b3725\n!\n! Red\n*.color1:      #ac2e31\n*.color9:      #ff3d48\n!\n! Green\n*.color2:      #31ac61\n*.color10:     #3bff99\n!\n! Yellow\n*.color3:      #ac4300\n*.color11:     #ff5e1e\n!\n! Blue\n*.color4:      #2d57ac\n*.color12:     #4488ff\n!\n! Magenta\n*.color5:      #b08528\n*.color13:     #ffc21d\n!\n! Cyan\n*.color6:      #1fa6ac\n*.color14:     #1ffaff\n!\n! White\n*.color7:      #8a8eac\n*.color15:     #5b6ea7\n!\n! Bold, Italic, Underline\n*.colorBD:     #5c6dac\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 102 */
/*!*****************************!*\
  !*** ./schemes/OneHalfDark ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #dcdfe4\n*.background:  #282c34\n*.cursorColor: #a3b3cc\n!\n! Black\n*.color0:      #282c34\n*.color8:      #282c34\n!\n! Red\n*.color1:      #e06c75\n*.color9:      #e06c75\n!\n! Green\n*.color2:      #98c379\n*.color10:     #98c379\n!\n! Yellow\n*.color3:      #e5c07b\n*.color11:     #e5c07b\n!\n! Blue\n*.color4:      #61afef\n*.color12:     #61afef\n!\n! Magenta\n*.color5:      #c678dd\n*.color13:     #c678dd\n!\n! Cyan\n*.color6:      #56b6c2\n*.color14:     #56b6c2\n!\n! White\n*.color7:      #dcdfe4\n*.color15:     #dcdfe4\n!\n! Bold, Italic, Underline\n*.colorBD:     #abb2bf\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 103 */
/*!******************************!*\
  !*** ./schemes/OneHalfLight ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #383a42\n*.background:  #fafafa\n*.cursorColor: #bfceff\n!\n! Black\n*.color0:      #383a42\n*.color8:      #4f525e\n!\n! Red\n*.color1:      #e45649\n*.color9:      #e06c75\n!\n! Green\n*.color2:      #50a14f\n*.color10:     #98c379\n!\n! Yellow\n*.color3:      #c18401\n*.color11:     #e5c07b\n!\n! Blue\n*.color4:      #0184bc\n*.color12:     #61afef\n!\n! Magenta\n*.color5:      #a626a4\n*.color13:     #c678dd\n!\n! Cyan\n*.color6:      #0997b3\n*.color14:     #56b6c2\n!\n! White\n*.color7:      #fafafa\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #abb2bf\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 104 */
/*!*************************!*\
  !*** ./schemes/Pandora ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #e1e1e1\n*.background:  #141e43\n*.cursorColor: #43d58e\n!\n! Black\n*.color0:      #000000\n*.color8:      #3f5648\n!\n! Red\n*.color1:      #ff4242\n*.color9:      #ff3242\n!\n! Green\n*.color2:      #74af68\n*.color10:     #74cd68\n!\n! Yellow\n*.color3:      #ffad29\n*.color11:     #ffb929\n!\n! Blue\n*.color4:      #338f86\n*.color12:     #23d7d7\n!\n! Magenta\n*.color5:      #9414e6\n*.color13:     #ff37ff\n!\n! Cyan\n*.color6:      #23d7d7\n*.color14:     #00ede1\n!\n! White\n*.color7:      #e2e2e2\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #67a672\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 105 */
/*!******************************!*\
  !*** ./schemes/Paraiso Dark ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #a39e9b\n*.background:  #2f1e2e\n*.cursorColor: #a39e9b\n!\n! Black\n*.color0:      #2f1e2e\n*.color8:      #776e71\n!\n! Red\n*.color1:      #ef6155\n*.color9:      #ef6155\n!\n! Green\n*.color2:      #48b685\n*.color10:     #48b685\n!\n! Yellow\n*.color3:      #fec418\n*.color11:     #fec418\n!\n! Blue\n*.color4:      #06b6ef\n*.color12:     #06b6ef\n!\n! Magenta\n*.color5:      #815ba4\n*.color13:     #815ba4\n!\n! Cyan\n*.color6:      #5bc4bf\n*.color14:     #5bc4bf\n!\n! White\n*.color7:      #a39e9b\n*.color15:     #e7e9db\n!\n! Bold, Italic, Underline\n*.colorBD:     #a39e9b\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 106 */
/*!******************************!*\
  !*** ./schemes/Parasio Dark ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #a39e9b\n*.background:  #2f1e2e\n*.cursorColor: #a39e9b\n!\n! Black\n*.color0:      #2f1e2e\n*.color8:      #776e71\n!\n! Red\n*.color1:      #ef6155\n*.color9:      #ef6155\n!\n! Green\n*.color2:      #48b685\n*.color10:     #48b685\n!\n! Yellow\n*.color3:      #fec418\n*.color11:     #fec418\n!\n! Blue\n*.color4:      #06b6ef\n*.color12:     #06b6ef\n!\n! Magenta\n*.color5:      #815ba4\n*.color13:     #815ba4\n!\n! Cyan\n*.color6:      #5bc4bf\n*.color14:     #5bc4bf\n!\n! White\n*.color7:      #a39e9b\n*.color15:     #e7e9db\n!\n! Bold, Italic, Underline\n*.colorBD:     #a39e9b\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 107 */
/*!***************************!*\
  !*** ./schemes/PaulMillr ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #f2f2f2\n*.background:  #000000\n*.cursorColor: #4d4d4d\n!\n! Black\n*.color0:      #2a2a2a\n*.color8:      #666666\n!\n! Red\n*.color1:      #ff0000\n*.color9:      #ff0080\n!\n! Green\n*.color2:      #79ff0f\n*.color10:     #66ff66\n!\n! Yellow\n*.color3:      #e7bf00\n*.color11:     #f3d64e\n!\n! Blue\n*.color4:      #396bd7\n*.color12:     #709aed\n!\n! Magenta\n*.color5:      #b449be\n*.color13:     #db67e6\n!\n! Cyan\n*.color6:      #66ccff\n*.color14:     #7adff2\n!\n! White\n*.color7:      #bbbbbb\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 108 */
/*!****************************!*\
  !*** ./schemes/PencilDark ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #f1f1f1\n*.background:  #212121\n*.cursorColor: #20bbfc\n!\n! Black\n*.color0:      #212121\n*.color8:      #424242\n!\n! Red\n*.color1:      #c30771\n*.color9:      #fb007a\n!\n! Green\n*.color2:      #10a778\n*.color10:     #5fd7af\n!\n! Yellow\n*.color3:      #a89c14\n*.color11:     #f3e430\n!\n! Blue\n*.color4:      #008ec4\n*.color12:     #20bbfc\n!\n! Magenta\n*.color5:      #523c79\n*.color13:     #6855de\n!\n! Cyan\n*.color6:      #20a5ba\n*.color14:     #4fb8cc\n!\n! White\n*.color7:      #d9d9d9\n*.color15:     #f1f1f1\n!\n! Bold, Italic, Underline\n*.colorBD:     #fb007a\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 109 */
/*!*****************************!*\
  !*** ./schemes/PencilLight ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #424242\n*.background:  #f1f1f1\n*.cursorColor: #20bbfc\n!\n! Black\n*.color0:      #212121\n*.color8:      #424242\n!\n! Red\n*.color1:      #c30771\n*.color9:      #fb007a\n!\n! Green\n*.color2:      #10a778\n*.color10:     #5fd7af\n!\n! Yellow\n*.color3:      #a89c14\n*.color11:     #f3e430\n!\n! Blue\n*.color4:      #008ec4\n*.color12:     #20bbfc\n!\n! Magenta\n*.color5:      #523c79\n*.color13:     #6855de\n!\n! Cyan\n*.color6:      #20a5ba\n*.color14:     #4fb8cc\n!\n! White\n*.color7:      #d9d9d9\n*.color15:     #f1f1f1\n!\n! Bold, Italic, Underline\n*.colorBD:     #fb007a\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 110 */
/*!******************************!*\
  !*** ./schemes/Piatto Light ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #414141\n*.background:  #ffffff\n*.cursorColor: #5e77c8\n!\n! Black\n*.color0:      #414141\n*.color8:      #3f3f3f\n!\n! Red\n*.color1:      #b23771\n*.color9:      #db3365\n!\n! Green\n*.color2:      #66781e\n*.color10:     #829429\n!\n! Yellow\n*.color3:      #cd6f34\n*.color11:     #cd6f34\n!\n! Blue\n*.color4:      #3c5ea8\n*.color12:     #3c5ea8\n!\n! Magenta\n*.color5:      #a454b2\n*.color13:     #a454b2\n!\n! Cyan\n*.color6:      #66781e\n*.color14:     #829429\n!\n! White\n*.color7:      #ffffff\n*.color15:     #f2f2f2\n!\n! Bold, Italic, Underline\n*.colorBD:     #323232\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 111 */
/*!************************!*\
  !*** ./schemes/Pnevma ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #d0d0d0\n*.background:  #1c1c1c\n*.cursorColor: #e4c9af\n!\n! Black\n*.color0:      #2f2e2d\n*.color8:      #4a4845\n!\n! Red\n*.color1:      #a36666\n*.color9:      #d78787\n!\n! Green\n*.color2:      #90a57d\n*.color10:     #afbea2\n!\n! Yellow\n*.color3:      #d7af87\n*.color11:     #e4c9af\n!\n! Blue\n*.color4:      #7fa5bd\n*.color12:     #a1bdce\n!\n! Magenta\n*.color5:      #c79ec4\n*.color13:     #d7beda\n!\n! Cyan\n*.color6:      #8adbb4\n*.color14:     #b1e7dd\n!\n! White\n*.color7:      #d0d0d0\n*.color15:     #efefef\n!\n! Bold, Italic, Underline\n*.colorBD:     #e5e5e5\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 112 */
/*!*********************!*\
  !*** ./schemes/Pro ***!
  \*********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #f2f2f2\n*.background:  #000000\n*.cursorColor: #4d4d4d\n!\n! Black\n*.color0:      #000000\n*.color8:      #666666\n!\n! Red\n*.color1:      #990000\n*.color9:      #e50000\n!\n! Green\n*.color2:      #00a600\n*.color10:     #00d900\n!\n! Yellow\n*.color3:      #999900\n*.color11:     #e5e500\n!\n! Blue\n*.color4:      #2009db\n*.color12:     #0000ff\n!\n! Magenta\n*.color5:      #b200b2\n*.color13:     #e500e5\n!\n! Cyan\n*.color6:      #00a6b2\n*.color14:     #00e5e5\n!\n! White\n*.color7:      #bfbfbf\n*.color15:     #e5e5e5\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 113 */
/*!***************************!*\
  !*** ./schemes/Red Alert ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ffffff\n*.background:  #762423\n*.cursorColor: #ffffff\n!\n! Black\n*.color0:      #000000\n*.color8:      #262626\n!\n! Red\n*.color1:      #d62e4e\n*.color9:      #e02553\n!\n! Green\n*.color2:      #71be6b\n*.color10:     #aff08c\n!\n! Yellow\n*.color3:      #beb86b\n*.color11:     #dfddb7\n!\n! Blue\n*.color4:      #489bee\n*.color12:     #65aaf1\n!\n! Magenta\n*.color5:      #e979d7\n*.color13:     #ddb7df\n!\n! Cyan\n*.color6:      #6bbeb8\n*.color14:     #b7dfdd\n!\n! White\n*.color7:      #d6d6d6\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ff9c44\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 114 */
/*!***************************!*\
  !*** ./schemes/Red Sands ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #d7c9a7\n*.background:  #7a251e\n*.cursorColor: #ffffff\n!\n! Black\n*.color0:      #000000\n*.color8:      #555555\n!\n! Red\n*.color1:      #ff3f00\n*.color9:      #bb0000\n!\n! Green\n*.color2:      #00bb00\n*.color10:     #00bb00\n!\n! Yellow\n*.color3:      #e7b000\n*.color11:     #e7b000\n!\n! Blue\n*.color4:      #0072ff\n*.color12:     #0072ae\n!\n! Magenta\n*.color5:      #bb00bb\n*.color13:     #ff55ff\n!\n! Cyan\n*.color6:      #00bbbb\n*.color14:     #55ffff\n!\n! White\n*.color7:      #bbbbbb\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #dfbd22\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 115 */
/*!*****************************!*\
  !*** ./schemes/Rippedcasts ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ffffff\n*.background:  #2b2b2b\n*.cursorColor: #7f7f7f\n!\n! Black\n*.color0:      #000000\n*.color8:      #666666\n!\n! Red\n*.color1:      #cdaf95\n*.color9:      #eecbad\n!\n! Green\n*.color2:      #a8ff60\n*.color10:     #bcee68\n!\n! Yellow\n*.color3:      #bfbb1f\n*.color11:     #e5e500\n!\n! Blue\n*.color4:      #75a5b0\n*.color12:     #86bdc9\n!\n! Magenta\n*.color5:      #ff73fd\n*.color13:     #e500e5\n!\n! Cyan\n*.color6:      #5a647e\n*.color14:     #8c9bc4\n!\n! White\n*.color7:      #bfbfbf\n*.color15:     #e5e5e5\n!\n! Bold, Italic, Underline\n*.colorBD:     #d0f367\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 116 */
/*!***********************!*\
  !*** ./schemes/Royal ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #514968\n*.background:  #100815\n*.cursorColor: #524966\n!\n! Black\n*.color0:      #241f2b\n*.color8:      #312d3d\n!\n! Red\n*.color1:      #91284c\n*.color9:      #d5356c\n!\n! Green\n*.color2:      #23801c\n*.color10:     #2cd946\n!\n! Yellow\n*.color3:      #b49d27\n*.color11:     #fde83b\n!\n! Blue\n*.color4:      #6580b0\n*.color12:     #90baf9\n!\n! Magenta\n*.color5:      #674d96\n*.color13:     #a479e3\n!\n! Cyan\n*.color6:      #8aaabe\n*.color14:     #acd4eb\n!\n! White\n*.color7:      #524966\n*.color15:     #9e8cbd\n!\n! Bold, Italic, Underline\n*.colorBD:     #c8bd1d\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 117 */
/*!************************!*\
  !*** ./schemes/Ryuuko ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ececec\n*.background:  #2c3941\n*.cursorColor: #ececec\n!\n! Black\n*.color0:      #2c3941\n*.color8:      #5d7079\n!\n! Red\n*.color1:      #865f5b\n*.color9:      #865f5b\n!\n! Green\n*.color2:      #66907d\n*.color10:     #66907d\n!\n! Yellow\n*.color3:      #b1a990\n*.color11:     #b1a990\n!\n! Blue\n*.color4:      #6a8e95\n*.color12:     #6a8e95\n!\n! Magenta\n*.color5:      #b18a73\n*.color13:     #b18a73\n!\n! Cyan\n*.color6:      #88b2ac\n*.color14:     #88b2ac\n!\n! White\n*.color7:      #ececec\n*.color15:     #ececec\n!\n! Bold, Italic, Underline\n*.colorBD:     #819090\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 118 */
/*!***************************!*\
  !*** ./schemes/SeaShells ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #deb88d\n*.background:  #09141b\n*.cursorColor: #fca02f\n!\n! Black\n*.color0:      #17384c\n*.color8:      #434b53\n!\n! Red\n*.color1:      #d15123\n*.color9:      #d48678\n!\n! Green\n*.color2:      #027c9b\n*.color10:     #628d98\n!\n! Yellow\n*.color3:      #fca02f\n*.color11:     #fdd39f\n!\n! Blue\n*.color4:      #1e4950\n*.color12:     #1bbcdd\n!\n! Magenta\n*.color5:      #68d4f1\n*.color13:     #bbe3ee\n!\n! Cyan\n*.color6:      #50a3b5\n*.color14:     #87acb4\n!\n! White\n*.color7:      #deb88d\n*.color15:     #fee4ce\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffe4cc\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 119 */
/*!********************************!*\
  !*** ./schemes/Seafoam Pastel ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #d4e7d4\n*.background:  #243435\n*.cursorColor: #57647a\n!\n! Black\n*.color0:      #757575\n*.color8:      #8a8a8a\n!\n! Red\n*.color1:      #825d4d\n*.color9:      #cf937a\n!\n! Green\n*.color2:      #728c62\n*.color10:     #98d9aa\n!\n! Yellow\n*.color3:      #ada16d\n*.color11:     #fae79d\n!\n! Blue\n*.color4:      #4d7b82\n*.color12:     #7ac3cf\n!\n! Magenta\n*.color5:      #8a7267\n*.color13:     #d6b2a1\n!\n! Cyan\n*.color6:      #729494\n*.color14:     #ade0e0\n!\n! White\n*.color7:      #e0e0e0\n*.color15:     #e0e0e0\n!\n! Bold, Italic, Underline\n*.colorBD:     #648890\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 120 */
/*!**********************!*\
  !*** ./schemes/Seti ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #cacecd\n*.background:  #111213\n*.cursorColor: #e3bf21\n!\n! Black\n*.color0:      #323232\n*.color8:      #323232\n!\n! Red\n*.color1:      #c22832\n*.color9:      #c22832\n!\n! Green\n*.color2:      #8ec43d\n*.color10:     #8ec43d\n!\n! Yellow\n*.color3:      #e0c64f\n*.color11:     #e0c64f\n!\n! Blue\n*.color4:      #43a5d5\n*.color12:     #43a5d5\n!\n! Magenta\n*.color5:      #8b57b5\n*.color13:     #8b57b5\n!\n! Cyan\n*.color6:      #8ec43d\n*.color14:     #8ec43d\n!\n! White\n*.color7:      #eeeeee\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #cacecd\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 121 */
/*!************************!*\
  !*** ./schemes/Shaman ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #405555\n*.background:  #001015\n*.cursorColor: #4afcd6\n!\n! Black\n*.color0:      #012026\n*.color8:      #384451\n!\n! Red\n*.color1:      #b2302d\n*.color9:      #ff4242\n!\n! Green\n*.color2:      #00a941\n*.color10:     #2aea5e\n!\n! Yellow\n*.color3:      #5e8baa\n*.color11:     #8ed4fd\n!\n! Blue\n*.color4:      #449a86\n*.color12:     #61d5ba\n!\n! Magenta\n*.color5:      #00599d\n*.color13:     #1298ff\n!\n! Cyan\n*.color6:      #5d7e19\n*.color14:     #98d028\n!\n! White\n*.color7:      #405555\n*.color15:     #58fbd6\n!\n! Bold, Italic, Underline\n*.colorBD:     #53fbd6\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 122 */
/*!***********************!*\
  !*** ./schemes/Slate ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #35b1d2\n*.background:  #222222\n*.cursorColor: #87d3c4\n!\n! Black\n*.color0:      #222222\n*.color8:      #ffffff\n!\n! Red\n*.color1:      #e2a8bf\n*.color9:      #ffcdd9\n!\n! Green\n*.color2:      #81d778\n*.color10:     #beffa8\n!\n! Yellow\n*.color3:      #c4c9c0\n*.color11:     #d0ccca\n!\n! Blue\n*.color4:      #264b49\n*.color12:     #7ab0d2\n!\n! Magenta\n*.color5:      #a481d3\n*.color13:     #c5a7d9\n!\n! Cyan\n*.color6:      #15ab9c\n*.color14:     #8cdfe0\n!\n! White\n*.color7:      #02c5e0\n*.color15:     #e0e0e0\n!\n! Bold, Italic, Underline\n*.colorBD:     #648890\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 123 */
/*!***********************!*\
  !*** ./schemes/Smyck ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #f7f7f7\n*.background:  #1b1b1b\n*.cursorColor: #bbbbbb\n!\n! Black\n*.color0:      #000000\n*.color8:      #7a7a7a\n!\n! Red\n*.color1:      #b84131\n*.color9:      #d6837c\n!\n! Green\n*.color2:      #7da900\n*.color10:     #c4f137\n!\n! Yellow\n*.color3:      #c4a500\n*.color11:     #fee14d\n!\n! Blue\n*.color4:      #62a3c4\n*.color12:     #8dcff0\n!\n! Magenta\n*.color5:      #ba8acc\n*.color13:     #f79aff\n!\n! Cyan\n*.color6:      #207383\n*.color14:     #6ad9cf\n!\n! White\n*.color7:      #a1a1a1\n*.color15:     #f7f7f7\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 124 */
/*!****************************!*\
  !*** ./schemes/SoftServer ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #99a3a2\n*.background:  #242626\n*.cursorColor: #d2e0de\n!\n! Black\n*.color0:      #000000\n*.color8:      #666c6c\n!\n! Red\n*.color1:      #a2686a\n*.color9:      #dd5c60\n!\n! Green\n*.color2:      #9aa56a\n*.color10:     #bfdf55\n!\n! Yellow\n*.color3:      #a3906a\n*.color11:     #deb360\n!\n! Blue\n*.color4:      #6b8fa3\n*.color12:     #62b1df\n!\n! Magenta\n*.color5:      #6a71a3\n*.color13:     #606edf\n!\n! Cyan\n*.color6:      #6ba58f\n*.color14:     #64e39c\n!\n! White\n*.color7:      #99a3a2\n*.color15:     #d2e0de\n!\n! Bold, Italic, Underline\n*.colorBD:     #d2e0de\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 125 */
/*!***********************************!*\
  !*** ./schemes/Solarized Darcula ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #d2d8d9\n*.background:  #3d3f41\n*.cursorColor: #708284\n!\n! Black\n*.color0:      #25292a\n*.color8:      #25292a\n!\n! Red\n*.color1:      #f24840\n*.color9:      #f24840\n!\n! Green\n*.color2:      #629655\n*.color10:     #629655\n!\n! Yellow\n*.color3:      #b68800\n*.color11:     #b68800\n!\n! Blue\n*.color4:      #2075c7\n*.color12:     #2075c7\n!\n! Magenta\n*.color5:      #797fd4\n*.color13:     #797fd4\n!\n! Cyan\n*.color6:      #15968d\n*.color14:     #15968d\n!\n! White\n*.color7:      #d2d8d9\n*.color15:     #d2d8d9\n!\n! Bold, Italic, Underline\n*.colorBD:     #ececec\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 126 */
/*!********************************!*\
  !*** ./schemes/Solarized Dark ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #708284\n*.background:  #001e27\n*.cursorColor: #708284\n!\n! Black\n*.color0:      #002831\n*.color8:      #001e27\n!\n! Red\n*.color1:      #d11c24\n*.color9:      #bd3613\n!\n! Green\n*.color2:      #738a05\n*.color10:     #475b62\n!\n! Yellow\n*.color3:      #a57706\n*.color11:     #536870\n!\n! Blue\n*.color4:      #2176c7\n*.color12:     #708284\n!\n! Magenta\n*.color5:      #c61c6f\n*.color13:     #5956ba\n!\n! Cyan\n*.color6:      #259286\n*.color14:     #819090\n!\n! White\n*.color7:      #eae3cb\n*.color15:     #fcf4dc\n!\n! Bold, Italic, Underline\n*.colorBD:     #819090\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 127 */
/*!******************************************!*\
  !*** ./schemes/Solarized Dark - Patched ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #708284\n*.background:  #001e27\n*.cursorColor: #708284\n!\n! Black\n*.color0:      #002831\n*.color8:      #475b62\n!\n! Red\n*.color1:      #d11c24\n*.color9:      #bd3613\n!\n! Green\n*.color2:      #738a05\n*.color10:     #475b62\n!\n! Yellow\n*.color3:      #a57706\n*.color11:     #536870\n!\n! Blue\n*.color4:      #2176c7\n*.color12:     #708284\n!\n! Magenta\n*.color5:      #c61c6f\n*.color13:     #5956ba\n!\n! Cyan\n*.color6:      #259286\n*.color14:     #819090\n!\n! White\n*.color7:      #eae3cb\n*.color15:     #fcf4dc\n!\n! Bold, Italic, Underline\n*.colorBD:     #819090\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 128 */
/*!************************************************!*\
  !*** ./schemes/Solarized Dark Higher Contrast ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #9cc2c3\n*.background:  #001e27\n*.cursorColor: #f34b00\n!\n! Black\n*.color0:      #002831\n*.color8:      #006488\n!\n! Red\n*.color1:      #d11c24\n*.color9:      #f5163b\n!\n! Green\n*.color2:      #6cbe6c\n*.color10:     #51ef84\n!\n! Yellow\n*.color3:      #a57706\n*.color11:     #b27e28\n!\n! Blue\n*.color4:      #2176c7\n*.color12:     #178ec8\n!\n! Magenta\n*.color5:      #c61c6f\n*.color13:     #e24d8e\n!\n! Cyan\n*.color6:      #259286\n*.color14:     #00b39e\n!\n! White\n*.color7:      #eae3cb\n*.color15:     #fcf4dc\n!\n! Bold, Italic, Underline\n*.colorBD:     #b5d5d3\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 129 */
/*!*********************************!*\
  !*** ./schemes/Solarized Light ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #536870\n*.background:  #fcf4dc\n*.cursorColor: #536870\n!\n! Black\n*.color0:      #002831\n*.color8:      #001e27\n!\n! Red\n*.color1:      #d11c24\n*.color9:      #bd3613\n!\n! Green\n*.color2:      #738a05\n*.color10:     #475b62\n!\n! Yellow\n*.color3:      #a57706\n*.color11:     #536870\n!\n! Blue\n*.color4:      #2176c7\n*.color12:     #708284\n!\n! Magenta\n*.color5:      #c61c6f\n*.color13:     #5956ba\n!\n! Cyan\n*.color6:      #259286\n*.color14:     #819090\n!\n! White\n*.color7:      #eae3cb\n*.color15:     #fcf4dc\n!\n! Bold, Italic, Underline\n*.colorBD:     #475b62\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 130 */
/*!***************************!*\
  !*** ./schemes/SpaceGray ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #b3b8c3\n*.background:  #20242d\n*.cursorColor: #b3b8c3\n!\n! Black\n*.color0:      #000000\n*.color8:      #000000\n!\n! Red\n*.color1:      #b04b57\n*.color9:      #b04b57\n!\n! Green\n*.color2:      #87b379\n*.color10:     #87b379\n!\n! Yellow\n*.color3:      #e5c179\n*.color11:     #e5c179\n!\n! Blue\n*.color4:      #7d8fa4\n*.color12:     #7d8fa4\n!\n! Magenta\n*.color5:      #a47996\n*.color13:     #a47996\n!\n! Cyan\n*.color6:      #85a7a5\n*.color14:     #85a7a5\n!\n! White\n*.color7:      #b3b8c3\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #b3b8c3\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 131 */
/*!************************************!*\
  !*** ./schemes/SpaceGray Eighties ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #bdbaae\n*.background:  #222222\n*.cursorColor: #bbbbbb\n!\n! Black\n*.color0:      #15171c\n*.color8:      #555555\n!\n! Red\n*.color1:      #ec5f67\n*.color9:      #ff6973\n!\n! Green\n*.color2:      #81a764\n*.color10:     #93d493\n!\n! Yellow\n*.color3:      #fec254\n*.color11:     #ffd256\n!\n! Blue\n*.color4:      #5486c0\n*.color12:     #4d84d1\n!\n! Magenta\n*.color5:      #bf83c1\n*.color13:     #ff55ff\n!\n! Cyan\n*.color6:      #57c2c1\n*.color14:     #83e9e4\n!\n! White\n*.color7:      #efece7\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 132 */
/*!*****************************************!*\
  !*** ./schemes/SpaceGray Eighties Dull ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #c9c6bc\n*.background:  #222222\n*.cursorColor: #bbbbbb\n!\n! Black\n*.color0:      #15171c\n*.color8:      #555555\n!\n! Red\n*.color1:      #b24a56\n*.color9:      #ec5f67\n!\n! Green\n*.color2:      #92b477\n*.color10:     #89e986\n!\n! Yellow\n*.color3:      #c6735a\n*.color11:     #fec254\n!\n! Blue\n*.color4:      #7c8fa5\n*.color12:     #5486c0\n!\n! Magenta\n*.color5:      #a5789e\n*.color13:     #bf83c1\n!\n! Cyan\n*.color6:      #80cdcb\n*.color14:     #58c2c1\n!\n! White\n*.color7:      #b3b8c3\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 133 */
/*!***************************!*\
  !*** ./schemes/Spacedust ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ecf0c1\n*.background:  #0a1e24\n*.cursorColor: #708284\n!\n! Black\n*.color0:      #6e5346\n*.color8:      #684c31\n!\n! Red\n*.color1:      #e35b00\n*.color9:      #ff8a3a\n!\n! Green\n*.color2:      #5cab96\n*.color10:     #aecab8\n!\n! Yellow\n*.color3:      #e3cd7b\n*.color11:     #ffc878\n!\n! Blue\n*.color4:      #0f548b\n*.color12:     #67a0ce\n!\n! Magenta\n*.color5:      #e35b00\n*.color13:     #ff8a3a\n!\n! Cyan\n*.color6:      #06afc7\n*.color14:     #83a7b4\n!\n! White\n*.color7:      #f0f1ce\n*.color15:     #fefff1\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 134 */
/*!***************************!*\
  !*** ./schemes/Spiderman ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #e3e3e3\n*.background:  #1b1d1e\n*.cursorColor: #2c3fff\n!\n! Black\n*.color0:      #1b1d1e\n*.color8:      #505354\n!\n! Red\n*.color1:      #e60813\n*.color9:      #ff0325\n!\n! Green\n*.color2:      #e22928\n*.color10:     #ff3338\n!\n! Yellow\n*.color3:      #e24756\n*.color11:     #fe3a35\n!\n! Blue\n*.color4:      #2c3fff\n*.color12:     #1d50ff\n!\n! Magenta\n*.color5:      #2435db\n*.color13:     #747cff\n!\n! Cyan\n*.color6:      #3256ff\n*.color14:     #6184ff\n!\n! White\n*.color7:      #fffef6\n*.color15:     #fffff9\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 135 */
/*!************************!*\
  !*** ./schemes/Spring ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #4d4d4c\n*.background:  #ffffff\n*.cursorColor: #4d4d4c\n!\n! Black\n*.color0:      #000000\n*.color8:      #000000\n!\n! Red\n*.color1:      #ff4d83\n*.color9:      #ff0021\n!\n! Green\n*.color2:      #1f8c3b\n*.color10:     #1fc231\n!\n! Yellow\n*.color3:      #1fc95b\n*.color11:     #d5b807\n!\n! Blue\n*.color4:      #1dd3ee\n*.color12:     #15a9fd\n!\n! Magenta\n*.color5:      #8959a8\n*.color13:     #8959a8\n!\n! Cyan\n*.color6:      #3e999f\n*.color14:     #3e999f\n!\n! White\n*.color7:      #ffffff\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #4d4d4c\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 136 */
/*!************************!*\
  !*** ./schemes/Square ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #acacab\n*.background:  #1a1a1a\n*.cursorColor: #fcfbcc\n!\n! Black\n*.color0:      #050505\n*.color8:      #141414\n!\n! Red\n*.color1:      #e9897c\n*.color9:      #f99286\n!\n! Green\n*.color2:      #b6377d\n*.color10:     #c3f786\n!\n! Yellow\n*.color3:      #ecebbe\n*.color11:     #fcfbcc\n!\n! Blue\n*.color4:      #a9cdeb\n*.color12:     #b6defb\n!\n! Magenta\n*.color5:      #75507b\n*.color13:     #ad7fa8\n!\n! Cyan\n*.color6:      #c9caec\n*.color14:     #d7d9fc\n!\n! White\n*.color7:      #f2f2f2\n*.color15:     #e2e2e2\n!\n! Bold, Italic, Underline\n*.colorBD:     #e5e5e5\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 137 */
/*!**************************!*\
  !*** ./schemes/Sundried ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #c9c9c9\n*.background:  #1a1818\n*.cursorColor: #ffffff\n!\n! Black\n*.color0:      #302b2a\n*.color8:      #4d4e48\n!\n! Red\n*.color1:      #a7463d\n*.color9:      #aa000c\n!\n! Green\n*.color2:      #587744\n*.color10:     #128c21\n!\n! Yellow\n*.color3:      #9d602a\n*.color11:     #fc6a21\n!\n! Blue\n*.color4:      #485b98\n*.color12:     #7999f7\n!\n! Magenta\n*.color5:      #864651\n*.color13:     #fd8aa1\n!\n! Cyan\n*.color6:      #9c814f\n*.color14:     #fad484\n!\n! White\n*.color7:      #c9c9c9\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 138 */
/*!**************************!*\
  !*** ./schemes/Symfonic ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ffffff\n*.background:  #000000\n*.cursorColor: #dc322f\n!\n! Black\n*.color0:      #000000\n*.color8:      #1b1d21\n!\n! Red\n*.color1:      #dc322f\n*.color9:      #dc322f\n!\n! Green\n*.color2:      #56db3a\n*.color10:     #56db3a\n!\n! Yellow\n*.color3:      #ff8400\n*.color11:     #ff8400\n!\n! Blue\n*.color4:      #0084d4\n*.color12:     #0084d4\n!\n! Magenta\n*.color5:      #b729d9\n*.color13:     #b729d9\n!\n! Cyan\n*.color6:      #ccccff\n*.color14:     #ccccff\n!\n! White\n*.color7:      #ffffff\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ff8400\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 139 */
/*!***********************!*\
  !*** ./schemes/Tango ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "! special\n*.foreground:   #babdb6\n*.background:   #000000\n*.cursorColor:  #babdb6\n\n! black\n*.color0:       #2e3436\n*.color8:       #555753\n\n! red\n*.color1:       #cc0000\n*.color9:       #ef2929\n\n! green\n*.color2:       #4e9a06\n*.color10:      #8ae234\n\n! yellow\n*.color3:       #c4a000\n*.color11:      #fce94f\n\n! blue\n*.color4:       #3465a4\n*.color12:      #729fcf\n\n! magenta\n*.color5:       #75507b\n*.color13:      #ad7fa8\n\n! cyan\n*.color6:       #06989a\n*.color14:      #34e2e2\n\n! white\n*.color7:       #d3d7cf\n*.color15:      #eeeeec\n"

/***/ }),
/* 140 */
/*!***********************!*\
  !*** ./schemes/Teerb ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #d0d0d0\n*.background:  #262626\n*.cursorColor: #e4c9af\n!\n! Black\n*.color0:      #1c1c1c\n*.color8:      #1c1c1c\n!\n! Red\n*.color1:      #d68686\n*.color9:      #d68686\n!\n! Green\n*.color2:      #aed686\n*.color10:     #aed686\n!\n! Yellow\n*.color3:      #d7af87\n*.color11:     #e4c9af\n!\n! Blue\n*.color4:      #86aed6\n*.color12:     #86aed6\n!\n! Magenta\n*.color5:      #d6aed6\n*.color13:     #d6aed6\n!\n! Cyan\n*.color6:      #8adbb4\n*.color14:     #b1e7dd\n!\n! White\n*.color7:      #d0d0d0\n*.color15:     #efefef\n!\n! Bold, Italic, Underline\n*.colorBD:     #e5e5e5\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 141 */
/*!********************************!*\
  !*** ./schemes/Terminal Basic ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #000000\n*.background:  #ffffff\n*.cursorColor: #7f7f7f\n!\n! Black\n*.color0:      #000000\n*.color8:      #666666\n!\n! Red\n*.color1:      #990000\n*.color9:      #e50000\n!\n! Green\n*.color2:      #00a600\n*.color10:     #00d900\n!\n! Yellow\n*.color3:      #999900\n*.color11:     #e5e500\n!\n! Blue\n*.color4:      #0000b2\n*.color12:     #0000ff\n!\n! Magenta\n*.color5:      #b200b2\n*.color13:     #e500e5\n!\n! Cyan\n*.color6:      #00a6b2\n*.color14:     #00e5e5\n!\n! White\n*.color7:      #bfbfbf\n*.color15:     #e5e5e5\n!\n! Bold, Italic, Underline\n*.colorBD:     #000000\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 142 */
/*!*******************************!*\
  !*** ./schemes/Thayer Bright ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #f8f8f8\n*.background:  #1b1d1e\n*.cursorColor: #fc971f\n!\n! Black\n*.color0:      #1b1d1e\n*.color8:      #505354\n!\n! Red\n*.color1:      #f92672\n*.color9:      #ff5995\n!\n! Green\n*.color2:      #4df840\n*.color10:     #b6e354\n!\n! Yellow\n*.color3:      #f4fd22\n*.color11:     #feed6c\n!\n! Blue\n*.color4:      #2757d6\n*.color12:     #3f78ff\n!\n! Magenta\n*.color5:      #8c54fe\n*.color13:     #9e6ffe\n!\n! Cyan\n*.color6:      #38c8b5\n*.color14:     #23cfd5\n!\n! White\n*.color7:      #ccccc6\n*.color15:     #f8f8f2\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 143 */
/*!**************************!*\
  !*** ./schemes/The Hulk ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #b5b5b5\n*.background:  #1b1d1e\n*.cursorColor: #16b61b\n!\n! Black\n*.color0:      #1b1d1e\n*.color8:      #505354\n!\n! Red\n*.color1:      #269d1b\n*.color9:      #8dff2a\n!\n! Green\n*.color2:      #13ce30\n*.color10:     #48ff77\n!\n! Yellow\n*.color3:      #63e457\n*.color11:     #3afe16\n!\n! Blue\n*.color4:      #2525f5\n*.color12:     #506b95\n!\n! Magenta\n*.color5:      #641f74\n*.color13:     #72589d\n!\n! Cyan\n*.color6:      #378ca9\n*.color14:     #4085a6\n!\n! White\n*.color7:      #d9d8d1\n*.color15:     #e5e6e1\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 144 */
/*!**************************!*\
  !*** ./schemes/Tomorrow ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #4d4d4c\n*.background:  #ffffff\n*.cursorColor: #4d4d4c\n!\n! Black\n*.color0:      #000000\n*.color8:      #000000\n!\n! Red\n*.color1:      #c82829\n*.color9:      #c82829\n!\n! Green\n*.color2:      #718c00\n*.color10:     #718c00\n!\n! Yellow\n*.color3:      #eab700\n*.color11:     #eab700\n!\n! Blue\n*.color4:      #4271ae\n*.color12:     #4271ae\n!\n! Magenta\n*.color5:      #8959a8\n*.color13:     #8959a8\n!\n! Cyan\n*.color6:      #3e999f\n*.color14:     #3e999f\n!\n! White\n*.color7:      #ffffff\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #4d4d4c\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 145 */
/*!********************************!*\
  !*** ./schemes/Tomorrow Night ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #c5c8c6\n*.background:  #1d1f21\n*.cursorColor: #c5c8c6\n!\n! Black\n*.color0:      #000000\n*.color8:      #000000\n!\n! Red\n*.color1:      #cc6666\n*.color9:      #cc6666\n!\n! Green\n*.color2:      #b5bd68\n*.color10:     #b5bd68\n!\n! Yellow\n*.color3:      #f0c674\n*.color11:     #f0c674\n!\n! Blue\n*.color4:      #81a2be\n*.color12:     #81a2be\n!\n! Magenta\n*.color5:      #b294bb\n*.color13:     #b294bb\n!\n! Cyan\n*.color6:      #8abeb7\n*.color14:     #8abeb7\n!\n! White\n*.color7:      #ffffff\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #c5c8c6\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 146 */
/*!*************************************!*\
  !*** ./schemes/Tomorrow Night Blue ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ffffff\n*.background:  #002451\n*.cursorColor: #ffffff\n!\n! Black\n*.color0:      #000000\n*.color8:      #000000\n!\n! Red\n*.color1:      #ff9da4\n*.color9:      #ff9da4\n!\n! Green\n*.color2:      #d1f1a9\n*.color10:     #d1f1a9\n!\n! Yellow\n*.color3:      #ffeead\n*.color11:     #ffeead\n!\n! Blue\n*.color4:      #bbdaff\n*.color12:     #bbdaff\n!\n! Magenta\n*.color5:      #ebbbff\n*.color13:     #ebbbff\n!\n! Cyan\n*.color6:      #99ffff\n*.color14:     #99ffff\n!\n! White\n*.color7:      #ffffff\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 147 */
/*!***************************************!*\
  !*** ./schemes/Tomorrow Night Bright ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #eaeaea\n*.background:  #000000\n*.cursorColor: #eaeaea\n!\n! Black\n*.color0:      #000000\n*.color8:      #000000\n!\n! Red\n*.color1:      #d54e53\n*.color9:      #d54e53\n!\n! Green\n*.color2:      #b9ca4a\n*.color10:     #b9ca4a\n!\n! Yellow\n*.color3:      #e7c547\n*.color11:     #e7c547\n!\n! Blue\n*.color4:      #7aa6da\n*.color12:     #7aa6da\n!\n! Magenta\n*.color5:      #c397d8\n*.color13:     #c397d8\n!\n! Cyan\n*.color6:      #70c0b1\n*.color14:     #70c0b1\n!\n! White\n*.color7:      #ffffff\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #eaeaea\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 148 */
/*!*****************************************!*\
  !*** ./schemes/Tomorrow Night Eighties ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #cccccc\n*.background:  #2d2d2d\n*.cursorColor: #cccccc\n!\n! Black\n*.color0:      #000000\n*.color8:      #000000\n!\n! Red\n*.color1:      #f2777a\n*.color9:      #f2777a\n!\n! Green\n*.color2:      #99cc99\n*.color10:     #99cc99\n!\n! Yellow\n*.color3:      #ffcc66\n*.color11:     #ffcc66\n!\n! Blue\n*.color4:      #6699cc\n*.color12:     #6699cc\n!\n! Magenta\n*.color5:      #cc99cc\n*.color13:     #cc99cc\n!\n! Cyan\n*.color6:      #66cccc\n*.color14:     #66cccc\n!\n! White\n*.color7:      #ffffff\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #cccccc\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 149 */
/*!**************************!*\
  !*** ./schemes/ToyChest ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #31d07b\n*.background:  #24364b\n*.cursorColor: #d5d5d5\n!\n! Black\n*.color0:      #2c3f58\n*.color8:      #336889\n!\n! Red\n*.color1:      #be2d26\n*.color9:      #dd5944\n!\n! Green\n*.color2:      #1a9172\n*.color10:     #31d07b\n!\n! Yellow\n*.color3:      #db8e27\n*.color11:     #e7d84b\n!\n! Blue\n*.color4:      #325d96\n*.color12:     #34a6da\n!\n! Magenta\n*.color5:      #8a5edc\n*.color13:     #ae6bdc\n!\n! Cyan\n*.color6:      #35a08f\n*.color14:     #42c3ae\n!\n! White\n*.color7:      #23d183\n*.color15:     #d5d5d5\n!\n! Bold, Italic, Underline\n*.colorBD:     #2bff9f\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 150 */
/*!***************************!*\
  !*** ./schemes/Treehouse ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #786b53\n*.background:  #191919\n*.cursorColor: #fac814\n!\n! Black\n*.color0:      #321300\n*.color8:      #433626\n!\n! Red\n*.color1:      #b2270e\n*.color9:      #ed5d20\n!\n! Green\n*.color2:      #44a900\n*.color10:     #55f238\n!\n! Yellow\n*.color3:      #aa820c\n*.color11:     #f2b732\n!\n! Blue\n*.color4:      #58859a\n*.color12:     #85cfed\n!\n! Magenta\n*.color5:      #97363d\n*.color13:     #e14c5a\n!\n! Cyan\n*.color6:      #b25a1e\n*.color14:     #f07d14\n!\n! White\n*.color7:      #786b53\n*.color15:     #ffc800\n!\n! Bold, Italic, Underline\n*.colorBD:     #fac800\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 151 */
/*!**************************!*\
  !*** ./schemes/Twilight ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ffffd4\n*.background:  #141414\n*.cursorColor: #ffffff\n!\n! Black\n*.color0:      #141414\n*.color8:      #262626\n!\n! Red\n*.color1:      #c06d44\n*.color9:      #de7c4c\n!\n! Green\n*.color2:      #afb97a\n*.color10:     #ccd88c\n!\n! Yellow\n*.color3:      #c2a86c\n*.color11:     #e2c47e\n!\n! Blue\n*.color4:      #44474a\n*.color12:     #5a5e62\n!\n! Magenta\n*.color5:      #b4be7c\n*.color13:     #d0dc8e\n!\n! Cyan\n*.color6:      #778385\n*.color14:     #8a989b\n!\n! White\n*.color7:      #ffffd4\n*.color15:     #ffffd4\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffd4\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 152 */
/*!************************!*\
  !*** ./schemes/Ubuntu ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #eeeeec\n*.background:  #300a24\n*.cursorColor: #bbbbbb\n!\n! Black\n*.color0:      #2e3436\n*.color8:      #555753\n!\n! Red\n*.color1:      #cc0000\n*.color9:      #ef2929\n!\n! Green\n*.color2:      #4e9a06\n*.color10:     #8ae234\n!\n! Yellow\n*.color3:      #c4a000\n*.color11:     #fce94f\n!\n! Blue\n*.color4:      #3465a4\n*.color12:     #729fcf\n!\n! Magenta\n*.color5:      #75507b\n*.color13:     #ad7fa8\n!\n! Cyan\n*.color6:      #06989a\n*.color14:     #34e2e2\n!\n! White\n*.color7:      #d3d7cf\n*.color15:     #eeeeec\n!\n! Bold, Italic, Underline\n*.colorBD:     #eeeeec\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 153 */
/*!*****************************!*\
  !*** ./schemes/UnderTheSea ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ffffff\n*.background:  #011116\n*.cursorColor: #4afcd6\n!\n! Black\n*.color0:      #022026\n*.color8:      #384451\n!\n! Red\n*.color1:      #b2302d\n*.color9:      #ff4242\n!\n! Green\n*.color2:      #00a941\n*.color10:     #2aea5e\n!\n! Yellow\n*.color3:      #59819c\n*.color11:     #8ed4fd\n!\n! Blue\n*.color4:      #459a86\n*.color12:     #61d5ba\n!\n! Magenta\n*.color5:      #00599d\n*.color13:     #1298ff\n!\n! Cyan\n*.color6:      #5d7e19\n*.color14:     #98d028\n!\n! White\n*.color7:      #405555\n*.color15:     #58fbd6\n!\n! Bold, Italic, Underline\n*.colorBD:     #2bffd2\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 154 */
/*!***********************!*\
  !*** ./schemes/Urple ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #877a9b\n*.background:  #1b1b23\n*.cursorColor: #a063eb\n!\n! Black\n*.color0:      #000000\n*.color8:      #5d3225\n!\n! Red\n*.color1:      #b0425b\n*.color9:      #ff6388\n!\n! Green\n*.color2:      #37a415\n*.color10:     #29e620\n!\n! Yellow\n*.color3:      #ad5c42\n*.color11:     #f08161\n!\n! Blue\n*.color4:      #564d9b\n*.color12:     #867aed\n!\n! Magenta\n*.color5:      #6c3ca1\n*.color13:     #a05eee\n!\n! Cyan\n*.color6:      #808080\n*.color14:     #eaeaea\n!\n! White\n*.color7:      #87799c\n*.color15:     #bfa3ff\n!\n! Bold, Italic, Underline\n*.colorBD:     #a063eb\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 155 */
/*!************************!*\
  !*** ./schemes/Vaughn ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #dcdccc\n*.background:  #25234f\n*.cursorColor: #ff5555\n!\n! Black\n*.color0:      #25234f\n*.color8:      #709080\n!\n! Red\n*.color1:      #705050\n*.color9:      #dca3a3\n!\n! Green\n*.color2:      #60b48a\n*.color10:     #60b48a\n!\n! Yellow\n*.color3:      #dfaf8f\n*.color11:     #f0dfaf\n!\n! Blue\n*.color4:      #5555ff\n*.color12:     #5555ff\n!\n! Magenta\n*.color5:      #f08cc3\n*.color13:     #ec93d3\n!\n! Cyan\n*.color6:      #8cd0d3\n*.color14:     #93e0e3\n!\n! White\n*.color7:      #709080\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ff5e7d\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 156 */
/*!****************************!*\
  !*** ./schemes/VibrantInk ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ffffff\n*.background:  #000000\n*.cursorColor: #ffffff\n!\n! Black\n*.color0:      #878787\n*.color8:      #555555\n!\n! Red\n*.color1:      #ff6600\n*.color9:      #ff0000\n!\n! Green\n*.color2:      #ccff04\n*.color10:     #00ff00\n!\n! Yellow\n*.color3:      #ffcc00\n*.color11:     #ffff00\n!\n! Blue\n*.color4:      #44b4cc\n*.color12:     #0000ff\n!\n! Magenta\n*.color5:      #9933cc\n*.color13:     #ff00ff\n!\n! Cyan\n*.color6:      #44b4cc\n*.color14:     #00ffff\n!\n! White\n*.color7:      #f5f5f5\n*.color15:     #e5e5e5\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 157 */
/*!*****************************!*\
  !*** ./schemes/Violet Dark ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #708284\n*.background:  #1c1d1f\n*.cursorColor: #708284\n!\n! Black\n*.color0:      #56595c\n*.color8:      #45484b\n!\n! Red\n*.color1:      #c94c22\n*.color9:      #bd3613\n!\n! Green\n*.color2:      #85981c\n*.color10:     #738a04\n!\n! Yellow\n*.color3:      #b4881d\n*.color11:     #a57705\n!\n! Blue\n*.color4:      #2e8bce\n*.color12:     #2176c7\n!\n! Magenta\n*.color5:      #d13a82\n*.color13:     #c61c6f\n!\n! Cyan\n*.color6:      #32a198\n*.color14:     #259286\n!\n! White\n*.color7:      #c9c6bd\n*.color15:     #c9c6bd\n!\n! Bold, Italic, Underline\n*.colorBD:     #475b62\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 158 */
/*!******************************!*\
  !*** ./schemes/Violet Light ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #536870\n*.background:  #fcf4dc\n*.cursorColor: #536870\n!\n! Black\n*.color0:      #56595c\n*.color8:      #45484b\n!\n! Red\n*.color1:      #c94c22\n*.color9:      #bd3613\n!\n! Green\n*.color2:      #85981c\n*.color10:     #738a04\n!\n! Yellow\n*.color3:      #b4881d\n*.color11:     #a57705\n!\n! Blue\n*.color4:      #2e8bce\n*.color12:     #2176c7\n!\n! Magenta\n*.color5:      #d13a82\n*.color13:     #c61c6f\n!\n! Cyan\n*.color6:      #32a198\n*.color14:     #259286\n!\n! White\n*.color7:      #d3d0c9\n*.color15:     #c9c6bd\n!\n! Bold, Italic, Underline\n*.colorBD:     #475b62\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 159 */
/*!**************************!*\
  !*** ./schemes/WarmNeon ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #afdab6\n*.background:  #404040\n*.cursorColor: #30ff24\n!\n! Black\n*.color0:      #000000\n*.color8:      #fefcfc\n!\n! Red\n*.color1:      #e24346\n*.color9:      #e97071\n!\n! Green\n*.color2:      #39b13a\n*.color10:     #9cc090\n!\n! Yellow\n*.color3:      #dae145\n*.color11:     #ddda7a\n!\n! Blue\n*.color4:      #4261c5\n*.color12:     #7b91d6\n!\n! Magenta\n*.color5:      #f920fb\n*.color13:     #f674ba\n!\n! Cyan\n*.color6:      #2abbd4\n*.color14:     #5ed1e5\n!\n! White\n*.color7:      #d0b8a3\n*.color15:     #d8c8bb\n!\n! Bold, Italic, Underline\n*.colorBD:     #22ff0c\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 160 */
/*!*********************!*\
  !*** ./schemes/Wez ***!
  \*********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #b3b3b3\n*.background:  #000000\n*.cursorColor: #53ae71\n!\n! Black\n*.color0:      #000000\n*.color8:      #555555\n!\n! Red\n*.color1:      #cc5555\n*.color9:      #ff5555\n!\n! Green\n*.color2:      #55cc55\n*.color10:     #55ff55\n!\n! Yellow\n*.color3:      #cdcd55\n*.color11:     #ffff55\n!\n! Blue\n*.color4:      #5555cc\n*.color12:     #5555ff\n!\n! Magenta\n*.color5:      #cc55cc\n*.color13:     #ff55ff\n!\n! Cyan\n*.color6:      #7acaca\n*.color14:     #55ffff\n!\n! White\n*.color7:      #cccccc\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ff6347\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 161 */
/*!****************************!*\
  !*** ./schemes/WildCherry ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #dafaff\n*.background:  #1f1726\n*.cursorColor: #dd00ff\n!\n! Black\n*.color0:      #000507\n*.color8:      #009cc9\n!\n! Red\n*.color1:      #d94085\n*.color9:      #da6bac\n!\n! Green\n*.color2:      #2ab250\n*.color10:     #f4dca5\n!\n! Yellow\n*.color3:      #ffd16f\n*.color11:     #eac066\n!\n! Blue\n*.color4:      #883cdc\n*.color12:     #308cba\n!\n! Magenta\n*.color5:      #ececec\n*.color13:     #ae636b\n!\n! Cyan\n*.color6:      #c1b8b7\n*.color14:     #ff919d\n!\n! White\n*.color7:      #fff8de\n*.color15:     #e4838d\n!\n! Bold, Italic, Underline\n*.colorBD:     #819090\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 162 */
/*!************************!*\
  !*** ./schemes/Wombat ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #dedacf\n*.background:  #171717\n*.cursorColor: #bbbbbb\n!\n! Black\n*.color0:      #000000\n*.color8:      #313131\n!\n! Red\n*.color1:      #ff615a\n*.color9:      #f58c80\n!\n! Green\n*.color2:      #b1e969\n*.color10:     #ddf88f\n!\n! Yellow\n*.color3:      #ebd99c\n*.color11:     #eee5b2\n!\n! Blue\n*.color4:      #5da9f6\n*.color12:     #a5c7ff\n!\n! Magenta\n*.color5:      #e86aff\n*.color13:     #ddaaff\n!\n! Cyan\n*.color6:      #82fff7\n*.color14:     #b7fff9\n!\n! White\n*.color7:      #dedacf\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 163 */
/*!***********************!*\
  !*** ./schemes/Wryan ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #999993\n*.background:  #101010\n*.cursorColor: #9e9ecb\n!\n! Black\n*.color0:      #333333\n*.color8:      #3d3d3d\n!\n! Red\n*.color1:      #8c4665\n*.color9:      #bf4d80\n!\n! Green\n*.color2:      #287373\n*.color10:     #53a6a6\n!\n! Yellow\n*.color3:      #7c7c99\n*.color11:     #9e9ecb\n!\n! Blue\n*.color4:      #395573\n*.color12:     #477ab3\n!\n! Magenta\n*.color5:      #5e468c\n*.color13:     #7e62b3\n!\n! Cyan\n*.color6:      #31658c\n*.color14:     #6096bf\n!\n! White\n*.color7:      #899ca1\n*.color15:     #c0c0c0\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffff\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 164 */
/*!*************************!*\
  !*** ./schemes/Zenburn ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #dcdccc\n*.background:  #3f3f3f\n*.cursorColor: #73635a\n!\n! Black\n*.color0:      #4d4d4d\n*.color8:      #709080\n!\n! Red\n*.color1:      #705050\n*.color9:      #dca3a3\n!\n! Green\n*.color2:      #60b48a\n*.color10:     #c3bf9f\n!\n! Yellow\n*.color3:      #f0dfaf\n*.color11:     #e0cf9f\n!\n! Blue\n*.color4:      #506070\n*.color12:     #94bff3\n!\n! Magenta\n*.color5:      #dc8cc3\n*.color13:     #ec93d3\n!\n! Cyan\n*.color6:      #8cd0d3\n*.color14:     #93e0e3\n!\n! White\n*.color7:      #dcdccc\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #dcdccc\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 165 */
/*!*********************!*\
  !*** ./schemes/ayu ***!
  \*********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #e6e1cf\n*.background:  #0f1419\n*.cursorColor: #f29718\n!\n! Black\n*.color0:      #000000\n*.color8:      #323232\n!\n! Red\n*.color1:      #ff3333\n*.color9:      #ff6565\n!\n! Green\n*.color2:      #b8cc52\n*.color10:     #eafe84\n!\n! Yellow\n*.color3:      #e7c547\n*.color11:     #fff779\n!\n! Blue\n*.color4:      #36a3d9\n*.color12:     #68d5ff\n!\n! Magenta\n*.color5:      #f07178\n*.color13:     #ffa3aa\n!\n! Cyan\n*.color6:      #95e6cb\n*.color14:     #c7fffd\n!\n! White\n*.color7:      #ffffff\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #e6e1cf\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 166 */
/*!***************************!*\
  !*** ./schemes/ayu_light ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #5c6773\n*.background:  #fafafa\n*.cursorColor: #ff6a00\n!\n! Black\n*.color0:      #000000\n*.color8:      #323232\n!\n! Red\n*.color1:      #ff3333\n*.color9:      #ff6565\n!\n! Green\n*.color2:      #86b300\n*.color10:     #b8e532\n!\n! Yellow\n*.color3:      #f29718\n*.color11:     #ffc94a\n!\n! Blue\n*.color4:      #41a6d9\n*.color12:     #73d8ff\n!\n! Magenta\n*.color5:      #f07178\n*.color13:     #ffa3aa\n!\n! Cyan\n*.color6:      #4dbf99\n*.color14:     #7ff1cb\n!\n! White\n*.color7:      #ffffff\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #5c6773\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 167 */
/*!*************************************!*\
  !*** ./schemes/base2tone-cave-dark ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xrecources.py\n!\n*.foreground:  #9f999b\n*.background:  #222021\n*.cursorColor: #996e00\n!\n! Black\n*.color0:      #222021\n*.color8:      #635f60\n!\n! Red\n*.color1:      #936c7a\n*.color9:      #ddaf3c\n!\n! Green\n*.color2:      #cca133\n*.color10:     #2f2d2e\n!\n! Yellow\n*.color3:      #ffcc4d\n*.color11:     #565254\n!\n! Blue\n*.color4:      #9c818b\n*.color12:     #706b6d\n!\n! Magenta\n*.color5:      #cca133\n*.color13:     #f0a8c1\n!\n! Cyan\n*.color6:      #d27998\n*.color14:     #c39622\n!\n! White\n*.color7:      #9f999b\n*.color15:     #ffebf2\n!\n! Bold, Italic, Underline\n*.colorBD:     #9f999b\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 168 */
/*!***************************************!*\
  !*** ./schemes/base2tone-desert-dark ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xrecources.py\n!\n*.foreground:  #ada594\n*.background:  #292724\n*.cursorColor: #bc672f\n!\n! Black\n*.color0:      #292724\n*.color8:      #7e7767\n!\n! Red\n*.color1:      #816f4b\n*.color9:      #f29d63\n!\n! Green\n*.color2:      #ec9255\n*.color10:     #3d3a34\n!\n! Yellow\n*.color3:      #ffb380\n*.color11:     #615c51\n!\n! Blue\n*.color4:      #957e50\n*.color12:     #908774\n!\n! Magenta\n*.color5:      #ec9255\n*.color13:     #ddcba6\n!\n! Cyan\n*.color6:      #ac8e53\n*.color14:     #e58748\n!\n! White\n*.color7:      #ada594\n*.color15:     #f2ead9\n!\n! Bold, Italic, Underline\n*.colorBD:     #ada594\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 169 */
/*!*******************************************!*\
  !*** ./schemes/base2tone-drawbridge-dark ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xrecources.py\n!\n*.foreground:  #9094a7\n*.background:  #1b1f32\n*.cursorColor: #289dbd\n!\n! Black\n*.color0:      #1b1f32\n*.color8:      #51587b\n!\n! Red\n*.color1:      #627af4\n*.color9:      #75d5f0\n!\n! Green\n*.color2:      #67c9e4\n*.color10:     #252a41\n!\n! Yellow\n*.color3:      #99e9ff\n*.color11:     #444b6f\n!\n! Blue\n*.color4:      #7289fd\n*.color12:     #5e6587\n!\n! Magenta\n*.color5:      #67c9e4\n*.color13:     #c3cdfe\n!\n! Cyan\n*.color6:      #8b9efd\n*.color14:     #5cbcd6\n!\n! White\n*.color7:      #9094a7\n*.color15:     #e1e6ff\n!\n! Bold, Italic, Underline\n*.colorBD:     #9094a7\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 170 */
/*!****************************************!*\
  !*** ./schemes/base2tone-evening-dark ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xrecources.py\n!\n*.foreground:  #a4a1b5\n*.background:  #2a2734\n*.cursorColor: #b37537\n!\n! Black\n*.color0:      #2a2734\n*.color8:      #6c6783\n!\n! Red\n*.color1:      #8a75f5\n*.color9:      #ffb870\n!\n! Green\n*.color2:      #ffad5c\n*.color10:     #363342\n!\n! Yellow\n*.color3:      #ffcc99\n*.color11:     #545167\n!\n! Blue\n*.color4:      #9a86fd\n*.color12:     #787391\n!\n! Magenta\n*.color5:      #ffad5c\n*.color13:     #d9d2fe\n!\n! Cyan\n*.color6:      #afa0fe\n*.color14:     #ffa142\n!\n! White\n*.color7:      #a4a1b5\n*.color15:     #eeebff\n!\n! Bold, Italic, Underline\n*.colorBD:     #a4a1b5\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 171 */
/*!***************************************!*\
  !*** ./schemes/base2tone-forest-dark ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xrecources.py\n!\n*.foreground:  #a1b5a1\n*.background:  #2a2d2a\n*.cursorColor: #656b47\n!\n! Black\n*.color0:      #2a2d2a\n*.color8:      #535f53\n!\n! Red\n*.color1:      #5c705c\n*.color9:      #cbe25a\n!\n! Green\n*.color2:      #bfd454\n*.color10:     #353b35\n!\n! Yellow\n*.color3:      #e5fb79\n*.color11:     #485148\n!\n! Blue\n*.color4:      #687d68\n*.color12:     #5e6e5e\n!\n! Magenta\n*.color5:      #bfd454\n*.color13:     #c8e4c8\n!\n! Cyan\n*.color6:      #8fae8f\n*.color14:     #b1c44f\n!\n! White\n*.color7:      #a1b5a1\n*.color15:     #f0fff0\n!\n! Bold, Italic, Underline\n*.colorBD:     #a1b5a1\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 172 */
/*!**************************************!*\
  !*** ./schemes/base2tone-heath-dark ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xrecources.py\n!\n*.foreground:  #9e999f\n*.background:  #222022\n*.cursorColor: #995900\n!\n! Black\n*.color0:      #222022\n*.color8:      #635f63\n!\n! Red\n*.color1:      #8f6c93\n*.color9:      #d9b98c\n!\n! Green\n*.color2:      #cc8c33\n*.color10:     #2f2d2f\n!\n! Yellow\n*.color3:      #ffd599\n*.color11:     #575158\n!\n! Blue\n*.color4:      #9a819c\n*.color12:     #6f6b70\n!\n! Magenta\n*.color5:      #cc8c33\n*.color13:     #eaa8f0\n!\n! Cyan\n*.color6:      #cb79d2\n*.color14:     #c38022\n!\n! White\n*.color7:      #9e999f\n*.color15:     #fdebff\n!\n! Bold, Italic, Underline\n*.colorBD:     #9e999f\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 173 */
/*!***************************************!*\
  !*** ./schemes/base2tone-heath-light ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xrecources.py\n!\n*.foreground:  #575158\n*.background:  #fbfaf9\n*.cursorColor: #eaa8f0\n!\n! Black\n*.color0:      #222022\n*.color8:      #635f63\n!\n! Red\n*.color1:      #8f6c93\n*.color9:      #d9b98c\n!\n! Green\n*.color2:      #cc8c33\n*.color10:     #2f2d2f\n!\n! Yellow\n*.color3:      #ffd599\n*.color11:     #575158\n!\n! Blue\n*.color4:      #9a819c\n*.color12:     #6f6b70\n!\n! Magenta\n*.color5:      #b87414\n*.color13:     #eaa8f0\n!\n! Cyan\n*.color6:      #cb79d2\n*.color14:     #c38022\n!\n! White\n*.color7:      #9e999f\n*.color15:     #fbfaf9\n!\n! Bold, Italic, Underline\n*.colorBD:     #575158\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 174 */
/*!*************************************!*\
  !*** ./schemes/base2tone-lake-dark ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xrecources.py\n!\n*.foreground:  #7ba8b7\n*.background:  #192d34\n*.cursorColor: #84740b\n!\n! Black\n*.color0:      #192d34\n*.color8:      #3d6876\n!\n! Red\n*.color1:      #3e91ac\n*.color9:      #d6c65c\n!\n! Green\n*.color2:      #cbbb4d\n*.color10:     #223c44\n!\n! Yellow\n*.color3:      #ffeb66\n*.color11:     #335966\n!\n! Blue\n*.color4:      #499fbc\n*.color12:     #467686\n!\n! Magenta\n*.color5:      #cbbb4d\n*.color13:     #a5d8e9\n!\n! Cyan\n*.color6:      #62b1cb\n*.color14:     #c4b031\n!\n! White\n*.color7:      #7ba8b7\n*.color15:     #e1f7ff\n!\n! Bold, Italic, Underline\n*.colorBD:     #7ba8b7\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 175 */
/*!***************************************!*\
  !*** ./schemes/base2tone-meadow-dark ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xrecources.py\n!\n*.foreground:  #7b9eb7\n*.background:  #192834\n*.cursorColor: #4d8217\n!\n! Black\n*.color0:      #192834\n*.color8:      #3d5e76\n!\n! Red\n*.color1:      #277fbe\n*.color9:      #8cdd3c\n!\n! Green\n*.color2:      #80bf40\n*.color10:     #223644\n!\n! Yellow\n*.color3:      #a6f655\n*.color11:     #335166\n!\n! Blue\n*.color4:      #4299d7\n*.color12:     #466b86\n!\n! Magenta\n*.color5:      #80bf40\n*.color13:     #afddfe\n!\n! Cyan\n*.color6:      #47adf5\n*.color14:     #73b234\n!\n! White\n*.color7:      #7b9eb7\n*.color15:     #d1ecff\n!\n! Bold, Italic, Underline\n*.colorBD:     #7b9eb7\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 176 */
/*!*****************************************!*\
  !*** ./schemes/base2tone-morning-light ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xrecources.py\n!\n*.foreground:  #4f5664\n*.background:  #faf8f5\n*.cursorColor: #b7c9eb\n!\n! Black\n*.color0:      #232834\n*.color8:      #656e81\n!\n! Red\n*.color1:      #1659df\n*.color9:      #c6b28b\n!\n! Green\n*.color2:      #b29762\n*.color10:     #31363f\n!\n! Yellow\n*.color3:      #e5ddcd\n*.color11:     #4f5664\n!\n! Blue\n*.color4:      #3d75e6\n*.color12:     #707a8f\n!\n! Magenta\n*.color5:      #896724\n*.color13:     #b7c9eb\n!\n! Cyan\n*.color6:      #728fcb\n*.color14:     #9a7c42\n!\n! White\n*.color7:      #8d95a5\n*.color15:     #faf8f5\n!\n! Bold, Italic, Underline\n*.colorBD:     #4f5664\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 177 */
/*!*************************************!*\
  !*** ./schemes/base2tone-pool-dark ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xrecources.py\n!\n*.foreground:  #9a90a7\n*.background:  #2a2433\n*.cursorColor: #cf504a\n!\n! Black\n*.color0:      #2a2433\n*.color8:      #635775\n!\n! Red\n*.color1:      #aa75f5\n*.color9:      #fc8983\n!\n! Green\n*.color2:      #f87972\n*.color10:     #372f42\n!\n! Yellow\n*.color3:      #ffb6b3\n*.color11:     #574b68\n!\n! Blue\n*.color4:      #b886fd\n*.color12:     #706383\n!\n! Magenta\n*.color5:      #f87972\n*.color13:     #e4d2fe\n!\n! Cyan\n*.color6:      #c7a0fe\n*.color14:     #f36f68\n!\n! White\n*.color7:      #9a90a7\n*.color15:     #f3ebff\n!\n! Bold, Italic, Underline\n*.colorBD:     #9a90a7\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 178 */
/*!************************************!*\
  !*** ./schemes/base2tone-sea-dark ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xrecources.py\n!\n*.foreground:  #a1aab5\n*.background:  #1d262f\n*.cursorColor: #067953\n!\n! Black\n*.color0:      #1d262f\n*.color8:      #4a5f78\n!\n! Red\n*.color1:      #34659d\n*.color9:      #14e19d\n!\n! Green\n*.color2:      #0fc78a\n*.color10:     #27323f\n!\n! Yellow\n*.color3:      #47ebb4\n*.color11:     #405368\n!\n! Blue\n*.color4:      #57718e\n*.color12:     #738191\n!\n! Magenta\n*.color5:      #0fc78a\n*.color13:     #afd4fe\n!\n! Cyan\n*.color6:      #6e9bcf\n*.color14:     #0db57d\n!\n! White\n*.color7:      #a1aab5\n*.color15:     #ebf4ff\n!\n! Bold, Italic, Underline\n*.colorBD:     #a1aab5\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 179 */
/*!**************************************!*\
  !*** ./schemes/base2tone-space-dark ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xrecources.py\n!\n*.foreground:  #a1a1b5\n*.background:  #24242e\n*.cursorColor: #b25424\n!\n! Black\n*.color0:      #24242e\n*.color8:      #5b5b76\n!\n! Red\n*.color1:      #7676f4\n*.color9:      #f37b3f\n!\n! Green\n*.color2:      #ec7336\n*.color10:     #333342\n!\n! Yellow\n*.color3:      #fe8c52\n*.color11:     #515167\n!\n! Blue\n*.color4:      #767693\n*.color12:     #737391\n!\n! Magenta\n*.color5:      #ec7336\n*.color13:     #cecee3\n!\n! Cyan\n*.color6:      #8a8aad\n*.color14:     #e66e33\n!\n! White\n*.color7:      #a1a1b5\n*.color15:     #ebebff\n!\n! Bold, Italic, Underline\n*.colorBD:     #a1a1b5\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 180 */
/*!**********************!*\
  !*** ./schemes/deep ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #cdcdcd\n*.background:  #000000\n*.cursorColor: #d0d0d0\n!\n! Black\n*.color0:      #000000\n*.color8:      #535353\n!\n! Red\n*.color1:      #d11600\n*.color9:      #f4152c\n!\n! Green\n*.color2:      #37c32c\n*.color10:     #01ea10\n!\n! Yellow\n*.color3:      #e3c421\n*.color11:     #ffee1d\n!\n! Blue\n*.color4:      #5c6bfd\n*.color12:     #8cb0f8\n!\n! Magenta\n*.color5:      #dd5be5\n*.color13:     #e056f5\n!\n! Cyan\n*.color6:      #6eb4f2\n*.color14:     #67ecff\n!\n! White\n*.color7:      #e0e0e0\n*.color15:     #f4f4f4\n!\n! Bold, Italic, Underline\n*.colorBD:     #eeeeee\n!*.colorIT:\n!*.colorUL:\n"

/***/ }),
/* 181 */
/*!**************************!*\
  !*** ./schemes/idleToes ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "!\n! Generated with :\n! XRDB2Xreources.py\n!\n*.foreground:  #ffffff\n*.background:  #323232\n*.cursorColor: #d6d6d6\n!\n! Black\n*.color0:      #323232\n*.color8:      #535353\n!\n! Red\n*.color1:      #d25252\n*.color9:      #f07070\n!\n! Green\n*.color2:      #7fe173\n*.color10:     #9dff91\n!\n! Yellow\n*.color3:      #ffc66d\n*.color11:     #ffe48b\n!\n! Blue\n*.color4:      #4099ff\n*.color12:     #5eb7f7\n!\n! Magenta\n*.color5:      #f680ff\n*.color13:     #ff9dff\n!\n! Cyan\n*.color6:      #bed6ff\n*.color14:     #dcf4ff\n!\n! White\n*.color7:      #eeeeec\n*.color15:     #ffffff\n!\n! Bold, Italic, Underline\n*.colorBD:     #ffffa9\n!*.colorIT:\n!*.colorUL:\n"

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map