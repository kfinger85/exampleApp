<div>
<input wire:model='name' type='text'>
<input wire:model='loud' type='checkbox'>
<select wire:model='greeting'>
    <option>Hello</option>
    <option>Fuck off</option>
    <option>See ya</option>
</select>
    <h1>{{$greeting}} {{$name}} @if ($loud)! @endif</h1>
</div>
