const mix = require('laravel-mix');
const path = require('path');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'resources/js')
    }
  },
  plugins: [

  ]
});


mix.js('resources/js/app.js', 'public/js')
   .postCss('resources/css/app.css', 'public/css', [
        //
   ])
   .extract(['vue'])
   .vue()
   //.sourceMaps()  //Esto quita el error de DevTools failed to load source map: Could not load content for http://localhost/js/vuetify.js.map: HTTP error: status code 404, net::ERR_HTTP_RESPONSE_CODE_FAILURE.  Pero luego  veo avisos... a ver si un dia miro q son los sourcemap  y en q ayudan
   ;

if (mix.inProduction()) {
    mix.version();
}
