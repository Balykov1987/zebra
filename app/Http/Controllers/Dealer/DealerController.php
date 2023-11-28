<?php

namespace App\Http\Controllers\Dealer;

use App\Http\Controllers\Controller;
use App\Models\Set;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DealerController extends Controller
{
    public function orders()
    {
        $sets = Set::whereUserId(auth()->user()->id)->latest()->get();
        $statuses = Set::STATUSES;
        return view('dealer.orders', compact('sets', 'statuses'));
    }

    public function order($id)
    {
        $order = Set::find($id);
        $status = Set::STATUSES;
        return view('dealer.order', compact('order', 'status'));
    }
}
