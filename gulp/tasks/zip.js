var gulp   = require( 'gulp' );
var $      = require( 'gulp-load-plugins' )();
var config = require( '../config.js' ).zip;

/**
 * 指定されたファイルやフォルダを単一の ZIP ファイルに固めます。
 *
 * @return {Object} ストリーム。
 */
gulp.task( 'zip', config.depends, function() {
    return gulp.src( config.src, { base: config.base } )
        .pipe( $.zip( config.file ) )
        .pipe( gulp.dest( config.dest ) );
} );
