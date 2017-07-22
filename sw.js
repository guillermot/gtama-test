importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "ef20084883f72f8ea33f96cfa4aca03b"
  },
  {
    "url": "node_modules/workbox-sw\\package.json",
    "revision": "105141caa7f41b876002b2e1b28b54eb"
  },
  {
    "url": "package.json",
    "revision": "c53930824b8e66e7ae1fde08ba3ff2b8"
  },
  {
    "url": "styles.css",
    "revision": "a280677841fc2fc2a5254ab012f554ea"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
