(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{179:function(e,t){},197:function(e,t,a){e.exports=a(398)},202:function(e,t,a){},203:function(e,t,a){},221:function(e,t){},223:function(e,t){},258:function(e,t,a){var n={"./mssql/index.js":259,"./mysql/index.js":144,"./mysql2/index.js":275,"./oracle/index.js":145,"./oracledb/index.js":353,"./postgres/index.js":180,"./redshift/index.js":359,"./sqlite3/index.js":367};function c(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=r,e.exports=c,c.id=258},265:function(e,t){},266:function(e,t){},267:function(e,t){},274:function(e,t){},277:function(e,t){},304:function(e,t){},305:function(e,t){},311:function(e,t){},352:function(e,t){},357:function(e,t){},358:function(e,t){},366:function(e,t){},374:function(e,t){},398:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),i=a.n(r),l=(a(202),a(45)),o=(a(203),a(87)),u=a(120),s=a.n(u),_=a(76),f=a(186),d=a(88),m=a.n(d),b=a(119);function p(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.location.search,n=m.a.parse(a),c=m.a.stringify(Object(f.a)({},n,Object(_.a)({},e,t)));!function(e){var t=window.location.protocol+"//"+window.location.host+window.location.pathname+e;window.history.pushState({path:t},"",t)}("?".concat(c))}function h(e,t){var a=Object(n.useState)(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.search,a=m.a.parse(t)[e];return Object(b.isArray)(a)?a[0]:a}(e)||t),c=Object(l.a)(a,2),r=c[0],i=c[1];return[r,Object(n.useCallback)(function(t){i(t),p(e,t)},[e])]}var E=a(89),g=a.n(E),v=a(46),w=(a(379),a(380),a(121)),O=a(429),j=a(432),k=a(401),y=a(441),x=a(442),q=a(433),C=a(400),D=a(434),N=a(435),A=a(436),L=a(437),I=a(438),M=a(439),S=a(440),P=a(191),Q=a(428),U="NYOwpgHgFA5AxgCwIYgOZhgSgHQGcwA2YcALrALYY5wD2AriGZgNxA",B=o.a.postgres,T={uppercase:!0},K=Object(P.a)({palette:{primary:{main:"#121113"},secondary:{main:"#f0f0f2"}},overrides:{MuiSelect:{icon:{color:"#f0f0f2"},select:{"&:focus":{background:"#3a3660"},color:"#f0f0f2"}}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(function(){var e=h("dialect",B),t=Object(l.a)(e,2),a=t[0],r=t[1],i=h("query",U),u=Object(l.a)(i,2),_=u[0],f=u[1],d=Object(n.useState)(null),m=Object(l.a)(d,2),b=(m[0],m[1]),p=Object(n.useCallback)(function(e){r(e)},[r]),E=Object(n.useCallback)(function(e){var t=s.a.compressToEncodedURIComponent(e);f(t)},[f]),P=s.a.decompressFromEncodedURIComponent(_)||"",R=Object(o.c)(P,a),W=Object(l.a)(R,3),V=W[0],Y=W[1],J=W[2],F=function(){},G=(Object(n.useCallback)(function(){b(null)},[b]),Object(n.useCallback)(function(e){navigator.clipboard.writeText(e),b("Copied to clipboard!")},[b]));return c.a.createElement(Q.a,{theme:K},c.a.createElement("div",{className:"App"},c.a.createElement(O.a,{position:"static"},c.a.createElement(j.a,null,c.a.createElement(k.a,{variant:"h6"},"Knex QueryLab"),c.a.createElement("div",null,c.a.createElement(y.a,{variant:"outlined",labelId:"dialect-label",value:a,onChange:function(e){return p(e.target.value)},label:"Dialect"},Object(o.b)().map(function(e,t){return c.a.createElement(x.a,{key:t,value:e},e)}))))),c.a.createElement("section",null,c.a.createElement(k.a,{className:"subtitle",variant:"h6"},"Expression"),c.a.createElement(q.a,{style:{float:"right"},onClick:function(){return G(P)}},"Copy"),c.a.createElement(C.a,{className:"code"},c.a.createElement(g.a,{value:P,onValueChange:E,highlight:function(e){return Object(v.highlight)(e,v.languages.javascript,"javascript")}})),c.a.createElement(k.a,{className:"subtitle",variant:"h6"},"Query"),c.a.createElement(q.a,{style:{float:"right"},onClick:function(){return G(V)}},"Copy"),c.a.createElement(C.a,{className:"code"},c.a.createElement(g.a,{disabled:!0,value:V,onValueChange:F,highlight:function(e){return Object(v.highlight)(Object(w.format)(e,T),v.languages.sql,"sql")}})),c.a.createElement(k.a,{className:"subtitle",variant:"h6"},"SQL - Native"),c.a.createElement(C.a,{className:"code"},c.a.createElement(g.a,{disabled:!0,value:Y,onValueChange:F,highlight:function(e){return Object(v.highlight)(Object(w.format)(e,T),v.languages.sql,"sql")}})),c.a.createElement(D.a,{component:C.a,className:"bindings"},c.a.createElement(N.a,null,c.a.createElement(A.a,null,c.a.createElement(L.a,null,c.a.createElement(I.a,{style:{width:"20px"}},"Binding"),c.a.createElement(I.a,null,"Value"))),c.a.createElement(M.a,null,J.map(function(e,t){return c.a.createElement(L.a,{key:t+1},c.a.createElement(I.a,null,t+1),c.a.createElement(I.a,null,JSON.stringify(e)))}))))),c.a.createElement("footer",null,c.a.createElement(k.a,{variant:"body1"},"Experiment with the ",c.a.createElement(S.a,{href:"https://knexjs.org"},"KnexJS")," API to build SQL. ",c.a.createElement(S.a,{href:"https://github.com/michaelavila/knex-querylab"},"View source.")))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},87:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Dialect}),__webpack_require__.d(__webpack_exports__,"b",function(){return allDialects}),__webpack_require__.d(__webpack_exports__,"c",function(){return translate});var knex__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(185),knex__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(knex__WEBPACK_IMPORTED_MODULE_0__),Dialect;function allDialects(){var e=[];for(var t in Dialect)e.push(t);return e}function translate(knexjs,dialect){var knex=knex__WEBPACK_IMPORTED_MODULE_0___default()({client:dialect});try{var parsed=eval(knexjs),query="".concat(parsed.toQuery(),";"),_native=parsed.toSQL().toNative(),nativeQuery="".concat(_native.sql,";");return[query,nativeQuery,_native.bindings]}catch(_unused){return["syntax error","",[]]}}!function(e){e.mysql="mysql",e.mysql2="mysql2",e.oracledb="oracledb",e.postgres="postgres",e.redshift="redshift",e.sqlite3="sqlite3"}(Dialect||(Dialect={}))}},[[197,1,2]]]);
//# sourceMappingURL=main.d8b8208d.chunk.js.map