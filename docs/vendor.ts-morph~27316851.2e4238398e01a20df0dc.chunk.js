(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"+Y0U":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("thrA");t.ObjectBindingPattern=class extends r.Node{getElements(){return this.compilerNode.elements.map(e=>this._getNodeFromCompilerNode(e))}}},"+y+h":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("qYB5");function i(e){if(r.TypeGuards.isIdentifier(e))return e;const t=e.getNodeProperty("name");return null!=t?t:r.TypeGuards.isExportableNode(e)&&e.getDefaultKeyword()||e}t.ReferenceFindableNode=function(e){return class extends e{findReferences(){return this._context.languageService.findReferences(i(this))}findReferencesAsNodes(){return this._context.languageService.findReferencesAsNodes(i(this))}}}},"3QJT":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("EboW"),i=n("lq8x"),o=n("1hU1"),s=n("qYB5"),a=n("ZZXi"),d=n("bhkZ"),l=n("uA/F");t.InitializerExpressionableNode=function(e){return function(e){return class extends e{removeInitializer(){const e=this.getInitializer();if(null==e)return this;const t=e.getPreviousSiblingIfKindOrThrow(o.SyntaxKind.EqualsToken);return i.removeChildren({children:[t,e],removePrecedingSpaces:!0}),this}setInitializer(e){const t=s.getTextFromStringOrWriter(this._getWriterWithQueuedChildIndentation(),e);r.throwIfWhitespaceOrNotString(t,"textOrWriterFunction"),this.hasInitializer()&&this.removeInitializer();const n=this.getLastChildIfKind(o.SyntaxKind.SemicolonToken);return i.insertIntoParentTextRange({insertPos:null!=n?n.getPos():this.getEnd(),parent:this,newText:` = ${t}`}),this}set(t){return a.callBaseSet(e.prototype,this,t),null!=t.initializer?this.setInitializer(t.initializer):t.hasOwnProperty("initializer")&&this.removeInitializer(),this}getStructure(){const t=this.getInitializer();return l.callBaseGetStructure(e.prototype,this,{initializer:t?t.getText():void 0})}}}(d.InitializerExpressionGetableNode(e))}},"5MGd":function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n("3QJT")),r(n("bhkZ"))},"9HTs":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("+y+h"),i=n("JpdR"),o=n("XmUZ");t.BindingNamedNode=function(e){const t=r.ReferenceFindableNode(i.RenameableNode(e));return o.NamedNodeBase(t)}},"BS+w":function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n("XD8K")),r(n("vGfz")),r(n("+Y0U"))},CSWf:function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n("9C2+")),r(n("Mlcg")),r(n("RuQs")),r(n("rYsG")),r(n("nvvb")),r(n("+aqM")),r(n("eoLu")),r(n("W3Zz")),r(n("5bh6")),r(n("1atn")),r(n("Mbdw")),r(n("GQWe")),r(n("/mc4")),r(n("vwQd")),r(n("5MGd")),r(n("aHW0")),r(n("gf8n")),r(n("07Wq")),r(n("nV4X")),r(n("awIF")),r(n("DzRR")),r(n("X4e7")),r(n("9UMx")),r(n("MST6")),r(n("wW2g")),r(n("dE69")),r(n("Z3mP")),r(n("COiP")),r(n("j9cp")),r(n("ja9o")),r(n("d3mA")),r(n("034e")),r(n("EzE/")),r(n("CDCT"))},GAN5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("+y+h"),i=n("JpdR"),o=n("XmUZ");t.NamedNode=function(e){const t=i.RenameableNode(r.ReferenceFindableNode(e));return o.NamedNodeBase(t)}},JpdR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("EboW"),i=n("qYB5"),o=n("lq8x");t.RenameableNode=function(e){return class extends e{rename(e,t){const n=this._context.languageService;return function(s){if(r.throwIfWhitespaceOrNotString(e,"newName"),s.getText()===e)return;const a=n.findRenameLocations(s,t),d=new i.KeyValueCache;for(const e of a){d.getOrCreate(e.getSourceFile(),()=>[]).push(e)}for(const[t,n]of d.getEntries())o.replaceSourceFileTextForRename({sourceFile:t,renameLocations:n,newName:e})}(function(e){if(i.TypeGuards.isIdentifier(e))return e;if(null!=e.getNameNode){const t=e.getNameNode();if(r.throwIfNullOrUndefined(t,"Expected to find a name node when renaming."),i.TypeGuards.isArrayBindingPattern(t)||i.TypeGuards.isObjectBindingPattern(t))throw new r.NotImplementedError(`Not implemented renameable scenario for ${t.getKindName()}.`);return t}throw new r.NotImplementedError(`Not implemented renameable scenario for ${e.getKindName()}`)}(this)),this}}}},XD8K:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("thrA");t.ArrayBindingPattern=class extends r.Node{getElements(){return this.compilerNode.elements.map(e=>this._getNodeFromCompilerNode(e))}}},XmUZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("ZZXi"),i=n("uA/F");t.NamedNodeBase=function(e){return class extends e{getNameNode(){return this._getNodeFromCompilerNode(this.compilerNode.name)}getName(){return this.getNameNode().getText()}set(t){return r.callBaseSet(e.prototype,this,t),null!=t.name&&this.getNameNode().replaceWithText(t.name),this}getStructure(){return i.callBaseGetStructure(e.prototype,this,{name:this.getName()})}}}},awIF:function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n("9HTs")),r(n("nSu1")),r(n("XmUZ")),r(n("GAN5")),r(n("xUdh")),r(n("+y+h")),r(n("JpdR"))},bhkZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("EboW"),i=n("qYB5");t.InitializerExpressionGetableNode=function(e){return class extends e{hasInitializer(){return null!=this.compilerNode.initializer}getInitializerIfKindOrThrow(e){return r.throwIfNullOrUndefined(this.getInitializerIfKind(e),`Expected to find an initializer of kind '${i.getSyntaxKindName(e)}'.`)}getInitializerIfKind(e){const t=this.getInitializer();if(null==t||t.getKind()===e)return t}getInitializerOrThrow(){return r.throwIfNullOrUndefined(this.getInitializer(),"Expected to find an initializer.")}getInitializer(){return this._getNodeFromCompilerNodeIfExists(this.compilerNode.initializer)}}}},nSu1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("EboW"),i=n("lq8x"),o=n("1hU1"),s=n("qYB5"),a=n("ZZXi"),d=n("+y+h"),l=n("uA/F"),u=n("JpdR");function c(e,t){const n=e.getFirstChildByKindOrThrow(o.SyntaxKind.OpenParenToken);i.insertIntoParentTextRange({insertPos:n.getStart(),newText:" "+t,parent:e})}t.NameableNode=function(e){return function(e){return class extends e{getNameNode(){return this._getNodeFromCompilerNodeIfExists(this.compilerNode.name)}getNameNodeOrThrow(){return r.throwIfNullOrUndefined(this.getNameNode(),"Expected to have a name node.")}getName(){const e=this.getNameNode();return null==e?void 0:e.getText()}getNameOrThrow(){return r.throwIfNullOrUndefined(this.getName(),"Expected to have a name.")}rename(t){if(t===this.getName())return this;if(s.StringUtils.isNullOrWhitespace(t))return this.removeName(),this;return null==this.getNameNode()?c(this,t):e.prototype.rename.call(this,t),this}removeName(){const e=this.getNameNode();return null==e?this:(i.removeChildren({children:[e],removePrecedingSpaces:!0}),this)}set(t){if(a.callBaseSet(e.prototype,this,t),null!=t.name){r.throwIfWhitespaceOrNotString(t.name,"structure.name");const e=this.getNameNode();null==e?c(this,t.name):e.replaceWithText(t.name)}else t.hasOwnProperty("name")&&this.removeName();return this}getStructure(){return l.callBaseGetStructure(e.prototype,this,{name:this.getName()})}}}(d.ReferenceFindableNode(u.RenameableNode(e)))}},vGfz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("EboW"),i=n("CSWf"),o=n("thrA");t.BindingElementBase=i.InitializerExpressionableNode(i.BindingNamedNode(o.Node));t.BindingElement=class extends t.BindingElementBase{getDotDotDotTokenOrThrow(){return r.throwIfNullOrUndefined(this.getDotDotDotToken(),"Expected to find a dot dot dot token (...).")}getDotDotDotToken(){return this._getNodeFromCompilerNodeIfExists(this.compilerNode.dotDotDotToken)}getPropertyNameNodeOrThrow(){return r.throwIfNullOrUndefined(this.getPropertyNameNode(),"Expected to find a property name node.")}getPropertyNameNode(){return this._getNodeFromCompilerNodeIfExists(this.compilerNode.propertyName)}}},xUdh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("+y+h"),i=n("JpdR"),o=n("XmUZ");t.PropertyNamedNode=function(e){const t=r.ReferenceFindableNode(i.RenameableNode(e));return o.NamedNodeBase(t)}}}]);
//# sourceMappingURL=vendor.ts-morph~27316851.2e4238398e01a20df0dc.bundle.map