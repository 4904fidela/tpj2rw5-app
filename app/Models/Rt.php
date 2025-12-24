<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rt extends Model
{
    protected $fillable = ['number', 'name', 'description'];

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function residents()
    {
        return $this->hasMany(Resident::class);
    }
}
