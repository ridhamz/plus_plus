<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>




  <style>


    .b_frame {
        -webkit-box-shadow: 0px 19px 147px -41px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 19px 147px -41px rgba(0,0,0,0.75);
        box-shadow: 0px 19px 147px -41px rgba(0,0,0,0.75);


        float: left;
        width: 400px;
        height: 530px;


        margin-right: 80;

        border-radius: 40px;
    }
    .ChatText{

    margin-right: 200px;
  }


</style>
 <link rel="stylesheet" href="assets/css/style.css">


  <link rel="stylesheet" href="css/style.css">




    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
 @if(auth()->user())
    <script>
        window.user = {
            id: {{ auth()->id() }},
            name: "{{ auth()->user()->name }}"
        };

        window.csrfToken = "{{ csrf_token() }}";
    </script>
    @endif


    <!-- Fonts -->







    <!-- Styles -->



    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/video.css') }}" rel="stylesheet">







</head>
<body>
    <div id="app">
      @include('includes.navbar')
        <main class="py-4">
            @yield('content')
        </main>
    </div>


</body>
</html>
