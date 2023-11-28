<h2>мои заказы</h2>

@foreach($sets as $set)
    <div><a href="{{ route('order', $set->id) }}">Заказ № {{$set->set_number}}</a></div></br>
@endforeach
