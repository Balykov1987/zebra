<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DealersShop extends Model
{
    use HasFactory;

    protected $guarded = false;
    public $timestamps = false;

    public $table = "shops";

    public function dealer()
    {
        return $this->belongsTo(Dealer::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
