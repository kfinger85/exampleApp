<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    function homePage(Request $request)
    {
    $title = 'home!';
    return view('welcome')->with('title',$title); 
    }
    function serverinfo()
    {
            $data = array(
            "heading" => "Welcome to the Server Info Page!",
            "title" => "Server Info!",
            "services" => ['This', 'is', 'the', 'array']
            );
            return view('pages.serverinfo')->with('data',$data); 
    }
    function phpsandbox()
    {
        $title = 'PHP Sandbox'; 

        return view('pages.phpsandbox')->with ('title', $title);
    }
    function async()
    {
        $title = 'async example'; 
        return view('pages.async')->with ('title', $title);
    }

    function listeners()
    {
        $title = 'listeners'; 
        return view('pages.listeners')->with ('title', $title);
    }

    function react()
    {
        $title = 'react'; 
        return view('pages.react')->with ('title', $title);
    }

    function map()
    {
        $title = 'map'; 
        return view('pages.map')->with ('title', $title);
    }
    
}
