<!DOCTYPE html>
<html lang="{{config('app.locale')}}">
<head>
    @livewireStyles
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet">
</head>
    <body>
        @yield('content');
    </body>
</html>
