<?php

namespace Database\Seeders;

use App\Models\Resident;
use App\Models\Rt;
use Illuminate\Database\Seeder;

class ResidentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $rtIds = Rt::pluck('id');

        foreach ($rtIds as $rtId) {
            Resident::factory()->count(10)->create([
                'rt_id' => $rtId
            ]);
        }
    }
}
