/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ce1d15c9c10b03e5278fc2230ce64259"
  },
  {
    "url": "assets/css/0.styles.568a1a9e.css",
    "revision": "7a1491ea4722de7161a116e96aa25fed"
  },
  {
    "url": "assets/img/anima-loading.987a20ca.gif",
    "revision": "987a20ca6dec8041959d0df60b537df6"
  },
  {
    "url": "assets/img/auto-width.ff609947.gif",
    "revision": "ff6099474f202ef22c37f8fcca159cce"
  },
  {
    "url": "assets/img/avatar-1.86a7ee23.png",
    "revision": "86a7ee2383604b759d717ec78e6ef0a7"
  },
  {
    "url": "assets/img/background-more.0e00a028.png",
    "revision": "0e00a0287a23b945b140843830512f8a"
  },
  {
    "url": "assets/img/box-model-example.228c2571.png",
    "revision": "228c257187559a1386ff494ceabad197"
  },
  {
    "url": "assets/img/drawing_graphics.972b4827.png",
    "revision": "972b482746ab69092d615277e42397c8"
  },
  {
    "url": "assets/img/flexbox-2.d4a6dbcd.gif",
    "revision": "d4a6dbcdae6b6c81b89db5de90229130"
  },
  {
    "url": "assets/img/image-hover.a54357c4.gif",
    "revision": "a54357c4bf16e52f9f40647a606ad4e7"
  },
  {
    "url": "assets/img/regex.4fe466ae.jpg",
    "revision": "4fe466aea58cc6277936b3d828d0f7a5"
  },
  {
    "url": "assets/img/regexper.748c4ada.png",
    "revision": "748c4ada5c49a466391725541da41566"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wildcard.dddaaf33.png",
    "revision": "dddaaf330863cca0325e6a369b484b41"
  },
  {
    "url": "assets/img/youtube.3d47bd3c.png",
    "revision": "3d47bd3c65c96f547b4a8329e0d18564"
  },
  {
    "url": "assets/js/10.0217f7b6.js",
    "revision": "f409a56797a572787dd4142872177794"
  },
  {
    "url": "assets/js/11.f9f5b5b3.js",
    "revision": "3eeab22e8dac051e237edc2506df831c"
  },
  {
    "url": "assets/js/12.3aab7914.js",
    "revision": "5c1394ed96d4cc382a887f5118e31fb0"
  },
  {
    "url": "assets/js/13.dd7a9b7a.js",
    "revision": "40daa9a4c192b6c42ef3cf3661a3a1d1"
  },
  {
    "url": "assets/js/14.a6ad554c.js",
    "revision": "185fb1e3299c43abc3e4e2c7e35f5855"
  },
  {
    "url": "assets/js/15.6065e0ad.js",
    "revision": "ca396c310a290df371a8060c0f5a4d00"
  },
  {
    "url": "assets/js/16.af2b9ee6.js",
    "revision": "2697976d87294820ee6448bdbdeeefd8"
  },
  {
    "url": "assets/js/17.2a135925.js",
    "revision": "ea733a453ac9c656123e09873a2978d5"
  },
  {
    "url": "assets/js/18.3ba97b36.js",
    "revision": "a86dc3ad2b406977b2cdf5275e63c50b"
  },
  {
    "url": "assets/js/19.3841f673.js",
    "revision": "62792302aeab41f33eb51e766b6833e3"
  },
  {
    "url": "assets/js/2.ffdf50b5.js",
    "revision": "325932474b3db6accfdc1321046bb035"
  },
  {
    "url": "assets/js/20.d6d610a9.js",
    "revision": "eb07710d93751cb9f180101b1bef0e44"
  },
  {
    "url": "assets/js/21.09b94ef7.js",
    "revision": "3703be6c879cfc67778b6cb8fba32b01"
  },
  {
    "url": "assets/js/22.82a94bc5.js",
    "revision": "cf4c50c670af0c91a29752e1c32ba3fc"
  },
  {
    "url": "assets/js/23.e089a409.js",
    "revision": "6b33c277562450dc63c10d938ecab933"
  },
  {
    "url": "assets/js/24.e01a6864.js",
    "revision": "526e1db5f200ee863437a4173255ce89"
  },
  {
    "url": "assets/js/25.bd173f55.js",
    "revision": "300f7f7c164d573c0f6c4206c044ed96"
  },
  {
    "url": "assets/js/26.7dd8fa9d.js",
    "revision": "93dc2c3a9a91825469b7a2ba747ece9b"
  },
  {
    "url": "assets/js/3.2de7521e.js",
    "revision": "c5e2bc72196ae42bd7398e6637ec642e"
  },
  {
    "url": "assets/js/4.a7e6d322.js",
    "revision": "6ea699398410b8e6aaf931ac83b40666"
  },
  {
    "url": "assets/js/5.0a576173.js",
    "revision": "2d87d9b6f14f4e3e1e1672a4d44cba27"
  },
  {
    "url": "assets/js/6.eebdfa60.js",
    "revision": "d50c681b35683b5d1340fdaa63af7487"
  },
  {
    "url": "assets/js/7.6bbb8163.js",
    "revision": "94468aee2091cc320d676e8434807a1b"
  },
  {
    "url": "assets/js/8.76867459.js",
    "revision": "26b66cc57f1411c12830be7a3b3a778f"
  },
  {
    "url": "assets/js/9.94a4bb3c.js",
    "revision": "fcb8ffc5cbb23f15c4f00ca82a4f38cd"
  },
  {
    "url": "assets/js/app.aee96f12.js",
    "revision": "921b4d5a209c5e2aa3ab7077ba1058d8"
  },
  {
    "url": "css/index.html",
    "revision": "8a57b9a16176b0fc4999067f92cb73ec"
  },
  {
    "url": "css/theory.html",
    "revision": "9f258adc5d10dbafed0a61d37d7cb429"
  },
  {
    "url": "further/en.html",
    "revision": "d6cc4ae20ac210efc26035920501b419"
  },
  {
    "url": "further/glossary.html",
    "revision": "11d98d14b2a573bd78de87438d2c93f8"
  },
  {
    "url": "further/guide/ECMA-5/index.html",
    "revision": "e07f7bf6f5db2953a322c2367d615c20"
  },
  {
    "url": "further/guide/ECMA-6/index.html",
    "revision": "ab39cdbc3568025df20cc3853fa2af5e"
  },
  {
    "url": "further/index.html",
    "revision": "98e6efa3d4935dbec4cfe60c863c98f4"
  },
  {
    "url": "git/index.html",
    "revision": "6955682d8cf727a7fd4cc5a08726fe33"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "html/index.html",
    "revision": "8ec13f4a7fd519b9b8bd4339375aa020"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "9d3f6a84421ecbd578f5496080762e09"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "a05263d748bf4ed259cedae2b2f28858"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "9e289eeea31b53d717ee95d4ad40ba5f"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "e9c1c9351a6a6323781408c182caff9c"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "5cbe7b62c0026834fbdf943356f10446"
  },
  {
    "url": "icons/logo.svg",
    "revision": "c15691bd028f3a5ce679bfda8f86d4b0"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "b148f1de852e17f26c8b24ffdbb02e33"
  },
  {
    "url": "javascript/index.html",
    "revision": "87de6f757f4273e00e6571bb64a2eb66"
  },
  {
    "url": "mobile/index.html",
    "revision": "1baca41761ca1b062c6f5b67cd24c0cc"
  },
  {
    "url": "operations/index.html",
    "revision": "fd345de6eaa24fafb253ac21e884ca38"
  },
  {
    "url": "operations/issue.html",
    "revision": "8fbf5f33e10592be8a190361e93d4627"
  },
  {
    "url": "REGEXP/index.html",
    "revision": "a97f149b5bf1a3725d3713e85c91e9c3"
  },
  {
    "url": "topic/2020.html",
    "revision": "6a0944b7209f608820345c07fbbca4be"
  },
  {
    "url": "typescript/index.html",
    "revision": "831ef5b5ca32812a51024eb387fcfe37"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
