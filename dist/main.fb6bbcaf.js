// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
var _fullpage;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var cookieStorage = {
  getItem: function getItem(key) {
    var cookies = document.cookie.split(';').map(function (cookie) {
      return cookie.split('=');
    }).reduce(function (acc, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key.trim(), value));
    }, {});
    return cookies[key];
  },
  setItem: function setItem(key, value) {
    document.cookie = "".concat(key, "=").concat(value);
  }
};
var storageType = cookieStorage;
var consentPropertyName = 'tv_consent';

var shouldShowPopup = function shouldShowPopup() {
  return !storageType.getItem(consentPropertyName);
};

var saveToStorage = function saveToStorage() {
  return storageType.setItem(consentPropertyName, true);
};

window.onload = function () {
  var consentPopup = document.getElementById('consent-popup');
  var acceptBtn = document.getElementById('accept');
  var wrapper = document.getElementById('wrapper');

  var acceptFn = function acceptFn(event) {
    saveToStorage(storageType);
    consentPopup.classList.add('hidden');
    wrapper.classList.remove('cookies');
  };

  acceptBtn.addEventListener('click', acceptFn);

  if (shouldShowPopup()) {
    setTimeout(function () {
      consentPopup.classList.remove('hidden');
      wrapper.classList.add('cookies');
    }, 1500);
  }
}; // lazyload images


var lazy = function lazy() {
  document.addEventListener('lazyloaded', function (e) {
    e.target.parentNode.classList.add('image-loaded');
    e.target.parentNode.classList.remove('loading');
  });
};

lazy(); // back to top

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 2500,
  speedAsDuration: true,
  topOnEmptyHash: true
}); //cursor 

var cursorTag = document.querySelector("div.cursors");
var balls = cursorTag.querySelectorAll("div");
var cta = document.querySelectorAll("a");
var footer = document.getElementById("footer[data-hover]");
var aimX = 0;
var aimY = 0;
balls.forEach(function (ball, index) {
  var currentX = 0;
  var currentY = 0;
  var speed = 0.3 - index * 0.015;

  var animate = function animate() {
    currentX += (aimX - currentX) * speed;
    currentY += (aimY - currentY) * speed;
    ball.style.left = currentX + "px";
    ball.style.top = currentY + "px";
    requestAnimationFrame(animate);
  };

  animate();
});
document.addEventListener("mousemove", function (event) {
  aimX = event.pageX;
  aimY = event.pageY;
});
cta.forEach(function (cta) {
  cta.addEventListener("mouseover", function () {
    balls.forEach(function (cursor) {
      return cursor.style.backgroundColor = "transparent";
    });
  });
  cta.addEventListener("mouseout", function () {
    balls.forEach(function (cursor) {
      return cursor.style.backgroundColor = "rgba(202,207,199, 0.1)";
    });
  });
}); // footer.addEventListener("mouseover", function(){
//   cursor.classList.add("dark");
// })
//splitting

Splitting(); //aos

AOS.init({
  duration: 5000,
  easing: 'ease',
  once: false
});
new fullpage('#fullpage', (_fullpage = {
  licenseKey: 'E356F0DB-C2C14CBF-ABA0A6DC-6D7D1407',
  scrollingSpeed: 800,
  responsive: true,
  navigation: true,
  slidesNavigation: true,
  offsetSections: true,
  offsetSectionsKey: '65D8A1C8-B5EE4C5F-8BE60096-B2AC916A',
  anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],

  /*
  * To define the percentage of each section the attribute data-percentage 
  * must be used. The centering of the section in the viewport can be 
  * determined by using a boolean value in the attribute data-centered 
  * (default to true if not specified). For example:
  * <div class="section" data-percentage="80" data-centered="true">
  */
  //Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: false,
  //Scrolling
  css3: true
}, _defineProperty(_fullpage, "scrollingSpeed", 800), _defineProperty(_fullpage, "easing", 'easeInOutCubic'), _defineProperty(_fullpage, "easingcss3", 'ease'), _defineProperty(_fullpage, "dragAndMove", 'fingersonly'), _defineProperty(_fullpage, "resetSliders", false), _defineProperty(_fullpage, "touchSensitivity", 15), _fullpage)); //menu

function menuToggle() {
  var menu = document.getElementById('menu-overlay');
  var fpNav = document.getElementById('fp-nav');
  var nav = document.querySelector('nav'); // const main = document.querySelector('main');
  // const footer = document.querySelector('footer');

  menu.classList.toggle('active');
  nav.classList.toggle('dark');

  if (menu.classList.contains("active")) {
    document.querySelector('main').style.display = "none";
    document.querySelector('main').style.overflow = "hidden";
    document.querySelector('footer').style.display = "none";
    document.querySelector('footer').style.overflow = "hidden";
    gsap.to(".burger-top", {
      rotation: 45,
      transformOrigin: "50% 50%",
      y: 8
    });
    gsap.to(".burger-bottom", {
      rotation: -45,
      transformOrigin: "50% 50%",
      y: -8
    });
    gsap.to(".burger-mid", {
      width: 0
    });

    if (fpNav != null) {
      fpNav.style.opacity = 0;
    }
  } else {
    document.querySelector('main').style.display = "block";
    document.querySelector('main').style.overflow = "visible";
    document.querySelector('footer').style.display = "block";
    document.querySelector('footer').style.overflow = "visible";

    if (fpNav != null) {
      fpNav.style.opacity = 1;
    }

    gsap.to(".burger-top", {
      rotation: 0,
      y: 0
    });
    gsap.to(".burger-bottom", {
      rotation: 0,
      y: 0
    });
    gsap.to(".burger-mid", {
      width: 23
    });
  }
}

document.getElementById('toggleIcon').addEventListener('touchstart', function () {
  menuToggle();
}); //info toggle
//Profile-info toggle

var infoToggle = document.querySelector('.info-toggle');
var body = document.querySelector('body');
document.querySelector(".expander").addEventListener("click", animateIt);
var tl = gsap.timeline();
tl.from(".about__open", {
  height: 0,
  duration: 3,
  ease: "power3.inOut"
});
tl.reversed(true);

function animateIt() {
  tl.reversed(!tl.reversed());
  body.classList.toggle('profile-open');

  if (body.classList.contains('profile-open')) {
    infoToggle.innerHTML = "Toon minder";
  } else {
    infoToggle.innerHTML = "Toon meer";
  }
}
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57719" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map