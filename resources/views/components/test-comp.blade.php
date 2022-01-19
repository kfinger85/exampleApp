<div class="test-comp test-comp-{{$type}}">
    @if (isset($message))
    {{$message}}
    @endif
    The current UNIX timestamp is {{ time() }}.
</div>