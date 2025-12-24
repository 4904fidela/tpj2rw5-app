<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Resident extends Model
{
    protected $fillable = [
        'rt_id', 'nik', 'name', 'gender', 'birth_date', 'birth_place', 
        'address', 'phone', 'status', 'kk_number'
    ];

    protected $casts = [
        'birth_date' => 'date',
    ];

    public function rt()
    {
        return $this->belongsTo(Rt::class);
    }
}
