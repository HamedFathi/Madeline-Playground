(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{"2gDG":function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n("9Mqy")),r(n("G5Vz")),r(n("2z8Y"))},"2z8Y":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("EboW"),i=n("lq8x"),a=n("NtI8"),o=n("1hU1"),s=n("CSWf"),l=n("thrA"),d=n("G5Vz");t.VariableDeclarationListBase=s.ModifierableNode(l.Node);t.VariableDeclarationList=class extends t.VariableDeclarationListBase{getDeclarations(){return this.compilerNode.declarations.map(e=>this._getNodeFromCompilerNode(e))}getDeclarationKind(){const e=this.compilerNode.flags;return e&o.ts.NodeFlags.Let?d.VariableDeclarationKind.Let:e&o.ts.NodeFlags.Const?d.VariableDeclarationKind.Const:d.VariableDeclarationKind.Var}getDeclarationKindKeyword(){const e=this.getDeclarationKind();switch(e){case d.VariableDeclarationKind.Const:return this.getFirstChildByKindOrThrow(o.SyntaxKind.ConstKeyword);case d.VariableDeclarationKind.Let:return this.getFirstChildByKindOrThrow(o.SyntaxKind.LetKeyword);case d.VariableDeclarationKind.Var:return this.getFirstChildByKindOrThrow(o.SyntaxKind.VarKeyword);default:return r.throwNotImplementedForNeverValueError(e)}}setDeclarationKind(e){if(this.getDeclarationKind()===e)return this;const t=this.getDeclarationKindKeyword();return i.insertIntoParentTextRange({insertPos:t.getStart(),newText:e,parent:this,replacing:{textLength:t.getWidth()}}),this}addDeclaration(e){return this.addDeclarations([e])[0]}addDeclarations(e){return this.insertDeclarations(this.getDeclarations().length,e)}insertDeclaration(e,t){return this.insertDeclarations(e,[t])[0]}insertDeclarations(e,t){const n=this._getWriterWithQueuedChildIndentation(),r=new a.CommaSeparatedStructuresPrinter(this._context.structurePrinterFactory.forVariableDeclaration()),s=this.compilerNode.declarations.length;return e=i.verifyAndGetIndex(e,s),r.printText(n,t),i.insertIntoCommaSeparatedNodes({parent:this.getFirstChildByKindOrThrow(o.SyntaxKind.SyntaxList),currentNodes:this.getDeclarations(),insertIndex:e,newText:n.toString()}),i.getNodesToReturn(s,this.getDeclarations(),e,!1)}}},"9Mqy":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("EboW"),i=n("lq8x"),a=n("ixQ4"),o=n("qYB5"),s=n("1hU1"),l=n("CSWf"),d=n("ZZXi"),c=n("thrA"),u=n("uA/F");t.VariableDeclarationBase=l.ExportGetableNode(l.ExclamationTokenableNode(l.TypedNode(l.InitializerExpressionableNode(l.BindingNamedNode(c.Node)))));t.VariableDeclaration=class extends t.VariableDeclarationBase{remove(){const e=this.getParentOrThrow();switch(e.getKind()){case s.SyntaxKind.VariableDeclarationList:!function(t){const n=e.getParentIfKindOrThrow(s.SyntaxKind.VariableStatement);1===n.getDeclarations().length?n.remove():i.removeCommaSeparatedChild(t)}(this);break;case s.SyntaxKind.CatchClause:t=this,i.removeChildren({children:[t.getPreviousSiblingIfKindOrThrow(s.SyntaxKind.OpenParenToken),t,t.getNextSiblingIfKindOrThrow(s.SyntaxKind.CloseParenToken)],removePrecedingSpaces:!0});break;default:throw new r.NotImplementedError(`Not implemented for syntax kind: ${e.getKindName()}`)}var t}getVariableStatementOrThrow(){return r.throwIfNullOrUndefined(this.getVariableStatement(),"Expected the grandparent to be a variable statement.")}getVariableStatement(){const e=this.getParentOrThrow().getParentOrThrow();return o.TypeGuards.isVariableStatement(e)?e:void 0}set(e){return d.callBaseSet(t.VariableDeclarationBase.prototype,this,e),this}getStructure(){return u.callBaseGetStructure(t.VariableDeclarationBase.prototype,this,{kind:a.StructureKind.VariableDeclaration})}}},G5Vz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Var="var",e.Let="let",e.Const="const"}(t.VariableDeclarationKind||(t.VariableDeclarationKind={}))},X0Sq:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("1hU1");t.isComment=function(e){return e.kind===r.ts.SyntaxKind.SingleLineCommentTrivia||e.kind===r.ts.SyntaxKind.MultiLineCommentTrivia}},ejOz:function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n("cNui")),r(n("7axT")),r(n("6wSo")),r(n("Ru0v"))},"gTp+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hasParsedTokens=function(e){return null!=e._children}},iQlM:function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n("m3ZL")),r(n("ubbB")),r(n("gTp+")),r(n("X0Sq"))},m3ZL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("1hU1"),i=n("EboW"),a=n("qYB5"),o=n("R/At");var s;!function(e){e[e.SingleLine=0]="SingleLine",e[e.MultiLine=1]="MultiLine",e[e.JsDoc=2]="JsDoc"}(s||(s={}));const l=new WeakMap,d=new Set([r.SyntaxKind.SourceFile,r.SyntaxKind.Block,r.SyntaxKind.ModuleBlock,r.SyntaxKind.CaseClause,r.SyntaxKind.DefaultClause,r.SyntaxKind.ClassDeclaration,r.SyntaxKind.InterfaceDeclaration,r.SyntaxKind.EnumDeclaration,r.SyntaxKind.ClassExpression,r.SyntaxKind.TypeLiteral,r.SyntaxKind.ObjectLiteralExpression]);class c{constructor(){}static getOrParseChildren(e,t){u(e)&&(e=e.parent);let n=l.get(e);return null==n&&(n=Array.from(function*(e,t){const n=t.text,l=function(){if(r.ts.isSourceFile(e)||r.ts.isBlock(e)||r.ts.isModuleBlock(e)||r.ts.isCaseClause(e)||r.ts.isDefaultClause(e))return e.statements;if(r.ts.isClassDeclaration(e)||r.ts.isClassExpression(e)||r.ts.isEnumDeclaration(e)||r.ts.isInterfaceDeclaration(e)||r.ts.isTypeLiteralNode(e)||r.ts.isClassExpression(e))return e.members;return r.ts.isObjectLiteralExpression(e)?e.properties:i.throwNotImplementedForNeverValueError(e)}(),d=function(){const n=function(){if(function(e){return null!=function(){const t=e;if(r.ts.isSourceFile(t)||r.ts.isBlock(t)||r.ts.isModuleBlock(t)||r.ts.isCaseClause(t)||r.ts.isDefaultClause(t))return t;return}()}(e))return o.CompilerCommentStatement;if(r.ts.isClassLike(e))return o.CompilerCommentClassElement;if(r.ts.isInterfaceDeclaration(e)||r.ts.isTypeLiteralNode(e))return o.CompilerCommentTypeElement;if(r.ts.isObjectLiteralExpression(e))return o.CompilerCommentObjectLiteralElement;if(r.ts.isEnumDeclaration(e))return o.CompilerCommentEnumMember;throw new i.NotImplementedError(`Not implemented comment node container type: ${a.getSyntaxKindName(e.kind)}`)}();return(r,i,a,o)=>new n(r,i,a,o,t,e)}();if(0===l.length){const n=c.getContainerBodyPos(e,t);yield*u(n,!1)}else{for(const e of l)yield*u(e.pos,!0),yield e;const e=l[l.length-1];yield*u(e.end,!1)}function*u(e,t){const i=e;c();const o=Array.from(function*(){for(;e<n.length;){const r=m();if(null!=r){if(r===s.JsDoc&&t)return;yield u(r),c()}else{if(!a.StringUtils.isWhitespace(n[e]))return;e++}}}()),l=n.length===e||"}"===n[e]?e:a.StringUtils.getLineStartFromPos(n,e);for(const e of o)e.end<=l&&(yield e);function c(){if(0===e)return;let t=a.StringUtils.getLineEndFromPos(n,e);for(;e<t;){const i=m();if(null!=i){if(u(i).kind===r.SyntaxKind.SingleLineCommentTrivia)return;t=a.StringUtils.getLineEndFromPos(n,e)}else{if(!a.StringUtils.isWhitespace(n[e])&&","!==n[e])return;e++}}for(;a.StringUtils.startsWithNewLine(n[e]);)e++}function u(t){if(t===s.SingleLine)return function(){const t=e;return function(){e+=2;for(;e<n.length&&"\n"!==n[e]&&"\r"!==n[e];)e++}(),d(i,t,e,r.SyntaxKind.SingleLineCommentTrivia)}();return function(t){const a=e;return function(t){e+=t?3:2;for(;e<n.length;){if("*"===n[e]&&"/"===n[e+1]){e+=2;break}e++}}(t),d(i,a,e,r.SyntaxKind.MultiLineCommentTrivia)}(t===s.JsDoc)}function m(){if("/"!==n[e])return;const t=n[e+1];return"/"===t?s.SingleLine:"*"===t?"*"===n[e+2]?s.JsDoc:s.MultiLine:void 0}}}(e,t)),l.set(e,n)),n}static shouldParseChildren(e){return d.has(e.kind)&&e.pos!==e.end}static hasParsedChildren(e){return u(e)&&(e=e.parent),l.has(e)}static isCommentStatement(e){return e._commentKind===o.CommentNodeKind.Statement}static isCommentClassElement(e){return e._commentKind===o.CommentNodeKind.ClassElement}static isCommentTypeElement(e){return e._commentKind===o.CommentNodeKind.TypeElement}static isCommentObjectLiteralElement(e){return e._commentKind===o.CommentNodeKind.ObjectLiteralElement}static isCommentEnumMember(e){return e._commentKind===o.CommentNodeKind.EnumMember}static getContainerBodyPos(e,t){return r.ts.isSourceFile(e)?0:r.ts.isClassDeclaration(e)||r.ts.isEnumDeclaration(e)||r.ts.isInterfaceDeclaration(e)||r.ts.isTypeLiteralNode(e)||r.ts.isClassExpression(e)||r.ts.isBlock(e)||r.ts.isModuleBlock(e)||r.ts.isObjectLiteralExpression(e)?n(e,r.SyntaxKind.OpenBraceToken):r.ts.isCaseClause(e)||r.ts.isDefaultClause(e)?n(e,r.SyntaxKind.ColonToken):i.throwNotImplementedForNeverValueError(e);function n(e,n){const r=e.getChildren(t).find(e=>e.kind===n);if(null==r)throw new i.NotImplementedError(`Unexpected scenario where a(n) ${a.getSyntaxKindName(n)} was not found.`);return r.end}}}function u(e){return e.kind===r.SyntaxKind.SyntaxList}t.CommentNodeParser=c},ubbB:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("1hU1"),i=n("m3ZL"),a=n("gTp+"),o=new WeakMap,s=new WeakMap;class l{static getContainerArray(e,t){return i.CommentNodeParser.getOrParseChildren(e,t)}static getCompilerChildrenFast(e,t){return a.hasParsedTokens(e)?l.getCompilerChildren(e,t):l.getCompilerForEachChildren(e,t)}static getCompilerForEachChildren(e,t){if(i.CommentNodeParser.shouldParseChildren(e)){let r=o.get(e);return null==r&&(d(r=n(),i.CommentNodeParser.getOrParseChildren(e,t)),o.set(e,r)),r}return n();function n(){const t=[];return e.forEachChild(e=>{t.push(e)}),t}}static getCompilerChildren(e,t){if(function(){if(e.kind!==r.ts.SyntaxKind.SyntaxList)return!1;const n=e.parent;return!!i.CommentNodeParser.shouldParseChildren(n)&&i.CommentNodeParser.getContainerBodyPos(n,t)===e.pos}()){let n=s.get(e);return null==n&&(d(n=[...e.getChildren(t)],i.CommentNodeParser.getOrParseChildren(e,t)),s.set(e,n)),n}return e.getChildren(t)}}function d(e,t){let n=0;for(const i of t)if(i.kind===r.SyntaxKind.SingleLineCommentTrivia||i.kind===r.SyntaxKind.MultiLineCommentTrivia){for(;n<e.length&&e[n].end<i.end;)n++;e.splice(n,0,i),n++}}t.ExtendedParser=l}}]);
//# sourceMappingURL=vendor.ts-morph~cc5f27b0.cc8ba9b3adfb4e975061.bundle.map