if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>c(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0e762574-4e5e03aff0dfe163.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/1267.7a965fbaac446e80.js",revision:"7a965fbaac446e80"},{url:"/_next/static/chunks/1274.e492eb00d85f862a.js",revision:"e492eb00d85f862a"},{url:"/_next/static/chunks/1345-83ab7e22737d345a.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/1351.0727c95b690bae64.js",revision:"0727c95b690bae64"},{url:"/_next/static/chunks/1358.42d37457938a9c9e.js",revision:"42d37457938a9c9e"},{url:"/_next/static/chunks/1453.42619f70d8821d3a.js",revision:"42619f70d8821d3a"},{url:"/_next/static/chunks/1511.d3ae5c9ebd229a14.js",revision:"d3ae5c9ebd229a14"},{url:"/_next/static/chunks/1591.8dd70b577160ae88.js",revision:"8dd70b577160ae88"},{url:"/_next/static/chunks/160b575a-586f85f8e5bd9b44.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/1730.a6c9aa755c59b9ea.js",revision:"a6c9aa755c59b9ea"},{url:"/_next/static/chunks/1735.e1a8caf265ee9110.js",revision:"e1a8caf265ee9110"},{url:"/_next/static/chunks/1739.fb2144be1cb19915.js",revision:"fb2144be1cb19915"},{url:"/_next/static/chunks/178-90b50237986706f9.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/1922.ba7796a9013788b9.js",revision:"ba7796a9013788b9"},{url:"/_next/static/chunks/195.bc73c2ad510a3dc6.js",revision:"bc73c2ad510a3dc6"},{url:"/_next/static/chunks/1975.5e1d1e1445cb6e92.js",revision:"5e1d1e1445cb6e92"},{url:"/_next/static/chunks/1982.00fdc3becde06fb3.js",revision:"00fdc3becde06fb3"},{url:"/_next/static/chunks/2140.e85ce5d41d506c6e.js",revision:"e85ce5d41d506c6e"},{url:"/_next/static/chunks/2289.034d80cb789051ad.js",revision:"034d80cb789051ad"},{url:"/_next/static/chunks/2333.77e391f6b243d4c1.js",revision:"77e391f6b243d4c1"},{url:"/_next/static/chunks/2393.0c6fc77850b23bf6.js",revision:"0c6fc77850b23bf6"},{url:"/_next/static/chunks/2489.4d9bc562b96e69ca.js",revision:"4d9bc562b96e69ca"},{url:"/_next/static/chunks/255.99ca521982071833.js",revision:"99ca521982071833"},{url:"/_next/static/chunks/2673.96ccdb756469b3f9.js",revision:"96ccdb756469b3f9"},{url:"/_next/static/chunks/2761-29afe3f590b5dc8c.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/2826.f61e6a02aa058c13.js",revision:"f61e6a02aa058c13"},{url:"/_next/static/chunks/2955.e9b07e224f065b30.js",revision:"e9b07e224f065b30"},{url:"/_next/static/chunks/3140.35ff144413cb5e15.js",revision:"35ff144413cb5e15"},{url:"/_next/static/chunks/3145-59716741c496c39c.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/3170.80a6bdccf1c536ff.js",revision:"80a6bdccf1c536ff"},{url:"/_next/static/chunks/3225.57e7f17db3ad0f04.js",revision:"57e7f17db3ad0f04"},{url:"/_next/static/chunks/3287-25f5ea806f8ebd81.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/334.a14a32e3ab158f5e.js",revision:"a14a32e3ab158f5e"},{url:"/_next/static/chunks/3432.9f2e74623c9d8061.js",revision:"9f2e74623c9d8061"},{url:"/_next/static/chunks/3463.1dc79c725a5e74d3.js",revision:"1dc79c725a5e74d3"},{url:"/_next/static/chunks/3464.80b686d8f8238353.js",revision:"80b686d8f8238353"},{url:"/_next/static/chunks/3586.ad04a62f6be49bf5.js",revision:"ad04a62f6be49bf5"},{url:"/_next/static/chunks/3590-f97ee044dbecc309.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/370b0802-c9bb54da09308c96.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/374.8d0830b7a77dc735.js",revision:"8d0830b7a77dc735"},{url:"/_next/static/chunks/3944.f7348444c2c1352c.js",revision:"f7348444c2c1352c"},{url:"/_next/static/chunks/3d47b92a-807b84ee15622fb7.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/4071.6b871eb1c994efa0.js",revision:"6b871eb1c994efa0"},{url:"/_next/static/chunks/4278.7e61c40b8d8414ea.js",revision:"7e61c40b8d8414ea"},{url:"/_next/static/chunks/428.4840fcade568d3f4.js",revision:"4840fcade568d3f4"},{url:"/_next/static/chunks/4320.184859d2d7ef200d.js",revision:"184859d2d7ef200d"},{url:"/_next/static/chunks/4341-d73374a1961a153e.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/4362.ac236529679ac08b.js",revision:"ac236529679ac08b"},{url:"/_next/static/chunks/4501.409a66779b2335ee.js",revision:"409a66779b2335ee"},{url:"/_next/static/chunks/4556.162c4ff8e0c68400.js",revision:"162c4ff8e0c68400"},{url:"/_next/static/chunks/4616.12cf920aae6bc8c6.js",revision:"12cf920aae6bc8c6"},{url:"/_next/static/chunks/4678.f9682312c97d931d.js",revision:"f9682312c97d931d"},{url:"/_next/static/chunks/4710-55370c5a9b2117f7.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/4799.44d25175e808d474.js",revision:"44d25175e808d474"},{url:"/_next/static/chunks/479ba886-8236930a2117a3bc.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/4868.4e948274b195dcb6.js",revision:"4e948274b195dcb6"},{url:"/_next/static/chunks/4886.8b7eaf72b0fad28f.js",revision:"8b7eaf72b0fad28f"},{url:"/_next/static/chunks/4978.70a4d3124060c6d6.js",revision:"70a4d3124060c6d6"},{url:"/_next/static/chunks/4999.21ccf6a0d6f92598.js",revision:"21ccf6a0d6f92598"},{url:"/_next/static/chunks/4e88bc13-8cba65a807c94d9e.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/5075.999a8a9283247006.js",revision:"999a8a9283247006"},{url:"/_next/static/chunks/5134.526c2b011734960d.js",revision:"526c2b011734960d"},{url:"/_next/static/chunks/5219-d92fff7318811b04.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/5244.298d724ebede975d.js",revision:"298d724ebede975d"},{url:"/_next/static/chunks/52774a7f-41bc67264818727a.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/5539.dd9db00cb646c308.js",revision:"dd9db00cb646c308"},{url:"/_next/static/chunks/5581.b72afdc5f751dada.js",revision:"b72afdc5f751dada"},{url:"/_next/static/chunks/5686-73c6150d0435a816.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/5800.eb15984ec7c43de7.js",revision:"eb15984ec7c43de7"},{url:"/_next/static/chunks/5883.d550223b4d2c8635.js",revision:"d550223b4d2c8635"},{url:"/_next/static/chunks/59650de3-fb02a948fc8675cc.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/5ab80550.02535ed96d391eba.js",revision:"02535ed96d391eba"},{url:"/_next/static/chunks/5e22fd23-bffa8700998601e7.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/6084.713d2467dbbd8df9.js",revision:"713d2467dbbd8df9"},{url:"/_next/static/chunks/6275.96ea9e0eaf506c7b.js",revision:"96ea9e0eaf506c7b"},{url:"/_next/static/chunks/6412.65dbc6041bf823ca.js",revision:"65dbc6041bf823ca"},{url:"/_next/static/chunks/6520.a6d68a95d4d3fe64.js",revision:"a6d68a95d4d3fe64"},{url:"/_next/static/chunks/66ec4792-b2b8f8da6965e612.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/6952.4b16516c448ab7a6.js",revision:"4b16516c448ab7a6"},{url:"/_next/static/chunks/707.636e85451f9cabd0.js",revision:"636e85451f9cabd0"},{url:"/_next/static/chunks/723.75063e3b3865cfb7.js",revision:"75063e3b3865cfb7"},{url:"/_next/static/chunks/7364.d33ea02ac58a0219.js",revision:"d33ea02ac58a0219"},{url:"/_next/static/chunks/73d3a5f7-0481ab1b1daf154e.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/7434.2e371b565e096634.js",revision:"2e371b565e096634"},{url:"/_next/static/chunks/7460.877328943ab85516.js",revision:"877328943ab85516"},{url:"/_next/static/chunks/7636-e986328104166e5f.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/7725.13d99c1a457dbd5b.js",revision:"13d99c1a457dbd5b"},{url:"/_next/static/chunks/7850.bfc3d16bd20c4478.js",revision:"bfc3d16bd20c4478"},{url:"/_next/static/chunks/7879.4eabb93d582d69eb.js",revision:"4eabb93d582d69eb"},{url:"/_next/static/chunks/7913.96aa97d7e3b443a8.js",revision:"96aa97d7e3b443a8"},{url:"/_next/static/chunks/7950.4ca5df7cc29f0857.js",revision:"4ca5df7cc29f0857"},{url:"/_next/static/chunks/795d4814-f1865750146d0e77.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/8080.4b1bf0b4409748ec.js",revision:"4b1bf0b4409748ec"},{url:"/_next/static/chunks/8494.171f57b88b1ca701.js",revision:"171f57b88b1ca701"},{url:"/_next/static/chunks/8607.3f7fd116b7f40d64.js",revision:"3f7fd116b7f40d64"},{url:"/_next/static/chunks/8910.0dee64ffaa2c1b09.js",revision:"0dee64ffaa2c1b09"},{url:"/_next/static/chunks/8933.a712f70313f044e5.js",revision:"a712f70313f044e5"},{url:"/_next/static/chunks/8969.d88de356b3412638.js",revision:"d88de356b3412638"},{url:"/_next/static/chunks/8e1d74a4-5775d502a22c242b.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/9109.56d8298d4807aa4d.js",revision:"56d8298d4807aa4d"},{url:"/_next/static/chunks/9451.8502d5be5a97d384.js",revision:"8502d5be5a97d384"},{url:"/_next/static/chunks/9525.7db5fb5296261bd5.js",revision:"7db5fb5296261bd5"},{url:"/_next/static/chunks/9542.8f387966cc477c0c.js",revision:"8f387966cc477c0c"},{url:"/_next/static/chunks/9607-c52d159b7edce716.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/9726.8debc412d3e1f412.js",revision:"8debc412d3e1f412"},{url:"/_next/static/chunks/9867.ce8b726f01cc850d.js",revision:"ce8b726f01cc850d"},{url:"/_next/static/chunks/9c4e2130-bb830921587493be.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/aaea2bcf-c8f177c31ecca13d.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(core)/dashboard/page-7441ab1f4f4ae627.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(core)/docs/%5Bslug%5D/page-5414cd00570ae09b.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(core)/docs/page-2090df3ce5621217.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(core)/fx/page-da95a9b6faf758d7.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(core)/fx/swap/page-e2d2a8874048a784.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(core)/layout-245852cfe5790494.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(core)/settings/bank/page-2c0bf0bd03264986.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(core)/settings/kyc/page-4e044677af87b5c4.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(core)/settings/page-50c211a7e00df652.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(marketing)/layout-211c284297508f72.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(marketing)/page-69b27d916154b5d8.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(others)/dash-airtime/page-46b459ac1e9956e4.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(others)/dash-bills/page-9ec66aae62edfd3d.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(others)/dash-notify/page-351319c235753a99.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(others)/dash-receive/page-23713b55a576d7c2.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(others)/dash-send/page-ff5a59d22f8ad332.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(others)/dash-swap/page-ae0dcb930fd19202.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(others)/dash-withdraw/page-2e298686329fa577.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(others)/invoice/all/page-b5858f9812ef96c5.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(others)/invoice/new/page-d7ed5da20ae487d6.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(others)/invoice/page-e168fcabf37e29b8.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(others)/layout-8aa4c496ef128dc7.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(others)/onboard/page-8b680a18c95f38b7.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(others)/savings/page-60335f7334ed28f7.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/(others)/support/page-af7c1dce16644241.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/_not-found/page-526f0915aa4e4b6d.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/error-3c5380e02224526c.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/global-error-a8fd2ad6848e8e98.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/layout-524e9c73bea5e6f2.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/loading-23618fda7e7109a6.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/not-found-06b05152729999c9.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/sentry/page-2420931e7eaf12d1.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/app/template-07a4486a0fb416fa.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/b563f954-575cb639d1af1fff.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/e34aaff9-8b83ca9f07f73fe4.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/eec3d76d-9e3ba7a196b87e04.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/f8025e75-3a479cbf06d4acd8.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/fd9d1056-4beda34780498cd7.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/framework-1158e7decabd1757.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/main-app-54c55eeff24f1196.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/main-fa86684a650fdd58.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/pages/_app-7cd241e7722873cb.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/pages/_error-65906ccef3f9f314.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-0dc9d2bc9728699a.js",revision:"g7LBcs9uEJohaoEracRCi"},{url:"/_next/static/css/6983f0507beff58d.css",revision:"6983f0507beff58d"},{url:"/_next/static/css/b30489573339f853.css",revision:"b30489573339f853"},{url:"/_next/static/css/bc1a46e9234eeb7b.css",revision:"bc1a46e9234eeb7b"},{url:"/_next/static/css/c27df24cde295d25.css",revision:"c27df24cde295d25"},{url:"/_next/static/g7LBcs9uEJohaoEracRCi/_buildManifest.js",revision:"9a6b45f09624f861a7af67bdda1e6968"},{url:"/_next/static/g7LBcs9uEJohaoEracRCi/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/05d30fccf6dfb4ed-s.woff2",revision:"f44737ff64388df273b8277a256e2dae"},{url:"/_next/static/media/12d86e8d7e1c2769-s.p.woff2",revision:"365576734a1d6fcf0ba8ce8ee218c9e7"},{url:"/_next/static/media/5536c2b71f31f4c7-s.woff2",revision:"a249fc31bd37ca2fed2511e9175a4df7"},{url:"/_next/static/media/69f639318a288687-s.woff2",revision:"f743aa03b62d95151d2738aba962f693"},{url:"/_next/static/media/8694b289afda18d6-s.woff2",revision:"b13d654f57096aef1177e281f219fc44"},{url:"/_next/static/media/8b23d1c224a60289-s.woff2",revision:"853656401170d5477478bb260f83b3f0"},{url:"/_next/static/media/8b4a75f5f73fccba-s.woff2",revision:"da8c2f9aaeea2960a6c875d3a62ca406"},{url:"/_next/static/media/8ea6d73be4df1015-s.woff2",revision:"853efe04b7a3633d95dcb66ebdc24e9b"},{url:"/_next/static/media/CELO.1709b828.svg",revision:"ef7c62fddfc2ee85eccc18f9272f95ba"},{url:"/_next/static/media/PUSO.89236a89.svg",revision:"8681f74539fde9e7dd7b5ac9126ebc1c"},{url:"/_next/static/media/USDC.74c6aa75.svg",revision:"3b5972c16a9795dcf6e2e2d7e3125d21"},{url:"/_next/static/media/USDT.79e0ad6b.svg",revision:"70a02cb642acc1c59a28b00e9ddcf66c"},{url:"/_next/static/media/axlEUROC.6c37d159.svg",revision:"cf6686f00046aa3ed34960b0693ee6b8"},{url:"/_next/static/media/axlUSDC.d7a1058f.svg",revision:"a1ef2d110c047c0641724c1a64e0e14b"},{url:"/_next/static/media/c4ae9d43d1916f56-s.p.woff2",revision:"669fe3ffb99559c435511920bd0f20b5"},{url:"/_next/static/media/cEUR.32f28122.svg",revision:"f9fb4e2a844c894ce83e67fdd77336e7"},{url:"/_next/static/media/cKES.c8097ee8.svg",revision:"1ef36426d68fe0f8dd39982043bf98f9"},{url:"/_next/static/media/cREAL.3bd6c743.svg",revision:"dbc614cfc42d26768911284ef0be0392"},{url:"/_next/static/media/cUSD.87d7e477.svg",revision:"45c5902a5bc94b564fefde81347b4be4"},{url:"/_next/static/media/eXOF.96a9bf26.svg",revision:"417db9dc49347150388d33cc94886548"},{url:"/_next/static/media/f258d360d0b320a1-s.woff2",revision:"56a561d446687faf7fa7e6506fff528b"},{url:"/_next/static/media/f2fa6d7398e61d46-s.woff2",revision:"9100886c15016aaff47cb7fbfb203398"},{url:"/_next/static/media/f5d2a4050322f958-s.woff2",revision:"b7d64795f9fab563d65c0bbf4e4fceb6"},{url:"/_next/static/media/user_preferences_bindings_wasm_bg.df5904c2.wasm",revision:"df5904c2"},{url:"/banner.png",revision:"37cbf88012fff17a437d5eacd158517e"},{url:"/bit.jpeg",revision:"a88ff013d6cd500feb690d5093a781e7"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/android-chrome-192x192.png",revision:"bf08e52ecdb44915ee88929c19b6becd"},{url:"/icons/android-chrome-384x384.png",revision:"a874528b1afef54f080d003e6d840637"},{url:"/icons/apple-touch-icon.png",revision:"966b3f6ee731d3fae1c74de84aed99d7"},{url:"/icons/icon-512x512.png",revision:"64150646c2db3aeaa7735638a2a16aaa"},{url:"/icons/icon.png",revision:"95a85da3e96bb443eb5ede2f7dab299c"},{url:"/logo.png",revision:"bf08e52ecdb44915ee88929c19b6becd"},{url:"/manifest.json",revision:"8d902d5a8f817684fd6e6524ff164217"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/support.png",revision:"9b8bc5a1e461eee18cc9754525119962"},{url:"/swap/arrow-down-circle-fill.svg",revision:"366032f7d8fe9c3312d614324f03ad1f"},{url:"/swap/arrow-down-short.svg",revision:"df1f2d9f88c723f37cc9100c0cc7e607"},{url:"/swap/arrow-left-circle.svg",revision:"cfa7293764a02b4af9fc2a656c3f4284"},{url:"/swap/arrow-repeat.svg",revision:"f7ee9ab953e01aa2bcc1404778ba4245"},{url:"/swap/arrow-right-circle.svg",revision:"3915c6b362bf438a5471af4b2efe4c6d"},{url:"/swap/arrow-right-short.svg",revision:"f5117df10eb46a361286ba8da16e101c"},{url:"/swap/chevron-down.svg",revision:"83f6585b527f2700b7bc3f149da2e3c6"},{url:"/swap/clipboard-plus-dark.svg",revision:"032b782bb5e1afe54d3d834b62e472ce"},{url:"/swap/clipboard-plus.svg",revision:"81c4d50d81f56210d45c5c44b67e69c9"},{url:"/swap/copy-stack.svg",revision:"4e50f20218c60e4b391cd993f1a86893"},{url:"/swap/cube-dark.svg",revision:"329c59f90909ea41f026e143824abb1b"},{url:"/swap/cube.svg",revision:"4f1f43f368b63ebbc3336318329fb380"},{url:"/swap/gear.svg",revision:"bd5f0cf531bdbc6dfe89236fb492e72e"},{url:"/swap/gear_new.svg",revision:"aaace62d4c880b60f7c7a78669995c0f"},{url:"/swap/gear_new_white.svg",revision:"b83f0007fbb012ef4e5044feac864386"},{url:"/swap/hamburger.svg",revision:"3486e74e4cb995aa88516e6cf89ef3b9"},{url:"/swap/info-circle.svg",revision:"61a3aa97316f83f3d9f9cefb1944d11c"},{url:"/swap/logout-dark.svg",revision:"f04317a31443dcba180789cf42bbbd60"},{url:"/swap/logout.svg",revision:"f4eb5d5e6d8fec590c3dbd303e3a0cd3"},{url:"/swap/moon.svg",revision:"cc6d7b3c5b39d5e55868f95ca684b55c"},{url:"/swap/not_found.svg",revision:"b3f6c93eac586ce7477ec48942017d53"},{url:"/swap/plus-circle-fill.svg",revision:"0bbb6f1c7109b95f3178c7d2ad33290d"},{url:"/swap/plus.svg",revision:"b1e5c4624517826ef90decaec2c1c82e"},{url:"/swap/sad_face.svg",revision:"75df3022d61394ce88cac70bf848ad5d"},{url:"/swap/sliders.svg",revision:"d7b137d3561db4052a6714aa3ba1df00"},{url:"/swap/sun.svg",revision:"593fce299fec8a097068a030eaa374dc"},{url:"/swap/wallet-dark.svg",revision:"c8b839959b3b09083be394f2fff790c1"},{url:"/swap/wallet.svg",revision:"f737f3804db854a27c1c9d9c773d0bb6"},{url:"/swap/x-circle.svg",revision:"12919343ba9691a7e9efcb6f3d3abbef"},{url:"/swap/x.svg",revision:"6a4dc9ae6a0aab953318456ad5a45fb1"},{url:"/tokens/CELO.svg",revision:"ef7c62fddfc2ee85eccc18f9272f95ba"},{url:"/tokens/PUSO.svg",revision:"8681f74539fde9e7dd7b5ac9126ebc1c"},{url:"/tokens/TokenIcon.tsx",revision:"51b431a1f3ad186ee4b5416ec8c22cfa"},{url:"/tokens/USDC.svg",revision:"3b5972c16a9795dcf6e2e2d7e3125d21"},{url:"/tokens/USDT.svg",revision:"70a02cb642acc1c59a28b00e9ddcf66c"},{url:"/tokens/axlEUROC.svg",revision:"cf6686f00046aa3ed34960b0693ee6b8"},{url:"/tokens/axlUSDC.svg",revision:"a1ef2d110c047c0641724c1a64e0e14b"},{url:"/tokens/cEUR.svg",revision:"f9fb4e2a844c894ce83e67fdd77336e7"},{url:"/tokens/cKES.svg",revision:"1ef36426d68fe0f8dd39982043bf98f9"},{url:"/tokens/cREAL.svg",revision:"dbc614cfc42d26768911284ef0be0392"},{url:"/tokens/cUSD.svg",revision:"45c5902a5bc94b564fefde81347b4be4"},{url:"/tokens/eXOF.svg",revision:"417db9dc49347150388d33cc94886548"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/xmtp-icon.png",revision:"029c14acf3050d178eb5cb3272380980"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:c})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&c&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:c})=>"1"===e.headers.get("RSC")&&c&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
//# sourceMappingURL=sw.js.map
