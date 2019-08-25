(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{DLvh:function(f,e,r){"use strict";var t,d=e,i=r("fZJM"),n=r("QTa/"),s=r("86MQ").assert;function u(f){"short"===f.type?this.curve=new n.short(f):"edwards"===f.type?this.curve=new n.edwards(f):this.curve=new n.mont(f),this.g=this.curve.g,this.n=this.curve.n,this.hash=f.hash,s(this.g.validate(),"Invalid curve"),s(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}function o(f,e){Object.defineProperty(d,f,{configurable:!0,enumerable:!0,get:function(){var r=new u(e);return Object.defineProperty(d,f,{configurable:!0,enumerable:!0,value:r}),r}})}d.PresetCurve=u,o("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:i.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),o("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:i.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),o("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:i.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),o("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:i.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),o("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:i.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),o("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:i.sha256,gRed:!1,g:["9"]}),o("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:i.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});try{t=r("QJsb")}catch(f){t=void 0}o("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:i.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",t]})},MwBp:function(f,e,r){"use strict";var t=r("86MQ"),d=r("OZ/i"),i=r("P7XM"),n=r("6lN/"),s=t.assert;function u(f){n.call(this,"short",f),this.a=new d(f.a,16).toRed(this.red),this.b=new d(f.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=0===this.a.fromRed().cmpn(0),this.threeA=0===this.a.fromRed().sub(this.p).cmpn(-3),this.endo=this._getEndomorphism(f),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}function o(f,e,r,t){n.BasePoint.call(this,f,"affine"),null===e&&null===r?(this.x=null,this.y=null,this.inf=!0):(this.x=new d(e,16),this.y=new d(r,16),t&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}function h(f,e,r,t){n.BasePoint.call(this,f,"jacobian"),null===e&&null===r&&null===t?(this.x=this.curve.one,this.y=this.curve.one,this.z=new d(0)):(this.x=new d(e,16),this.y=new d(r,16),this.z=new d(t,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}i(u,n),f.exports=u,u.prototype._getEndomorphism=function(f){if(this.zeroA&&this.g&&this.n&&1===this.p.modn(3)){var e,r;if(f.beta)e=new d(f.beta,16).toRed(this.red);else{var t=this._getEndoRoots(this.p);e=(e=t[0].cmp(t[1])<0?t[0]:t[1]).toRed(this.red)}if(f.lambda)r=new d(f.lambda,16);else{var i=this._getEndoRoots(this.n);0===this.g.mul(i[0]).x.cmp(this.g.x.redMul(e))?r=i[0]:(r=i[1],s(0===this.g.mul(r).x.cmp(this.g.x.redMul(e))))}return{beta:e,lambda:r,basis:f.basis?f.basis.map(function(f){return{a:new d(f.a,16),b:new d(f.b,16)}}):this._getEndoBasis(r)}}},u.prototype._getEndoRoots=function(f){var e=f===this.p?this.red:d.mont(f),r=new d(2).toRed(e).redInvm(),t=r.redNeg(),i=new d(3).toRed(e).redNeg().redSqrt().redMul(r);return[t.redAdd(i).fromRed(),t.redSub(i).fromRed()]},u.prototype._getEndoBasis=function(f){for(var e,r,t,i,n,s,u,o,h,c=this.n.ushrn(Math.floor(this.n.bitLength()/2)),a=f,p=this.n.clone(),b=new d(1),l=new d(0),v=new d(0),S=new d(1),y=0;0!==a.cmpn(0);){var I=p.div(a);o=p.sub(I.mul(a)),h=v.sub(I.mul(b));var m=S.sub(I.mul(l));if(!t&&o.cmp(c)<0)e=u.neg(),r=b,t=o.neg(),i=h;else if(t&&2==++y)break;u=o,p=a,a=o,v=b,b=h,S=l,l=m}n=o.neg(),s=h;var A=t.sqr().add(i.sqr());return n.sqr().add(s.sqr()).cmp(A)>=0&&(n=e,s=r),t.negative&&(t=t.neg(),i=i.neg()),n.negative&&(n=n.neg(),s=s.neg()),[{a:t,b:i},{a:n,b:s}]},u.prototype._endoSplit=function(f){var e=this.endo.basis,r=e[0],t=e[1],d=t.b.mul(f).divRound(this.n),i=r.b.neg().mul(f).divRound(this.n),n=d.mul(r.a),s=i.mul(t.a),u=d.mul(r.b),o=i.mul(t.b);return{k1:f.sub(n).sub(s),k2:u.add(o).neg()}},u.prototype.pointFromX=function(f,e){(f=new d(f,16)).red||(f=f.toRed(this.red));var r=f.redSqr().redMul(f).redIAdd(f.redMul(this.a)).redIAdd(this.b),t=r.redSqrt();if(0!==t.redSqr().redSub(r).cmp(this.zero))throw new Error("invalid point");var i=t.fromRed().isOdd();return(e&&!i||!e&&i)&&(t=t.redNeg()),this.point(f,t)},u.prototype.validate=function(f){if(f.inf)return!0;var e=f.x,r=f.y,t=this.a.redMul(e),d=e.redSqr().redMul(e).redIAdd(t).redIAdd(this.b);return 0===r.redSqr().redISub(d).cmpn(0)},u.prototype._endoWnafMulAdd=function(f,e,r){for(var t=this._endoWnafT1,d=this._endoWnafT2,i=0;i<f.length;i++){var n=this._endoSplit(e[i]),s=f[i],u=s._getBeta();n.k1.negative&&(n.k1.ineg(),s=s.neg(!0)),n.k2.negative&&(n.k2.ineg(),u=u.neg(!0)),t[2*i]=s,t[2*i+1]=u,d[2*i]=n.k1,d[2*i+1]=n.k2}for(var o=this._wnafMulAdd(1,t,d,2*i,r),h=0;h<2*i;h++)t[h]=null,d[h]=null;return o},i(o,n.BasePoint),u.prototype.point=function(f,e,r){return new o(this,f,e,r)},u.prototype.pointFromJSON=function(f,e){return o.fromJSON(this,f,e)},o.prototype._getBeta=function(){if(this.curve.endo){var f=this.precomputed;if(f&&f.beta)return f.beta;var e=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(f){var r=this.curve,t=function(f){return r.point(f.x.redMul(r.endo.beta),f.y)};f.beta=e,e.precomputed={beta:null,naf:f.naf&&{wnd:f.naf.wnd,points:f.naf.points.map(t)},doubles:f.doubles&&{step:f.doubles.step,points:f.doubles.points.map(t)}}}return e}},o.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},o.fromJSON=function(f,e,r){"string"==typeof e&&(e=JSON.parse(e));var t=f.point(e[0],e[1],r);if(!e[2])return t;function d(e){return f.point(e[0],e[1],r)}var i=e[2];return t.precomputed={beta:null,doubles:i.doubles&&{step:i.doubles.step,points:[t].concat(i.doubles.points.map(d))},naf:i.naf&&{wnd:i.naf.wnd,points:[t].concat(i.naf.points.map(d))}},t},o.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},o.prototype.isInfinity=function(){return this.inf},o.prototype.add=function(f){if(this.inf)return f;if(f.inf)return this;if(this.eq(f))return this.dbl();if(this.neg().eq(f))return this.curve.point(null,null);if(0===this.x.cmp(f.x))return this.curve.point(null,null);var e=this.y.redSub(f.y);0!==e.cmpn(0)&&(e=e.redMul(this.x.redSub(f.x).redInvm()));var r=e.redSqr().redISub(this.x).redISub(f.x),t=e.redMul(this.x.redSub(r)).redISub(this.y);return this.curve.point(r,t)},o.prototype.dbl=function(){if(this.inf)return this;var f=this.y.redAdd(this.y);if(0===f.cmpn(0))return this.curve.point(null,null);var e=this.curve.a,r=this.x.redSqr(),t=f.redInvm(),d=r.redAdd(r).redIAdd(r).redIAdd(e).redMul(t),i=d.redSqr().redISub(this.x.redAdd(this.x)),n=d.redMul(this.x.redSub(i)).redISub(this.y);return this.curve.point(i,n)},o.prototype.getX=function(){return this.x.fromRed()},o.prototype.getY=function(){return this.y.fromRed()},o.prototype.mul=function(f){return f=new d(f,16),this._hasDoubles(f)?this.curve._fixedNafMul(this,f):this.curve.endo?this.curve._endoWnafMulAdd([this],[f]):this.curve._wnafMul(this,f)},o.prototype.mulAdd=function(f,e,r){var t=[this,e],d=[f,r];return this.curve.endo?this.curve._endoWnafMulAdd(t,d):this.curve._wnafMulAdd(1,t,d,2)},o.prototype.jmulAdd=function(f,e,r){var t=[this,e],d=[f,r];return this.curve.endo?this.curve._endoWnafMulAdd(t,d,!0):this.curve._wnafMulAdd(1,t,d,2,!0)},o.prototype.eq=function(f){return this===f||this.inf===f.inf&&(this.inf||0===this.x.cmp(f.x)&&0===this.y.cmp(f.y))},o.prototype.neg=function(f){if(this.inf)return this;var e=this.curve.point(this.x,this.y.redNeg());if(f&&this.precomputed){var r=this.precomputed,t=function(f){return f.neg()};e.precomputed={naf:r.naf&&{wnd:r.naf.wnd,points:r.naf.points.map(t)},doubles:r.doubles&&{step:r.doubles.step,points:r.doubles.points.map(t)}}}return e},o.prototype.toJ=function(){return this.inf?this.curve.jpoint(null,null,null):this.curve.jpoint(this.x,this.y,this.curve.one)},i(h,n.BasePoint),u.prototype.jpoint=function(f,e,r){return new h(this,f,e,r)},h.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var f=this.z.redInvm(),e=f.redSqr(),r=this.x.redMul(e),t=this.y.redMul(e).redMul(f);return this.curve.point(r,t)},h.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},h.prototype.add=function(f){if(this.isInfinity())return f;if(f.isInfinity())return this;var e=f.z.redSqr(),r=this.z.redSqr(),t=this.x.redMul(e),d=f.x.redMul(r),i=this.y.redMul(e.redMul(f.z)),n=f.y.redMul(r.redMul(this.z)),s=t.redSub(d),u=i.redSub(n);if(0===s.cmpn(0))return 0!==u.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var o=s.redSqr(),h=o.redMul(s),c=t.redMul(o),a=u.redSqr().redIAdd(h).redISub(c).redISub(c),p=u.redMul(c.redISub(a)).redISub(i.redMul(h)),b=this.z.redMul(f.z).redMul(s);return this.curve.jpoint(a,p,b)},h.prototype.mixedAdd=function(f){if(this.isInfinity())return f.toJ();if(f.isInfinity())return this;var e=this.z.redSqr(),r=this.x,t=f.x.redMul(e),d=this.y,i=f.y.redMul(e).redMul(this.z),n=r.redSub(t),s=d.redSub(i);if(0===n.cmpn(0))return 0!==s.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var u=n.redSqr(),o=u.redMul(n),h=r.redMul(u),c=s.redSqr().redIAdd(o).redISub(h).redISub(h),a=s.redMul(h.redISub(c)).redISub(d.redMul(o)),p=this.z.redMul(n);return this.curve.jpoint(c,a,p)},h.prototype.dblp=function(f){if(0===f)return this;if(this.isInfinity())return this;if(!f)return this.dbl();if(this.curve.zeroA||this.curve.threeA){for(var e=this,r=0;r<f;r++)e=e.dbl();return e}var t=this.curve.a,d=this.curve.tinv,i=this.x,n=this.y,s=this.z,u=s.redSqr().redSqr(),o=n.redAdd(n);for(r=0;r<f;r++){var h=i.redSqr(),c=o.redSqr(),a=c.redSqr(),p=h.redAdd(h).redIAdd(h).redIAdd(t.redMul(u)),b=i.redMul(c),l=p.redSqr().redISub(b.redAdd(b)),v=b.redISub(l),S=p.redMul(v);S=S.redIAdd(S).redISub(a);var y=o.redMul(s);r+1<f&&(u=u.redMul(a)),i=l,s=y,o=S}return this.curve.jpoint(i,o.redMul(d),s)},h.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},h.prototype._zeroDbl=function(){var f,e,r;if(this.zOne){var t=this.x.redSqr(),d=this.y.redSqr(),i=d.redSqr(),n=this.x.redAdd(d).redSqr().redISub(t).redISub(i);n=n.redIAdd(n);var s=t.redAdd(t).redIAdd(t),u=s.redSqr().redISub(n).redISub(n),o=i.redIAdd(i);o=(o=o.redIAdd(o)).redIAdd(o),f=u,e=s.redMul(n.redISub(u)).redISub(o),r=this.y.redAdd(this.y)}else{var h=this.x.redSqr(),c=this.y.redSqr(),a=c.redSqr(),p=this.x.redAdd(c).redSqr().redISub(h).redISub(a);p=p.redIAdd(p);var b=h.redAdd(h).redIAdd(h),l=b.redSqr(),v=a.redIAdd(a);v=(v=v.redIAdd(v)).redIAdd(v),f=l.redISub(p).redISub(p),e=b.redMul(p.redISub(f)).redISub(v),r=(r=this.y.redMul(this.z)).redIAdd(r)}return this.curve.jpoint(f,e,r)},h.prototype._threeDbl=function(){var f,e,r;if(this.zOne){var t=this.x.redSqr(),d=this.y.redSqr(),i=d.redSqr(),n=this.x.redAdd(d).redSqr().redISub(t).redISub(i);n=n.redIAdd(n);var s=t.redAdd(t).redIAdd(t).redIAdd(this.curve.a),u=s.redSqr().redISub(n).redISub(n);f=u;var o=i.redIAdd(i);o=(o=o.redIAdd(o)).redIAdd(o),e=s.redMul(n.redISub(u)).redISub(o),r=this.y.redAdd(this.y)}else{var h=this.z.redSqr(),c=this.y.redSqr(),a=this.x.redMul(c),p=this.x.redSub(h).redMul(this.x.redAdd(h));p=p.redAdd(p).redIAdd(p);var b=a.redIAdd(a),l=(b=b.redIAdd(b)).redAdd(b);f=p.redSqr().redISub(l),r=this.y.redAdd(this.z).redSqr().redISub(c).redISub(h);var v=c.redSqr();v=(v=(v=v.redIAdd(v)).redIAdd(v)).redIAdd(v),e=p.redMul(b.redISub(f)).redISub(v)}return this.curve.jpoint(f,e,r)},h.prototype._dbl=function(){var f=this.curve.a,e=this.x,r=this.y,t=this.z,d=t.redSqr().redSqr(),i=e.redSqr(),n=r.redSqr(),s=i.redAdd(i).redIAdd(i).redIAdd(f.redMul(d)),u=e.redAdd(e),o=(u=u.redIAdd(u)).redMul(n),h=s.redSqr().redISub(o.redAdd(o)),c=o.redISub(h),a=n.redSqr();a=(a=(a=a.redIAdd(a)).redIAdd(a)).redIAdd(a);var p=s.redMul(c).redISub(a),b=r.redAdd(r).redMul(t);return this.curve.jpoint(h,p,b)},h.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var f=this.x.redSqr(),e=this.y.redSqr(),r=this.z.redSqr(),t=e.redSqr(),d=f.redAdd(f).redIAdd(f),i=d.redSqr(),n=this.x.redAdd(e).redSqr().redISub(f).redISub(t),s=(n=(n=(n=n.redIAdd(n)).redAdd(n).redIAdd(n)).redISub(i)).redSqr(),u=t.redIAdd(t);u=(u=(u=u.redIAdd(u)).redIAdd(u)).redIAdd(u);var o=d.redIAdd(n).redSqr().redISub(i).redISub(s).redISub(u),h=e.redMul(o);h=(h=h.redIAdd(h)).redIAdd(h);var c=this.x.redMul(s).redISub(h);c=(c=c.redIAdd(c)).redIAdd(c);var a=this.y.redMul(o.redMul(u.redISub(o)).redISub(n.redMul(s)));a=(a=(a=a.redIAdd(a)).redIAdd(a)).redIAdd(a);var p=this.z.redAdd(n).redSqr().redISub(r).redISub(s);return this.curve.jpoint(c,a,p)},h.prototype.mul=function(f,e){return f=new d(f,e),this.curve._wnafMul(this,f)},h.prototype.eq=function(f){if("affine"===f.type)return this.eq(f.toJ());if(this===f)return!0;var e=this.z.redSqr(),r=f.z.redSqr();if(0!==this.x.redMul(r).redISub(f.x.redMul(e)).cmpn(0))return!1;var t=e.redMul(this.z),d=r.redMul(f.z);return 0===this.y.redMul(d).redISub(f.y.redMul(t)).cmpn(0)},h.prototype.eqXToP=function(f){var e=this.z.redSqr(),r=f.toRed(this.curve.red).redMul(e);if(0===this.x.cmp(r))return!0;for(var t=f.clone(),d=this.curve.redN.redMul(e);;){if(t.iadd(this.curve.n),t.cmp(this.curve.p)>=0)return!1;if(r.redIAdd(d),0===this.x.cmp(r))return!0}},h.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},h.prototype.isInfinity=function(){return 0===this.z.cmpn(0)}},"Z2+3":function(f,e,r){"use strict";var t=r("OZ/i"),d=r("P7XM"),i=r("6lN/"),n=r("86MQ");function s(f){i.call(this,"mont",f),this.a=new t(f.a,16).toRed(this.red),this.b=new t(f.b,16).toRed(this.red),this.i4=new t(4).toRed(this.red).redInvm(),this.two=new t(2).toRed(this.red),this.a24=this.i4.redMul(this.a.redAdd(this.two))}function u(f,e,r){i.BasePoint.call(this,f,"projective"),null===e&&null===r?(this.x=this.curve.one,this.z=this.curve.zero):(this.x=new t(e,16),this.z=new t(r,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)))}d(s,i),f.exports=s,s.prototype.validate=function(f){var e=f.normalize().x,r=e.redSqr(),t=r.redMul(e).redAdd(r.redMul(this.a)).redAdd(e);return 0===t.redSqrt().redSqr().cmp(t)},d(u,i.BasePoint),s.prototype.decodePoint=function(f,e){return this.point(n.toArray(f,e),1)},s.prototype.point=function(f,e){return new u(this,f,e)},s.prototype.pointFromJSON=function(f){return u.fromJSON(this,f)},u.prototype.precompute=function(){},u.prototype._encode=function(){return this.getX().toArray("be",this.curve.p.byteLength())},u.fromJSON=function(f,e){return new u(f,e[0],e[1]||f.one)},u.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},u.prototype.isInfinity=function(){return 0===this.z.cmpn(0)},u.prototype.dbl=function(){var f=this.x.redAdd(this.z).redSqr(),e=this.x.redSub(this.z).redSqr(),r=f.redSub(e),t=f.redMul(e),d=r.redMul(e.redAdd(this.curve.a24.redMul(r)));return this.curve.point(t,d)},u.prototype.add=function(){throw new Error("Not supported on Montgomery curve")},u.prototype.diffAdd=function(f,e){var r=this.x.redAdd(this.z),t=this.x.redSub(this.z),d=f.x.redAdd(f.z),i=f.x.redSub(f.z).redMul(r),n=d.redMul(t),s=e.z.redMul(i.redAdd(n).redSqr()),u=e.x.redMul(i.redISub(n).redSqr());return this.curve.point(s,u)},u.prototype.mul=function(f){for(var e=f.clone(),r=this,t=this.curve.point(null,null),d=[];0!==e.cmpn(0);e.iushrn(1))d.push(e.andln(1));for(var i=d.length-1;i>=0;i--)0===d[i]?(r=r.diffAdd(t,this),t=t.dbl()):(t=r.diffAdd(t,this),r=r.dbl());return t},u.prototype.mulAdd=function(){throw new Error("Not supported on Montgomery curve")},u.prototype.jumlAdd=function(){throw new Error("Not supported on Montgomery curve")},u.prototype.eq=function(f){return 0===this.getX().cmp(f.getX())},u.prototype.normalize=function(){return this.x=this.x.redMul(this.z.redInvm()),this.z=this.curve.one,this},u.prototype.getX=function(){return this.normalize(),this.x.fromRed()}}}]);
//# sourceMappingURL=vendor.elliptic~66ac750a.d5692226f4b16099a1c3.bundle.map