! function () {
    "use strict";
    self.addEventListener("install", (function () {
        self.skipWaiting()
    })), self.addEventListener("activate", (function () {
        self.registration.unregister().then((function () {
            return self.clients.matchAll()
        })).then((function (t) {
            t.forEach((t => t.navigate(t.url)))
        })).catch((function () {}))
    }))
}();