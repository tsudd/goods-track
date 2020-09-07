"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
var evrooptParser_1 = require("./parsers/evrooptParser");
var greenParser_1 = require("./parsers/greenParser");
var sosediParser_1 = require("./parsers/sosediParser");
var writeJSON_1 = require("./modules/writeJSON");
var fs = require('fs');
var outputJSONFileMame = 'dist.json';
exports.main = function () {
    var products = [];
    sosediParser_1.sosediParser().then(function (productsPages) {
        writeJSON_1.writeJSON(productsPages, outputJSONFileMame);
    });
    greenParser_1.greenParser();
    evrooptParser_1.evrooptParser();
};
exports.main();
