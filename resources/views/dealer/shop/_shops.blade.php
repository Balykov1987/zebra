@if ($dealerId->shops)
    <ul>
        @foreach ($dealerId->shops as $dialerId)
            @include('_shops', ['dealer_id' => $dialerId])
        @endforeach
    </ul>
@endif