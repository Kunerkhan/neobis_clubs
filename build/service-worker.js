"use strict";var precacheConfig=[["/index.html","8ed8e5820780f6999b5c6f3de58319db"],["/static/css/main.fb9e6ab4.css","66cb0a98e869c4dfd955d6ab7f7b2011"],["/static/js/main.10966e5c.js","156fc0017292ea8af8a43df4d2938290"],["/static/media/android-logo.88048276.svg","8804827675b438bc4c7c7b53724dc9a7"],["/static/media/android_phone.c147ba98.svg","c147ba98bd4183ec14ab4ae66191b51d"],["/static/media/apple-icon.a47ac51c.svg","a47ac51cff89be42c686324f4c753470"],["/static/media/ar-glasses.0692c7c2.svg","0692c7c2f0464c54eeedac0d9a3f0bb1"],["/static/media/back-ellipse.00c0a7a6.svg","00c0a7a61bd292671d77f48238b81ec3"],["/static/media/browser-icon.928b5073.svg","928b507332d0b8c23ee9315aa9fdecd5"],["/static/media/buffer.9442b3c2.svg","9442b3c25c49f16f48cb00a9b3d26727"],["/static/media/coding.582c40ca.jpg","582c40ca7201a8ddebc1ee1adf8da070"],["/static/media/facebook-logo.d8b90fe7.svg","d8b90fe7b879fce98f1b139afa3c3b38"],["/static/media/front-elips.74589251.svg","7458925168efbb7d22a0d75e05786d77"],["/static/media/game-controller.856804a6.svg","856804a6b6e55de71ecc7d7962f9b258"],["/static/media/instagram.a7a04a0f.svg","a7a04a0f7355cabb020ae7f02717f430"],["/static/media/ipo.b75e5ba7.svg","b75e5ba72e73874cc7357b7d81bb9f29"],["/static/media/java.96be076c.svg","96be076c36882294387ef09e15361d5f"],["/static/media/js.d6e990bf.svg","d6e990bf907a8965d9879fd4ef1ddae3"],["/static/media/kotlin.060ff5b1.svg","060ff5b13f7fc340a4306be12004cab4"],["/static/media/layout-icon.6d9f7825.svg","6d9f7825d03e40a455b900e51fe7be4f"],["/static/media/linkedin-logo.42ae0c78.svg","42ae0c7869900bc8519a1340e13990ab"],["/static/media/neobis.967d6884.svg","967d68841db655a143d328c4e676fe06"],["/static/media/neobisfam.2b2bd0c8.jpg","2b2bd0c844c7388cd0cd2745343c84e9"],["/static/media/project-management.bbae4726.svg","bbae4726ec719efa53f20eca3171fce6"],["/static/media/python.acc7dbf8.svg","acc7dbf87ab6d35a36e44cb19f7bf7c6"],["/static/media/react.753a2e13.svg","753a2e139235285fc57e581b1d34b687"],["/static/media/swift.b007ab3e.svg","b007ab3e81dc833ae543e31cb7cf0914"],["/static/media/terminal-icon.d317cfc6.svg","d317cfc6ca1782c28d779ac7614b6233"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});