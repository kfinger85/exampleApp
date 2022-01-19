<?php

namespace App\View\Components;
use App\Models\Guitar; 
use Illuminate\View\Component;

class TestComp extends Component
{
    public $type; 
    public $message;
    public $productlist; 
    public $html; 
    /**
     * Create a new component instance.
     *
     * @return void
     */
 
    public function __construct($type, $message)
    {
        $this->type = $type; 
        $this->message = $message;
        //$this->productlist = $productlist; 
        //$this->$html = $html; 
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.test-comp');
    }

}