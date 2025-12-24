<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrganizationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $positions = [
            'Ketua RT',
            'Wakil Ketua RT', 
            'Sekretaris RT',
            'Bendahara RT',
            'Ketua PKK RT',
            'Ketua Kartar RT'
        ];

        // Create positions for each RT
        for ($rtId = 1; $rtId <= 4; $rtId++) {
            foreach ($positions as $position) {
                \App\Models\OrganizationPosition::create([
                    'rt_id' => $rtId,
                    'position_name' => $position,
                    'resident_id' => null,
                    'job_description' => $this->getJobDescription($position)
                ]);
            }
        }
    }

    private function getJobDescription($position)
    {
        $descriptions = [
            'Ketua RT' => 'Memimpin dan mengkoordinasikan seluruh kegiatan RT, bertanggung jawab atas pelaksanaan program kerja RT.',
            'Wakil Ketua RT' => 'Membantu Ketua RT dalam menjalankan tugas dan menggantikan Ketua RT jika berhalangan.',
            'Sekretaris RT' => 'Mengelola administrasi RT, membuat surat-menyurat, dan mencatat hasil rapat.',
            'Bendahara RT' => 'Mengelola keuangan RT, membuat laporan keuangan, dan mengurus iuran warga.',
            'Ketua PKK RT' => 'Memimpin dan mengkoordinasikan kegiatan Pemberdayaan Kesejahteraan Keluarga di tingkat RT.',
            'Ketua Kartar RT' => 'Memimpin dan mengkoordinasikan kegiatan karang taruna dan kepemudaan di RT.'
        ];
        
        return $descriptions[$position] ?? '';
    }
}
