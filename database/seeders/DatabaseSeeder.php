<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::firstOrCreate(
            ['email' => 'superadmin@tpj2rw5.com'],
            [
                'name' => 'Superadmin',
                'password' => 'supercool',
                'email_verified_at' => now(),
            ]
        );

        $this->call([
            PositionSeeder::class,
            RtSeeder::class,
            ResidentSeeder::class,
        ]);
    }
}
