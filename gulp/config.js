
var package = require( '../package.json' );
var src     = './src';

/**
 * 汎用タスクから参照される設定です。
 *
 * @type {Object}
 */
module.exports = {
    /**
     * タスク 'css' の設定です。
     * Stylus ファイルを CSS にコンパイル & 結合します。
     * 結合順を保証するため、src には明示的に対象ファイルを定義しています。
     * 以下の npm に依存しています。
     *
     * gulp gulp-load-plugins gulp-stylus gulp-concat gulp-plumber gulp-sourcemaps
     */
    css: {
        depends: [],
        src:     [ src + '/stylus/Icon.styl',
                   src + '/stylus/App.styl'
                 ],
        dest :   src,
        bundle:  'style.css'
    },

    /**
     * タスク 'clean' の設定です。
     * 指定されたファイルやフォルダを消去します。
     * 以下の npm に依存しています。
     *
     * gulp del
     */
    clean: {
        depends: [],
        src:     [ './dist' ]
    },

    /**
     * タスク 'copy' の設定です。
     * 指定されたファイルやフォルダをコピーします。
     * 以下の npm に依存しています。
     *
     * gulp
     */
    copy: {
        depends: [ 'clean', 'css' ],
        src:     [ src + '/*.php',
                   src + '/style.css',
                   src + '/readme.txt',
                   src + '/screenshot-1.png',
                   src + '/fonts/**'
                 ],
        base:    src,
        dest:    './dist',
    },

    /**
     * タスク 'zip' の設定です。
     * 指定されたファイルやフォルダを単一の ZIP ファイルに固めます。
     * 以下の npm に依存しています。
     *
     * gulp gulp-load-plugins gulp-zip
     */
    zip: {
        depends: [],
        src:     './dist/**/*',
        base:    './dist',
        dest:    './',
        file:    package.name + '.zip'
    }
};