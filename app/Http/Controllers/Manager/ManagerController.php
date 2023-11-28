<?php

namespace App\Http\Controllers\Manager;

use App\Models\Set;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ManagerController extends Controller
{
    public function index()
    {
        $orders = Set::orderBy('status', 'asc')->paginate(100);
        $statuses = Set::STATUSES;
        // dd($orders);
        return view('manager.index', compact('orders', 'statuses'));
    }

    public function dealers()
    {
        $dealers = User::all()->where('role', 'dealer');
        return view('manager.dealers', compact('dealers'));
    }

}
