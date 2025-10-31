'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "203b8d1f808391e51918f1505d4fe97b",
"assets/AssetManifest.bin.json": "00ed62363d33b89acfeb2adb1d269083",
"assets/AssetManifest.json": "a3919d6b0343aa2e6a23078f5f123dbe",
"assets/assets/farmhub_logo.png": "e54db011c95d38ea375d862208ec53e2",
"assets/assets/farm_logo.png": "94d0791e6770544d6cf1519b0e876d6f",
"assets/assets/farm_shop.png": "0a5acb40d4ac411fce1fd70ec8f1cb8a",
"assets/assets/farm_training.png": "fd4a25bc52368b03300093c6c5131fa1",
"assets/assets/l2mFarm_trans.png": "20c51151a30b2aec855be76866520075",
"assets/assets/l2mFarm_trans_white.png": "34b6bb559cc347f454ab1476927373d4",
"assets/assets/l2m_logo_2.png": "a0b8e51c7f0f59d5ef4e422047734ea2",
"assets/assets/l2m_logo_22.png": "b6bacbfff4a1dae8ea6b11dfc17a8311",
"assets/assets/l2m_logo_2_white.png": "85b2ea42804929a7292d4cd6017bb4fa",
"assets/assets/l2m_logo_3_trans.png": "a5429ac857b40bc655a531fe3d0bc85e",
"assets/assets/l2m_logo_3_trans_1.png": "0bc8b35cebd41b6fb65c0e9bafff8216",
"assets/assets/last_mile.png": "0ecae3a7bce5324c45840e4730c22c2d",
"assets/assets/logo_farmhub.png": "1c0800ec636cbd4071fbe6df5088f0dd",
"assets/assets/logo_farmhub_white.png": "5d889b4d684a9dbfbac525c94ac20db7",
"assets/assets/logo_with_text_white.png": "e21022f719585bb768770f4f734e8a29",
"assets/assets/map_icon.png": "5da8768975b3f97060c93e9430761265",
"assets/assets/operation_opti_icon.png": "75e6a5090969918724f60e9bed3cb7be",
"assets/assets/overview.png": "8031fdc55d4d7f64017d9da649337d81",
"assets/assets/planning.png": "9fc5ef07fb289331b4afae997c98d749",
"assets/assets/produce_imoji.png": "a5bc9b67d818372caf1533c932bdde6a",
"assets/assets/report.png": "781abc4c9cc501cc8721f5a62bbe6287",
"assets/assets/task_assign.png": "b13e9450b2baec35b278e2b6455f100e",
"assets/assets/tractor_ad_image.jpg": "c95a5fb2100aaaa68ee67634556f607b",
"assets/assets/tractor_ad_image.png": "11341864e178ca6fdd6636746746ad18",
"assets/assets/tractor_ad_image_2.png": "28d542382843a4635be64160c7bf9716",
"assets/assets/tractor_ad_image_3.png": "755b24247b47153565e79d7f0703be00",
"assets/assets/tractor_imoji.png": "783aa6c67ba18849024072d86562058f",
"assets/assets/tractor_shed.png": "0402682ac414319e38a274a849be5224",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a3fce995044e9366e18d67654a1afe73",
"assets/NOTICES": "15282ecc3a2f5a5956bbbe77a5065234",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "0416228c509b63b35a285fb0e77480d2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "df50409a7c46941cd8d12ef15c0fcc33",
"/": "df50409a7c46941cd8d12ef15c0fcc33",
"main.dart.js": "e3390b4881e5c881d1766469367d2c08",
"manifest.json": "ea7145fbcd9fc90e9be48be0bcba3b66",
"version.json": "df38a0b8fe84a9e7e90f9e1764486fbb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
