if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>i(e,n),d={module:{uri:n},exports:t,require:r};s[n]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/TGViFMILOTBzXiX40dsP0/_buildManifest.js",revision:"e7a95bd34c4f9f8729e5ac8c493a5516"},{url:"/_next/static/TGViFMILOTBzXiX40dsP0/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1267.7a965fbaac446e80.js",revision:"7a965fbaac446e80"},{url:"/_next/static/chunks/1284-18e8d9c48a117a6b.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/1351.0727c95b690bae64.js",revision:"0727c95b690bae64"},{url:"/_next/static/chunks/1358.42d37457938a9c9e.js",revision:"42d37457938a9c9e"},{url:"/_next/static/chunks/1427-06f1def98195251b.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/1453.42619f70d8821d3a.js",revision:"42619f70d8821d3a"},{url:"/_next/static/chunks/1511.d3ae5c9ebd229a14.js",revision:"d3ae5c9ebd229a14"},{url:"/_next/static/chunks/1591.8dd70b577160ae88.js",revision:"8dd70b577160ae88"},{url:"/_next/static/chunks/160b575a-586f85f8e5bd9b44.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/1730.a6c9aa755c59b9ea.js",revision:"a6c9aa755c59b9ea"},{url:"/_next/static/chunks/1735.e1a8caf265ee9110.js",revision:"e1a8caf265ee9110"},{url:"/_next/static/chunks/1739.fb2144be1cb19915.js",revision:"fb2144be1cb19915"},{url:"/_next/static/chunks/1922.ba7796a9013788b9.js",revision:"ba7796a9013788b9"},{url:"/_next/static/chunks/1975.5e1d1e1445cb6e92.js",revision:"5e1d1e1445cb6e92"},{url:"/_next/static/chunks/1982.00fdc3becde06fb3.js",revision:"00fdc3becde06fb3"},{url:"/_next/static/chunks/2140.e85ce5d41d506c6e.js",revision:"e85ce5d41d506c6e"},{url:"/_next/static/chunks/2289.034d80cb789051ad.js",revision:"034d80cb789051ad"},{url:"/_next/static/chunks/2333.77e391f6b243d4c1.js",revision:"77e391f6b243d4c1"},{url:"/_next/static/chunks/2393.0c6fc77850b23bf6.js",revision:"0c6fc77850b23bf6"},{url:"/_next/static/chunks/2489.4d9bc562b96e69ca.js",revision:"4d9bc562b96e69ca"},{url:"/_next/static/chunks/255.99ca521982071833.js",revision:"99ca521982071833"},{url:"/_next/static/chunks/2673.96ccdb756469b3f9.js",revision:"96ccdb756469b3f9"},{url:"/_next/static/chunks/2826.f61e6a02aa058c13.js",revision:"f61e6a02aa058c13"},{url:"/_next/static/chunks/2955.e9b07e224f065b30.js",revision:"e9b07e224f065b30"},{url:"/_next/static/chunks/3140.35ff144413cb5e15.js",revision:"35ff144413cb5e15"},{url:"/_next/static/chunks/3170.80a6bdccf1c536ff.js",revision:"80a6bdccf1c536ff"},{url:"/_next/static/chunks/3225.57e7f17db3ad0f04.js",revision:"57e7f17db3ad0f04"},{url:"/_next/static/chunks/3287-25f5ea806f8ebd81.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/334.a14a32e3ab158f5e.js",revision:"a14a32e3ab158f5e"},{url:"/_next/static/chunks/3432.9f2e74623c9d8061.js",revision:"9f2e74623c9d8061"},{url:"/_next/static/chunks/3463.1dc79c725a5e74d3.js",revision:"1dc79c725a5e74d3"},{url:"/_next/static/chunks/3586.ad04a62f6be49bf5.js",revision:"ad04a62f6be49bf5"},{url:"/_next/static/chunks/3590-f97ee044dbecc309.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/374.8d0830b7a77dc735.js",revision:"8d0830b7a77dc735"},{url:"/_next/static/chunks/3d47b92a-270dacc5f20a20bb.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/4071.6b871eb1c994efa0.js",revision:"6b871eb1c994efa0"},{url:"/_next/static/chunks/4200-d67a0dfa260266dc.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/4278.7e61c40b8d8414ea.js",revision:"7e61c40b8d8414ea"},{url:"/_next/static/chunks/428.4840fcade568d3f4.js",revision:"4840fcade568d3f4"},{url:"/_next/static/chunks/4320.184859d2d7ef200d.js",revision:"184859d2d7ef200d"},{url:"/_next/static/chunks/4501.409a66779b2335ee.js",revision:"409a66779b2335ee"},{url:"/_next/static/chunks/4556.162c4ff8e0c68400.js",revision:"162c4ff8e0c68400"},{url:"/_next/static/chunks/4616.12cf920aae6bc8c6.js",revision:"12cf920aae6bc8c6"},{url:"/_next/static/chunks/4671-1ed5319eb9ee2fc4.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/4678.f9682312c97d931d.js",revision:"f9682312c97d931d"},{url:"/_next/static/chunks/4799.44d25175e808d474.js",revision:"44d25175e808d474"},{url:"/_next/static/chunks/479ba886-e87a13ff62952e98.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/4868.4e948274b195dcb6.js",revision:"4e948274b195dcb6"},{url:"/_next/static/chunks/4886.8b7eaf72b0fad28f.js",revision:"8b7eaf72b0fad28f"},{url:"/_next/static/chunks/4999.21ccf6a0d6f92598.js",revision:"21ccf6a0d6f92598"},{url:"/_next/static/chunks/4e88bc13-e51812084bfa8ec4.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/5075.999a8a9283247006.js",revision:"999a8a9283247006"},{url:"/_next/static/chunks/5134.526c2b011734960d.js",revision:"526c2b011734960d"},{url:"/_next/static/chunks/52774a7f-41bc67264818727a.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/5398-e99d23ca3ccdfdee.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/5502-13a5f9a199b04b4f.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/5539.dd9db00cb646c308.js",revision:"dd9db00cb646c308"},{url:"/_next/static/chunks/5581.b72afdc5f751dada.js",revision:"b72afdc5f751dada"},{url:"/_next/static/chunks/5800.eb15984ec7c43de7.js",revision:"eb15984ec7c43de7"},{url:"/_next/static/chunks/59650de3-308e352f1bdc1293.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/5e22fd23-b38e2cd78eebb5f9.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/6084.713d2467dbbd8df9.js",revision:"713d2467dbbd8df9"},{url:"/_next/static/chunks/6412.65dbc6041bf823ca.js",revision:"65dbc6041bf823ca"},{url:"/_next/static/chunks/6520.a6d68a95d4d3fe64.js",revision:"a6d68a95d4d3fe64"},{url:"/_next/static/chunks/66ec4792-b2b8f8da6965e612.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/6952.4b16516c448ab7a6.js",revision:"4b16516c448ab7a6"},{url:"/_next/static/chunks/707.636e85451f9cabd0.js",revision:"636e85451f9cabd0"},{url:"/_next/static/chunks/723.75063e3b3865cfb7.js",revision:"75063e3b3865cfb7"},{url:"/_next/static/chunks/73d3a5f7-0481ab1b1daf154e.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/7434.2e371b565e096634.js",revision:"2e371b565e096634"},{url:"/_next/static/chunks/7460.877328943ab85516.js",revision:"877328943ab85516"},{url:"/_next/static/chunks/7725.13d99c1a457dbd5b.js",revision:"13d99c1a457dbd5b"},{url:"/_next/static/chunks/7850.bfc3d16bd20c4478.js",revision:"bfc3d16bd20c4478"},{url:"/_next/static/chunks/7879.4eabb93d582d69eb.js",revision:"4eabb93d582d69eb"},{url:"/_next/static/chunks/7913.96aa97d7e3b443a8.js",revision:"96aa97d7e3b443a8"},{url:"/_next/static/chunks/7950.4ca5df7cc29f0857.js",revision:"4ca5df7cc29f0857"},{url:"/_next/static/chunks/795d4814-f8738a84ef81812a.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/8080.4b1bf0b4409748ec.js",revision:"4b1bf0b4409748ec"},{url:"/_next/static/chunks/8494.171f57b88b1ca701.js",revision:"171f57b88b1ca701"},{url:"/_next/static/chunks/8607.3f7fd116b7f40d64.js",revision:"3f7fd116b7f40d64"},{url:"/_next/static/chunks/8910.0dee64ffaa2c1b09.js",revision:"0dee64ffaa2c1b09"},{url:"/_next/static/chunks/8933.a712f70313f044e5.js",revision:"a712f70313f044e5"},{url:"/_next/static/chunks/8969.d88de356b3412638.js",revision:"d88de356b3412638"},{url:"/_next/static/chunks/8e1d74a4-ea6b6e0e0ce121b1.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/9038-27d123359b73cb5d.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/9109.56d8298d4807aa4d.js",revision:"56d8298d4807aa4d"},{url:"/_next/static/chunks/9181-0fb142629cb0c0b2.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/9191-a6300573f3b4fc6f.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/9451.8502d5be5a97d384.js",revision:"8502d5be5a97d384"},{url:"/_next/static/chunks/9525.7db5fb5296261bd5.js",revision:"7db5fb5296261bd5"},{url:"/_next/static/chunks/9542.8f387966cc477c0c.js",revision:"8f387966cc477c0c"},{url:"/_next/static/chunks/9607-9c59f4afba1b6e43.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/9726.8debc412d3e1f412.js",revision:"8debc412d3e1f412"},{url:"/_next/static/chunks/9867.ce8b726f01cc850d.js",revision:"ce8b726f01cc850d"},{url:"/_next/static/chunks/9c4e2130-ab58ab9082f060ef.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/aaea2bcf-c8f177c31ecca13d.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/(core)/dashboard/page-650a6947b3f6d006.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/(core)/fx/page-7da8ff3f2688672f.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/(core)/fx/swap/page-96693230f1a4b112.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/(core)/layout-052a9927190c4b24.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/(core)/settings/page-89caf492c7a14213.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/(marketing)/docs/%5Bslug%5D/page-330115e83d41073c.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/(marketing)/layout-c76f5413e9aa6842.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/(marketing)/page-2093848d90f92a6e.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/(messaging)/airtime/page-125e829117213a5e.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/(messaging)/bills/page-738f51dcbd7b4c91.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/(messaging)/dash-receive/page-470e2c83d6d89650.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/(messaging)/dash-send/page-bed6a97b0d814446.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/(messaging)/dash-withdraw/page-2df281fe5ffe80b7.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/(messaging)/invoice/all/page-9eb8c78a5354bb59.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/(messaging)/invoice/new/page-bad015e10dc2216f.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/(messaging)/invoice/page-f481390b61867dec.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/(messaging)/kyc/page-04d92bc5d368b453.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/(messaging)/layout-baaf697b9836e58b.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/(messaging)/savings/page-49cd030958871938.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/(messaging)/support/page-2782d5f2abb738f3.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/_not-found/page-526f0915aa4e4b6d.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/error-c0f731c3a78ad36c.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/global-error-a8fd2ad6848e8e98.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/layout-702eb0f689c45fbf.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/loading-56888becd497acc8.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/not-found-293b137f31e25c04.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/sentry-example-page/page-9db45a15ff75895b.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/app/template-07a4486a0fb416fa.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/e34aaff9-eae6dcfe24deebef.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/eec3d76d-9e3ba7a196b87e04.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/f8025e75-3a479cbf06d4acd8.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/fd9d1056-4beda34780498cd7.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/framework-1158e7decabd1757.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/main-6a2064170eb21b1d.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/main-app-e665a09a8f6d63ed.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/pages/_app-69e2bb5134ba3eaf.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/pages/_error-daa80f5b4d0fe27d.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-eb13fd70e3a3c368.js",revision:"TGViFMILOTBzXiX40dsP0"},{url:"/_next/static/css/14f90bb9001459bf.css",revision:"14f90bb9001459bf"},{url:"/_next/static/css/998c2ef608cebb3f.css",revision:"998c2ef608cebb3f"},{url:"/_next/static/css/a4e959fedec526f6.css",revision:"a4e959fedec526f6"},{url:"/_next/static/media/05d30fccf6dfb4ed-s.woff2",revision:"f44737ff64388df273b8277a256e2dae"},{url:"/_next/static/media/12d86e8d7e1c2769-s.p.woff2",revision:"365576734a1d6fcf0ba8ce8ee218c9e7"},{url:"/_next/static/media/5536c2b71f31f4c7-s.woff2",revision:"a249fc31bd37ca2fed2511e9175a4df7"},{url:"/_next/static/media/69f639318a288687-s.woff2",revision:"f743aa03b62d95151d2738aba962f693"},{url:"/_next/static/media/8694b289afda18d6-s.woff2",revision:"b13d654f57096aef1177e281f219fc44"},{url:"/_next/static/media/8b23d1c224a60289-s.woff2",revision:"853656401170d5477478bb260f83b3f0"},{url:"/_next/static/media/8b4a75f5f73fccba-s.woff2",revision:"da8c2f9aaeea2960a6c875d3a62ca406"},{url:"/_next/static/media/8ea6d73be4df1015-s.woff2",revision:"853efe04b7a3633d95dcb66ebdc24e9b"},{url:"/_next/static/media/c4ae9d43d1916f56-s.p.woff2",revision:"669fe3ffb99559c435511920bd0f20b5"},{url:"/_next/static/media/f258d360d0b320a1-s.woff2",revision:"56a561d446687faf7fa7e6506fff528b"},{url:"/_next/static/media/f2fa6d7398e61d46-s.woff2",revision:"9100886c15016aaff47cb7fbfb203398"},{url:"/_next/static/media/f5d2a4050322f958-s.woff2",revision:"b7d64795f9fab563d65c0bbf4e4fceb6"},{url:"/_next/static/media/user_preferences_bindings_wasm_bg.df5904c2.wasm",revision:"df5904c2"},{url:"/banner.png",revision:"37cbf88012fff17a437d5eacd158517e"},{url:"/bit.jpeg",revision:"a88ff013d6cd500feb690d5093a781e7"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/android-chrome-192x192.png",revision:"bf08e52ecdb44915ee88929c19b6becd"},{url:"/icons/android-chrome-384x384.png",revision:"a874528b1afef54f080d003e6d840637"},{url:"/icons/apple-touch-icon.png",revision:"966b3f6ee731d3fae1c74de84aed99d7"},{url:"/icons/icon-512x512.png",revision:"64150646c2db3aeaa7735638a2a16aaa"},{url:"/icons/icon.png",revision:"95a85da3e96bb443eb5ede2f7dab299c"},{url:"/logo.png",revision:"bf08e52ecdb44915ee88929c19b6becd"},{url:"/manifest.json",revision:"def2a2e062a26ee3de30d9c891a4f31f"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/support.png",revision:"9b8bc5a1e461eee18cc9754525119962"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/xmtp-icon.png",revision:"029c14acf3050d178eb5cb3272380980"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
//# sourceMappingURL=sw.js.map
