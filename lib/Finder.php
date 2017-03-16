<?php

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

namespace SimpleSVG\Icons;

class Finder
{
    /**
     * Get root directory of this package
     *
     * @return string
     */
    public static function rootDir()
    {
        return dirname(dirname(__FILE__));
    }

    /**
     * Return path to json file
     *
     * @param string $name Library name
     * @return string Path to library json file
     */
    public static function locate($name)
    {
        return dirname(dirname(__FILE__)) . '/json/' . $name . '.json';
    }

    /**
     * Get list of libraries
     *
     * @return array|null
     */
    public static function libraries()
    {
        $filename = dirname(dirname(__FILE__)) . '/libraries.json';

        $data = @file_get_contents($filename);
        if (!is_string($data)) {
            return null;
        }
        $data = @json_decode($data, true);
        return is_array($data) ? $data : null;
    }
}
