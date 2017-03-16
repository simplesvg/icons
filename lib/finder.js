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
const fs = require('fs');
const dir = path.dirname(__dirname);

module.exports = {
    /**
     * Get root directory of this package
     * (not really useful in Node.js because require can do it, but added anyway to match php code)
     *
     * @returns {string}
     */
    rootDir: () => dir,

    /**
     * Locate JSON file
     *
     * @param {string} name Library name
     * @returns {string} Path to library json file
     */
    locate: name => dir + '/json/' + name + '.js',

    /**
     * Get list of libraries
     *
     * @return {object|null}
     */
    libraries: () => {
        try {
            let data = fs.readFileSync(dir + '/libraries.json', 'utf8');
            data = JSON.parse(data);
            return data;
        } catch (err) {
            return null;
        }
    }
};
