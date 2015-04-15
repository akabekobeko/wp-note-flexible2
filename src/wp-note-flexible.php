<?php
/*
Plugin Name: WP-Note Flexible2
Plugin URI: https://github.com/akabekobeko/wp-note-flexible2
Description: Make nice notes with WP-Note Flexible in your post. This plug-in is based on the WP-Note ( http://wordpress.org/plugins/wp-note/ ).
Version: 1.0.1
Author: akabeko
Author URI: http://akabeko.me/
*/

/*  Copyright 2013 - 2015 akabeko

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
*/

/**
 * Implement the WP-Note Flexible2 plug-in.
 */
class WpNoteFlexible2 {
    /** Plugin version. */
    const VERSION = '1.0.1';

    /**
     * Initialize an instance.
     */
    function __construct()
    {
        if( is_admin() ) { return; }

        add_action( 'wp_enqueue_scripts', array( $this, 'wp_enqueue_styles' ) );

        add_shortcode( 'note',      array( $this, 'shortcode_note'      ) );
        add_shortcode( 'important', array( $this, 'shortcode_important' ) );
        add_shortcode( 'tip',       array( $this, 'shortcode_tip'       ) );
        add_shortcode( 'warning',   array( $this, 'shortcode_warning'   ) );
        add_shortcode( 'help',      array( $this, 'shortcode_help'      ) );
    }

    /**
     * Called to register a style sheet.
     */
    function wp_enqueue_styles()
    {
        $pluginDir = plugins_url( '', __FILE__ ) . '/';
        wp_enqueue_style( 'wp-note-flexible2', $pluginDir . 'style.css', array(), self::VERSION );
    }

    /**
     * It is called to process a short code
     * 
     * @param  string $type    Note type of WP-Note Flexible css classes.
     * @param  string $content Content of short code.
     *
     * @return string Replaced content.
     */
    function shortcode_common( $type, $content )
    {
        return '<div class="wpnf"><div class="body ' . $type . '"><i class="wpnf-icon-' . $type . '"></i><div class="text">' . $content . '</div></div></div>';
    }

    function shortcode_note( $att, $content )      { return $this->shortcode_common( 'note',      $content ); }
    function shortcode_important( $att, $content ) { return $this->shortcode_common( 'important', $content ); }
    function shortcode_tip( $att, $content )       { return $this->shortcode_common( 'tip',       $content ); }
    function shortcode_warning( $att, $content )   { return $this->shortcode_common( 'warning',   $content ); }
    function shortcode_help( $att, $content )      { return $this->shortcode_common( 'help',      $content ); }
}

/**
 * Initialize a WP-Note Flexible.
 */
function wp_note_flexible2_init()
{
    global $wp_note_flexible;
    $wp_note_flexible = new WpNoteFlexible2();
}

add_action( 'init', 'wp_note_flexible2_init' );

?>
