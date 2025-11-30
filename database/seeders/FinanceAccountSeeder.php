<?php

namespace Database\Seeders;

use App\Models\FinanceAccount;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FinanceAccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        FinanceAccount::factory()
            ->count(8)
            ->create();
    }
}
