@extends('layouts.app_vue')

@section('content')
    <noscript>
      <strong>Lo siento pero</strong> en esta web hace falta tener activado javascript
    </noscript>

    <div id='app'>
    </div>
@endsection

@section('scripts_js')
    <script src="/js/manifest.js"></script>
    <script src="/js/vendor.js"></script>
    <script src="{{ mix('js/app.js') }}"></script>
@endsection
