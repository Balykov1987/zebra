<?php

namespace App\Http\Controllers;

use App\Models\Component;
use App\Models\Set;
use App\Models\System;
use App\Models\Textile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $components = Component::all();
        $systems = System::all();
        $textile = Textile::all();

        return view('dealer.set', compact('components', 'systems', 'textile'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Auth::user();

        $order_id = $request->cookie('order_id');

        $set =  new Set();
        $set -> user_id=Auth::user()->id;

        $latestOrder = Set::orderBy('created_at','DESC')->first();

        $set -> set_number= str_pad($latestOrder->id + 1, 8, "0", STR_PAD_LEFT);
        $set -> title=$request->get('title');
        $set -> colors=$request->get('colors');
        $set -> gear=$request->get('gear');
        $set -> height_tool=$request->get('height_tool');
        $set -> cost=$request->get('cost');
        $set->save();


        return redirect()->route('set')->with('success', 'Успешно');
        // return redirect()->route('checkout')->withCookie(cookie('order_id', $order_id, 525600));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
