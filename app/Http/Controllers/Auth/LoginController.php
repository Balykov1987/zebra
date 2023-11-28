<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::MANAGER;
    protected $redirectToDealer = RouteServiceProvider::DEALER;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    protected function authenticated(Request $request, $user)
    {
        $role = auth()->user()->role;
        if ( $role === 'admin') {
            return redirect(RouteServiceProvider::ADMIN);
        }
        elseif ( $role === 'manager') {
            return redirect(RouteServiceProvider::MANAGER);
        }
        elseif ( $role === 'dealer') {

            return redirect(RouteServiceProvider::DEALER);
        }
    }

}
