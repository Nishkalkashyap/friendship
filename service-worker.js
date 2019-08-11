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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7d7644df97082243554caae2f4912c05"
  },
  {
    "url": "assets/css/0.styles.63ce3f22.css",
    "revision": "9bb6b9f88c684f84f2eb3ace755e382e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.0b373504.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.395e8d47.js",
    "revision": "5203730f8e6cc9513ae80785615804c0"
  },
  {
    "url": "assets/js/4.dc4ce114.js",
    "revision": "fea0453b59ad31d4edaf6ac124d9f113"
  },
  {
    "url": "assets/js/app.0761e257.js",
    "revision": "2cc92f8bdf51386a456d118dfe455490"
  },
  {
    "url": "images/cancel.svg",
    "revision": "0066118335c2a69d62ee96768ae85a70"
  },
  {
    "url": "images/devil.svg",
    "revision": "08a0c13bb56d065958f3acfb380ffdca"
  },
  {
    "url": "images/generated/1.jpg",
    "revision": "9867a048695f2eca611d5f0bd380fd25"
  },
  {
    "url": "images/generated/2.jpg",
    "revision": "6fedf8d5eac8fd826ef52d5091232e53"
  },
  {
    "url": "images/generated/3.png",
    "revision": "02fc590ab1db527a423900fc236c907a"
  },
  {
    "url": "images/generated/4.png",
    "revision": "2439c40b8532f1094c1ea02cbd16ca65"
  },
  {
    "url": "images/generated/5.jpg",
    "revision": "ed8d914a6f03bf51eb6da4d876f88d5f"
  },
  {
    "url": "images/generated/6.jpg",
    "revision": "e8c6900250b2c4858eb84707ab3807a0"
  },
  {
    "url": "images/generated/7.jpg",
    "revision": "ef8ff2fa394564488dc1a48d28d812a6"
  },
  {
    "url": "images/generated/8.jpg",
    "revision": "3b99ae390b2bf2386fa471bdf76e61c9"
  },
  {
    "url": "images/generated/9.jpg",
    "revision": "5d26bf4ba2b703f88409db35fc21de1f"
  },
  {
    "url": "images/logo.svg",
    "revision": "08a0c13bb56d065958f3acfb380ffdca"
  },
  {
    "url": "images/snapchat.svg",
    "revision": "9c8aede73190ef36696adbd84258827d"
  },
  {
    "url": "index.html",
    "revision": "9b09f979699dbecd61257a11577e24c3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
