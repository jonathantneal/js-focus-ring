var jsFocusRing=function(){"use strict";return function(t){var e={text:1,search:1,url:1,tel:1,email:1,password:1,number:1,date:1,month:1,week:1,time:1,datetime:1,"datetime-local":1},n=void 0;(t=t||window).addEventListener("blur",function(t){t.target instanceof Element&&(t.target.removeAttribute("js-focus"),t.target.removeAttribute("js-focus-ring"))},!0),t.addEventListener("focus",function(a){var r=document.activeElement;r instanceof Element&&"BODY"!==r.tagName&&(r.setAttribute("js-focus",""),(n||t===a.target||"INPUT"===r.tagName&&e[r.type]&&!r.readonly||"TEXTAREA"===r.tagName&&!r.readonly||"true"===r.contentEditable)&&r.setAttribute("js-focus-ring",""))},!0),t.addEventListener("keydown",function(){n=clearTimeout(n)||setTimeout(function(){n=0},100)},!0)}}();
//# sourceMappingURL=js-focus-ring.env.js.map
