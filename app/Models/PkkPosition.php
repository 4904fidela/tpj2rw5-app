<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PkkPosition extends Model
{
    protected $fillable = ['rt_id', 'position_name', 'resident_id'];

    public function rt()
    {
        return $this->belongsTo(Rt::class);
    }

    public function resident()
    {
        return $this->belongsTo(Resident::class);
    }
}
