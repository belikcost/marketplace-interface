"use strict";(self.webpackChunkplacemik_beta=self.webpackChunkplacemik_beta||[]).push([[16274,16245],{16245:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a,i=n||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var d=e.defaultFormattingWidth||e.defaultWidth,r=i.width?String(i.width):d;a=e.formattingValues[r]||e.formattingValues[d]}else{var o=e.defaultWidth,u=i.width?String(i.width):e.defaultWidth;a=e.values[u]||e.values[o]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},16274:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(16245))&&a.__esModule?a:{default:a},d={ordinalNumber:function(e){return String(e)},era:(0,i.default)({values:{narrow:["ق","ب"],abbreviated:["ق.م.","ب.م."],wide:["قبل الميلاد","بعد الميلاد"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["ر1","ر2","ر3","ر4"],wide:["الربع الأول","الربع الثاني","الربع الثالث","الربع الرابع"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["ي","ف","م","أ","م","ي","ي","أ","س","أ","ن","د"],abbreviated:["ينا","فبر","مارس","أبريل","مايو","يونـ","يولـ","أغسـ","سبتـ","أكتـ","نوفـ","ديسـ"],wide:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["ح","ن","ث","ر","خ","ج","س"],short:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],abbreviated:["أحد","اثنـ","ثلا","أربـ","خميـ","جمعة","سبت"],wide:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"ص",pm:"م",midnight:"ن",noon:"ظ",morning:"صباحاً",afternoon:"بعد الظهر",evening:"مساءاً",night:"ليلاً"},abbreviated:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهر",morning:"صباحاً",afternoon:"بعد الظهر",evening:"مساءاً",night:"ليلاً"},wide:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهر",morning:"صباحاً",afternoon:"بعد الظهر",evening:"مساءاً",night:"ليلاً"}},defaultWidth:"wide",formattingValues:{narrow:{am:"ص",pm:"م",midnight:"ن",noon:"ظ",morning:"في الصباح",afternoon:"بعد الظـهر",evening:"في المساء",night:"في الليل"},abbreviated:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهر",morning:"في الصباح",evening:"في المساء",night:"في الليل"},wide:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهر",afternoon:"بعد الظـهر",evening:"في المساء",night:"في الليل"}},defaultFormattingWidth:"wide"})};t.default=d,e.exports=t.default}}]);