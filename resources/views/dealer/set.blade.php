@extends('layouts.app')

@section('content')

@vite([ 'resources/js/constructor.js'])

{{--<input type="hidden" value="" name="user_id" />--}}


    <style>
        .data {
            display: flex;
    gap: 10px;
    flex-wrap: wrap;
        }
        .inputs {
            display: flex;
            flex-wrap: wrap;
        }
        .block {
            position: relative;
            border: 2px solid;
            width: 350px;
            padding: 15px;
            z-index: 0;
            margin-bottom: 1.5rem;
        }
        .block span {
            display: inline-block;
        }
        .lock {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 1;
        }
        .hidden {
            display: none;
        }
    </style>
    @if ($errors->any())
        <div class="alert alert-danger">
            <ul class="list-unstyled">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    @if (session()->has('success'))
        <div class="alert alert-success " style="color: red;font-size: 20px;">
            Заявка оформлена
            {{ session('success') }}

        </div>
    @endif


{{--@dd($systems);--}}
    <div class="constructor" style="padding: 30px;">
        <form action="{{ route('set.store') }}" method="post">
            @csrf
            <!-- <input type="text" name="title"> -->

        <div class="inputs">
            <div class="block">
                <label for="system">Система</label>
                <select name="system" id="system">
                    <option value="0" disabled selected >Выберите систему</option>
                    @foreach($systems as $system)
                        <option value="{{$system->code}}">{{$system->title}}</option>
                    @endforeach
                </select>
            </div>
            <br>
            <br>
            <div id="textile_product-block" class="block">
                <label for="textile">Ткань</label>
                <select name="textile" id="textile">
                    <option value="0" disabled selected >Выберите ткань</option>
                    @foreach($textile as $item)
                        <option id="textile_option"
                                class="hidden type_{{$item->type}}"
                                data-textile-type="{{$item->type}}"
                                data-textile-name="{{$item->title}}"
                                data-textile-width="{{$item->width}}"
                                data-textile-height="{{$item->height}}"
                                data-textile-price="{{$item->price}}" >{{$item->title}}</option>
                    @endforeach
                </select>
            </div>
            <div class="block">
                <div id="width-block"></div>
                <div id="min_width"></div>
                <div id="max_width"></div>
                Ширина см - <input name="title" type="number" min="30" id="width" class=" @error('width') is-invalid @enderror"><br>
                <span id="w_notice" style="color: red;"></span>
            </div>
            <div id="g-width-block" class="block">
                <div id="min_gwidth"></div>
                <div id="max_gwidth"></div>
                Габаритная ширина см - <input name="gwidth" type="text" min="34" id="gwidth"><br>
                <span id="gw_notice" style="color: red;"></span>
            </div>
            <div class="block">
                <div id="max_height"></div>
                Высота изделия см - <input type="number" min="1" id="height">
                <span id="h_notice" style="color: red;"></span>
            </div>
            <div class="block">
                Высота управления см - <input name="height_tool" type="number" min="1" id="height_tool" class="">

                <div id="loop_block" class="hidden">
                    <select name="loop" id="loop_select">
                        <option value="1">Цепь петля 50см</option>
                        <option value="2">Цепь петля 100см</option>
                        <option value="3">Цепь петля 120см</option>
                        <option value="4">Цепь петля 150см</option>
                        <option value="5">Цепь петля 180см</option>
                        <option value="6">Цепь петля 200см</option>
                        <option value="7">Цепь петля 230см</option>
                    </select>
                </div>
            </div>
            <div id="gear_type-block" class="block">
                <label for="gear">Тип управления</label>
                <select name="gear" id="gear_type">
                    <option value="hand" selected>Ручной</option>
                    <option value="automatic">Автоматический</option>
                </select>

                <div id="block-pult" class="block-pult hidden">
                    <select name="pult_select" id="pult_select">
                        <option value="0" disabled selected >Выберите пульт</option>
                        <option value="1">Пульт АС140-01- 1 канальный сенсорный белый</option>
                        <option value="2">Пульт АС140-06 6 канальный сенсорный белый</option>
                        <option value="3">Пульт АС140-16 16 канальный сенсорный белый</option>
                        <option value="4">Пульт АС140-01- 1 канальный сенсорный черный</option>
                        <option value="5">Пульт АС140-06 6 канальный сенсорный черный</option>
                        <option value="6">Пульт АС140-16 16 канальный сенсорный черный</option>
                    </select>
                </div>

                <div id="battery_charger-block" class="hidden">
                    <input type="checkbox" id="battery_charger">Зарядное устройство
                </div>
            </div>
            <div id="side_manage-block" class="block">
            <label for="side_manage">Сторона управления</label>
                <select name="side_manage" id="side_manage">
                    <option value="left" selected>Левая</option>
                    <option value="right">Правая</option>
                </select>
            </div>
            <div id="width_product-block" class="block hidden">
                <label for="width_product">Тип замера</label>
                <select name="width_product" id="width_product" class="">
                    <option value="" disabled selected>Выберите замер</option>
                    <option value="width_product-t">Замер по ткани</option>
                    <option value="width_product-g">Замер по габариту</option>
                </select>
            </div>
            <div id="mounting_type-block" class="block hidden">
                <label for="mounting_type">Тип крепления</label>
                <select name="mounting_type" id="mounting_type">
                    <option value="0" disabled selected >Выберите тип</option>
                    <option value="1">На скотч</option>
                    <option value="2">На леску</option>
                </select>
            </div>
            <div id="color-block" class="block">
                <label for="colors">Цвет комплектации</label>

                <select name="colors" id="color" class="@error('color') is-invalid @enderror">
                    <option value="" disabled selected >Выберите цвет</option>
                    <option id="white" class="hidden" value="white" selected>Белый</option>
                    <option id="brown" class="hidden" value="brown">Коричневый</option>
                    <option id="antr" class="hidden" value="antr">Антрацит</option>
                    <option id="black" class="hidden" value="black">Черный</option>
                </select>
            </div>
            <div id="dop-block" class="block hidden">
                Дополнительная комплектация:<br>
                Магнит на скотч - <input type="radio" value="1" id="magnet_stik" name="support"><br>
                Магнит на саморез - <input type="radio" value="1" id="magnet_bolt" name="support"><br>
                Без магнита - <input type="radio" value="0" id="magnet_none" name="support" checked>
            </div>
            <div class="block ">
                Количество - <span id="total_count"></span>
                <input id="count" type="number" name="count" min="1" value="1">
            </div>
            <div class="block ">
                Цена изделия - <span id="total_price"></span>
                <input id="order_cost" type="hidden" name="cost" value="">
            </div>
            <div class="block ">
                Итого - <span id="total_cost"></span>
            </div>
        </div>
            <br>
            <div id="height-rotate" class="height-rotate hidden">
                При развороте ткани по высоте - максимальная высота 4 метра ширина 1.95
            </div>
            <div id="width-rotate" class="width-rotate hidden">
                При развороте ткани по ширине - максимальная ширина 3.5 метра высота 1.75 метра
            </div>
            <br>
            <div class="inputs">

            </div>


            <div class="data">

                @include('dealer.systems._mini')

                <div id="manage_gear-block" class="block hidden">
                    Комплект управления Mini шт - <span id="manage_gear"></span><br>
                    Цена: - <span id="gear_price"></span>
                </div>

                <div id="main_gear-block" class="block hidden">
                    Механизм управления Uni шт - <span id="main_gear"></span><br>
                    Цена: - <span id="main_gear_price"></span>
                </div>

                <div id="d25_gear-block" class="block hidden">
                    Комплект управления для рулонных штор D25 шт - <span id="d25_gear"></span><br>
                    Цена: - <span id="d25_gear_price"></span>
                </div>

                <div id="d32_gear-block" class="block hidden">
                    Комплект управления для рулонных штор D32 шт - <span id="d32_gear"></span><br>
                    Цена: - <span id="d32_gear_price"></span>
                </div>

                <div id="tube-block" class="block hidden">
                    Труба см - <span id="tube"></span>
                    Цена: - <span id="tube_price"></span>
                </div>
                <div id="box-block" class="block hidden">
                    Короб см - <span id="box"></span><br>
                    Цвет: - <span id="box_color"></span>
                    Цена: - <span id="box_price"></span>
                </div>
                <div id="low_plank-block" class="block hidden">
                    Планка нижняя стальная см - <span id="low_plank"></span><br>
                    Цена: - <span id="plank_price"></span>
                </div>
                <div id="low_rails-block" class="block hidden">
                    Направляющая тип С Uni см - <span id="low_rails"></span>
                    Цена: - <span id="low_rails_price"></span>
                </div>
                <div id="low-block" class="block hidden">
                    Щетка-уплотнитель нижней планки см - <span id="low"></span>
                    Цена: - <span id="low_price"></span>
                </div>
                <div id="low_textile-block" class="block hidden">
                    Щетка-уплотнитель отвеса ткани см - <span id="low_textile"></span>
                </div>
                <div id="cover_low-block" class="block hidden">
                    Крышка нижняя боковая(Uni,Mini) шт - <span id="cover_low"></span><br>
                    Цена: - <span id="cover_price"></span>
                </div>
                <div id="textile-block" class="block hidden">
                    Ткань - <span id="textile_mat"></span><br>
                    Ткань см - <span id="textile_block"></span><br>
                    Ткань м - <span id="textil_block"></span><br>
                    Цена: - <span id="textile_price"></span>

                </div>
                <div id="chain-block" class="block hidden">
                    Цепь управления (Uni,Mini) см - <span id="chain"></span><br>
                    Цена: - <span id="chain_price"></span>
                </div>
                <div id="chain-loop-block" class="block hidden">
                    Цепь петля- <span id="chain_loop"></span><br>
                    Цена: - <span id="chain_loop_price"></span>
                </div>
                <div id="merge_chain-block" class="block hidden">
                    Соединитель цепи шт - <span id="merge_chain"></span><br>
                    <span id="merge_chain_price"></span>
                </div>
                <div id="end_chain-block" class="block hidden">
                    Ограничитель цепи управления шт - <span id="end_chain"></span><br>
                    Цена: - <span id="end_chain_price"></span>
                </div>
                <div id="load_chain-block" class="block hidden">
                    Груз цепи управления шт - <span id="load_chain"></span><br>
                    Цена: - <span id="load_chain_price"></span>
                </div>
                <div id="fixed_chain-block" class="block hidden">
                    Фиксатор цепи управления шт - <span id="fixed_chain"></span><br>
                    Цена: - <span id="fixed_chain_price"></span>
                </div>
                <div id="double_tape-block-1" class="block hidden">
                    Двусторонний скотч Белый 9мм (50м) см - <span id="double_tape_1"></span>
                    Цена: - <span id="double_tape_1_price"></span>
                </div>
                <div id="double_tape-block-2" class="block hidden">
                    Двусторонний скотч Белый 19мм (50м) см - <span id="double_tape_2"></span>
                    Цена: - <span id="double_tape_2_price"></span>
                </div>
                <div id="double_tape-block-3" class="block hidden">
                    Двусторонний скотч ткань Жёлтый 12мм см - <span id="double_tape_3"></span>
                    Цена: - <span id="yellow_tape_price"></span>
                </div>
                <div id="double_tape-block-4" class="block hidden">
                    Скотч для MINI шт - <span id="double_tape_4"></span>
                    Цена: - <span id="mini_tape_price"></span>
                </div>
                <div id="thread-block" class="block hidden">
                    Леска 0,8 см - <span id="thread"></span>
                    Цена: - <span id="thread_price"></span>
                </div>
                <div id="thread_line-block" class="block hidden">
                    Направляющая лески шт - <span id="thread_line"></span>
                    Цена: - <span id="thread_line_price"></span>
                </div>
                <div id="bracket-block" class="block hidden">
                    Кронштейн навесной MINI верхний шт - <span id="bracket"></span>
                    Цена: - <span id="bracket_price"></span>
                </div>
                <div id="bracket_reg-block" class="block hidden">
                    Кронштейн для лески, регулируемый нижний шт - <span id="bracket_reg"></span>
                    Цена: - <span id="bracket_reg_price"></span>
                </div>
                <div id="ring_under-block" class="block hidden">
                    Кольцо подкладочное универсальное шт - <span id="ring_under"></span>
                    Цена: - <span id="ring_under_price"></span>
                </div>
                <div id="tape_platform-block" class="block hidden">
                    Платформа для скотча шт - <span id="tape_platform"></span>
                    Цена: - <span id="tape_platform_price"></span>
                </div>
                <div id="fixed_line-block" class="block hidden">
                    Пластиковая полоса-фиксатор клейкая 9мм см - <span id="fixed_line"></span>
                    Цена: - <span id="fixed_line_price"></span>
                </div>
                <div id="tape_textile15-block" class="block hidden">
                    Лента для крепления ткани 15мм - <span id="tape_textile15"></span>
                    Цена: - <span id="tape_textile15_price"></span>
                </div>
                <div id="tape_textile7-block" class="block hidden">
                    Лента для крепления ткани 7мм - <span id="tape_textile7"></span>
                    Цена: - <span id="tape_textile7_price"></span>
                </div>
                <div id="uni_profile-block" class="block hidden">
                    Доп. профиль высокий универсальный см - <span id="uni_profile"></span><br>
                    Цена: - <span id="uni_profile_price"></span>
                </div>
                <div id="plitka_uni-block" class="block hidden">
                    Плитка подкладочная высокая Uni пара - <span id="plitka_uni"></span><br>
                    Цена: - <span id="plitka_uni_price"></span>
                </div>
                <div id="cap_complect-block" class="block hidden">
                    Комплект крышек  для направляющих тип С пара - <span id="cap_complect"></span><br>
                    Цена: - <span id="cap_complect_price"></span>
                </div>

                <div id="low_load_round-block" class="block hidden">
                    Нижний утяжелитель круглый день-ночь белый - <span id="low_load_round"></span><br>
                    Цена: - <span id="low_load_round_price"></span>
                </div>
                <div id="low_load_triangle-block" class="block hidden">
                    Нижний утяжелитель треугольный день-ночь белый - <span id="low_load_triangle"></span><br>
                    Цена: - <span id="low_load_triangle_price"></span>
                </div>

                <div id="plug_round-block" class="block hidden">
                    Заглушка круглого утяжелителя д/н белая - <span id="plug_round"></span><br>
                    Цена: - <span id="plug_round_price"></span>
                </div>
                <div id="plug_triangle-block" class="block hidden">
                    Заглушка треуг. утяжилителя д/н белая - <span id="plug_triangle"></span><br>
                    Цена: - <span id="plug_triangle_price"></span>
                </div>
                <div id="uni_bracket-block" class="block hidden">
                    Кронштейн скоба - <span id="uni_bracket"></span><br>
                    Цена: - <span id="uni_bracket_price"></span>
                </div>
                <div id="screw-block" class="block hidden">
                    Саморез 3,0*16 шт - <span id="screw"></span>
                    Цена: - <span id="screw_price"></span>
                </div>
                <div id="magnet_under_skrew-block" class="block hidden">
                    Магнит под соморез шт - <span id="magnet_under_skrew"></span>
                    Цена: - <span id="magnet_skrew_price"></span>
                </div>
                <div id="screw_mini-block" class="block hidden">
                    Саморез 12*6 шт - <span id="screw_mini"></span>
                    Цена: - <span id="screw_mini_price"></span>
                </div>
                <div id="magnet_fixed-block" class="block hidden">
                    Магнитный фиксатор круглый со скотчем белый шт - <span id="magnet_fixed"></span>
                    Цена: - <span id="magnet_fixed_price"></span>
                </div>
                <div id="engine-block" class="block hidden">
                    Привод AM15ESE со встр.радиоприемн. аккумулятором шт - <span id="engine"></span>
                    Цена: - <span id="engine_price"></span>
                </div>
                <div id="power-block" class="block hidden">
                    Зарядное устройство для привода АМ15ESE шт - <span id="power"></span>
                    Цена: - <span id="power_price"></span>
                </div>
                <div id="pult-block" class="block hidden">
                    Пульт шт - <span id="pult"></span>
                    Цена: - <span id="pult_price">

                </div>
                <div id="uni_gear-block" class="block hidden">
                    Механизм управления Uni шт - <span id="uni_gear"></span>
                    Цена: - <span id="uni_gear_price"></span>

                </div>
            </div>

            <br>
            <br>
            <div class="block" style="border:none;">
                <input type="submit" value="Заказать">
            </div>
        </form>
    </div>





@endsection


