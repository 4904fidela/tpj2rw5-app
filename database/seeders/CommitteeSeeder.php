<?php

namespace Database\Seeders;

use App\Models\Committee;
use App\Models\Position;
use App\Models\Resident;
use App\Models\Rt;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CommitteeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $rts = Rt::all()->toArray();
        $positions = Position::where('level', 'rt')->get()->toArray();

        foreach ($rts as $rt) {
            $residents = Resident::where('rt_id', $rt['id'])->get()->toArray();

            foreach ($positions as $position) {
                shuffle($residents);
                $resident = array_pop($residents);

                Committee::factory()->create([
                    'rt_id' => $rt['id'],
                    'resident_id' => $resident['id'],
                    'position_id' => $position['id']
                ]);
            }
        }
    }
}
