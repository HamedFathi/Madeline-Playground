(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{"0gne":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("MyKo");t.LiteralTypeNode=class extends r.TypeNode{getLiteral(){const e=this.compilerNode.literal;return this._getNodeFromCompilerNode(e)}}},"3eZC":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("MyKo");t.InferTypeNode=class extends r.TypeNode{getTypeParameter(){return this._getNodeFromCompilerNode(this.compilerNode.typeParameter)}}},"4WN4":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("MyKo");t.TupleTypeNode=class extends r.TypeNode{getElementTypeNodes(){return this.compilerNode.elementTypes.map(e=>this._getNodeFromCompilerNode(e))}}},"6k84":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("MyKo");t.IndexedAccessTypeNode=class extends r.TypeNode{getObjectTypeNode(){return this._getNodeFromCompilerNode(this.compilerNode.objectType)}getIndexTypeNode(){return this._getNodeFromCompilerNode(this.compilerNode.indexType)}}},"7ZBG":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("8l/H"),n=o("MyKo");t.ExpressionWithTypeArgumentsBase=r.LeftHandSideExpressionedNode(n.TypeNode);t.ExpressionWithTypeArguments=class extends t.ExpressionWithTypeArgumentsBase{getTypeArguments(){const e=this.compilerNode.typeArguments;return null==e?[]:e.map(e=>this._getNodeFromCompilerNode(e))}}},"9DDh":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("ixQ4"),n=o("CSWf"),i=o("ZZXi"),s=o("DM+i"),d=o("uA/F");t.TypeAliasDeclarationBase=n.TypeParameteredNode(n.TypedNode(n.JSDocableNode(n.AmbientableNode(n.ExportableNode(n.ModifierableNode(n.NamedNode(s.Statement)))))));t.TypeAliasDeclaration=class extends t.TypeAliasDeclarationBase{set(e){return i.callBaseSet(t.TypeAliasDeclarationBase.prototype,this,e),this}getStructure(){return d.callBaseGetStructure(t.TypeAliasDeclarationBase.prototype,this,{kind:r.StructureKind.TypeAlias,type:this.getTypeNodeOrThrow().getText()})}}},C3OT:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("MyKo");t.ArrayTypeNode=class extends r.TypeNode{getElementTypeNode(){return this._getNodeFromCompilerNode(this.compilerNode.elementType)}}},MnOm:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("CSWf"),n=o("MyKo");t.FunctionOrConstructorTypeNodeBaseBase=r.SignaturedDeclaration(n.TypeNode);t.FunctionOrConstructorTypeNodeBase=class extends t.FunctionOrConstructorTypeNodeBaseBase{}},MyKo:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("thrA");t.TypeNode=class extends r.Node{}},"N/J9":function(e,t,o){"use strict";function r(e){for(var o in e)t.hasOwnProperty(o)||(t[o]=e[o])}Object.defineProperty(t,"__esModule",{value:!0}),r(o("C3OT")),r(o("rPqM")),r(o("V0Ez")),r(o("7ZBG")),r(o("hhQ+")),r(o("MnOm")),r(o("kRmG")),r(o("6k84")),r(o("3eZC")),r(o("i1wJ")),r(o("0gne")),r(o("SX5+")),r(o("nxrv")),r(o("4WN4")),r(o("9DDh")),r(o("m741")),r(o("MyKo")),r(o("zbVc")),r(o("ezn0")),r(o("mucT"))},"SX5+":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("MyKo");t.ParenthesizedTypeNode=class extends r.TypeNode{getTypeNode(){return this._getNodeFromCompilerNode(this.compilerNode.type)}setType(e){return this.getTypeNode().replaceWithText(e),this}}},V0Ez:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("MnOm");t.ConstructorTypeNode=class extends r.FunctionOrConstructorTypeNodeBase{}},ezn0:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("MyKo");t.TypeReferenceNode=class extends r.TypeNode{getTypeName(){return this._getNodeFromCompilerNode(this.compilerNode.typeName)}getTypeArguments(){return null==this.compilerNode.typeArguments?[]:this.compilerNode.typeArguments.map(e=>this._getNodeFromCompilerNode(e))}}},"hhQ+":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("CSWf"),n=o("MnOm");t.FunctionTypeNodeBase=r.TypeParameteredNode(n.FunctionOrConstructorTypeNodeBase);t.FunctionTypeNode=class extends t.FunctionTypeNodeBase{}},i1wJ:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("MyKo");t.IntersectionTypeNode=class extends r.TypeNode{getTypeNodes(){return this.compilerNode.types.map(e=>this._getNodeFromCompilerNode(e))}}},kRmG:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("EboW"),n=o("lq8x"),i=o("1hU1"),s=o("qYB5"),d=o("CSWf"),a=o("MyKo");t.ImportTypeNodeBase=d.TypeArgumentedNode(a.TypeNode);t.ImportTypeNode=class extends t.ImportTypeNodeBase{setArgument(e){const t=this.getArgument();if(s.TypeGuards.isLiteralTypeNode(t)){const o=t.getLiteral();if(s.TypeGuards.isStringLiteral(o))return o.setLiteralValue(e),this}return t.replaceWithText(t=>t.quote(e),this._getWriterWithQueuedChildIndentation()),this}getArgument(){return this._getNodeFromCompilerNode(this.compilerNode.argument)}setQualifier(e){const t=this.getQualifier();if(null!=t)t.replaceWithText(e,this._getWriterWithQueuedChildIndentation());else{const t=this.getFirstChildByKindOrThrow(i.SyntaxKind.CloseParenToken);n.insertIntoParentTextRange({insertPos:t.getEnd(),parent:this,newText:this._getWriterWithQueuedIndentation().write(".").write(e).toString()})}return this}getQualifierOrThrow(){return r.throwIfNullOrUndefined(this.getQualifier(),()=>`Expected to find a qualifier for the import type: ${this.getText()}`)}getQualifier(){return this._getNodeFromCompilerNodeIfExists(this.compilerNode.qualifier)}}},m741:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("CSWf"),n=o("MyKo");t.TypeLiteralNodeBase=r.TypeElementMemberedNode(n.TypeNode);t.TypeLiteralNode=class extends t.TypeLiteralNodeBase{}},mucT:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("MyKo");t.UnionTypeNode=class extends r.TypeNode{getTypeNodes(){return this.compilerNode.types.map(e=>this._getNodeFromCompilerNode(e))}}},nxrv:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("MyKo");t.ThisTypeNode=class extends r.TypeNode{}},rPqM:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("MyKo");t.ConditionalTypeNode=class extends r.TypeNode{getCheckType(){return this._getNodeFromCompilerNode(this.compilerNode.checkType)}getExtendsType(){return this._getNodeFromCompilerNode(this.compilerNode.extendsType)}getTrueType(){return this._getNodeFromCompilerNode(this.compilerNode.trueType)}getFalseType(){return this._getNodeFromCompilerNode(this.compilerNode.falseType)}}},zbVc:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=o("lq8x"),n=o("EboW"),i=o("1hU1"),s=o("qYB5"),d=o("CSWf"),a=o("thrA"),l=o("ixQ4"),u=o("uA/F"),p=o("ZZXi");t.TypeParameterDeclarationBase=d.NamedNode(a.Node);function c(e,t){null!=e&&r.removeChildren({children:[e.getPreviousSiblingIfKindOrThrow(t),e],removePrecedingSpaces:!0})}t.TypeParameterDeclaration=class extends t.TypeParameterDeclarationBase{getConstraint(){return this._getNodeFromCompilerNodeIfExists(this.compilerNode.constraint)}getConstraintOrThrow(){return n.throwIfNullOrUndefined(this.getConstraint(),"Expected to find the type parameter's constraint.")}setConstraint(e){if(e=this.getParent()._getTextWithQueuedChildIndentation(e),s.StringUtils.isNullOrWhitespace(e))return this.removeConstraint(),this;const t=this.getConstraint();if(null!=t)return t.replaceWithText(e),this;const o=this.getNameNode();return r.insertIntoParentTextRange({parent:this,insertPos:o.getEnd(),newText:` extends ${e}`}),this}removeConstraint(){return c(this.getConstraint(),i.SyntaxKind.ExtendsKeyword),this}getDefault(){return this._getNodeFromCompilerNodeIfExists(this.compilerNode.default)}getDefaultOrThrow(){return n.throwIfNullOrUndefined(this.getDefault(),"Expected to find the type parameter's default.")}setDefault(e){if(e=this.getParent()._getTextWithQueuedChildIndentation(e),s.StringUtils.isNullOrWhitespace(e))return this.removeDefault(),this;const t=this.getDefault();if(null!=t)return t.replaceWithText(e),this;const o=this.getConstraint()||this.getNameNode();return r.insertIntoParentTextRange({parent:this,insertPos:o.getEnd(),newText:` = ${e}`}),this}removeDefault(){return c(this.getDefault(),i.SyntaxKind.EqualsToken),this}remove(){const e=this.getParentSyntaxListOrThrow();1===e.getChildrenOfKind(i.SyntaxKind.TypeParameter).length?function(){const t=[e.getPreviousSiblingIfKindOrThrow(i.SyntaxKind.LessThanToken),e,e.getNextSiblingIfKindOrThrow(i.SyntaxKind.GreaterThanToken)];r.removeChildren({children:t})}():r.removeCommaSeparatedChild(this)}set(e){return p.callBaseSet(t.TypeParameterDeclarationBase.prototype,this,e),null!=e.constraint?this.setConstraint(e.constraint):e.hasOwnProperty("constraint")&&this.removeConstraint(),null!=e.default?this.setDefault(e.default):e.hasOwnProperty("default")&&this.removeDefault(),this}getStructure(){const e=this.getConstraint(),o=this.getDefault();return u.callBaseGetStructure(t.TypeParameterDeclarationBase.prototype,this,{kind:l.StructureKind.TypeParameter,constraint:null!=e?e.getText({trimLeadingIndentation:!0}):void 0,default:o?o.getText({trimLeadingIndentation:!0}):void 0})}}}}]);
//# sourceMappingURL=vendor.ts-morph~f5f62f1d.e020033fe53664803e7a.bundle.map