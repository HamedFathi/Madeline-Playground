(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"9kwo":function(t,e,o){"use strict";const r=o("HwUZ");t.exports=class extends r{constructor(t,e){super(t),this.posTracker=null,this.onParseError=e.onParseError}_setErrorLocation(t){t.startLine=t.endLine=this.posTracker.line,t.startCol=t.endCol=this.posTracker.col,t.startOffset=t.endOffset=this.posTracker.offset}_reportError(t){const e={code:t,startLine:-1,startCol:-1,startOffset:-1,endLine:-1,endCol:-1,endOffset:-1};this._setErrorLocation(e),this.onParseError(e)}_getOverriddenMethods(t){return{_err(e){t._reportError(e)}}}}},CGnT:function(t,e,o){"use strict";const r=o("HwUZ");t.exports=class extends r{constructor(t){super(t),this.preprocessor=t,this.isEol=!1,this.lineStartPos=0,this.droppedBufferSize=0,this.offset=0,this.col=0,this.line=1}_getOverriddenMethods(t,e){return{advance(){const o=this.pos+1,r=this.html[o];return t.isEol&&(t.isEol=!1,t.line++,t.lineStartPos=o),("\n"===r||"\r"===r&&"\n"!==this.html[o+1])&&(t.isEol=!0),t.col=o-t.lineStartPos+1,t.offset=t.droppedBufferSize+o,e.advance.call(this)},retreat(){e.retreat.call(this),t.isEol=!1,t.col=this.pos-t.lineStartPos+1},dropParsedChunk(){const o=this.pos;e.dropParsedChunk.call(this);const r=o-this.pos;t.lineStartPos-=r,t.droppedBufferSize+=r,t.offset=t.droppedBufferSize+this.pos}}}}},Ne21:function(t,e,o){"use strict";const r=o("9kwo"),n=o("srZV"),s=o("HwUZ");t.exports=class extends r{constructor(t,e){super(t,e);const o=s.install(t.preprocessor,n,e);this.posTracker=o.posTracker}}},UTAp:function(t,e,o){"use strict";const r=o("HwUZ");t.exports=class extends r{constructor(t,e){super(t),this.onItemPop=e.onItemPop}_getOverriddenMethods(t,e){return{pop(){t.onItemPop(this.current),e.pop.call(this)},popAllUpToHtmlElement(){for(let e=this.stackTop;e>0;e--)t.onItemPop(this.items[e]);e.popAllUpToHtmlElement.call(this)},remove(o){t.onItemPop(this.current),e.remove.call(this,o)}}}}},"Y/Y8":function(t,e,o){"use strict";const r=o("HwUZ"),n=o("zpDW"),s=o("lb9w"),a=o("UTAp"),i=o("UwWT").TAG_NAMES;t.exports=class extends r{constructor(t){super(t),this.parser=t,this.treeAdapter=this.parser.treeAdapter,this.posTracker=null,this.lastStartTagToken=null,this.lastFosterParentingLocation=null,this.currentToken=null}_setStartLocation(t){let e=null;this.lastStartTagToken&&((e=Object.assign({},this.lastStartTagToken.location)).startTag=this.lastStartTagToken.location),this.treeAdapter.setNodeSourceCodeLocation(t,e)}_setEndLocation(t,e){const o=this.treeAdapter.getNodeSourceCodeLocation(t);if(o&&e.location){const r=e.location,s=this.treeAdapter.getTagName(t);e.type===n.END_TAG_TOKEN&&s===e.tagName?(o.endTag=Object.assign({},r),o.endLine=r.endLine,o.endCol=r.endCol,o.endOffset=r.endOffset):(o.endLine=r.startLine,o.endCol=r.startCol,o.endOffset=r.startOffset)}}_getOverriddenMethods(t,e){return{_bootstrap(o,n){e._bootstrap.call(this,o,n),t.lastStartTagToken=null,t.lastFosterParentingLocation=null,t.currentToken=null;const i=r.install(this.tokenizer,s);t.posTracker=i.posTracker,r.install(this.openElements,a,{onItemPop:function(e){t._setEndLocation(e,t.currentToken)}})},_runParsingLoop(o){e._runParsingLoop.call(this,o);for(let e=this.openElements.stackTop;e>=0;e--)t._setEndLocation(this.openElements.items[e],t.currentToken)},_processTokenInForeignContent(o){t.currentToken=o,e._processTokenInForeignContent.call(this,o)},_processToken(o){if(t.currentToken=o,e._processToken.call(this,o),o.type===n.END_TAG_TOKEN&&(o.tagName===i.HTML||o.tagName===i.BODY&&this.openElements.hasInScope(i.BODY)))for(let e=this.openElements.stackTop;e>=0;e--){const r=this.openElements.items[e];if(this.treeAdapter.getTagName(r)===o.tagName){t._setEndLocation(r,o);break}}},_setDocumentType(t){e._setDocumentType.call(this,t);const o=this.treeAdapter.getChildNodes(this.document),r=o.length;for(let e=0;e<r;e++){const r=o[e];if(this.treeAdapter.isDocumentTypeNode(r)){this.treeAdapter.setNodeSourceCodeLocation(r,t.location);break}}},_attachElementToTree(o){t._setStartLocation(o),t.lastStartTagToken=null,e._attachElementToTree.call(this,o)},_appendElement(o,r){t.lastStartTagToken=o,e._appendElement.call(this,o,r)},_insertElement(o,r){t.lastStartTagToken=o,e._insertElement.call(this,o,r)},_insertTemplate(o){t.lastStartTagToken=o,e._insertTemplate.call(this,o);const r=this.treeAdapter.getTemplateContent(this.openElements.current);this.treeAdapter.setNodeSourceCodeLocation(r,null)},_insertFakeRootElement(){e._insertFakeRootElement.call(this),this.treeAdapter.setNodeSourceCodeLocation(this.openElements.current,null)},_appendCommentNode(t,o){e._appendCommentNode.call(this,t,o);const r=this.treeAdapter.getChildNodes(o),n=r[r.length-1];this.treeAdapter.setNodeSourceCodeLocation(n,t.location)},_findFosterParentingLocation(){return t.lastFosterParentingLocation=e._findFosterParentingLocation.call(this),t.lastFosterParentingLocation},_insertCharacters(o){e._insertCharacters.call(this,o);const r=this._shouldFosterParentOnInsertion(),n=r&&t.lastFosterParentingLocation.parent||this.openElements.currentTmplContent||this.openElements.current,s=this.treeAdapter.getChildNodes(n),a=r&&t.lastFosterParentingLocation.beforeElement?s.indexOf(t.lastFosterParentingLocation.beforeElement)-1:s.length-1,i=s[a],c=this.treeAdapter.getNodeSourceCodeLocation(i);c?(c.endLine=o.location.endLine,c.endCol=o.location.endCol,c.endOffset=o.location.endOffset):this.treeAdapter.setNodeSourceCodeLocation(i,o.location)}}}}},lb9w:function(t,e,o){"use strict";const r=o("HwUZ"),n=o("zpDW"),s=o("CGnT");t.exports=class extends r{constructor(t){super(t),this.tokenizer=t,this.posTracker=r.install(t.preprocessor,s),this.currentAttrLocation=null,this.ctLoc=null}_getCurrentLocation(){return{startLine:this.posTracker.line,startCol:this.posTracker.col,startOffset:this.posTracker.offset,endLine:-1,endCol:-1,endOffset:-1}}_attachCurrentAttrLocationInfo(){this.currentAttrLocation.endLine=this.posTracker.line,this.currentAttrLocation.endCol=this.posTracker.col,this.currentAttrLocation.endOffset=this.posTracker.offset;const t=this.tokenizer.currentToken,e=this.tokenizer.currentAttr;t.location.attrs||(t.location.attrs=Object.create(null)),t.location.attrs[e.name]=this.currentAttrLocation}_getOverriddenMethods(t,e){const o={_createStartTagToken(){e._createStartTagToken.call(this),this.currentToken.location=t.ctLoc},_createEndTagToken(){e._createEndTagToken.call(this),this.currentToken.location=t.ctLoc},_createCommentToken(){e._createCommentToken.call(this),this.currentToken.location=t.ctLoc},_createDoctypeToken(o){e._createDoctypeToken.call(this,o),this.currentToken.location=t.ctLoc},_createCharacterToken(o,r){e._createCharacterToken.call(this,o,r),this.currentCharacterToken.location=t.ctLoc},_createEOFToken(){e._createEOFToken.call(this),this.currentToken.location=t._getCurrentLocation()},_createAttr(o){e._createAttr.call(this,o),t.currentAttrLocation=t._getCurrentLocation()},_leaveAttrName(o){e._leaveAttrName.call(this,o),t._attachCurrentAttrLocationInfo()},_leaveAttrValue(o){e._leaveAttrValue.call(this,o),t._attachCurrentAttrLocationInfo()},_emitCurrentToken(){const o=this.currentToken.location;this.currentCharacterToken&&(this.currentCharacterToken.location.endLine=o.startLine,this.currentCharacterToken.location.endCol=o.startCol,this.currentCharacterToken.location.endOffset=o.startOffset),this.currentToken.type===n.EOF_TOKEN?(o.endLine=o.startLine,o.endCol=o.startCol,o.endOffset=o.startOffset):(o.endLine=t.posTracker.line,o.endCol=t.posTracker.col+1,o.endOffset=t.posTracker.offset+1),e._emitCurrentToken.call(this)},_emitCurrentCharacterToken(){const o=this.currentCharacterToken&&this.currentCharacterToken.location;o&&-1===o.endOffset&&(o.endLine=t.posTracker.line,o.endCol=t.posTracker.col,o.endOffset=t.posTracker.offset),e._emitCurrentCharacterToken.call(this)}};return Object.keys(n.MODE).forEach(r=>{const s=n.MODE[r];o[s]=function(o){t.ctLoc=t._getCurrentLocation(),e[s].call(this,o)}}),o}}},niEq:function(t,e,o){"use strict";const r=o("9kwo"),n=o("Ne21"),s=o("lb9w"),a=o("HwUZ");t.exports=class extends r{constructor(t,e){super(t,e),this.opts=e,this.ctLoc=null,this.locBeforeToken=!1}_setErrorLocation(t){this.ctLoc&&(t.startLine=this.ctLoc.startLine,t.startCol=this.ctLoc.startCol,t.startOffset=this.ctLoc.startOffset,t.endLine=this.locBeforeToken?this.ctLoc.startLine:this.ctLoc.endLine,t.endCol=this.locBeforeToken?this.ctLoc.startCol:this.ctLoc.endCol,t.endOffset=this.locBeforeToken?this.ctLoc.startOffset:this.ctLoc.endOffset)}_getOverriddenMethods(t,e){return{_bootstrap(o,r){e._bootstrap.call(this,o,r),a.install(this.tokenizer,n,t.opts),a.install(this.tokenizer,s)},_processInputToken(o){t.ctLoc=o.location,e._processInputToken.call(this,o)},_err(e,o){t.locBeforeToken=o&&o.beforeToken,t._reportError(e)}}}}},o4mS:function(t,e,o){"use strict";const r=o("zSMa"),n=o("O/jM");e.parse=function(t,e){return new r(e).parse(t)},e.parseFragment=function(t,e,o){return"string"==typeof t&&(o=e,e=t,t=null),new r(o).parseFragment(e,t)},e.serialize=function(t,e){return new n(t,e).serialize()}},srZV:function(t,e,o){"use strict";const r=o("9kwo"),n=o("CGnT"),s=o("HwUZ");t.exports=class extends r{constructor(t,e){super(t,e),this.posTracker=s.install(t,n),this.lastErrOffset=-1}_reportError(t){this.lastErrOffset!==this.posTracker.offset&&(this.lastErrOffset=this.posTracker.offset,super._reportError(t))}}}}]);
//# sourceMappingURL=vendor.parse5~a40c7159.d72bb9205a046870dfa0.bundle.map