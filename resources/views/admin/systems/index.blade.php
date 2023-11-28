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
                        <h1 class="title is-4">Системы</h1>
                    </div>

                </div>
                <div class="datatable-toolbar">

                    <div class="buttons">
                        <a href="{{route('system.add')}}" class="button h-button is-primary is-elevated">
                                <span class="icon">
                                  <i aria-hidden="true" class="fas fa-plus"></i>
                              </span>
                            <span>Добавить систему</span>
                        </a>
                    </div>
                </div>

                <div class="page-content-inner">

                    <!-- Datatable -->
                    <div class="table-wrapper" data-simplebar>
                        <table id="products-datatable" class="table is-datatable is-hoverable table-is-bordered">
                            <thead>
                            <tr>
                                <th>
                                    <div class="control">
                                        <label class="checkbox is-primary is-outlined is-circle">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                    </div>
                                </th>
                                <th>Изображение</th>
                                <th>Название</th>
                                <th>Номер</th>
                                <th class="has-text-centered"></th>

                            </tr>
                            </thead>
                            <tbody>
                            @foreach($systems as $system)
                            <tr data-id="0">
                                <td>
                                    <div class="control">
                                        <label class="checkbox is-circle is-primary is-outlined">
                                            <input type="checkbox">
                                            <span></span>
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <img class="product-photo" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/photo/demo/products/1.png" alt="">
                                </td>
                                <td>
                                    <span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">
                                        {{$system->title}}
                                    </span>
                                </td>
                                <td>
                                    {{$system->id}}
                                </td>


                                <td class="has-text-right">
                                    <a href="{{route('system', $system->id )}}" class="button h-button">
                                        <span class="icon">
                                            <i class="lnir lnir-pencil"></i>
                                        </span>
                                        <span>Редактировать</span>
                                    </a>
                                </td>
                            </tr>
                            @endforeach
                            </tbody>
                        </table>

                    </div>

                    <div id="paging-first-datatable" class="pagination datatable-pagination">
                        <div class="datatable-info">
                            <span></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>



@endsection
