"use strict";(self.webpackChunkplacemik_beta=self.webpackChunkplacemik_beta||[]).push([[31044,16245],{16245:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,a){var t,o=a||{};if("formatting"===(o.context?String(o.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,i=o.width?String(o.width):r;t=e.formattingValues[i]||e.formattingValues[r]}else{var d=e.defaultWidth,u=o.width?String(o.width):e.defaultWidth;t=e.values[u]||e.values[d]}return t[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},31044:function(e,n,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t,o=(t=a(16245))&&t.__esModule?t:{default:t},r={ordinalNumber:function(e,n){return Number(e)+"."},era:(0,o.default)({values:{narrow:["pred Kr.","po Kr."],abbreviated:["pred Kr.","po Kr."],wide:["pred Kristom","po Kristovi"]}}),quarter:(0,o.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. štvrťrok","2. štvrťrok","3. štvrťrok","4. štvrťrok"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,o.default)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],wide:["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"]},defaultWidth:"wide",formattingValues:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],wide:["januára","februára","marca","apríla","mája","júna","júla","augusta","septembra","októbra","novembra","decembra"]},defaultFormattingWidth:"wide"}),day:(0,o.default)({values:{narrow:["n","p","u","s","š","p","s"],short:["ne","po","ut","st","št","pi","so"],abbreviated:["ne","po","ut","st","št","pi","so"],wide:["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"]},defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"ráno",afternoon:"pop.",evening:"več.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"ráno",afternoon:"popol.",evening:"večer",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"polnoc",noon:"poludnie",morning:"ráno",afternoon:"popoludnie",evening:"večer",night:"noc"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"o poln.",noon:"nap.",morning:"ráno",afternoon:"pop.",evening:"več.",night:"v n."},abbreviated:{am:"AM",pm:"PM",midnight:"o poln.",noon:"napol.",morning:"ráno",afternoon:"popol.",evening:"večer",night:"v noci"},wide:{am:"AM",pm:"PM",midnight:"o polnoci",noon:"napoludnie",morning:"ráno",afternoon:"popoludní",evening:"večer",night:"v noci"}},defaultFormattingWidth:"wide"})};n.default=r,e.exports=n.default}}]);