"use strict";(self.webpackChunkplacemik_beta=self.webpackChunkplacemik_beta||[]).push([[49324,16245],{16245:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var d,u=a||{};if("formatting"===(u.context?String(u.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,i=u.width?String(u.width):r;d=e.formattingValues[i]||e.formattingValues[r]}else{var n=e.defaultWidth,l=u.width?String(u.width):e.defaultWidth;d=e.values[l]||e.values[n]}return d[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},49324:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d,u=(d=a(16245))&&d.__esModule?d:{default:d},r={ordinalNumber:function(e){var t=Number(e),a=t%100;if(a>20||a<10)switch(a%10){case 1:return t+"-ви";case 2:return t+"-ри";case 7:case 8:return t+"-ми"}return t+"-ти"},era:(0,u.default)({values:{narrow:["пр.н.е.","н.е."],abbreviated:["пред н. е.","н. е."],wide:["пред нашата ера","нашата ера"]},defaultWidth:"wide"}),quarter:(0,u.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-ви кв.","2-ри кв.","3-ти кв.","4-ти кв."],wide:["1-ви квартал","2-ри квартал","3-ти квартал","4-ти квартал"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,u.default)({values:{abbreviated:["јан","фев","мар","апр","мај","јун","јул","авг","септ","окт","ноем","дек"],wide:["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември"]},defaultWidth:"wide"}),day:(0,u.default)({values:{narrow:["Н","П","В","С","Ч","П","С"],short:["не","по","вт","ср","че","пе","са"],abbreviated:["нед","пон","вто","сре","чет","пет","саб"],wide:["недела","понеделник","вторник","среда","четврток","петок","сабота"]},defaultWidth:"wide"}),dayPeriod:(0,u.default)({values:{wide:{am:"претпладне",pm:"попладне",midnight:"полноќ",noon:"напладне",morning:"наутро",afternoon:"попладне",evening:"навечер",night:"ноќе"}},defaultWidth:"wide"})};t.default=r,e.exports=t.default}}]);