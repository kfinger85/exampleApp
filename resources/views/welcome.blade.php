<head>
<title>{{$title}} </title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="{{url('css/sidebar.css')}}"}>
<body>
<!-- Sidebar -->
@extends('layouts.sidebar')
<!-- Page Content -->
<div class="w3-teal" id='main'>
  <button class="w3-button w3-teal w3-xlarge" onclick="toogleNav()">☰</button>
  <div class="w3-container">
    <h1>My Page</h1>
  </div>

</div>