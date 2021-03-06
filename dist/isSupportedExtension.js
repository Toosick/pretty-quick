'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _prettier = require('prettier');

const extensions = (0, _prettier.getSupportInfo)().languages.reduce((prev, language) => prev.concat(language.extensions || []), []).concat('.html');

exports.default = file => extensions.includes((0, _path.extname)(file));