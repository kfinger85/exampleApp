@extends('layouts.app')
@section('content')
<h1>{{$data['heading']}}</h1>
<body>
<?php
if(count($data['services']) > 0)
{
    foreach ($data['services'] as $datapoint) 
        print $datapoint; 
}


echo "<h2>";
echo $_SERVER['PHP_SELF'];
echo "<br>";
echo "SERVER_NAME:  " . $_SERVER['SERVER_NAME'];
echo "<br>";
echo 'HTTP_HOST:    ' . $_SERVER['HTTP_HOST'];
echo "<br>";
echo "HTTP_REFERER" . $_SERVER['HTTP_REFERER'];
echo "<br>";
echo "HTTP_USER_AGENT: " . $_SERVER['HTTP_USER_AGENT'];
echo "<br>";
echo "SCRIPT_NAME" . $_SERVER['SCRIPT_NAME'];
echo "</h2>";
?>
 <strong><a href="{{url('/')}}">Home</a>
 <br>
 <br>   
  <strong><a href="<?php echo url('/') ?>">Home PHP Style</a></strong>
</body>
@endsection
</html>