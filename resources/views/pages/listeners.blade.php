<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{url('css/sidebar.css')}}"}>
    <title>{{$title}}</title>
</head>
@extends('layouts.sidebar')
<div id='main'>
<button onclick="toogleNav()">☰</button>
<div id='page-container'>
    <div id="content-wrap">
        <body>
            <span class='testingspan' id='testingspan' data-test="this is a test">Testing</span>
            <script src="{{url('js/listeners.js')}}"></script>
        </body>
    </div>
    <footer id='footer'><a href="/">Home</a></footer>
</div>
</div>
</html>