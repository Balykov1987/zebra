@extends('layouts.app')

@section('content')
<div class="auth-wrapper">
            <!--Page body-->

            <div class="auth-wrapper-inner is-single">

                <!--Fake navigation-->
                <div class="auth-nav">
                    <div class="left"></div>
                    <div class="center">
                        <a href="/" class="header-item">
                            <img class="light-image" src="assets/img/logos/logo/logo.svg" alt="">
                            <img class="dark-image" src="assets/img/logos/logo/logo-light.svg" alt="">
                        </a>
                    </div>
                    <div class="right">
                        <label class="dark-mode ml-auto">
                            <input type="checkbox" checked>
                            <span></span>
                        </label>
                    </div>
                </div>

                <!--Single Centered Form-->
                <div class="single-form-wrap">

                    <div class="inner-wrap">
                        <!--Form Title-->
                        <div class="auth-head">
                            <h2>Zebra dom</h2>
                            <p>Вход в личный кабинет</p>
                        </div>
                    <!--Form-->
                    <div class="form-card">

                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div id="signin-form" class="login-form">
                        
                        <!-- <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>

                            <div class="col-md-6">
                                <-- <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus> -->

                                <!-- @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror --
                            </div>
                        </div> -->

                        <!-- Input -->
                        <div class="field">
                            <div class="control has-icon">
                                <input id="email" type="email" class="input @error('email') is-invalid @enderror" type="text" placeholder="Username" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                                <span class="form-icon">
                                        <i data-feather="user"></i>
                                    </span>
                            </div>
                            @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                        </div>

                        <!-- Input -->
                        <div class="field">
                            <div class="control has-icon">
                                <input id="password" class="input @error('password') is-invalid @enderror" type="password" placeholder="Password" name="password" required autocomplete="current-password">
                                    <span class="form-icon">
                                        <i data-feather="lock"></i>
                                    </span>
                            </div>
                            @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>

                        <!-- <div class="row mb-3">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" >

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div> -->
                        <div class="setting-item">
                                <label class="form-switch is-primary">
                                    <input type="checkbox" class="is-switch" id="busy-mode-toggle" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                    <i></i>
                                </label>
                                <div class="setting-meta">
                                    <span>{{ __('Запомнить меня') }}</span>
                                </div>
                            </div>

                       <!-- Submit -->
                       <div class="control login">
                            <button type="submit" class="button h-button is-primary is-bold is-fullwidth is-raised">
                                {{ __('Вход') }}
                            </button>
                            
                        </div>

                        </div>
                    </form>

                    
                    </div>
                    @if (Route::has('password.request'))
                    <div class="forgot-link has-text-centered">
                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                    {{ __('Забыли пароль?') }}
                                </a>
                        </div>
                                
                            @endif
                    

                    </div>

                </div>

            </div>
        </div>

                        

                        
@endsection
