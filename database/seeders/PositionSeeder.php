<?php

namespace Database\Seeders;

use App\Models\Position;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $positions =
            [
                [
                    'id' => 1,
                    'level' => 'rt',
                    'name' => 'Ketua',
                    'job_description' => 'Memimpin penyelenggaraan administrasi, koordinasi kegiatan warga, mengambil keputusan strategis tingkat RT, serta menjadi penghubung antara warga dan pihak RW/kelurahan.'
                ],
                [
                    'id' => 2,
                    'level' => 'rt',
                    'name' => 'Wakil Ketua',
                    'job_description' => 'Membantu tugas Ketua RT dalam menjalankan fungsi kepengurusan dan menggantikan Ketua ketika berhalangan, serta memastikan kelancaran kegiatan dan program kerja RT.',
                    'parent_position_id' => 1,
                ],
                [
                    'id' => 3,
                    'level' => 'rt',
                    'name' => 'Sekretaris',
                    'is_assistant' => true,
                    'job_description' => 'Mengelola administrasi RT, termasuk pencatatan surat-menyurat, dokumentasi kegiatan, pendataan warga, serta menyusun notulen rapat dan laporan administrasi.',
                    'parent_position_id' => 2,
                ],
                [
                    'id' => 4,
                    'level' => 'rt',
                    'name' => 'Bendahara',
                    'is_assistant' => true,
                    'job_description' => 'Mengelola keuangan RT, termasuk pencatatan pemasukan dan pengeluaran, menyusun laporan keuangan, mengatur iuran warga, serta memastikan penggunaan dana sesuai aturan.',
                    'parent_position_id' => 2,
                ],
                [
                    'id' => 5,
                    'level' => 'rt',
                    'name' => 'PKK',
                    'job_description' => 'Mengkoordinasikan kegiatan Pemberdayaan dan Kesejahteraan Keluarga (PKK) di lingkungan RT, melaksanakan program rutin seperti posyandu, kegiatan sosial, dan pemberdayaan perempuan.',
                    'parent_position_id' => 2,
                ],
                [
                    'id' => 6,
                    'level' => 'rt',
                    'name' => 'Kartar',
                    'job_description' => 'Mengelola kegiatan Karang Taruna di wilayah RT, memfasilitasi aktivitas pemuda, mengembangkan program kreatif dan sosial, serta ikut mendukung kegiatan kemasyarakatan RT.',
                    'parent_position_id' => 2,
                ]
            ];

        foreach ($positions as $position) {
            Position::factory()->create($position);
        }
    }
}
