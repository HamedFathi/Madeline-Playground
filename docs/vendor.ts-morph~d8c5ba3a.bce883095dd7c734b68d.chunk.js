(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"0I9F":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}(r("nb7p"))},"96dJ":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=r("rViU");e.NodePrinter=class extends i.Printer{constructor(t){super(),this.factory=t}printTextWithoutTrivia(t,e){this.printTextInternal(t,e)}printText(t,e){this.printLeadingTrivia(t,e),t.closeComment(),this.printTextInternal(t,e),this.printTrailingTrivia(t,e)}printLeadingTrivia(t,e){const r=e.leadingTrivia;null!=r&&(this.printTrivia(t,r),t.isInComment()&&t.closeComment())}printTrailingTrivia(t,e){const r=e.trailingTrivia;null!=r&&this.printTrivia(t,r)}printTrivia(t,e){if(e instanceof Array)for(let r=0;r<e.length;r++)this.printTextOrWriterFunc(t,e[r]),r!==e.length-1&&t.newLineIfLastNot();else this.printTextOrWriterFunc(t,e)}}},"9FFF":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}(r("Yq46"))},"9VkS":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=r("96dJ"),n=r("AVmt");e.SetAccessorDeclarationStructurePrinter=class extends i.NodePrinter{constructor(t,e){super(t),this.options=e,this.multipleWriter=new n.BlankLineFormattingStructuresPrinter(this)}printTexts(t,e){this.multipleWriter.printText(t,e)}printTextInternal(t,e){this.factory.forJSDoc().printDocs(t,e.docs),this.factory.forDecorator().printTexts(t,e.decorators),this.factory.forModifierableNode().printText(t,e),t.write(`set ${e.name}`),this.factory.forTypeParameterDeclaration().printTextsWithBrackets(t,e.typeParameters),this.factory.forParameterDeclaration().printTextsWithParenthesis(t,e.parameters),this.factory.forReturnTypedNode().printText(t,e),this.options.isAmbient||e.isAbstract?t.write(";"):t.spaceIfLastNot().inlineBlock(()=>{this.factory.forStatementedNode(this.options).printText(t,e)})}}},Bnov:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=r("EboW"),n=new(r("ueNg").StructurePrinterFactory)(()=>{throw new i.NotImplementedError("Not implemented scenario for getting code format settings when using a writer function. Please open an issue.")});function s(t,e){return r=>{!function(t,e,r){for(let i=0;i<r.length;i++)t.conditionalWrite(i>0,e),o(t,r[i])}(r,` ${t} `,e)}}function o(t,e){e instanceof Function?e(t):t.write(e.toString())}e.Writers=class{constructor(){}static object(t){return e=>{const r=Object.keys(t);e.write("{"),r.length>0&&e.indentBlock(()=>{!function(){for(let i=0;i<r.length;i++){i>0&&e.write(",").newLine();const n=r[i],s=t[n];e.write(n),null!=s&&(e.write(": "),o(e,s))}e.newLine()}()}),e.write("}")}}static objectType(t){return e=>{e.write("{"),function(t){for(const e of Object.keys(t))if(null!=t[e]&&!(t[e]instanceof Array&&0===t[e].length))return!0;return!1}(t)&&e.indentBlock(()=>{n.forTypeElementMemberedNode().printText(e,t)}),e.write("}")}}static unionType(t,e,...r){return s("|",[t,e,...r])}static intersectionType(t,e,...r){return s("&",[t,e,...r])}static assertion(t,e){return r=>{o(r,t),r.spaceIfLastNot().write("as "),o(r,e)}}static returnStatement(t){return e=>{e.write("return "),e.withHangingIndentationUnlessBlock(()=>{o(e,t),e.write(";")})}}}},"ESn/":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=r("qYB5"),n=r("rViU");e.InitializerExpressionableNodeStructurePrinter=class extends n.Printer{printText(t,e){const{initializer:r}=e;if(null==r)return;const n=this.getText(t,r);i.StringUtils.isNullOrWhitespace(n)||t.withHangingIndentation(()=>{t.spaceIfLastNot(),t.write(`= ${n}`)})}}},J0Wo:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=r("qYB5"),n=r("96dJ"),s=r("AVmt");e.ClassDeclarationStructurePrinter=class extends n.NodePrinter{constructor(t,e){super(t),this.options=e,this.multipleWriter=new s.BlankLineFormattingStructuresPrinter(this)}printTexts(t,e){this.multipleWriter.printText(t,e)}printTextInternal(t,e){const r=e.hasDeclareKeyword||this.options.isAmbient;this.factory.forJSDoc().printDocs(t,e.docs),this.factory.forDecorator().printTexts(t,e.decorators),this.printHeader(t,e),t.inlineBlock(()=>{this.factory.forPropertyDeclaration().printTexts(t,e.properties),this.printCtors(t,e,r),this.printGetAndSet(t,e,r),i.ArrayUtils.isNullOrEmpty(e.methods)||(this.conditionalSeparator(t,r),this.factory.forMethodDeclaration({isAmbient:r}).printTexts(t,e.methods))})}printHeader(t,e){this.factory.forModifierableNode().printText(t,e),t.write("class"),i.StringUtils.isNullOrWhitespace(e.name)||t.space().write(e.name),this.factory.forTypeParameterDeclaration().printTextsWithBrackets(t,e.typeParameters),t.space(),t.withHangingIndentation(()=>{if(null!=e.extends){const r=this.getText(t,e.extends);i.StringUtils.isNullOrWhitespace(r)||t.write(`extends ${r} `)}if(null!=e.implements){const r=e.implements instanceof Array?e.implements.map(e=>this.getText(t,e)).join(", "):this.getText(t,e.implements);i.StringUtils.isNullOrWhitespace(r)||t.write(`implements ${r} `)}})}printCtors(t,e,r){if(!i.ArrayUtils.isNullOrEmpty(e.ctors))for(const i of e.ctors)this.conditionalSeparator(t,r),this.factory.forConstructorDeclaration({isAmbient:r}).printText(t,i)}printGetAndSet(t,e,r){const i=[...e.getAccessors||[]],n=[...e.setAccessors||[]],s=this.factory.forGetAccessorDeclaration({isAmbient:r}),o=this.factory.forSetAccessorDeclaration({isAmbient:r});for(const e of i){this.conditionalSeparator(t,r),s.printText(t,e);const i=n.findIndex(t=>t.name===e.name);i>=0&&(this.conditionalSeparator(t,r),o.printText(t,n[i]),n.splice(i,1))}for(const e of n)this.conditionalSeparator(t,r),o.printText(t,e)}conditionalSeparator(t,e){t.isAtStartOfFirstLineOfBlock()||(e?t.newLine():t.blankLine())}}},Mk3l:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=r("96dJ"),n=r("AVmt");e.GetAccessorDeclarationStructurePrinter=class extends i.NodePrinter{constructor(t,e){super(t),this.options=e,this.blankLineWriter=new n.BlankLineFormattingStructuresPrinter(this)}printTexts(t,e){this.blankLineWriter.printText(t,e)}printTextInternal(t,e){this.factory.forJSDoc().printDocs(t,e.docs),this.factory.forDecorator().printTexts(t,e.decorators),this.factory.forModifierableNode().printText(t,e),t.write(`get ${e.name}`),this.factory.forTypeParameterDeclaration().printTextsWithBrackets(t,e.typeParameters),this.factory.forParameterDeclaration().printTextsWithParenthesis(t,e.parameters),this.factory.forReturnTypedNode().printText(t,e),this.options.isAmbient||e.isAbstract?t.write(";"):t.spaceIfLastNot().inlineBlock(()=>{this.factory.forStatementedNode(this.options).printText(t,e)})}}},PC74:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=r("EboW"),n=r("ixQ4"),s=r("thKt"),o=r("rViU");e.ClassMemberStructurePrinter=class extends o.Printer{constructor(t,e){super(),this.factory=t,this.options=e}printTexts(t,e){if(null!=e)if("string"==typeof e||e instanceof Function)this.printText(t,e);else for(const r of e)s.isLastNonWhitespaceCharCloseBrace(t)?t.blankLineIfLastNot():t.isAtStartOfFirstLineOfBlock()||t.newLineIfLastNot(),this.printText(t,r)}printText(t,e){if("string"==typeof e||e instanceof Function||null==e)this.printTextOrWriterFunc(t,e);else switch(e.kind){case n.StructureKind.Method:this.options.isAmbient||r(),this.factory.forMethodDeclaration(this.options).printText(t,e);break;case n.StructureKind.Property:this.factory.forPropertyDeclaration().printText(t,e);break;case n.StructureKind.GetAccessor:this.options.isAmbient||r(),this.factory.forGetAccessorDeclaration(this.options).printText(t,e);break;case n.StructureKind.SetAccessor:this.options.isAmbient||r(),this.factory.forSetAccessorDeclaration(this.options).printText(t,e);break;case n.StructureKind.Constructor:this.options.isAmbient||r(),this.factory.forConstructorDeclaration(this.options).printText(t,e);break;default:i.throwNotImplementedForNeverValueError(e)}function r(){t.isAtStartOfFirstLineOfBlock()||t.blankLineIfLastNot()}}}},R3AK:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=r("qYB5"),n=r("96dJ");e.MethodDeclarationStructurePrinter=class extends n.NodePrinter{constructor(t,e){super(t),this.options=e}printTexts(t,e){if(null!=e)for(let r=0;r<e.length;r++)r>0&&(this.options.isAmbient?t.newLine():t.blankLine()),this.printText(t,e[r])}printTextInternal(t,e){this.printOverloads(t,e.name,function(){const t=i.ObjectUtils.clone(e.overloads);if(null==t||0===t.length)return;for(const r of t)i.setValueIfUndefined(r,"scope",e.scope),i.setValueIfUndefined(r,"isStatic",e.isStatic),i.setValueIfUndefined(r,"isAbstract",e.isAbstract),i.setValueIfUndefined(r,"hasQuestionToken",e.hasQuestionToken);return t}()),this.printHeader(t,e.name,e),this.options.isAmbient||e.isAbstract?t.write(";"):t.spaceIfLastNot().inlineBlock(()=>{this.factory.forStatementedNode(this.options).printText(t,e)})}printOverloads(t,e,r){if(null!=r&&0!==r.length)for(const i of r)this.printOverload(t,e,i),t.newLine()}printOverload(t,e,r){this.printHeader(t,e,r),t.write(";")}printHeader(t,e,r){this.factory.forJSDoc().printDocs(t,r.docs),null!=r.decorators&&this.factory.forDecorator().printTexts(t,r.decorators),this.factory.forModifierableNode().printText(t,r),t.write(e),t.conditionalWrite(r.hasQuestionToken,"?"),this.factory.forTypeParameterDeclaration().printTextsWithBrackets(t,r.typeParameters),this.factory.forParameterDeclaration().printTextsWithParenthesis(t,r.parameters),this.factory.forReturnTypedNode().printText(t,r)}}},Ruki:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}(r("woYA"))},Yq46:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=r("qYB5"),n=r("96dJ");e.JSDocStructurePrinter=class extends n.NodePrinter{printDocs(t,e){if(null!=e)for(const r of e)this.printText(t,r),t.newLine()}printTextInternal(t,e){const r=function(){if("string"==typeof e)return e;const r=this.getNewWriter(t);if("function"==typeof e)return e(r),r.toString();return i.getTextFromStringOrWriter(r,e.description)}.call(this).split(/\r?\n/);t.writeLine("/**");for(const e of r)t.write(" *"),e.length>0&&t.write(` ${e}`),t.newLine();t.write(" */")}}},i93b:function(t,e,r){"use strict";function i(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}Object.defineProperty(e,"__esModule",{value:!0}),i(r("J0Wo")),i(r("PC74")),i(r("vTvy")),i(r("Mk3l")),i(r("R3AK")),i(r("tiTu")),i(r("9VkS"))},nb7p:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=r("rViU");e.StringStructurePrinter=class extends i.Printer{printText(t,e){"string"==typeof e?t.write(e):e(t)}}},pw47:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=r("qYB5"),n=r("rViU");e.ReturnTypedNodeStructurePrinter=class extends n.Printer{constructor(t=!1){super(),this.alwaysWrite=t}printText(t,e){let{returnType:r}=e;if(null==r&&!1===this.alwaysWrite)return;r=r||"void";const n=this.getText(t,r);i.StringUtils.isNullOrWhitespace(n)||t.withHangingIndentation(()=>{t.write(`: ${n}`)})}}},rViU:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=r("S69g");e.Printer=class{printTextOrWriterFunc(t,e){"string"==typeof e?t.write(e):null!=e&&e(t)}getNewWriter(t){return new i.CodeBlockWriter(t.getOptions())}getNewWriterWithQueuedChildIndentation(t){const e=new i.CodeBlockWriter(t.getOptions());return e.queueIndentationLevel(1),e}getText(t,e){const r=this.getNewWriter(t);return this.printTextOrWriterFunc(r,e),r.toString()}getTextWithQueuedChildIndentation(t,e){const r=this.getNewWriterWithQueuedChildIndentation(t);return this.printTextOrWriterFunc(r,e),r.toString()}}},tiTu:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=r("96dJ"),n=r("AVmt");e.PropertyDeclarationStructurePrinter=class extends i.NodePrinter{constructor(){super(...arguments),this.multipleWriter=new n.NewLineFormattingStructuresPrinter(this)}printTexts(t,e){this.multipleWriter.printText(t,e)}printTextInternal(t,e){this.factory.forJSDoc().printDocs(t,e.docs),this.factory.forDecorator().printTexts(t,e.decorators),this.factory.forModifierableNode().printText(t,e),t.write(e.name),t.conditionalWrite(e.hasQuestionToken,"?"),t.conditionalWrite(e.hasExclamationToken&&!e.hasQuestionToken,"!"),this.factory.forTypedNode(":").printText(t,e),this.factory.forInitializerExpressionableNode().printText(t,e),t.write(";")}}},u7VG:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=r("qYB5"),n=r("rViU");e.TypedNodeStructurePrinter=class extends n.Printer{constructor(t,e=!1){super(),this.separator=t,this.alwaysWrite=e}printText(t,e){let{type:r}=e;if(null==r&&!1===this.alwaysWrite)return;r=r||"any";const n=this.getText(t,r);i.StringUtils.isNullOrWhitespace(n)||t.withHangingIndentation(()=>{t.write(`${this.separator} ${n}`)})}}},uQek:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=r("rViU");e.ModifierableNodeStructurePrinter=class extends i.Printer{printText(t,e){const r=e.scope;e.isDefaultExport?t.write("export default "):e.isExported&&t.write("export "),e.hasDeclareKeyword&&t.write("declare "),e.isAbstract&&t.write("abstract "),null!=r&&t.write(`${r} `),e.isStatic&&t.write("static "),e.isAsync&&t.write("async "),e.isReadonly&&t.write("readonly ")}}},uqhy:function(t,e,r){"use strict";function i(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}Object.defineProperty(e,"__esModule",{value:!0}),i(r("ESn/")),i(r("uQek")),i(r("pw47")),i(r("u7VG"))},vTvy:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=r("qYB5"),n=r("96dJ");e.ConstructorDeclarationStructurePrinter=class extends n.NodePrinter{constructor(t,e){super(t),this.options=e}printTexts(t,e){if(null!=e)for(let r=0;r<e.length;r++)r>0&&(this.options.isAmbient?t.newLine():t.blankLine()),this.printText(t,e[r])}printTextInternal(t,e){this.printOverloads(t,function(){const t=i.ObjectUtils.clone(e.overloads);if(null==t||0===t.length)return;for(const r of t)i.setValueIfUndefined(r,"scope",e.scope);return t}()),this.printHeader(t,e),this.options.isAmbient?t.write(";"):t.space().inlineBlock(()=>{this.factory.forStatementedNode(this.options).printText(t,e)})}printOverloads(t,e){if(null!=e&&0!==e.length)for(const r of e)this.printOverload(t,r),t.newLine()}printOverload(t,e){this.printHeader(t,e),t.write(";")}printHeader(t,e){this.factory.forJSDoc().printDocs(t,e.docs),this.factory.forModifierableNode().printText(t,e),t.write("constructor"),this.factory.forTypeParameterDeclaration().printTextsWithBrackets(t,e.typeParameters),this.factory.forParameterDeclaration().printTextsWithParenthesis(t,e.parameters)}}},woYA:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=r("96dJ");e.DecoratorStructurePrinter=class extends i.NodePrinter{printTexts(t,e){this.printMultiple(t,e,()=>t.newLine())}printTextsInline(t,e){this.printMultiple(t,e,()=>t.space())}printTextInternal(t,e){t.write(`@${e.name}`),this.printArguments(t,e)}printArguments(t,e){if(null==e.arguments)return;t.write("(");const r=e.arguments instanceof Array?e.arguments:[e.arguments];for(let e=0;e<r.length;e++)t.conditionalWrite(e>0,", "),t.write(this.getTextWithQueuedChildIndentation(t,r[e]));t.write(")")}printMultiple(t,e,r){if(null!=e&&0!==e.length)for(const i of e)this.printText(t,i),r()}}}}]);
//# sourceMappingURL=vendor.ts-morph~d8c5ba3a.bce883095dd7c734b68d.bundle.map