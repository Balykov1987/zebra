<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Component extends Model
{
    use HasFactory;

    protected $guarded = false;
//    public $timestamps = false;

    public function systems()
    {
        return $this->belongsToMany(System::class, );
    }
}
