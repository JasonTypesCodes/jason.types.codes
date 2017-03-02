require('@typopro/web-source-sans-pro/TypoPRO-SourceSansPro.css');
require('@typopro/web-source-code-pro/TypoPRO-SourceCodePro.css');
require('font-awesome/css/font-awesome.css');

require('./hvr_animations.css');
require('./main.css');
require('./articles.css');

require('./ext/animate.css.js');

require('script!jquery/dist/jquery');

$(function load() {
  $('#articlesAnchor').click(function(){
    $('#articles').show();
  });
});
