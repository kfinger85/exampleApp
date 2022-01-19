<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{url('css/sidebar.css')}}"}>
    <title>React</title>
</head>
<body>
@extends('layouts.sidebar')
<div id='main'>
    <button onclick="toogleNav()">☰</button>
    <div id='page'></div>
    <script src="/js/app.js" defer></script>
</div>

</body>
</html>