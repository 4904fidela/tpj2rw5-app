<?php

namespace Database\Seeders;

use App\Models\Resident;
use App\Models\Rt;
use Illuminate\Database\Seeder;

class RtSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $rts = [
            ['number' => 25],
            ['number' => 24],
            ['number' => 26],
            ['number' => 27],
        ];

        foreach ($rts as $rt) {
            Rt::factory()->create($rt);
        }
    }
}
