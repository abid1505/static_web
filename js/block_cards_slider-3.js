!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}({"./components/block_cards_slider/block_cards_slider-3.js":function(e,r,t){"use strict";t.r(r);var n=t("jquery");t.n(n);jQuery,new Swiper(".block_cards_slider-swiper-container",{slidesPerView:1.1,centeredSlides:!0,loop:!0,navigation:{nextEl:".block_cards_slider-button-next",prevEl:".block_cards_slider-button-prev"},breakpoints:{768:{slidesPerView:2.2,centeredSlides:!1,spaceBetween:16},992:{slidesPerView:3,centeredSlides:!1,spaceBetween:32}}})},1:function(e,r,t){e.exports=t("./components/block_cards_slider/block_cards_slider-3.js")},jquery:function(e,r){e.exports=jQuery}});