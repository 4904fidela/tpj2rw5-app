<?php

namespace Database\Factories;

use App\Models\Position;
use App\Models\Resident;
use App\Models\Rt;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Committee>
 */
class CommitteeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'resident_id' => Resident::factory(),
            'position_id' => Position::factory(),
            'rt_id' => Rt::factory(),
        ];
    }
}
