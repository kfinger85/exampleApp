<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{url('css/sidebar.css')}}"}>
    <title>Document</title>
</head>
    <body>
        @extends('layouts.sidebar')
<div id='main'>
    <button onclick="toogleNav()">☰</button>
    <?php 
    $txt1 = 'Hello!';
    $txt2 = 'Goodbye!'; 
    echo "<h2>" . $txt1 . "</h2>";
    echo $txt2 . "<br>";
    $guitars = array("Gibson", "Fender", "PRS"); 
    print "<h2>" . $guitars[0] . "size of: " . count($guitars) . "</h2>";
    foreach ($guitars as $guitar )
    {
        print $guitar . " <br> "; 
    }  
    ?>
</div>
    </body>
    <body>

</html>