(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-component-module"],{

/***/ "./node_modules/@angular/http/fesm5/http.js":
/*!**************************************************!*\
  !*** ./node_modules/@angular/http/fesm5/http.js ***!
  \**************************************************/
/*! exports provided: ɵangular_packages_http_http_e, ɵangular_packages_http_http_f, ɵangular_packages_http_http_a, ɵangular_packages_http_http_b, ɵangular_packages_http_http_c, BrowserXhr, JSONPBackend, JSONPConnection, CookieXSRFStrategy, XHRBackend, XHRConnection, BaseRequestOptions, RequestOptions, BaseResponseOptions, ResponseOptions, ReadyState, RequestMethod, ResponseContentType, ResponseType, Headers, Http, Jsonp, HttpModule, JsonpModule, Connection, ConnectionBackend, XSRFStrategy, Request, Response, QueryEncoder, URLSearchParams, VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_e", function() { return BrowserJsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_f", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_a", function() { return _createDefaultCookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_b", function() { return httpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_c", function() { return jsonpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserXhr", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPBackend", function() { return JSONPBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPConnection", function() { return JSONPConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieXSRFStrategy", function() { return CookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRBackend", function() { return XHRBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRConnection", function() { return XHRConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRequestOptions", function() { return BaseRequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOptions", function() { return RequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResponseOptions", function() { return BaseResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseOptions", function() { return ResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyState", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMethod", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseContentType", function() { return ResponseContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseType", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jsonp", function() { return Jsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpModule", function() { return JsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionBackend", function() { return ConnectionBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSRFStrategy", function() { return XSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEncoder", function() { return QueryEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLSearchParams", function() { return URLSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license Angular v7.0.0
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * @deprecated see https://angular.io/guide/http
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
    BrowserXhr = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BrowserXhr);
    return BrowserXhr;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Supported http methods.
 * @deprecated see https://angular.io/guide/http
 */
var RequestMethod;
(function (RequestMethod) {
    RequestMethod[RequestMethod["Get"] = 0] = "Get";
    RequestMethod[RequestMethod["Post"] = 1] = "Post";
    RequestMethod[RequestMethod["Put"] = 2] = "Put";
    RequestMethod[RequestMethod["Delete"] = 3] = "Delete";
    RequestMethod[RequestMethod["Options"] = 4] = "Options";
    RequestMethod[RequestMethod["Head"] = 5] = "Head";
    RequestMethod[RequestMethod["Patch"] = 6] = "Patch";
})(RequestMethod || (RequestMethod = {}));
/**
 * All possible states in which a connection can be, based on
 * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
 * additional "CANCELLED" state.
 * @deprecated see https://angular.io/guide/http
 */
var ReadyState;
(function (ReadyState) {
    ReadyState[ReadyState["Unsent"] = 0] = "Unsent";
    ReadyState[ReadyState["Open"] = 1] = "Open";
    ReadyState[ReadyState["HeadersReceived"] = 2] = "HeadersReceived";
    ReadyState[ReadyState["Loading"] = 3] = "Loading";
    ReadyState[ReadyState["Done"] = 4] = "Done";
    ReadyState[ReadyState["Cancelled"] = 5] = "Cancelled";
})(ReadyState || (ReadyState = {}));
/**
 * Acceptable response types to be associated with a {@link Response}, based on
 * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
 * @deprecated see https://angular.io/guide/http
 */
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["Basic"] = 0] = "Basic";
    ResponseType[ResponseType["Cors"] = 1] = "Cors";
    ResponseType[ResponseType["Default"] = 2] = "Default";
    ResponseType[ResponseType["Error"] = 3] = "Error";
    ResponseType[ResponseType["Opaque"] = 4] = "Opaque";
})(ResponseType || (ResponseType = {}));
/**
 * Supported content type to be automatically associated with a {@link Request}.
 * @deprecated see https://angular.io/guide/http
 */
var ContentType;
(function (ContentType) {
    ContentType[ContentType["NONE"] = 0] = "NONE";
    ContentType[ContentType["JSON"] = 1] = "JSON";
    ContentType[ContentType["FORM"] = 2] = "FORM";
    ContentType[ContentType["FORM_DATA"] = 3] = "FORM_DATA";
    ContentType[ContentType["TEXT"] = 4] = "TEXT";
    ContentType[ContentType["BLOB"] = 5] = "BLOB";
    ContentType[ContentType["ARRAY_BUFFER"] = 6] = "ARRAY_BUFFER";
})(ContentType || (ContentType = {}));
/**
 * Define which buffer to use to store the response
 * @deprecated see https://angular.io/guide/http
 */
var ResponseContentType;
(function (ResponseContentType) {
    ResponseContentType[ResponseContentType["Text"] = 0] = "Text";
    ResponseContentType[ResponseContentType["Json"] = 1] = "Json";
    ResponseContentType[ResponseContentType["ArrayBuffer"] = 2] = "ArrayBuffer";
    ResponseContentType[ResponseContentType["Blob"] = 3] = "Blob";
})(ResponseContentType || (ResponseContentType = {}));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * import {Headers} from '@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var Headers = /** @class */ (function () {
    // TODO(vicb): any -> string|string[]
    function Headers(headers) {
        var _this = this;
        /** @internal header names are lower case */
        this._headers = new Map();
        /** @internal map lower case names to actual names */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     */
    Headers.fromResponseHeaderString = function (headersString) {
        var headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var index = line.indexOf(':');
            if (index > 0) {
                var name_1 = line.slice(0, index);
                var value = line.slice(index + 1).trim();
                headers.set(name_1, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     */
    Headers.prototype.append = function (name, value) {
        var values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     */
    Headers.prototype.delete = function (name) {
        var lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    Headers.prototype.forEach = function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     */
    Headers.prototype.get = function (name) {
        var values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     */
    Headers.prototype.has = function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     */
    Headers.prototype.keys = function () { return Array.from(this._normalizedNames.values()); };
    /**
     * Sets or overrides header value for given name.
     */
    Headers.prototype.set = function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     */
    Headers.prototype.values = function () { return Array.from(this._headers.values()); };
    /**
     * Returns string of all headers.
     */
    // TODO(vicb): returns {[name: string]: string[]}
    Headers.prototype.toJSON = function () {
        var _this = this;
        var serialized = {};
        this._headers.forEach(function (values, name) {
            var split = [];
            values.forEach(function (v) { return split.push.apply(split, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(v.split(','))); });
            serialized[_this._normalizedNames.get(name)] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     */
    Headers.prototype.getAll = function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) || null : null;
    };
    /**
     * This method is not implemented.
     */
    Headers.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); };
    Headers.prototype.mayBeSetNormalizedName = function (name) {
        var lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a response options object to be optionally provided when instantiating a
 * {@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {@link Response Responses} for
 * mock responses (see {@link MockBackend}).
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {ResponseOptions, Response} from '@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var ResponseOptions = /** @class */ (function () {
    function ResponseOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var body = opts.body, status = opts.status, headers = opts.headers, statusText = opts.statusText, type = opts.type, url = opts.url;
        this.body = body != null ? body : null;
        this.status = status != null ? status : null;
        this.headers = headers != null ? headers : null;
        this.statusText = statusText != null ? statusText : null;
        this.type = type != null ? type : null;
        this.url = url != null ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * @usageNotes
     * ### Example
     *
     * ```typescript
     * import {ResponseOptions, Response} from '@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     */
    ResponseOptions.prototype.merge = function (options) {
        return new ResponseOptions({
            body: options && options.body != null ? options.body : this.body,
            status: options && options.status != null ? options.status : this.status,
            headers: options && options.headers != null ? options.headers : this.headers,
            statusText: options && options.statusText != null ? options.statusText : this.statusText,
            type: options && options.type != null ? options.type : this.type,
            url: options && options.url != null ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
/**
 * Subclass of {@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link ResponseOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create {@link Response Responses}.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {provide} from '@angular/core';
 * import {bootstrap} from '@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {@link Response}
 * object.
 *
 * ### Example
 *
 * ```
 * import {BaseResponseOptions, Response} from '@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var BaseResponseOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseResponseOptions, _super);
    function BaseResponseOptions() {
        return _super.call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() }) || this;
    }
    BaseResponseOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BaseResponseOptions);
    return BaseResponseOptions;
}(ResponseOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {@link Request}.
 *
 * @deprecated see https://angular.io/guide/http
 */
var ConnectionBackend = /** @class */ (function () {
    function ConnectionBackend() {
    }
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * @deprecated see https://angular.io/guide/http
 */
var Connection = /** @class */ (function () {
    function Connection() {
    }
    return Connection;
}());
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * @deprecated see https://angular.io/guide/http
 */
var XSRFStrategy = /** @class */ (function () {
    function XSRFStrategy() {
    }
    return XSRFStrategy;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return RequestMethod.Get;
        case 'POST':
            return RequestMethod.Post;
        case 'PUT':
            return RequestMethod.Put;
        case 'DELETE':
            return RequestMethod.Delete;
        case 'OPTIONS':
            return RequestMethod.Options;
        case 'HEAD':
            return RequestMethod.Head;
        case 'PATCH':
            return RequestMethod.Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var isSuccess = function (status) { return (status >= 200 && status < 300); };
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
function stringToArrayBuffer(input) {
    var view = new Uint16Array(input.length);
    for (var i = 0, strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var map = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], 2), key = _a[0], val = _a[1];
            var list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * @deprecated see https://angular.io/guide/http
 **/
var QueryEncoder = /** @class */ (function () {
    function QueryEncoder() {
    }
    QueryEncoder.prototype.encodeKey = function (key) { return standardEncoding(key); };
    QueryEncoder.prototype.encodeValue = function (value) { return standardEncoding(value); };
    return QueryEncoder;
}());
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * @deprecated see https://angular.io/guide/http
 */
var URLSearchParams = /** @class */ (function () {
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    URLSearchParams.prototype.clone = function () {
        var clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
    URLSearchParams.prototype.get = function (param) {
        var storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
    URLSearchParams.prototype.set = function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.setAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.append = function (param, val) {
        if (val === void 0 || val === null)
            return;
        var list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.appendAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.replaceAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.toString = function () {
        var _this = this;
        var paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) { return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v)); });
        });
        return paramsList.join('&');
    };
    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * HTTP request body used by both {@link Request} and {@link Response}
 * https://fetch.spec.whatwg.org/#body
 */
var Body = /** @class */ (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     */
    Body.prototype.json = function () {
        if (typeof this._body === 'string') {
            return JSON.parse(this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     */
    Body.prototype.text = function (encodingHint) {
        if (encodingHint === void 0) { encodingHint = 'legacy'; }
        if (this._body instanceof URLSearchParams) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            switch (encodingHint) {
                case 'legacy':
                    return String.fromCharCode.apply(null, new Uint16Array(this._body));
                case 'iso-8859':
                    return String.fromCharCode.apply(null, new Uint8Array(this._body));
                default:
                    throw new Error("Invalid value for encodingHint: " + encodingHint);
            }
        }
        if (this._body == null) {
            return '';
        }
        if (typeof this._body === 'object') {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     */
    Body.prototype.arrayBuffer = function () {
        if (this._body instanceof ArrayBuffer) {
            return this._body;
        }
        return stringToArrayBuffer(this.text());
    };
    /**
      * Returns the request's body as a Blob, assuming that body exists.
      */
    Body.prototype.blob = function () {
        if (this._body instanceof Blob) {
            return this._body;
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * @deprecated see https://angular.io/guide/http
 */
var Response = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Response, _super);
    function Response(responseOptions) {
        var _this = _super.call(this) || this;
        _this._body = responseOptions.body;
        _this.status = responseOptions.status;
        _this.ok = (_this.status >= 200 && _this.status <= 299);
        _this.statusText = responseOptions.statusText;
        _this.headers = responseOptions.headers;
        _this.type = responseOptions.type;
        _this.url = responseOptions.url;
        return _this;
    }
    Response.prototype.toString = function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(Body));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _nextRequestId = 0;
var JSONP_HOME = '__ng_jsonp__';
var _jsonpConnections = null;
function _getJsonpConnections() {
    var w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
        _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
// Make sure not to evaluate this in a non-browser environment!
var BrowserJsonp = /** @class */ (function () {
    function BrowserJsonp() {
    }
    // Construct a <script> element with the specified URL
    BrowserJsonp.prototype.build = function (url) {
        var node = document.createElement('script');
        node.src = url;
        return node;
    };
    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
    BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
        var connections = _getJsonpConnections();
        connections[id] = connection;
    };
    BrowserJsonp.prototype.removeConnection = function (id) {
        var connections = _getJsonpConnections();
        connections[id] = null;
    };
    // Attach the <script> element to the DOM
    BrowserJsonp.prototype.send = function (node) { document.body.appendChild((node)); };
    // Remove <script> element from the DOM
    BrowserJsonp.prototype.cleanup = function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild((node));
        }
    };
    BrowserJsonp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BrowserJsonp);
    return BrowserJsonp;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Base class for an in-flight JSONP request.
 *
 * @deprecated see https://angular.io/guide/http
 */
var JSONPConnection = /** @class */ (function () {
    /** @internal */
    function JSONPConnection(req, _dom, baseResponseOptions) {
        var _this = this;
        this._dom = _dom;
        this.baseResponseOptions = baseResponseOptions;
        this._finished = false;
        if (req.method !== RequestMethod.Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            _this.readyState = ReadyState.Loading;
            var id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var callback = _dom.requestCallback(_this._id);
            var url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var script = _this._script = _dom.build(url);
            var onLoad = function (event) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new Response(responseOptions_1));
                    return;
                }
                var responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new Response(responseOptions));
                responseObserver.complete();
            };
            var onError = function (error) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                var responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = ReadyState.Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     */
    JSONPConnection.prototype.finished = function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === ReadyState.Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection;
}());
/**
 * A {@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * @deprecated see https://angular.io/guide/http
 */
var JSONPBackend = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(JSONPBackend, _super);
    /** @internal */
    function JSONPBackend(_browserJSONP, _baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._browserJSONP = _browserJSONP;
        _this._baseResponseOptions = _baseResponseOptions;
        return _this;
    }
    JSONPBackend.prototype.createConnection = function (request) {
        return new JSONPConnection(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [BrowserJsonp, ResponseOptions])
    ], JSONPBackend);
    return JSONPBackend;
}(ConnectionBackend));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {@link MockConnection} may be interacted with in tests.
 *
 * @deprecated see https://angular.io/guide/http
 */
var XHRConnection = /** @class */ (function () {
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            var _xhr = browserXHR.build();
            _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
            if (req.withCredentials != null) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var onLoad = function () {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = _xhr.status === 1223 ? 204 : _xhr.status;
                var body = null;
                // HTTP 204 means no content
                if (status !== 204) {
                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                    // response/responseType properties were introduced in ResourceLoader Level2 spec
                    // (supported by IE10)
                    body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                    // Implicitly strip a potential XSSI prefix.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
                // IE 9 does not provide the way to get URL of response
                var url = getResponseURL(_xhr) || req.url;
                var statusText = _xhr.statusText || 'OK';
                var responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var response = new Response(responseOptions);
                response.ok = isSuccess(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var onError = function (err) {
                var responseOptions = new ResponseOptions({
                    body: err,
                    type: ResponseType.Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (req.headers == null) {
                req.headers = new Headers();
            }
            if (!req.headers.has('Accept')) {
                req.headers.append('Accept', 'application/json, text/plain, */*');
            }
            req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
            // Select the correct buffer type to store the response
            if (req.responseType != null && _xhr.responseType != null) {
                switch (req.responseType) {
                    case ResponseContentType.ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case ResponseContentType.Json:
                        _xhr.responseType = 'json';
                        break;
                    case ResponseContentType.Text:
                        _xhr.responseType = 'text';
                        break;
                    case ResponseContentType.Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    XHRConnection.prototype.setDetectedContentType = function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
        // Skip if a custom Content-Type header is provided
        if (req.headers != null && req.headers.get('Content-Type') != null) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case ContentType.NONE:
                break;
            case ContentType.JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case ContentType.FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case ContentType.TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case ContentType.BLOB:
                var blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * @deprecated see https://angular.io/guide/http
 */
var CookieXSRFStrategy = /** @class */ (function () {
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    CookieXSRFStrategy.prototype.configureRequest = function (req) {
        var xsrfToken = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["ɵgetDOM"])().getCookie(this._cookieName);
        if (xsrfToken) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
/**
 * Creates {@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '@angular/http';
 * @Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * @deprecated see https://angular.io/guide/http
 */
var XHRBackend = /** @class */ (function () {
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    XHRBackend.prototype.createConnection = function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    XHRBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [BrowserXhr, ResponseOptions,
            XSRFStrategy])
    ], XHRBackend);
    return XHRBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a request options object to be optionally provided when instantiating a
 * {@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * const req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var RequestOptions = /** @class */ (function () {
    // TODO(Dzmitry): remove search when this.search is removed
    function RequestOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var method = opts.method, headers = opts.headers, body = opts.body, url = opts.url, search = opts.search, params = opts.params, withCredentials = opts.withCredentials, responseType = opts.responseType;
        this.method = method != null ? normalizeMethodName(method) : null;
        this.headers = headers != null ? headers : null;
        this.body = body != null ? body : null;
        this.url = url != null ? url : null;
        this.params = this._mergeSearchParams(params || search);
        this.withCredentials = withCredentials != null ? withCredentials : null;
        this.responseType = responseType != null ? responseType : null;
    }
    Object.defineProperty(RequestOptions.prototype, "search", {
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        get: function () { return this.params; },
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        set: function (params) { this.params = params; },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     */
    RequestOptions.prototype.merge = function (options) {
        return new RequestOptions({
            method: options && options.method != null ? options.method : this.method,
            headers: options && options.headers != null ? options.headers : new Headers(this.headers),
            body: options && options.body != null ? options.body : this.body,
            url: options && options.url != null ? options.url : this.url,
            params: options && this._mergeSearchParams(options.params || options.search),
            withCredentials: options && options.withCredentials != null ? options.withCredentials :
                this.withCredentials,
            responseType: options && options.responseType != null ? options.responseType :
                this.responseType
        });
    };
    RequestOptions.prototype._mergeSearchParams = function (params) {
        if (!params)
            return this.params;
        if (params instanceof URLSearchParams) {
            return params.clone();
        }
        if (typeof params === 'string') {
            return new URLSearchParams(params);
        }
        return this._parseParams(params);
    };
    RequestOptions.prototype._parseParams = function (objParams) {
        var _this = this;
        if (objParams === void 0) { objParams = {}; }
        var params = new URLSearchParams();
        Object.keys(objParams).forEach(function (key) {
            var value = objParams[key];
            if (Array.isArray(value)) {
                value.forEach(function (item) { return _this._appendParam(key, item, params); });
            }
            else {
                _this._appendParam(key, value, params);
            }
        });
        return params;
    };
    RequestOptions.prototype._appendParam = function (key, value, params) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        params.append(key, value);
    };
    return RequestOptions;
}());
/**
 * Subclass of {@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {@link RequestMethod RequestMethod.Get}
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link RequestOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create and send {@link Request Requests}.
 *
 * ```typescript
 * import {BaseRequestOptions, RequestOptions} from '@angular/http';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * {provide: RequestOptions, useClass: MyOptions};
 * ```
 *
 * The options could also be extended when manually creating a {@link Request}
 * object.
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new BaseRequestOptions();
 * const req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var BaseRequestOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseRequestOptions, _super);
    function BaseRequestOptions() {
        return _super.call(this, { method: RequestMethod.Get, headers: new Headers() }) || this;
    }
    BaseRequestOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BaseRequestOptions);
    return BaseRequestOptions;
}(RequestOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jeffbcross): properly implement body accessors
/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {@link Http} and
 * {@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '@angular/http';
 *
 * @Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var Request = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Request, _super);
    function Request(requestOptions) {
        var _this = _super.call(this) || this;
        // TODO: assert that url is present
        var url = requestOptions.url;
        _this.url = requestOptions.url;
        var paramsArg = requestOptions.params || requestOptions.search;
        if (paramsArg) {
            var params = void 0;
            if (typeof paramsArg === 'object' && !(paramsArg instanceof URLSearchParams)) {
                params = urlEncodeParams(paramsArg).toString();
            }
            else {
                params = paramsArg.toString();
            }
            if (params.length > 0) {
                var prefix = '?';
                if (_this.url.indexOf('?') != -1) {
                    prefix = (_this.url[_this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                _this.url = url + prefix + params;
            }
        }
        _this._body = requestOptions.body;
        _this.method = normalizeMethodName(requestOptions.method);
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        _this.headers = new Headers(requestOptions.headers);
        _this.contentType = _this.detectContentType();
        _this.withCredentials = requestOptions.withCredentials;
        _this.responseType = requestOptions.responseType;
        return _this;
    }
    /**
     * Returns the content type enum based on header options.
     */
    Request.prototype.detectContentType = function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return ContentType.JSON;
            case 'application/x-www-form-urlencoded':
                return ContentType.FORM;
            case 'multipart/form-data':
                return ContentType.FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return ContentType.TEXT;
            case 'application/octet-stream':
                return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     */
    Request.prototype.detectContentTypeFromBody = function () {
        if (this._body == null) {
            return ContentType.NONE;
        }
        else if (this._body instanceof URLSearchParams) {
            return ContentType.FORM;
        }
        else if (this._body instanceof FormData) {
            return ContentType.FORM_DATA;
        }
        else if (this._body instanceof Blob$1) {
            return ContentType.BLOB;
        }
        else if (this._body instanceof ArrayBuffer$1) {
            return ContentType.ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body === 'object') {
            return ContentType.JSON;
        }
        else {
            return ContentType.TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     */
    Request.prototype.getBody = function () {
        switch (this.contentType) {
            case ContentType.JSON:
                return this.text();
            case ContentType.FORM:
                return this.text();
            case ContentType.FORM_DATA:
                return this._body;
            case ContentType.TEXT:
                return this.text();
            case ContentType.BLOB:
                return this.blob();
            case ContentType.ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(Body));
function urlEncodeParams(params) {
    var searchParams = new URLSearchParams();
    Object.keys(params).forEach(function (key) {
        var value = params[key];
        if (value && Array.isArray(value)) {
            value.forEach(function (element) { return searchParams.append(key, element.toString()); });
        }
        else {
            searchParams.append(key, value.toString());
        }
    });
    return searchParams;
}
var noop = function () { };
var w = typeof window == 'object' ? window : noop;
var FormData = w /** TODO #9100 */['FormData'] || noop;
var Blob$1 = w /** TODO #9100 */['Blob'] || noop;
var ArrayBuffer$1 = w /** TODO #9100 */['ArrayBuffer'] || noop;

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return newOptions.merge(new RequestOptions({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            params: providedOpts.params,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        }));
    }
    return newOptions.merge(new RequestOptions({ method: method, url: url }));
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {@link Response} when a
 * response is received.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '@angular/http';
 * import {map} from 'rxjs/operators';
 *
 * @Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .pipe(map(res => res.json()))
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '@angular/http';
 * import {MockBackend} from '@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var Http = /** @class */ (function () {
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    Http.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
        }
        else if (url instanceof Request) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     */
    Http.prototype.get = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     */
    Http.prototype.post = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     */
    Http.prototype.put = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     */
    Http.prototype.delete = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     */
    Http.prototype.patch = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     */
    Http.prototype.head = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     */
    Http.prototype.options = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
    };
    Http = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ConnectionBackend, RequestOptions])
    ], Http);
    return Http;
}());
/**
 * @deprecated see https://angular.io/guide/http
 */
var Jsonp = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Jsonp, _super);
    function Jsonp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     *
     * @security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     */
    Jsonp.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            url =
                new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url));
        }
        if (url instanceof Request) {
            if (url.method !== RequestMethod.Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    Jsonp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ConnectionBackend, RequestOptions])
    ], Jsonp);
    return Jsonp;
}(Http));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function _createDefaultCookieXSRFStrategy() {
    return new CookieXSRFStrategy();
}
function httpFactory(xhrBackend, requestOptions) {
    return new Http(xhrBackend, requestOptions);
}
function jsonpFactory(jsonpBackend, requestOptions) {
    return new Jsonp(jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * @deprecated see https://angular.io/guide/http
 */
var HttpModule = /** @class */ (function () {
    function HttpModule() {
    }
    HttpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                // TODO(pascal): use factory type annotations once supported in DI
                // issue: https://github.com/angular/angular/issues/3183
                { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
                BrowserXhr,
                { provide: RequestOptions, useClass: BaseRequestOptions },
                { provide: ResponseOptions, useClass: BaseResponseOptions },
                XHRBackend,
                { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy },
            ],
        })
    ], HttpModule);
    return HttpModule;
}());
/**
 * The module that includes jsonp's providers
 *
 * @deprecated see https://angular.io/guide/http
 */
var JsonpModule = /** @class */ (function () {
    function JsonpModule() {
    }
    JsonpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                // TODO(pascal): use factory type annotations once supported in DI
                // issue: https://github.com/angular/angular/issues/3183
                { provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] },
                BrowserJsonp,
                { provide: RequestOptions, useClass: BaseRequestOptions },
                { provide: ResponseOptions, useClass: BaseResponseOptions },
                JSONPBackend,
            ],
        })
    ], JsonpModule);
    return JsonpModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @deprecated see https://angular.io/guide/http
 */
var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Version"]('7.0.0');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./src/app/component/accordion/accordion.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/accordion/accordion.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Toggle Accordion</h3>\r\n                <h6 class=\"card-subtitle\">This is basic toggletype accordion</h6>\r\n                <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\r\n\t\t\t\t  <ngb-panel title=\"Simple\">\r\n\t\t\t\t    <ng-template ngbPanelContent>\r\n\t\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n\t\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n\t\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n\t\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n\t\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n\t\t\t\t      labore sustainable VHS.\r\n\t\t\t\t    </ng-template>\r\n\t\t\t\t  </ngb-panel>\r\n\t\t\t\t  <ngb-panel>\r\n\t\t\t\t    <ng-template ngbPanelTitle>\r\n\t\t\t\t      <span>&#9733; <b>Fancy</b> title &#9733;</span>\r\n\t\t\t\t    </ng-template>\r\n\t\t\t\t    <ng-template ngbPanelContent>\r\n\t\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n\t\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n\t\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n\t\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n\t\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n\t\t\t\t      labore sustainable VHS.\r\n\t\t\t\t    </ng-template>\r\n\t\t\t\t  </ngb-panel>\r\n\t\t\t\t  <ngb-panel title=\"Disabled\" [disabled]=\"true\">\r\n\t\t\t\t    <ng-template ngbPanelContent>\r\n\t\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n\t\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n\t\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n\t\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n\t\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n\t\t\t\t      labore sustainable VHS.\r\n\t\t\t\t    </ng-template>\r\n\t\t\t\t  </ngb-panel>\r\n\t\t\t\t</ngb-accordion>\r\n  \t\t\t\t\t\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n        \t<div class=\"card-body\">\r\n        \t\t<h3 class=\"card-title\">Accordion</h3>\r\n                <h6 class=\"card-subtitle\">This is One open panel accordion</h6>\r\n        \t\t<ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\r\n\t\t\t\t  <ngb-panel id=\"static-1\" title=\"Simple\">\r\n\t\t\t\t    <ng-template ngbPanelContent>\r\n\t\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n\t\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n\t\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n\t\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n\t\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n\t\t\t\t      labore sustainable VHS.\r\n\t\t\t\t    </ng-template>\r\n\t\t\t\t  </ngb-panel>\r\n\t\t\t\t  <ngb-panel id=\"static-2\">\r\n\t\t\t\t    <ng-template ngbPanelTitle>\r\n\t\t\t\t      <span>&#9733; <b>Fancy</b> title &#9733;</span>\r\n\t\t\t\t    </ng-template>\r\n\t\t\t\t    <ng-template ngbPanelContent>\r\n\t\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n\t\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n\t\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n\t\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n\t\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n\t\t\t\t      labore sustainable VHS.\r\n\t\t\t\t    </ng-template>\r\n\t\t\t\t  </ngb-panel>\r\n\t\t\t\t  <ngb-panel id=\"static-3\" title=\"Disabled\" [disabled]=\"true\">\r\n\t\t\t\t    <ng-template ngbPanelContent>\r\n\t\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n\t\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n\t\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n\t\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n\t\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n\t\t\t\t      labore sustainable VHS.\r\n\t\t\t\t    </ng-template>\r\n\t\t\t\t  </ngb-panel>\r\n\t\t\t\t</ngb-accordion>\r\n        \t</div>\r\n        </div>\r\n        <div class=\"card\">\r\n        \t<div class=\"card-body\">\r\n        \t\t<h3 class=\"card-title\">Toggle Panel</h3>\r\n                <h6 class=\"card-subtitle\">This is toggle panel accordion</h6>\r\n                <ngb-accordion #acc=\"ngbAccordion\">\r\n\t\t\t\t  <ngb-panel id=\"toggle-1\" title=\"First panel\">\r\n\t\t\t\t    <ng-template ngbPanelContent>\r\n\t\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n\t\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n\t\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n\t\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n\t\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n\t\t\t\t      labore sustainable VHS.\r\n\t\t\t\t    </ng-template>\r\n\t\t\t\t  </ngb-panel>\r\n\t\t\t\t  <ngb-panel id=\"toggle-2\" title=\"Second\">\r\n\t\t\t\t    <ng-template ngbPanelContent>\r\n\t\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n\t\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n\t\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n\t\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n\t\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n\t\t\t\t      labore sustainable VHS.\r\n\t\t\t\t    </ng-template>\r\n\t\t\t\t  </ngb-panel>\r\n\t\t\t\t</ngb-accordion>\r\n\r\n\t\t\t\t<p class=\"m-t-40\">\r\n\t\t\t\t  \t<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"acc.toggle('toggle-1')\">Toggle first</button>\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"acc.toggle('toggle-2')\">Toggle second</button>\r\n\t\t\t\t</p>\r\n            </div>\r\n        </div> \r\n        <div class=\"card\">\r\n        \t<div class=\"card-body\">\r\n        \t\t<h3 class=\"card-title\">Prevent panel toggle</h3>\r\n                <h6 class=\"card-subtitle\">This is prevent toggle panel accordion</h6>\r\n                <ngb-accordion (panelChange)=\"beforeChange($event)\">\r\n\t\t\t\t  <ngb-panel id=\"preventchange-1\" title=\"Simple\">\r\n\t\t\t\t    <ng-template ngbPanelContent>\r\n\t\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n\t\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n\t\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n\t\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n\t\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n\t\t\t\t      labore sustainable VHS.\r\n\t\t\t\t    </ng-template>\r\n\t\t\t\t  </ngb-panel>\r\n\t\t\t\t  <ngb-panel id=\"preventchange-2\" title=\"I can't be toggled...\">\r\n\t\t\t\t    <ng-template ngbPanelContent>\r\n\t\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n\t\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n\t\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n\t\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n\t\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n\t\t\t\t      labore sustainable VHS.\r\n\t\t\t\t    </ng-template>\r\n\t\t\t\t  </ngb-panel>\r\n\t\t\t\t  <ngb-panel id=\"preventchange-3\" title=\"I can be opened, but not closed...\">\r\n\t\t\t\t    <ng-template ngbPanelContent>\r\n\t\t\t\t      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n\t\t\t\t      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n\t\t\t\t      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n\t\t\t\t      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n\t\t\t\t      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n\t\t\t\t      labore sustainable VHS.\r\n\t\t\t\t    </ng-template>\r\n\t\t\t\t  </ngb-panel>\r\n\t\t\t\t</ngb-accordion>\r\n            </div>\r\n        </div>             \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/accordion/accordion.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/accordion/accordion.component.ts ***!
  \************************************************************/
/*! exports provided: NgbdAccordionBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdAccordionBasicComponent", function() { return NgbdAccordionBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdAccordionBasicComponent = /** @class */ (function () {
    function NgbdAccordionBasicComponent() {
    }
    NgbdAccordionBasicComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    NgbdAccordionBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngbd-accordion-basic',
            template: __webpack_require__(/*! ./accordion.component.html */ "./src/app/component/accordion/accordion.component.html")
        })
    ], NgbdAccordionBasicComponent);
    return NgbdAccordionBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/alert/alert.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/alert/alert.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Basic Alert</h3>\r\n                <h6 class=\"card-subtitle\">This is basic alert</h6>\r\n                <ngb-alert [dismissible]=\"false\">\r\n                    <strong>Warning!</strong> Better check yourself, you're not looking too good.\r\n                  </ngb-alert>\r\n                    \r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Closeable Alert</h3>\r\n                <h6 class=\"card-subtitle\">This is closeable alert</h6>\r\n                <p *ngFor=\"let alert of alerts\">\r\n                  <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\">{{ alert.message }}</ngb-alert>\r\n                </p>\r\n                <p>\r\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\r\n                </p>\r\n                    \r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Self Closing  Alert</h3>\r\n                <h6 class=\"card-subtitle\">Static self-closing alert that disappears after 20 seconds (refresh the page if it has already disappeared)</h6>\r\n                <ngb-alert *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">Check out our awesome new features!</ngb-alert>\r\n                <p>Show a self-closing success message that disappears after 5 seconds.</p>\r\n                <ngb-alert *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert>   \r\n                <p>\r\n                  <button class=\"btn btn-primary\" (click)=\"changeSuccessMessage()\">Change message</button>\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Custom Alert</h3>\r\n                <p>\r\n                  <ngb-alert type=\"custom\" [dismissible]=\"false\"><strong>Whoa!</strong> This is a custom alert.</ngb-alert>\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Global Configuration of Alert</h3>\r\n                <p>\r\n                  <ngb-alert>\r\n                    This alert's type is success and it's not dismissible because the config has been customized\r\n                  </ngb-alert>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/alert/alert.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/alert/alert.component.ts ***!
  \****************************************************/
/*! exports provided: NgbdAlertBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdAlertBasicComponent", function() { return NgbdAlertBasicComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgbdAlertBasicComponent = /** @class */ (function () {
    function NgbdAlertBasicComponent() {
        // this is for the Closeable Alert
        this.alerts = [];
        // End the Closeable Alert
        // This is for the self closing alert
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.staticAlertClosed = false;
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert'
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert'
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NgbdAlertBasicComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    NgbdAlertBasicComponent.prototype.reset = function () {
        this.alerts = this.backup.map(function (alert) { return Object.assign({}, alert); });
    };
    NgbdAlertBasicComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return (_this.staticAlertClosed = true); }, 20000);
        this._success.subscribe(function (message) { return (_this.successMessage = message); });
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(5000)).subscribe(function () { return (_this.successMessage = null); });
    };
    NgbdAlertBasicComponent.prototype.changeSuccessMessage = function () {
        this._success.next(new Date() + " - Message successfully changed.");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], NgbdAlertBasicComponent.prototype, "alerts", void 0);
    NgbdAlertBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ngbd-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/component/alert/alert.component.html"),
            styles: ["\n    :host >>> .alert-custom {\n      color: #99004d;\n      background-color: #f169b4;\n      border-color: #800040;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], NgbdAlertBasicComponent);
    return NgbdAlertBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/buttons/buttons.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/buttons/buttons.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-12 col-xlg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">General Buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-success</code> to quickly create a General btn.</h6>\r\n                <div class=\"button-group\">\r\n                    <button type=\"button\" class=\"btn btn-primary\">Primary</button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\">Secondary</button>\r\n                    <button type=\"button\" class=\"btn btn-success\">Success</button>\r\n                    <button type=\"button\" class=\"btn btn-info\">Info</button>\r\n                    <button type=\"button\" class=\"btn btn-warning\">Warning</button>\r\n                    <button type=\"button\" class=\"btn btn-danger\">Danger</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-12 col-xlg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Button with outline</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-outline-success</code> to quickly create a General btn.</h6>\r\n                <div class=\"button-group\">\r\n                    <button type=\"button\" class=\"btn btn-outline-primary\">Primary</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-secondary\">Secondary</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-success\">Success</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-info\">Info</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-warning\">Warning</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-danger\">Danger</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-12 col-xlg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Rounded Buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-rounded btn-success</code> to quickly create a General btn.</h6>\r\n                <div class=\"button-group\">\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-primary\">Primary</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-secondary\">Secondary</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-success\">Success</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-info\">Info</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-warning\">Warning</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-danger\">Danger</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-12 col-xlg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Rounded outlined Buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-rounded btn-outline-success</code> to quickly create a General btn.</h6>\r\n                <div class=\"button-group\">\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-outline-primary\">Primary</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-outline-secondary\">Secondary</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-outline-success\">Success</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-outline-info\">Info</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-outline-warning\">Warning</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-outline-danger\">Danger</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Button Sizes</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-lg btn-success</code> to quickly create a General btn.</h6>\r\n                <div class=\"button-group\">\r\n                    <button type=\"button\" class=\"btn btn-lg btn-primary\">Large .btn-lg </button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\">Normal .btn</button>\r\n                    <button type=\"button\" class=\"btn btn-sm btn-success\">Small .btn-sm</button>\r\n                    <button type=\"button\" class=\"btn btn-xs btn-info\">Tiny .btn-xs</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Button Sizes with rounded</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-lg btn-rounded btn-success</code> to create a btn.</h6>\r\n                <div class=\"button-group\">\r\n                    <button type=\"button\" class=\"btn btn-lg btn-rounded btn-primary\">Large .btn-lg </button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-secondary\">Normal .btn</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-sm btn-success\">Small .btn-sm</button>\r\n                    <button type=\"button\" class=\"btn btn-rounded btn-xs btn-info\">Tiny .btn-xs</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Block buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-block btn-success</code> to quickly create a General btn.</h6>\r\n                <div class=\"row button-group\">\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-info\">Info</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-success\">Success</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-primary\">Primary</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-danger\">Danger</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-secondary\">Secondary</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-warning\">Warning</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Rounded Block buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-block btn-success</code> to quickly create a General btn.</h6>\r\n                <div class=\"row button-group\">\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-info\">Info</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-success\">Success</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-primary\">Primary</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-danger\">Danger</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-secondary\">Secondary</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-warning\">Warning</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Block outline buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-block btn-outline-success</code> to quickly create a General btn.</h6>\r\n                <div class=\"row button-group\">\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-outline-info\">Info</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-outline-success\">Success</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-outline-primary\">Primary</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-outline-danger\">Danger</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-outline-secondary\">Secondary</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-outline-warning\">Warning</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Rounded outline Block buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-block btn-outline-success</code> to quickly create a General btn.</h6>\r\n                <div class=\"row button-group\">\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-outline-info\">Info</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-outline-success\">Success</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-outline-primary\">Primary</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-outline-danger\">Danger</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-outline-secondary\">Secondary</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-rounded btn-block btn-outline-warning\">Warning</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Large Block buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-block btn-lg btn-success</code> to quickly create a General btn.</h6>\r\n                <div class=\"row button-group\">\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-lg btn-info\">Info</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-lg btn-success\">Success</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-lg btn-primary\">Primary</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-lg btn-danger\">Danger</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-lg btn-secondary\">Second</button>\r\n                    </div>\r\n                    <div class=\"col-lg-2 col-md-4\">\r\n                        <button type=\"button\" class=\"btn btn-block btn-lg btn-warning\">Warning</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Button with icon</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-success</code> & <code>i class =\"fa fa-heart\"</code> to quickly create a General btn.</h6>\r\n                <div class=\"row button-group\">\r\n                    <div class=\"col-lg-12 col-xlg-6 m-b-30\">\r\n                        <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-check\"></i> Primary</button>\r\n                        <button type=\"button\" class=\"btn btn-secondary\">Secondary <i class=\"fa fa-heart\"></i></button>\r\n                        <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-check\"></i> Success</button>\r\n                        <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-heart\"></i> Info</button>\r\n                        <button type=\"button\" class=\"btn btn-warning\"><i class=\"fa fa-heart\"></i> Warning</button>\r\n                        <button type=\"button\" class=\"btn btn-danger\"><i class=\"fa fa-heart\"></i> Danger</button>\r\n                    </div>\r\n                    <div class=\"col-lg-12 col-xlg-6 m-b-30\">\r\n                        <button class=\"btn btn-primary waves-effect waves-light\" type=\"button\"><span class=\"btn-label\"><i class=\"fa fa-envelope-o\"></i></span>Mail</button>\r\n                        <button class=\"btn btn-secondary waves-effect waves-light\" type=\"button\"><span class=\"btn-label\"><i class=\"fa fa-check\"></i></span>Check</button>\r\n                        <button class=\"btn btn-info waves-effect waves-light\" type=\"button\"><span class=\"btn-label\"><i class=\"fa fa-heart\"></i></span>Heart</button>\r\n                        <button class=\"btn btn-warning waves-effect waves-light\" type=\"button\"><span class=\"btn-label\"><i class=\"fa fa-envelope-o\"></i></span>Mail</button>\r\n                        <button class=\"btn btn-danger waves-effect waves-light\" type=\"button\"><span class=\"btn-label\"><i class=\"fa fa-heart\"></i></span>Heart</button>\r\n                    </div>\r\n                    <div class=\"col-lg-12 col-xlg-6 m-b-30\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-rounded\"><i class=\"fa fa-check\"></i> Primary</button>\r\n                        <button type=\"button\" class=\"btn btn-secondary btn-rounded\">Secondary <i class=\"fa fa-heart\"></i></button>\r\n                        <button type=\"button\" class=\"btn btn-success btn-rounded\"><i class=\"fa fa-check\"></i> Success</button>\r\n                        <button type=\"button\" class=\"btn btn-info btn-rounded\"><i class=\"fa fa-heart\"></i> Info</button>\r\n                        <button type=\"button\" class=\"btn btn-warning btn-rounded\"><i class=\"fa fa-heart\"></i> Warning</button>\r\n                        <button type=\"button\" class=\"btn btn-danger btn-rounded\"><i class=\"fa fa-heart\"></i> Danger</button>\r\n                    </div>\r\n                    <div class=\"col-lg-12 col-xlg-6 m-b-30\">\r\n                        <button type=\"button\" class=\"btn btn-outline-primary\"><i class=\"fa fa-check\"></i> Primary</button>\r\n                        <button type=\"button\" class=\"btn btn-outline-secondary\">Secondary <i class=\"fa fa-heart\"></i></button>\r\n                        <button type=\"button\" class=\"btn btn-outline-success\"><i class=\"fa fa-check\"></i> Success</button>\r\n                        <button type=\"button\" class=\"btn btn-outline-info\"><i class=\"fa fa-heart\"></i> Info</button>\r\n                        <button type=\"button\" class=\"btn btn-outline-warning\"><i class=\"fa fa-heart\"></i> Warning</button>\r\n                        <button type=\"button\" class=\"btn btn-outline-danger\"><i class=\"fa fa-heart\"></i> Danger</button>\r\n                    </div>\r\n                    <div class=\"col-lg-12 col-xlg-6 m-b-30\">\r\n                        <button class=\"btn btn-outline-primary waves-effect waves-light\" type=\"button\"><span class=\"btn-label\"><i class=\"fa fa-envelope-o\"></i></span>Mail</button>\r\n                        <button class=\"btn btn-outline-secondary waves-effect waves-light\" type=\"button\"><span class=\"btn-label\"><i class=\"fa fa-check\"></i></span>Check</button>\r\n                        <button class=\"btn btn-outline-info waves-effect waves-light\" type=\"button\"><span class=\"btn-label\"><i class=\"fa fa-heart\"></i></span>Heart</button>\r\n                        <button class=\"btn btn-outline-warning waves-effect waves-light\" type=\"button\"><span class=\"btn-label\"><i class=\"fa fa-envelope-o\"></i></span>Mail</button>\r\n                        <button class=\"btn btn-outline-danger waves-effect waves-light\" type=\"button\"><span class=\"btn-label\"><i class=\"fa fa-heart\"></i></span>Heart</button>\r\n                    </div>\r\n                    <div class=\"col-lg-12 col-xlg-6 m-b-30\">\r\n                        <button type=\"button\" class=\"btn btn-outline-primary btn-rounded\"><i class=\"fa fa-check\"></i> Primary</button>\r\n                        <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded\">Secondary <i class=\"fa fa-heart\"></i></button>\r\n                        <button type=\"button\" class=\"btn btn-outline-success btn-rounded\"><i class=\"fa fa-check\"></i> Success</button>\r\n                        <button type=\"button\" class=\"btn btn-outline-info btn-rounded\"><i class=\"fa fa-heart\"></i> Info</button>\r\n                        <button type=\"button\" class=\"btn btn-outline-warning btn-rounded\"><i class=\"fa fa-heart\"></i> Warning</button>\r\n                        <button type=\"button\" class=\"btn btn-outline-danger btn-rounded\"><i class=\"fa fa-heart\"></i> Danger</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6 button-group\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Circle buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-circle btn-success</code> to quickly create a General btn.</h6>\r\n                <button type=\"button\" class=\"btn btn-secondary btn-circle\"><i class=\"fa fa-check\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-circle\"><i class=\"fa fa-list\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-success btn-circle\"><i class=\"fa fa-link\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-info btn-circle\"><i class=\"fa fa-check\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-warning btn-circle\"><i class=\"fa fa-times\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-danger btn-circle\"><i class=\"fa fa-heart\"></i> </button>\r\n                <br>\r\n                <br>\r\n                <h4 class=\"card-title\">Circle Large buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-circle btn-lg btn-success</code> to quickly create a General btn.</h6>\r\n                <button type=\"button\" class=\"btn btn-secondary btn-circle btn-lg\"><i class=\"fa fa-check\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-circle btn-lg\"><i class=\"fa fa-list\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-success btn-circle btn-lg\"><i class=\"fa fa-link\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-info btn-circle btn-lg\"><i class=\"fa fa-check\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-warning btn-circle btn-lg\"><i class=\"fa fa-times\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-danger btn-circle btn-lg\"><i class=\"fa fa-heart\"></i> </button>\r\n                <br>\r\n                <br>\r\n                <h4 class=\"card-title\">Circle xtra Large buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-circle btn-xl btn-success</code> to quickly create a General btn.</h6>\r\n                <button type=\"button\" class=\"btn btn-secondary btn-circle btn-xl\"><i class=\"fa fa-check\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-circle btn-xl\"><i class=\"fa fa-list\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-success btn-circle btn-xl\"><i class=\"fa fa-link\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-info btn-circle btn-xl\"><i class=\"fa fa-check\"></i> </button>\r\n                <button type=\"button\" class=\"btn btn-warning btn-circle btn-xl\"><i class=\"fa fa-times\"></i> </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6 button-group\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Social buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-facebook</code> to quickly create a General btn.</h6>\r\n                <button class=\"btn btn-facebook waves-effect waves-light\" type=\"button\"> <i class=\"fa fa-facebook\"></i> </button>\r\n                <button class=\"btn btn-twitter waves-effect waves-light\" type=\"button\"> <i class=\"fa fa-twitter\"></i> </button>\r\n                <button class=\"btn btn-googleplus waves-effect waves-light\" type=\"button\"> <i class=\"fa fa-google-plus\"></i> </button>\r\n                <button class=\"btn btn-linkedin waves-effect waves-light\" type=\"button\"> <i class=\"fa fa-linkedin\"></i> </button>\r\n                <button class=\"btn btn-instagram waves-effect waves-light\" type=\"button\"> <i class=\"fa fa-instagram\"></i> </button>\r\n                <button class=\"btn btn-pinterest waves-effect waves-light\" type=\"button\"> <i class=\"fa fa-pinterest\"></i> </button>\r\n                <button class=\"btn btn-dribbble waves-effect waves-light\" type=\"button\"> <i class=\"fa fa-dribbble\"></i> </button>\r\n                <button class=\"btn btn-youtube waves-effect waves-light\" type=\"button\"> <i class=\"fa fa-youtube\"></i> </button>\r\n                <br>\r\n                <br>\r\n                <h4 class=\"card-title\">With Circle buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-circle btn-success</code> to quickly create a General btn.</h6>\r\n                <button class=\"btn btn-facebook waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fa fa-facebook\"></i> </button>\r\n                <button class=\"btn btn-twitter waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fa fa-twitter\"></i> </button>\r\n                <button class=\"btn btn-googleplus waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fa fa-google-plus\"></i> </button>\r\n                <button class=\"btn btn-linkedin waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fa fa-linkedin\"></i> </button>\r\n                <button class=\"btn btn-instagram waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fa fa-instagram\"></i> </button>\r\n                <button class=\"btn btn-pinterest waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fa fa-pinterest\"></i> </button>\r\n                <button class=\"btn btn-dribbble waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fa fa-dribbble\"></i> </button>\r\n                <button class=\"btn btn-youtube waves-effect btn-circle waves-light\" type=\"button\"> <i class=\"fa fa-youtube\"></i> </button>\r\n                <br>\r\n                <br>\r\n                <h4 class=\"card-title\">with rounded buttons</h4>\r\n                <h6 class=\"card-subtitle\">Use a classes <code>btn btn-rounded btn-success</code> to quickly create a General btn.</h6>\r\n                <button class=\"btn btn-facebook waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fa fa-facebook\"></i> </button>\r\n                <button class=\"btn btn-twitter waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fa fa-twitter\"></i> </button>\r\n                <button class=\"btn btn-googleplus waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fa fa-google-plus\"></i> </button>\r\n                <button class=\"btn btn-linkedin waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fa fa-linkedin\"></i> </button>\r\n                <button class=\"btn btn-instagram waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fa fa-instagram\"></i> </button>\r\n                <button class=\"btn btn-pinterest waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fa fa-pinterest\"></i> </button>\r\n                <button class=\"btn btn-dribbble waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fa fa-dribbble\"></i> </button>\r\n                <button class=\"btn btn-youtube waves-effect btn-rounded waves-light\" type=\"button\"> <i class=\"fa fa-youtube\"></i> </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"row\">\r\n                <!-- column -->\r\n                <div class=\"col-xlg-6 col-lg-12 m-b-30\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Group buttons</h4>\r\n                        <h6 class=\"card-subtitle\">Wrap a series of buttons with <code class=\"highlighter-rouge\">.btn</code> in <code class=\"highlighter-rouge\">.btn-group</code></h6>\r\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Left</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Right</button>\r\n                        </div>\r\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                            <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-align-left\"></i></button>\r\n                            <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-align-justify\"></i></button>\r\n                            <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-align-right\"></i></button>\r\n                        </div>\r\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                            <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-fast-backward\"></i></button>\r\n                            <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-play\"></i></button>\r\n                            <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-fast-forward\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- column -->\r\n                <div class=\"col-xlg-6 col-lg-12 m-b-30\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Button toolbar pagination</h4>\r\n                        <h6 class=\"card-subtitle\">Wrap a series of buttons with <code class=\"highlighter-rouge\">.btn</code> in <code class=\"highlighter-rouge\">.btn-group</code></h6>\r\n                        <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n                            <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\r\n                                <button type=\"button\" class=\"btn btn-secondary disabled\">1</button>\r\n                                <button type=\"button\" class=\"btn btn-info\">2</button>\r\n                                <button type=\"button\" class=\"btn btn-secondary\">3</button>\r\n                                <button type=\"button\" class=\"btn btn-secondary\">4</button>\r\n                            </div>\r\n                            <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\r\n                                <button type=\"button\" class=\"btn btn-secondary\">5</button>\r\n                                <button type=\"button\" class=\"btn btn-secondary\">6</button>\r\n                                <button type=\"button\" class=\"btn btn-secondary\">7</button>\r\n                            </div>\r\n                            <div class=\"btn-group\" role=\"group\" aria-label=\"Third group\">\r\n                                <button type=\"button\" class=\"btn btn-secondary\">8</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- column -->\r\n                <!-- column -->\r\n                <div class=\"col-xlg-6 col-lg-12 m-b-30\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Group buttons sizing</h4>\r\n                        <h6 class=\"card-subtitle\">Wrap a series of buttons with <code class=\"highlighter-rouge\">.btn</code> in <code class=\"highlighter-rouge\">.btn-group</code></h6>\r\n                        <div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"Basic example\">\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Left</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Right</button>\r\n                        </div>\r\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                            <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-align-left\"></i></button>\r\n                            <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-align-justify\"></i></button>\r\n                            <button type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-align-right\"></i></button>\r\n                        </div>\r\n                        <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n                            <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-fast-backward\"></i></button>\r\n                            <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-play\"></i></button>\r\n                            <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-fast-forward\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- column -->\r\n                <!-- column -->\r\n                <div class=\"col-xlg-6 col-lg-12 m-b-30\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Vertical buttons</h4>\r\n                        <h6 class=\"card-subtitle\">creat vertical button with class of <code>.btn-group-vertical</code> </h6>\r\n                        <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"Vertical button group\">\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Button</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Button</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Button</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Button</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Button</button>\r\n                            <button type=\"button\" class=\"btn btn-secondary\">Button</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- column -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Checkbox buttons</h4>\r\n                <div class=\"btn-group btn-group-toggle\">\r\n                  <label class=\"btn-primary\" ngbButtonLabel>\r\n                    <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.left\"> Left (pre-checked)\r\n                  </label>\r\n                  <label class=\"btn-primary\" ngbButtonLabel>\r\n                    <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.middle\"> Middle\r\n                  </label>\r\n                  <label class=\"btn-primary\" ngbButtonLabel>\r\n                    <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.right\"> Right\r\n                  </label>\r\n                </div>\r\n                <hr>\r\n                <pre>{{model | json}}</pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Checkbox buttons(Reactive Forms)</h4>\r\n                <form [formGroup]=\"checkboxGroupForm\">\r\n                  <div class=\"btn-group btn-group-toggle\">\r\n                    <label class=\"btn-primary\" ngbButtonLabel>\r\n                      <input type=\"checkbox\" formControlName=\"left\" ngbButton> Left (pre-checked)\r\n                    </label>\r\n                    <label class=\"btn-primary\" ngbButtonLabel>\r\n                      <input type=\"checkbox\" formControlName=\"middle\" ngbButton> Middle\r\n                    </label>\r\n                    <label class=\"btn-primary\" ngbButtonLabel>\r\n                      <input type=\"checkbox\" formControlName=\"right\" ngbButton> Right\r\n                    </label>\r\n                  </div>\r\n                </form>\r\n                <hr>\r\n                <pre>{{checkboxGroupForm.value | json}}</pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Radio Buttons</h4>\r\n                <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"model1\">\r\n                  <label ngbButtonLabel class=\"btn-primary\">\r\n                    <input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\r\n                  </label>\r\n                  <label ngbButtonLabel class=\"btn-primary\">\r\n                    <input ngbButton type=\"radio\" value=\"middle\"> Middle\r\n                  </label>\r\n                  <label ngbButtonLabel class=\"btn-primary\">\r\n                    <input ngbButton type=\"radio\" [value]=\"false\"> Right\r\n                  </label>\r\n                </div>\r\n                <hr>\r\n                <pre>{{model1}}</pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Radio Buttons(Reactive Forms)</h4>\r\n                <form [formGroup]=\"radioGroupForm\">\r\n                  <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" formControlName=\"model\">\r\n                    <label ngbButtonLabel class=\"btn-primary\">\r\n                      <input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\r\n                    </label>\r\n                    <label ngbButtonLabel class=\"btn-primary\">\r\n                      <input ngbButton type=\"radio\" value=\"middle\"> Middle\r\n                    </label>\r\n                    <label ngbButtonLabel class=\"btn-primary\">\r\n                      <input ngbButton type=\"radio\" [value]=\"false\"> Right\r\n                    </label>\r\n                  </div>\r\n                </form>\r\n                <hr>\r\n                <pre>{{radioGroupForm.value['model']}}</pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/buttons/buttons.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/buttons/buttons.component.ts ***!
  \********************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.model = {
            left: true,
            middle: false,
            right: false
        };
        this.model1 = 1;
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ButtonsComponent.prototype.ngOnInit = function () {
        this.checkboxGroupForm = this.formBuilder.group({
            left: true,
            middle: false,
            right: false
        });
        this.radioGroupForm = this.formBuilder.group({
            model: 1
        });
    };
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/component/buttons/buttons.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/component/card/card.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/card/card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <h4 class=\"d-inline\">Card with Image code icon</h4>\r\n        <!-- Row -->\r\n        <div class=\"row\">\r\n            <!-- column -->\r\n            <div class=\"col-lg-3 col-md-6\">\r\n                <!-- Card -->\r\n                <div class=\"card\">\r\n                    <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img1.jpg\" alt=\"Card image cap\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Card title</h4>\r\n                        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n                    </div>\r\n                </div>\r\n                <!-- Card -->\r\n            </div>\r\n            <!-- column -->\r\n            <!-- column -->\r\n            <div class=\"col-lg-3 col-md-6\">\r\n                <!-- Card -->\r\n                <div class=\"card\">\r\n                    <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img2.jpg\" alt=\"Card image cap\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Card title</h4>\r\n                        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n                    </div>\r\n                </div>\r\n                <!-- Card -->\r\n            </div>\r\n            <!-- column -->\r\n            <!-- column -->\r\n            <div class=\"col-lg-3 col-md-6\">\r\n                <!-- Card -->\r\n                <div class=\"card\">\r\n                    <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img3.jpg\" alt=\"Card image cap\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Card title</h4>\r\n                        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n                    </div>\r\n                </div>\r\n                <!-- Card -->\r\n            </div>\r\n            <!-- column -->\r\n            <!-- column -->\r\n            <div class=\"col-lg-3 col-md-6 img-responsive\">\r\n                <!-- Card -->\r\n                <div class=\"card\">\r\n                    <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img4.jpg\" alt=\"Card image cap\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Card title</h4>\r\n                        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n                    </div>\r\n                </div>\r\n                <!-- Card -->\r\n            </div>\r\n            <!-- column -->\r\n        </div>\r\n        <!-- Row -->\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Content types</h4>\r\n        <p class=\"text-muted m-t-0\">The building block of a card is the\r\n            <code>.card</code>\r\n            <code>.card-body</code> Use it whenever you need a padded section within a card.</p>\r\n        <div class=\"card\">\r\n            <div class=\"card-body collapse show\">\r\n                <h4 class=\"card-title\">Special title treatment</h4>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Titles, text, and links</h4>\r\n        <p class=\"text-muted m-t-0\">Card titles are used by adding\r\n            <code>.card-title</code> &amp;\r\n            <code>.card-subtitle</code> for subtitle of card.</p>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Card title</h4>\r\n                <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>\r\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                <a href=\"#\" class=\"card-link\">Card link</a>\r\n                <a href=\"#\" class=\"card-link\">Another link</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Header and footer</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">Add an optional header and/or footer within a card.</p>\r\n        <!-- Card -->\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                Featured\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Special title treatment</h4>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n        <!-- Card -->\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Header and footer</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">Add an optional header and/or footer within a card. </p>\r\n        <!-- Card -->\r\n        <div class=\"card text-center\">\r\n            <div class=\"card-header\">\r\n                Featured\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Special title treatment</h4>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-info\">Go somewhere</a>\r\n            </div>\r\n            <div class=\"card-footer text-muted\">\r\n                2 days ago\r\n            </div>\r\n        </div>\r\n        <!-- Card -->\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Size Using grid markup</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">Using the grid, wrap cards in columns and rows as needed.\r\n            <code>.col-1 to .col-12</code>\r\n        </p>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-success\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Text alignment</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">You can quickly change the text alignment\r\n            <code>.text-center .text-right</code>.</p>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Special title treatment</h4>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-info\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"card text-center\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Special title treatment</h4>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"card text-right\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Special title treatment</h4>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Using utilities</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">Using the utility, you can give direct width class to card like\r\n            <code>.w-25, w-50, w-75, w-100</code>\r\n        </p>\r\n        <div class=\"card w-75\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">This card has width of 75%</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-danger\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"card w-50\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">This card has width of 50%</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Size Using grid markup</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">Using the grid, wrap cards in columns and rows as needed.\r\n            <code>.col-1 to .col-12</code>\r\n        </p>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card text-center\">\r\n            <div class=\"card-header\">\r\n                <ul class=\"nav nav-tabs card-header-tabs\">\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link active\" href=\"javascript:void(0)\">Active</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"javascript:void(0)\">Link</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Special title treatment</h4>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card text-center\">\r\n            <div class=\"card-header\">\r\n                <ul class=\"nav nav-pills card-header-pills\">\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link active\" href=\"javascript:void(0)\">Active</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"javascript:void(0)\">Link</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link disabled\" href=\"javascript:void(0)\">Disabled</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Special title treatment</h4>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-info\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Card styles</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">Cards include various options for customizing their backgrounds, borders, and color.\r\n            <code>.card-primary info, warning, danger</code>\r\n        </p>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-inverse\" style=\"background-color: #333; border-color: #333;\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-inverse card-info\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-inverse card-primary\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-inverse card-danger\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-inverse card-warning\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-inverse card-success\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Card styles</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">Cards include various options for customizing their backgrounds, borders, and color.\r\n            <code>.card-primary info, warning, danger</code>\r\n        </p>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-outline-inverse\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-outline-info\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-outline-primary\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-outline-danger\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-outline-warning\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card card-outline-success\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"m-b-0 text-white\">Card Title</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Special title treatment</h3>\r\n                <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                <a href=\"#\" class=\"btn btn-inverse\">Go somewhere</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Card Groups</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">Use card groups to render cards as a single, attached element with equal width and height columns.</p>\r\n        <div class=\"card-group\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img1.jpg\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Card title</h4>\r\n                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content\r\n                        is a little bit longer.</p>\r\n                    <p class=\"card-text\">\r\n                        <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img2.jpg\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Card title</h4>\r\n                    <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\r\n                    <p class=\"card-text\">\r\n                        <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img3.jpg\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Card title</h4>\r\n                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card\r\n                        has even longer content than the first to show that equal height action.</p>\r\n                    <p class=\"card-text\">\r\n                        <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<h4 class=\"m-t-40\">Card With action</h4>\r\n<p class=\"text-muted m-t-0 font-12\">With action elements.</p>\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        Title\r\n        <div class=\"card-actions\">\r\n            <a class=\"btn-minimize\" data-perform=\"card-collapse\">\r\n                <i class=\"ti-minus\"></i>\r\n            </a>\r\n            <a class=\"btn-close\">\r\n                <i class=\"ti-close\"></i>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body collapse show\">\r\n        <h4 class=\"card-title\">Special title treatment</h4>\r\n        <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n    </div>\r\n</div>\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Card with Deck</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">Use card groups to render cards as a single, attached element with equal width and height columns.</p>\r\n        <div class=\"card-deck\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img1.jpg\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Card title</h4>\r\n                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content\r\n                        is a little bit longer.</p>\r\n                    <p class=\"card-text\">\r\n                        <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img2.jpg\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Card title</h4>\r\n                    <p class=\"card-text\">This card has supporting text below as a natural.</p>\r\n                    <p class=\"card-text\">\r\n                        <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top img-responsive\" src=\"assets/images/big/img3.jpg\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Card title</h4>\r\n                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card\r\n                        has even longer content than the first to show that equal height action. supporting text below as\r\n                        a natural lead-in to additional content</p>\r\n                    <p class=\"card-text\">\r\n                        <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-12 m-t-30\">\r\n        <h4 class=\"m-b-0\">Card columns</h4>\r\n        <p class=\"text-muted m-t-0 font-12\">Cards can be organized into Masonry-like columns with just CSS by wrapping them in\r\n            <code>card-columns</code>\r\n        </p>\r\n        <div class=\"card-columns\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top img-fluid\" src=\"assets/images/big/img6.jpg\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Card title that wraps to a new line</h4>\r\n                    <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content\r\n                        is a little bit longer.</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"card p-3\">\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n                <footer>\r\n                    <small class=\"text-muted\">\r\n                        Someone famous in\r\n                        <cite title=\"Source Title\">Source Title</cite>\r\n                    </small>\r\n                </footer>\r\n            </div>\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top img-fluid\" src=\"assets/images/big/img5.jpg\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Card title</h4>\r\n                    <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\r\n                    <p class=\"card-text\">\r\n                        <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"card card-inverse card-primary p-3 text-center\">\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>\r\n                <footer>\r\n                    <small>\r\n                        Someone famous in\r\n                        <cite title=\"Source Title\">Source Title</cite>\r\n                    </small>\r\n                </footer>\r\n            </div>\r\n            <div class=\"card text-center\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Card title</h4>\r\n                    <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\r\n                    <p class=\"card-text\">\r\n                        <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <img class=\"card-img img-fluid\" src=\"assets/images/big/img4.jpg\" alt=\"Card image\">\r\n            </div>\r\n            <div class=\"card p-3 text-right\">\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n                <footer>\r\n                    <small class=\"text-muted\">\r\n                        Someone famous in\r\n                        <cite title=\"Source Title\">Source Title</cite>\r\n                    </small>\r\n                </footer>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Card title</h4>\r\n                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card\r\n                        has even longer content than the first to show that equal height action.</p>\r\n                    <p class=\"card-text\">\r\n                        <small class=\"text-muted\">Last updated 3 mins ago</small>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Row -->"

/***/ }),

/***/ "./src/app/component/card/card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/card/card.component.ts ***!
  \**************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/component/card/card.component.html")
        })
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/component/carousel/carousel.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/carousel/carousel.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-md-6 col-xlg-5\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h3 class=\"card-title\">Carousel</h3>\r\n\t\t\t\t<h6 class=\"card-subtitle\">This is basic Carousel</h6>\r\n\t\t\t\t<ngb-carousel>\r\n\t\t\t\t\t<ng-template ngbSlide>\r\n\t\t\t\t\t\t<img src=\"assets/images/big/img1.jpg\" alt=\"Random first slide\">\r\n\t\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t\t<h3 class=\"text-white font-bold\">First slide label</h3>\r\n\t\t\t\t\t\t\t<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template ngbSlide>\r\n\t\t\t\t\t\t<img src=\"assets/images/big/img2.jpg\" alt=\"Random second slide\">\r\n\t\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t\t<h3 class=\"text-white font-bold\">Second slide label</h3>\r\n\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template ngbSlide>\r\n\t\t\t\t\t\t<img src=\"assets/images/big/img3.jpg\" alt=\"Random third slide\">\r\n\t\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t\t<h3 class=\"text-white font-bold\">Third slide label</h3>\r\n\t\t\t\t\t\t\t<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-carousel>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-md-6 col-xlg-5\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<h3 class=\"card-title\">Navigation arrows and indicators</h3>\r\n\t\t\t\t<h6 class=\"card-subtitle\">Navigation</h6>\r\n\t\t\t\t<ngb-carousel [showNavigationArrows]=\"showNavigationArrows\" [showNavigationIndicators]=\"showNavigationIndicators\">\r\n\t\t\t\t\t<ng-template ngbSlide>\r\n\t\t\t\t\t\t<img src=\"assets/images/big/img4.jpg\" alt=\"Random first slide\">\r\n\t\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t\t<h3 class=\"text-white font-bold\">10 seconds between slides...</h3>\r\n\t\t\t\t\t\t\t<p>This carousel uses customized default values.</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template ngbSlide>\r\n\t\t\t\t\t\t<img src=\"assets/images/big/img5.jpg\" alt=\"Random second slide\">\r\n\t\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t\t<h3 class=\"text-white font-bold\">No keyboard...</h3>\r\n\t\t\t\t\t\t\t<p>This carousel uses customized default values.</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template ngbSlide>\r\n\t\t\t\t\t\t<img src=\"assets/images/big/img6.jpg\" alt=\"Random third slide\">\r\n\t\t\t\t\t\t<div class=\"carousel-caption\">\r\n\t\t\t\t\t\t\t<h3 class=\"text-white font-bold\">And no wrap after last slide.</h3>\r\n\t\t\t\t\t\t\t<p>This carousel uses customized default values.</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-carousel>\r\n\r\n\t\t\t\t<div class=\"btn-group m-t-40\" role=\"group\" aria-label=\"Carousel toggle controls\">\r\n  \t\t\t\t\t<button type=\"button\" (click)=\"showNavigationArrows = !showNavigationArrows\" class=\"btn btn-outline-dark btn-sm\">Toggle navigation arrows</button>\r\n  \t\t\t\t\t<button type=\"button\" (click)=\"showNavigationIndicators = !showNavigationIndicators\" class=\"btn btn-outline-dark btn-sm\">Toggle navigation indicators</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/carousel/carousel.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/carousel/carousel.component.ts ***!
  \**********************************************************/
/*! exports provided: NgbdCarouselBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdCarouselBasicComponent", function() { return NgbdCarouselBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdCarouselBasicComponent = /** @class */ (function () {
    function NgbdCarouselBasicComponent(config) {
        this.showNavigationArrows = false;
        this.showNavigationIndicators = false;
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }
    NgbdCarouselBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngbd-buttons-radio',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/component/carousel/carousel.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])
    ], NgbdCarouselBasicComponent);
    return NgbdCarouselBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/component.module.ts":
/*!***********************************************!*\
  !*** ./src/app/component/component.module.ts ***!
  \***********************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _component_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component.routing */ "./src/app/component/component.routing.ts");
/* harmony import */ var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./progressbar/progressbar.component */ "./src/app/component/progressbar/progressbar.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/component/pagination/pagination.component.ts");
/* harmony import */ var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./accordion/accordion.component */ "./src/app/component/accordion/accordion.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/component/alert/alert.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/component/carousel/carousel.component.ts");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/component/datepicker/datepicker.component.ts");
/* harmony import */ var _dropdown_collapse_dropdown_collapse_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dropdown-collapse/dropdown-collapse.component */ "./src/app/component/dropdown-collapse/dropdown-collapse.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/component/modal/modal.component.ts");
/* harmony import */ var _popover_tooltip_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./popover-tooltip/popover-tooltip.component */ "./src/app/component/popover-tooltip/popover-tooltip.component.ts");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/component/rating/rating.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/component/tabs/tabs.component.ts");
/* harmony import */ var _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./timepicker/timepicker.component */ "./src/app/component/timepicker/timepicker.component.ts");
/* harmony import */ var _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./typehead/typehead.component */ "./src/app/component/typehead/typehead.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./card/card.component */ "./src/app/component/card/card.component.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/component/buttons/buttons.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_component_routing__WEBPACK_IMPORTED_MODULE_6__["ComponentsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["JsonpModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            declarations: [
                _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_7__["NgbdpregressbarBasicComponent"],
                _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["NgbdpaginationBasicComponent"],
                _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_9__["NgbdAccordionBasicComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_10__["NgbdAlertBasicComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__["NgbdCarouselBasicComponent"],
                _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_12__["NgbdDatepickerBasicComponent"],
                _dropdown_collapse_dropdown_collapse_component__WEBPACK_IMPORTED_MODULE_13__["NgbdDropdownBasicComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["NgbdModalBasicComponent"],
                _popover_tooltip_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_15__["NgbdPopTooltipComponent"],
                _rating_rating_component__WEBPACK_IMPORTED_MODULE_16__["NgbdratingBasicComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_17__["NgbdtabsBasicComponent"],
                _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_18__["NgbdtimepickerBasicComponent"],
                _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_19__["NgbdtypeheadBasicComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_20__["CardsComponent"],
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_21__["ButtonsComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/component/component.routing.ts":
/*!************************************************!*\
  !*** ./src/app/component/component.routing.ts ***!
  \************************************************/
/*! exports provided: ComponentsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsRoutes", function() { return ComponentsRoutes; });
/* harmony import */ var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progressbar/progressbar.component */ "./src/app/component/progressbar/progressbar.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/component/pagination/pagination.component.ts");
/* harmony import */ var _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion/accordion.component */ "./src/app/component/accordion/accordion.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/component/alert/alert.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/component/carousel/carousel.component.ts");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/component/datepicker/datepicker.component.ts");
/* harmony import */ var _dropdown_collapse_dropdown_collapse_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown-collapse/dropdown-collapse.component */ "./src/app/component/dropdown-collapse/dropdown-collapse.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/component/modal/modal.component.ts");
/* harmony import */ var _popover_tooltip_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popover-tooltip/popover-tooltip.component */ "./src/app/component/popover-tooltip/popover-tooltip.component.ts");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/component/rating/rating.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/component/tabs/tabs.component.ts");
/* harmony import */ var _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timepicker/timepicker.component */ "./src/app/component/timepicker/timepicker.component.ts");
/* harmony import */ var _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./typehead/typehead.component */ "./src/app/component/typehead/typehead.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./card/card.component */ "./src/app/component/card/card.component.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/component/buttons/buttons.component.ts");















var ComponentsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'progressbar',
                component: _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_0__["NgbdpregressbarBasicComponent"],
                data: {
                    title: 'Progressbar',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Progressbar' }
                    ]
                }
            },
            {
                path: 'pagination',
                component: _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__["NgbdpaginationBasicComponent"],
                data: {
                    title: 'Pagination',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Pagination' }
                    ]
                }
            },
            {
                path: 'accordion',
                component: _accordion_accordion_component__WEBPACK_IMPORTED_MODULE_2__["NgbdAccordionBasicComponent"],
                data: {
                    title: 'Accordion',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Accordion' }
                    ]
                }
            },
            {
                path: 'alert',
                component: _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["NgbdAlertBasicComponent"],
                data: {
                    title: 'Alert',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Alert' }
                    ]
                }
            },
            {
                path: 'carousel',
                component: _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["NgbdCarouselBasicComponent"],
                data: {
                    title: 'Carousel',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Carousel' }
                    ]
                }
            },
            {
                path: 'datepicker',
                component: _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_5__["NgbdDatepickerBasicComponent"],
                data: {
                    title: 'Datepicker',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Datepicker' }
                    ]
                }
            },
            {
                path: 'dropdown',
                component: _dropdown_collapse_dropdown_collapse_component__WEBPACK_IMPORTED_MODULE_6__["NgbdDropdownBasicComponent"],
                data: {
                    title: 'Dropdown',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Dropdown' }
                    ]
                }
            },
            {
                path: 'modal',
                component: _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["NgbdModalBasicComponent"],
                data: {
                    title: 'Modal',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Modal' }
                    ]
                }
            },
            {
                path: 'poptool',
                component: _popover_tooltip_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_8__["NgbdPopTooltipComponent"],
                data: {
                    title: 'Popover & Tooltip',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Popover & Tooltip' }
                    ]
                }
            },
            {
                path: 'rating',
                component: _rating_rating_component__WEBPACK_IMPORTED_MODULE_9__["NgbdratingBasicComponent"],
                data: {
                    title: 'Rating',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Rating' }
                    ]
                }
            },
            {
                path: 'tabs',
                component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__["NgbdtabsBasicComponent"],
                data: {
                    title: 'Tabs',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Tabs' }
                    ]
                }
            },
            {
                path: 'timepicker',
                component: _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_11__["NgbdtimepickerBasicComponent"],
                data: {
                    title: 'Timepicker',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Timepicker' }
                    ]
                }
            },
            {
                path: 'typehead',
                component: _typehead_typehead_component__WEBPACK_IMPORTED_MODULE_12__["NgbdtypeheadBasicComponent"],
                data: {
                    title: 'Typehead',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Typehead' }
                    ]
                }
            },
            {
                path: 'buttons',
                component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_14__["ButtonsComponent"],
                data: {
                    title: 'Button',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Button' }
                    ]
                }
            },
            {
                path: 'cards',
                component: _card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardsComponent"],
                data: {
                    title: 'Card',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Card' }
                    ]
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/component/datepicker/datepicker.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/datepicker/datepicker.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Datepicker Basic</h3>\r\n                <h6 class=\"card-subtitle\">This is basic datepicker</h6>\r\n                <p>Simple datepicker</p>\r\n                <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\"></ngb-datepicker>\r\n                <div class=\"dl\">\r\n                    <span class=\"m-l-20\">Month: {{ date.month }}.{{ date.year }}</span>\r\n                    <br/>\r\n                    <br/>\r\n                    <span class=\"m-l-20\">Model: {{ model | json }}</span>\r\n                </div>\r\n                <div class=\"m-t-20\">\r\n                    <button class=\"btn btn-sm btn-outline-info\" (click)=\"selectToday()\">Select Today</button>\r\n                    <button class=\"btn btn-sm btn-outline-info\" (click)=\"dp.navigateTo()\">To current month</button>\r\n                    <button class=\"btn btn-sm btn-outline-info\" (click)=\"dp.navigateTo({year: 2013, month: 2})\">To Feb 2013</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Disabled datepicker</h3>\r\n                <h6 class=\"card-subtitle\">This is Disabled datepicker</h6>\r\n                <ngb-datepicker [(ngModel)]=\"model3\" [disabled]=\"disabled\"></ngb-datepicker>\r\n\r\n                <div class=\"m-t-20\">\r\n                    <button class=\"btn btn-sm btn-outline-{{disabled ? 'danger' : 'success'}}\" (click)=\"disabled = !disabled\">\r\n                        {{ disabled ? \"disabled\" : \"enabled\"}}\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Datepicker Multiple months</h3>\r\n                <h6 class=\"card-subtitle\">This is datepicker Multiple months</h6>\r\n                <ngb-datepicker [displayMonths]=\"displayMonths\" [navigation]=\"navigation\"></ngb-datepicker>\r\n                <hr/>\r\n                <form class=\"form-inline\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [displayMonths]=\"displayMonths\" [navigation]=\"navigation\"\r\n                                ngbDatepicker #d=\"ngbDatepicker\">\r\n                            <div class=\"input-group-addon\" (click)=\"d.toggle()\">\r\n                                <i class=\"fa fa-calendar\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <hr/>\r\n                <select class=\"custom-select\" [(ngModel)]=\"displayMonths\">\r\n                    <option [ngValue]=\"1\">One month</option>\r\n                    <option [ngValue]=\"2\">Two months</option>\r\n                    <option [ngValue]=\"3\">Three months</option>\r\n                </select>\r\n                <select class=\"custom-select\" [(ngModel)]=\"navigation\">\r\n                    <option value=\"none\">Without navigation</option>\r\n                    <option value=\"select\">With select boxes</option>\r\n                    <option value=\"arrows\">Without select boxes</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Datepicker in a popup</h3>\r\n                <h6 class=\"card-subtitle\">This is datepicker with popup</h6>\r\n                <form class=\"form-inline\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group\">\r\n                            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model2\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                            <div class=\"input-group-addon\" (click)=\"d.toggle()\">\r\n                                <i class=\"fa fa-calendar\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n\r\n                <hr/>\r\n                <pre>Model: {{ model2 | json }}</pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Range Datepicker</h3>\r\n                <h6 class=\"card-subtitle\">Example of the range selection</h6>\r\n                <ngb-datepicker #dp ngModel (ngModelChange)=\"onDateChange($event)\" [displayMonths]=\"2\" [dayTemplate]=\"t\">\r\n                </ngb-datepicker>\r\n\r\n                <ng-template #t let-date=\"date\" let-focused=\"focused\">\r\n                    <span class=\"custom-day\" [class.focused]=\"focused\" [class.range]=\"isFrom(date) || isTo(date) || isInside(date) || isHovered(date)\"\r\n                        [class.faded]=\"isHovered(date) || isInside(date)\" (mouseenter)=\"hoveredDate = date\" (mouseleave)=\"hoveredDate = null\">\r\n                        {{ date.day }}\r\n                    </span>\r\n                </ng-template>\r\n\r\n                <hr>\r\n                <div class=\"row\">\r\n                    <pre class=\"col-md-6\">From: {{ fromDate | json }} </pre>\r\n                    <pre class=\"col-md-6\">To: {{ toDate | json }} </pre>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/datepicker/datepicker.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/datepicker/datepicker.component.ts ***!
  \**************************************************************/
/*! exports provided: NgbdDatepickerBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDatepickerBasicComponent", function() { return NgbdDatepickerBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var my = new Date();
// This is for the range date picker
var equals = function (one, two) {
    return one &&
        two &&
        two.year === one.year &&
        two.month === one.month &&
        two.day === one.day;
};
var before = function (one, two) {
    return !one || !two
        ? false
        : one.year === two.year
            ? one.month === two.month
                ? one.day === two.day
                    ? false
                    : one.day < two.day
                : one.month < two.month
            : one.year < two.year;
};
var after = function (one, two) {
    return !one || !two
        ? false
        : one.year === two.year
            ? one.month === two.month
                ? one.day === two.day
                    ? false
                    : one.day > two.day
                : one.month > two.month
            : one.year > two.year;
};
// End  range date picker
var NgbdDatepickerBasicComponent = /** @class */ (function () {
    function NgbdDatepickerBasicComponent(calendar) {
        var _this = this;
        // This is for multiple month
        this.displayMonths = 2;
        this.navigation = 'select';
        // This is for the disable datepicker
        this.model3 = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
        this.disabled = true;
        this.isHovered = function (date) {
            return _this.fromDate &&
                !_this.toDate &&
                _this.hoveredDate &&
                after(date, _this.fromDate) &&
                // tslint:disable-next-line:semicolon
                before(date, _this.hoveredDate);
        };
        this.isInside = function (date) { return after(date, _this.fromDate) && before(date, _this.toDate); };
        this.isFrom = function (date) { return equals(date, _this.fromDate); };
        this.isTo = function (date) { return equals(date, _this.toDate); };
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    NgbdDatepickerBasicComponent.prototype.selectToday = function () {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    };
    NgbdDatepickerBasicComponent.prototype.onDateChange = function (date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    };
    NgbdDatepickerBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datepicker-basic',
            template: __webpack_require__(/*! ./datepicker.component.html */ "./src/app/component/datepicker/datepicker.component.html"),
            styles: [
                "\n      .custom-day {\n        text-align: center;\n        padding: 0.185rem 0.25rem;\n        display: inline-block;\n        height: 2rem;\n        width: 2rem;\n      }\n      .custom-day.focused {\n        background-color: #e6e6e6;\n      }\n      .custom-day.range,\n      .custom-day:hover {\n        background-color: #0275d8;\n        color: white;\n      }\n      .faded {\n        opacity: 0.5;\n      }\n    "
            ]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])
    ], NgbdDatepickerBasicComponent);
    return NgbdDatepickerBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/dropdown-collapse/dropdown-collapse.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/component/dropdown-collapse/dropdown-collapse.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h3 class=\"card-title\">Dropdown</h3>\r\n        <h6 class=\"card-subtitle\">This is basic Dropdown</h6>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div ngbDropdown class=\"d-inline-block\"> \r\n              <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Toggle dropdown</button>\r\n              <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n                <button class=\"dropdown-item\">Action - 1</button>\r\n                <button class=\"dropdown-item\">Another Action</button>\r\n                <button class=\"dropdown-item\">Something else is here</button>\r\n                \r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col text-right\">\r\n            <div ngbDropdown placement=\"top-right\" class=\"d-inline-block\">\r\n              <button class=\"btn btn-outline-primary\" id=\"dropdownBasic2\" ngbDropdownToggle>Toggle dropup</button>\r\n              <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\r\n                <button class=\"dropdown-item\">Action - 1</button>\r\n                <button class=\"dropdown-item\">Another Action</button>\r\n                <button class=\"dropdown-item\">Something else is here</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h3 class=\"card-title\">Manual triggers</h3>\r\n        <h6 class=\"card-subtitle\">You can easily control dropdowns programmatically using the exported dropdown instance.</h6>\r\n        <div class=\"d-inline-block\" ngbDropdown #myDrop=\"ngbDropdown\">\r\n          <button class=\"btn btn-outline-primary\" id=\"dropdownManual\" ngbDropdownToggle>Toggle dropdown</button>\r\n          <div ngbDropdownMenu aria-labelledby=\"dropdownManual\">\r\n            <button class=\"dropdown-item\">Action - 1</button>\r\n            <button class=\"dropdown-item\">Another Action</button>\r\n            <button class=\"dropdown-item\">Something else is here</button>\r\n          </div>\r\n          <button class=\"btn btn-outline-success btn-sm\" (click)=\"$event.stopPropagation(); myDrop.open();\">Open from outside</button>\r\n          <button class=\"btn btn-outline-danger btn-sm\" (click)=\"$event.stopPropagation(); myDrop.close();\">Close from outside</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h3 class=\"card-title\">Collapse</h3>\r\n        <h6 class=\"card-subtitle\">The NgbCollapse directive provides a simple way to hide and show an element with animations.</h6>\r\n        <p>\r\n          <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n            Toggle\r\n          </button>\r\n        </p>\r\n        <blockquote id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\r\n          You can collapse this card by clicking Toggle\r\n        </blockquote>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h3 class=\"card-title\">Button groups and split buttons</h3>\r\n        <h6 class=\"card-subtitle\">ThBootstrap split buttons and dropdowns on button groups are supported with the existing dropdown directives.</h6>\r\n        \r\n        <div class=\"btn-group mr-3\">\r\n          <button type=\"button\" class=\"btn btn-outline-success\">Plain ol' button</button>\r\n          <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n            <button class=\"btn btn-outline-primary\" ngbDropdownToggle>Drop me</button>\r\n            <div class=\"dropdown-menu\" ngbDropdownMenu>\r\n              <button class=\"dropdown-item\">One</button>\r\n              <button class=\"dropdown-item\">Two</button>\r\n              <button class=\"dropdown-item\">Four!</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"btn-group mr-3\">\r\n          <button type=\"button\" class=\"btn btn-primary\">Split me</button>\r\n          <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n            <button class=\"btn btn-primary dropdown-toggle-split\" ngbDropdownToggle></button>\r\n            <div class=\"dropdown-menu\" ngbDropdownMenu>\r\n              <button class=\"dropdown-item\">One</button>\r\n              <button class=\"dropdown-item\">Two</button>\r\n              <button class=\"dropdown-item\">Four!</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"btn-group mr-3\">\r\n          <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n            <button class=\"btn btn-outline-danger\" ngbDropdownToggle>Select me</button>\r\n            <div class=\"dropdown-menu\" ngbDropdownMenu>\r\n              <button class=\"dropdown-item\">One</button>\r\n              <button class=\"dropdown-item\">Two</button>\r\n              <button class=\"dropdown-item\">Four!</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n            <button class=\"btn btn-outline-success\" ngbDropdownToggle>Or me</button>\r\n            <div class=\"dropdown-menu\" ngbDropdownMenu>\r\n              <button class=\"dropdown-item\">One</button>\r\n              <button class=\"dropdown-item\">Two</button>\r\n              <button class=\"dropdown-item\">Four!</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/dropdown-collapse/dropdown-collapse.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/component/dropdown-collapse/dropdown-collapse.component.ts ***!
  \****************************************************************************/
/*! exports provided: NgbdDropdownBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdDropdownBasicComponent", function() { return NgbdDropdownBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdDropdownBasicComponent = /** @class */ (function () {
    function NgbdDropdownBasicComponent() {
        // This is for the collapse example
        this.isCollapsed = false;
    }
    NgbdDropdownBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dropdown-basic',
            template: __webpack_require__(/*! ./dropdown-collapse.component.html */ "./src/app/component/dropdown-collapse/dropdown-collapse.component.html")
        })
    ], NgbdDropdownBasicComponent);
    return NgbdDropdownBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/modal/modal.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/modal/modal.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Modal with default options</h3>\r\n                <h6 class=\"card-subtitle\">This is basic toggletype accordion</h6>\r\n                <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n\t\t\t\t  <div class=\"modal-header\">\r\n\t\t\t\t    <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\r\n\t\t\t\t    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n\t\t\t\t      <span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t    </button>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"modal-body\">\r\n\t\t\t\t    <form>\r\n\t\t\t\t      <div class=\"form-group\">\r\n\t\t\t\t        <label for=\"dateOfBirth\">Date of birth</label>\r\n\t\t\t\t        <div class=\"input-group\">\r\n\t\t\t\t          <input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\r\n\t\t\t\t          <div class=\"input-group-append\">\r\n\t\t\t\t            <button class=\"btn btn-outline-secondary\" (click)=\"dp.toggle()\" type=\"button\">\r\n\t\t\t\t              <i class=\"fa fa-calendar\"></i>\r\n\t\t\t\t            </button>\r\n\t\t\t\t          </div>\r\n\t\t\t\t        </div>\r\n\t\t\t\t      </div>\r\n\t\t\t\t    </form>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"modal-footer\">\r\n\t\t\t\t    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\r\n\t\t\t\t  </div>\r\n\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open2(content)\">Launch demo modal</button>\r\n\t\t\t\t<div class=\"m-t-20\">{{closeResult}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\"> \r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Component as Content</h3>\r\n                <h6 class=\"card-subtitle\">You can pass an existing component as content of the modal window.</h6>\r\n                <ng-template #content2 let-c=\"close\" let-d=\"dismiss\">\r\n\t\t\t\t  <div class=\"modal-header\"> \r\n\t\t\t\t    <h4 class=\"modal-title text-white\">Modal title</h4>\r\n\t\t\t\t    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n\t\t\t\t      <span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t    </button>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"modal-body\">\r\n\t\t\t\t    <p>One fine body&hellip;</p>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"modal-footer\">\r\n\t\t\t\t    <button type=\"button\" class=\"btn btn-inverse\" (click)=\"c('Close click')\">Close</button>\r\n\t\t\t\t  </div>\r\n\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content2)\">Launch demo modal</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-12\"> \r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Modal With Options</h3>\r\n                <h6 class=\"card-subtitle\">You can pass an existing component as content of the modal window.</h6>\r\n                <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n\t\t\t\t  <div class=\"modal-header\">\r\n\t\t\t\t    <h4 class=\"modal-title\">Modal title</h4>\r\n\t\t\t\t    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n\t\t\t\t      <span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t    </button>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"modal-body\">\r\n\t\t\t\t    <p>One fine body&hellip;</p>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"modal-footer\">\r\n\t\t\t\t    <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Close</button>\r\n\t\t\t\t  </div>\r\n\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openWindowCustomClass(content)\">Modal with window custom class</button>\r\n\t\t\t\t<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openBackDropCustomClass(content)\">Modal with backdrop custom class</button>\r\n\t\t\t\t<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openSm(content)\">Small modal</button>\r\n\t\t\t\t<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openLg(content)\">Large modal</button>\r\n\t\t\t\t<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openVerticallyCentered(content)\">Modal vertically centered</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/modal/modal.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/modal/modal.component.ts ***!
  \****************************************************/
/*! exports provided: NgbdModalBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalBasicComponent", function() { return NgbdModalBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalBasicComponent = /** @class */ (function () {
    function NgbdModalBasicComponent(modalService, modalService2) {
        this.modalService = modalService;
        this.modalService2 = modalService2;
    }
    NgbdModalBasicComponent.prototype.open2 = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NgbdModalBasicComponent.prototype.open = function (content) {
        this.modalService2.open(content, { windowClass: 'dark-modal' });
    };
    NgbdModalBasicComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasicComponent.prototype.openBackDropCustomClass = function (content) {
        this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    };
    NgbdModalBasicComponent.prototype.openWindowCustomClass = function (content) {
        this.modalService.open(content, { windowClass: 'dark-modal' });
    };
    NgbdModalBasicComponent.prototype.openSm = function (content) {
        this.modalService.open(content, { size: 'sm' });
    };
    NgbdModalBasicComponent.prototype.openLg = function (content) {
        this.modalService.open(content, { size: 'lg' });
    };
    NgbdModalBasicComponent.prototype.openVerticallyCentered = function (content) {
        this.modalService.open(content, { centered: true });
    };
    NgbdModalBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngbd-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/component/modal/modal.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [
                "\n      .dark-modal .modal-content {\n        background-color: #009efb;\n        color: white;\n      }\n      .dark-modal .close {\n        color: white;\n      }\n      .light-blue-backdrop {\n        background-color: #5cb3fd;\n      }\n    "
            ]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalBasicComponent);
    return NgbdModalBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/pagination/pagination.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/pagination/pagination.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Default pagination</h3>\r\n                <h6 class=\"card-subtitle\">This is basic Default pagination</h6>\r\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\r\n\r\n                <div>directionLinks = false</div>\r\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [directionLinks]=\"false\"></ngb-pagination>\r\n\r\n                <div>boundaryLinks = true</div>\r\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n\r\n                <hr>\r\n\r\n                <pre>Current page: {{page}}</pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Advanced pagination</h3>\r\n                <h6 class=\"card-subtitle\">This is Advanced pagination</h6>\r\n                <div>maxSize = 5, rotate = false</div>\r\n                <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n\r\n                <div>maxSize = 5, rotate = true</div>\r\n                <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n\r\n                <div>maxSize = 5, rotate = true, ellipses = false</div>\r\n                <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n\r\n                <hr>\r\n\r\n                <pre>Current page: {{page2}}</pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Pagination size</h3>\r\n                <h6 class=\"card-subtitle\">This is Pagination size</h6>\r\n                <ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"lg\"></ngb-pagination>\r\n                <ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\"></ngb-pagination>\r\n                <ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"sm\"></ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Pagination Alignment</h3>\r\n                <h6 class=\"card-subtitle\">Change the alignment of pagination components with flexbox utilities.</h6>\r\n                <ngb-pagination class=\"d-flex justify-content-start\" [collectionSize]=\"70\" [(page)]=\"page\"></ngb-pagination>\r\n                <ngb-pagination class=\"d-flex justify-content-center\" [collectionSize]=\"70\" [(page)]=\"page\"></ngb-pagination>\r\n                <ngb-pagination class=\"d-flex justify-content-end\" [collectionSize]=\"70\" [(page)]=\"page\"></ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Disabled pagination</h3>\r\n                <h6 class=\"card-subtitle\">This is Disabled pagination</h6>\r\n                <p>Pagination control can be disabled:</p>\r\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"disablepage\" [disabled]='isDisabled'></ngb-pagination>\r\n                <hr>\r\n                <button class=\"btn btn-sm btn-outline-primary\" (click)=\"toggleDisabled()\">\r\n                  Toggle disabled\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/pagination/pagination.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/pagination/pagination.component.ts ***!
  \**************************************************************/
/*! exports provided: NgbdpaginationBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdpaginationBasicComponent", function() { return NgbdpaginationBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdpaginationBasicComponent = /** @class */ (function () {
    function NgbdpaginationBasicComponent() {
        this.page = 4;
        this.page2 = 1;
        this.currentPage = 3;
        this.disablepage = 3;
        this.isDisabled = true;
    }
    NgbdpaginationBasicComponent.prototype.toggleDisabled = function () {
        this.isDisabled = !this.isDisabled;
    };
    NgbdpaginationBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngbd-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/component/pagination/pagination.component.html")
        })
    ], NgbdpaginationBasicComponent);
    return NgbdpaginationBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/popover-tooltip/popover-tooltip.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/popover-tooltip/popover-tooltip.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Quick and easy popovers</h3>\r\n                <h6 class=\"card-subtitle\">This is basic popovers</h6>\r\n                <div class=\"button-box\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\" placement=\"top\"\r\n                            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\">\r\n                      Popover on top\r\n                    </button>\r\n\r\n                    <button type=\"button\" class=\"btn btn-secondary\" placement=\"right\"\r\n                            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\">\r\n                      Popover on right\r\n                    </button>\r\n\r\n                    <button type=\"button\" class=\"btn btn-secondary\" placement=\"bottom\"\r\n                            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">\r\n                      Popover on bottom\r\n                    </button>\r\n\r\n                    <button type=\"button\" class=\"btn btn-secondary\" placement=\"left\"\r\n                            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\">\r\n                      Popover on left\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">HTML and bindings in popovers</h3>\r\n                <h6 class=\"card-subtitle\">Popovers can contain any arbitrary HTML, Angular bindings and even directives!\r\n                Simply enclose desired content in a <code>&lt;ng-template&gt;</code> element.</h6>\r\n                <ng-template #popContent>Hello, <b>{{name}}</b>!</ng-template>\r\n                <button type=\"button\" class=\"btn btn-secondary\" [ngbPopover]=\"popContent\" popoverTitle=\"Fancy content\">\r\n                  I've got markup and bindings in my popover!\r\n                </button>\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Custom and manual triggers</h3>\r\n                <h6 class=\"card-subtitle\">You can easily override open and close triggers by specifying event names (separated by <code>:</code>) in the <code>triggers</code> property.</h6>\r\n                <button type=\"button\" class=\"btn btn-secondary\" ngbPopover=\"You see, I show up on hover!\" triggers=\"mouseenter:mouseleave\" popoverTitle=\"Pop title\">  Hover over me!</button>\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Popover visibility events</h3>\r\n                <h6 class=\"card-subtitle\">This is popover event</h6>\r\n                <button type=\"button\" class=\"btn btn-secondary\" placement=\"top\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\" #popover=\"ngbPopover\"> Open Popover</button>\r\n                Popover is currently: <code>{{ popover.isOpen() ? 'open' : 'closed' }}</code>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Quick and easy tooltips</h3>\r\n                <h6 class=\"card-subtitle\">This is Quick and easy tooltips</h6>\r\n                <div class=\"button-box\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\r\n                  Tooltip on top\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-secondary\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\r\n                  Tooltip on right\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-secondary\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\r\n                  Tooltip on bottom\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-secondary\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\r\n                  Tooltip on left\r\n                </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">HTML and bindings in tooltips</h3>\r\n                <h6 class=\"card-subtitle\">Tooltips can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in a <code>ng-template</code> element.</h6>\r\n                <ng-template #tipContent>Hello, <b>{{name}}</b>!</ng-template>\r\n                <button type=\"button\" class=\"btn btn-secondary\" [ngbTooltip]=\"tipContent\">\r\n                  I've got markup and bindings in my tooltip!\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Custom and manual triggers</h3>\r\n                <h6 class=\"card-subtitle\">You can easily override open and close triggers by specifying event names (separated by :) in the triggers property.</h6>\r\n                <button type=\"button\" class=\"btn btn-secondary\" ngbTooltip=\"You see, I show up on click!\" triggers=\"click:blur\"> Click me!</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Popover visibility events</h3>\r\n                <h6 class=\"card-subtitle\">This is Disabled pagination</h6>\r\n                <div class=\"button-box\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" ngbTooltip=\"What a great tip!\" triggers=\"manual\" #t=\"ngbTooltip\" (click)=\"t.open()\">\r\n                  Click me to open a tooltip\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"t.close()\">\r\n                  Click me to close a tooltip\r\n                </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Context and manual triggers</h3>\r\n                <h6 class=\"card-subtitle\">You can optionally pass in a context when manually triggering a popover.</h6>\r\n                <ng-template #popContent let-greeting=\"greeting\">{{greeting}}, <b>{{name}}</b>!</ng-template>\r\n                <p>\r\n                  How would you like to greet <strong [ngbPopover]=\"popContent\" popoverTitle=\"Greeting\" #p=\"ngbPopover\" triggers=\"manual\">me</strong>?\r\n                </p>\r\n                <button type=\"button\" class=\"btn btn-outline-secondary mr-2\" (click)=\"changeGreeting({ greeting: 'Bonjour' })\">\r\n                  French\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-outline-secondary mr-2\" (click)=\"changeGreeting({ greeting: 'Gutentag' })\">\r\n                  German\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-outline-secondary mr-2\" (click)=\"changeGreeting({ greeting: 'Hello' })\">\r\n                  English\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Popover Visibility Events</h3>\r\n                <h6 class=\"card-subtitle\">You can optionally pass in a context when manually triggering a popover.</h6>\r\n                <button type=\"button\" class=\"btn btn-outline-secondary\" placement=\"top\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\" #popover=\"ngbPopover\" (shown)=\"recordShown()\" (hidden)=\"recordHidden()\">\r\n                    Open Popover\r\n                </button>\r\n                <hr>\r\n                <ul>\r\n                  <li>Popover is currently: <code>{{ popover.isOpen() ? 'open' : 'closed' }}</code></li>\r\n                  <li>Last shown at: <code>{{lastShown | date:'h:mm:ss'}}</code></li>\r\n                  <li>Last hidden at: <code>{{lastHidden | date:'h:mm:ss'}}</code></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Append popover in the body</h3>\r\n                <p>\r\n                    Set the <code>container</code> property to \"body\" to have the popover be appended to the body instead of the triggering element's parent. This option is useful if the element triggering the popover is inside an element that clips its contents (i.e. <code>overflow: hidden</code>).\r\n                </p>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"card px-1 py-5\">\r\n                            <button type=\"button\" class=\"btn btn-outline-secondary mb-2\"\r\n                                            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n                                Default popover\r\n                            </button>\r\n                            <button type=\"button\" class=\"btn btn-outline-secondary\"\r\n                                            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" container=\"body\">\r\n                                Popover appended to body\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Popover With Custom Class</h3>\r\n                <h6 class=\"card-subtitle\">You can optionally pass in a custom class via popoverClass</h6>\r\n                <button type=\"button\" class=\"btn btn-outline-secondary\" ngbPopover=\"Nice class!\"\r\n                  popoverClass=\"my-custom-class\">\r\n                  Popover with custom class\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/component/popover-tooltip/popover-tooltip.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/popover-tooltip/popover-tooltip.component.ts ***!
  \************************************************************************/
/*! exports provided: NgbdPopTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdPopTooltipComponent", function() { return NgbdPopTooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgbdPopTooltipComponent = /** @class */ (function () {
    function NgbdPopTooltipComponent() {
        this.greeting = {};
        this.name = 'World';
    }
    NgbdPopTooltipComponent.prototype.changeGreeting = function (greeting) {
        var isOpen = this.popover.isOpen();
        this.popover.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.popover.open(greeting);
        }
    };
    NgbdPopTooltipComponent.prototype.recordShown = function () {
        this.lastShown = new Date();
    };
    NgbdPopTooltipComponent.prototype.recordHidden = function () {
        this.lastHidden = new Date();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('p'),
        __metadata("design:type", Object)
    ], NgbdPopTooltipComponent.prototype, "popover", void 0);
    NgbdPopTooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngbd-popover-tooltip',
            template: __webpack_require__(/*! ./popover-tooltip.component.html */ "./src/app/component/popover-tooltip/popover-tooltip.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [
                "\n      .card {\n        overflow: hidden;\n      }\n      .my-custom-class {\n        background: aliceblue;\n        font-size: 125%;\n      }\n      .my-custom-class .arrow::after {\n        border-top-color: aliceblue;\n      }\n    "
            ]
        })
    ], NgbdPopTooltipComponent);
    return NgbdPopTooltipComponent;
}());



/***/ }),

/***/ "./src/app/component/progressbar/progressbar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/progressbar/progressbar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    \r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Basic Progressbar</h3>\r\n                <h6 class=\"card-subtitle\">This is Basic Progressbar</h6>\r\n                <p><ngb-progressbar type=\"success\" [value]=\"25\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"info\" [value]=\"50\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"primary\" [value]=\"150\" [max]=\"200\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"inverse\" [value]=\"150\" [max]=\"150\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"warning\" [value]=\"75\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"danger\" [value]=\"100\"></ngb-progressbar></p>\r\n                  \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Progress bars with current value labels</h3>\r\n                <h6 class=\"card-subtitle\">This is Progress bars with current value labels</h6>\r\n                <p><ngb-progressbar showValue=\"true\" type=\"success\" [value]=\"25\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar [showValue]=\"true\" type=\"info\" [value]=\"50\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar showValue=\"true\" type=\"primary\" [value]=\"150\" [max]=\"200\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar [showValue]=\"true\" type=\"inverse\" [value]=\"150\" [max]=\"150\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar showValue=\"true\" type=\"warning\" [value]=\"150\" [max]=\"200\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar [showValue]=\"true\" type=\"danger\" [value]=\"150\" [max]=\"150\"></ngb-progressbar></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Striped progress bars</h3>\r\n                <h6 class=\"card-subtitle\">This is Striped progress</h6>\r\n                <p><ngb-progressbar type=\"success\" [value]=\"25\" [striped]=\"true\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"info\" [value]=\"50\" [striped]=\"true\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\"></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\"></ngb-progressbar></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Progress bars with custom labels</h3>\r\n                <h6 class=\"card-subtitle\">This is basic Default pagination</h6>\r\n                <p><ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Progress bars with heights</h3>\r\n                <h6 class=\"card-subtitle\">This is basic Default pagination</h6>\r\n                <p><ngb-progressbar type=\"success\" [value]=\"25\">default</ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"info\" [value]=\"50\" height=\"10px\">10px</ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"warning\" [value]=\"75\" height=\".5rem\">.5rem</ngb-progressbar></p>\r\n                <p><ngb-progressbar type=\"danger\" [value]=\"100\" [height]=\"height\">{{height}}</ngb-progressbar></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Global configuration of progress bars</h3>\r\n                <h6 class=\"card-subtitle\">This is Global configuration of progress bars</h6>\r\n                <p>This progress bar uses the customized default values.</p>\r\n                <p><ngb-progressbar value=\"250\"></ngb-progressbar></p>\r\n\r\n                <p>This progress bar uses the customized default values, but changes the type using an input.</p>\r\n                <p><ngb-progressbar value=\"500\" type=\"info\"></ngb-progressbar></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/progressbar/progressbar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/progressbar/progressbar.component.ts ***!
  \****************************************************************/
/*! exports provided: NgbdpregressbarBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdpregressbarBasicComponent", function() { return NgbdpregressbarBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdpregressbarBasicComponent = /** @class */ (function () {
    function NgbdpregressbarBasicComponent(config) {
        this.height = '20px';
        // customize default values of progress bars used by this component tree
        config.max = 100;
        config.striped = true;
        config.animated = true;
        config.type = 'success';
    }
    NgbdpregressbarBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngbd-progressbar',
            template: __webpack_require__(/*! ./progressbar.component.html */ "./src/app/component/progressbar/progressbar.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]])
    ], NgbdpregressbarBasicComponent);
    return NgbdpregressbarBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/rating/rating.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/rating/rating.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Basic demo</h3>\r\n                <h6 class=\"card-subtitle\">This is basic demo for rating {{currentRate}}</h6>\r\n                <ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\r\n\r\n                <div class=\"m-t-10\">Rate:\r\n                    <b>{{currentRate}}</b>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Custom star template</h3>\r\n                <h6 class=\"card-subtitle\">Custom rating template provided as child element</h6>\r\n                <ngb-rating [(rate)]=\"currentRate\">\r\n                    <ng-template let-fill=\"fill\">\r\n                        <span class=\"star\" [class.filled]=\"fill === 100\">&#9733;</span>\r\n                    </ng-template>\r\n                </ngb-rating>\r\n\r\n                <div class=\"m-t-10\">Rate:\r\n                    <b>{{currentRate}}</b>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Events and readonly ratings</h3>\r\n                <h6 class=\"card-subtitle\">This is demo for readonly ratings </h6>\r\n                <ngb-rating [(rate)]=\"selected\" (hover)=\"hovered=$event\" (leave)=\"hovered=0\" [readonly]=\"readonly\"></ngb-rating>\r\n                <div class=\"m-t-10\">Selected:\r\n                    <b>{{selected}}</b>\r\n                    <br/>Hovered:\r\n                    <b>{{hovered}}</b>\r\n                </div>\r\n                <button class=\"btn btn-sm m-t-10 btn-outline-{{readonly ? 'danger' : 'success'}}\" (click)=\"readonly = !readonly\">\r\n                    {{ readonly ? \"readonly\" : \"editable\"}}\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Custom decimal rating</h3>\r\n                <h6 class=\"card-subtitle\">Custom rating template provided via a variable. Shows fine-grained rating display</h6>\r\n                <ng-template #t let-fill=\"fill\">\r\n                    <span *ngIf=\"fill === 100\" class=\"heart full\">&hearts;</span>\r\n                    <span *ngIf=\"fill === 0\" class=\"heart\">&hearts;</span>\r\n                    <span *ngIf=\"fill < 100 && fill > 0\" class=\"heart\">\r\n                        <span class=\"half\" [style.width.%]=\"fill\">&hearts;</span>&hearts;\r\n                    </span>\r\n                </ng-template>\r\n\r\n                <ngb-rating [(rate)]=\"currentRate2\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\r\n                <div>Rate:\r\n                    <b>{{currentRate2}}</b>\r\n                </div>\r\n                <button class=\"btn btn-sm btn-outline-primary\" (click)=\"currentRate2 = 1.50\">1.50</button>\r\n                <button class=\"btn btn-sm btn-outline-primary\" (click)=\"currentRate2 = 4.72\">4.72</button>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Form integration</h3>\r\n                <h6 class=\"card-subtitle\">NgModel and reactive forms can be used without the 'rate' binding</h6>\r\n                <div class=\"form-group\" [class.has-success]=\"ctrl.valid\" [class.has-danger]=\"ctrl.invalid\">\r\n                    <ngb-rating [formControl]=\"ctrl\"></ngb-rating>\r\n                    <div class=\"form-control-feedback\">\r\n                        <div *ngIf=\"ctrl.valid\">Thanks!</div>\r\n                        <div *ngIf=\"ctrl.errors\">Please rate us</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr>\r\n                <pre>Model: <b>{{ ctrl.value }}</b></pre>\r\n                <button class=\"btn btn-sm btn-outline-{{ ctrl.disabled ? 'danger' : 'success'}}\" (click)=\"toggle()\">\r\n                    {{ ctrl.disabled ? \"control disabled\" : \" control enabled\" }}\r\n                </button>\r\n                <button class=\"btn btn-sm btn-outline-primary\" (click)=\"ctrl.setValue(null)\">Clear</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/rating/rating.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/rating/rating.component.ts ***!
  \******************************************************/
/*! exports provided: NgbdratingBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdratingBasicComponent", function() { return NgbdratingBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NgbdratingBasicComponent = /** @class */ (function () {
    function NgbdratingBasicComponent() {
        this.currentRate = 8;
        this.currentRate2 = 2;
        this.selected = 0;
        this.hovered = 0;
        this.readonly = false;
        // for form integration
        this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    NgbdratingBasicComponent.prototype.toggle = function () {
        if (this.ctrl.disabled) {
            this.ctrl.enable();
        }
        else {
            this.ctrl.disable();
        }
    };
    NgbdratingBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngbd-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/component/rating/rating.component.html"),
            styles: [
                "\n      .star {\n        font-size: 1.5rem;\n        color: #b0c4de;\n      }\n      .filled {\n        color: #1e90ff;\n      }\n      .heart {\n        position: relative;\n        display: inline-block;\n        font-size: 3rem;\n        color: #d3d3d3;\n      }\n      .full {\n        color: red;\n      }\n      .half {\n        position: absolute;\n        display: inline-block;\n        overflow: hidden;\n        color: red;\n      }\n    "
            ]
        })
    ], NgbdratingBasicComponent);
    return NgbdratingBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/tabs/tabs.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/tabs/tabs.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Default Tabset</h3>\r\n                <h6 class=\"card-subtitle\">This is basic Default pagination</h6>\r\n                <ngb-tabset>\r\n                  <ngb-tab title=\"Simple\">\r\n                    <ng-template ngbTabContent>\r\n                      <p class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab>\r\n                    <ng-template ngbTabTitle><b>Fancy</b></ng-template>\r\n                    <ng-template ngbTabContent>\r\n                      <p class=\"p-t-20\">Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\r\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\r\n                      sint qui sapiente accusamus tattooed echo park.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n                    <ng-template ngbTabContent>\r\n                      <p class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                </ngb-tabset>\r\n        </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Pills</h3>\r\n                <h6 class=\"card-subtitle\">This is Pills demo</h6>\r\n                <ngb-tabset type=\"pills\">\r\n                  <ngb-tab title=\"Simple\">\r\n                    <ng-template ngbTabContent>\r\n                      <p  class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab>\r\n                    <ng-template ngbTabTitle><b>Fancy</b></ng-template>\r\n                    <ng-template ngbTabContent>\r\n                      <p  class=\"p-t-20\">Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\r\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\r\n                      sint qui sapiente accusamus tattooed echo park.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n                    <ng-template ngbTabContent>\r\n                      <p  class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                </ngb-tabset>\r\n        </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Select an active tab by id</h3>\r\n                <h6 class=\"card-subtitle\">This is Pagination size</h6>\r\n                <ngb-tabset #t=\"ngbTabset\">\r\n                  <ngb-tab id=\"tab-selectbyid1\" title=\"Simple\">\r\n                    <ng-template ngbTabContent>\r\n                      <p class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab id=\"tab-selectbyid2\">\r\n                    <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n                    <ng-template ngbTabContent>\r\n                      <p class=\"p-t-20\">Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\r\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\r\n                      sint qui sapiente accusamus tattooed echo park.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                </ngb-tabset>\r\n\r\n                <p>\r\n                  <button class=\"btn btn-outline-primary\" (click)=\"t.select('tab-selectbyid2')\">Selected tab with \"tab-selectbyid2\" id</button>\r\n                </p>\r\n        </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Prevent tab change</h3>\r\n                <h6 class=\"card-subtitle\">This is Prevent tab change</h6>\r\n                <ngb-tabset  (tabChange)=\"beforeChange($event)\">\r\n                  <ngb-tab id=\"tab-preventchange1\" title=\"Simple\">\r\n                    <ng-template ngbTabContent>\r\n                      <p class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab id=\"tab-preventchange2\" title=\"I can't be selected...\">\r\n                    <ng-template ngbTabContent>\r\n                      <p class=\"p-t-20\">Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\r\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\r\n                      sint qui sapiente accusamus tattooed echo park.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab title=\"But I can!\" >\r\n                    <ng-template ngbTabContent>\r\n                      <p class=\"p-t-20\">Heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                </ngb-tabset>\r\n         </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Nav Justification</h3>\r\n                <h6 class=\"card-subtitle\">This is Prevent tab change</h6>\r\n                <ngb-tabset [justify]=\"currentJustify\">\r\n                  <ngb-tab title=\"Simple\">\r\n                    <ng-template ngbTabContent>\r\n                      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab>\r\n                    <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n                    <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n                      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\r\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\r\n                      sint qui sapiente accusamus tattooed echo park.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab title=\"A very long nav title\">\r\n                    <ng-template ngbTabContent>\r\n                      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                </ngb-tabset>\r\n                <div class=\"btn-group btn-group-toggle m-t-20\" ngbRadioGroup [(ngModel)]=\"currentJustify\">\r\n                  <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                    <input ngbButton type=\"radio\" value=\"start\">Start\r\n                  </label>\r\n                  <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                    <input ngbButton type=\"radio\" value=\"center\">Center\r\n                  </label>\r\n                  <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                    <input ngbButton type=\"radio\" value=\"end\">End\r\n                  </label>\r\n                  <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                    <input ngbButton type=\"radio\" value=\"fill\">Fill\r\n                  </label>\r\n                  <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                    <input ngbButton type=\"radio\" value=\"justified\">Justified\r\n                  </label>\r\n                </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Nav Orientation</h3>\r\n                <ngb-tabset type=\"pills\" [orientation]=\"currentOrientation\">\r\n                  <ngb-tab title=\"Simple\">\r\n                    <ng-template ngbTabContent>\r\n                      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab>\r\n                    <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n                    <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n                      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\r\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\r\n                      sint qui sapiente accusamus tattooed echo park.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n                    <ng-template ngbTabContent>\r\n                      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi. Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio. Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna, egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                </ngb-tabset>\r\n\r\n                <div class=\"btn-group btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"currentOrientation\">\r\n                  <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                    <input ngbButton type=\"radio\" value=\"horizontal\">Horizontal\r\n                  </label>\r\n                  <label ngbButtonLabel class=\"btn-primary btn-sm\">\r\n                    <input ngbButton type=\"radio\" value=\"vertical\">Vertical\r\n                  </label>\r\n                </div>\r\n         </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/tabs/tabs.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/tabs/tabs.component.ts ***!
  \**************************************************/
/*! exports provided: NgbdtabsBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdtabsBasicComponent", function() { return NgbdtabsBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdtabsBasicComponent = /** @class */ (function () {
    function NgbdtabsBasicComponent() {
        this.currentJustify = 'start';
        this.currentOrientation = 'horizontal';
    }
    NgbdtabsBasicComponent.prototype.beforeChange = function ($event) {
        if ($event.nextId === 'tab-preventchange2') {
            $event.preventDefault();
        }
    };
    NgbdtabsBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngbd-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/component/tabs/tabs.component.html")
        })
    ], NgbdtabsBasicComponent);
    return NgbdtabsBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/timepicker/timepicker.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/timepicker/timepicker.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Timepicker</h3>\r\n                <h6 class=\"card-subtitle\">This is basic Timepicker</h6>\r\n                <ngb-timepicker [(ngModel)]=\"time\"></ngb-timepicker>\r\n                <pre>Selected time: {{time | json}}</pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Spinners</h3>\r\n                <h6 class=\"card-subtitle\">This is Spinners</h6>\r\n                <ngb-timepicker [(ngModel)]=\"time\" [spinners]=\"spinners\"></ngb-timepicker>\r\n                <button class=\"m-t-1 m-t-10 btn btn-sm btn-outline-{{spinners ? 'success' : 'danger'}}\" (click)=\"toggleSpinners()\">\r\n                    Spinners - {{spinners ? \"ON\" : \"OFF\"}}\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Meridian</h3>\r\n                <h6 class=\"card-subtitle\">This is Meridian Timepicker</h6>\r\n                <ngb-timepicker [(ngModel)]=\"time\" [meridian]=\"meridian\"></ngb-timepicker>\r\n                <button class=\"btn btn-sm btn-outline-{{meridian ? 'success' : 'danger'}}\" (click)=\"toggleMeridian()\">\r\n                    Meridian - {{meridian ? \"ON\" : \"OFF\"}}\r\n                </button>\r\n                <hr>\r\n                <pre>Selected time: {{time | json}}</pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Seconds</h3>\r\n                <h6 class=\"card-subtitle\">This is Seconds with the on off</h6>\r\n                <ngb-timepicker [(ngModel)]=\"time\" [seconds]=\"seconds\"></ngb-timepicker>\r\n                <button class=\"btn btn-sm btn-outline-{{seconds ? 'success' : 'danger'}}\" (click)=\"toggleSeconds()\">\r\n                    Seconds - {{seconds ? \"ON\" : \"OFF\"}}\r\n                </button>\r\n                <hr>\r\n                <pre>Selected time: {{time | json}}</pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Custom steps</h3>\r\n                <h6 class=\"card-subtitle\">This is Custom steps</h6>\r\n                <ngb-timepicker [(ngModel)]=\"time2\" [seconds]=\"true\" [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [secondStep]=\"secondStep\"></ngb-timepicker>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <label for=\"changeHourStep\">Hour Step</label>\r\n                        <input id=\"changeHourStep\" type=\"number\" class=\"form-control form-control\" [(ngModel)]=\"hourStep\" />\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <label for=\"changeMinuteStep\">Minute Step</label>\r\n                        <input id=\"changeMinuteStep\" type=\"number\" class=\"form-control form-control\" [(ngModel)]=\"minuteStep\" />\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <label for=\"changeSecondStep\">Second Step</label>\r\n                        <input id=\"changeSecondStep\" type=\"number\" class=\"form-control form-control\" [(ngModel)]=\"secondStep\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <pre class=\"m-t-20\">Selected time: {{time2 | json}}</pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Custom validation</h3>\r\n                <h6 class=\"card-subtitle\">Illustrates custom validation, you have to select time between 12:00 and 13:59</h6>\r\n                <div class=\"form-group\" [class.has-success]=\"ctrl.valid\" [class.has-danger]=\"!ctrl.valid\">\r\n                    <ngb-timepicker [(ngModel)]=\"time3\" [formControl]=\"ctrl\" required></ngb-timepicker>\r\n                    <div class=\"form-control-feedback\">\r\n                        <div *ngIf=\"ctrl.valid\">Great choice</div>\r\n                        <div *ngIf=\"ctrl.errors && ctrl.errors['required']\">Select some time during lunchtime</div>\r\n                        <div *ngIf=\"ctrl.errors && ctrl.errors['tooLate']\">Oh no, it's way too late</div>\r\n                        <div *ngIf=\"ctrl.errors && ctrl.errors['tooEarly']\">It's a bit too early</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr>\r\n                <pre>Selected time: {{time3 | json}}</pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/timepicker/timepicker.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/timepicker/timepicker.component.ts ***!
  \**************************************************************/
/*! exports provided: NgbdtimepickerBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdtimepickerBasicComponent", function() { return NgbdtimepickerBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NgbdtimepickerBasicComponent = /** @class */ (function () {
    function NgbdtimepickerBasicComponent() {
        this.time = { hour: 13, minute: 30 };
        this.meridian = true;
        // This is for the seconds
        this.seconds = true;
        // This is for the spinners
        this.spinners = true;
        // This is for the column step
        this.time2 = { hour: 13, minute: 30, second: 0 };
        this.hourStep = 1;
        this.minuteStep = 15;
        this.secondStep = 30;
        this.ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', function (control) {
            var value = control.value;
            if (!value) {
                return null;
            }
            if (value.hour < 12) {
                return { tooEarly: true };
            }
            if (value.hour > 13) {
                return { tooLate: true };
            }
            return null;
        });
    }
    NgbdtimepickerBasicComponent.prototype.toggleMeridian = function () {
        this.meridian = !this.meridian;
    };
    NgbdtimepickerBasicComponent.prototype.toggleSeconds = function () {
        this.seconds = !this.seconds;
    };
    NgbdtimepickerBasicComponent.prototype.toggleSpinners = function () {
        this.spinners = !this.spinners;
    };
    NgbdtimepickerBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngbd-timepicker',
            template: __webpack_require__(/*! ./timepicker.component.html */ "./src/app/component/timepicker/timepicker.component.html")
        })
    ], NgbdtimepickerBasicComponent);
    return NgbdtimepickerBasicComponent;
}());



/***/ }),

/***/ "./src/app/component/typehead/typehead.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/typehead/typehead.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Simple Typeahead</h3>\r\n                <h6 class=\"card-subtitle\">A typeahead example that gets values from a static string</h6>\r\n                <label for=\"typeahead-basic\">Search for a USA state:</label>\r\n                <input id=\"typeahead-basic\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model1\" [ngbTypeahead]=\"search1\"/>\r\n                <div class=\"m-t-10\">Model: {{ model1 | json }}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Formatted results</h3>\r\n                <h6 class=\"card-subtitle\">A typeahead example that uses a formatter function for string results</h6>\r\n                <label for=\"typeahead-format\">Search for a state:</label>\r\n                <input id=\"typeahead-format\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model3\" [ngbTypeahead]=\"search3\" [resultFormatter]=\"formatter\" />\r\n                <hr>\r\n                <pre>Model: {{ model3 | json }}</pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Template for results</h3>\r\n                <h6 class=\"card-subtitle\">A typeahead example that uses custom template for results display and uses object as a model</h6>\r\n                <ng-template #rt let-r=\"result\" let-t=\"term\">\r\n                  <img [src]=\"'https://upload.wikimedia.org/wikipedia/commons/thumb/' + r.flag\" width=\"16\">\r\n                  {{ r.name}}\r\n                </ng-template>\r\n\r\n                <label for=\"typeahead-template\">Search for a state:</label>\r\n                <input id=\"typeahead-template\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model5\" [ngbTypeahead]=\"search5\" [resultTemplate]=\"rt\"\r\n                [inputFormatter]=\"formatter5\" />\r\n                <hr>\r\n                <pre>Model: {{ model5 | json }}</pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">Open on Focus</h3>\r\n                <h6 class=\"card-subtitle\">It is possible to get the focus events with the current input value</h6>\r\n                <label for=\"typeahead-focus\">Search for a state:</label>\r\n                <input\r\n                  id=\"typeahead-focus\"\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  [(ngModel)]=\"model2\"\r\n                  [ngbTypeahead]=\"search2\"\r\n                  (focus)=\"focus$.next($event.target.value)\"\r\n                  (click)=\"click$.next($event.target.value)\"\r\n                  #instance=\"ngbTypeahead\"\r\n                />\r\n                <hr>\r\n                <pre>Model: {{ model2 | json }}</pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/typehead/typehead.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/typehead/typehead.component.ts ***!
  \**********************************************************/
/*! exports provided: WikipediaService, NgbdtypeheadBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WikipediaService", function() { return WikipediaService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdtypeheadBasicComponent", function() { return NgbdtypeheadBasicComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var states = [
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District Of Columbia',
    'Federated States Of Micronesia',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Marshall Islands',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Northern Mariana Islands',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Palau',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virgin Islands',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
];
var statesWithFlags = [
    {
        name: 'Alabama',
        flag: '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'
    },
    {
        name: 'Alaska',
        flag: 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'
    },
    {
        name: 'Arizona',
        flag: '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'
    },
    {
        name: 'Arkansas',
        flag: '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'
    },
    {
        name: 'California',
        flag: '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'
    },
    {
        name: 'Colorado',
        flag: '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'
    },
    {
        name: 'Connecticut',
        flag: '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'
    },
    {
        name: 'Delaware',
        flag: 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'
    },
    {
        name: 'Florida',
        flag: 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'
    },
    {
        name: 'Georgia',
        flag: '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'
    },
    {
        name: 'Hawaii',
        flag: 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'
    },
    { name: 'Idaho', flag: 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png' },
    {
        name: 'Illinois',
        flag: '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'
    },
    {
        name: 'Indiana',
        flag: 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'
    },
    { name: 'Iowa', flag: 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png' },
    {
        name: 'Kansas',
        flag: 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'
    },
    {
        name: 'Kentucky',
        flag: '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'
    },
    {
        name: 'Louisiana',
        flag: 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'
    },
    { name: 'Maine', flag: '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png' },
    {
        name: 'Maryland',
        flag: 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'
    },
    {
        name: 'Massachusetts',
        flag: 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'
    },
    {
        name: 'Michigan',
        flag: 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'
    },
    {
        name: 'Minnesota',
        flag: 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'
    },
    {
        name: 'Mississippi',
        flag: '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'
    },
    {
        name: 'Missouri',
        flag: '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'
    },
    {
        name: 'Montana',
        flag: 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'
    },
    {
        name: 'Nebraska',
        flag: '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'
    },
    {
        name: 'Nevada',
        flag: 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'
    },
    {
        name: 'New Hampshire',
        flag: '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'
    },
    {
        name: 'New Jersey',
        flag: '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'
    },
    {
        name: 'New Mexico',
        flag: 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'
    },
    {
        name: 'New York',
        flag: '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'
    },
    {
        name: 'North Carolina',
        flag: 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'
    },
    {
        name: 'North Dakota',
        flag: 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'
    },
    { name: 'Ohio', flag: '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png' },
    {
        name: 'Oklahoma',
        flag: '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'
    },
    {
        name: 'Oregon',
        flag: 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'
    },
    {
        name: 'Pennsylvania',
        flag: 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'
    },
    {
        name: 'Rhode Island',
        flag: 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'
    },
    {
        name: 'South Carolina',
        flag: '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'
    },
    {
        name: 'South Dakota',
        flag: '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'
    },
    {
        name: 'Tennessee',
        flag: '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'
    },
    { name: 'Texas', flag: 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png' },
    { name: 'Utah', flag: 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png' },
    {
        name: 'Vermont',
        flag: '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'
    },
    {
        name: 'Virginia',
        flag: '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'
    },
    {
        name: 'Washington',
        flag: '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'
    },
    {
        name: 'West Virginia',
        flag: '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'
    },
    {
        name: 'Wisconsin',
        flag: '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'
    },
    {
        name: 'Wyoming',
        flag: 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'
    }
];
var WikipediaService = /** @class */ (function () {
    function WikipediaService() {
    }
    WikipediaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], WikipediaService);
    return WikipediaService;
}());

var NgbdtypeheadBasicComponent = /** @class */ (function () {
    function NgbdtypeheadBasicComponent() {
        var _this = this;
        this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.search1 = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) {
                return term.length < 2
                    ? []
                    : states
                        .filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })
                        .slice(0, 10);
            })
            // tslint:disable-next-line:semicolon
            );
        };
        this.search2 = function (text$) {
            var debouncedText$ = text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
            var clicksWithClosedPopup$ = _this.click$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function () { return !_this.instance.isPopupOpen(); }));
            var inputFocus$ = _this.focus$;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) {
                return (term === ''
                    ? states
                    : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 10);
            }));
            // tslint:disable-next-line:semicolon
        };
        this.formatter = function (result) { return result.toUpperCase(); };
        this.search3 = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) {
                return term === ''
                    ? []
                    : states
                        .filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })
                        .slice(0, 10);
            })
            // tslint:disable-next-line:semicolon
            );
        };
        /* model4: any;
        searching = false;
        searchFailed = false;
      
        constructor(private _service: WikipediaService) {}
      
        search = (text$: Observable<string>) =>
          text$.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            tap(() => this.searching = true),
            switchMap(term =>
              this._service.search(term).pipe(
                tap(() => this.searchFailed = false),
                catchError(() => {
                  this.searchFailed = true;
                  return of([]);
                }))
            ),
            tap(() => this.searching = false)
          );*/
        this.search5 = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (term) {
                return term === ''
                    ? []
                    : statesWithFlags
                        .filter(function (v) { return v.name.toLowerCase().indexOf(term.toLowerCase()) > -1; })
                        .slice(0, 10);
            })
            // tslint:disable-next-line:semicolon
            );
        };
        this.formatter5 = function (x) { return x.name; };
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('instance'),
        __metadata("design:type", Object)
    ], NgbdtypeheadBasicComponent.prototype, "instance", void 0);
    NgbdtypeheadBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-ngbd-typehead',
            template: __webpack_require__(/*! ./typehead.component.html */ "./src/app/component/typehead/typehead.component.html"),
            providers: [WikipediaService]
        })
    ], NgbdtypeheadBasicComponent);
    return NgbdtypeheadBasicComponent;
}());



/***/ })

}]);
//# sourceMappingURL=component-component-module.js.map