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
                        <h1 class="title is-4">Новый компонент</h1>
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
                        <form method="post" action="{{route('product.store')}}" role="form"
                        enctype="multipart/form-data">
                            @csrf
                            <div class="demo-title">
                                <h3 class="title is-thin is-5">Название</h3>
                                <div class="field">
                                    <div class="control">
                                        <input name="title" type="text" class="input" placeholder="Название">
                                    </div>
                                </div>

                                <h3 class="title is-thin is-5">Артикул</h3>
                                <div class="field">
                                    <div class="control">
                                        <input name="article" type="text" class="input" placeholder="Артикул">
                                    </div>
                                </div>
                                
                                <h3 class="title is-thin is-5">Цена</h3>
                                <div class="field">
                                    <div class="control">
                                        <input name="price" type="text" class="input" placeholder="Цена">
                                    </div>
                                </div>
                                <h3 class="title is-thin is-5">Выберите категорию</h3>
                                <div class="field">
                                    <div class="select">
                                        <select name="category_id">
                                            @foreach($categories as $category)
                                                <option value="{{$category->id}}">{{$category->title}}</option>
                                            @endforeach

                                        </select>
                                    </div>
                                </div>

                                <button type="submit" class="button h-button is-success">Добавить</button>
                            </div>
                        </form>
                    </div>



                </div>

            </div>
        </div>

    </div>

@endsection
