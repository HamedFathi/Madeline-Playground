(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"0inz":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r("lq8x"),n=r("1hU1"),i=r("qYB5"),o=r("CSWf"),d=r("ixQ4"),a=r("ZZXi"),h=r("uA/F"),c=r("4Y2p");t.PropertyAssignmentBase=o.InitializerExpressionGetableNode(o.QuestionTokenableNode(o.PropertyNamedNode(c.ObjectLiteralElement)));t.PropertyAssignment=class extends t.PropertyAssignmentBase{removeInitializer(){const e=this.getInitializerOrThrow(),t=e.getPreviousSiblingIfKindOrThrow(n.SyntaxKind.ColonToken),r=this.getChildIndex(),i=this._sourceFile.getFullText(),o=this.getStart(),d=i.substring(o,t.getPos())+i.substring(e.getEnd(),this.getEnd()),a=this.getParentSyntaxList()||this.getParentOrThrow();return s.insertIntoParentTextRange({insertPos:o,newText:d,parent:a,replacing:{textLength:this.getWidth()}}),a.getChildAtIndexIfKindOrThrow(r,n.SyntaxKind.ShorthandPropertyAssignment)}setInitializer(e){const t=this.getInitializerOrThrow();return s.insertIntoParentTextRange({insertPos:t.getStart(),newText:i.getTextFromStringOrWriter(this._getWriterWithQueuedChildIndentation(),e),parent:this,replacing:{textLength:t.getWidth()}}),this}set(e){if(a.callBaseSet(t.PropertyAssignmentBase.prototype,this,e),null!=e.initializer)this.setInitializer(e.initializer);else if(e.hasOwnProperty("initializer"))return this.removeInitializer();return this}getStructure(){const e=this.getInitializerOrThrow(),r=h.callBaseGetStructure(t.PropertyAssignmentBase.prototype,this,{kind:d.StructureKind.PropertyAssignment,initializer:e.getText()});return delete r.hasQuestionToken,r}}},"3IDs":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r("EboW"),n=r("lq8x"),i=r("NtI8"),o=r("1hU1"),d=r("qYB5"),a=r("iQlM"),h=r("BIL/");t.ObjectLiteralExpressionBase=h.PrimaryExpression;t.ObjectLiteralExpression=class extends t.ObjectLiteralExpressionBase{getPropertyOrThrow(e){return s.throwIfNullOrUndefined(this.getProperty(e),()=>d.getNotFoundErrorMessageForNameOrFindFunction("property",e))}getProperty(e){let t;return t="string"==typeof e?t=>null!=t.getName&&t.getName()===e:e,this.getProperties().find(t)}getProperties(){return this.compilerNode.properties.map(e=>this._getNodeFromCompilerNode(e))}getPropertiesWithComments(){return a.ExtendedParser.getContainerArray(this.compilerNode,this.getSourceFile().compilerNode).map(e=>this._getNodeFromCompilerNode(e))}_getAddIndex(){return a.ExtendedParser.getContainerArray(this.compilerNode,this.getSourceFile().compilerNode).length}addProperty(e){return this.insertProperties(this._getAddIndex(),[e])[0]}addProperties(e){return this.insertProperties(this._getAddIndex(),e)}insertProperty(e,t){return this.insertProperties(e,[t])[0]}insertProperties(e,t){const r=this.getPropertiesWithComments();e=n.verifyAndGetIndex(e,r.length);const s=this._getWriterWithChildIndentation();return this._context.structurePrinterFactory.forObjectLiteralExpressionProperty().printTexts(s,t),n.insertIntoCommaSeparatedNodes({parent:this.getChildSyntaxListOrThrow(),currentNodes:r,insertIndex:e,newText:s.toString(),useNewLines:!0}),n.getNodesToReturn(r,this.getPropertiesWithComments(),e,!0)}addPropertyAssignment(e){return this.addPropertyAssignments([e])[0]}addPropertyAssignments(e){return this.insertPropertyAssignments(this._getAddIndex(),e)}insertPropertyAssignment(e,t){return this.insertPropertyAssignments(e,[t])[0]}insertPropertyAssignments(e,t){return this._insertProperty(e,t,()=>this._context.structurePrinterFactory.forPropertyAssignment())}addShorthandPropertyAssignment(e){return this.addShorthandPropertyAssignments([e])[0]}addShorthandPropertyAssignments(e){return this.insertShorthandPropertyAssignments(this._getAddIndex(),e)}insertShorthandPropertyAssignment(e,t){return this.insertShorthandPropertyAssignments(e,[t])[0]}insertShorthandPropertyAssignments(e,t){return this._insertProperty(e,t,()=>this._context.structurePrinterFactory.forShorthandPropertyAssignment())}addSpreadAssignment(e){return this.addSpreadAssignments([e])[0]}addSpreadAssignments(e){return this.insertSpreadAssignments(this._getAddIndex(),e)}insertSpreadAssignment(e,t){return this.insertSpreadAssignments(e,[t])[0]}insertSpreadAssignments(e,t){return this._insertProperty(e,t,()=>this._context.structurePrinterFactory.forSpreadAssignment())}addMethod(e){return this.addMethods([e])[0]}addMethods(e){return this.insertMethods(this._getAddIndex(),e)}insertMethod(e,t){return this.insertMethods(e,[t])[0]}insertMethods(e,t){return this._insertProperty(e,t,()=>this._context.structurePrinterFactory.forMethodDeclaration({isAmbient:!1}))}addGetAccessor(e){return this.addGetAccessors([e])[0]}addGetAccessors(e){return this.insertGetAccessors(this._getAddIndex(),e)}insertGetAccessor(e,t){return this.insertGetAccessors(e,[t])[0]}insertGetAccessors(e,t){return this._insertProperty(e,t,()=>this._context.structurePrinterFactory.forGetAccessorDeclaration({isAmbient:!1}))}addSetAccessor(e){return this.addSetAccessors([e])[0]}addSetAccessors(e){return this.insertSetAccessors(this._getAddIndex(),e)}insertSetAccessor(e,t){return this.insertSetAccessors(e,[t])[0]}insertSetAccessors(e,t){return this._insertProperty(e,t,()=>this._context.structurePrinterFactory.forSetAccessorDeclaration({isAmbient:!1}))}_insertProperty(e,t,r){e=n.verifyAndGetIndex(e,this._getAddIndex());const s=this._getWriterWithChildIndentation(),d=new i.CommaNewLineSeparatedStructuresPrinter(r()),a=this.getPropertiesWithComments();return d.printText(s,t),n.insertIntoCommaSeparatedNodes({parent:this.getFirstChildByKindOrThrow(o.SyntaxKind.SyntaxList),currentNodes:a,insertIndex:e,newText:s.toString(),useNewLines:!0}),n.getNodesToReturn(a,this.getPropertiesWithComments(),e,!1)}}},"4Y2p":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r("lq8x"),n=r("thrA");t.ObjectLiteralElement=class extends n.Node{remove(){s.removeCommaSeparatedChild(this)}}},"8l/H":function(e,t,r){"use strict";function s(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),s(r("8bI1")),s(r("hKuP")),s(r("XOVP")),s(r("qOXI")),s(r("ExFN")),s(r("EjDG")),s(r("sksS")),s(r("vSqi")),s(r("YWm7")),s(r("q/HO")),s(r("B27z")),s(r("LIjq")),s(r("D9RE")),s(r("aBjj")),s(r("j3KJ")),s(r("XtiY")),s(r("Mj1T")),s(r("alJj")),s(r("6lfw")),s(r("Hykp")),s(r("SMVP")),s(r("Zl2h")),s(r("dR3j")),s(r("t0Bi")),s(r("iyR1")),s(r("BIL/")),s(r("zAWQ")),s(r("WBW0")),s(r("5BPh")),s(r("J5m5")),s(r("ofNI")),s(r("SDcW")),s(r("JZU2")),s(r("+nwp")),s(r("Eu4M")),s(r("lLqm")),s(r("/eIW")),s(r("e7ZH"))},A80J:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r("XOVP");t.ObjectDestructuringAssignmentBase=s.AssignmentExpression;t.ObjectDestructuringAssignment=class extends t.ObjectDestructuringAssignmentBase{getLeft(){return this._getNodeFromCompilerNode(this.compilerNode.left)}}},Hykp:function(e,t,r){"use strict";function s(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),s(r("UcIF")),s(r("A80J")),s(r("4Y2p")),s(r("3IDs")),s(r("0inz")),s(r("KuJC")),s(r("uDTJ"))},KuJC:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r("EboW"),n=r("lq8x"),i=r("1hU1"),o=r("CSWf"),d=r("ixQ4"),a=r("uA/F"),h=r("ZZXi"),c=r("4Y2p");t.ShorthandPropertyAssignmentBase=o.InitializerExpressionGetableNode(o.QuestionTokenableNode(o.NamedNode(c.ObjectLiteralElement)));t.ShorthandPropertyAssignment=class extends t.ShorthandPropertyAssignmentBase{hasObjectAssignmentInitializer(){return null!=this.compilerNode.objectAssignmentInitializer}getObjectAssignmentInitializerOrThrow(){return s.throwIfNullOrUndefined(this.getObjectAssignmentInitializer(),"Expected to find an object assignment initializer.")}getObjectAssignmentInitializer(){return this._getNodeFromCompilerNodeIfExists(this.compilerNode.objectAssignmentInitializer)}getEqualsTokenOrThrow(){return s.throwIfNullOrUndefined(this.getEqualsToken(),"Expected to find an equals token.")}getEqualsToken(){const e=this.compilerNode.equalsToken;if(null!=e)return this._getNodeFromCompilerNode(e)}removeObjectAssignmentInitializer(){return this.hasObjectAssignmentInitializer()?(n.removeChildren({children:[this.getEqualsTokenOrThrow(),this.getObjectAssignmentInitializerOrThrow()],removePrecedingSpaces:!0}),this):this}setInitializer(e){const t=this.getParentSyntaxList()||this.getParentOrThrow(),r=this.getChildIndex();return n.insertIntoParentTextRange({insertPos:this.getStart(),newText:this.getText()+`: ${e}`,parent:t,replacing:{textLength:this.getWidth()}}),t.getChildAtIndexIfKindOrThrow(r,i.SyntaxKind.PropertyAssignment)}set(e){return h.callBaseSet(t.ShorthandPropertyAssignmentBase.prototype,this,e),this}getStructure(){const e=a.callBaseGetStructure(t.ShorthandPropertyAssignmentBase.prototype,this,{kind:d.StructureKind.ShorthandPropertyAssignment});return delete e.hasQuestionToken,e}}},UcIF:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r("4Y2p");t.CommentObjectLiteralElement=class extends s.ObjectLiteralElement{}},uDTJ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r("LIjq"),n=r("ixQ4"),i=r("ZZXi"),o=r("uA/F"),d=r("4Y2p");t.SpreadAssignmentBase=s.ExpressionedNode(d.ObjectLiteralElement);t.SpreadAssignment=class extends t.SpreadAssignmentBase{set(e){return i.callBaseSet(t.SpreadAssignmentBase.prototype,this,e),this}getStructure(){return o.callBaseGetStructure(t.SpreadAssignmentBase.prototype,this,{kind:n.StructureKind.SpreadAssignment,expression:this.getExpression().getText()})}}}}]);
//# sourceMappingURL=vendor.ts-morph~47e5bdc4.83c45ac3e3cc9f278f24.bundle.map