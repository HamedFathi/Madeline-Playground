(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"444z":function(e,t,r){"use strict";function s(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),s(r("vmJs")),s(r("S4er")),s(r("oHF4")),s(r("kaoZ")),s(r("x8O7")),s(r("La14")),s(r("R81R")),s(r("BeCM")),s(r("WBMd")),s(r("JluZ"))},"5D/H":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r("EboW"),n=r("1hU1"),i=r("ZZXi"),o=r("uA/F");t.AbstractableNode=function(e){return class extends e{isAbstract(){return null!=this.getAbstractKeyword()}getAbstractKeyword(){return this.getFirstModifierByKind(n.SyntaxKind.AbstractKeyword)}getAbstractKeywordOrThrow(){return s.throwIfNullOrUndefined(this.getAbstractKeyword(),"Expected to find an abstract keyword.")}setIsAbstract(e){return this.toggleModifier("abstract",e),this}set(t){return i.callBaseSet(e.prototype,this,t),null!=t.isAbstract&&this.setIsAbstract(t.isAbstract),this}getStructure(){return o.callBaseGetStructure(e.prototype,this,{isAbstract:this.isAbstract()})}}}},JluZ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r("EboW"),n=r("ixQ4"),i=r("1hU1"),o=r("CSWf"),a=r("ZZXi"),c=r("SxZh"),d=r("vmJs"),u=r("uA/F"),l=r("kaoZ");t.SetAccessorDeclarationBase=o.ChildOrderableNode(o.TextInsertableNode(o.DecoratableNode(d.AbstractableNode(o.ScopedNode(o.StaticableNode(c.FunctionLikeDeclaration(o.BodyableNode(o.PropertyNamedNode(l.ClassElement)))))))));t.SetAccessorDeclaration=class extends t.SetAccessorDeclarationBase{set(e){return a.callBaseSet(t.SetAccessorDeclarationBase.prototype,this,e),this}getGetAccessor(){const e=this.getParentIfKindOrThrow(i.SyntaxKind.ClassDeclaration),t=this.getName();return e.getInstanceProperties().find(e=>e.getKind()===i.SyntaxKind.GetAccessor&&e.getName()===t)}getGetAccessorOrThrow(){return s.throwIfNullOrUndefined(this.getGetAccessor(),()=>`Expected to find a corresponding get accessor for ${this.getName()}.`)}getStructure(){return u.callBaseGetStructure(t.SetAccessorDeclarationBase.prototype,this,{kind:n.StructureKind.SetAccessor})}}},WBMd:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r("EboW"),n=r("ixQ4"),i=r("1hU1"),o=r("CSWf"),a=r("ZZXi"),c=r("uA/F"),d=r("vmJs"),u=r("kaoZ");t.PropertyDeclarationBase=o.ChildOrderableNode(o.DecoratableNode(d.AbstractableNode(o.ScopedNode(o.StaticableNode(o.JSDocableNode(o.ReadonlyableNode(o.ExclamationTokenableNode(o.QuestionTokenableNode(o.InitializerExpressionableNode(o.TypedNode(o.PropertyNamedNode(o.ModifierableNode(u.ClassElement)))))))))))));t.PropertyDeclaration=class extends t.PropertyDeclarationBase{set(e){return a.callBaseSet(t.PropertyDeclarationBase.prototype,this,e),this}remove(){const e=this.getParentOrThrow();switch(e.getKind()){case i.SyntaxKind.ClassDeclaration:super.remove();break;default:throw new s.NotImplementedError(`Not implemented parent syntax kind: ${e.getKindName()}`)}}getStructure(){return c.callBaseGetStructure(t.PropertyDeclarationBase.prototype,this,{kind:n.StructureKind.Property})}}},vmJs:function(e,t,r){"use strict";function s(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),s(r("5D/H")),s(r("zwUJ"))},zwUJ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=r("1hU1"),n=r("EboW"),i=r("lq8x"),o=r("ixQ4"),a=r("qYB5"),c=r("CSWf"),d=r("iQlM"),u=r("BeCM"),l=r("5D/H");function h(e){return class extends e{setExtends(e){if(e=this._getTextWithQueuedChildIndentation(e),a.StringUtils.isNullOrWhitespace(e))return this.removeExtends();const t=this.getHeritageClauseByKind(s.SyntaxKind.ExtendsKeyword);if(null!=t){const r=t.getFirstChildByKindOrThrow(s.SyntaxKind.SyntaxList),n=r.getStart();i.insertIntoParentTextRange({parent:t,newText:e,insertPos:n,replacing:{textLength:r.getEnd()-n}})}else{const t=this.getHeritageClauseByKind(s.SyntaxKind.ImplementsKeyword);let r;r=null!=t?t.getStart():this.getFirstChildByKindOrThrow(s.SyntaxKind.OpenBraceToken).getStart();let n=`extends ${e} `;/\s/.test(this.getSourceFile().getFullText()[r-1])||(n=" "+n),i.insertIntoParentTextRange({parent:null==t?this:t.getParentSyntaxListOrThrow(),insertPos:r,newText:n})}return this}removeExtends(){const e=this.getHeritageClauseByKind(s.SyntaxKind.ExtendsKeyword);return null==e?this:(e.removeExpression(0),this)}getExtendsOrThrow(){return n.throwIfNullOrUndefined(this.getExtends(),`Expected to find the extends expression for the class ${this.getName()}.`)}getExtends(){const e=this.getHeritageClauseByKind(s.SyntaxKind.ExtendsKeyword);if(null==e)return;const t=e.getTypeNodes();return 0===t.length?void 0:t[0]}addMembers(e){return this.insertMembers(i.getEndIndexFromArray(this.getMembersWithComments()),e)}addMember(e){return this.insertMember(i.getEndIndexFromArray(this.getMembersWithComments()),e)}insertMember(e,t){return this.insertMembers(e,[t])[0]}insertMembers(e,t){const r=a.isNodeAmbientOrInAmbientContext(this);return i.insertIntoBracesOrSourceFileWithGetChildrenWithComments({getIndexedChildren:()=>this.getMembersWithComments(),index:e,parent:this,write:(e,n)=>{const i=!r&&null!=n.previousMember&&a.TypeGuards.isBodyableNode(n.previousMember)&&n.previousMember.hasBody(),o=!r&&t instanceof Array&&s(t[0]);i||null!=n.previousMember&&o?e.blankLineIfLastNot():e.newLineIfLastNot();const c=this._getWriter();this._context.structurePrinterFactory.forClassMember({isAmbient:r}).printTexts(c,t),e.write(c.toString());const d=!r&&t instanceof Array&&s(t[t.length-1]),u=!r&&null!=n.nextMember&&a.TypeGuards.isBodyableNode(n.nextMember)&&n.nextMember.hasBody();null!=n.nextMember&&d||u?e.blankLineIfLastNot():e.newLineIfLastNot()}});function s(e){if(r||null==e||"number"!=typeof e.kind)return!1;const t=e;return o.StructureTypeGuards.isMethod(t)||o.StructureTypeGuards.isGetAccessor(t)||o.StructureTypeGuards.isSetAccessor(t)||o.StructureTypeGuards.isConstructor(t)}}addConstructor(e={}){return this.insertConstructor(i.getEndIndexFromArray(this.getMembersWithComments()),e)}addConstructors(e){return this.insertConstructors(i.getEndIndexFromArray(this.getMembersWithComments()),e)}insertConstructor(e,t={}){return this.insertConstructors(e,[t])[0]}insertConstructors(e,t){const r=a.isNodeAmbientOrInAmbientContext(this);return y(this,{index:e,structures:t,expectedKind:s.SyntaxKind.Constructor,write:(e,s)=>{r||null==s.previousMember?e.newLineIfLastNot():e.blankLineIfLastNot(),this._context.structurePrinterFactory.forConstructorDeclaration({isAmbient:r}).printTexts(e,t),r||null==s.nextMember?e.newLineIfLastNot():e.blankLineIfLastNot()}})}getConstructors(){return this.getMembers().filter(e=>a.TypeGuards.isConstructorDeclaration(e))}addGetAccessor(e){return this.addGetAccessors([e])[0]}addGetAccessors(e){return this.insertGetAccessors(i.getEndIndexFromArray(this.getMembersWithComments()),e)}insertGetAccessor(e,t){return this.insertGetAccessors(e,[t])[0]}insertGetAccessors(e,t){return y(this,{index:e,structures:t,expectedKind:s.SyntaxKind.GetAccessor,write:(e,r)=>{null!=r.previousMember?e.blankLineIfLastNot():e.newLineIfLastNot(),this._context.structurePrinterFactory.forGetAccessorDeclaration({isAmbient:a.isNodeAmbientOrInAmbientContext(this)}).printTexts(e,t),null!=r.nextMember?e.blankLineIfLastNot():e.newLineIfLastNot()}})}addSetAccessor(e){return this.addSetAccessors([e])[0]}addSetAccessors(e){return this.insertSetAccessors(i.getEndIndexFromArray(this.getMembersWithComments()),e)}insertSetAccessor(e,t){return this.insertSetAccessors(e,[t])[0]}insertSetAccessors(e,t){return y(this,{index:e,structures:t,expectedKind:s.SyntaxKind.SetAccessor,write:(e,r)=>{null!=r.previousMember?e.blankLineIfLastNot():e.newLineIfLastNot(),this._context.structurePrinterFactory.forSetAccessorDeclaration({isAmbient:a.isNodeAmbientOrInAmbientContext(this)}).printTexts(e,t),null!=r.nextMember?e.blankLineIfLastNot():e.newLineIfLastNot()}})}addProperty(e){return this.addProperties([e])[0]}addProperties(e){return this.insertProperties(i.getEndIndexFromArray(this.getMembersWithComments()),e)}insertProperty(e,t){return this.insertProperties(e,[t])[0]}insertProperties(e,t){return y(this,{index:e,structures:t,expectedKind:s.SyntaxKind.PropertyDeclaration,write:(e,r)=>{null!=r.previousMember&&a.TypeGuards.hasBody(r.previousMember)?e.blankLineIfLastNot():e.newLineIfLastNot(),this._context.structurePrinterFactory.forPropertyDeclaration().printTexts(e,t),null!=r.nextMember&&a.TypeGuards.hasBody(r.nextMember)?e.blankLineIfLastNot():e.newLineIfLastNot()}})}addMethod(e){return this.addMethods([e])[0]}addMethods(e){return this.insertMethods(i.getEndIndexFromArray(this.getMembersWithComments()),e)}insertMethod(e,t){return this.insertMethods(e,[t])[0]}insertMethods(e,t){const r=a.isNodeAmbientOrInAmbientContext(this);return y(this,{index:e,write:(e,s)=>{r||null==s.previousMember?e.newLineIfLastNot():e.blankLineIfLastNot(),this._context.structurePrinterFactory.forMethodDeclaration({isAmbient:r}).printTexts(e,t),r||null==s.nextMember?e.newLineIfLastNot():e.blankLineIfLastNot()},structures:t=t.map(e=>Object.assign({},e)),expectedKind:s.SyntaxKind.MethodDeclaration})}getInstanceProperty(e){return a.getNodeByNameOrFindFunction(this.getInstanceProperties(),e)}getInstancePropertyOrThrow(e){return n.throwIfNullOrUndefined(this.getInstanceProperty(e),()=>a.getNotFoundErrorMessageForNameOrFindFunction("class instance property",e))}getInstanceProperties(){return this.getInstanceMembers().filter(e=>p(e))}getStaticProperty(e){return a.getNodeByNameOrFindFunction(this.getStaticProperties(),e)}getStaticPropertyOrThrow(e){return n.throwIfNullOrUndefined(this.getStaticProperty(e),()=>a.getNotFoundErrorMessageForNameOrFindFunction("class static property",e))}getStaticProperties(){return this.getStaticMembers().filter(e=>p(e))}getProperty(e){return a.getNodeByNameOrFindFunction(this.getProperties(),e)}getPropertyOrThrow(e){return n.throwIfNullOrUndefined(this.getProperty(e),()=>a.getNotFoundErrorMessageForNameOrFindFunction("class property declaration",e))}getProperties(){return this.getMembers().filter(e=>a.TypeGuards.isPropertyDeclaration(e))}getGetAccessor(e){return a.getNodeByNameOrFindFunction(this.getGetAccessors(),e)}getGetAccessorOrThrow(e){return n.throwIfNullOrUndefined(this.getGetAccessor(e),()=>a.getNotFoundErrorMessageForNameOrFindFunction("class getAccessor declaration",e))}getGetAccessors(){return this.getMembers().filter(e=>a.TypeGuards.isGetAccessorDeclaration(e))}getSetAccessor(e){return a.getNodeByNameOrFindFunction(this.getSetAccessors(),e)}getSetAccessorOrThrow(e){return n.throwIfNullOrUndefined(this.getSetAccessor(e),()=>a.getNotFoundErrorMessageForNameOrFindFunction("class setAccessor declaration",e))}getSetAccessors(){return this.getMembers().filter(e=>a.TypeGuards.isSetAccessorDeclaration(e))}getMethod(e){return a.getNodeByNameOrFindFunction(this.getMethods(),e)}getMethodOrThrow(e){return n.throwIfNullOrUndefined(this.getMethod(e),()=>a.getNotFoundErrorMessageForNameOrFindFunction("class method declaration",e))}getMethods(){return this.getMembers().filter(e=>a.TypeGuards.isMethodDeclaration(e))}getInstanceMethod(e){return a.getNodeByNameOrFindFunction(this.getInstanceMethods(),e)}getInstanceMethodOrThrow(e){return n.throwIfNullOrUndefined(this.getInstanceMethod(e),()=>a.getNotFoundErrorMessageForNameOrFindFunction("class instance method",e))}getInstanceMethods(){return this.getInstanceMembers().filter(e=>e instanceof u.MethodDeclaration)}getStaticMethod(e){return a.getNodeByNameOrFindFunction(this.getStaticMethods(),e)}getStaticMethodOrThrow(e){return n.throwIfNullOrUndefined(this.getStaticMethod(e),()=>a.getNotFoundErrorMessageForNameOrFindFunction("class static method",e))}getStaticMethods(){return this.getStaticMembers().filter(e=>e instanceof u.MethodDeclaration)}getInstanceMember(e){return a.getNodeByNameOrFindFunction(this.getInstanceMembers(),e)}getInstanceMemberOrThrow(e){return n.throwIfNullOrUndefined(this.getInstanceMember(e),()=>a.getNotFoundErrorMessageForNameOrFindFunction("class instance member",e))}getInstanceMembers(){return this.getMembersWithParameterProperties().filter(e=>!a.TypeGuards.isConstructorDeclaration(e)&&(a.TypeGuards.isParameterDeclaration(e)||!e.isStatic()))}getStaticMember(e){return a.getNodeByNameOrFindFunction(this.getStaticMembers(),e)}getStaticMemberOrThrow(e){return n.throwIfNullOrUndefined(this.getStaticMember(e),()=>a.getNotFoundErrorMessageForNameOrFindFunction("class static member",e))}getStaticMembers(){return this.getMembers().filter(e=>!a.TypeGuards.isConstructorDeclaration(e)&&(!a.TypeGuards.isParameterDeclaration(e)&&e.isStatic()))}getMembersWithParameterProperties(){const e=this.getMembers(),t=e.filter(e=>a.TypeGuards.isConstructorDeclaration(e)&&e.isImplementation());for(const r of t){let t=e.indexOf(r)+1;for(const s of r.getParameters())s.isParameterProperty()&&(e.splice(t,0,s),t++)}return e}getMembers(){return g(this,this.compilerNode.members).filter(e=>b(e))}getMembersWithComments(){const e=this.compilerNode;return g(this,d.ExtendedParser.getContainerArray(e,this.getSourceFile().compilerNode)).filter(e=>b(e)||a.TypeGuards.isCommentClassElement(e))}getMember(e){return a.getNodeByNameOrFindFunction(this.getMembers(),e)}getMemberOrThrow(e){return n.throwIfNullOrUndefined(this.getMember(e),()=>a.getNotFoundErrorMessageForNameOrFindFunction("class member",e))}getBaseTypes(){return this.getType().getBaseTypes()}getBaseClassOrThrow(){return n.throwIfNullOrUndefined(this.getBaseClass(),`Expected to find the base class of ${this.getName()}.`)}getBaseClass(){const e=a.ArrayUtils.flatten(this.getBaseTypes().map(e=>e.isIntersection()?e.getIntersectionTypes():[e])).map(e=>e.getSymbol()).filter(e=>null!=e).map(e=>e.getDeclarations()).reduce((e,t)=>e.concat(t),[]).filter(e=>e.getKind()===s.SyntaxKind.ClassDeclaration);if(1===e.length)return e[0]}getDerivedClasses(){const e=m(this);for(let t=0;t<e.length;t++){const r=m(e[t]);for(const t of r)t!==this&&-1===e.indexOf(t)&&e.push(t)}return e}}}function g(e,t){const r=a.isNodeAmbientOrInAmbientContext(e),s=t.map(t=>e._getNodeFromCompilerNode(t));return r?s:s.filter(e=>!a.TypeGuards.isConstructorDeclaration(e)&&!a.TypeGuards.isMethodDeclaration(e)||(!(!a.TypeGuards.isMethodDeclaration(e)||!e.isAbstract())||e.isImplementation()))}function m(e){const t=[],r=e.getNameNode();if(null==r)return t;for(const e of r.findReferencesAsNodes()){const r=e.getParentIfKind(s.SyntaxKind.ExpressionWithTypeArguments);if(null==r)continue;const n=r.getParentIfKind(s.SyntaxKind.HeritageClause);if(null==n||n.getToken()!==s.SyntaxKind.ExtendsKeyword)continue;const i=n.getParentIfKind(s.SyntaxKind.ClassDeclaration);null!=i&&t.push(i)}return t}function p(e){return a.TypeGuards.isPropertyDeclaration(e)||a.TypeGuards.isSetAccessorDeclaration(e)||a.TypeGuards.isGetAccessorDeclaration(e)||a.TypeGuards.isParameterDeclaration(e)}function b(e){return a.TypeGuards.isMethodDeclaration(e)||a.TypeGuards.isPropertyDeclaration(e)||a.TypeGuards.isGetAccessorDeclaration(e)||a.TypeGuards.isSetAccessorDeclaration(e)||a.TypeGuards.isConstructorDeclaration(e)}function y(e,t){return i.insertIntoBracesOrSourceFileWithGetChildren(Object.assign({getIndexedChildren:()=>e.getMembersWithComments(),parent:e},t))}t.ClassLikeDeclarationBase=function(e){return h(c.NameableNode(c.TextInsertableNode(c.ImplementsClauseableNode(c.HeritageClauseableNode(l.AbstractableNode(c.JSDocableNode(c.TypeParameteredNode(c.DecoratableNode(c.ModifierableNode(e))))))))))},t.ClassLikeDeclarationBaseSpecific=h}}]);
//# sourceMappingURL=vendor.ts-morph~22b9b95c.b8ec4104c0f10f86716e.bundle.map