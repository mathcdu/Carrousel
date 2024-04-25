<?php

/**
 * Plugin Name: Carrousel
 * Author: Mathieu Croteau-Dufour
 * Description: Affiche le carrousel associé à une galerie de Wordpress
 * Version: 1.0.0
 * Plugin URI: https://github.com/mathcdu/Carrousel
 * Author URI: 
 */
function eddym_enqueue()
{

  $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
  $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

  wp_enqueue_style(
    'em_plugin_carrousel_css',
    plugin_dir_url(__FILE__) . "style.css",
    array(),
    $version_css
  );

  wp_enqueue_script(
    'em_plugin_carrousel_js',
    plugin_dir_url(__FILE__) . "js/carrousel.js",
    array(),
    $version_js,
    true // permet d'ajouter le script à la fin du document
  );
}

add_action('wp_enqueue_scripts', 'eddym_enqueue');
/* IMPORTANT
wp_header() juste avant la fermeture de la balise </head> dans header.php
wp_footer() juste avant la fermeture de la balise </body> dans footer.php
*/

function genere_html()
{
  /////////////////////////////////////// HTML
  // Le conteneur d'une boîte modale
  $contenu = '
     <div class="carrousel">
      <button class="carrousel__x">X</button>
      <figure class="carrousel__figure"></figure>
      <form class="carrousel__form"></form>
     </div>';
  return $contenu;
}
add_shortcode('carrousel', 'genere_html');
