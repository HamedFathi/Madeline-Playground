(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"3zTG":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("CSWf"),o=a("thrA");t.NamespaceImportBase=n.RenameableNode(o.Node);t.NamespaceImport=class extends t.NamespaceImportBase{setName(e){const t=this.getNameNode();return t.getText()===e?this:(t.replaceWithText(e),this)}getName(){return this.getNameNode().getText()}getNameNode(){return this._getNodeFromCompilerNode(this.compilerNode.name)}}},"4j7S":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("thrA");t.NamedExportsBase=n.Node;t.NamedExports=class extends t.NamedExportsBase{getElements(){return this.compilerNode.elements.map(e=>this._getNodeFromCompilerNode(e))}}},MHBn:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("1hU1"),o=a("EboW"),r=a("qYB5");t.NamespaceChildableNode=function(e){return class extends e{getParentNamespaceOrThrow(){return o.throwIfNullOrUndefined(this.getParentNamespace(),"Expected to find the parent namespace.")}getParentNamespace(){let e=this.getParentOrThrow();if(r.TypeGuards.isModuleBlock(e)){for(;e.getParentOrThrow().getKind()===n.SyntaxKind.ModuleDeclaration;)e=e.getParentOrThrow();return e}}}}},YmKz:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Namespace="namespace",e.Module="module",e.Global="global"}(t.NamespaceDeclarationKind||(t.NamespaceDeclarationKind={}))},e9c2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("thrA");t.NamedImportsBase=n.Node;t.NamedImports=class extends t.NamedImportsBase{getElements(){return this.compilerNode.elements.map(e=>this._getNodeFromCompilerNode(e))}}},rlfN:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("EboW"),o=a("lq8x"),r=a("ixQ4"),i=a("1hU1"),s=a("CSWf"),d=a("qYB5"),l=a("uA/F"),c=a("ZZXi"),m=a("DM+i"),N=a("MHBn"),p=a("YmKz");t.NamespaceDeclarationBase=s.ModuledNode(s.UnwrappableNode(s.TextInsertableNode(s.BodiedNode(N.NamespaceChildableNode(m.StatementedNode(s.JSDocableNode(s.AmbientableNode(s.ExportableNode(s.ModifierableNode(s.NamedNode(m.Statement)))))))))));function u(e){e.getDeclarationKind()===p.NamespaceDeclarationKind.Global&&e.setDeclarationKind(p.NamespaceDeclarationKind.Namespace)}t.NamespaceDeclaration=class extends t.NamespaceDeclarationBase{getName(){return this.getNameNodes().map(e=>e.getText()).join(".")}setName(e){const t=this.getNameNodes(),a="Please open an issue if you really need this and I'll up the priority.";if(t.length>1)throw new n.NotImplementedError(`Not implemented to set a namespace name that uses dot notation. ${a}`);if(e.indexOf(".")>=0)throw new n.NotImplementedError(`Not implemented to set a namespace name to a name containing a period. ${a}`);return"global"!==e&&u(this),t[0].replaceWithText(e),this}rename(e){const t=this.getNameNodes();if(t.length>1)throw new n.NotSupportedError("Cannot rename a namespace name that uses dot notation. Rename the individual nodes via .getNameNodes()");if(e.indexOf(".")>=0)throw new n.NotSupportedError("Cannot rename a namespace name to a name containing a period.");return"global"!==e&&u(this),t[0].rename(e),this}getNameNodes(){const e=[];let t=this;do{e.push(this._getNodeFromCompilerNode(t.compilerNode.name)),t=t.getFirstChildByKind(i.SyntaxKind.ModuleDeclaration)}while(null!=t);return e}hasNamespaceKeyword(){return this.getDeclarationKind()===p.NamespaceDeclarationKind.Namespace}hasModuleKeyword(){return this.getDeclarationKind()===p.NamespaceDeclarationKind.Module}setDeclarationKind(e){if(this.getDeclarationKind()===e)return this;if(e===p.NamespaceDeclarationKind.Global){const e=this.getDeclarationKindKeyword();this.getNameNode().replaceWithText("global"),null!=e&&o.removeChildren({children:[e],removeFollowingNewLines:!0,removeFollowingSpaces:!0})}else{const t=this.getDeclarationKindKeyword();null!=t?t.replaceWithText(e):o.insertIntoParentTextRange({parent:this,insertPos:this.getNameNode().getStart(),newText:e+" "})}return this}getDeclarationKind(){const e=this.getDeclarationKindKeyword();return null==e?p.NamespaceDeclarationKind.Global:e.getKind()===i.SyntaxKind.NamespaceKeyword?p.NamespaceDeclarationKind.Namespace:p.NamespaceDeclarationKind.Module}getDeclarationKindKeyword(){const e=this.getFirstChild(e=>e.getKind()===i.SyntaxKind.NamespaceKeyword||e.getKind()===i.SyntaxKind.ModuleKeyword);if(null!=e)return e}set(e){return null!=e.name&&"global"!==e.name&&u(this),c.callBaseSet(t.NamespaceDeclarationBase.prototype,this,e),null!=e.declarationKind&&this.setDeclarationKind(e.declarationKind),this}getStructure(){return l.callBaseGetStructure(t.NamespaceDeclarationBase.prototype,this,{kind:r.StructureKind.Namespace,declarationKind:this.getDeclarationKind()})}_getInnerBody(){let e=this.getBody();for(;d.TypeGuards.isBodiedNode(e)&&null==e.compilerNode.statements;)e=e.getBody();return e}}}}]);
//# sourceMappingURL=vendor.ts-morph~390050a1.7bc82762edabbce34d86.bundle.map