<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PkkKartarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pkkPositions = [
            'Ketua PKK',
            'Wakil Ketua PKK',
            'Sekretaris PKK',
            'Bendahara PKK',
            'Koordinator Bidang PKK'
        ];

        $kartarPositions = [
            'Ketua Kartar',
            'Wakil Ketua Kartar',
            'Sekretaris Kartar',
            'Bendahara Kartar',
            'Koordinator Kegiatan Kartar'
        ];

        // Create PKK positions for each RT
        for ($rtId = 1; $rtId <= 4; $rtId++) {
            foreach ($pkkPositions as $position) {
                \App\Models\PkkPosition::create([
                    'rt_id' => $rtId,
                    'position_name' => $position,
                    'resident_id' => null
                ]);
            }

            foreach ($kartarPositions as $position) {
                \App\Models\KartarPosition::create([
                    'rt_id' => $rtId,
                    'position_name' => $position,
                    'resident_id' => null
                ]);
            }
        }
    }
}
