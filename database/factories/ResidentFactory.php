<?php

namespace Database\Factories;

use App\Models\Rt;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Resident>
 */
class ResidentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nik' => fake()->numerify('################'),
            'kk' => fake()->numerify('################'),
            'gender' => fake()->randomElement(['L', 'P']),
            'name' => fake()->name(),
            'birth_date' => fake()->dateTimeBetween('-60 years', 'now'),
            'birth_place' => fake()->city(),
            'address' => fake()->address(),
            'marital_status' => fake()->randomElement(['menikah', 'belum menikah', 'cerai hidup', 'cerai mati']),
            'religion' => fake()->randomElement(['islam', 'kristen', 'katolik', 'buddha', 'konghucu', 'hindu']),
            'education' => fake()->randomElement(['tidak sekolah', 'tk', 'sd', 'smp', 'sma', 'd1', 'd2', 'd3', 'd4', 's1', 's2', 's3']),
            'occupation' => fake()->jobTitle(),
            // 'rt_id' => Rt::factory()
        ];
    }
}
