<h2>Одиночный заказ</h2>

    <div>Статус - 
    @if ($order->status == 0)
            <span class="text-danger">{{ $status[$order->status] }}</span>
        @elseif (in_array($order->status, [1,2,3]))
            <span class="text-success">{{ $status[$order->status] }}</span>
        @else
            {{ $status[$order->status] }}
        @endif
        
    </div>
    <div>номер заказа - {{$order->id}}</div></br>
    <div>Ширина изделия - {{$order->title}}</div></br>
    <div>Цвет Изделия - {{$order->colors}}</div></br>
    <div>Тип управления - {{$order->gear}}</div></br>
    <div>Высота изделия - {{$order->height_tool}}</div></br>
    <div>Стоимость изделия - {{$order->cost}}</div></br>

