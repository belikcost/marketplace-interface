"use strict";(self.webpackChunkplacemik_beta=self.webpackChunkplacemik_beta||[]).push([[61622,16245],{16245:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t){var i,n=t||{};if("formatting"===(n.context?String(n.context):"standalone")&&a.formattingValues){var u=a.defaultFormattingWidth||a.defaultWidth,l=n.width?String(n.width):u;i=a.formattingValues[l]||a.formattingValues[u]}else{var r=a.defaultWidth,d=n.width?String(n.width):a.defaultWidth;i=a.values[d]||a.values[r]}return i[a.argumentCallback?a.argumentCallback(e):e]}},a.exports=e.default},61622:function(a,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,n=(i=t(16245))&&i.__esModule?i:{default:i},u={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},l={narrow:u.narrow,abbreviated:u.abbreviated,wide:u.wide.map((function(a){return a+"ta"}))},r={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},d={narrow:r.narrow,short:r.short,abbreviated:r.abbreviated,wide:r.wide.map((function(a){return a+"na"}))},o={ordinalNumber:function(a){return Number(a)+"."},era:(0,n.default)({values:{narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","jälkeen ajanlaskun alun"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:(0,n.default)({values:u,formattingValues:l,defaultWidth:"wide"}),day:(0,n.default)({values:r,formattingValues:d,defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},wide:{am:"ap",pm:"ip",midnight:"keskiyöllä",noon:"keskipäivällä",morning:"aamupäivällä",afternoon:"iltapäivällä",evening:"illalla",night:"yöllä"}},defaultWidth:"wide"})};e.default=o,a.exports=e.default}}]);