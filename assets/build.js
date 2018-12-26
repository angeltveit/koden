(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  code: '12345'
};
exports.default = _default;

},{}],2:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],3:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],4:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
},{"./setPrototypeOf":11}],5:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],6:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],7:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"./setPrototypeOf":11}],8:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;
},{}],9:[function(require,module,exports){
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;
},{}],10:[function(require,module,exports){
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":12,"./assertThisInitialized":2}],11:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],12:[function(require,module,exports){
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],13:[function(require,module,exports){
var getPrototypeOf = require("./getPrototypeOf");

var setPrototypeOf = require("./setPrototypeOf");

var isNativeFunction = require("./isNativeFunction");

var construct = require("./construct");

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
},{"./construct":4,"./getPrototypeOf":6,"./isNativeFunction":9,"./setPrototypeOf":11}],14:[function(require,module,exports){

},{}],15:[function(require,module,exports){
/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */

/**
 * Splits a string into an array of strings using a regex or string separator. Matches of the
 * separator are not included in the result array. However, if `separator` is a regex that contains
 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
 * cross-browser.
 * @param {String} str String to split.
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 * @example
 *
 * // Basic use
 * split('a b c d', ' ');
 * // -> ['a', 'b', 'c', 'd']
 *
 * // With limit
 * split('a b c d', ' ', 2);
 * // -> ['a', 'b']
 *
 * // Backreferences in result array
 * split('..word1 word2..', /([a-z]+)(\d+)/i);
 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
 */
module.exports = (function split(undef) {

  var nativeSplit = String.prototype.split,
    compliantExecNpcg = /()??/.exec("")[1] === undef,
    // NPCG: nonparticipating capturing group
    self;

  self = function(str, separator, limit) {
    // If `separator` is not a regex, use `nativeSplit`
    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
      return nativeSplit.call(str, separator, limit);
    }
    var output = [],
      flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
      (separator.sticky ? "y" : ""),
      // Firefox 3+
      lastLastIndex = 0,
      // Make `global` and avoid `lastIndex` issues by working with a copy
      separator = new RegExp(separator.source, flags + "g"),
      separator2, match, lastIndex, lastLength;
    str += ""; // Type-convert
    if (!compliantExecNpcg) {
      // Doesn't need flags gy, but they don't hurt
      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
    }
    /* Values for `limit`, per the spec:
     * If undefined: 4294967295 // Math.pow(2, 32) - 1
     * If 0, Infinity, or NaN: 0
     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
     * If other: Type-convert, then use the above rules
     */
    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
    limit >>> 0; // ToUint32(limit)
    while (match = separator.exec(str)) {
      // `separator.lastIndex` is not reliable cross-browser
      lastIndex = match.index + match[0].length;
      if (lastIndex > lastLastIndex) {
        output.push(str.slice(lastLastIndex, match.index));
        // Fix browsers whose `exec` methods don't consistently return `undefined` for
        // nonparticipating capturing groups
        if (!compliantExecNpcg && match.length > 1) {
          match[0].replace(separator2, function() {
            for (var i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undef) {
                match[i] = undef;
              }
            }
          });
        }
        if (match.length > 1 && match.index < str.length) {
          Array.prototype.push.apply(output, match.slice(1));
        }
        lastLength = match[0].length;
        lastLastIndex = lastIndex;
        if (output.length >= limit) {
          break;
        }
      }
      if (separator.lastIndex === match.index) {
        separator.lastIndex++; // Avoid an infinite loop
      }
    }
    if (lastLastIndex === str.length) {
      if (lastLength || !separator.test("")) {
        output.push("");
      }
    } else {
      output.push(str.slice(lastLastIndex));
    }
    return output.length > limit ? output.slice(0, limit) : output;
  };

  return self;
})();

},{}],16:[function(require,module,exports){
'use strict';

var OneVersionConstraint = require('individual/one-version');

var MY_VERSION = '7';
OneVersionConstraint('ev-store', MY_VERSION);

var hashKey = '__EV_STORE_KEY@' + MY_VERSION;

module.exports = EvStore;

function EvStore(elem) {
    var hash = elem[hashKey];

    if (!hash) {
        hash = elem[hashKey] = {};
    }

    return hash;
}

},{"individual/one-version":21}],17:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = adapter;
exports.PugRuntime = void 0;
var slice = Array.call.bind(Array.prototype.slice);

function arrayIterator(array, callback) {
  for (var i = 0, l = array.length; i < l; ++i) {
    callback(array[i], i);
  }
}

function iterableIterator(iterator, callback) {
  var index = 0;

  for (var item of iterator) {
    if (Array.isArray(item)) {
      callback(item[0], item[1]);
    } else {
      callback(item, index++);
    }
  }
}

function objectIterator(object, callback) {
  var keys = Object.keys(object);

  for (var i = 0, l = keys.length; i < l; ++i) {
    callback(object[keys[i]], keys[i]);
  }
}

class PugRuntime {
  init() {
    return this.create();
  }

  create(tagName) {
    return {
      tagName: tagName,
      children: []
    };
  }

  child(parent, node) {
    if (!parent.children) debugger;
    parent.children.push(node);
  }

  events(context, value) {
    return value;
  }

  element(properties) {
    return properties;
  }

  handles(value, context, name) {
    value.handle = [context, name];
  }

  props(target, source) {
    return Object.assign(target, source);
  }

  text(text) {
    return text != null ? text + '' : '';
  }

  attrs(target, attrs) {
    target.attributes || (target.attributes = {});

    if (attrs.class) {
      attrs.class = this.attr(attrs.class);
    }

    for (var attr in attrs) {
      if (attrs[attr] === false || attrs[attr] == null) continue;
      target.attributes[attr] = attrs[attr] + '';
    }
  }

  attr(value) {
    if (!value) return '';
    if (Array.isArray(value)) return value.map(this.attr, this).join(' ');

    if (typeof value === 'object') {
      var result = [];

      for (var key in value) {
        if (value[key]) {
          result.push(key);
        }
      }

      return result.join(' ');
    }

    return value + '';
  }

  mixin(parent, self, mixin, ...args) {
    this.child(parent, mixin.call(Object.assign(Object.create(self), ...args)));
  }

  each(iterable, callback) {
    if (!iterable) return;

    if (Array.isArray(iterable)) {
      return arrayIterator(iterable, callback);
    } else if (Symbol.iterable in iterable) {
      return IterableIterator(terable, callback);
    } else if ('length' in iterable) {
      return arrayIterator(slice(iterable), callback);
    } else {
      return objectIterator(iterable, callback);
    }
  }

  end(result) {
    return result.children;
  }

}

exports.PugRuntime = PugRuntime;

function adapter() {
  return new PugRuntime();
}
},{}],18:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.default = adapter;

var _index = require("./index");

class EventHook {
  constructor(events) {
    this.events = events;
  }

  hook(node, prop, self) {
    var previous = self ? self.events : [];

    for (var [event, callback] of previous) {
      node.removeEventListener(event, callback);
    }

    for (var [event, callback] of this.events) {
      node.addEventListener(event, callback);
    }
  }

  unhook(node) {
    for (var [event, callback] of this.events) {
      node.removeEventListener(event, callback);
    }
  }

}

class PropertyHook {
  constructor(value) {
    this.value = value;
  }

  hook(node, property, self) {
    var previous = self && self.value;

    if (!previous && this.value !== undefined || node[property] !== this.value) {
      node[property] = this.value;
    }
  }

}

class HandleHook {
  constructor(context, names) {
    this.context = context;
    this.names = names;
  }

  hook(node, prop, previous) {
    for (var name of this.names) {
      this.context[name] = node;
    }
  }

  unhook() {
    for (var name of this.names) {
      this.context[name] = null;
    }
  }

}

class HTMLWidget {
  constructor(value) {
    this.value = value;
  }

  update(prev, node) {
    if (prev.value !== this.value) {
      return this.init();
    }
  }

  init() {
    var el = document.createElement('template');
    el.innerHTML = this.value;
    return el.content;
  }

  get type() {
    return 'Widget';
  }

}

class VDomRuntime extends _index.PugRuntime {
  constructor(h) {
    super();
    this.h = h;
  }

  element(properties) {
    const tagName = properties.tagName;
    const children = properties.children;
    delete properties.tagName;
    delete properties.children;
    return this.h(tagName, properties, children);
  }

  events(value, context, events) {
    return value.events = new EventHook(events, context);
  }

  handles(value, context, name) {
    value.handle = new HandleHook(context, name);
  }

  text(text, unescape) {
    if (text && unescape) {
      return new HTMLWidget(text);
    }

    if (text && text.type === 'VirtualNode') {
      return text;
    }

    return super.text(text);
  }

  attrs(context, value) {
    if (typeof value.style === 'object') {
      context.style = value.style;
      delete value.style;
    }

    return super.attrs(context, value);
  }

  props(context, value) {
    for (var key of Object.keys(value)) {
      switch (key) {
        case "class":
          var className = this.attr(value[key]);
          if (!className) continue;

          if (context.attributes && context.attributes.class) {
            className = context.attributes.class + ' ' + className;
            delete context.attributes.class;
          }

          if (context.className) {
            className += ' ' + context.className;
          }

          context.className = className;
          break;

        case "style":
          context[key] = value[key];
          break;

        default:
          context[key] = new PropertyHook(value[key]);
      }
    }
  }

}

function adapter(vdom) {
  return new VDomRuntime(vdom);
}
},{"./index":17}],19:[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = require('min-document');

var doccy;

if (typeof document !== 'undefined') {
    doccy = document;
} else {
    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }
}

module.exports = doccy;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"min-document":14}],20:[function(require,module,exports){
(function (global){
'use strict';

/*global window, global*/

var root = typeof window !== 'undefined' ?
    window : typeof global !== 'undefined' ?
    global : {};

module.exports = Individual;

function Individual(key, value) {
    if (key in root) {
        return root[key];
    }

    root[key] = value;

    return value;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],21:[function(require,module,exports){
'use strict';

var Individual = require('./index.js');

module.exports = OneVersion;

function OneVersion(moduleName, version, defaultValue) {
    var key = '__INDIVIDUAL_ONE_VERSION_' + moduleName;
    var enforceKey = key + '_ENFORCE_SINGLETON';

    var versionValue = Individual(enforceKey, version);

    if (versionValue !== version) {
        throw new Error('Can only have one copy of ' +
            moduleName + '.\n' +
            'You already have version ' + versionValue +
            ' installed.\n' +
            'This means you cannot install version ' + version);
    }

    return Individual(key, defaultValue);
}

},{"./index.js":20}],22:[function(require,module,exports){
var diff = require("./vtree/diff.js")

module.exports = diff

},{"./vtree/diff.js":47}],23:[function(require,module,exports){
var h = require("./virtual-hyperscript/index.js")

module.exports = h

},{"./virtual-hyperscript/index.js":34}],24:[function(require,module,exports){
"use strict";

module.exports = function isObject(x) {
	return typeof x === "object" && x !== null;
};

},{}],25:[function(require,module,exports){
var patch = require("./vdom/patch.js")

module.exports = patch

},{"./vdom/patch.js":30}],26:[function(require,module,exports){
var isObject = require("is-object")
var isHook = require("../vnode/is-vhook.js")

module.exports = applyProperties

function applyProperties(node, props, previous) {
    for (var propName in props) {
        var propValue = props[propName]

        if (propValue === undefined) {
            removeProperty(node, propName, propValue, previous);
        } else if (isHook(propValue)) {
            removeProperty(node, propName, propValue, previous)
            if (propValue.hook) {
                propValue.hook(node,
                    propName,
                    previous ? previous[propName] : undefined)
            }
        } else {
            if (isObject(propValue)) {
                patchObject(node, props, previous, propName, propValue);
            } else {
                node[propName] = propValue
            }
        }
    }
}

function removeProperty(node, propName, propValue, previous) {
    if (previous) {
        var previousValue = previous[propName]

        if (!isHook(previousValue)) {
            if (propName === "attributes") {
                for (var attrName in previousValue) {
                    node.removeAttribute(attrName)
                }
            } else if (propName === "style") {
                for (var i in previousValue) {
                    node.style[i] = ""
                }
            } else if (typeof previousValue === "string") {
                node[propName] = ""
            } else {
                node[propName] = null
            }
        } else if (previousValue.unhook) {
            previousValue.unhook(node, propName, propValue)
        }
    }
}

function patchObject(node, props, previous, propName, propValue) {
    var previousValue = previous ? previous[propName] : undefined

    // Set attributes
    if (propName === "attributes") {
        for (var attrName in propValue) {
            var attrValue = propValue[attrName]

            if (attrValue === undefined) {
                node.removeAttribute(attrName)
            } else {
                node.setAttribute(attrName, attrValue)
            }
        }

        return
    }

    if(previousValue && isObject(previousValue) &&
        getPrototype(previousValue) !== getPrototype(propValue)) {
        node[propName] = propValue
        return
    }

    if (!isObject(node[propName])) {
        node[propName] = {}
    }

    var replacer = propName === "style" ? "" : undefined

    for (var k in propValue) {
        var value = propValue[k]
        node[propName][k] = (value === undefined) ? replacer : value
    }
}

function getPrototype(value) {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value)
    } else if (value.__proto__) {
        return value.__proto__
    } else if (value.constructor) {
        return value.constructor.prototype
    }
}

},{"../vnode/is-vhook.js":38,"is-object":24}],27:[function(require,module,exports){
var document = require("global/document")

var applyProperties = require("./apply-properties")

var isVNode = require("../vnode/is-vnode.js")
var isVText = require("../vnode/is-vtext.js")
var isWidget = require("../vnode/is-widget.js")
var handleThunk = require("../vnode/handle-thunk.js")

module.exports = createElement

function createElement(vnode, opts) {
    var doc = opts ? opts.document || document : document
    var warn = opts ? opts.warn : null

    vnode = handleThunk(vnode).a

    if (isWidget(vnode)) {
        return vnode.init()
    } else if (isVText(vnode)) {
        return doc.createTextNode(vnode.text)
    } else if (!isVNode(vnode)) {
        if (warn) {
            warn("Item is not a valid virtual dom node", vnode)
        }
        return null
    }

    var node = (vnode.namespace === null) ?
        doc.createElement(vnode.tagName) :
        doc.createElementNS(vnode.namespace, vnode.tagName)

    var props = vnode.properties
    applyProperties(node, props)

    var children = vnode.children

    for (var i = 0; i < children.length; i++) {
        var childNode = createElement(children[i], opts)
        if (childNode) {
            node.appendChild(childNode)
        }
    }

    return node
}

},{"../vnode/handle-thunk.js":36,"../vnode/is-vnode.js":39,"../vnode/is-vtext.js":40,"../vnode/is-widget.js":41,"./apply-properties":26,"global/document":19}],28:[function(require,module,exports){
// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
// We don't want to read all of the DOM nodes in the tree so we use
// the in-order tree indexing to eliminate recursion down certain branches.
// We only recurse into a DOM node if we know that it contains a child of
// interest.

var noChild = {}

module.exports = domIndex

function domIndex(rootNode, tree, indices, nodes) {
    if (!indices || indices.length === 0) {
        return {}
    } else {
        indices.sort(ascending)
        return recurse(rootNode, tree, indices, nodes, 0)
    }
}

function recurse(rootNode, tree, indices, nodes, rootIndex) {
    nodes = nodes || {}


    if (rootNode) {
        if (indexInRange(indices, rootIndex, rootIndex)) {
            nodes[rootIndex] = rootNode
        }

        var vChildren = tree.children

        if (vChildren) {

            var childNodes = rootNode.childNodes

            for (var i = 0; i < tree.children.length; i++) {
                rootIndex += 1

                var vChild = vChildren[i] || noChild
                var nextIndex = rootIndex + (vChild.count || 0)

                // skip recursion down the tree if there are no nodes down here
                if (indexInRange(indices, rootIndex, nextIndex)) {
                    recurse(childNodes[i], vChild, indices, nodes, rootIndex)
                }

                rootIndex = nextIndex
            }
        }
    }

    return nodes
}

// Binary search for an index in the interval [left, right]
function indexInRange(indices, left, right) {
    if (indices.length === 0) {
        return false
    }

    var minIndex = 0
    var maxIndex = indices.length - 1
    var currentIndex
    var currentItem

    while (minIndex <= maxIndex) {
        currentIndex = ((maxIndex + minIndex) / 2) >> 0
        currentItem = indices[currentIndex]

        if (minIndex === maxIndex) {
            return currentItem >= left && currentItem <= right
        } else if (currentItem < left) {
            minIndex = currentIndex + 1
        } else  if (currentItem > right) {
            maxIndex = currentIndex - 1
        } else {
            return true
        }
    }

    return false;
}

function ascending(a, b) {
    return a > b ? 1 : -1
}

},{}],29:[function(require,module,exports){
var applyProperties = require("./apply-properties")

var isWidget = require("../vnode/is-widget.js")
var VPatch = require("../vnode/vpatch.js")

var updateWidget = require("./update-widget")

module.exports = applyPatch

function applyPatch(vpatch, domNode, renderOptions) {
    var type = vpatch.type
    var vNode = vpatch.vNode
    var patch = vpatch.patch

    switch (type) {
        case VPatch.REMOVE:
            return removeNode(domNode, vNode)
        case VPatch.INSERT:
            return insertNode(domNode, patch, renderOptions)
        case VPatch.VTEXT:
            return stringPatch(domNode, vNode, patch, renderOptions)
        case VPatch.WIDGET:
            return widgetPatch(domNode, vNode, patch, renderOptions)
        case VPatch.VNODE:
            return vNodePatch(domNode, vNode, patch, renderOptions)
        case VPatch.ORDER:
            reorderChildren(domNode, patch)
            return domNode
        case VPatch.PROPS:
            applyProperties(domNode, patch, vNode.properties)
            return domNode
        case VPatch.THUNK:
            return replaceRoot(domNode,
                renderOptions.patch(domNode, patch, renderOptions))
        default:
            return domNode
    }
}

function removeNode(domNode, vNode) {
    var parentNode = domNode.parentNode

    if (parentNode) {
        parentNode.removeChild(domNode)
    }

    destroyWidget(domNode, vNode);

    return null
}

function insertNode(parentNode, vNode, renderOptions) {
    var newNode = renderOptions.render(vNode, renderOptions)

    if (parentNode) {
        parentNode.appendChild(newNode)
    }

    return parentNode
}

function stringPatch(domNode, leftVNode, vText, renderOptions) {
    var newNode

    if (domNode.nodeType === 3) {
        domNode.replaceData(0, domNode.length, vText.text)
        newNode = domNode
    } else {
        var parentNode = domNode.parentNode
        newNode = renderOptions.render(vText, renderOptions)

        if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode)
        }
    }

    return newNode
}

function widgetPatch(domNode, leftVNode, widget, renderOptions) {
    var updating = updateWidget(leftVNode, widget)
    var newNode

    if (updating) {
        newNode = widget.update(leftVNode, domNode) || domNode
    } else {
        newNode = renderOptions.render(widget, renderOptions)
    }

    var parentNode = domNode.parentNode

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    if (!updating) {
        destroyWidget(domNode, leftVNode)
    }

    return newNode
}

function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
    var parentNode = domNode.parentNode
    var newNode = renderOptions.render(vNode, renderOptions)

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    return newNode
}

function destroyWidget(domNode, w) {
    if (typeof w.destroy === "function" && isWidget(w)) {
        w.destroy(domNode)
    }
}

function reorderChildren(domNode, moves) {
    var childNodes = domNode.childNodes
    var keyMap = {}
    var node
    var remove
    var insert

    for (var i = 0; i < moves.removes.length; i++) {
        remove = moves.removes[i]
        node = childNodes[remove.from]
        if (remove.key) {
            keyMap[remove.key] = node
        }
        domNode.removeChild(node)
    }

    var length = childNodes.length
    for (var j = 0; j < moves.inserts.length; j++) {
        insert = moves.inserts[j]
        node = keyMap[insert.key]
        // this is the weirdest bug i've ever seen in webkit
        domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to])
    }
}

function replaceRoot(oldRoot, newRoot) {
    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
        oldRoot.parentNode.replaceChild(newRoot, oldRoot)
    }

    return newRoot;
}

},{"../vnode/is-widget.js":41,"../vnode/vpatch.js":44,"./apply-properties":26,"./update-widget":31}],30:[function(require,module,exports){
var document = require("global/document")
var isArray = require("x-is-array")

var render = require("./create-element")
var domIndex = require("./dom-index")
var patchOp = require("./patch-op")
module.exports = patch

function patch(rootNode, patches, renderOptions) {
    renderOptions = renderOptions || {}
    renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch
        ? renderOptions.patch
        : patchRecursive
    renderOptions.render = renderOptions.render || render

    return renderOptions.patch(rootNode, patches, renderOptions)
}

function patchRecursive(rootNode, patches, renderOptions) {
    var indices = patchIndices(patches)

    if (indices.length === 0) {
        return rootNode
    }

    var index = domIndex(rootNode, patches.a, indices)
    var ownerDocument = rootNode.ownerDocument

    if (!renderOptions.document && ownerDocument !== document) {
        renderOptions.document = ownerDocument
    }

    for (var i = 0; i < indices.length; i++) {
        var nodeIndex = indices[i]
        rootNode = applyPatch(rootNode,
            index[nodeIndex],
            patches[nodeIndex],
            renderOptions)
    }

    return rootNode
}

function applyPatch(rootNode, domNode, patchList, renderOptions) {
    if (!domNode) {
        return rootNode
    }

    var newNode

    if (isArray(patchList)) {
        for (var i = 0; i < patchList.length; i++) {
            newNode = patchOp(patchList[i], domNode, renderOptions)

            if (domNode === rootNode) {
                rootNode = newNode
            }
        }
    } else {
        newNode = patchOp(patchList, domNode, renderOptions)

        if (domNode === rootNode) {
            rootNode = newNode
        }
    }

    return rootNode
}

function patchIndices(patches) {
    var indices = []

    for (var key in patches) {
        if (key !== "a") {
            indices.push(Number(key))
        }
    }

    return indices
}

},{"./create-element":27,"./dom-index":28,"./patch-op":29,"global/document":19,"x-is-array":48}],31:[function(require,module,exports){
var isWidget = require("../vnode/is-widget.js")

module.exports = updateWidget

function updateWidget(a, b) {
    if (isWidget(a) && isWidget(b)) {
        if ("name" in a && "name" in b) {
            return a.id === b.id
        } else {
            return a.init === b.init
        }
    }

    return false
}

},{"../vnode/is-widget.js":41}],32:[function(require,module,exports){
'use strict';

var EvStore = require('ev-store');

module.exports = EvHook;

function EvHook(value) {
    if (!(this instanceof EvHook)) {
        return new EvHook(value);
    }

    this.value = value;
}

EvHook.prototype.hook = function (node, propertyName) {
    var es = EvStore(node);
    var propName = propertyName.substr(3);

    es[propName] = this.value;
};

EvHook.prototype.unhook = function(node, propertyName) {
    var es = EvStore(node);
    var propName = propertyName.substr(3);

    es[propName] = undefined;
};

},{"ev-store":16}],33:[function(require,module,exports){
'use strict';

module.exports = SoftSetHook;

function SoftSetHook(value) {
    if (!(this instanceof SoftSetHook)) {
        return new SoftSetHook(value);
    }

    this.value = value;
}

SoftSetHook.prototype.hook = function (node, propertyName) {
    if (node[propertyName] !== this.value) {
        node[propertyName] = this.value;
    }
};

},{}],34:[function(require,module,exports){
'use strict';

var isArray = require('x-is-array');

var VNode = require('../vnode/vnode.js');
var VText = require('../vnode/vtext.js');
var isVNode = require('../vnode/is-vnode');
var isVText = require('../vnode/is-vtext');
var isWidget = require('../vnode/is-widget');
var isHook = require('../vnode/is-vhook');
var isVThunk = require('../vnode/is-thunk');

var parseTag = require('./parse-tag.js');
var softSetHook = require('./hooks/soft-set-hook.js');
var evHook = require('./hooks/ev-hook.js');

module.exports = h;

function h(tagName, properties, children) {
    var childNodes = [];
    var tag, props, key, namespace;

    if (!children && isChildren(properties)) {
        children = properties;
        props = {};
    }

    props = props || properties || {};
    tag = parseTag(tagName, props);

    // support keys
    if (props.hasOwnProperty('key')) {
        key = props.key;
        props.key = undefined;
    }

    // support namespace
    if (props.hasOwnProperty('namespace')) {
        namespace = props.namespace;
        props.namespace = undefined;
    }

    // fix cursor bug
    if (tag === 'INPUT' &&
        !namespace &&
        props.hasOwnProperty('value') &&
        props.value !== undefined &&
        !isHook(props.value)
    ) {
        props.value = softSetHook(props.value);
    }

    transformProperties(props);

    if (children !== undefined && children !== null) {
        addChild(children, childNodes, tag, props);
    }


    return new VNode(tag, props, childNodes, key, namespace);
}

function addChild(c, childNodes, tag, props) {
    if (typeof c === 'string') {
        childNodes.push(new VText(c));
    } else if (typeof c === 'number') {
        childNodes.push(new VText(String(c)));
    } else if (isChild(c)) {
        childNodes.push(c);
    } else if (isArray(c)) {
        for (var i = 0; i < c.length; i++) {
            addChild(c[i], childNodes, tag, props);
        }
    } else if (c === null || c === undefined) {
        return;
    } else {
        throw UnexpectedVirtualElement({
            foreignObject: c,
            parentVnode: {
                tagName: tag,
                properties: props
            }
        });
    }
}

function transformProperties(props) {
    for (var propName in props) {
        if (props.hasOwnProperty(propName)) {
            var value = props[propName];

            if (isHook(value)) {
                continue;
            }

            if (propName.substr(0, 3) === 'ev-') {
                // add ev-foo support
                props[propName] = evHook(value);
            }
        }
    }
}

function isChild(x) {
    return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x);
}

function isChildren(x) {
    return typeof x === 'string' || isArray(x) || isChild(x);
}

function UnexpectedVirtualElement(data) {
    var err = new Error();

    err.type = 'virtual-hyperscript.unexpected.virtual-element';
    err.message = 'Unexpected virtual child passed to h().\n' +
        'Expected a VNode / Vthunk / VWidget / string but:\n' +
        'got:\n' +
        errorString(data.foreignObject) +
        '.\n' +
        'The parent vnode is:\n' +
        errorString(data.parentVnode)
        '\n' +
        'Suggested fix: change your `h(..., [ ... ])` callsite.';
    err.foreignObject = data.foreignObject;
    err.parentVnode = data.parentVnode;

    return err;
}

function errorString(obj) {
    try {
        return JSON.stringify(obj, null, '    ');
    } catch (e) {
        return String(obj);
    }
}

},{"../vnode/is-thunk":37,"../vnode/is-vhook":38,"../vnode/is-vnode":39,"../vnode/is-vtext":40,"../vnode/is-widget":41,"../vnode/vnode.js":43,"../vnode/vtext.js":45,"./hooks/ev-hook.js":32,"./hooks/soft-set-hook.js":33,"./parse-tag.js":35,"x-is-array":48}],35:[function(require,module,exports){
'use strict';

var split = require('browser-split');

var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
var notClassId = /^\.|#/;

module.exports = parseTag;

function parseTag(tag, props) {
    if (!tag) {
        return 'DIV';
    }

    var noId = !(props.hasOwnProperty('id'));

    var tagParts = split(tag, classIdSplit);
    var tagName = null;

    if (notClassId.test(tagParts[1])) {
        tagName = 'DIV';
    }

    var classes, part, type, i;

    for (i = 0; i < tagParts.length; i++) {
        part = tagParts[i];

        if (!part) {
            continue;
        }

        type = part.charAt(0);

        if (!tagName) {
            tagName = part;
        } else if (type === '.') {
            classes = classes || [];
            classes.push(part.substring(1, part.length));
        } else if (type === '#' && noId) {
            props.id = part.substring(1, part.length);
        }
    }

    if (classes) {
        if (props.className) {
            classes.push(props.className);
        }

        props.className = classes.join(' ');
    }

    return props.namespace ? tagName : tagName.toUpperCase();
}

},{"browser-split":15}],36:[function(require,module,exports){
var isVNode = require("./is-vnode")
var isVText = require("./is-vtext")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")

module.exports = handleThunk

function handleThunk(a, b) {
    var renderedA = a
    var renderedB = b

    if (isThunk(b)) {
        renderedB = renderThunk(b, a)
    }

    if (isThunk(a)) {
        renderedA = renderThunk(a, null)
    }

    return {
        a: renderedA,
        b: renderedB
    }
}

function renderThunk(thunk, previous) {
    var renderedThunk = thunk.vnode

    if (!renderedThunk) {
        renderedThunk = thunk.vnode = thunk.render(previous)
    }

    if (!(isVNode(renderedThunk) ||
            isVText(renderedThunk) ||
            isWidget(renderedThunk))) {
        throw new Error("thunk did not return a valid node");
    }

    return renderedThunk
}

},{"./is-thunk":37,"./is-vnode":39,"./is-vtext":40,"./is-widget":41}],37:[function(require,module,exports){
module.exports = isThunk

function isThunk(t) {
    return t && t.type === "Thunk"
}

},{}],38:[function(require,module,exports){
module.exports = isHook

function isHook(hook) {
    return hook &&
      (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") ||
       typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"))
}

},{}],39:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualNode

function isVirtualNode(x) {
    return x && x.type === "VirtualNode" && x.version === version
}

},{"./version":42}],40:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualText

function isVirtualText(x) {
    return x && x.type === "VirtualText" && x.version === version
}

},{"./version":42}],41:[function(require,module,exports){
module.exports = isWidget

function isWidget(w) {
    return w && w.type === "Widget"
}

},{}],42:[function(require,module,exports){
module.exports = "2"

},{}],43:[function(require,module,exports){
var version = require("./version")
var isVNode = require("./is-vnode")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")
var isVHook = require("./is-vhook")

module.exports = VirtualNode

var noProperties = {}
var noChildren = []

function VirtualNode(tagName, properties, children, key, namespace) {
    this.tagName = tagName
    this.properties = properties || noProperties
    this.children = children || noChildren
    this.key = key != null ? String(key) : undefined
    this.namespace = (typeof namespace === "string") ? namespace : null

    var count = (children && children.length) || 0
    var descendants = 0
    var hasWidgets = false
    var hasThunks = false
    var descendantHooks = false
    var hooks

    for (var propName in properties) {
        if (properties.hasOwnProperty(propName)) {
            var property = properties[propName]
            if (isVHook(property) && property.unhook) {
                if (!hooks) {
                    hooks = {}
                }

                hooks[propName] = property
            }
        }
    }

    for (var i = 0; i < count; i++) {
        var child = children[i]
        if (isVNode(child)) {
            descendants += child.count || 0

            if (!hasWidgets && child.hasWidgets) {
                hasWidgets = true
            }

            if (!hasThunks && child.hasThunks) {
                hasThunks = true
            }

            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
                descendantHooks = true
            }
        } else if (!hasWidgets && isWidget(child)) {
            if (typeof child.destroy === "function") {
                hasWidgets = true
            }
        } else if (!hasThunks && isThunk(child)) {
            hasThunks = true;
        }
    }

    this.count = count + descendants
    this.hasWidgets = hasWidgets
    this.hasThunks = hasThunks
    this.hooks = hooks
    this.descendantHooks = descendantHooks
}

VirtualNode.prototype.version = version
VirtualNode.prototype.type = "VirtualNode"

},{"./is-thunk":37,"./is-vhook":38,"./is-vnode":39,"./is-widget":41,"./version":42}],44:[function(require,module,exports){
var version = require("./version")

VirtualPatch.NONE = 0
VirtualPatch.VTEXT = 1
VirtualPatch.VNODE = 2
VirtualPatch.WIDGET = 3
VirtualPatch.PROPS = 4
VirtualPatch.ORDER = 5
VirtualPatch.INSERT = 6
VirtualPatch.REMOVE = 7
VirtualPatch.THUNK = 8

module.exports = VirtualPatch

function VirtualPatch(type, vNode, patch) {
    this.type = Number(type)
    this.vNode = vNode
    this.patch = patch
}

VirtualPatch.prototype.version = version
VirtualPatch.prototype.type = "VirtualPatch"

},{"./version":42}],45:[function(require,module,exports){
var version = require("./version")

module.exports = VirtualText

function VirtualText(text) {
    this.text = String(text)
}

VirtualText.prototype.version = version
VirtualText.prototype.type = "VirtualText"

},{"./version":42}],46:[function(require,module,exports){
var isObject = require("is-object")
var isHook = require("../vnode/is-vhook")

module.exports = diffProps

function diffProps(a, b) {
    var diff

    for (var aKey in a) {
        if (!(aKey in b)) {
            diff = diff || {}
            diff[aKey] = undefined
        }

        var aValue = a[aKey]
        var bValue = b[aKey]

        if (aValue === bValue) {
            continue
        } else if (isObject(aValue) && isObject(bValue)) {
            if (getPrototype(bValue) !== getPrototype(aValue)) {
                diff = diff || {}
                diff[aKey] = bValue
            } else if (isHook(bValue)) {
                 diff = diff || {}
                 diff[aKey] = bValue
            } else {
                var objectDiff = diffProps(aValue, bValue)
                if (objectDiff) {
                    diff = diff || {}
                    diff[aKey] = objectDiff
                }
            }
        } else {
            diff = diff || {}
            diff[aKey] = bValue
        }
    }

    for (var bKey in b) {
        if (!(bKey in a)) {
            diff = diff || {}
            diff[bKey] = b[bKey]
        }
    }

    return diff
}

function getPrototype(value) {
  if (Object.getPrototypeOf) {
    return Object.getPrototypeOf(value)
  } else if (value.__proto__) {
    return value.__proto__
  } else if (value.constructor) {
    return value.constructor.prototype
  }
}

},{"../vnode/is-vhook":38,"is-object":24}],47:[function(require,module,exports){
var isArray = require("x-is-array")

var VPatch = require("../vnode/vpatch")
var isVNode = require("../vnode/is-vnode")
var isVText = require("../vnode/is-vtext")
var isWidget = require("../vnode/is-widget")
var isThunk = require("../vnode/is-thunk")
var handleThunk = require("../vnode/handle-thunk")

var diffProps = require("./diff-props")

module.exports = diff

function diff(a, b) {
    var patch = { a: a }
    walk(a, b, patch, 0)
    return patch
}

function walk(a, b, patch, index) {
    if (a === b) {
        return
    }

    var apply = patch[index]
    var applyClear = false

    if (isThunk(a) || isThunk(b)) {
        thunks(a, b, patch, index)
    } else if (b == null) {

        // If a is a widget we will add a remove patch for it
        // Otherwise any child widgets/hooks must be destroyed.
        // This prevents adding two remove patches for a widget.
        if (!isWidget(a)) {
            clearState(a, patch, index)
            apply = patch[index]
        }

        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))
    } else if (isVNode(b)) {
        if (isVNode(a)) {
            if (a.tagName === b.tagName &&
                a.namespace === b.namespace &&
                a.key === b.key) {
                var propsPatch = diffProps(a.properties, b.properties)
                if (propsPatch) {
                    apply = appendPatch(apply,
                        new VPatch(VPatch.PROPS, a, propsPatch))
                }
                apply = diffChildren(a, b, patch, apply, index)
            } else {
                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
                applyClear = true
            }
        } else {
            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
            applyClear = true
        }
    } else if (isVText(b)) {
        if (!isVText(a)) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
            applyClear = true
        } else if (a.text !== b.text) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
        }
    } else if (isWidget(b)) {
        if (!isWidget(a)) {
            applyClear = true
        }

        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))
    }

    if (apply) {
        patch[index] = apply
    }

    if (applyClear) {
        clearState(a, patch, index)
    }
}

function diffChildren(a, b, patch, apply, index) {
    var aChildren = a.children
    var orderedSet = reorder(aChildren, b.children)
    var bChildren = orderedSet.children

    var aLen = aChildren.length
    var bLen = bChildren.length
    var len = aLen > bLen ? aLen : bLen

    for (var i = 0; i < len; i++) {
        var leftNode = aChildren[i]
        var rightNode = bChildren[i]
        index += 1

        if (!leftNode) {
            if (rightNode) {
                // Excess nodes in b need to be added
                apply = appendPatch(apply,
                    new VPatch(VPatch.INSERT, null, rightNode))
            }
        } else {
            walk(leftNode, rightNode, patch, index)
        }

        if (isVNode(leftNode) && leftNode.count) {
            index += leftNode.count
        }
    }

    if (orderedSet.moves) {
        // Reorder nodes last
        apply = appendPatch(apply, new VPatch(
            VPatch.ORDER,
            a,
            orderedSet.moves
        ))
    }

    return apply
}

function clearState(vNode, patch, index) {
    // TODO: Make this a single walk, not two
    unhook(vNode, patch, index)
    destroyWidgets(vNode, patch, index)
}

// Patch records for all destroyed widgets must be added because we need
// a DOM node reference for the destroy function
function destroyWidgets(vNode, patch, index) {
    if (isWidget(vNode)) {
        if (typeof vNode.destroy === "function") {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(VPatch.REMOVE, vNode, null)
            )
        }
    } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
        var children = vNode.children
        var len = children.length
        for (var i = 0; i < len; i++) {
            var child = children[i]
            index += 1

            destroyWidgets(child, patch, index)

            if (isVNode(child) && child.count) {
                index += child.count
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

// Create a sub-patch for thunks
function thunks(a, b, patch, index) {
    var nodes = handleThunk(a, b)
    var thunkPatch = diff(nodes.a, nodes.b)
    if (hasPatches(thunkPatch)) {
        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)
    }
}

function hasPatches(patch) {
    for (var index in patch) {
        if (index !== "a") {
            return true
        }
    }

    return false
}

// Execute hooks when two nodes are identical
function unhook(vNode, patch, index) {
    if (isVNode(vNode)) {
        if (vNode.hooks) {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(
                    VPatch.PROPS,
                    vNode,
                    undefinedKeys(vNode.hooks)
                )
            )
        }

        if (vNode.descendantHooks || vNode.hasThunks) {
            var children = vNode.children
            var len = children.length
            for (var i = 0; i < len; i++) {
                var child = children[i]
                index += 1

                unhook(child, patch, index)

                if (isVNode(child) && child.count) {
                    index += child.count
                }
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

function undefinedKeys(obj) {
    var result = {}

    for (var key in obj) {
        result[key] = undefined
    }

    return result
}

// List diff, naive left to right reordering
function reorder(aChildren, bChildren) {
    // O(M) time, O(M) memory
    var bChildIndex = keyIndex(bChildren)
    var bKeys = bChildIndex.keys
    var bFree = bChildIndex.free

    if (bFree.length === bChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(N) time, O(N) memory
    var aChildIndex = keyIndex(aChildren)
    var aKeys = aChildIndex.keys
    var aFree = aChildIndex.free

    if (aFree.length === aChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(MAX(N, M)) memory
    var newChildren = []

    var freeIndex = 0
    var freeCount = bFree.length
    var deletedItems = 0

    // Iterate through a and match a node in b
    // O(N) time,
    for (var i = 0 ; i < aChildren.length; i++) {
        var aItem = aChildren[i]
        var itemIndex

        if (aItem.key) {
            if (bKeys.hasOwnProperty(aItem.key)) {
                // Match up the old keys
                itemIndex = bKeys[aItem.key]
                newChildren.push(bChildren[itemIndex])

            } else {
                // Remove old keyed items
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        } else {
            // Match the item in a with the next free item in b
            if (freeIndex < freeCount) {
                itemIndex = bFree[freeIndex++]
                newChildren.push(bChildren[itemIndex])
            } else {
                // There are no free items in b to match with
                // the free items in a, so the extra free nodes
                // are deleted.
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        }
    }

    var lastFreeIndex = freeIndex >= bFree.length ?
        bChildren.length :
        bFree[freeIndex]

    // Iterate through b and append any new keys
    // O(M) time
    for (var j = 0; j < bChildren.length; j++) {
        var newItem = bChildren[j]

        if (newItem.key) {
            if (!aKeys.hasOwnProperty(newItem.key)) {
                // Add any new keyed items
                // We are adding new items to the end and then sorting them
                // in place. In future we should insert new items in place.
                newChildren.push(newItem)
            }
        } else if (j >= lastFreeIndex) {
            // Add any leftover non-keyed items
            newChildren.push(newItem)
        }
    }

    var simulate = newChildren.slice()
    var simulateIndex = 0
    var removes = []
    var inserts = []
    var simulateItem

    for (var k = 0; k < bChildren.length;) {
        var wantedItem = bChildren[k]
        simulateItem = simulate[simulateIndex]

        // remove items
        while (simulateItem === null && simulate.length) {
            removes.push(remove(simulate, simulateIndex, null))
            simulateItem = simulate[simulateIndex]
        }

        if (!simulateItem || simulateItem.key !== wantedItem.key) {
            // if we need a key in this position...
            if (wantedItem.key) {
                if (simulateItem && simulateItem.key) {
                    // if an insert doesn't put this key in place, it needs to move
                    if (bKeys[simulateItem.key] !== k + 1) {
                        removes.push(remove(simulate, simulateIndex, simulateItem.key))
                        simulateItem = simulate[simulateIndex]
                        // if the remove didn't put the wanted item in place, we need to insert it
                        if (!simulateItem || simulateItem.key !== wantedItem.key) {
                            inserts.push({key: wantedItem.key, to: k})
                        }
                        // items are matching, so skip ahead
                        else {
                            simulateIndex++
                        }
                    }
                    else {
                        inserts.push({key: wantedItem.key, to: k})
                    }
                }
                else {
                    inserts.push({key: wantedItem.key, to: k})
                }
                k++
            }
            // a key in simulate has no matching wanted key, remove it
            else if (simulateItem && simulateItem.key) {
                removes.push(remove(simulate, simulateIndex, simulateItem.key))
            }
        }
        else {
            simulateIndex++
            k++
        }
    }

    // remove all the remaining nodes from simulate
    while(simulateIndex < simulate.length) {
        simulateItem = simulate[simulateIndex]
        removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key))
    }

    // If the only moves we have are deletes then we can just
    // let the delete patch remove these items.
    if (removes.length === deletedItems && !inserts.length) {
        return {
            children: newChildren,
            moves: null
        }
    }

    return {
        children: newChildren,
        moves: {
            removes: removes,
            inserts: inserts
        }
    }
}

function remove(arr, index, key) {
    arr.splice(index, 1)

    return {
        from: index,
        key: key
    }
}

function keyIndex(children) {
    var keys = {}
    var free = []
    var length = children.length

    for (var i = 0; i < length; i++) {
        var child = children[i]

        if (child.key) {
            keys[child.key] = i
        } else {
            free.push(i)
        }
    }

    return {
        keys: keys,     // A hash of key name to index
        free: free      // An array of unkeyed item indices
    }
}

function appendPatch(apply, patch) {
    if (apply) {
        if (isArray(apply)) {
            apply.push(patch)
        } else {
            apply = [apply, patch]
        }

        return apply
    } else {
        return patch
    }
}

},{"../vnode/handle-thunk":36,"../vnode/is-thunk":37,"../vnode/is-vnode":39,"../vnode/is-vtext":40,"../vnode/is-widget":41,"../vnode/vpatch":44,"./diff-props":46,"x-is-array":48}],48:[function(require,module,exports){
var nativeIsArray = Array.isArray
var toString = Object.prototype.toString

module.exports = nativeIsArray || isArray

function isArray(obj) {
    return toString.call(obj) === "[object Array]"
}

},{}],49:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _widgets = require("@scoutgg/widgets");

var _lock = _interopRequireDefault(require("./lock.pug"));

var _dec, _dec2, _dec3, _dec4, _class;

var Lock = (_dec = (0, _widgets.Component)('kode'), _dec2 = (0, _widgets.Attribute)('code', String), _dec3 = (0, _widgets.Attribute)('userInput', String, {
  default: ''
}), _dec4 = (0, _widgets.Template)(_lock.default), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class =
/*#__PURE__*/
function (_HTMLElement) {
  (0, _inherits2.default)(Lock, _HTMLElement);

  function Lock() {
    (0, _classCallCheck2.default)(this, Lock);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Lock).apply(this, arguments));
  }

  (0, _createClass2.default)(Lock, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      console.log('has code', this.code);
      this.errorSound = new Audio('public/error.mp3');
    }
  }, {
    key: "updateInput",
    value: function updateInput(e) {
      this.userInput = e.target.value;

      if (this.userInput === this.code) {
        this.emit('solved');
      } else if (this.userInput.length === this.code.length) {
        this.errored = true;
        this.errorSound.play();
      } else {
        this.errored = false;
      }

      this.render();
    }
  }, {
    key: "splittedCode",
    get: function get() {
      var _this = this;

      var empty = this.code.split('');
      return empty.map(function (box, index) {
        if (index < _this.userInput.length) return _this.userInput[index];
        return ' ';
      });
    }
  }]);
  return Lock;
}((0, _wrapNativeSuper2.default)(HTMLElement))) || _class) || _class) || _class) || _class);
exports.default = Lock;

},{"./lock.pug":50,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":10,"@babel/runtime/helpers/wrapNativeSuper":13,"@scoutgg/widgets":61}],50:[function(require,module,exports){
var $$ = require('fn-pug/lib/runtime/vdom').default(require('virtual-dom/h'))
function template(__INIT__) {
  var splittedCode = this.splittedCode,
      errored = this.errored;

  let __RESULT__ = $$.init(this, __INIT__);

  let e$0 = $$.create("style");
  $$.child(e$0, $$.text(`:host {`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  display: flex;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  align-items: center;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  flex-direction: column;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  background-image: url(public/lock.jpeg);`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  background-size: cover;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  background-position: center;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  height: 100vh;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  width: 100vw;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`}`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`input[type="color"],`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`input[type="date"],`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`input[type="datetime"],`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`input[type="datetime-local"],`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`input[type="email"],`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`input[type="month"],`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`input[type="number"],`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`input[type="password"],`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`input[type="search"],`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`input[type="tel"],`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`input[type="text"],`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`input[type="time"],`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`input[type="url"],`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`input[type="week"],`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`select:focus,`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`textarea {`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  font-size: 16px;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  caret-color: transparent;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`}`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`.code-container {`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  display: flex;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  flex-wrap: wrap;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`}`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`.code-block {`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  display: flex;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  align-items: center;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  justify-content: center;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  color: white;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  border: 2px solid white;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  height: 3em;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  width: 2em;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  margin: 5px;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  filter: drop-shadow(1px 1px 0px rgba(0, 0, 0, .7));`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`}`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`input {`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  position: fixed;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  top: 0;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  left: 0;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  height: 100vh;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  width: 100vw;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  opacity: 0;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`}`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`h3 {`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  color: red;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  font-size: 3em;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  filter: drop-shadow(1px 1px 0px rgba(0, 0, 0, .7));`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`}`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`h2 {`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  font-family: 'Cairo';`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  color: #fff;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  filter: drop-shadow(1px 1px 0px rgba(0, 0, 0, .7));`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  animation-name: pulse;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  animation-duration: 1s;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  animation-iteration-count: infinite;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`}`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`.error {`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  height: 3em;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`}`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`@keyframes pulse {`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  0% {`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`    opacity: 1;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  }`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  50% {`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`    opacity: .3;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  }`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  100% {`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`    opacity: 1;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  }`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`}`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(``));
  $$.child(__RESULT__, $$.element(e$0));
  let e$1 = $$.create("input");
  $$.attrs(e$1, {
    "type": "tel",
    "maxlength": this.code.length
  });
  $$.events(e$1, this, [["input", e => this.updateInput(e)]]);
  $$.child(__RESULT__, $$.element(e$1));
  let e$2 = $$.create("h2");
  $$.child(e$2, $$.text(`Tast løsningen:`));
  $$.child(__RESULT__, $$.element(e$2));
  let e$3 = $$.create("div");
  $$.attrs(e$3, {
    "class": 'code-container'
  });
  $$.each(splittedCode, input => {
    let e$4 = $$.create("div");
    $$.attrs(e$4, {
      "class": 'code-block'
    });
    $$.child(e$4, $$.text(input));
    $$.child(e$3, $$.element(e$4));
  });
  $$.child(__RESULT__, $$.element(e$3));
  let e$5 = $$.create("div");
  $$.attrs(e$5, {
    "class": 'error'
  });

  if (errored) {
    let e$6 = $$.create("h3");
    $$.child(e$6, $$.text(`Feil kode!`));
    $$.child(e$5, $$.element(e$6));
  }

  $$.child(__RESULT__, $$.element(e$5));
  return $$.end(__RESULT__);
}
module.exports = template
},{"fn-pug/lib/runtime/vdom":18,"virtual-dom/h":23}],51:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _widgets = require("@scoutgg/widgets");

var _solved = _interopRequireDefault(require("./solved.pug"));

var _dec, _dec2, _class;

var Solved = (_dec = (0, _widgets.Component)('kode'), _dec2 = (0, _widgets.Template)(_solved.default), _dec(_class = _dec2(_class =
/*#__PURE__*/
function (_HTMLElement) {
  (0, _inherits2.default)(Solved, _HTMLElement);

  function Solved() {
    (0, _classCallCheck2.default)(this, Solved);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Solved).apply(this, arguments));
  }

  return Solved;
}((0, _wrapNativeSuper2.default)(HTMLElement))) || _class) || _class);
exports.default = Solved;

},{"./solved.pug":52,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":10,"@babel/runtime/helpers/wrapNativeSuper":13,"@scoutgg/widgets":61}],52:[function(require,module,exports){
var $$ = require('fn-pug/lib/runtime/vdom').default(require('virtual-dom/h'))
function template(__INIT__) {
  let __RESULT__ = $$.init(this, __INIT__);

  let e$0 = $$.create("style");
  $$.child(e$0, $$.text(`:host {`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  box-sizing: border-box;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  display: block;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  padding: .5em;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  height: 100vh;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  width: 100vw;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  background-image: url(public/bryggen.jpg);`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  background-size: cover;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  color: #fff;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  font-family: 'Cairo';`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`}`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`img {`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  width: 100%;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`}`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`h1.color {`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  color: #ffd800;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  margin: 0px;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`}`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`.simple {`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  margin: 0px;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`}`));
  $$.child(__RESULT__, $$.element(e$0));
  let e$1 = $$.create("img");
  $$.attrs(e$1, {
    "src": "public/escape.png"
  });
  $$.child(__RESULT__, $$.element(e$1));
  let e$2 = $$.create("h1");
  $$.child(e$2, $$.text(`RIKTIG KODE!`));
  $$.child(__RESULT__, $$.element(e$2));
  let e$3 = $$.create("h2");
  $$.child(e$3, $$.text(`Gaven er et gavekort på 1500kr til Escape Bryggen.`));
  $$.child(__RESULT__, $$.element(e$3));
  let e$4 = $$.create("h2");
  $$.attrs(e$4, {
    "class": 'simple'
  });
  $$.child(e$4, $$.text(`Gavekort kode:`));
  $$.child(__RESULT__, $$.element(e$4));
  let e$5 = $$.create("h1");
  $$.attrs(e$5, {
    "class": 'color'
  });
  $$.child(e$5, $$.text(`XXXXXXX`));
  $$.child(__RESULT__, $$.element(e$5));
  return $$.end(__RESULT__);
}
module.exports = template
},{"fn-pug/lib/runtime/vdom":18,"virtual-dom/h":23}],53:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _widgets = require("@scoutgg/widgets");

var _vdom = require("@scoutgg/widgets/cjs/renderers/vdom");

var _rerender = _interopRequireDefault(require("@scoutgg/widgets/cjs/plugins/rerender.js"));

var _utils = require("./utils");

var _patch = _interopRequireDefault(require("virtual-dom/patch"));

var _h = _interopRequireDefault(require("virtual-dom/h"));

var _diff = _interopRequireDefault(require("virtual-dom/diff"));

require("./pages/home/home"); // Import the components you want to use


if (module.hot) {
  module.hot.accept();
}

var routerElem = document.body.querySelector('kode-home');

if (!routerElem) {
  var element = document.createElement('kode-home');
  document.body.appendChild(element);
} // Bootstrap Widgets (Start it)


(0, _widgets.bootstrap)([_utils.emit, (0, _vdom.vdom)({
  patch: _patch.default,
  VNode: _h.default,
  diff: _diff.default
}), (0, _rerender.default)({})]);

},{"./pages/home/home":54,"./utils":56,"@babel/runtime/helpers/interopRequireDefault":8,"@scoutgg/widgets":61,"@scoutgg/widgets/cjs/plugins/rerender.js":62,"@scoutgg/widgets/cjs/renderers/vdom":64,"virtual-dom/diff":22,"virtual-dom/h":23,"virtual-dom/patch":25}],54:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _widgets = require("@scoutgg/widgets");

var _home = _interopRequireDefault(require("./home.pug"));

var _config = _interopRequireDefault(require("../../../config"));

require("../../components/lock/lock");

require("../../components/solved/solved");

var _dec, _dec2, _class;

var Home = (_dec = (0, _widgets.Component)('kode'), _dec2 = (0, _widgets.Template)(_home.default), _dec(_class = _dec2(_class =
/*#__PURE__*/
function (_HTMLElement) {
  (0, _inherits2.default)(Home, _HTMLElement);

  function Home() {
    (0, _classCallCheck2.default)(this, Home);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Home).apply(this, arguments));
  }

  (0, _createClass2.default)(Home, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.userInput = '';
      this.code = _config.default.code;
      this.player = new Audio('public/millionaire.mp3');
    }
  }, {
    key: "solve",
    value: function solve() {
      this.solved = true;
      this.render();
    }
  }, {
    key: "play",
    value: function play() {
      this.player.loop = true;
      this.player.play();
      this.started = true;
      this.render();
    }
  }]);
  return Home;
}((0, _wrapNativeSuper2.default)(HTMLElement))) || _class) || _class);
exports.default = Home;

},{"../../../config":1,"../../components/lock/lock":49,"../../components/solved/solved":51,"./home.pug":55,"@babel/runtime/helpers/classCallCheck":3,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":10,"@babel/runtime/helpers/wrapNativeSuper":13,"@scoutgg/widgets":61}],55:[function(require,module,exports){
var $$ = require('fn-pug/lib/runtime/vdom').default(require('virtual-dom/h'))
function template(__INIT__) {
  var started = this.started;

  let __RESULT__ = $$.init(this, __INIT__);

  let e$0 = $$.create("style");
  $$.child(e$0, $$.text(`body {`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  margin: 0;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  padding: 0;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`}`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`.cover {`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  display: flex;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  flex-direction: column;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  align-items: center;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  justify-content: center;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  background-image: url(public/question.jpg);`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  background-size: cover;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  background-position: center;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  color: #fff;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  height: 100vh;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  width: 100vw;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  filter: drop-shadow(1px 1px 0px rgba(0, 0, 0, .7));`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  box-sizing: border-box;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`}`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`.explain {`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  filter: drop-shadow(2px 2px 0px rgba(0, 0, 0, .7));`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  font-size: 2em;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  text-align: center;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`}`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`a {`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  background-color: yellow;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  font-size: 3em;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  padding: .5em;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  border-radius: 50px;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  color: #000;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`  margin-top: 1em;`));
  $$.child(e$0, $$.text(`
`));
  $$.child(e$0, $$.text(`}`));
  $$.child(__RESULT__, $$.element(e$0));

  if (!started) {
    let e$1 = $$.create("div");
    $$.attrs(e$1, {
      "class": 'cover'
    });
    let e$2 = $$.create("div");
    $$.attrs(e$2, {
      "class": 'explain'
    });
    $$.child(e$2, $$.text(`Du må løse en kode for å vite hva gaven er`));
    $$.child(e$1, $$.element(e$2));
    let e$3 = $$.create("a");
    $$.attrs(e$3, {
      "href": "#"
    });
    $$.events(e$3, this, [["click", e => this.play()]]);
    $$.child(e$3, $$.text(`Start!`));
    $$.child(e$1, $$.element(e$3));
    $$.child(__RESULT__, $$.element(e$1));
  }

  if (!this.solved && this.started) {
    var code = this.code;
    let e$4 = $$.create("kode-lock");
    $$.attrs(e$4, {
      "code": code,
      "user-input": ""
    });
    $$.events(e$4, this, [["solved", e => this.solve()]]);
    $$.child(__RESULT__, $$.element(e$4));
  }

  if (this.solved && this.started) {
    let e$5 = $$.create("kode-solved");
    $$.child(__RESULT__, $$.element(e$5));
  }

  return $$.end(__RESULT__);
}
module.exports = template
},{"fn-pug/lib/runtime/vdom":18,"virtual-dom/h":23}],56:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emit = emit;
exports.input = input;

function emit(Class) {
  Object.assign(Class.prototype, {
    emit: function emit(eventName, data) {
      var event = new CustomEvent(eventName);
      event = Object.assign(event, data);
      this.dispatchEvent(event);
    }
  });
}

function input(property, klass) {
  var prop = Symbol.for(property);
  return function define(Class) {
    Object.defineProperty(Class.prototype, property, {
      configurable: true,
      get: function get() {
        return this[prop];
      },
      set: function set(value) {
        if (this[prop] !== value) this.render(this[prop] = value);
      }
    });
  };
}

},{}],57:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Attribute = Attribute;

var _utils = require("../utils.js");

function Attribute(name, type, options = {
  default: ''
}) {
  const property = (0, _utils.camelCase)(name);
  const attribute = (0, _utils.kebabCase)(name);
  return function define(Class) {
    if (!Class.observedAttributes) {
      Class.observedAttributes = [];
    }

    Class.observedAttributes.push(attribute);
    Object.defineProperty(Class.prototype, property, {
      enumerable: true,
      configurable: true,

      get() {
        if (type === Boolean) {
          return this.hasAttribute(attribute);
        }

        const value = this.getAttribute(attribute);

        if (type.instance) {
          return type.instance(value === null ? options.default : value);
        } else {
          return type(value === null ? options.default : value);
        }
      },

      set(value) {
        if (type === Boolean) {
          if (value) {
            this.setAttribute(attribute, '');
          } else {
            this.removeAttribute(attribute);
          }
        } else {
          this.setAttribute(attribute, value);
        }
      }

    });
  };
}

},{"../utils.js":65}],58:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = Component;
exports.getTagName = getTagName;
exports.register = register;
exports.bootstrap = bootstrap;

var _utils = require("../utils.js");

const COMPONENTS = [];
const sggWidgets = Symbol.for('sggWidgets');

function Component(namespace) {
  return function define(Class) {
    Class.namespace = namespace;

    if (customElements[sggWidgets]) {
      return register(Class);
    }

    COMPONENTS.push(Class);
  };
}

function getTagName(Class) {
  if (Class.tagName) return Class.tagName;
  const {
    namespace,
    className
  } = Class;
  const name = className || Class.name;
  return Class.tagName = (0, _utils.kebabCase)(namespace + name);
}

function register(component) {
  const tagName = getTagName(component);
  const plugins = customElements[sggWidgets];
  const Component = (0, _utils.define)(plugins, component);
  const Element = customElements.get(tagName);

  if (Element) {
    return (0, _utils.transfer)(Element, Component);
  }

  customElements.define(tagName, Component);
}

function bootstrap(plugins = []) {
  customElements[sggWidgets] = plugins;

  for (const component of COMPONENTS) {
    register(component);
  }
}

},{"../utils.js":65}],59:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Input;

function Input(property) {
  const prop = Symbol.for(property);
  return function define(Class) {
    Object.defineProperty(Class.prototype, property, {
      configurable: true,

      get() {
        return this[prop];
      },

      set(value) {
        if (this[prop] !== value) this.render(this[prop] = value);
      }

    });
  };
}

},{}],60:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Template = Template;

function Template(template) {
  return function define(Class) {
    Class.prototype.template = template;
  };
}

},{}],61:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Component: true,
  bootstrap: true,
  Template: true,
  Attribute: true,
  Input: true
};
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function () {
    return _component.Component;
  }
});
Object.defineProperty(exports, "bootstrap", {
  enumerable: true,
  get: function () {
    return _component.bootstrap;
  }
});
Object.defineProperty(exports, "Template", {
  enumerable: true,
  get: function () {
    return _template.Template;
  }
});
Object.defineProperty(exports, "Attribute", {
  enumerable: true,
  get: function () {
    return _attribute.Attribute;
  }
});
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: function () {
    return _input.Input;
  }
});

var _component = require("./decorators/component.js");

var _template = require("./decorators/template.js");

var _attribute = require("./decorators/attribute.js");

var _input = require("./decorators/input.js");

var _utils = require("./utils.js");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _utils[key];
    }
  });
});

},{"./decorators/attribute.js":57,"./decorators/component.js":58,"./decorators/input.js":59,"./decorators/template.js":60,"./utils.js":65}],62:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rerender = rerender;
exports.default = rerenderPlugin;
exports.elements = void 0;

var _utils = require("../utils.js");

const elements = new Set();
exports.elements = elements;

function rerender() {
  return new Promise(resolve => {
    let pending = 0;

    function decrement() {
      if (--pending < 1) resolve();
    }

    for (const element of elements) {
      if (element.render && ++pending) {
        element.render(decrement);
      }
    }
  });
}

function rerenderPlugin(config) {
  return function define(Class) {
    (0, _utils.plugin)(Class.prototype, {
      connectedCallback(args, next) {
        elements.add(this);
        return next();
      },

      disconnectedCallback(args, next) {
        elements.delete(this);
        return next();
      }

    });
  };
}

},{"../utils.js":65}],63:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queue = queue;

var _utils = require("../utils.js");

function queue(render) {
  const queue = new Set();
  const cache = new WeakMap();
  const callbacks = new Set();

  function apply() {
    for (const node of queue) {
      render(node, cache);
    }
  }

  function attempt() {
    try {
      apply();
    } catch (error) {
      throw error;
    } finally {
      queue.clear();

      for (const callback of callbacks) {
        callback();
      }

      callbacks.clear();
    }
  }

  return function shedule(element, callback) {
    if (!queue.size) {
      requestAnimationFrame(attempt);
    }

    if (typeof callback === 'function') {
      callbacks.add(callback);
    }

    queue.add(element);
  };
}

},{"../utils.js":65}],64:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vdom = vdom;

var _utils = require("../utils.js");

var _queue = require("./queue.js");

function vdom({
  VNode,
  diff,
  patch
}) {
  const shedule = (0, _queue.queue)(function render(node, cache) {
    const target = node.shadowRoot || node;
    const previous = cache.get(node) || new VNode(target.tagName, null, []);
    const current = new VNode(target.tagName, null, node.template(node));
    const changes = diff(previous, current);
    cache.set(node, current);
    patch(target, changes);
  });
  return function define(Class) {
    (0, _utils.plugin)(Class.prototype, {
      attributeChangedCallback(args, next) {
        this.render();
        return next();
      },

      connectedCallback(args, next) {
        this.render();
        return next();
      },

      render([callback], next) {
        if (!this.shadowRoot) {
          this.attachShadow({
            mode: 'open'
          });
        }

        shedule(this, (...args) => {
          if (typeof callback === 'function') {
            callback(...args);
          }

          next();
        });
      }

    });
  };
}

},{"../utils.js":65,"./queue.js":63}],65:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kebabCase = kebabCase;
exports.camelCase = camelCase;
exports.define = define;
exports.middleware = middleware;
exports.plugin = plugin;
exports.transfer = transfer;
const UPPER = /.[A-Z]/g;

function kebabCase(string) {
  return string.replace(UPPER, c => c[0] + '-' + c[1].toLowerCase());
}

function camelCase(string) {
  return string.replace(/-./g, c => c[1].toUpperCase());
}

function define(decorators = [], target = decorators.pop()) {
  for (const transform of decorators.reverse()) {
    target = transform(target) || target;
  }

  return target;
}

function middleware(done) {
  const middleware = [];
  Object.assign(pipeline, {
    use(...callbacks) {
      return middleware.push(...callbacks), this;
    }

  });

  function pipeline(...args) {
    const context = {
      self: this,
      index: 0
    };

    function next() {
      const method = middleware[context.index++];

      if (method) {
        return method.call(context.self, args, next);
      } else if (done) {
        return done.apply(context.self, args);
      }
    }

    return next();
  }

  return pipeline;
}

function plugin(target, ...sources) {
  for (const source of sources) {
    for (const [property, method] of Object.entries(source)) {
      if (typeof method !== 'function') continue;

      if (!target[property]) {
        target[property] = middleware();
      } else if (!target[property].use) {
        target[property] = middleware(target[property]);
      }

      target[property].use(method);
    }
  }

  return target;
}

function transfer(target, ...sources) {
  for (const source of sources) {
    const properties = Object.getOwnPropertyDescriptors(source);

    for (const [name, descriptor] of Object.entries(properties)) {
      if (name === 'prototype') {
        transfer(target.prototype, source.prototype);
      }

      if (descriptor.configurable) {
        Object.defineProperty(target, name, descriptor);
      }
    }
  }
}

},{}]},{},[53]);
