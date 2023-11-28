<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class System extends Model
{
    use HasFactory;
    protected $guarded = false;

    public $timestamps = false;

    public function components()
    {
        return $this->belongsToMany(Component::class,'component_systems', 'component_id', 'system_id');
    }

}
