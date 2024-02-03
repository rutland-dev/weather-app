(()=>{var n={426:(n,e,t)=>{"use strict";t.d(e,{Z:()=>u});var r=t(537),i=t.n(r),o=t(645),a=t.n(o),A=t(667),c=t.n(A),d=new URL(t(91),t.b),s=a()(i()),l=c()(d);s.push([n.id,`/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n/* End reset styles */\n\n@font-face {\n    font-family: "Exo";\n    src: url(${l});\n}\n\nbody {\n    height: 100vh;\n    font-family: Exo;\n}\n\n.outer-main {\n    display: flex;\n    flex-direction: column;\n    background-color: black;\n    height: 100vh;\n    color: blue;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n}\n\n.outer-main h1 {\n    font-size: 3rem;\n}\n\n.inner-main {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.hidden {\n    display: none;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: 15rem 1fr 9rem;\n    align-self: center;\n    align-items: center;\n    height: 15%;\n    width: 80%;\n    background: white;\n    background: linear-gradient(\n        to right bottom,\n        rgba(255, 255, 255, 0.3),\n        rgba(255, 255, 255, 0.1)\n    );\n    z-index: 1;\n    border-bottom: solid .3rem rgba(60, 60, 255, .7);\n    border-left: solid .3rem rgba(60, 60, 255, .7);\n    border-right: solid .3rem rgba(60, 60, 255, .7);\n    box-shadow: inset white 0 0 2rem -1rem;\n    border-radius: 0 0 5rem 5rem;\n    position: fixed;\n}\n\n.header-text {\n    font-size: 3rem;\n    opacity: .5;\n    text-wrap: nowrap;\n    justify-self: center;\n    text-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);\n}\n\n.header-image img {\n    height: 7rem;\n    width: auto;\n    opacity: .5;\n    border-radius: 25%;\n}\n\n.location-form-div form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: .5rem;\n}\n\n.location-form-div form input {\n    border: none;\n    border-radius: 2rem;\n    background-color: rgba(255, 255, 255, .7);\n    height: 1.6rem;\n    text-align: center;\n}\n\n.location-form-div form button {\n    border: none;\n    border-radius: 2rem;\n    background-color: rgba(255, 255, 255, .4);\n    height: 1.5rem;\n}\n\n.location-form-div form button:hover {\n    background-color: rgba(0, 0, 255, .5);\n    cursor: pointer;\n}\n\n.content {\n    height: 80%;\n    margin-top: 7.5%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.weather-display-div {\n    background: white;\n    background: linear-gradient(\n        to right bottom,\n        rgba(255, 255, 255, 0.3),\n        rgba(255, 255, 255, 0.1)\n    );\n    z-index: 1;\n    border: solid .3rem rgba(60, 60, 255, .7);\n    box-shadow: inset white 0 0 2rem -1rem;\n    border-radius: 5rem;\n    height: 80%;\n    width: 70%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 10% 15% 1fr 1fr;\n    padding: 0 2rem 2rem 2rem;\n}\n\n.cloud-cover, .humidity, .precipitation, .temperature, .wind-direction, .wind-mph {\n    height: 10rem;\n    width: 10rem;\n    justify-self: center;\n    justify-content: center;\n    text-align: center;\n    border-radius: 2rem;\n    background-color: rgba(255, 255, 255, .5);\n    z-index: 1;\n    border: solid .3rem rgba(255, 255, 255, .3);\n    box-shadow: inset white 0 0 2rem -1rem;\n}\n\n.location-title {\n    justify-self: center;\n    grid-area: 1 / 2 / 2 / 3;\n    font-size: 2rem;\n}\n\n.condition {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    grid-area: 2 / 1 / 3 / 4;\n    text-align: center;\n    font-size: 1.5rem;\n    margin-bottom: .5rem;\n}\n\n#condition-icon {\nwidth: 4rem;\n}\n\n.display-card-title-div {\n    font-size: 1.3rem;\n    color: rgba(0, 0, 255, .6);\n    font-weight: 500;\n    margin-top: .4rem;\n}\n\n.display-card-content-div {\n    height: 80%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.cloud-cover {\n    grid-area: 3 / 1 / 4 / 2;\n}\n\n.humidity {\n    grid-area: 3 / 2 / 4 / 3;\n}\n\n.precipitation {\n    grid-area: 3 / 3 / 4 / 4;\n}\n\n.temperature {\n    grid-area: 4 / 1 / 5 / 2;\n}\n\n.wind-direction {\n    grid-area: 4 / 2 / 5 / 3;\n}\n\n.wind-mph {\n    grid-area: 4 / 3 / 5 / 4;\n}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;AACA,qBAAqB;;AAErB;IACI,kBAAkB;IAClB,4CAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,aAAa;IACb,WAAW;IACX,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kBAAkB;IAClB,mBAAmB;IACnB,WAAW;IACX,UAAU;IACV,iBAAiB;IACjB;;;;KAIC;IACD,UAAU;IACV,gDAAgD;IAChD,8CAA8C;IAC9C,+CAA+C;IAC/C,sCAAsC;IACtC,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,iBAAiB;IACjB,oBAAoB;IACpB,wCAAwC;AAC5C;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,yCAAyC;IACzC,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,yCAAyC;IACzC,cAAc;AAClB;;AAEA;IACI,qCAAqC;IACrC,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB;;;;KAIC;IACD,UAAU;IACV,yCAAyC;IACzC,sCAAsC;IACtC,mBAAmB;IACnB,WAAW;IACX,UAAU;IACV,aAAa;IACb,kCAAkC;IAClC,mCAAmC;IACnC,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,oBAAoB;IACpB,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;IACnB,yCAAyC;IACzC,UAAU;IACV,2CAA2C;IAC3C,sCAAsC;AAC1C;;AAEA;IACI,oBAAoB;IACpB,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,wBAAwB;IACxB,kBAAkB;IAClB,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;AACA,WAAW;AACX;;AAEA;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B",sourcesContent:['/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: \'\';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n/* End reset styles */\n\n@font-face {\n    font-family: "Exo";\n    src: url("./fonts/Exo.ttf");\n}\n\nbody {\n    height: 100vh;\n    font-family: Exo;\n}\n\n.outer-main {\n    display: flex;\n    flex-direction: column;\n    background-color: black;\n    height: 100vh;\n    color: blue;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n}\n\n.outer-main h1 {\n    font-size: 3rem;\n}\n\n.inner-main {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.hidden {\n    display: none;\n}\n\n.header {\n    display: grid;\n    grid-template-columns: 15rem 1fr 9rem;\n    align-self: center;\n    align-items: center;\n    height: 15%;\n    width: 80%;\n    background: white;\n    background: linear-gradient(\n        to right bottom,\n        rgba(255, 255, 255, 0.3),\n        rgba(255, 255, 255, 0.1)\n    );\n    z-index: 1;\n    border-bottom: solid .3rem rgba(60, 60, 255, .7);\n    border-left: solid .3rem rgba(60, 60, 255, .7);\n    border-right: solid .3rem rgba(60, 60, 255, .7);\n    box-shadow: inset white 0 0 2rem -1rem;\n    border-radius: 0 0 5rem 5rem;\n    position: fixed;\n}\n\n.header-text {\n    font-size: 3rem;\n    opacity: .5;\n    text-wrap: nowrap;\n    justify-self: center;\n    text-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);\n}\n\n.header-image img {\n    height: 7rem;\n    width: auto;\n    opacity: .5;\n    border-radius: 25%;\n}\n\n.location-form-div form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: .5rem;\n}\n\n.location-form-div form input {\n    border: none;\n    border-radius: 2rem;\n    background-color: rgba(255, 255, 255, .7);\n    height: 1.6rem;\n    text-align: center;\n}\n\n.location-form-div form button {\n    border: none;\n    border-radius: 2rem;\n    background-color: rgba(255, 255, 255, .4);\n    height: 1.5rem;\n}\n\n.location-form-div form button:hover {\n    background-color: rgba(0, 0, 255, .5);\n    cursor: pointer;\n}\n\n.content {\n    height: 80%;\n    margin-top: 7.5%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.weather-display-div {\n    background: white;\n    background: linear-gradient(\n        to right bottom,\n        rgba(255, 255, 255, 0.3),\n        rgba(255, 255, 255, 0.1)\n    );\n    z-index: 1;\n    border: solid .3rem rgba(60, 60, 255, .7);\n    box-shadow: inset white 0 0 2rem -1rem;\n    border-radius: 5rem;\n    height: 80%;\n    width: 70%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 10% 15% 1fr 1fr;\n    padding: 0 2rem 2rem 2rem;\n}\n\n.cloud-cover, .humidity, .precipitation, .temperature, .wind-direction, .wind-mph {\n    height: 10rem;\n    width: 10rem;\n    justify-self: center;\n    justify-content: center;\n    text-align: center;\n    border-radius: 2rem;\n    background-color: rgba(255, 255, 255, .5);\n    z-index: 1;\n    border: solid .3rem rgba(255, 255, 255, .3);\n    box-shadow: inset white 0 0 2rem -1rem;\n}\n\n.location-title {\n    justify-self: center;\n    grid-area: 1 / 2 / 2 / 3;\n    font-size: 2rem;\n}\n\n.condition {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    grid-area: 2 / 1 / 3 / 4;\n    text-align: center;\n    font-size: 1.5rem;\n    margin-bottom: .5rem;\n}\n\n#condition-icon {\nwidth: 4rem;\n}\n\n.display-card-title-div {\n    font-size: 1.3rem;\n    color: rgba(0, 0, 255, .6);\n    font-weight: 500;\n    margin-top: .4rem;\n}\n\n.display-card-content-div {\n    height: 80%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.cloud-cover {\n    grid-area: 3 / 1 / 4 / 2;\n}\n\n.humidity {\n    grid-area: 3 / 2 / 4 / 3;\n}\n\n.precipitation {\n    grid-area: 3 / 3 / 4 / 4;\n}\n\n.temperature {\n    grid-area: 4 / 1 / 5 / 2;\n}\n\n.wind-direction {\n    grid-area: 4 / 2 / 5 / 3;\n}\n\n.wind-mph {\n    grid-area: 4 / 3 / 5 / 4;\n}'],sourceRoot:""}]);const u=s},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);r&&a[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),e.push(s))}},e}},667:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(i," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],A=0;A<n.length;A++){var c=n[A],d=r.base?c[0]+r.base:c[0],s=o[d]||0,l="".concat(d," ").concat(s);o[d]=s+1;var u=t(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var p=i(m,r);r.byIndex=A,e.splice(A,0,{identifier:l,updater:p,references:1})}a.push(l)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var A=t(o[a]);e[A].references--}for(var c=r(n,i),d=0;d<o.length;d++){var s=t(o[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}o=c}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},340:(n,e,t)=>{const r={header:document.querySelector(".header"),weatherDisplayDiv:document.querySelector(".weather-display-div"),locationTitleDiv:document.querySelector(".location-title"),cloudCover:document.getElementById("cloud-cover-span"),condition:document.querySelector(".condition"),humidity:document.getElementById("humidity-span"),precipitation:document.getElementById("precipitation-span"),temperature:document.getElementById("temperature-span"),windDirection:document.getElementById("wind-direction-span"),windMph:document.getElementById("wind-mph-span"),outerMainDiv:document.querySelector(".outer-main"),innerMainDiv:document.querySelector(".inner-main"),ringDiv:document.querySelector(".ring")},i=t(128),o=t(489);n.exports.O=function(n){document.getElementById("condition-icon")&&document.getElementById("condition-icon").remove(),function(n){const e=n?i:o;r.innerMainDiv.style.backgroundImage=`url(${e})`,n&&(r.header.style.backdropFilter="blur(.5rem)",r.weatherDisplayDiv.style.backdropFilter="blur(.5rem)")}(n.isDay),r.locationTitleDiv.textContent=`${n.location.name}, ${n.location.region}`,r.condition.textContent=n.condition.text,r.cloudCover.textContent=`${n.cloud}%`,r.humidity.textContent=`${n.humidity}%`,r.precipitation.textContent=`${n.precipitation} inches`,r.temperature.textContent=`${n.temperature}`,r.windDirection.textContent=n.windDir,r.windMph.textContent=`${n.windMph} MPH`;const e=document.createElement("img");e.setAttribute("src",n.condition.icon),e.setAttribute("id","condition-icon"),r.condition.appendChild(e)},n.exports.E=function(){r.outerMainDiv.classList.add("hidden"),r.ringDiv.classList.add("hidden"),r.innerMainDiv.classList.remove("hidden")}},291:n=>{let e;n.exports.t=async function(n,t){!function(n){"current"===n?e="/current.json":"forecast"===n&&(e="/forecast.json")}(n);try{const n=await fetch(`https://api.weatherapi.com/v1${e}?key=3ef79a1c797e47ac8b122833243001&q=${t}`),r=await n.json();return{location:r.location,condition:r.current.condition,cloud:r.current.cloud,humidity:r.current.humidity,precipitation:r.current.precip_in,temperature:r.current.temp_f,windDir:r.current.wind_dir,windMph:r.current.wind_mph,isDay:r.current.is_day}}catch(n){return console.error(n),n}}},91:(n,e,t)=>{"use strict";n.exports=t.p+"6c037f7506ee86084662.ttf"},128:(n,e,t)=>{"use strict";n.exports=t.p+"ec504e896068c68ab81b.webp"},489:(n,e,t)=>{"use strict";n.exports=t.p+"277afac75fcb24c5c18f.jpg"}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!n;)n=r[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var n=t(379),e=t.n(n),r=t(795),i=t.n(r),o=t(569),a=t.n(o),A=t(565),c=t.n(A),d=t(216),s=t.n(d),l=t(589),u=t.n(l),m=t(426),p={};p.styleTagTransform=u(),p.setAttributes=c(),p.insert=a().bind(null,"head"),p.domAPI=i(),p.insertStyleElement=s(),e()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals;var C=t(291),f=t(340);const g=document.getElementById("get-weather-button"),h=document.getElementById("location");g.addEventListener("click",(async()=>{const n=await async function(n){try{return await(0,C.t)("current",n)}catch(n){return console.error("Failed to get weather data",n),null}}(h.value);n?((0,f.O)(n),(0,f.E)()):document.querySelector("location-title").textContent="Failure to update display"})),h.addEventListener("keypress",(n=>{"Enter"===n.key&&(n.preventDefault(),g.click())})),window.addEventListener("DOMContentLoaded",(()=>g.click()))})()})();
//# sourceMappingURL=index.bundle.js.map