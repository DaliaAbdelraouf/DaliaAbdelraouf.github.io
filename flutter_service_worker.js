'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b2deec86fee771068bdec6164f01929c",
".git/config": "0c27fe15f86e2a2e5bd2385c582adfdf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8224e351d9347a18660edc4a59557e27",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2edd74e9b53f77b92a539b6b3e73c665",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ff13695398d0501937ed75cc7e28c0c5",
".git/logs/refs/heads/main": "1ae22a8fb4805dd22e3801b0981cedb5",
".git/logs/refs/remotes/origin/main": "41d99620df4c3a388610464388210648",
".git/objects/00/56b70db057e33ee57745f39cf4fec0f8b3cae4": "b73563cdef1336b8f4041f41bbdaa4de",
".git/objects/00/8b4d1c8097df5a5648c0a68aa53774b141fb7b": "fc7d4537b3fecb4ca5834f49a11ce0b2",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/642d7d0d41e44998594104168034cbdcbb9e5d": "3d2aefb9b5194e30e21f50e3f5da3853",
".git/objects/0c/ec350069c51d919718e35bbd64ed3078313ad6": "de3246da5a48361c2f7b9a89188d8ea2",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/1d/d610220c4f68be610f4927dbfcc8e1ca3c32ae": "817574fad89e7094cee5d2357d5d3a8f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/df2b20d70061ccb7e8a3851590eec01431c0ff": "b6c43e3dd53900809eb78104b9cbd0b2",
".git/objects/23/3751b26db979e6cd0e355eb82ccfee97d968e2": "517b6b75e644c4c21d52296ff91fb510",
".git/objects/23/83a5b12d313ccd5168224d8c468f6abd17609b": "0cfa20cdf41b091ecae6be8a2fce21b6",
".git/objects/25/4bd525a6fda66541fd0f623386f256b73c8cb9": "1a26673650bd0ac5602524e8b2889050",
".git/objects/26/57e3452d885712ee85742b880f398bfc0d7a5b": "50ba0a87e54c08c96d6f825d30d9ffd0",
".git/objects/26/5a8f3f15db780a58ba2bd091050cc42077ba2e": "ec1647a3e97b6ceedbca6d87efdf56ca",
".git/objects/2b/314232a82bf14e2d24691b649cc2ff3b7f3ed0": "d601b07205b28fa6fed15d77a570e755",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/0d0b0bf92326c68249518212cc379a5d61048c": "329599af381bcb9f076619b7df0319e0",
".git/objects/2d/bd3882fcb58a85fff795099221b42e4dba24c2": "3d620ee1a2fb07b269248943113f6231",
".git/objects/30/af74fef94d9aeccae4f0141c39cf4be36b02d8": "f6776d6f82a6562d6afc561b78c8b273",
".git/objects/30/cd85f3640cffeb97840bcc3c99fe6ec52f55c5": "4ab503ccd6764a2695f683e683400999",
".git/objects/36/24d78f8772553a18992b7db50a482f5e178cf1": "f997a6aa931eadbebd5e634e1ac95c0b",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/3a3b631b5b80dc4ce9e77e9ad9f7ab0600bda8": "782d3b0cd12b60c091cf491762406fb0",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/6b609473cafcaf8e2d26106b529ec0de2b2ff9": "3148eb38e798d89bffb7a2d34aa1c2e0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4c/102aea4690eca25273606bea556de5303b6930": "ad4380bfbf1fed900c65a759dcaedd65",
".git/objects/4e/70d97d10678dcde0b65685b7e31de0259faa03": "5ae59829f6c608e8a5eb48b307093c5d",
".git/objects/4f/b56c0dc916b55f74f0de9ec6d76e2cde340adb": "dbb2f434b9dadc4bbb2f87002f831dc7",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/52/be2771d5f519e82a067712d6c7532bb74e9475": "1fe00cfa6c17808140322627a69d8428",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/6f/a32ba7ceaa9d8c2fd2bf5bff7c3b8f06c2ba2f": "35d743a4e6363f6a35acd3bc992890bc",
".git/objects/79/e79f970e6a9dec0b606d6de194bcea137f8d1c": "05909ee395a0e39b3ce9cf6df9d8a7de",
".git/objects/7b/56b01b0b8aa923b1ea9becf5043a25f10283ff": "f23cc95a0a741d91cc7d3346d8656c62",
".git/objects/88/c9141637376f027f370ec43ba38016f45f9763": "370e99abebdf8ecf62114b07ad961c81",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8b/9515161ff5f4cea13e1799444b4bc471d293ee": "8ac4b8388e191d038116fff1c63aca22",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/effa8b2a103bd216ac1f9516238db0b28c07ac": "8bdc26ef3f0be22f8810b5fd699bffbc",
".git/objects/9d/472c10f89d253d44fdba9fabdd8ac2390bb955": "03742342ed5acc2ee8ed0dad4576fd0d",
".git/objects/a8/74ddbf8e10f8220a69591eb335efe6908dfdbc": "bb8ac88daf64acc19c4570eb54e2675f",
".git/objects/b2/0506678949bbbc9c31ac06a0adbbc68d19b7e2": "ad5af1ddd2e255b28370871cc10ba106",
".git/objects/b2/c64846e7f7b92e0a85c3b578ece4bf28d636b1": "98602587f81e9acf77efcb9f9f55a5aa",
".git/objects/b4/816aa30260da62e238cebb392922b2a7248399": "d2b9f2ff53edccdb388da587d0e1632c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c1/03b70027e7a1bb45172457cba69d448ee18c20": "925c1033ec55009d4f41c7d54826415c",
".git/objects/c1/859e633dc709c941d80e893fb95ea3fbd3b231": "9b05e6e634b75e682dfdccaf3c8ec279",
".git/objects/c7/c09f26f72549065652c2af836bd9a9fc8eba6f": "5dc59a0d6d1e393bda014f22a8f8c609",
".git/objects/c9/2469f126e54e54a53220196bff65c653a7f8d0": "ae08ee0e7871378c8f5e4898b339c3fd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/8d85c62fd6e2ac16edefd19414625001a6c616": "bb764450deaad96c3e075b6c471e1a01",
".git/objects/da/d85afe89ef0bb27d098d59271956ab07a110d3": "622e303f07d2e4a066b0778f777e90e7",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/921464b59096b78db8915ec6b8931275d41415": "aefb334c23f9fa4f5132d544dca9efc0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/13cdce649b136ec62608c01fef84b4503b9295": "cfe60e04491d8013d3c16b6279fa0496",
".git/objects/ec/5c1ac75e46eb51788cc96134488e4b6adebc2d": "6c3d99abc5859f28fa961fec4edfe4d2",
".git/objects/ee/3bc3e0bdce66ae058b5af2a6441b76899c8254": "96414a47ff1351225d2e0cd856f572d1",
".git/objects/f5/765e09a1ee4bce883333138716240a3c6648aa": "d7fee0df9ee763f5c0e812137d58c5f6",
".git/objects/f6/1852ec219a815de43afc6d560d3f79487ac9f6": "050c29b8059c8ec80626d9b788fefba7",
".git/objects/f6/4c7d13f4f07c0f553f6e5581aefe58728f5df3": "52bb6e43422876740d5035b90465633e",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/ff/89b28124184384701712078a0d2a17b099e7aa": "183296d13dda514b9c395eaf647713d4",
".git/ORIG_HEAD": "c8f8fc500fa12b00a092b1a804d914ae",
".git/refs/heads/main": "c89370b8bd4c0d0d97fd53a5ecd9ae17",
".git/refs/remotes/origin/main": "c89370b8bd4c0d0d97fd53a5ecd9ae17",
"assets/AssetManifest.bin": "bd2962384fb5f8c3d56f4f30d5895d81",
"assets/AssetManifest.bin.json": "dfc476bcce9d37a27020e210f5b6a827",
"assets/AssetManifest.json": "0ff52e284ada9f8bef541f55a3d31d7b",
"assets/assets/images/background.jpg": "23c014399b471fe6dc5154dba5f40f9c",
"assets/assets/images/email.png": "36179cab6c72e89b07b0f115bb2fc2e4",
"assets/assets/images/face.png": "3e569c0b44e18cf4ac36c2f52ca2c4fc",
"assets/assets/images/git.png": "7b08b14f30c2110a685bafcd33e8a480",
"assets/assets/images/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/assets/images/insta.png": "bd3f44e94e19e2cd2fed522e65f67657",
"assets/assets/images/Profile1.png": "594253f6b297b91870b063a2bf3072fb",
"assets/assets/images/twit.png": "3f2b027c50dd30dd9abeeaeb1b68b1c3",
"assets/assets/images/whatsapp.png": "2e4ba20fd1e52dae681b1d6736588219",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "d81b5ed3fa958f196470e5f6c1ab4285",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a431943e41bc287fdad0ce314ff8f68a",
"/": "a431943e41bc287fdad0ce314ff8f68a",
"main.dart.js": "c7139d3f00925e54d7651b3240cfccb2",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
