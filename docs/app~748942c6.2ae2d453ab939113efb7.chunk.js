(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(t,e,n){n("GAND"),n("GmYv"),t.exports=n("b9nV")},1:function(t,e){},10:function(t,e){},11:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},6:function(t,e){},7:function(t,e){},8:function(t,e){},9:function(t,e){},app:function(t,e,n){"use strict";n.r(e),n.d(e,"App",function(){return a});var i=n("zL62"),o=n("aurelia-framework"),s=function(t,e,n,i){var o,s=arguments.length,r=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,n,r):o(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},r=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(t){this.taskQueue=t,this.myTsJsSource='/**\n* This is a class.\n* Just for test!\n*\n* @class Greeter - A class with ctor and a method.\n*/\nclass Greeter {\n  greeting: string;\n  constructor(message: string) {\n    this.greeting = message;\n  }\n  // Just says hello :)\n  greet() {\n    return "Hello, " + this.greeting;\n  }\n}',this.convertedResult=""}return t.prototype.convert=function(){var t=(new i.SourceFileExtractor).extractFromText(this.myTsJsSource),e=JSON.stringify(t,null,2);this.convertedResult=e},t.prototype.attached=function(){var t=this;this.taskQueue.queueTask(function(){return t.afterAttached()})},t.prototype.afterAttached=function(){this.convert()},t=s([Object(o.e)(o.b),r("design:paramtypes",[o.b])],t)}()},"app.html":function(t,e){t.exports='<template>\n  <div class="container-fluid p-3 mb-5">\n    <div>\n      <img src="https://i.ibb.co/ypX3gC3/Madeline2.png">\n      <p>\n        An experimental library to extract information from Javascript/Typescript source files.\n      </p>\n    </div>\n    <div class="row">\n      <div class="col-6">\n        <ul class="nav nav-tabs" id="myTsTab" role="tablist">\n          <li class="nav-item">\n            <a class="nav-link active" id="ts-tab" data-toggle="tab" href="#ts" role="tab" aria-controls="ts"\n              aria-selected="true">Javascript/Typescript</a>\n          </li>\n        </ul>\n        <div class="tab-content" id="myTsTabContent">\n          <div class="tab-pane fade show active" id="ts" role="tabpanel" aria-labelledby="ts-tab">\n            <br>\n            <ace-editor source.bind="myTsJsSource"></ace-editor>\n            <br />\n            <button class="btn btn-primary" click.delegate="convert()">\n              Convert\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class="col-6" style="height: 150px !important">\n        <ul class="nav nav-tabs" id="myJsonTab" role="tablist">\n          <li class="nav-item">\n            <a class="nav-link active" id="json-tab" data-toggle="tab" href="#json" role="tab" aria-controls="json"\n              aria-selected="true">Result</a>\n          </li>\n        </ul>\n        <div class="tab-content" id="myJsonTabContent">\n          <div class="tab-pane fade show active" id="json" role="tabpanel" aria-labelledby="json-tab">\n            <br>\n            <ace-editor type.bind="json" source.bind="convertedResult"></ace-editor>\n          </div>\n        </div>\n      </div>\n    </div>\n</template>\n'},main:function(t,e,n){"use strict";var i={debug:!1,testing:!1};n("70NS");function o(t){t.use.standardConfiguration().feature("resources/index"),t.use.developmentLogging(i.debug?"debug":"warn"),i.testing&&t.use.plugin("aurelia-testing"),t.start().then(function(){return t.setRoot("app")})}n.d(e,"configure",function(){return o})},"resources/ace-editor":function(t,e,n){"use strict";n.r(e),n.d(e,"AceEditorCustomElement",function(){return r});var i=n("aurelia-framework"),o=function(t,e,n,i){var o,s=arguments.length,r=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,n,r):o(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},s=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(t,e){this.element=t,this.taskQueue=e,this.source="",this.type="ts",this.manualUpdate=!1}return t.prototype.attached=function(){var t=this;this.taskQueue.queueTask(function(){return t.editorJsTs()})},t.prototype.sourceChanged=function(t){t&&this.editor&&!this.manualUpdate&&(this.editor.setValue(t),this.editor.clearSelection()),this.manualUpdate=!1},t.prototype.editorJsTs=function(){this.initEditor(),this.setEditorType(),this.source&&(this.editor.setValue(this.source),this.editor.clearSelection())},t.prototype.initEditor=function(){var t=this;this.editor=window.ace.edit(this.editorElement),this.editor.setOptions({enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,showPrintMargin:!1,maxLines:25,fontSize:"100%"}),this.editor.setTheme("ace/theme/textmate"),this.editor.renderer.setOption("showLineNumbers",!1),this.editor.getSession().on("change",function(){t.source=t.editor.getValue(),t.manualUpdate=!0})},t.prototype.setEditorType=function(){"ts"===this.type&&this.editor.getSession().setMode("ace/mode/typescript"),"json"===this.type&&(this.editor.setReadOnly(!0),this.editor.getSession().setMode("ace/mode/json")),"html"===this.type&&this.editor.getSession().setMode("ace/mode/html")},o([Object(i.c)({defaultBindingMode:i.d.twoWay}),s("design:type",String)],t.prototype,"source",void 0),o([i.c,s("design:type",String)],t.prototype,"type",void 0),t=o([Object(i.e)(Element,i.b),s("design:paramtypes",[Element,i.b])],t)}()},"resources/ace-editor.html":function(t,e){t.exports='<template>\r\n  <div ref="editorElement"></div>\r\n</template>\r\n'},"resources/index":function(t,e,n){"use strict";n.r(e),n.d(e,"configure",function(){return i});n("aurelia-framework");function i(t){t.globalResources(["./ace-editor"])}}},[[0,1,91,83,82,55,75,60,63,49,64,53,66,78,62,54,69,95,79,85,59,52,58,81,93,84,74,50,90,73,94,71,72,61,76,80,70,77,96,57,87,88,51,86,56,68,89,67,92,65,30,31,40,38,37,39,35,36,19,25,24,26,27,3,2,41,42,29,47,45,46,48,43,20,22,17,34,23,21,33,4,5,6,7,8,9,10,11,12,13,14,15,16,18,28,32,44,97,100,101,102,99,103,105,104,98]]]);
//# sourceMappingURL=app~748942c6.2ae2d453ab939113efb7.bundle.map