(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"+8gs":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r("qYB5"),i=r("96dJ");e.FunctionDeclarationStructurePrinter=class extends i.NodePrinter{constructor(t,e){super(t),this.options=e}printTexts(t,e){if(null!=e)for(let r=0;r<e.length;r++){const n=e[r];if(r>0){const i=e[r-1];this.options.isAmbient||i.hasDeclareKeyword&&n.hasDeclareKeyword?t.newLine():t.blankLine()}this.printText(t,n)}}printTextInternal(t,e){this.printOverloads(t,e.name,function(){const t=n.ObjectUtils.clone(e.overloads);if(null==t||0===t.length)return;for(const r of t)n.setValueIfUndefined(r,"hasDeclareKeyword",e.hasDeclareKeyword),n.setValueIfUndefined(r,"isExported",e.isExported),n.setValueIfUndefined(r,"isDefaultExport",e.isDefaultExport);return t}()),this.printHeader(t,e.name,e),this.options.isAmbient||e.hasDeclareKeyword?t.write(";"):t.space().inlineBlock(()=>{this.factory.forStatementedNode({isAmbient:!1}).printText(t,e)})}printOverloads(t,e,r){if(null!=r&&0!==r.length)for(const n of r)this.printOverload(t,e,n),t.newLine()}printOverload(t,e,r){this.printHeader(t,e,r),t.write(";")}printHeader(t,e,r){this.factory.forJSDoc().printDocs(t,r.docs),this.factory.forModifierableNode().printText(t,r),t.write("function"),t.conditionalWrite(r.isGenerator,"*"),n.StringUtils.isNullOrWhitespace(e)||t.write(` ${e}`),this.factory.forTypeParameterDeclaration().printTextsWithBrackets(t,r.typeParameters),this.factory.forParameterDeclaration().printTextsWithParenthesis(t,r.parameters),this.factory.forReturnTypedNode().printText(t,r)}}},"2qw6":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r("rViU");e.NewLineFormattingStructuresPrinter=class extends n.Printer{constructor(t){super(),this.printer=t}printText(t,e){if(null!=e)for(let r=0;r<e.length;r++)t.conditionalNewLine(r>0),this.printer.printText(t,e[r])}}},"4BCm":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r("rViU");e.BlankLineFormattingStructuresPrinter=class extends n.Printer{constructor(t){super(),this.printer=t}printText(t,e){if(null!=e)for(let r=0;r<e.length;r++)t.conditionalBlankLine(r>0),this.printer.printText(t,e[r])}}},"9lFP":function(t,e,r){"use strict";function n(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}Object.defineProperty(e,"__esModule",{value:!0}),n(r("+8gs")),n(r("WF+X"))},AVmt:function(t,e,r){"use strict";function n(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}Object.defineProperty(e,"__esModule",{value:!0}),n(r("4BCm")),n(r("v7dH")),n(r("h6kc")),n(r("2qw6")),n(r("O5rw"))},KrJv:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r("qYB5"),i=r("96dJ");e.SpreadAssignmentStructurePrinter=class extends i.NodePrinter{printTextInternal(t,e){t.withHangingIndentation(()=>{t.write("..."),n.printTextFromStringOrWriter(t,e.expression)})}}},O5rw:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r("rViU");e.SpaceFormattingStructuresPrinter=class extends n.Printer{constructor(t){super(),this.printer=t}printText(t,e){if(null!=e)for(let r=0;r<e.length;r++)t.conditionalWrite(r>0," "),this.printer.printText(t,e[r])}}},UT7z:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r("qYB5"),i=r("96dJ");e.PropertyAssignmentStructurePrinter=class extends i.NodePrinter{printTextInternal(t,e){t.withHangingIndentation(()=>{t.write(`${e.name}: `),n.printTextFromStringOrWriter(t,e.initializer)})}}},VUQ8:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r("96dJ"),i=r("AVmt");e.EnumMemberStructurePrinter=class extends n.NodePrinter{constructor(){super(...arguments),this.multipleWriter=new i.CommaNewLineSeparatedStructuresPrinter(this)}printTexts(t,e){this.multipleWriter.printText(t,e)}printTextInternal(t,e){if(e instanceof Function)e(t);else if("string"!=typeof e)if(this.factory.forJSDoc().printDocs(t,e.docs),t.write(e.name),"string"==typeof e.value){const{value:r}=e;t.withHangingIndentation(()=>t.write(" = ").quote(r))}else"number"==typeof e.value?t.write(` = ${e.value}`):this.factory.forInitializerExpressionableNode().printText(t,e);else t.write(e)}}},"WF+X":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r("EboW"),i=r("96dJ"),s=r("AVmt");e.ParameterDeclarationStructurePrinter=class extends i.NodePrinter{constructor(){super(...arguments),this.multipleWriter=new s.CommaSeparatedStructuresPrinter(this)}printTextsWithParenthesis(t,e){t.write("("),null!=e&&this.factory.forParameterDeclaration().printTexts(t,e),t.write(")")}printTexts(t,e){null!=e&&0!==e.length&&t.withHangingIndentation(()=>{this.multipleWriter.printText(t,e)})}printTextInternal(t,e){if(null==e.name)throw new n.NotImplementedError("Not implemented scenario where parameter declaration structure doesn't have a name. Please open an issue if you need this.");this.factory.forDecorator().printTextsInline(t,e.decorators),this.factory.forModifierableNode().printText(t,e),t.conditionalWrite(e.isRestParameter,"..."),t.write(e.name),t.conditionalWrite(e.hasQuestionToken,"?"),this.factory.forTypedNode(":",e.hasQuestionToken).printText(t,e),this.factory.forInitializerExpressionableNode().printText(t,e)}}},WdJA:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}(r("nf9F"))},aqG9:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r("qYB5");e.isLastNonWhitespaceCharCloseBrace=function(t){return t.iterateLastChars(t=>"}"===t||!!n.StringUtils.isWhitespaceChar(t)&&void 0)||!1}},eMtj:function(t,e,r){"use strict";function n(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}Object.defineProperty(e,"__esModule",{value:!0}),n(r("fJH5")),n(r("VUQ8"))},fJH5:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r("96dJ"),i=r("AVmt");e.EnumDeclarationStructurePrinter=class extends n.NodePrinter{constructor(){super(...arguments),this.multipleWriter=new i.BlankLineFormattingStructuresPrinter(this)}printTexts(t,e){this.multipleWriter.printText(t,e)}printTextInternal(t,e){this.factory.forJSDoc().printDocs(t,e.docs),this.factory.forModifierableNode().printText(t,e),t.conditionalWrite(e.isConst,"const "),t.write(`enum ${e.name} `).inlineBlock(()=>{this.factory.forEnumMember().printTexts(t,e.members)})}}},h6kc:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r("qYB5"),i=r("rViU"),s=r("tMYI");function o(t,e,r,i){if(null!=r)if(r instanceof Function||"string"==typeof r)t.printText(e,r);else{const o=new Array(r.length);for(let a=0;a<r.length;a++){a>0&&i();const c=r[a],u=e.getLength();t.printText(e,c);const l=s.getAppendCommaPos(n.WriterUtils.getLastCharactersToPos(e,u));o[a]=-1!==l&&l+u}let a=!1;for(let t=o.length-1;t>=0;t--){const r=o[t];!1!==r&&(a?e.unsafeInsert(r,","):a=!0)}}}e.CommaSeparatedStructuresPrinter=class extends i.Printer{constructor(t){super(),this.printer=t}printText(t,e){o(this.printer,t,e,()=>t.spaceIfLastNot())}},e.printTextWithSeparator=o},jUz7:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r("96dJ");e.ShorthandPropertyAssignmentStructurePrinter=class extends n.NodePrinter{printTextInternal(t,e){t.write(`${e.name}`)}}},jj2c:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r("EboW"),i=r("ixQ4"),s=r("AVmt"),o=r("rViU");e.ObjectLiteralExpressionPropertyStructurePrinter=class extends o.Printer{constructor(t){super(),this.factory=t,this.multipleWriter=new s.CommaNewLineSeparatedStructuresPrinter(this),this.options={isAmbient:!1}}printTexts(t,e){this.multipleWriter.printText(t,e)}printText(t,e){if("string"==typeof e||e instanceof Function||null==e)this.printTextOrWriterFunc(t,e);else switch(e.kind){case i.StructureKind.PropertyAssignment:this.factory.forPropertyAssignment().printText(t,e);break;case i.StructureKind.ShorthandPropertyAssignment:this.factory.forShorthandPropertyAssignment().printText(t,e);break;case i.StructureKind.SpreadAssignment:this.factory.forSpreadAssignment().printText(t,e);break;case i.StructureKind.Method:this.factory.forMethodDeclaration(this.options).printText(t,e);break;case i.StructureKind.GetAccessor:this.factory.forGetAccessorDeclaration(this.options).printText(t,e);break;case i.StructureKind.SetAccessor:this.factory.forSetAccessorDeclaration(this.options).printText(t,e);break;default:n.throwNotImplementedForNeverValueError(e)}}}},nf9F:function(t,e,r){"use strict";function n(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}Object.defineProperty(e,"__esModule",{value:!0}),n(r("jj2c")),n(r("UT7z")),n(r("jUz7")),n(r("KrJv"))},thKt:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}(r("aqG9"))},v7dH:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r("rViU"),i=r("h6kc");e.CommaNewLineSeparatedStructuresPrinter=class extends n.Printer{constructor(t){super(),this.printer=t}printText(t,e){i.printTextWithSeparator(this.printer,t,e,()=>t.newLineIfLastNot())}}}}]);
//# sourceMappingURL=vendor.ts-morph~15a263c5.ae48d49fd1623c9a7c9e.bundle.map