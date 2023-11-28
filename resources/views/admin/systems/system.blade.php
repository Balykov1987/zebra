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
                        <h1 class="title is-4">{{$systems->title}}</h1>
                    </div>

                </div>

                <div class="page-content-inner">
                    <!--Page content goes here-->


                        @foreach($components as $component => $v )
                        <div class="">
{{--                            @dd($components)--}}
                            {{ $v->title }}
                            {{ $v->price }}
                        </div>
                        @endforeach

                </div>

            </div>
        </div>

    </div>

@endsection
