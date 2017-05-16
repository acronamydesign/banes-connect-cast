/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/stylus-loader/index.js??ref--0-2!./index.styl", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/stylus-loader/index.js??ref--0-2!./index.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports
exports.i(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"-!../../../node_modules/css-loader/index.js!../lib/font/source-sans-pro/source-sans-pro.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())), "");

// module
exports.push([module.i, "body {\n  font-family: sans-serif;\n  display: none;\n}\n.stat-bar {\n  color: #fff;\n}\nsection.has-light-background,\nsection.has-light-background h1,\nsection.has-light-background h2,\nsection.has-light-background h3,\nsection.has-light-background h4,\nsection.has-light-background h5,\nsection.has-light-background h6 {\n  color: #222;\n}\nbody {\n  background: #333a42;\n  -webkit-transition: background-color 0.25s;\n  font-family: \"Source Sans Pro\", Helvetica, sans-serif;\n  background-color: #333a42;\n  margin: 0;\n}\n.reveal {\n  font-family: \"Source Sans Pro\", Helvetica, sans-serif;\n  font-size: 38px;\n  font-weight: normal;\n  color: #fff;\n}\n::selection {\n  color: #fff;\n  background: #bee4fd;\n  text-shadow: none;\n}\n.reveal .slides > section,\n.reveal .slides > section > section {\n  line-height: 1.3;\n  font-weight: inherit;\n  text-align: left;\n}\n.reveal h1,\n.reveal h2,\n.reveal h3,\n.reveal h4,\n.reveal h5,\n.reveal h6 {\n  margin: 0 0 20px 0;\n  color: #fff;\n  font-family: \"Source Sans Pro\", Helvetica, sans-serif;\n  font-weight: 600;\n  line-height: 1.2;\n  letter-spacing: normal;\n  text-transform: uppercase;\n  text-shadow: none;\n  word-wrap: break-word;\n}\n.reveal h1 {\n  font-size: 2.5em;\n}\n.reveal h2 {\n  font-size: 1.6em;\n}\n.reveal h3 {\n  font-size: 1.3em;\n}\n.reveal h4 {\n  font-size: 1em;\n}\n.reveal h1 {\n  text-shadow: none;\n}\n.reveal p {\n  margin: 20px 0;\n  line-height: 1.3;\n}\n.reveal img,\n.reveal video,\n.reveal iframe {\n  max-width: 95%;\n  max-height: 95%;\n}\n.reveal strong,\n.reveal b {\n  font-weight: bold;\n}\n.reveal em {\n  font-style: italic;\n}\n.reveal ol,\n.reveal dl,\n.reveal ul {\n  display: inline-block;\n  text-align: left;\n  margin: 0 0 0 1em;\n}\n.reveal ol {\n  list-style-type: decimal;\n}\n.reveal ul {\n  list-style-type: disc;\n}\n.reveal ul ul {\n  list-style-type: square;\n}\n.reveal ul ul ul {\n  list-style-type: circle;\n}\n.reveal ul ul,\n.reveal ul ol,\n.reveal ol ol,\n.reveal ol ul {\n  display: block;\n  margin-left: 40px;\n}\n.reveal dt {\n  font-weight: bold;\n}\n.reveal dd {\n  margin-left: 40px;\n}\n.reveal q,\n.reveal blockquote {\n  quotes: none;\n}\n.reveal blockquote {\n  display: block;\n  position: relative;\n  width: 70%;\n  margin: 20px auto;\n  padding: 5px;\n  font-style: italic;\n  background: rgba(255,255,255,0.05);\n  box-shadow: 0px 0px 2px rgba(0,0,0,0.2);\n}\n.reveal blockquote p:first-child,\n.reveal blockquote p:last-child {\n  display: inline-block;\n}\n.reveal q {\n  font-style: italic;\n}\n.reveal pre {\n  display: block;\n  position: relative;\n  width: 90%;\n  margin: 20px auto;\n  text-align: left;\n  font-size: 0.55em;\n  font-family: monospace;\n  line-height: 1.2em;\n  word-wrap: break-word;\n  box-shadow: 0px 0px 6px rgba(0,0,0,0.3);\n}\n.reveal code {\n  font-family: monospace;\n}\n.reveal pre code {\n  display: block;\n  padding: 5px;\n  overflow: auto;\n  max-height: 400px;\n  word-wrap: normal;\n}\n.reveal table {\n  margin: auto;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.reveal table th {\n  font-weight: bold;\n}\n.reveal table th,\n.reveal table td {\n  text-align: left;\n  padding: 0.2em 0.5em 0.2em 0.5em;\n  border-bottom: 1px solid;\n}\n.reveal table th[align=\"center\"],\n.reveal table td[align=\"center\"] {\n  text-align: center;\n}\n.reveal table th[align=\"right\"],\n.reveal table td[align=\"right\"] {\n  text-align: right;\n}\n.reveal table tr:last-child td {\n  border-bottom: none;\n}\n.reveal sup {\n  vertical-align: super;\n}\n.reveal sub {\n  vertical-align: sub;\n}\n.reveal small {\n  display: inline-block;\n  font-size: 0.6em;\n  line-height: 1.2em;\n  vertical-align: top;\n}\n.reveal small * {\n  vertical-align: top;\n}\n.reveal section img {\n  margin: 15px 0px;\n  background: rgba(255,255,255,0.12);\n  border: 4px solid #fff;\n  box-shadow: 0 0 10px rgba(0,0,0,0.15);\n}\n.reveal section img.plain {\n  border: 0;\n  box-shadow: none;\n}\n.reveal a img {\n  -webkit-transition: all 0.15s linear;\n  -moz-transition: all 0.15s linear;\n  transition: all 0.15s linear;\n}\n.reveal a:hover img {\n  background: rgba(255,255,255,0.2);\n  border-color: #42affa;\n  box-shadow: 0 0 20px rgba(0,0,0,0.55);\n}\n.reveal .controls .navigate-left,\n.reveal .controls .navigate-left.enabled {\n  border-right-color: #42affa;\n}\n.reveal .controls .navigate-right,\n.reveal .controls .navigate-right.enabled {\n  border-left-color: #42affa;\n}\n.reveal .controls .navigate-up,\n.reveal .controls .navigate-up.enabled {\n  border-bottom-color: #42affa;\n}\n.reveal .controls .navigate-down,\n.reveal .controls .navigate-down.enabled {\n  border-top-color: #42affa;\n}\n.reveal .controls .navigate-left.enabled:hover {\n  border-right-color: #8dcffc;\n}\n.reveal .controls .navigate-right.enabled:hover {\n  border-left-color: #8dcffc;\n}\n.reveal .controls .navigate-up.enabled:hover {\n  border-bottom-color: #8dcffc;\n}\n.reveal .controls .navigate-down.enabled:hover {\n  border-top-color: #8dcffc;\n}\n.reveal .progress {\n  background: rgba(0,0,0,0.2);\n}\n.reveal .progress span {\n  background: #42affa;\n  -webkit-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  -moz-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n}\n.reveal .progress {\n  height: 0.5em;\n  position: absolute;\n  bottom: 0;\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\n}\n.reveal .progress > span {\n  box-shadow: inset 0 -1px 0 rgba(0,0,0,0.15);\n}\n.reveal.default {\n  height: 90%;\n  height: calc(90vh - 32px);\n  position: absolute;\n  top: calc(10vh + 32px);\n}\n.stat-bar {\n  padding-top: 16px;\n  padding-bottom: 16px;\n  background-color: rgba(0,0,0,0.8);\n  background-image: url(\"data:image/png;base64,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\");\n  background-repeat: no-repeat;\n  background-size: auto 60%;\n  background-position: 12px center;\n  color: #fff;\n  height: 10vh;\n  width: 100%;\n  position: absolute;\n  font-weight: 100;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n@media screen and (min-width: 1400px) {\n  .stat-bar {\n    font-size: 2em;\n  }\n}\n@media screen and (min-width: 1400px) {\n  .stat-bar .stat-left {\n    margin-left: 2em;\n  }\n}\n.stat-bar .stat-center {\n  text-align: center;\n}\n.stat-bar .stat-right {\n  text-align: right;\n}\n@media screen and (min-width: 1400px) {\n  .stat-bar .stat-right {\n    margin-right: 2em;\n  }\n}\n.stat-bar .stat-left,\n.stat-bar .stat-center,\n.stat-bar .stat-right {\n  padding: 1em;\n  width: 33.3%;\n}\n.stat-bar .location {\n  text-transform: capitalize;\n  margin: 0;\n}\n.overlay {\n  color: #fff;\n  background-color: #000;\n  z-index: 9999;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3em;\n  flex-direction: column;\n  text-align: center;\n}\n.overlay.High {\n  background-color: rgba(231,75,61,0.97);\n}\n.overlay.Medium {\n  background-color: rgba(231,172,61,0.97);\n}\n.overlay h1 {\n  text-transform: uppercase;\n}\n.overlay .ebs-duration {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  text-align: center;\n  display: block;\n}\n.slides .message {\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  height: inherit;\n}\n.slide-background.feed.tint {\n  -webkit-box-shadow: inset 0px 0px 0px 9999em rgba(0,0,0,0.75);\n  -moz-box-shadow: inset 0px 0px 0px 9999em rgba(0,0,0,0.75);\n  box-shadow: inset 0px 0px 0px 9999em rgba(0,0,0,0.75);\n}\n.tint {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n}\n.tint h1 {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n}\n.slides section {\n  font-size: 1.75em;\n}\n", ""]);

// exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(4);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var css = __webpack_require__(0)

console.log(css)

/***/ })
/******/ ]);
//# sourceMappingURL=connect-cast.js.map