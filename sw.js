if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let l={};const o=e=>i(e,a),c={module:{uri:a},exports:l,require:o};s[a]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"71722832bc0fd8cb6e8a951b01c6893e"},{url:"android-chrome-512x512.png",revision:"6abc2e2fdcb78ea7868ff575fd17c7dc"},{url:"apple-touch-icon.png",revision:"2667e1a26e295761524fb0c67561d3f9"},{url:"assets/cherries-724b9e7c.png",revision:null},{url:"assets/HomeView-c306a290.js",revision:null},{url:"assets/index-9389998b.css",revision:null},{url:"assets/index-d93fa0d6.js",revision:null},{url:"assets/list-77a3a6c5.js",revision:null},{url:"assets/ListView-1ba92adb.js",revision:null},{url:"assets/ListView-1cfd68d9.css",revision:null},{url:"assets/materialdesignicons-webfont-48d3eec6.woff",revision:null},{url:"assets/materialdesignicons-webfont-861aea05.eot",revision:null},{url:"assets/materialdesignicons-webfont-bd725a7a.ttf",revision:null},{url:"assets/materialdesignicons-webfont-e52d60f6.woff2",revision:null},{url:"assets/settings-c5fe34ec.js",revision:null},{url:"assets/SettingsView-2a1794b3.js",revision:null},{url:"assets/SettingsView-4791ee6a.css",revision:null},{url:"assets/VInput-fb25f5f9.js",revision:null},{url:"assets/VInput-fe8650e4.css",revision:null},{url:"assets/VRow-937a9bde.js",revision:null},{url:"favicon-16x16.png",revision:"a7d4844c9298446d5b2dd02ec50f828d"},{url:"favicon-32x32.png",revision:"18178101765e99209038d6c7f6b783ee"},{url:"favicon.ico",revision:"9bfc0f7ee9d9a349409101092c255a76"},{url:"index.html",revision:"b7096652c5d6b0aae1e2c1ed2be39123"},{url:"mstile-150x150.png",revision:"a1174867c0bc6ce1c5a3654017767980"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"safari-pinned-tab.svg",revision:"2269406e483d08936aa0be47710b833a"},{url:"splashscreens/ipad_splash.png",revision:"d72e6ede3bce03064a3d0fdf84e13b7c"},{url:"splashscreens/ipadpro1_splash.png",revision:"2f801475146abfee73dbf6872de8fed8"},{url:"splashscreens/ipadpro2_splash.png",revision:"0afe30c39720f26bf35eacd8dbd97ece"},{url:"splashscreens/ipadpro3_splash.png",revision:"ee1c9eedb61328de87feb282998d6ea1"},{url:"splashscreens/iphone5_splash.png",revision:"c774b65493f68df461f4b1beab2bdd6a"},{url:"splashscreens/iphone6_splash.png",revision:"d44826971d7ba318536580ae81c4092c"},{url:"splashscreens/iphoneplus_splash.png",revision:"e43fd262afd163eec04dea6857206364"},{url:"splashscreens/iphonex_splash.png",revision:"2f44d2c3ec6ae5a0b4348be7b360fc0b"},{url:"splashscreens/iphonexr_splash.png",revision:"2f98fe221785edb692465217a7ed6b88"},{url:"splashscreens/iphonexsmax_splash.png",revision:"a4bf34b69ab136c766153592503026df"},{url:"./android-chrome-192x192.png",revision:"71722832bc0fd8cb6e8a951b01c6893e"},{url:"./android-chrome-512x512.png",revision:"6abc2e2fdcb78ea7868ff575fd17c7dc"},{url:"manifest.webmanifest",revision:"9802a72d9ab831bb83ba7b5072e41215"}],{ignoreURLParametersMatching:[/.*/]}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
