var gulp   = require( 'gulp' );
var config = require( '../config.js' ).copy;

/**
 * 指定されたファイルやフォルダを単一の ZIP ファイルに固めます。
 *
 * @return {Object} ストリーム。
 */
gulp.task( 'copy', config.depends, function() {
    return gulp.src( config.src, { base: config.base } )
        .pipe( gulp.dest( config.dest ) );
} );
