!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=e.parcelRequire7bc7;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var i=o[e];delete o[e];var t={id:e,exports:{}};return n[e]=t,i.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequire7bc7=i);var t=i("h6c0i"),r=document.querySelector(".form");function a(e,n){return new Promise((function(o,i){var t=Math.random()>.3;setTimeout((function(){t?o({position:e,delay:n}):i({position:e,delay:n})}),n)}))}r.addEventListener("submit",(function(e){e.preventDefault();var n=Number(r.delay.value),o=Number(r.amount.value),i=Number(r.step.value),l=n;if(l<=0)return;for(var u=0;u<o;u+=1)newPosition=u+1,a(newPosition,l).then((function(e){var n=e.position,o=e.delay;t.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"),{clickToClose:!0})})).catch((function(e){var n=e.position,o=e.delay;t.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"),{clickToClose:!0})})),l+=i}))}();
//# sourceMappingURL=03-promises.146c8557.js.map
