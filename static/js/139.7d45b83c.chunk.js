"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[139],{4377:function(n,e,t){t.d(e,{Hg:function(){return o},IQ:function(){return f},Jh:function(){return v},om:function(){return d},pm:function(){return s},yK:function(){return p}});var r=t(5861),a=t(7757),u=t.n(a),c=t(2388);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="3a7b9fae23d21ee4f1e0a0e3e74eac23",o=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&include_adult=false&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US&append_to_response=videos"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},6139:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r=t(7689),a=t(2982),u=t(885),c=t(4377),i=t(2791),o=t(6723),s=t(184),p=function(){var n=function(n){var e=(0,i.useState)(null),t=(0,u.Z)(e,2),r=t[0],o=t[1];return(0,i.useEffect)((function(){n&&(0,c.Jh)(n).then((function(n){o((0,a.Z)(n.results))}))}),[n]),{reviews:r}}((0,r.UO)().movieId),e=n.reviews;return e?0===e.length?(0,s.jsx)("p",{children:"We don't have any reviews for this movie"}):(0,s.jsx)("ul",{children:e.map((function(n){return(0,s.jsxs)("li",{children:[(0,s.jsx)("p",{children:n.author}),(0,s.jsx)("p",{children:n.content})]},n.author)}))}):(0,s.jsx)(o.Z,{})}}}]);
//# sourceMappingURL=139.7d45b83c.chunk.js.map