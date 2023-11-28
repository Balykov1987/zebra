<h1>Страница дилера</h1>


<a href=""><h2>Заказы</h2></a>
<a href=""><h2>Данные</h2></a>
<a href=""><h2>Связь с менеджером</h2></a>
<a href=""><h2>Конфигуратор</h2></a>
<a href=""><h2>Каталог</h2></a>

<ul>
    <li class="nav-item dropdown">
        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
            {{ Auth::user()->name }}
        </a>

        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="{{ route('logout') }}"
               onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                {{ __('Logout') }}
            </a>

            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                @csrf
            </form>
        </div>
    </li>
</ul>
