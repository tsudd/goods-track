"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeJSON = void 0;
var fs = require('fs');
exports.writeJSON = function (productsPages, fileName) {
    var products = [];
    for (var i = 0; i < productsPages.length; i++) {
        products.push.apply(products, productsPages[i]);
    }
    var productsString = JSON.stringify(products);
    fs.writeFile(fileName, productsString, 'utf8', function () {
        console.log('The file has been written');
    });
};
