<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

/**
 * @property \App\Models\Resident|null $resident
 * @mixin \App\Models\Committee
 */
class CommitteeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'resident_name' => $this->whenLoaded('resident', fn() => $this->resident->name),
            'position' => Arr::except(
                PositionResource::make($this->whenLoaded('position'))
                    ->resolve(),
                ['jobDescription']
            ),
        ];
    }
}
