(this["webpackJsonpart-gallery"]=this["webpackJsonpart-gallery"]||[]).push([[0],{128:function(t,e,n){"use strict";n.r(e);var r=n(7),c=n.n(r),a=n(61),o=n.n(a),i=n(62),s=n(1),u=n(4),l=n(18),d=Object({NODE_ENV:"production",PUBLIC_URL:"/art-gallery",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"art-gallery2.roar123.testnet";var p=n(25),j=n(31),b=function(t){switch(t){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:d,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:d,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(t,"'."))}}("testnet");function w(){return(w=Object(u.a)(Object(s.a)().mark((function t(){var e;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.connect)(Object.assign({deps:{keyStore:new p.keyStores.BrowserLocalStorageKeyStore}},b));case 2:e=t.sent,window.walletConnection=new p.WalletConnection(e),window.accountId=window.walletConnection.getAccountId(),window.contract=new p.Contract(window.walletConnection.account(),b.contractName,{viewMethods:["getArtwork","getArtworks"],changeMethods:["setArtwork","deleteArtwork","heartOrUnheartArtwork"]});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(Object(s.a)().mark((function t(){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=j.formatNearAmount,t.next=3,window.walletConnection.account().getAccountBalance();case 3:return t.t1=t.sent.total,t.abrupt("return",(0,t.t0)(t.t1,2));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){window.walletConnection.requestSignIn(b.contractName)}function x(){window.walletConnection.signOut(),window.location.reload()}function g(){return Date.now().toString(36).substring(6,8)+Math.random().toString(36).substring(2,6)}function m(t){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(Object(s.a)().mark((function t(e){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.id=g(),t.next=3,window.contract.setArtwork({artwork:e});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(Object(s.a)().mark((function t(e){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.contract.heartOrUnheartArtwork({id:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(t){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(Object(s.a)().mark((function t(e){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.contract.deleteArtwork({id:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var A=n(0);var N=function(){var t=window.walletConnection.account(),e=Object(r.useState)([]),n=Object(l.a)(e,2),c=n[0],a=n[1],o=Object(r.useCallback)(Object(u.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.accountId){e.next=6;break}return e.t0=a,e.next=4,window.contract.getArtworks();case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)}))),[t.accountId]);Object(r.useEffect)((function(){o()}),[o]);var d=Object(r.useState)("0"),p=Object(l.a)(d,2),j=p[0],b=p[1],w=Object(r.useCallback)(Object(u.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.accountId){e.next=6;break}return e.t0=b,e.next=4,O();case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)}))),[t.accountId]);function f(t){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(Object(s.a)().mark((function t(e){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v(e);case 3:o(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),alert(JSON.stringify(t.t0.kind));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function k(t){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(Object(s.a)().mark((function t(e){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C(e);case 3:o(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),alert(JSON.stringify(t.t0.kind));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}Object(r.useEffect)((function(){w()}),[w]);var S=Object(r.useState)(""),N=Object(l.a)(S,2),I=N[0],E=N[1],U=Object(r.useState)(""),T=Object(l.a)(U,2),_=T[0],L=T[1],D=Object(r.useState)(""),F=Object(l.a)(D,2),R=F[0],P=F[1];function B(){return J.apply(this,arguments)}function J(){return(J=Object(u.a)(Object(s.a)().mark((function t(){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(I,_,R),t.prev=1,t.next=4,m({name:I,description:_,image:R});case 4:o(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),alert(JSON.stringify(t.t0.kind));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"title",children:"Decentralized Art Gallery by Rohan Phanse"}),t.accountId?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{children:t.accountId}),Object(A.jsxs)("div",{children:["Balance: ",j," NEAR"]}),Object(A.jsx)("button",{onClick:x,children:"LOG OUT"}),Object(A.jsx)("div",{className:"center",children:Object(A.jsx)("div",{className:"artworks",children:function(t){var e=Object(i.a)(t);return console.log(e),e.sort((function(t,e){return e.hearts-t.hearts})),console.log(e),e}(c).map((function(e){return Object(A.jsxs)("div",{className:"artwork",children:[Object(A.jsx)("img",{src:e.image,alt:e.name}),Object(A.jsx)("div",{children:e.name}),Object(A.jsx)("div",{className:"desc",children:e.description}),Object(A.jsx)("div",{children:e.id}),Object(A.jsx)("div",{children:e.owner}),Object(A.jsxs)("button",{onClick:Object(u.a)(Object(s.a)().mark((function t(){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e.id);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),children:[e.hearts," \u2764\ufe0f"]}),t.accountId===e.owner?Object(A.jsx)("button",{onClick:Object(u.a)(Object(s.a)().mark((function t(){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e.id);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),children:"\u274c"}):"","                                "]},e.id)}))})}),Object(A.jsx)("div",{children:"Add artwork:"}),Object(A.jsxs)("div",{id:"add-artwork-form",children:[Object(A.jsxs)("div",{children:["Name: ",Object(A.jsx)("input",{id:"name-input",onInput:function(t){return E(t.target.value)}})]}),Object(A.jsxs)("div",{children:["Description: ",Object(A.jsx)("textarea",{id:"desc-input",onInput:function(t){return L(t.target.value)}})]}),Object(A.jsxs)("div",{children:["Image URL: ",Object(A.jsx)("input",{id:"image-input",onInput:function(t){return P(t.target.value)}})]}),Object(A.jsx)("button",{id:"add-button",onClick:Object(u.a)(Object(s.a)().mark((function t(){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),children:"Add"})]})]}):Object(A.jsx)("button",{onClick:h,children:"CONNECT WALLET"}),Object(A.jsx)("style",{jsx:!0,children:"\n                .title {\n                    font-style: italic;\n                }\n\n                .center {\n                    display: flex;\n                    flex-direction: row;\n                    justify-content: center;\n                }\n\n                .artworks {\n                    display: grid;\n                    grid-template-columns: repeat(3, 1fr);\n                    width: 600px;\n                    grid-gap: 20px;\n                    align-items: center;\n                }\n\n                .artwork {\n                    display: flex;\n                    flex-direction: column;\n                    justify-content: center;\n                    align-items: center;\n                }\n\n                .artwork img {\n                    width: 200px;\n                    height: 200px;\n                    object-fit: contain;\n                }\n\n                .artwork .desc {\n                    font-style: italic;\n                }\n            "})]})},I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,129)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),a(t),o(t)}))};window.nearInitPromise=function(){return w.apply(this,arguments)}().then((function(){o.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(N,{})}),document.getElementById("root"))})).catch(console.error),I()},73:function(t,e){},83:function(t,e){}},[[128,1,2]]]);
//# sourceMappingURL=main.a1b75e19.chunk.js.map