<?php

namespace Database\Factories;

use App\Models\Position;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Position>
 */
class PositionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'level' => fake()->randomElement(['rt', 'rw']),
            'name' => fake()->jobTitle(),
            'job_description' => fake()->paragraph(),
            'is_assistant' => false,
            'parent_position_id' => null
        ];
    }
}
