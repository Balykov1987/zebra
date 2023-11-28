<?php

namespace App\Http\Controllers;

use App\Models\Set;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(User $id)
    {
//        $users = User::sets()->get();
        $sets = Set::whereUserId(auth()->user()->id)->latest()->take(10)->get();
        $statuses = Set::STATUSES;
// dd($sets);
        return view('home', compact('sets', 'statuses'));
    }

    // public function orders()
    // {
    //     $sets = Set::whereUserId(auth()->user()->id)->orderByDesc('created_at')->paginate();
    //     $statuses = Set::STATUSES;
    //     return view('dealer.orders', compact('sets', 'statuses'));
    // }
}
