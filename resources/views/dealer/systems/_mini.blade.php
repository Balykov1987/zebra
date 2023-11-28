@foreach($components as $component => $v )
    <div id="component_{{ $v->id }}" class="hidden" data-price="{{ $v->price }}">
        {{ $v->title }}
        
    </div>
@endforeach
