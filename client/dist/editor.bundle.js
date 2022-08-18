(()=>{"use strict";var e={848:()=>{let e,t;const n=new WeakMap,r=new WeakMap,o=new WeakMap,s=new WeakMap,a=new WeakMap;let i={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return r.get(e);if("objectStoreNames"===t)return e.objectStoreNames||o.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return u(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function c(s){return"function"==typeof s?(a=s)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(a)?function(...e){return a.apply(d(this),e),u(n.get(this))}:function(...e){return u(a.apply(d(this),e))}:function(e,...t){const n=a.call(d(this),e,...t);return o.set(n,e.sort?e.sort():[e]),u(n)}:(s instanceof IDBTransaction&&function(e){if(r.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)}));r.set(e,t)}(s),c=s,(e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>c instanceof e))?new Proxy(s,i):s);var a,c}function u(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{t(u(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&n.set(t,e)})).catch((()=>{})),a.set(t,e),t}(e);if(s.has(e))return s.get(e);const t=c(e);return t!==e&&(s.set(e,t),a.set(t,e)),t}const d=e=>a.get(e),p=["get","getKey","getAll","getAllKeys","count"],l=["put","add","delete","clear"],f=new Map;function v(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(f.get(t))return f.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=l.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!p.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,o?"readwrite":"readonly");let a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),o&&s.done]))[0]};return f.set(t,s),s}var D;D=i,i={...D,get:(e,t,n)=>v(e,t)||D.get(e,t,n),has:(e,t)=>!!v(e,t)||D.has(e,t)},(async()=>{!function(e,t,{blocked:n,upgrade:r,blocking:o,terminated:s}={}){const a=indexedDB.open(e,t),i=u(a);r&&a.addEventListener("upgradeneeded",(e=>{r(u(a.result),e.oldVersion,e.newVersion,u(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),i.then((e=>{s&&e.addEventListener("close",(()=>s())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{}))}("jate",1,{upgrade(e){e.objectStoreNames.contains("jate")?console.log("jate database already exists"):(e.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}})})()}},t={};!function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}(848)})();