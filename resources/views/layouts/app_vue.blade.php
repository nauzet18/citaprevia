<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->

    <!-- Styles de Vuetify -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">

    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    @yield('custom_css')
  </head>
  <body>
    @yield('content')

    @yield('scripts_js')
  </body>
</html>