/*! For license information please see 548.57763fa4.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[548],{6650:function(e,r,t){t.d(r,{$w:function(){return s},Df:function(){return i},Pg:function(){return d},Wf:function(){return p},Xj:function(){return c}});var o=t(4569),a=t.n(o);a().defaults.baseURL="https://api.themoviedb.org/3";var n="b97b15a6557134236e51fc0964baa8bb";function i(){return a().get("/trending/movie/week?api_key=".concat(n))}function p(e){return a().get("/search/movie?api_key=".concat(n,"&query=").concat(e,"&page=1&include_adult=false"))}function d(e){return a().get("/movie/".concat(e,"?api_key=").concat(n))}function s(e){return a().get("/movie/".concat(e,"/credits?api_key=").concat(n))}function c(e){return a().get("/movie/".concat(e,"/reviews?api_key=").concat(n))}},8548:function(e,r,t){t.r(r),t.d(r,{MovieDetails:function(){return ke}});var o,a,n,i,p,d,s,c,l,g=t(885),f=t(2791),u=t(470),b=t(6650),m=t(1072),h=t(168),y=t(6444),x=t(6731),v=(0,y.ZP)(x.rU)(o||(o=(0,h.Z)(["\n\tdisplay: block;\n\twidth: 70px;\n\ttext-align: center;\n\tpadding: 10px 20px;\n\tmargin-top: 20px;\n\tmargin-bottom: 20px;\n\ttext-decoration: none;\n\tfont-family: 'Scada', sans-serif;\n\tfont-size: 16px;\n\tcolor: white;\n\tbox-shadow: rgba(231, 158, 63, 0.17) 0px -23px 25px 0px inset,\n\t\trgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,\n\t\trgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,\n\t\trgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,\n\t\trgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\n\n\t&:focus,\n\t&:hover,\n\t&:visited,\n\t&:link,\n\t&:active {\n\t\ttext-decoration: none;\n\t}\n\n\t&:focus,\n\t&:hover {\n\t\tcolor: #de6b10;\n\t}\n"]))),S=y.ZP.div(a||(a=(0,h.Z)(["\n\tdisplay: flex;\n\tpadding-bottom: 10px;\n\tborder-bottom: 1px solid #de6b10;\n"]))),R=y.ZP.img(n||(n=(0,h.Z)(["\n\tmargin-right: 30px;\n\twidth: 300px;\n\theight: 400px;\n"]))),w=y.ZP.p(i||(i=(0,h.Z)(["\n\tcolor: #e3cfbfed;\n"]))),k=y.ZP.p(p||(p=(0,h.Z)(["\n\tpadding: 0;\n\tdisplay: flex;\n\twidth: 100%;\n\tcolor: #e3cfbfed;\n"]))),j=y.ZP.p(d||(d=(0,h.Z)(["\n\tcolor: #e3cfbfed;\n\tfont-size: 14px;\n"]))),T=y.ZP.h3(s||(s=(0,h.Z)(["\n\tdisplay: block;\n\ttext-align: center;\n\tcolor: white;\n\tfont-size: 24px;\n\tmargin-bottom: 40px;\n"]))),B=y.ZP.ul(c||(c=(0,h.Z)(["\n\tlist-style: none;\n\tdisplay: flex;\n\tjustify-content: space-around;\n"]))),C=(0,y.ZP)(x.OL)(l||(l=(0,h.Z)(["\n\tdisplay: block;\n\tmargin-bottom: 10px;\n\tpadding: 10px 20px;\n\ttext-decoration: none;\n\n\twidth: 70px;\n\ttext-align: center;\n\n\ttext-decoration: none;\n\tfont-family: 'Scada', sans-serif;\n\tfont-size: 16px;\n\tcolor: white;\n\tbox-shadow: rgba(231, 158, 63, 0.17) 0px -23px 25px 0px inset,\n\t\trgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,\n\t\trgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,\n\t\trgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,\n\t\trgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\n\n\t&:focus,\n\t&:hover,\n\t&:visited,\n\t&:link,\n\t&:active {\n\t\ttext-decoration: none;\n\t}\n\n\t&:focus,\n\t&:hover {\n\t\tcolor: #de6b10;\n\t}\n"]))),W=t(1725),L=t.n(W),z=function(e,r){var t=L()({},e,r);for(var o in e){var a;e[o]&&"object"===typeof r[o]&&L()(t,((a={})[o]=L()(e[o],r[o]),a))}return t},O={breakpoints:[40,52,64].map((function(e){return e+"em"}))},P=function(e){return"@media screen and (min-width: "+e+")"},Z=function(e,r){return A(r,e,e)},A=function(e,r,t,o,a){for(r=r&&r.split?r.split("."):[r],o=0;o<r.length;o++)e=e?e[r[o]]:a;return e===a?t:e},G=function e(r){var t={},o=function(e){var o={},a=!1,n=e.theme&&e.theme.disableStyledSystemCache;for(var i in e)if(r[i]){var p=r[i],d=e[i],s=A(e.theme,p.scale,p.defaults);if("object"!==typeof d)L()(o,p(d,s,e));else{if(t.breakpoints=!n&&t.breakpoints||A(e.theme,"breakpoints",O.breakpoints),Array.isArray(d)){t.media=!n&&t.media||[null].concat(t.breakpoints.map(P)),o=z(o,I(t.media,p,s,d,e));continue}null!==d&&(o=z(o,H(t.breakpoints,p,s,d,e)),a=!0)}}return a&&(o=function(e){var r={};return Object.keys(e).sort((function(e,r){return e.localeCompare(r,void 0,{numeric:!0,sensitivity:"base"})})).forEach((function(t){r[t]=e[t]})),r}(o)),o};o.config=r,o.propNames=Object.keys(r),o.cache=t;var a=Object.keys(r).filter((function(e){return"config"!==e}));return a.length>1&&a.forEach((function(t){var a;o[t]=e(((a={})[t]=r[t],a))})),o},I=function(e,r,t,o,a){var n={};return o.slice(0,e.length).forEach((function(o,i){var p,d=e[i],s=r(o,t,a);d?L()(n,((p={})[d]=L()({},n[d],s),p)):L()(n,s)})),n},H=function(e,r,t,o,a){var n={};for(var i in o){var p=e[i],d=r(o[i],t,a);if(p){var s,c=P(p);L()(n,((s={})[c]=L()({},n[c],d),s))}else L()(n,d)}return n},X=function(e){var r=e.properties,t=e.property,o=e.scale,a=e.transform,n=void 0===a?Z:a,i=e.defaultScale;r=r||[t];var p=function(e,t,o){var a={},i=n(e,t,o);if(null!==i)return r.forEach((function(e){a[e]=i})),a};return p.scale=o,p.defaults=i,p},Y=function(e){void 0===e&&(e={});var r={};return Object.keys(e).forEach((function(t){var o=e[t];r[t]=!0!==o?"function"!==typeof o?X(o):o:X({property:t,scale:t})})),G(r)},_=Y({width:{property:"width",scale:"sizes",transform:function(e,r){return A(r,e,!function(e){return"number"===typeof e&&!isNaN(e)}(e)||e>1?e:100*e+"%")}},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0}),E=_,N={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};N.bg=N.backgroundColor;var F=Y(N),D=F,M=Y({fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:[12,14,16,20,24,32,48,64,72]},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0}),U=M,q=Y({alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0}),$={space:[0,4,8,16,32,64,128,256,512]},J=Y({gridGap:{property:"gridGap",scale:"space",defaultScale:$.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:$.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:$.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0}),K=J,Q={border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"},borderTopWidth:{property:"borderTopWidth",scale:"borderWidths"},borderTopColor:{property:"borderTopColor",scale:"colors"},borderTopStyle:{property:"borderTopStyle",scale:"borderStyles"}};Q.borderTopLeftRadius={property:"borderTopLeftRadius",scale:"radii"},Q.borderTopRightRadius={property:"borderTopRightRadius",scale:"radii"},Q.borderBottomWidth={property:"borderBottomWidth",scale:"borderWidths"},Q.borderBottomColor={property:"borderBottomColor",scale:"colors"},Q.borderBottomStyle={property:"borderBottomStyle",scale:"borderStyles"},Q.borderBottomLeftRadius={property:"borderBottomLeftRadius",scale:"radii"},Q.borderBottomRightRadius={property:"borderBottomRightRadius",scale:"radii"},Q.borderLeftWidth={property:"borderLeftWidth",scale:"borderWidths"},Q.borderLeftColor={property:"borderLeftColor",scale:"colors"},Q.borderLeftStyle={property:"borderLeftStyle",scale:"borderStyles"},Q.borderRightWidth={property:"borderRightWidth",scale:"borderWidths"},Q.borderRightColor={property:"borderRightColor",scale:"colors"},Q.borderRightStyle={property:"borderRightStyle",scale:"borderStyles"};var V=Y(Q),ee=V,re={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};re.bgImage=re.backgroundImage,re.bgSize=re.backgroundSize,re.bgPosition=re.backgroundPosition,re.bgRepeat=re.backgroundRepeat;var te=Y(re),oe={space:[0,4,8,16,32,64,128,256,512]},ae=Y({position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:oe.space},right:{property:"right",scale:"space",defaultScale:oe.space},bottom:{property:"bottom",scale:"space",defaultScale:oe.space},left:{property:"left",scale:"space",defaultScale:oe.space}}),ne={space:[0,4,8,16,32,64,128,256,512]},ie=function(e){return"number"===typeof e&&!isNaN(e)},pe=function(e,r){if(!ie(e))return A(r,e,e);var t=e<0,o=Math.abs(e),a=A(r,o,o);return ie(a)?a*(t?-1:1):t?"-"+a:a},de={};de.margin={margin:{property:"margin",scale:"space",transform:pe,defaultScale:ne.space},marginTop:{property:"marginTop",scale:"space",transform:pe,defaultScale:ne.space},marginRight:{property:"marginRight",scale:"space",transform:pe,defaultScale:ne.space},marginBottom:{property:"marginBottom",scale:"space",transform:pe,defaultScale:ne.space},marginLeft:{property:"marginLeft",scale:"space",transform:pe,defaultScale:ne.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:pe,defaultScale:ne.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:pe,defaultScale:ne.space}},de.margin.m=de.margin.margin,de.margin.mt=de.margin.marginTop,de.margin.mr=de.margin.marginRight,de.margin.mb=de.margin.marginBottom,de.margin.ml=de.margin.marginLeft,de.margin.mx=de.margin.marginX,de.margin.my=de.margin.marginY,de.padding={padding:{property:"padding",scale:"space",defaultScale:ne.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:ne.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:ne.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:ne.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:ne.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:ne.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:ne.space}},de.padding.p=de.padding.padding,de.padding.pt=de.padding.paddingTop,de.padding.pr=de.padding.paddingRight,de.padding.pb=de.padding.paddingBottom,de.padding.pl=de.padding.paddingLeft,de.padding.px=de.padding.paddingX,de.padding.py=de.padding.paddingY;var se=function(){for(var e={},r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];t.forEach((function(r){r&&r.config&&L()(e,r.config)}));var a=G(e);return a}(Y(de.margin),Y(de.padding)),ce=Y({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}});function le(){return le=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},le.apply(this,arguments)}var ge=function(e,r,t,o,a){for(r=r&&r.split?r.split("."):[r],o=0;o<r.length;o++)e=e?e[r[o]]:a;return e===a?t:e},fe=[40,52,64].map((function(e){return e+"em"})),ue={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},be={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},me={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},he={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},ye=function(e,r){if("number"!==typeof r||r>=0)return ge(e,r,r);var t=Math.abs(r),o=ge(e,t,t);return"string"===typeof o?"-"+o:-1*o},xe=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(e,r){var t;return le({},e,((t={})[r]=ye,t))}),{}),ve=function e(r){return function(t){void 0===t&&(t={});var o=le({},ue,{},t.theme||t),a={},n=function(e){return function(r){var t={},o=ge(r,"breakpoints",fe),a=[null].concat(o.map((function(e){return"@media screen and (min-width: "+e+")"})));for(var n in e){var i="function"===typeof e[n]?e[n](r):e[n];if(null!=i)if(Array.isArray(i))for(var p=0;p<i.slice(0,a.length).length;p++){var d=a[p];d?(t[d]=t[d]||{},null!=i[p]&&(t[d][n]=i[p])):t[n]=i[p]}else t[n]=i}return t}}("function"===typeof r?r(o):r)(o);for(var i in n){var p=n[i],d="function"===typeof p?p(o):p;if("variant"!==i)if(d&&"object"===typeof d)a[i]=e(d)(o);else{var s=ge(be,i,i),c=ge(he,s),l=ge(o,c,ge(o,s,{})),g=ge(xe,s,ge)(l,d,d);if(me[s])for(var f=me[s],u=0;u<f.length;u++)a[f[u]]=g;else a[s]=g}else a=le({},a,{},e(ge(o,d))(o))}return a}},Se=function(e){var r,t,o=e.scale,a=e.prop,n=void 0===a?"variant":a,i=e.variants,p=void 0===i?{}:i,d=e.key;t=Object.keys(p).length?function(e,r,t){return ve(A(r,e,null))(t.theme)}:function(e,r){return A(r,e,null)},t.scale=o||d,t.defaults=p;var s=((r={})[n]=t,r);return G(s)},Re=(Se({key:"buttons"}),Se({key:"textStyles",prop:"textStyle"}),Se({key:"colorStyles",prop:"colors"}),E.width,E.height,E.minWidth,E.minHeight,E.maxWidth,E.maxHeight,E.size,E.verticalAlign,E.display,E.overflow,E.overflowX,E.overflowY,D.opacity,U.fontSize,U.fontFamily,U.fontWeight,U.lineHeight,U.textAlign,U.fontStyle,U.letterSpacing,q.alignItems,q.alignContent,q.justifyItems,q.justifyContent,q.flexWrap,q.flexDirection,q.flex,q.flexGrow,q.flexShrink,q.flexBasis,q.justifySelf,q.alignSelf,q.order,K.gridGap,K.gridColumnGap,K.gridRowGap,K.gridColumn,K.gridRow,K.gridAutoFlow,K.gridAutoColumns,K.gridAutoRows,K.gridTemplateColumns,K.gridTemplateRows,K.gridTemplateAreas,K.gridArea,ee.borderWidth,ee.borderStyle,ee.borderColor,ee.borderTop,ee.borderRight,ee.borderBottom,ee.borderLeft,ee.borderRadius,te.backgroundImage,te.backgroundSize,te.backgroundPosition,te.backgroundRepeat,ae.zIndex,ae.top,ae.right,ae.bottom,ae.left,(0,y.ZP)("div")(M,se,F,_,V,ce,J)),we=t(184);function ke(e){e.backPath;var r,t,o,a,n=(0,f.useState)(!1),i=(0,g.Z)(n,2),p=i[0],d=i[1],s=(0,u.UO)().movieId;console.log(s);var c=(0,f.useState)(null),l=(0,g.Z)(c,2),h=l[0],y=l[1],x=(0,u.TH)(),W=null!==(r=null===(t=x.state)||void 0===t?void 0:t.from)&&void 0!==r?r:"/movies";return(0,f.useEffect)((function(){d(!0),(0,b.Pg)(s).then((function(e){var r=e.data;y(r),console.log(r)})).catch(console.log).finally((function(){d(!1)}))}),[s]),(0,we.jsxs)(Re,{width:"800px",ml:"auto",mr:"auto",pb:2,pt:2,pl:6,pr:6,children:[(0,we.jsx)(v,{to:W,children:"Go Back"}),p&&(0,we.jsx)(m.a,{}),h&&(0,we.jsxs)(S,{children:[(0,we.jsx)(R,{alt:h.title,src:"http://image.tmdb.org/t/p/w500".concat(h.poster_path)}),(0,we.jsxs)("div",{children:[(0,we.jsxs)("h2",{children:[h.title," (",h.release_date.slice(0,4),")"]}),(0,we.jsxs)(w,{children:["User Score: ",Math.round(100*Number(h.vote_average)/10),"%"]}),(0,we.jsx)("h3",{children:"Overview"}),(0,we.jsx)(k,{children:h.overview}),(0,we.jsx)("h4",{children:"Genres"}),(0,we.jsx)(j,{children:h.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,we.jsxs)("div",{children:[(0,we.jsx)(T,{children:"Additional information"}),(0,we.jsxs)(B,{children:[(0,we.jsx)("li",{children:(0,we.jsx)(C,{to:"cast",state:{from:null===(o=x.state)||void 0===o?void 0:o.from},children:"Cast"})}),(0,we.jsx)("li",{children:(0,we.jsx)(C,{to:"reviews",state:{from:null===(a=x.state)||void 0===a?void 0:a.from},children:"Reviews"})})]})]}),(0,we.jsx)(f.Suspense,{fallback:(0,we.jsx)(m.a,{}),children:(0,we.jsx)(u.j3,{})})]})}},1725:function(e){var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(a){return!1}}()?Object.assign:function(e,n){for(var i,p,d=a(e),s=1;s<arguments.length;s++){for(var c in i=Object(arguments[s]))t.call(i,c)&&(d[c]=i[c]);if(r){p=r(i);for(var l=0;l<p.length;l++)o.call(i,p[l])&&(d[p[l]]=i[p[l]])}}return d}}}]);
//# sourceMappingURL=548.57763fa4.chunk.js.map