(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{10:function(e,n,t){e.exports={currenciesList:"CurrenciesList_currenciesList__3DIE_",noResults:"CurrenciesList_noResults__MmQRJ",visible:"CurrenciesList_visible__2yIlV",noResultsList:"CurrenciesList_noResultsList__1fg8C"}},11:function(e,n,t){e.exports={lastUpdate:"Footer_lastUpdate__1QjSL",currency:"Footer_currency__OtTn8",error:"Footer_error__YVxTY",timer:"Footer_timer__2oFvt"}},12:function(e,n,t){e.exports={inputWrap:"AmountInput_inputWrap__G34YO",inputInner:"AmountInput_inputInner__KgMFX",inputName:"AmountInput_inputName__1asSI",arrowWrap:"AmountInput_arrowWrap__3xipD",crossWrap:"AmountInput_crossWrap__3v_Kl"}},15:function(e,n,t){e.exports={currency:"Currency_currency__3mJVx",fullName:"Currency_fullName__4Y5GY",visible:"Currency_visible__1-gYm"}},18:function(e,n,t){e.exports={tabBox:"TabBox_tabBox__1Gr4k",row:"TabBox_row__1eQJD",currencyWrap:"TabBox_currencyWrap__2h-L6"}},20:function(e,n,t){e.exports={swap:"Swap_swap__1piV2",swapAnimation:"Swap_swapAnimation__Fdr6d",rotateSwapBtn:"Swap_rotateSwapBtn__3Vbp0"}},36:function(e,n,t){},37:function(e,n,t){},63:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),c=t(13),s=t.n(c),i=(t(36),t(37),t(6)),o=t(18),l=t.n(o),u=t(2),j={ARS:"Argentine Peso",AUD:"Australian Dollar",AZN:"Azerbaijani Manat",BHD:"Bahraini Dinar",BTC:"Bitcoin",BOB:"Bolivian Boliviano",BRL:"Brazilian Real",GBP:"British Pound Sterling",BND:"Brunei Dollar",CAD:"Canadian Dollar",KYD:"Cayman Islands Dollar",CLP:"Chilean Peso",CNY:"Chinese Yuan",COP:"Colombian Peso",CZK:"Czech Republic Koruna",DKK:"Danish Krone",EGP:"Egyptian Pound",EUR:"Euro",FJD:"Fijian Dollar",GEL:"Georgian Lari",GHS:"Ghanaian Cedi",HKD:"Hong Kong Dollar",HUF:"Hungarian Forint",ISK:"Icelandic Kr\xc3\xb3na",INR:"Indian Rupee",IDR:"Indonesian Rupiah",ILS:"Israeli New Sheqel",JPY:"Japanese Yen",JOD:"Jordanian Dinar",KZT:"Kazakhstani Tenge",KWD:"Kuwaiti Dinar",MYR:"Malaysian Ringgit",MXN:"Mexican Peso",MAD:"Moroccan Dirham",TWD:"New Taiwan Dollar",NZD:"New Zealand Dollar",NIO:"Nicaraguan C\xc3\xb3rdoba",NOK:"Norwegian Krone",OMR:"Omani Rial",PKR:"Pakistani Rupee",PYG:"Paraguayan Guarani",PEN:"Peruvian Nuevo Sol",PHP:"Philippine Peso",PLN:"Polish Zloty",QAR:"Qatari Rial",RON:"Romanian Leu",RUB:"Russian Ruble",SAR:"Saudi Riyal",SGD:"Singapore Dollar",ZAR:"South African Rand",KRW:"South Korean Won",SEK:"Swedish Krona",CHF:"Swiss Franc",THB:"Thai Baht",TND:"Tunisian Dinar",TRY:"Turkish Lira",UAH:"Ukrainian Hryvnia",AED:"United Arab Emirates Dirham",UYU:"Uruguayan Peso",USD:"US Dollar",VEF:"Venezuelan Bol\xc3\xadvar",VND:"Vietnamese Dong"},d=Object.fromEntries(Object.keys(j).map((function(e){return[e,e[0]+e[1]]}))),p=function(e){for(var n=e.split("."),t="",r=0,a=n[0].length-1;a>=0;a--)t+=n[0][a],3===(r+=1)&&(r=0,t+=",");return t=t.split("").reverse().join(""),void 0!==n[1]&&(t+="."+n[1]),","===t[0]&&(t=t.replace(t[0],"")),t};var b=t(5),h=Object(b.b)("c/SET_RATE"),x=Object(b.b)("c/SET_BASE"),f=Object(b.b)("c/SET_QUOTE"),m=Object(b.b)("c/SET_AMOUNT"),v=Object(b.b)("c/SET_PERCENT_CHANGE"),O=Object(b.b)("c/SET_LAST_UPDATE"),g=Object(b.b)("c/SET_ERROR"),R=t(0),w=function(e){var n=e.size;return Object(R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 10",width:n,height:n,children:Object(R.jsx)("path",{fill:"rgb(20, 30, 55)",fillRule:"evenodd",d:"M8 9.5L.5 2 1.55.95 8 7.4 14.45.95 15.5 2 8 9.5z",clipRule:"evenodd"})})},y=function(e){var n=e.size;return Object(R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 413.348 413.348",width:n,height:n,children:Object(R.jsx)("path",{fill:"rgb(20, 30, 55)",fillRule:"evenodd",d:"m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"})})},_=t(31),k=t(15),B=t.n(k),A=function(e){var n=e.currency,t=e.countryCode,r=e.selectMode,a=e.setSelectMode,c=e.setCurrency,s=e.setFilterValue,i=Object(u.b)(),o="BTC"===n?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAADAFBMVEVHcEz/fwD2kxr/AAD2khr0dQD3kxr//wD/qgD2kxr2khr2khr1khr2khr6lhr1khr2khn6lRn4kxr1khb2khn3kxr3kBi/fwD3kxr4khn3kxn3kRjzkBf4khr/VQD6lRn6lhr7lxv6lRr9mBv4lRn2khn6lhrMmQD5lRn4kxr3kxr3kxn3kxn2khn3kxn5lBn4lBn3kxn3lBr4lBkAZwD6lhr1khj5lRr4lBn5kRj3lBn3kxr2khr3kxn4lBn3khn1kRqqVQD8lhr3kxr3kxr2kBr0jxr7lhr3khn7lhr4lBn5lRr3kxr1kRv7lRr2kxn5lBn3khrykRj2kRj3lBn4khr2khn6lxr4lBj5lBrykhn2khn3kxr//////v33lBz///73lR33lB33kxv/nRz3lR7/mRv//fv//fz/nhz//vz2jAr3jQz//v73khj3lBv/mxv3jhD3kRX3kxn3kBT4lBr7lRr3jAz3jQ7//Pn3kRb/nxz/mBv+lxv5lBr3jxH//fr3jg/2iwr2jQz4njH80p/3khf+mRv/nBz3kBP/+/f816v//Pj5lRv7lhv/+vX5s137zpb4liH3jAr5qEf806H6t2b/+/b81ab6t2f82K34nS/7zJH4oTj4nC33iwn7wn3/mxz6w3/937r2jAz96M75tWH7zpj97Nf958z2iQX82rH7yo33lR/4myv+8N/4mCT6lRr6u2/+6tP3jg7969T4ojn5sFf+7tr++PD6v3j4ozz+9u36uWr2igb+69T82rD6uWz+8+b2iwj+7tz6vXL5pD72jQ75slr4pUD+797/+PD5sFj3liD96dD94sL4nzT+79z95sv//Pr3jxD5tmP+8+X948P93LX3myr7yo/5rlL94sP4qUj94L34pUH5tF/7wn/+7dj7xYX81KP/+fL5qkr6uGn81qj2hQD97Nj///37x4n6xYT95cf3mSf96tL7zZb2hwD+8eH5q03/mhv5rlT6wHn3lyP95cj8z5r7yYz+9Oj4oTf3hwD83LSsdU1lAAAAXHRSTlMABP4B/gL7AQP9/Pv++vX89476GJDqFgT9KI4pLWIDbfz9/v532NMFQY/W1fhe912nqa3sAeeHhu0V97m6zo2oawO/xGthYMLH6++F/Bzq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":"https://www.countryflags.io/".concat(t,"/flat/64.png");return Object(R.jsxs)("li",{className:B.a.currency,onClick:function(){r&&(i(c(n)),a(!1),s(""))},children:[Object(R.jsx)("img",{src:o,alt:"".concat(t," flag")}),Object(R.jsx)("span",{children:n}),Object(R.jsxs)("div",{className:B.a.visible,children:[Object(R.jsx)("span",{children:"\xa0\u2013\xa0"}),Object(R.jsx)("span",{className:B.a.fullName,children:j[n]})]})]})},C=t(10),S=t.n(C),N=function(e){var n=e.filterValue,t=Object(_.a)(e,["filterValue"]),a=Object(r.useRef)(null),c=Object.keys(d),s=Object(r.useState)(10),o=Object(i.a)(s,2),l=o[0],u=o[1],p=c.filter((function(e){return n.length>0?e.match(n)||j[e].toUpperCase().match(n):e}));return Object(r.useEffect)((function(){var e=a.current,n=function(n){e&&e.scrollHeight-e.clientHeight-e.scrollTop<=200&&l<c.length&&u((function(e){return e+10}))};return null===e||void 0===e||e.addEventListener("scroll",n),function(){return null===e||void 0===e?void 0:e.removeEventListener("scroll",n)}}),[a,l,c]),Object(R.jsx)("ul",{className:"".concat(S.a.currenciesList," ").concat(t.selectMode&&S.a.visible," ").concat(!p.length&&S.a.noResultsList),ref:a,children:p.length>0?Object(R.jsx)(R.Fragment,{children:p.splice(0,l).map((function(e){return Object(R.jsx)(A,{setCurrency:t.setCurrency,currency:e,countryCode:d[e],selectMode:t.selectMode,setSelectMode:t.setSelectMode,setFilterValue:t.setFilterValue},e)}))}):Object(R.jsx)("div",{className:S.a.noResults,children:Object(R.jsx)("span",{children:"No results available"})})})},D=t(7),L=t.n(D),E=function(e){var n=e.label,t=e.disableRequests,a=Object(r.useRef)(null),c=Object(u.c)((function(e){return"From"===n?e.currency.base:e.currency.quote})),s="From"===n?x:f,o=Object(r.useState)(!1),l=Object(i.a)(o,2),j=l[0],p=l[1],b=Object(r.useState)(""),h=Object(i.a)(b,2),m=h[0],v=h[1];!function(e,n){Object(r.useEffect)((function(){var t=function(t){var r=null===e||void 0===e?void 0:e.current;r&&!r.contains(t.target)&&n(t)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),function(){document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}}),[e,n])}(a,(function(){j&&(v(""),p(!1))}));var O=function(){t||p(!0)};return Object(R.jsxs)("div",{className:L.a.inputWrap,children:[Object(R.jsx)("label",{className:L.a.inputName,htmlFor:"from",onClick:O,children:n}),Object(R.jsxs)("div",{className:L.a.wrapper,ref:a,children:[j?Object(R.jsxs)("div",{className:L.a.inputInner,children:[Object(R.jsx)("input",{type:"text",id:n,value:m,autoFocus:!0,onChange:function(e){return v(e.target.value.toUpperCase())},placeholder:"Type to search...",autoComplete:"off"}),Object(R.jsx)("div",{className:L.a.crossWrap,onClick:function(){return p(!1)},children:Object(R.jsx)(y,{size:"13px"})})]}):Object(R.jsxs)("div",{className:L.a.currencyWrap,onClick:O,children:[Object(R.jsx)(A,{countryCode:d[c],selectMode:j,currency:c,setCurrency:s,setSelectMode:p,setFilterValue:v}),Object(R.jsx)("div",{className:L.a.arrowWrap,onClick:O,children:Object(R.jsx)(w,{size:"16px"})})]}),Object(R.jsx)(N,{setCurrency:s,filterValue:m,selectMode:j,setSelectMode:p,setFilterValue:v})]})]})},T=[null,"Sorry, this conversion is not supported","You have reached maximum 3 limit per minute in free account"],I=t(11),z=t.n(I),P=t(8),F=t.n(P),U=function(){var e=Object(u.c)((function(e){return e.currency})),n=e.base,t=e.quote,r=e.amount,a=e.rate,c=e.change,s=(+r||1).toFixed(2),i=c?"+"===c[0]?F.a.higher:"-"===c[0]?F.a.lower:F.a.neutral:"";return Object(R.jsxs)("div",{className:F.a.result,children:[Object(R.jsxs)("p",{className:F.a.resultFrom,children:[Object(R.jsxs)("span",{children:[p(s),"\xa0"]}),Object(R.jsxs)("span",{children:[j[n],"\xa0"]}),Object(R.jsx)("span",{children:"="})]}),Object(R.jsxs)("p",{className:F.a.resultTo,children:[Object(R.jsxs)("span",{children:[a?p((a*+s||1).toFixed(2)):"0.00","\xa0"]}),Object(R.jsxs)("span",{children:["".concat(j[t],"s"),"\xa0"]}),Object(R.jsx)("sup",{className:"".concat(F.a.percentageChange," ").concat(i),children:Object(R.jsx)("span",{children:c})})]})]})},K=function(e){var n=e.countdown,t=Object(u.c)((function(e){return e.currency})),r=t.base,a=t.quote,c=t.error,s=t.lastUpdate;return Object(R.jsxs)("div",{className:z.a.footer,children:[Object(R.jsx)(U,{}),c&&Object(R.jsxs)("div",{className:z.a.error,children:[Object(R.jsx)("span",{children:"".concat(c)}),c===T[2]&&Object(R.jsx)("span",{className:z.a.timer,children:n})]}),s&&Object(R.jsx)("div",{className:z.a.lastUpdate,children:Object(R.jsx)("span",{children:function(e){var n=new Date(new Date(e).getTime()+6e4*new Date(e).getTimezoneOffset()),t=n.toLocaleString("en",{month:"short"}),c=n.toLocaleString("en",{day:"2-digit"}),s=n.getFullYear(),i=n.toLocaleTimeString("ru",{timeStyle:"short"});return"".concat(j[r]," to ").concat(j[a],"\n    conversion \u2014 Last updated ").concat(t," ").concat(c,", ").concat(s,", ").concat(i," UTC")}(1e3*s)})})]})},q=t(29),W=t.n(q),M=t(12),V=t.n(M),Q=function(){var e=Object(u.b)(),n=Object(u.c)((function(e){return e.currency})),t=n.base,r=n.amount;return Object(R.jsxs)("div",{className:V.a.inputWrap,children:[Object(R.jsx)("label",{className:V.a.inputName,htmlFor:"amount",children:"Amount"}),Object(R.jsxs)("div",{className:V.a.inputInner,children:[Object(R.jsx)("div",{className:V.a.currencySymbol,children:W()(t)}),Object(R.jsx)("input",{type:"text",id:"amount",value:p(r),onChange:function(n){var t=n.target.value.replaceAll(",","");isNaN(+t)||e(m(t))},onBlur:function(){e(m(+r<=0?"1.00":(+r).toFixed(2).toString()))},onClick:function(){var n=Number.isInteger(+r)?(+r).toFixed(0).toString():r;e(m(n))},autoComplete:"off"})]})]})},Y=function(e){var n=e.size;return Object(R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 17",width:n,height:n,children:Object(R.jsx)("path",{fill:"rgb(0, 108, 224)",fillRule:"evenodd",d:"M11.726 1.273l2.387 2.394H.667V5h13.446l-2.386 2.393.94.94 4-4-4-4-.94.94zM.666 12.333l4 4 .94-.94L3.22 13h13.447v-1.333H3.22l2.386-2.394-.94-.94-4 4z",clipRule:"evenodd"})})},H=t(20),G=t.n(H),Z=function(e){var n=e.disableRequests,t=Object(u.b)(),a=Object(r.useState)(!1),c=Object(i.a)(a,2),s=c[0],o=c[1],l=Object(u.c)((function(e){return e.currency})),j=l.base,d=l.quote;return Object(R.jsx)("div",{className:G.a.swap,onClick:function(){n||(o(!0),t(x(d)),t(f(j)))},onAnimationEnd:function(){return o(!1)},children:Object(R.jsx)("button",{className:"".concat(s?G.a.swapAnimation:""),children:Object(R.jsx)(Y,{size:"16px"})})})},J=t(9),X=t.n(J),$=t(14),ee=t(30),ne=t.n(ee).a.create({baseURL:"https://fcsapi.com/api-v3/forex/"}),te={getLatestRate:function(){var e=Object($.a)(X.a.mark((function e(n,t){var r;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne.get("latest?symbol=".concat(n,"/").concat(t,"&access_key=").concat("OcYxup70EMV725EY7WkPuqgKZ"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},re=Object(b.c)({base:"USD",quote:"RUB",amount:"1.00",rate:null,change:null,lastUpdate:null,error:null},(function(e){e.addCase(h,(function(e,n){e.rate=n.payload})),e.addCase(x,(function(e,n){e.base=n.payload})),e.addCase(f,(function(e,n){e.quote=n.payload})),e.addCase(O,(function(e,n){e.lastUpdate=n.payload})),e.addCase(v,(function(e,n){e.change=n.payload})),e.addCase(m,(function(e,n){e.amount=n.payload})),e.addCase(g,(function(e,n){e.error=n.payload}))})),ae=function(){var e=Object(u.b)(),n=Object(u.c)((function(e){return e.currency})),t=n.base,a=n.quote,c=n.error,s=Object(r.useState)(0),o=Object(i.a)(s,2),j=o[0],d=o[1],p=Object(r.useState)(!1),b=Object(i.a)(p,2),x=b[0],f=b[1];return Object(r.useEffect)((function(){if(c===T[1])e(h(0)),e(v("0%"));else if(c===T[2]){d(63),f(!0);var n=setInterval((function(){d((function(e){return e<=0?(f(!1),clearInterval(n),0):e-1}))}),1e3)}}),[c]),Object(r.useEffect)((function(){var n,r;x||(t===a?(e(h(1)),e(v("0%"))):e((n=t,r=a,function(){var e=Object($.a)(X.a.mark((function e(t){var a,c,s,i,o,l,u;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.getLatestRate(n,r);case 2:a=e.sent,c=a.code,s=null,200===c?(i=a.response[0],o=i.cp,l=i.o,u=i.t,t(h(+l)),t(v(o)),t(O(+u))):113===c?s="Sorry, this conversion is not supported":213===c&&(s="You have reached maximum 3 limit per minute in free account"),t(g(s));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())))}),[t,a,x,e]),Object(R.jsxs)("div",{className:l.a.tabBox,children:[Object(R.jsxs)("div",{className:l.a.row,children:[Object(R.jsx)(Q,{}),Object(R.jsx)(E,{disableRequests:x,label:"From"}),Object(R.jsx)(Z,{disableRequests:x}),Object(R.jsx)(E,{disableRequests:x,label:"To"})]}),Object(R.jsx)(K,{countdown:j})]})},ce=function(){return Object(R.jsx)("div",{className:"App",children:Object(R.jsx)("div",{className:"container",children:Object(R.jsx)(ae,{})})})},se=t(4),ie=Object(se.b)({currency:re}),oe=Object(b.a)({reducer:ie});s.a.render(Object(R.jsx)(a.a.StrictMode,{children:Object(R.jsx)(u.a,{store:oe,children:Object(R.jsx)(ce,{})})}),document.getElementById("root"))},7:function(e,n,t){e.exports={inputWrap:"CurrencyInput_inputWrap__nxQzc",inputInner:"CurrencyInput_inputInner__3k4n0",inputName:"CurrencyInput_inputName__3SJit",arrowWrap:"CurrencyInput_arrowWrap__3MGXY",crossWrap:"CurrencyInput_crossWrap__3pPSN",currencyWrap:"CurrencyInput_currencyWrap__1UR-K",wrapper:"CurrencyInput_wrapper__3gyhw"}},8:function(e,n,t){e.exports={result:"Result_result__3UT89",resultFrom:"Result_resultFrom__1K8ES",resultTo:"Result_resultTo__1RLv8",percentageChange:"Result_percentageChange__jEP8A",lower:"Result_lower__3a14J",higher:"Result_higher__3uIOS",neutral:"Result_neutral__3wTYm"}}},[[63,1,2]]]);
//# sourceMappingURL=main.1a4ddde2.chunk.js.map