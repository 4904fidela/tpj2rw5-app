<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PkkMember extends Model
{
    protected $fillable = ['rt_id', 'resident_id', 'role', 'joined_date'];
    protected $casts = ['joined_date' => 'date'];

    public function rt() { return $this->belongsTo(Rt::class); }
    public function resident() { return $this->belongsTo(Resident::class); }
}
