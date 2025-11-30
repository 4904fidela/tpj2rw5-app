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
        $this->call([
            PositionSeeder::class,
            RtSeeder::class,
            ResidentSeeder::class,
            UserSeeder::class,
            CommitteeSeeder::class,
            FinanceAccountSeeder::class,
        ]);
    }
}
