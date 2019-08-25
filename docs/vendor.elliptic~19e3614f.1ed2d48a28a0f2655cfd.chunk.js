(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"6lN/":function(t,e,r){"use strict";var i=r("OZ/i"),n=r("86MQ"),d=n.getNAF,s=n.getJSF,o=n.assert;function u(t,e){this.type=t,this.p=new i(e.p,16),this.red=e.prime?i.red(e.prime):i.mont(this.p),this.zero=new i(0).toRed(this.red),this.one=new i(1).toRed(this.red),this.two=new i(2).toRed(this.red),this.n=e.n&&new i(e.n,16),this.g=e.g&&this.pointFromJSON(e.g,e.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4);var r=this.n&&this.p.div(this.n);!r||r.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}function h(t,e){this.curve=t,this.type=e,this.precomputed=null}t.exports=u,u.prototype.point=function(){throw new Error("Not implemented")},u.prototype.validate=function(){throw new Error("Not implemented")},u.prototype._fixedNafMul=function(t,e){o(t.precomputed);var r=t._getDoubles(),i=d(e,1),n=(1<<r.step+1)-(r.step%2==0?2:1);n/=3;for(var s=[],u=0;u<i.length;u+=r.step){var h=0;for(e=u+r.step-1;e>=u;e--)h=(h<<1)+i[e];s.push(h)}for(var p=this.jpoint(null,null,null),l=this.jpoint(null,null,null),c=n;c>0;c--){for(u=0;u<s.length;u++){(h=s[u])===c?l=l.mixedAdd(r.points[u]):h===-c&&(l=l.mixedAdd(r.points[u].neg()))}p=p.add(l)}return p.toP()},u.prototype._wnafMul=function(t,e){var r=4,i=t._getNAFPoints(r);r=i.wnd;for(var n=i.points,s=d(e,r),u=this.jpoint(null,null,null),h=s.length-1;h>=0;h--){for(e=0;h>=0&&0===s[h];h--)e++;if(h>=0&&e++,u=u.dblp(e),h<0)break;var p=s[h];o(0!==p),u="affine"===t.type?p>0?u.mixedAdd(n[p-1>>1]):u.mixedAdd(n[-p-1>>1].neg()):p>0?u.add(n[p-1>>1]):u.add(n[-p-1>>1].neg())}return"affine"===t.type?u.toP():u},u.prototype._wnafMulAdd=function(t,e,r,i,n){for(var o=this._wnafT1,u=this._wnafT2,h=this._wnafT3,p=0,l=0;l<i;l++){var c=(_=e[l])._getNAFPoints(t);o[l]=c.wnd,u[l]=c.points}for(l=i-1;l>=1;l-=2){var a=l-1,f=l;if(1===o[a]&&1===o[f]){var v=[e[a],null,null,e[f]];0===e[a].y.cmp(e[f].y)?(v[1]=e[a].add(e[f]),v[2]=e[a].toJ().mixedAdd(e[f].neg())):0===e[a].y.cmp(e[f].y.redNeg())?(v[1]=e[a].toJ().mixedAdd(e[f]),v[2]=e[a].add(e[f].neg())):(v[1]=e[a].toJ().mixedAdd(e[f]),v[2]=e[a].toJ().mixedAdd(e[f].neg()));var y=[-3,-1,-5,-7,0,7,5,1,3],m=s(r[a],r[f]);p=Math.max(m[0].length,p),h[a]=new Array(p),h[f]=new Array(p);for(var M=0;M<p;M++){var w=0|m[0][M],b=0|m[1][M];h[a][M]=y[3*(w+1)+(b+1)],h[f][M]=0,u[a]=v}}else h[a]=d(r[a],o[a]),h[f]=d(r[f],o[f]),p=Math.max(h[a].length,p),p=Math.max(h[f].length,p)}var S=this.jpoint(null,null,null),A=this._wnafT4;for(l=p;l>=0;l--){for(var g=0;l>=0;){var x=!0;for(M=0;M<i;M++)A[M]=0|h[M][l],0!==A[M]&&(x=!1);if(!x)break;g++,l--}if(l>=0&&g++,S=S.dblp(g),l<0)break;for(M=0;M<i;M++){var _,z=A[M];0!==z&&(z>0?_=u[M][z-1>>1]:z<0&&(_=u[M][-z-1>>1].neg()),S="affine"===_.type?S.mixedAdd(_):S.add(_))}}for(l=0;l<i;l++)u[l]=null;return n?S:S.toP()},u.BasePoint=h,h.prototype.eq=function(){throw new Error("Not implemented")},h.prototype.validate=function(){return this.curve.validate(this)},u.prototype.decodePoint=function(t,e){t=n.toArray(t,e);var r=this.p.byteLength();if((4===t[0]||6===t[0]||7===t[0])&&t.length-1==2*r)return 6===t[0]?o(t[t.length-1]%2==0):7===t[0]&&o(t[t.length-1]%2==1),this.point(t.slice(1,1+r),t.slice(1+r,1+2*r));if((2===t[0]||3===t[0])&&t.length-1===r)return this.pointFromX(t.slice(1,1+r),3===t[0]);throw new Error("Unknown point format")},h.prototype.encodeCompressed=function(t){return this.encode(t,!0)},h.prototype._encode=function(t){var e=this.curve.p.byteLength(),r=this.getX().toArray("be",e);return t?[this.getY().isEven()?2:3].concat(r):[4].concat(r,this.getY().toArray("be",e))},h.prototype.encode=function(t,e){return n.encode(this._encode(e),t)},h.prototype.precompute=function(t){if(this.precomputed)return this;var e={doubles:null,naf:null,beta:null};return e.naf=this._getNAFPoints(8),e.doubles=this._getDoubles(4,t),e.beta=this._getBeta(),this.precomputed=e,this},h.prototype._hasDoubles=function(t){if(!this.precomputed)return!1;var e=this.precomputed.doubles;return!!e&&e.points.length>=Math.ceil((t.bitLength()+1)/e.step)},h.prototype._getDoubles=function(t,e){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var r=[this],i=this,n=0;n<e;n+=t){for(var d=0;d<t;d++)i=i.dbl();r.push(i)}return{step:t,points:r}},h.prototype._getNAFPoints=function(t){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var e=[this],r=(1<<t)-1,i=1===r?null:this.dbl(),n=1;n<r;n++)e[n]=e[n-1].add(i);return{wnd:t,points:e}},h.prototype._getBeta=function(){return null},h.prototype.dblp=function(t){for(var e=this,r=0;r<t;r++)e=e.dbl();return e}},MzeL:function(t,e,r){"use strict";var i=e;i.version=r("KAEN").version,i.utils=r("86MQ"),i.rand=r("/ayr"),i.curve=r("QTa/"),i.curves=r("DLvh"),i.ec=r("uagp"),i.eddsa=r("lF1L")},"Pa+m":function(t,e,r){"use strict";var i=r("86MQ"),n=r("OZ/i"),d=r("P7XM"),s=r("6lN/"),o=i.assert;function u(t){this.twisted=1!=(0|t.a),this.mOneA=this.twisted&&-1==(0|t.a),this.extended=this.mOneA,s.call(this,"edwards",t),this.a=new n(t.a,16).umod(this.red.m),this.a=this.a.toRed(this.red),this.c=new n(t.c,16).toRed(this.red),this.c2=this.c.redSqr(),this.d=new n(t.d,16).toRed(this.red),this.dd=this.d.redAdd(this.d),o(!this.twisted||0===this.c.fromRed().cmpn(1)),this.oneC=1==(0|t.c)}function h(t,e,r,i,d){s.BasePoint.call(this,t,"projective"),null===e&&null===r&&null===i?(this.x=this.curve.zero,this.y=this.curve.one,this.z=this.curve.one,this.t=this.curve.zero,this.zOne=!0):(this.x=new n(e,16),this.y=new n(r,16),this.z=i?new n(i,16):this.curve.one,this.t=d&&new n(d,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.t&&!this.t.red&&(this.t=this.t.toRed(this.curve.red)),this.zOne=this.z===this.curve.one,this.curve.extended&&!this.t&&(this.t=this.x.redMul(this.y),this.zOne||(this.t=this.t.redMul(this.z.redInvm()))))}d(u,s),t.exports=u,u.prototype._mulA=function(t){return this.mOneA?t.redNeg():this.a.redMul(t)},u.prototype._mulC=function(t){return this.oneC?t:this.c.redMul(t)},u.prototype.jpoint=function(t,e,r,i){return this.point(t,e,r,i)},u.prototype.pointFromX=function(t,e){(t=new n(t,16)).red||(t=t.toRed(this.red));var r=t.redSqr(),i=this.c2.redSub(this.a.redMul(r)),d=this.one.redSub(this.c2.redMul(this.d).redMul(r)),s=i.redMul(d.redInvm()),o=s.redSqrt();if(0!==o.redSqr().redSub(s).cmp(this.zero))throw new Error("invalid point");var u=o.fromRed().isOdd();return(e&&!u||!e&&u)&&(o=o.redNeg()),this.point(t,o)},u.prototype.pointFromY=function(t,e){(t=new n(t,16)).red||(t=t.toRed(this.red));var r=t.redSqr(),i=r.redSub(this.c2),d=r.redMul(this.d).redMul(this.c2).redSub(this.a),s=i.redMul(d.redInvm());if(0===s.cmp(this.zero)){if(e)throw new Error("invalid point");return this.point(this.zero,t)}var o=s.redSqrt();if(0!==o.redSqr().redSub(s).cmp(this.zero))throw new Error("invalid point");return o.fromRed().isOdd()!==e&&(o=o.redNeg()),this.point(o,t)},u.prototype.validate=function(t){if(t.isInfinity())return!0;t.normalize();var e=t.x.redSqr(),r=t.y.redSqr(),i=e.redMul(this.a).redAdd(r),n=this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(r)));return 0===i.cmp(n)},d(h,s.BasePoint),u.prototype.pointFromJSON=function(t){return h.fromJSON(this,t)},u.prototype.point=function(t,e,r,i){return new h(this,t,e,r,i)},h.fromJSON=function(t,e){return new h(t,e[0],e[1],e[2])},h.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},h.prototype.isInfinity=function(){return 0===this.x.cmpn(0)&&(0===this.y.cmp(this.z)||this.zOne&&0===this.y.cmp(this.curve.c))},h.prototype._extDbl=function(){var t=this.x.redSqr(),e=this.y.redSqr(),r=this.z.redSqr();r=r.redIAdd(r);var i=this.curve._mulA(t),n=this.x.redAdd(this.y).redSqr().redISub(t).redISub(e),d=i.redAdd(e),s=d.redSub(r),o=i.redSub(e),u=n.redMul(s),h=d.redMul(o),p=n.redMul(o),l=s.redMul(d);return this.curve.point(u,h,l,p)},h.prototype._projDbl=function(){var t,e,r,i=this.x.redAdd(this.y).redSqr(),n=this.x.redSqr(),d=this.y.redSqr();if(this.curve.twisted){var s=(h=this.curve._mulA(n)).redAdd(d);if(this.zOne)t=i.redSub(n).redSub(d).redMul(s.redSub(this.curve.two)),e=s.redMul(h.redSub(d)),r=s.redSqr().redSub(s).redSub(s);else{var o=this.z.redSqr(),u=s.redSub(o).redISub(o);t=i.redSub(n).redISub(d).redMul(u),e=s.redMul(h.redSub(d)),r=s.redMul(u)}}else{var h=n.redAdd(d);o=this.curve._mulC(this.z).redSqr(),u=h.redSub(o).redSub(o);t=this.curve._mulC(i.redISub(h)).redMul(u),e=this.curve._mulC(h).redMul(n.redISub(d)),r=h.redMul(u)}return this.curve.point(t,e,r)},h.prototype.dbl=function(){return this.isInfinity()?this:this.curve.extended?this._extDbl():this._projDbl()},h.prototype._extAdd=function(t){var e=this.y.redSub(this.x).redMul(t.y.redSub(t.x)),r=this.y.redAdd(this.x).redMul(t.y.redAdd(t.x)),i=this.t.redMul(this.curve.dd).redMul(t.t),n=this.z.redMul(t.z.redAdd(t.z)),d=r.redSub(e),s=n.redSub(i),o=n.redAdd(i),u=r.redAdd(e),h=d.redMul(s),p=o.redMul(u),l=d.redMul(u),c=s.redMul(o);return this.curve.point(h,p,c,l)},h.prototype._projAdd=function(t){var e,r,i=this.z.redMul(t.z),n=i.redSqr(),d=this.x.redMul(t.x),s=this.y.redMul(t.y),o=this.curve.d.redMul(d).redMul(s),u=n.redSub(o),h=n.redAdd(o),p=this.x.redAdd(this.y).redMul(t.x.redAdd(t.y)).redISub(d).redISub(s),l=i.redMul(u).redMul(p);return this.curve.twisted?(e=i.redMul(h).redMul(s.redSub(this.curve._mulA(d))),r=u.redMul(h)):(e=i.redMul(h).redMul(s.redSub(d)),r=this.curve._mulC(u).redMul(h)),this.curve.point(l,e,r)},h.prototype.add=function(t){return this.isInfinity()?t:t.isInfinity()?this:this.curve.extended?this._extAdd(t):this._projAdd(t)},h.prototype.mul=function(t){return this._hasDoubles(t)?this.curve._fixedNafMul(this,t):this.curve._wnafMul(this,t)},h.prototype.mulAdd=function(t,e,r){return this.curve._wnafMulAdd(1,[this,e],[t,r],2,!1)},h.prototype.jmulAdd=function(t,e,r){return this.curve._wnafMulAdd(1,[this,e],[t,r],2,!0)},h.prototype.normalize=function(){if(this.zOne)return this;var t=this.z.redInvm();return this.x=this.x.redMul(t),this.y=this.y.redMul(t),this.t&&(this.t=this.t.redMul(t)),this.z=this.curve.one,this.zOne=!0,this},h.prototype.neg=function(){return this.curve.point(this.x.redNeg(),this.y,this.z,this.t&&this.t.redNeg())},h.prototype.getX=function(){return this.normalize(),this.x.fromRed()},h.prototype.getY=function(){return this.normalize(),this.y.fromRed()},h.prototype.eq=function(t){return this===t||0===this.getX().cmp(t.getX())&&0===this.getY().cmp(t.getY())},h.prototype.eqXToP=function(t){var e=t.toRed(this.curve.red).redMul(this.z);if(0===this.x.cmp(e))return!0;for(var r=t.clone(),i=this.curve.redN.redMul(this.z);;){if(r.iadd(this.curve.n),r.cmp(this.curve.p)>=0)return!1;if(e.redIAdd(i),0===this.x.cmp(e))return!0}},h.prototype.toP=h.prototype.normalize,h.prototype.mixedAdd=h.prototype.add},"QTa/":function(t,e,r){"use strict";var i=e;i.base=r("6lN/"),i.short=r("MwBp"),i.mont=r("Z2+3"),i.edwards=r("Pa+m")}}]);
//# sourceMappingURL=vendor.elliptic~19e3614f.1ed2d48a28a0f2655cfd.bundle.map