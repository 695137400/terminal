!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("@angular/core"),require("@ng-bootstrap/ng-bootstrap"),require("terminus-core"),require("terminus-settings"),require("@angular/common"),require("@angular/forms"),require("terminus-terminal"),require("@angular/platform-browser"));else if("function"==typeof define&&define.amd)define(["@angular/core","@ng-bootstrap/ng-bootstrap","terminus-core","terminus-settings","@angular/common","@angular/forms","terminus-terminal","@angular/platform-browser"],e);else{var n="object"==typeof exports?e(require("@angular/core"),require("@ng-bootstrap/ng-bootstrap"),require("terminus-core"),require("terminus-settings"),require("@angular/common"),require("@angular/forms"),require("terminus-terminal"),require("@angular/platform-browser")):e(t["@angular/core"],t["@ng-bootstrap/ng-bootstrap"],t["terminus-core"],t["terminus-settings"],t["@angular/common"],t["@angular/forms"],t["terminus-terminal"],t["@angular/platform-browser"]);for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(global,function(t,e,n,o,r,i,a,s){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,n){e.exports=t},
/*!*********************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap" ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=e},
/*!********************************!*\
  !*** external "terminus-core" ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){t.exports=n},
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},
/*!********************************************!*\
  !*** ../node_modules/pug-runtime/index.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var o=Object.prototype.hasOwnProperty;function r(t,e){return Array.isArray(t)?function(t,e){for(var n,o="",i="",a=Array.isArray(e),s=0;s<t.length;s++)(n=r(t[s]))&&(a&&e[s]&&(n=c(n)),o=o+i+n,i=" ");return o}(t,e):t&&"object"==typeof t?function(t){var e="",n="";for(var r in t)r&&t[r]&&o.call(t,r)&&(e=e+n+r,n=" ");return e}(t):t||""}function i(t){if(!t)return"";if("object"==typeof t){var e="";for(var n in t)o.call(t,n)&&(e=e+n+":"+t[n]+";");return e}return t+""}function a(t,e,n,o){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(o?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=c(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}e.merge=function t(e,n){if(1===arguments.length){for(var o=e[0],r=1;r<e.length;r++)o=t(o,e[r]);return o}for(var a in n)if("class"===a){var s=e[a]||[];e[a]=(Array.isArray(s)?s:[s]).concat(n[a]||[])}else if("style"===a){var s=i(e[a]);s=s&&";"!==s[s.length-1]?s+";":s;var c=i(n[a]);c=c&&";"!==c[c.length-1]?c+";":c,e[a]=s+c}else e[a]=n[a];return e},e.classes=r,e.style=i,e.attr=a,e.attrs=function(t,e){var n="";for(var s in t)if(o.call(t,s)){var c=t[s];if("class"===s){c=r(c),n=a(s,c,!1,e)+n;continue}"style"===s&&(c=i(c)),n+=a(s,c,!1,e)}return n};var s=/["&<>]/;function c(t){var e=""+t,n=s.exec(e);if(!n)return t;var o,r,i,a="";for(o=n.index,r=0;o<e.length;o++){switch(e.charCodeAt(o)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue}r!==o&&(a+=e.substring(r,o)),r=o+1,a+=i}return r!==o?a+e.substring(r,o):a}e.escape=c,e.rethrow=function t(e,o,r,i){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&o||i))throw e.message+=" on line "+r,e;try{i=i||n(/*! fs */14).readFileSync(o,"utf8")}catch(n){t(e,null,r)}var a=3,s=i.split("\n"),c=Math.max(r-a,0),l=Math.min(s.length,r+a);var a=s.slice(c,l).map(function(t,e){var n=e+c+1;return(n==r?"  > ":"    ")+n+"| "+t}).join("\n");e.path=o;e.message=(o||"Pug")+":"+r+"\n"+a+"\n\n"+e.message;throw e}},
/*!************************************!*\
  !*** external "terminus-settings" ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){t.exports=o},
/*!******************************************************!*\
  !*** ./src/components/editCommandModal.component.ts ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});const i=n(/*! @angular/core */0),a=n(/*! @ng-bootstrap/ng-bootstrap */1);let s=class{constructor(t){this.modalInstance=t}save(){this.modalInstance.close(this.command)}cancel(){this.modalInstance.dismiss()}};s=o([i.Component({template:n(/*! ./editCommandModal.component.pug */13)}),r("design:paramtypes",[a.NgbActiveModal])],s),e.EditCommandModalComponent=s},
/*!****************************************************!*\
  !*** ./src/components/quickCmdsModal.component.ts ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});const i=n(/*! @angular/core */0),a=n(/*! @ng-bootstrap/ng-bootstrap */1),s=n(/*! terminus-core */2),c=n(/*! terminus-terminal */15);let l=class{constructor(t,e,n){this.modalInstance=t,this.config=e,this.app=n,this.groupCollapsed={}}ngOnInit(){this.cmds=this.config.store.qc.cmds,this.appendCR=!0,this.refresh()}quickSend(){this._send(this.app.activeTab,this.quickCmd+(this.appendCR?"\n":"")),this.close()}quickSendAll(){for(let t of this.app.tabs)this._send(t,this.quickCmd+(this.appendCR?"\n":""));this.close()}_send(t,e){if(t instanceof c.TerminalTabComponent){let n=t;console.log("Sending "+e),n.sendInput(e)}}_sendAll(t){for(let e of this.app.tabs)this._send(e,t)}close(){this.modalInstance.close(),this.app.activeTab.emitFocused()}send(t,e){e.ctrlKey?this._sendAll(t.text+(t.appendCR?"\n":"")):this._send(this.app.activeTab,t.text+(t.appendCR?"\n":"")),this.close()}clickGroup(t,e){if(e.shiftKey)if(e.ctrlKey)for(let e of t.cmds)this._sendAll(e.text+(e.appendCR?"\n":""));else for(let e of t.cmds)this._send(this.app.activeTab,e.text+(e.appendCR?"\n":""));else this.groupCollapsed[t.name]=!this.groupCollapsed[t.name]}refresh(){this.childGroups=[];let t=this.cmds;this.quickCmd&&(t=t.filter(t=>(t.name+t.group+t.text).toLowerCase().includes(this.quickCmd)));for(let e of t){e.group=e.group||null;let t=this.childGroups.find(t=>t.name===e.group);t||(t={name:e.group,cmds:[]},this.childGroups.push(t)),t.cmds.push(e)}}};l=o([i.Component({template:n(/*! ./quickCmdsModal.component.pug */16),styles:[n(/*! ./quickCmdsModal.component.scss */17)]}),r("design:paramtypes",[a.NgbActiveModal,s.ConfigService,s.AppService])],l),e.QuickCmdsModalComponent=l},
/*!**********************************************************!*\
  !*** ./src/components/quickCmdsSettingsTab.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});const i=n(/*! @angular/core */0),a=n(/*! @ng-bootstrap/ng-bootstrap */1),s=n(/*! terminus-core */2),c=n(/*! ./editCommandModal.component */6),l=n(/*! ./promptModal.component */9);let u=class{constructor(t,e){this.config=t,this.ngbModal=e,this.groupCollapsed={},this.commands=this.config.store.qc.cmds,this.refresh()}createCommand(){let t=this.ngbModal.open(c.EditCommandModalComponent);t.componentInstance.command={name:"",text:"",appendCR:!0},t.result.then(t=>{this.commands.push(t),this.config.store.qc.cmds=this.commands,this.config.save(),this.refresh()})}editCommand(t){let e=this.ngbModal.open(c.EditCommandModalComponent);e.componentInstance.command=Object.assign({},t),e.result.then(e=>{Object.assign(t,e),this.config.save(),this.refresh()})}deleteCommand(t){confirm(`Delete "${t.name}"?`)&&(this.commands=this.commands.filter(e=>e!==t),this.config.store.qc.cmds=this.commands,this.config.save(),this.refresh())}editGroup(t){let e=this.ngbModal.open(l.PromptModalComponent);e.componentInstance.prompt="New group name",e.componentInstance.value=t.name,e.result.then(e=>{if(e){for(let n of this.commands.filter(e=>e.group===t.name))n.group=e;this.config.save(),this.refresh()}})}deleteGroup(t){if(confirm(`Delete "${t}"?`)){for(let e of this.commands.filter(e=>e.group===t.name))e.group=null;this.config.save(),this.refresh()}}refresh(){this.childGroups=[];for(let t of this.commands){t.group=t.group||null;let e=this.childGroups.find(e=>e.name===t.group);e||(e={name:t.group,cmds:[]},this.childGroups.push(e)),e.cmds.push(t)}}};u=o([i.Component({template:n(/*! ./quickCmdsSettingsTab.component.pug */21)}),r("design:paramtypes",[s.ConfigService,a.NgbModal])],u),e.QuickCmdsSettingsTabComponent=u},
/*!*************************************************!*\
  !*** ./src/components/promptModal.component.ts ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});const i=n(/*! @angular/core */0),a=n(/*! @ng-bootstrap/ng-bootstrap */1);let s=class{constructor(t){this.modalInstance=t}ngOnInit(){this.input.nativeElement.focus()}ok(){this.modalInstance.close(this.value)}cancel(){this.modalInstance.close("")}};o([i.Input(),r("design:type",String)],s.prototype,"value",void 0),o([i.Input(),r("design:type",Boolean)],s.prototype,"password",void 0),o([i.ViewChild("input"),r("design:type",i.ElementRef)],s.prototype,"input",void 0),s=o([i.Component({template:n(/*! ./promptModal.component.pug */20)}),r("design:paramtypes",[a.NgbActiveModal])],s),e.PromptModalComponent=s},
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const i=n(/*! @angular/core */0),a=n(/*! @angular/common */11),s=n(/*! @angular/forms */12),c=n(/*! @ng-bootstrap/ng-bootstrap */1),l=n(/*! terminus-core */2),u=r(n(/*! terminus-core */2)),d=n(/*! terminus-settings */5),p=n(/*! ./components/editCommandModal.component */6),f=n(/*! ./components/quickCmdsModal.component */7),m=n(/*! ./components/quickCmdsSettingsTab.component */8),h=n(/*! ./components/promptModal.component */9),g=n(/*! ./buttonProvider */22),v=n(/*! ./config */25),b=n(/*! ./settings */26);let y=class{};y=o([i.NgModule({imports:[c.NgbModule,a.CommonModule,s.FormsModule,u.default],providers:[{provide:l.ToolbarButtonProvider,useClass:g.ButtonProvider,multi:!0},{provide:l.ConfigProvider,useClass:v.QuickCmdsConfigProvider,multi:!0},{provide:d.SettingsTabProvider,useClass:b.QuickCmdsSettingsTabProvider,multi:!0}],entryComponents:[h.PromptModalComponent,p.EditCommandModalComponent,f.QuickCmdsModalComponent,m.QuickCmdsSettingsTabComponent],declarations:[h.PromptModalComponent,p.EditCommandModalComponent,f.QuickCmdsModalComponent,m.QuickCmdsSettingsTabComponent]})],y),e.default=y},
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){t.exports=r},
/*!*********************************!*\
  !*** external "@angular/forms" ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){t.exports=i},
/*!*******************************************************!*\
  !*** ./src/components/editCommandModal.component.pug ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){(function(t){n(/*! ../../../node_modules/pug-runtime/index.js */4);t.exports=function(t){var e="";return e+='<div class="modal-body"><div class="form-group"><label>Name</label><input class="form-control" type="text" placeholder="Name" autofocus [(ngModel)]="command.name"></div><div class="form-group"><label>Text</label><input class="form-control" type="text" placeholder="Text to be sent" [(ngModel)]="command.text"></div><div class="form-group"><label>Group</label><input class="form-control" type="text" placeholder="Ungrouped" [(ngModel)]="command.group"></div><div class="form-line"><div class="header"><div class="title">Append \'\\n\'</div><div class="description">Automatically append a \'\\n\' char to the end</div></div><toggle [(ngModel)]="command.appendCR"></toggle></div></div><div class="modal-footer"><button class="btn btn-outline-primary" (click)="save()">Save</button><button class="btn btn-outline-danger" (click)="cancel()">Cancel</button></div>'},t.exports=t.exports.apply(t,[])}).call(this,n(/*! ./../../../node_modules/webpack/buildin/module.js */3)(t))},
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){t.exports=require("fs")},
/*!************************************!*\
  !*** external "terminus-terminal" ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){t.exports=a},
/*!*****************************************************!*\
  !*** ./src/components/quickCmdsModal.component.pug ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){(function(t){n(/*! ../../../node_modules/pug-runtime/index.js */4);t.exports=function(t){var e="";return e+='<div class="modal-body"><div class="quickCmdContainer"><input class="form-control quickCmd" type="text" [(ngModel)]="quickCmd" autofocus placeholder="Ctrl + Enter send to all" (ngModelChange)="refresh()" (keyup.enter)="quickSend()" (keyup.control.enter)="quickSendAll()"><toggle class="ml-1" title="Automatically append a \'\\n\' char to the end" [(ngModel)]="appendCR"></toggle></div><div class="list-group mt-3 connections-list"><ng-container *ngFor="let group of childGroups"> <div class="list-group-item list-group-item-action d-flex align-items-center" (click)="clickGroup(group, $event)" title="Shift + Click send all to active tab\nCtrl + Shift + Click send all to all tabs"><div class="fa fa-fw fa-chevron-right" *ngIf="groupCollapsed[group.name]"></div><div class="fa fa-fw fa-chevron-down" *ngIf="!groupCollapsed[group.name]"></div><div class="ml-2">{{group.name || "Ungrouped"}}</div></div><ng-container *ngIf="!groupCollapsed[group.name]"><div class="list-group-item list-group-item-action pl-5 d-flex align-items-center" *ngFor="let cmd of group.cmds" (click)="send(cmd, $event)" title="Ctrl + Click send to all"><div class="mr-auto"><div>{{cmd.name}}</div><div class="text-muted">{{cmd.text}}{{cmd.appendCR ? "\\\\n" : ""}}</div></div></div></ng-container></ng-container></div></div>'},t.exports=t.exports.apply(t,[])}).call(this,n(/*! ./../../../node_modules/webpack/buildin/module.js */3)(t))},
/*!******************************************************!*\
  !*** ./src/components/quickCmdsModal.component.scss ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var o=n(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./quickCmdsModal.component.scss */18);t.exports="string"==typeof o?o:o.toString()},
/*!***************************************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/sass-loader/lib/loader.js!./src/components/quickCmdsModal.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){(t.exports=n(/*! ../../../node_modules/css-loader/lib/css-base.js */19)(void 0)).push([t.i,".list-group.connections-list {\n  display: block;\n  max-height: 70vh;\n  overflow-y: auto; }\n\n.quickCmd {\n  flex: 2 !important; }\n\n.quickCmdContainer {\n  display: flex !important; }\n",""])},
/*!**************************************************!*\
  !*** ../node_modules/css-loader/lib/css-base.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+new Buffer(JSON.stringify(t)).toString("base64")+" */"}(o),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},
/*!**************************************************!*\
  !*** ./src/components/promptModal.component.pug ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){(function(t){n(/*! ../../../node_modules/pug-runtime/index.js */4);t.exports=function(t){var e="";return e+='<div class="modal-body"><input class="form-control" [type]="password ? &quot;password&quot; : &quot;text&quot;" autofocus [(ngModel)]="value" #input [placeholder]="prompt" (keyup.enter)="ok()" (keyup.esc)="cancel()"></div>'},t.exports=t.exports.apply(t,[])}).call(this,n(/*! ./../../../node_modules/webpack/buildin/module.js */3)(t))},
/*!***********************************************************!*\
  !*** ./src/components/quickCmdsSettingsTab.component.pug ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){(function(t){n(/*! ../../../node_modules/pug-runtime/index.js */4);t.exports=function(t){var e="";return e+='<h3>Quick Commands</h3><div class="list-group mt-3 mb-3"><ng-container *ngFor="let group of childGroups"> <div class="list-group-item list-group-item-action d-flex align-items-center" (click)="groupCollapsed[group.name] = !groupCollapsed[group.name]"><div class="fa fa-fw fa-chevron-right" *ngIf="groupCollapsed[group.name]"></div><div class="fa fa-fw fa-chevron-down" *ngIf="!groupCollapsed[group.name]"></div><span class="ml-3 mr-auto">{{group.name || "Ungrouped"}}</span><button class="btn btn-outline-info ml-2" (click)="editGroup(group)"><i class="fa fa-pencil"></i></button><button class="btn btn-outline-danger ml-1" (click)="deleteGroup(group)"><i class="fa fa-trash-o"></i></button></div><ng-container *ngIf="!groupCollapsed[group.name]"><div class="list-group-item pl-5 d-flex align-items-center" *ngFor="let cmd of group.cmds"> <div class="mr-auto"><div>{{cmd.name}}</div><div class="text-muted">{{cmd.text}} {{cmd.appendCR ? "\\\\n" : ""}}</div></div><button class="btn btn-outline-info ml-2" (click)="editCommand(cmd)"><i class="fa fa-pencil"></i></button><button class="btn btn-outline-danger ml-1" (click)="deleteCommand(cmd)"><i class="fa fa-trash-o"></i></button></div></ng-container></ng-container></div><button class="btn btn-outline-primary" (click)="createCommand()"><div class="fa fa-fw fa-globe"></div><span class="ml-2">Add command</span></button>'},t.exports=t.exports.apply(t,[])}).call(this,n(/*! ./../../../node_modules/webpack/buildin/module.js */3)(t))},
/*!*******************************!*\
  !*** ./src/buttonProvider.ts ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function a(t){try{c(o.next(t))}catch(t){i(t)}}function s(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(a,s)}c((o=o.apply(t,e||[])).next())})};Object.defineProperty(e,"__esModule",{value:!0});const a=n(/*! @angular/core */0),s=n(/*! @angular/platform-browser */23),c=n(/*! @ng-bootstrap/ng-bootstrap */1),l=n(/*! terminus-core */2),u=n(/*! ./components/quickCmdsModal.component */7);let d=class extends l.ToolbarButtonProvider{constructor(t,e,n){super(),this.ngbModal=t,this.domSanitizer=e,n.matchedHotkey.subscribe(t=>i(this,void 0,void 0,function*(){"qc"===t&&this.activate()}))}activate(){this.ngbModal.open(u.QuickCmdsModalComponent)}provide(){return[{icon:this.domSanitizer.bypassSecurityTrustHtml(n(/*! ./icons/keyboard.svg */24)),weight:5,title:"Quick commands",touchBarNSImage:"NSTouchBarComposeTemplate",click:()=>i(this,void 0,void 0,function*(){this.activate()})}]}};d=o([a.Injectable(),r("design:paramtypes",[c.NgbModal,s.DomSanitizer,l.HotkeysService])],d),e.ButtonProvider=d},
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){t.exports=s},
/*!********************************!*\
  !*** ./src/icons/keyboard.svg ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){t.exports='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><path d="M286.1,422.2h-79.4c-16.2,0-29.4-13.2-29.4-29.4v-54.4c0-16.2,13.2-29.4,29.4-29.4h79.4c16.2,0,29.4,13.2,29.4,29.4v54.4C315.5,409,302.3,422.2,286.1,422.2z"></path><path d="M455.2,422.2h-79.4c-16.2,0-29.4-13.2-29.4-29.4v-54.4c0-16.2,13.2-29.4,29.4-29.4h79.4c16.2,0,29.4,13.2,29.4,29.4v54.4C484.6,409,471.3,422.2,455.2,422.2z"></path><path d="M624.2,422.2h-79.4c-16.2,0-29.4-13.2-29.4-29.4v-54.4c0-16.2,13.2-29.4,29.4-29.4h79.4c16.2,0,29.4,13.2,29.4,29.4v54.4C653.6,409,640.4,422.2,624.2,422.2z"></path><path d="M793.2,422.2h-79.4c-16.2,0-29.4-13.2-29.4-29.4v-54.4c0-16.2,13.2-29.4,29.4-29.4h79.4c16.2,0,29.4,13.2,29.4,29.4v54.4C822.6,409,809.4,422.2,793.2,422.2z"></path><path d="M305,573.6h-79.4c-16.2,0-29.4-13.2-29.4-29.4v-54.4c0-16.2,13.2-29.4,29.4-29.4H305c16.2,0,29.4,13.2,29.4,29.4v54.4C334.4,560.4,321.2,573.6,305,573.6z"></path><path d="M461.5,573.6h-79.4c-16.2,0-29.4-13.2-29.4-29.4v-54.4c0-16.2,13.2-29.4,29.4-29.4h79.4c16.2,0,29.4,13.2,29.4,29.4v54.4C490.9,560.4,477.6,573.6,461.5,573.6z"></path><path d="M617.9,573.6h-79.4c-16.2,0-29.4-13.2-29.4-29.4v-54.4c0-16.2,13.2-29.4,29.4-29.4h79.4c16.2,0,29.4,13.2,29.4,29.4v54.4C647.3,560.4,634.1,573.6,617.9,573.6z"></path><path d="M774.4,573.6H695c-16.2,0-29.4-13.2-29.4-29.4v-54.4c0-16.2,13.2-29.4,29.4-29.4h79.4c16.2,0,29.4,13.2,29.4,29.4v54.4C803.8,560.4,790.6,573.6,774.4,573.6z"></path><path d="M741.1,732.1H258.9c-16.2,0-29.4-13.2-29.4-29.4v-35.3c0-16.2,13.2-29.4,29.4-29.4h482.2c16.2,0,29.4,13.2,29.4,29.4v35.3C770.5,718.9,757.3,732.1,741.1,732.1z"></path><path d="M500,39.4c62.2,0,122.5,12.2,179.3,36.2c54.8,23.2,104.1,56.4,146.4,98.7s75.5,91.6,98.7,146.4c24,56.8,36.2,117.1,36.2,179.3c0,62.2-12.2,122.5-36.2,179.3c-23.2,54.8-56.4,104.1-98.7,146.4s-91.6,75.5-146.4,98.7c-56.8,24-117.1,36.2-179.3,36.2c-62.2,0-122.5-12.2-179.3-36.2c-54.8-23.2-104.1-56.4-146.4-98.7s-75.5-91.6-98.7-146.4c-24-56.8-36.2-117.1-36.2-179.3c0-62.2,12.2-122.5,36.2-179.3c23.2-54.8,56.4-104.1,98.7-146.4s91.6-75.5,146.4-98.7C377.5,51.6,437.8,39.4,500,39.4 M500,10C229.4,10,10,229.4,10,500s219.4,490,490,490c270.6,0,490-219.4,490-490S770.6,10,500,10L500,10z"></path></g></svg>'},
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n(/*! terminus-core */2);e.QuickCmdsConfigProvider=class extends o.ConfigProvider{constructor(){super(...arguments),this.defaults={qc:{cmds:[]},hotkeys:{qc:["Alt-Q"]}},this.platformDefaults={}}}},
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};Object.defineProperty(e,"__esModule",{value:!0});const r=n(/*! @angular/core */0),i=n(/*! terminus-settings */5),a=n(/*! ./components/quickCmdsSettingsTab.component */8);let s=class extends i.SettingsTabProvider{constructor(){super(...arguments),this.id="qc",this.title="Quick Commands"}getComponentType(){return a.QuickCmdsSettingsTabComponent}};s=o([r.Injectable()],s),e.QuickCmdsSettingsTabProvider=s}])});
//# sourceMappingURL=index.js.map