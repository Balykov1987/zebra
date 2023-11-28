<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dealer extends Model
{
    use HasFactory;

    public function shops()
    {
        return $this->hasMany(DealersShop::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
