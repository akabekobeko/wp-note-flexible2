var gulp   = require( 'gulp' );
var $      = require( 'gulp-load-plugins' )();
var config = require( '../config.js' ).css;

/**
 * Stylus ファイルをコンパイル & 結合します。
 *
 * @return {Object} ストリーム。
 */
gulp.task( 'css', config.depends, function() {
    return gulp.src( config.src )
        .pipe( $.plumber() )
        .pipe( $.sourcemaps.init() )
        .pipe( $.stylus() )
        .pipe( $.concat( config.bundle ) )
        .pipe( $.sourcemaps.write( '.' ) )
        .pipe( gulp.dest( config.dest ) );
} );
