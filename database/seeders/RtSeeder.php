<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RtSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $rts = [
            ['number' => '01', 'name' => 'RT 01 TPJ2 RW 5'],
            ['number' => '02', 'name' => 'RT 02 TPJ2 RW 5'],
            ['number' => '03', 'name' => 'RT 03 TPJ2 RW 5'],
            ['number' => '04', 'name' => 'RT 04 TPJ2 RW 5'],
        ];

        foreach ($rts as $rt) {
            \App\Models\Rt::create($rt);
        }

        // Create sample RT users
        \App\Models\User::create([
            'name' => 'Ketua RT 01',
            'email' => 'rt01@tpj2rw5.id',
            'password' => bcrypt('password'),
            'rt_id' => 1,
            'role' => 'rt',
        ]);

        \App\Models\User::create([
            'name' => 'Ketua RT 02',
            'email' => 'rt02@tpj2rw5.id',
            'password' => bcrypt('password'),
            'rt_id' => 2,
            'role' => 'rt',
        ]);
    }
}
