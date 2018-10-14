# Default icons collection used by SimpleSVG CDN

This is collection of SVG icons created by various authors, released under various free licenses. Some collections require attribution when used for commercial purposes. See [collections.md](./collections.md) for list of collections and their licenses.

All SVG icons have been cleaned up. Content has been optimized, colors for monotone icons have been replaced with currentColor, ready to be inserted in HTML. Tools used for creating this collection are available on [https://simplesvg.com](http://simplesvg.com/)

This library is intended to be used in packages that build components, such as SimpleSVG API.


## Usage

Installation should be done from GitHub because it is updated daily (unless there is nothing to update) to include latest icons. Instructions below are for Node.js and PHP projects.


#### Node.js

Run this command to add icons to your project:

```
npm install --save git+https://github.com/simplesvg/icons.git
```

Icons will be available in node_modules/simple-svg-icons-data/

To resolve filename for any json file, use this:

```
const icons = require('simple-svg-icons-data');

// returns location of fa.json
let fa = icons.locate('fa');
```


#### PHP

Install and initialize Composer project. See documentation at [https://getcomposer.org](https://getcomposer.org)

Then open composer.json and add following code:

```
"repositories": [
{
    "type": "vcs",
    "url": "git@github.com:simplesvg/icons.git"
}
],
"require": {
    "php": ">=5.6",
    "simple-svg/icons-data": "dev-master"
}
```

then run:

```
composer install
```

Icons will be available in vendor/simple-svg/icons-data/

If you don't use Composer, clone GitHub repository and add necessary autoload code.

To resolve filename for any json file, use this:

```
// returns location of fa.json
$fa = \SimpleSVG\IconsData\Finder::locate('fa');
```


## Format

Icons used by SimpleSVG are in directory json, in SimpleSVG JSON format.

Why JSON instead of SVG? To load images in bulk. 

If you need individual SVG images, you can generate them using SimpleSVG Tools available here: https://github.com/simplesvg/tools

Format of json file is very simple:

```
{
    "icons": {
        "icon-name": {
            "body": "svg body",
            "width": width,
            "height": height
        }
    },
    "aliases": {
        "icon-alias": {
            "parent": "icon-name"
        }
    },
    "width": default width,
    "height": default height
}
```

"icons" object contains list of all icons.

Each icon has following properties:
* body - icon body
* width - width in pixels
* height - height in pixels
* rotate - rotation. Default = 0. Values: 0 = 0deg, 1 = 90deg, 2 = 180deg, 3 = 270deg. Rotation should be added to svg element using css transformation rotate(0deg)
* hFlip - horizontal flip. Boolean value, default = false. Flip should be added to svg element using css transformation scale(-1, 1)
* vFlip - vertical flip. Boolean value, default = false. Flip should be added to svg element using css transformation scale(1, -1)
* hidden - If set to true, icon is hidden. That means icon was removed from collection for some reason, but it is kept in JSON file to prevent applications that rely on old icon from breaking

Width or height might be missing. If icon does not have width or height, use default width or height from root object.
rotate, hFlip and vFlip are all optional.

Optional "aliases" object contains list of aliases for icons. Format is similar to "icons" object, with additional property "parent" that points to parent icon. Any other properties overwrite properties of parent icon.

For more information see developer documentation on [https://simplesvg.com/docs/json-icon-format/](https://simplesvg.com/docs/json-icon-format/)


## License

This is collection of works by various authors, not original collection.

See [collections.md](./collections.md) for list of collections and their licenses.
