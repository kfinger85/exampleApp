<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossorigin=""/>
    <link rel="stylesheet" href="{{url('css/map.css')}}"}>
    <link rel="stylesheet" href="{{url('css/sidebar.css')}}"}>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
    <title>map</title>
</head>
<body>

    
    @extends('layouts.sidebar')
    <script  type='module' src="{{url('js/map.js')}}" defer></script>
    

    <!-- Page Content -->
    <div id='main' class="w3-teal">
            <button class="w3-button w3-teal w3-xlarge" onclick="toogleNav()">☰</button>
            <div class="w3-container">
                <h1>Location: </h1>
                    <span>Location: </span>
                    <span id='latlng'></span>
                <span>Distnace: </span>              
                    <span id='distance' ></span>
                    <br>
                <span>Durtion passed: </span>
                    <span id='dur' ></span>
                <span>Speed: </span>
                    <span id='speed'></span>
                <br>
                <button id='start' onclick="start(1000)">start</button> 
                <button id='stop' onclick="stop(false)">stop</button>  
                <button id='follow' onclick="follow(true)">follow path</button>                       
                <button id='counties' onclick="countries()">countries</button>                       
            </div>
        <script defer src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" 
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" 
        crossorigin="" ></script>
        <div id='map'></div>


    </div> <!--containor for popup menu -->
</div>
</body>
</html>