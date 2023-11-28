@extends('layouts.app')

@section('content')

    <style>
        .inputs {
            display: flex;
        }
        .block {
            border: 2px solid;
            width: 500px;
            padding: 15px;
        }
        .block span {
            display: inline-block;
            margin-top: 10px;
        }
    </style>
    <div class="constructor">
        <div class="inputs">
            <div class="block">
                <label for="pet-select">Цвет комплектации</label>

                <select name="colors" id="color">
                    <option value="">Выберите цвет</option>
                    <option value="white">белый</option>
                    <option value="brown">коричневый</option>
                    <option value="antr">антрацит</option>
                    <option value="black">черный</option>
                </select>
            </div>
            <div class="block">
                <label for="pet-select">Тип управления</label>

                <select name="colors" id="gear_type">
                    <option value="">Выберите тип</option>
                    <option value="hand">Ручной</option>
                    <option value="automatic">Автоматический</option>
                </select>
            </div>
            <div class="block">
                Высота управления см - <input type="number" min="1" id="height_tool">
            </div>
            <div class="block">
                Ширина модели см - <input type="number" min="1" id="width">
            </div>
            <div class="block">
                Высота модели см - <input type="number" min="1" id="height">
            </div>
        </div>
        <br>
        <br>
        <div class="block">
            Механизм управления шт - <span id="manage_gear"></span><br>
            Цвет: - <span id="gear_color"></span>
        </div>
        <br>
        <br>
        <div class="block">
            Труба см - <span id="tube"></span>
        </div>
        <br>
        <br>
        <div class="block">
            Короб см - <span id="box"></span><br>
            Цвет: - <span id="box_color"></span>
        </div>
        <br>
        <br>
        <div class="block">
            Нижняя планка см - <span id="low_plank"></span><br>
            Цвет: - <span id="plank_color"></span>
        </div>
        <br>
        <br>
        <div class="block">
            Направляющая тип С Uni см - <span id="low_rails"></span>
        </div>
        <br>
        <br>
        <div class="block">
            Щетка-уплотнитель нижней планки см - <span id="low"></span>
        </div>
        <br>
        <br>
        <div class="block">
            Крышка нижняя боковая(Uni,Mini) шт - <span id="cover_low"></span><br>
            Цвет: - <span id="cover_color"></span>
        </div>
        <br>
        <br>
        <div class="block">
            Цепь управления см - <span id="chain"></span><br>
            Цвет: - <span id="chain_color"></span>
        </div>
        <br>
        <br>
        <div class="block">
            Соединитель цепи шт - <span id="merge_chain"></span><br>
            Цвет: - <span id="merge_chain_color"></span>
        </div>
        <br>
        <br>
        <div class="block">
            Ограничитель цепи управления шт - <span id="end_chain"></span><br>
            Цвет: - <span id="end_chain_color"></span>
        </div>
        <br>
        <br>
        <div class="block">
            Фиксатор цепи управления шт - <span id="fixed_chain"></span><br>
            Цвет: - <span id="fixed_chain_color"></span>
        </div>
        <br>
        <br>
        <div class="block">
            Двусторонний скотч Белый 9мм (50м) см - <span id="double_tape_1"></span>
        </div>
        <br>
        <br>
        <div class="block">
            Двусторонний скотч Белый 19мм (50м) см - <span id="double_tape_2"></span>
        </div>
        <br>
        <br>
        <div class="block">
            Пластиковая полоса-фиксатор клейкая 9мм см - <span id="fixed_line"></span>
        </div>
        <br>
        <br>
        <div class="block">
            Доп. профиль высокий универсальный см - <span id="uni_profile"></span><br>
            Цвет: - <span id="uni_profile_color"></span>
        </div>
        <br>
        <br>
        <div class="block">
            Плитка подкладочная высокая Uni пара - <span id="plitka_uni"></span><br>
            Цвет: - <span id="plitka_uni_color"></span>
        </div>
        <br>
        <br>
        <div class="block">
            Комплект крышек  для направляющих тип С пара - <span id="cap_complect"></span><br>
            Цвет: - <span id="cap_complect_color"></span>
        </div>
        <br>
        <br>
        <div class="block">
            Саморез 3,0*16 шт - <span id="screw"></span>
        </div>


    </div>





@endsection
