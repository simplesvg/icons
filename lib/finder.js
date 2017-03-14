/**
 * This file is part of the simple-svg libraries.
 *
 * (c) Vjacheslav Trushkin <cyberalien@gmail.com>
 *
 * @license MIT
 *
 * For the full copyright and license information, please view the license.txt
 * file that is available in this file's directory.
 */

"use strict";

const path = require('path');
const dir = path.dirname(__dirname) + '/json/';

/**
 * Locate JSON file
 *
 * @param {string} name Library name
 * @returns {string} Path to library json file
 */
module.exports = name => dir + name + '.js';
