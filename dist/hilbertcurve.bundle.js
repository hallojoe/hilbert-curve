!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=document.getElementById("hilbertContainer"),o=document.getElementById("hilbertOrder"),u=document.getElementById("hilbertOrderValue"),a=document.getElementById("hilbertDisplayPoints"),l=document.getElementById("hilbertDisplayPointsValue"),d=document.getElementById("hilbertCapacityValue"),s="http://www.w3.org/2000/svg",c=document.createElementNS(s,"path");c.setAttributeNS(null,"stroke","gray"),c.setAttributeNS(null,"stroke-width","1px"),c.setAttributeNS(null,"fill","transparent");var f=document.createElementNS(s,"svg");f.setAttributeNS(null,"viewBox","0 0 320 320"),f.style.width="320px",f.classList.add("checkered"),f.appendChild(c),i.appendChild(f);var v=0,p=function(e,t){var n=t*t;d.innerText=n.toString(),l.innerText=n.toString(),a.max=n.toString(),v=e/(t+1);for(var i="M ",o=0;o<n;o++){var u=r.HilbertCurve.distanceToPoint(t,o);i+=u[0]*v+v+" "+(u[1]*v+v)+","}c.setAttribute("d",i)};o.addEventListener("input",(function(e){var t=+o.value;p(320,Math.pow(2,t)),u.innerText=t.toString(),a.min="2",a.value=a.max,a.value=a.max})),a.addEventListener("input",(function(e){var t,n,r,i,o=+a.value,u=+a.max;l.innerText=o.toString(),t=o,n=u,r=c.getTotalLength(),i=v*(t-1),c.style.strokeDashoffset=(r-i).toString(),t>=n?c.style.strokeDasharray="none":(c.style.visibility=0===t?"hidden":"visible",c.style.strokeDasharray=r+" "+r)})),p(320,2)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.rotate=function(e,t,n,r){return 0!==r?t:(1===n&&(t=[e-1-t[0],e-1-t[1]]),t=[t[1],t[0]])},e.numberBoolean=function(e){return e?1:0},e.pointToDistance=function(e,t){for(var n,r,i=0,o=t/2;o>=1;o/=2)i+=o*o*(3*(n=(e[0]&o)>0)^(r=(e[1]&o)>0)),this.rotate(o,e,n,r);return i},e.distanceToPoint=function(e,t){var n,r,i,o,u,a,l,d;for(a=t,l=d=0,u=1;u<e;u*=2){o=1&(a^(i=1&a/2));var s=this.rotate(u,[l,d],i,o);l=(r=[(l=(n=[s[0],s[1]])[0])+u*i,(d=n[1])+u*o])[0],d=r[1],a/=4}return[l,d]},e}();t.HilbertCurve=r,t.default={HilbertCurve:r}}]);