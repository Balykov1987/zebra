@extends('layouts.app')

@section('content')

    <!-- Content Wrapper -->
    <div class="view-wrapper view-wrapper-full" data-mobile-item="#home-sidebar-menu-mobile" data-sidebar-open>

        <div class="page-content-wrapper">
            <div class="page-content is-relative">

                <div class="page-title has-text-centered">
                    <!-- Sidebar Trigger -->
                    <div class="huro-hamburger nav-trigger push-block" data-sidebar="sidebar-block">
                    <span class="menu-toggle has-chevron">
                      <span class="icon-box-toggle">
                          <span class="rotate">
                              <i class="icon-line-top"></i>
                              <i class="icon-line-center"></i>
                              <i class="icon-line-bottom"></i>
                          </span>
                    </span>
                    </span>
                    </div>

                    <div class="title-wrap">
                        <h1 class="title is-4">{{$textile->title}}</h1>
                    </div>

                </div>

                <div class="page-content-inner">
                    <!--Page content goes here-->
                    <div class="demo-card">
                        <div class="control">
                            <div class="file is-primary">
                                <label class="file-label">
                                    <input class="file-input" type="file" name="resume">
                                    <span class="file-cta">
                                        <span class="file-icon">
                                            <i data-feather="upload"></i>
                                        </span>
                                        <span class="file-label">
                                            Загрузите фото
                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="demo-card">
                        <form method="post" action="{{ route('textile.update', $textile->id) }}" role="form"
                              enctype="multipart/form-data">
                            @csrf
                            <div class="demo-title">
                            <h3 class="title is-thin is-5">Артикул</h3>
                                <div class="field">
                                    <div class="control">
                                        <input name="article" type="text" class="input" placeholder="Артикул" value="{{$textile->article}}">
                                    </div>
                                </div>
                                <h3 class="title is-thin is-5">Название</h3>
                                <div class="field">
                                    <div class="control">
                                        <input name="title" type="text" class="input" placeholder="Название" value="{{$textile->title}}">
                                    </div>
                                </div>
                                <h3 class="title is-thin is-5">Тип ткани</h3>
                                <div class="field">
                                    <div class="select">
                                        <select name="type" id="textile_type">
                                            <option value="1">Рулон</option>
                                            <option value="2">Зебра</option>
                                        </select>
                                    </div>
                                </div>
                                <h3 class="title is-thin is-5">Ширина</h3>
                                <div class="field">
                                    <div class="control">
                                        <input name="width" type="text" class="input" placeholder="Ширина" value="{{$textile->width}}">
                                    </div>
                                </div>
                                <div id="rull" class="height_block">
                                    <h3 class="title is-thin is-5">Максимальная высота в системе Мини</h3>
                                    <div class="field">
                                        <div class="control">
                                            <input name="height_mini" type="text" class="input" placeholder="Высота" value="{{$textile->height_mini}}">
                                        </div>
                                    </div>
                                    <h3 class="title is-thin is-5">Максимальная высота в системе Uni 2</h3>
                                    <div class="field">
                                        <div class="control">
                                            <input name="height_uni2" type="text" class="input" placeholder="Высота" value="{{$textile->height_uni2}}">
                                        </div>
                                    </div>
                                    <h3 class="title is-thin is-5">Максимальная высота в системе D25</h3>
                                    <div class="field">
                                        <div class="control">
                                            <input name="height_d25" type="text" class="input" placeholder="Высота" value="{{$textile->height_d25}}">
                                        </div>
                                    </div>
                                    <h3 class="title is-thin is-5">Максимальная высота в системе D32</h3>
                                    <div class="field">
                                        <div class="control">
                                            <input name="height_d32" type="text" class="input" placeholder="Высота" value="{{$textile->height_d32}}">
                                        </div>
                                    </div>
                                </div>
                                <div id="zebra" class="height_block hidden">
                                    <h3 class="title is-thin is-5">Максимальная высота в системе Мини Зебра</h3>
                                    <div class="field">
                                        <div class="control">
                                            <input name="height_mini_z" type="text" class="input" placeholder="Высота" value="{{$textile->height_mini_z}}">
                                        </div>
                                    </div>
                                    <h3 class="title is-thin is-5">Максимальная высота в системе Uni 2 Зебра</h3>
                                    <div class="field">
                                        <div class="control">
                                            <input name="height_uni2_z" type="text" class="input" placeholder="Высота" value="{{$textile->height_uni2_z}}">
                                        </div>
                                    </div>
                                    <h3 class="title is-thin is-5">Максимальная высота в системе D25 Зебра</h3>
                                    <div class="field">
                                        <div class="control">
                                            <input name="height_d25_z" type="text" class="input" placeholder="Высота" value="{{$textile->height_d25_z}}">
                                        </div>
                                    </div>
                                    <h3 class="title is-thin is-5">Максимальная высота в системе D32 Зебра</h3>
                                    <div class="field">
                                        <div class="control">
                                            <input name="height_d32_z" type="text" class="input" placeholder="Высота" value="{{$textile->height_d32_z}}">
                                        </div>
                                    </div>
                                </div>
                                
                                <h3 class="title is-thin is-5">Цена</h3>
                                <div class="field">
                                    <div class="control">
                                        <input name="price" type="text" class="input" placeholder="Цена" value="{{$textile->price}}">
                                    </div>
                                </div>
                                <h3 class="title is-thin is-5">Выберите категорию</h3>
                                <div class="field">
                                    <div class="select">
                                        <select name="category_id">
                                            @foreach($categories as $category)
                                                <option value="{{$category->id}}" {{$category->id == $textile->category_id ? 'selected' : ''}}>{{$category->title}}</option>
                                            @endforeach

                                        </select>
                                    </div>
                                </div>

                                <button type="submit" class="button h-button is-success">Обновить данные</button>
                            </div>
                        </form>
                    </div>

{{--                    {{$textile->updated_at}}--}}

                </div>

            </div>
        </div>

    </div>

    <script>
        let textileSelect = document.querySelector('#textile_type');
        let zebra = document.querySelector('#zebra');
        let rulon = document.querySelector('#rull');


        textileSelect.addEventListener('change',(e)=>{
            if(textileSelect.value === '1'){
                rulon.classList.remove('hidden');
                zebra.classList.add('hidden');

            }if(textileSelect.value === '2'){
                zebra.classList.remove('hidden');
                rulon.classList.add('hidden');
            }
        })

    </script>

@endsection
