<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ResidentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $residents = [
            // RT 01 residents
            ['rt_id' => 1, 'nik' => '3201010101850001', 'name' => 'Budi Santoso', 'gender' => 'L', 'birth_date' => '1985-01-01', 'birth_place' => 'Jakarta', 'address' => 'Jl. TPJ2 Blok A No. 1', 'phone' => '081234567890', 'status' => 'KK', 'kk_number' => '3201010101000001'],
            ['rt_id' => 1, 'nik' => '3201010101870002', 'name' => 'Siti Rahayu', 'gender' => 'P', 'birth_date' => '1987-03-15', 'birth_place' => 'Bogor', 'address' => 'Jl. TPJ2 Blok A No. 1', 'phone' => '081234567891', 'status' => 'Anggota', 'kk_number' => '3201010101000001'],
            ['rt_id' => 1, 'nik' => '3201010101900003', 'name' => 'Ahmad Wijaya', 'gender' => 'L', 'birth_date' => '1990-07-20', 'birth_place' => 'Depok', 'address' => 'Jl. TPJ2 Blok A No. 2', 'phone' => '081234567892', 'status' => 'KK', 'kk_number' => '3201010101000002'],
            ['rt_id' => 1, 'nik' => '3201010101920004', 'name' => 'Dewi Lestari', 'gender' => 'P', 'birth_date' => '1992-11-10', 'birth_place' => 'Tangerang', 'address' => 'Jl. TPJ2 Blok A No. 2', 'phone' => '081234567893', 'status' => 'Anggota', 'kk_number' => '3201010101000002'],
            ['rt_id' => 1, 'nik' => '3201010101880005', 'name' => 'Rudi Hermawan', 'gender' => 'L', 'birth_date' => '1988-05-25', 'birth_place' => 'Bekasi', 'address' => 'Jl. TPJ2 Blok A No. 3', 'phone' => '081234567894', 'status' => 'KK', 'kk_number' => '3201010101000003'],
            
            // RT 02 residents
            ['rt_id' => 2, 'nik' => '3201010201850006', 'name' => 'Andi Pratama', 'gender' => 'L', 'birth_date' => '1985-02-14', 'birth_place' => 'Jakarta', 'address' => 'Jl. TPJ2 Blok B No. 1', 'phone' => '081234567895', 'status' => 'KK', 'kk_number' => '3201010201000001'],
            ['rt_id' => 2, 'nik' => '3201010201870007', 'name' => 'Maya Sari', 'gender' => 'P', 'birth_date' => '1987-08-30', 'birth_place' => 'Bandung', 'address' => 'Jl. TPJ2 Blok B No. 1', 'phone' => '081234567896', 'status' => 'Anggota', 'kk_number' => '3201010201000001'],
            ['rt_id' => 2, 'nik' => '3201010201910008', 'name' => 'Joko Susilo', 'gender' => 'L', 'birth_date' => '1991-12-05', 'birth_place' => 'Surabaya', 'address' => 'Jl. TPJ2 Blok B No. 2', 'phone' => '081234567897', 'status' => 'KK', 'kk_number' => '3201010201000002'],
        ];

        foreach ($residents as $resident) {
            \App\Models\Resident::create($resident);
        }
    }
}
