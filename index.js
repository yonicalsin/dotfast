"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_all_utils_1 = require("is-all-utils");
var dotfast = function (data, paths, defaultVal) {
    if (is_all_utils_1.isObj(paths)) {
        var payload = is_all_utils_1.isObject(paths) ? {} : [];
        for (var _i = 0, _a = Object.entries(paths); _i < _a.length; _i++) {
            var _b = _a[_i], pathKey = _b[0], path = _b[1];
            payload[pathKey] = dotfast(data, path);
        }
        return payload;
    }
    var names = paths
        .split(/[,[\].]+?/)
        .filter(Boolean)
        .reverse();
    while (names.length && !is_all_utils_1.isNil(data)) {
        data = data[names.pop()];
    }
    return data || defaultVal;
};
exports.d = dotfast;
exports.dotfast = dotfast;
exports.default = dotfast;
