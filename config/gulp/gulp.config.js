var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var path = require('path');
var nodemon = require('nodemon');

require("./cordova.config.js");
require("./electron.config.js");
require("./browser.config.js");
require("./node.config.js");
require("./jasmine.config.js");
require("./karma.config.js");