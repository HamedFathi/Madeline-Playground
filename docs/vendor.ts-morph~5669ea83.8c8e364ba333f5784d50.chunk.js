(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"+g31":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=r("EboW"),n=r("1hU1"),o=r("qYB5"),s=r("ZZXi"),a=r("uA/F"),u=r("dQgo");t.ExportableNode=function(e){return function(e){return class extends e{setIsDefaultExport(e){if(e===this.isDefaultExport())return this;if(e&&!o.TypeGuards.isSourceFile(this.getParentOrThrow()))throw new i.InvalidOperationError("The parent must be a source file in order to set this node as a default export.");const t=this.getSourceFile(),r=t.getDefaultExportSymbol();if(null!=r&&t.removeDefaultExport(r),!e)return this;if(o.TypeGuards.hasName(this)&&function(){return!!(o.TypeGuards.isEnumDeclaration(this)||o.TypeGuards.isNamespaceDeclaration(this)||o.TypeGuards.isTypeAliasDeclaration(this))||!(!o.TypeGuards.isAmbientableNode(this)||!this.isAmbient())}.call(this)){const e=this.getFirstAncestorByKindOrThrow(n.SyntaxKind.SyntaxList),t=this.getName();e.insertChildText(this.getChildIndex()+1,e=>{e.newLine().write(`export default ${t};`)})}else this.addModifier("export"),this.addModifier("default");return this}setIsExported(e){return o.TypeGuards.isSourceFile(this.getParentOrThrow())&&this.toggleModifier("default",!1),this.toggleModifier("export",e),this}set(t){return s.callBaseSet(e.prototype,this,t),null!=t.isExported&&this.setIsExported(t.isExported),null!=t.isDefaultExport&&this.setIsDefaultExport(t.isDefaultExport),this}getStructure(){return a.callBaseGetStructure(e.prototype,this,{isExported:this.hasExportKeyword(),isDefaultExport:this.hasDefaultKeyword()})}}}(u.ExportGetableNode(e))}},"1atn":function(e,t,r){"use strict";function i(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),i(r("+g31")),i(r("dQgo"))},"NX/f":function(e,t,r){"use strict";function i(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),i(r("P4BQ")),i(r("ZCcX")),i(r("srAB")),i(r("iuQH"))},P4BQ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=r("qYB5");t.getBodyText=function(e,t){return e.newLineIfLastNot(),("string"!=typeof t||t.length>0)&&e.indentBlock(()=>{i.printTextFromStringOrWriter(e,t)}),e.newLineIfLastNot(),e.write(""),e.toString()}},ZCcX:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=r("qYB5");t.getBodyTextWithoutLeadingIndentation=function(e){const t=e._sourceFile,r=e.getChildSyntaxList()||e,n=r.getNonWhitespaceStart(),o=Math.max(n,r._getTrailingTriviaNonWhitespaceEnd());if(0===o-n)return"";const s=t.getFullText().substring(n,o);return i.StringUtils.removeIndentation(s,{indentSizeInSpaces:e._context.manipulationSettings._getIndentSizeInSpaces(),isInStringAtPos:e=>t.isInStringAtPos(e+n)})}},dQgo:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=r("EboW"),n=r("1hU1"),o=r("qYB5");r("07Wq");function s(){throw new i.NotImplementedError("Not implemented situation where node was not a ModifierableNode.")}t.ExportGetableNode=function(e){return class extends e{hasExportKeyword(){return null!=this.getExportKeyword()}getExportKeyword(){if(o.TypeGuards.isVariableDeclaration(this)){const e=this.getVariableStatement();return null==e?void 0:e.getExportKeyword()}return o.TypeGuards.isModifierableNode(this)?this.getFirstModifierByKind(n.SyntaxKind.ExportKeyword):s()}getExportKeywordOrThrow(){return i.throwIfNullOrUndefined(this.getExportKeyword(),"Expected to find an export keyword.")}hasDefaultKeyword(){return null!=this.getDefaultKeyword()}getDefaultKeyword(){if(o.TypeGuards.isVariableDeclaration(this)){const e=this.getVariableStatement();return null==e?void 0:e.getDefaultKeyword()}return o.TypeGuards.isModifierableNode(this)?this.getFirstModifierByKind(n.SyntaxKind.DefaultKeyword):s()}getDefaultKeywordOrThrow(){return i.throwIfNullOrUndefined(this.getDefaultKeyword(),"Expected to find a default keyword.")}isExported(){if(this.hasExportKeyword())return!0;const e=this.getSymbol(),t=this.getSourceFile().getSymbol();return null!=e&&null!=t&&t.getExports().some(t=>t===e||t.getAliasedSymbol()===e)}isDefaultExport(){if(this.hasDefaultKeyword())return!0;const e=this.getSymbol();if(null==e)return!1;const t=this.getSourceFile().getDefaultExportSymbol();return null!=t&&(e===t||e===t.getAliasedSymbol())}isNamedExport(){const e=this.getSymbol(),t=this.getSourceFile().getSymbol();return null!=e&&null!=t&&(!function(){const r=t.getExport("default");return null!=r&&(e===r||e===r.getAliasedSymbol())}()&&t.getExports().some(t=>t===e||t.getAliasedSymbol()===e))}}}},iuQH:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=r("lq8x"),n=r("1hU1"),o=r("P4BQ");t.setBodyTextForNode=function(e,t){const r=o.getBodyText(e._getWriterWithIndentation(),t),s=e.getFirstChildByKindOrThrow(n.SyntaxKind.OpenBraceToken),a=e.getFirstChildByKindOrThrow(n.SyntaxKind.CloseBraceToken);i.insertIntoParentTextRange({insertPos:s.getEnd(),newText:r,parent:e,replacing:{textLength:a.getStart()-s.getEnd()}})}},srAB:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=r("qYB5");t.hasBlock=function(e){return i.TypeGuards.isClassDeclaration(e)||i.TypeGuards.isNamespaceDeclaration(e)||i.TypeGuards.isInterfaceDeclaration(e)||i.TypeGuards.isEnumDeclaration(e)||i.TypeGuards.hasBody(e)}}}]);
//# sourceMappingURL=vendor.ts-morph~5669ea83.8c8e364ba333f5784d50.bundle.map