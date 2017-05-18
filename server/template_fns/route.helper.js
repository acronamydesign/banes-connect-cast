"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var url = require("url");
/**
 * Usefull string helpers
*/
exports.stringFunctions = {
    capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    hyphanate: function (str) {
        return str.replace(/_/g, "-");
    }
};
/**
 * Usefull route misc helpers
*/
function routeHelper(data) {
    var helper = __assign({ find: function (prop, val) {
            return data.filter(function (cbdata) {
                return cbdata[prop] == val;
            });
        }, data: data }, exports.stringFunctions);
    return helper;
}
exports.routeHelper = routeHelper;
function hasQueryString(req) {
    return Object.keys(url.parse(req.url, true).query).length > 0;
}
exports.hasQueryString = hasQueryString;
function hypertextProtocal(str, protocal) {
    if (new RegExp(protocal, "g").test(str)) {
        return str;
    }
    else {
        return protocal + str;
    }
}
exports.hypertextProtocal = hypertextProtocal;
