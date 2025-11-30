<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Committee extends Model
{
    /** @use HasFactory<\Database\Factories\CommitteeFactory> */
    use HasFactory;

    public function resident(): BelongsTo
    {
        return $this->belongsTo(Resident::class);
    }

    public function position(): BelongsTo
    {
        return $this->belongsTo(Position::class);
    }

    public function rt(): BelongsTo
    {
        return $this->belongsTo(Rt::class);
    }
}
