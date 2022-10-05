<?php
/*
Plugin Name: React Block
Author: Nitin
Version: 1.0
Description: Gutenberg Components
*/
function ngblockplugin_register_block()
{

    // Hero Box
    wp_register_script(
        'ngblockplugin',
        plugins_url('build/index.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor'),
        @filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
    );

    // Register editor style src/editor.css
    wp_register_style(
        'ngblockplugin-editor-style',
        get_template_directory_uri() . "/editor-style.css",
        array('wp-edit-blocks'),
        @filemtime(plugin_dir_path(__FILE__) . 'src/editor.css')
    );

    wp_register_style(
        'ngblockplugin-frontend-style',
        get_template_directory_uri() . "/editor-style.css",
        array('wp-edit-blocks'),
        @filemtime(plugin_dir_path(__FILE__) . 'src/editor.css')
    );





    //     <link rel="stylesheet" href="/assets/flickity/css/flickity.css" media="screen">
    // <script src="/assets/flickity/js/flickity.pkgd.min.js"></script>


    $array_blocks = [
        'hero-box-1',
        'info-box-1',
        'media-box',
        'text-box-1',
        'info-box-2',
        'info-box-3',
        'info-box-4',
        'hero-box-2',
        'info-box-5',
        'content-box-1',
        'info-box-6',
        'info-box-7',
        'info-box-8',
        'slider-box-1',
        'timeline-box-1',
        'video-box-1',
        'quote-box-1',
        'quote-box-2',
    ];

    foreach ($array_blocks as $key => $item) {
        register_block_type('ngblockplugin/' . $item, array(
            'editor_script' => 'ngblockplugin',
            'editor_style' => 'ngblockplugin-editor-style',
            'style' => 'ngblockplugin-frontend-style',
        ));
    }
}




add_action('init', 'ngblockplugin_register_block');

function load_fronslider_script()
{
    wp_enqueue_script(
        'custom-script',
        get_template_directory_uri() . '/assets/flickity/js/flickity.pkgd.min.js',
        array('jquery')
    );

    wp_enqueue_script(
        'custom-script',
        get_template_directory_uri() . '/assets/js/theme.js',
        array('jquery')
    );
}

function load_fronslider_css()
{
    wp_enqueue_style(
        'custom-script',
        get_template_directory_uri() . '/assets/flickity/css/flickity.css',
        false
    );
}
add_action('wp_enqueue_scripts', 'load_fronslider_script');
add_action('wp_head', 'load_fronslider_css');
