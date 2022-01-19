<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Testcomponent extends Component
{
    public  $name = 'Kevin'; 
    public $loud = false; 
    public $greeting = 'Hello'; 
    
    public function render()
    {
       
        return view('livewire.testcomponent');
    }
}
