var gulp   = require( 'gulp' );
var config = require( '../config' ).clean;
var del    = require( 'del' );

/**
 * リリース用イメージを削除します。
 *
 * @param {Function} cb コールバック関数。
 */
gulp.task( 'clean', config.depends, function( cb ) {
    del( config.src, cb );
} );
