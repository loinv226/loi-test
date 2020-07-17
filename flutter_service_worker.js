'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "e609a29a7fe604e61f6bbc85583acc7e",
"/": "e609a29a7fe604e61f6bbc85583acc7e",
"main.dart.js": "824af8e36d7038d48c643e98c2a2042e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ac48ce047df6ea5c701272b811e064fc",
"assets/AssetManifest.json": "3f0efbf0c00f898b8a0dd4f3ab488121",
"assets/NOTICES": "149f211aa51334b5fd022a1c81cb982a",
"assets/FontManifest.json": "803e07bc4af85fd0053fa02f11d151a9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/audios/Win.wav": "53aacbeede5648c727e104a64b88ec36",
"assets/assets/audios/Lose.wav": "dfc6f79f83c7b0e1b529c7c91312fdd0",
"assets/assets/audios/3scountdown.wav": "c994371e303f7ce1e6353e0c0c003df6",
"assets/assets/audios/Click.wav": "1035677eac326a96b393d821f52e3a39",
"assets/assets/locale/localization_vi.json": "20558a0df7c9cc4399835988b298d11a",
"assets/assets/locale/localization_en.json": "e10fb1e72f63cdf0efc8fbb14428d184",
"assets/assets/images/image_google_authentication.png": "601d40869d3478b040620b091c08fb96",
"assets/assets/images/loading.gif": "24486c97c23a5386173e0d1761b7278e",
"assets/assets/images/img_background_referral.png": "57eb09c8011136f9166bf3e2fe4a565b",
"assets/assets/icons/ic_coinhe_small.png": "6715d47b8763aef1254b4f47ba462dd5",
"assets/assets/icons/ic_yokef_small.png": "3c034dd6f1724854b1111b4937663d76",
"assets/assets/icons/ic_convert.png": "cdba5daad47f72b35e47720cd536a600",
"assets/assets/icons/ic_history.png": "d37d3b1e1092048ce806bae93ce56c89",
"assets/assets/icons/ic_delete.png": "e08f618c4d8a84a4b991567fb3ce7123",
"assets/assets/icons/ic_visibility.png": "1ce4fe495eff503cfb23dd2215d66965",
"assets/assets/icons/ic_personal.png": "bdfaecf2ede1b5da1616e83fb848a525",
"assets/assets/icons/ic_btc.png": "961c6b657f805c260b6af78513ba3e91",
"assets/assets/icons/ic_change.png": "668a5ac0dfa720dda7ceb87e68a6d280",
"assets/assets/icons/ic_lower.png": "4899c5ca81cfdf89bc2b95abf4a5ae8d",
"assets/assets/icons/ic_convert_money.png": "c0f25e23728ea968feebde364084f881",
"assets/assets/icons/ic_trading.png": "e322f480e48b87b609b69bc046845d10",
"assets/assets/icons/ic_wrong_small.png": "6d8f2c256f00fd45215e6d200771923a",
"assets/assets/icons/ic_referral_enable.png": "c2cd661e1cde636c5c1d1df902eb54aa",
"assets/assets/icons/ic_copy.png": "52176466d0d68a25a70994e9e255daee",
"assets/assets/icons/ic_dashboard.png": "f532026655107788fe90f664a619f8e7",
"assets/assets/icons/ic_logo.png": "e1fca02535adcf428c00231e9f5f648e",
"assets/assets/icons/ic_wallet.png": "e4a0ef9dd4f8fcea39f14d12d102efdb",
"assets/assets/icons/ic_cup.png": "7e4bf600f34b3b0d6d731f155322d2a8",
"assets/assets/icons/ic_visibility_off.png": "b0734d0f9be43595da4a99fce1a56874",
"assets/assets/icons/ic_referral_disable.png": "cb9663ecb2e7fb4513d87571e9e603db",
"assets/assets/icons/ic_promo_account.png": "1928797bd36ef12ce7f665f57db5e7c2",
"assets/assets/icons/ic_live_account.png": "c0810beb599e1e927552fc632f51bce8",
"assets/assets/icons/ic_demo_account.png": "8ba448e22ca0c8a0c64f4836110d72fb",
"assets/assets/fonts/Exo2-Italic.ttf": "781e379934073643ef297455a3ebb1bd",
"assets/assets/fonts/Exo2-Regular.ttf": "b5f984d1c21970b20048461157228e26",
"assets/assets/fonts/Exo2-Bold.ttf": "5c6e28521f9e91a6d82ebd76fad5e8a9",
"assets/assets/fonts/Exo2-Light.ttf": "636881b5aeeaa7c4dd8871939a2e28b8",
"assets/assets/fonts/Exo2-SemiBold.ttf": "5c0e04f494edc58b4e34c934ff3016b8",
"assets/assets/fonts/Exo2-Medium.ttf": "eb8f5cfa4dc0584cb8ff358d67200780"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
