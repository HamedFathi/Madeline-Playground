(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{"UiQ/":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=t("Q6bK"),i=t("LkSk"),o=t("j0br");function l(e){const{sourceFile:n,newText:t}=e;o.doManipulation(n,new i.FullReplacementTextManipulator(t),(new r.NodeHandlerFactory).getForStraightReplacement(n._context.compilerFactory))}function a(e){const{sourceFile:n,newFilePath:t}=e;o.doManipulation(n,new i.UnchangedTextManipulator,(new r.NodeHandlerFactory).getForStraightReplacement(n._context.compilerFactory),t)}n.replaceNodeText=function(e){o.doManipulation(e.sourceFile,new i.InsertionTextManipulator({insertPos:e.start,newText:e.newText,replacingLength:e.replacingLength}),(new r.NodeHandlerFactory).getForForgetChanged(e.sourceFile._context.compilerFactory))},n.replaceSourceFileTextForFormatting=function(e){l(e)},n.replaceSourceFileTextStraight=l,n.replaceSourceFileTextForRename=function(e){const{sourceFile:n,renameLocations:t,newName:l}=e,a=new r.NodeHandlerFactory;o.doManipulation(n,new i.RenameLocationTextManipulator(t,l),a.getForTryOrForget(a.getForRename(n._context.compilerFactory)))},n.replaceTextPossiblyCreatingChildNodes=function(e){const{replacePos:n,replacingLength:t,newText:l,parent:a}=e;o.doManipulation(a._sourceFile,new i.InsertionTextManipulator({insertPos:n,replacingLength:t,newText:l}),(new r.NodeHandlerFactory).getForParentRange({parent:a,start:n,end:n+l.length}))},n.replaceSourceFileForFilePathMove=a,n.replaceSourceFileForCacheUpdate=function(e){a({sourceFile:e,newFilePath:e.getFilePath()})}},fPfI:function(e,n,t){"use strict";function r(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}Object.defineProperty(n,"__esModule",{value:!0}),r(t("mlWQ")),r(t("i2sv")),r(t("gJME")),r(t("UiQ/"))},gJME:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=t("1hU1"),i=t("qYB5"),o=t("DNvG"),l=t("Q6bK"),a=t("LkSk"),d=t("j0br");function c(e){const{children:n}=e;0!==n.length&&d.doManipulation(n[0].getSourceFile(),new a.RemoveChildrenTextManipulator(e),(new l.NodeHandlerFactory).getForChildIndex({parent:n[0].getParentSyntaxList()||n[0].getParentOrThrow(),childIndex:n[0].getChildIndex(),childCount:-1*n.length}))}function s(e){const{children:n,getSiblingFormatting:t}=e;0!==n.length&&d.doManipulation(n[0]._sourceFile,new a.RemoveChildrenWithFormattingTextManipulator({children:n,getSiblingFormatting:t}),(new l.NodeHandlerFactory).getForChildIndex({parent:n[0].getParentSyntaxList()||n[0].getParentOrThrow(),childIndex:n[0].getChildIndex(),childCount:-1*n.length}))}function g(e){s({getSiblingFormatting:o.getClassMemberFormatting,children:e})}function u(e){s({getSiblingFormatting:o.getInterfaceMemberFormatting,children:e})}function h(e){s({getSiblingFormatting:o.getStatementedNodeChildFormatting,children:e})}function p(e){s({getSiblingFormatting:o.getClausedNodeChildFormatting,children:e})}n.removeChildren=c,n.removeChildrenWithFormattingFromCollapsibleSyntaxList=function(e){const{children:n}=e;if(0===n.length)return;const t=n[0].getParentSyntaxListOrThrow();t.getChildCount()===n.length?s({children:[t],getSiblingFormatting:()=>o.FormattingKind.None}):s(e)},n.removeChildrenWithFormatting=s,n.removeClassMember=function(e){if(i.TypeGuards.isOverloadableNode(e))if(e.isImplementation())g([...e.getOverloads(),e]);else{const n=e.getParentOrThrow();i.TypeGuards.isAmbientableNode(n)&&n.isAmbient()?g([e]):c({children:[e],removeFollowingSpaces:!0,removeFollowingNewLines:!0})}else g([e])},n.removeClassMembers=g,n.removeInterfaceMember=function(e){u([e])},n.removeInterfaceMembers=u,n.removeCommaSeparatedChild=function(e){const n=[e],t=e.getParentSyntaxListOrThrow(),i=n[0]===t.getFirstChild();!function(){const t=e.getNextSiblingIfKind(r.SyntaxKind.CommaToken);null!=t&&n.push(t)}(),function(){if(t.getLastChild()!==n[n.length-1])return;const i=e.getPreviousSiblingIfKind(r.SyntaxKind.CommaToken);null!=i&&n.unshift(i)}(),c({children:n,removePrecedingSpaces:!i||t.getChildren().length===n.length&&n[0].isFirstNodeOnLine(),removeFollowingSpaces:i,removePrecedingNewLines:!i,removeFollowingNewLines:i})},n.removeOverloadableStatementedNodeChild=function(e){e.isOverload()?c({children:[e],removeFollowingSpaces:!0,removeFollowingNewLines:!0}):h([...e.getOverloads(),e])},n.removeStatementedNodeChild=function(e){h([e])},n.removeStatementedNodeChildren=h,n.removeClausedNodeChild=function(e){p([e])},n.removeClausedNodeChildren=p,n.unwrapNode=function(e){d.doManipulation(e._sourceFile,new a.UnwrapTextManipulator(e),(new l.NodeHandlerFactory).getForUnwrappingNode(e))}},i2sv:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=t("Q6bK"),i=t("LkSk"),o=t("j0br");n.changeChildOrder=function(e){const{parent:n}=e;o.doManipulation(n._sourceFile,new i.ChangingChildOrderTextManipulator(e),(new r.NodeHandlerFactory).getForChangingChildOrder(e))}},j0br:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=t("EboW");n.doManipulation=function(e,n,t,i){e._firePreModified();const o=n.getNewText(e.getFullText());try{const l=e._context.compilerFactory.createCompilerSourceFileFromText(i||e.getFilePath(),o,e.getScriptKind());t.handleNode(e,l,l)}catch(t){throw new r.InvalidOperationError(t.message+"\n-- Details --\n"+`Path: ${e.getFilePath()}\n`+`Text: ${JSON.stringify(n.getTextForError(o))}\n`+`Stack: ${t.stack}`)}}},mlWQ:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=t("1hU1"),i=t("qYB5"),o=t("7TW2"),l=t("Q6bK"),a=t("LkSk"),d=t("j0br");function c(e){const{insertPos:n,newText:t,parent:r}=e;d.doManipulation(r._sourceFile,new a.InsertionTextManipulator({insertPos:n,newText:t,replacingLength:null==e.replacing?void 0:e.replacing.textLength}),(new l.NodeHandlerFactory).getForParentRange({parent:r,start:n,end:n+t.length,replacingLength:null==e.replacing?void 0:e.replacing.textLength,replacingNodes:null==e.replacing?void 0:e.replacing.nodes,customMappings:e.customMappings}))}function s(e){const{parent:n,index:t,children:r}=e,c=n._sourceFile.getFullText(),s=o.getInsertPosFromIndex(t,n.getChildSyntaxListOrThrow(),r),g=o.getEndPosFromIndex(t,n,r,c)-s,u=function(){const o=n._getWriterWithChildIndentation();return e.write(o,{previousMember:l(r[t-1]),nextMember:l(r[t]),isStartOfFile:0===s}),o.toString();function l(e){return null==e?e:i.TypeGuards.isOverloadableNode(e)&&e.getImplementation()||e}}();d.doManipulation(n._sourceFile,new a.InsertionTextManipulator({insertPos:s,replacingLength:g,newText:u}),(new l.NodeHandlerFactory).getForParentRange({parent:n.getChildSyntaxListOrThrow(),start:s,end:s+u.length,replacingLength:g}))}n.insertIntoParentTextRange=c,n.insertIntoTextRange=function(e){const{insertPos:n,newText:t,sourceFile:r}=e;d.doManipulation(r,new a.InsertionTextManipulator({insertPos:n,newText:t}),(new l.NodeHandlerFactory).getForRange({sourceFile:r,start:n,end:n+t.length}))},n.insertIntoCommaSeparatedNodes=function(e){const{currentNodes:n,insertIndex:t,parent:l}=e,a=n[t-1],d=function(){for(let e=t-1;e>=0;e--)if(!i.TypeGuards.isCommentNode(n[e]))return n[e];return}(),s=n[t],g=function(){for(let e=t;e<n.length;e++)if(!i.TypeGuards.isCommentNode(n[e]))return n[e];return}(),u=e.useNewLines?l._context.manipulationSettings.getNewLineKindAsString():" ",h=l.getNextSibling(),p=null!=h&&(h.getKind()===r.SyntaxKind.CloseBraceToken||h.getKind()===r.SyntaxKind.CloseBracketToken);let{newText:m}=e;if(null!=a){!function(){if(null==d)return void F();const e=l.getSourceFile().getFullText(),n=d.getNextSibling();let t="";null!=n&&n.getKind()===r.SyntaxKind.CommaToken?(o(d),t+=",",d===a?o(n):i()):(t+=",",d===a?o(d):i());function i(){const n=c(a)||a.getEnd();t+=e.substring(d.getEnd(),n)}function o(n){const r=c(n);null!=r&&(t+=e.substring(n.getEnd(),r))}function c(e){const n=e.getTrailingCommentRanges(),t=n[n.length-1];return null==t?void 0:t.getEnd()}F(),m=t+m}(),null!=g?x():e.useNewLines||e.surroundWithSpaces?w():f();const n=null==s?p?h.getStart(!0):l.getEnd():s.getStart(!0),t=(d||a).getEnd();c({insertPos:t,newText:m,parent:l,replacing:{textLength:n-t}})}else if(null!=s){(e.useNewLines||e.surroundWithSpaces)&&F(),null==g?w():x();const n=p?l.getPos():l.getStart(!0);c({insertPos:n,newText:m,parent:l,replacing:{textLength:s.getStart(!0)-n}})}else e.useNewLines||e.surroundWithSpaces?(F(),w()):f(),c({insertPos:l.getPos(),newText:m,parent:l,replacing:{textLength:l.getNextSiblingOrThrow().getStart()-l.getPos()}});function F(){i.StringUtils.startsWithNewLine(m)||(m=u+m)}function x(){m=o.appendCommaToText(m),w()}function w(){i.StringUtils.endsWithNewLine(m)||(m+=u),f()}function f(){(e.useNewLines||i.StringUtils.endsWithNewLine(m))&&(m+=null!=s?l.getParentOrThrow().getChildIndentationText():l.getParentOrThrow().getIndentationText())}},n.insertIntoBracesOrSourceFile=s,n.insertIntoBracesOrSourceFileWithGetChildren=function(e){if(0===e.structures.length)return[];const n=e.getIndexedChildren(),t=e.parent.getChildSyntaxListOrThrow(),r=o.verifyAndGetIndex(e.index,n.length);return s({parent:e.parent,index:0===r?0:n[r-1].getChildIndex()+1,children:t.getChildren(),write:e.write}),o.getRangeWithoutCommentsFromArray(e.getIndexedChildren(),e.index,e.structures.length,e.expectedKind)},n.insertIntoBracesOrSourceFileWithGetChildrenWithComments=function(e){const n=e.getIndexedChildren(),t=e.parent.getChildSyntaxListOrThrow(),r=o.verifyAndGetIndex(e.index,n.length);return s({parent:e.parent,index:0===r?0:n[r-1].getChildIndex()+1,children:t.getChildren(),write:e.write}),o.getNodesToReturn(n,e.getIndexedChildren(),r,!0)}}}]);
//# sourceMappingURL=vendor.ts-morph~fe01f74a.ba7b4e3f17253bdbb968.bundle.map