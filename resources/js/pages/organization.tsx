import DataTable from '@/components/data-table';
import OrganizationChart from '@/components/organization_chart/org-chart';
import AppLayout from '@/layouts/app-layout';
import { organization } from '@/routes';
import { BreadcrumbItem } from '@/types';
import { Position } from '@/types/organization';
import { Head } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Struktur Organisasi',
        href: organization().url,
    },
];

export default function Organization() {
    const chartData = [
        {
            id: 'resident1',
            position: 'Ketua RT',
            name: 'Aryan Shafa Wardana asdfasdfasdfasfasdfasdfasfsadfasdfasdfasdfasfd',
        },
        {
            id: 'resident2',
            position: 'Wakil Ketua RT',
            parentId: 'resident1',
            name: 'Almira',
        },
        {
            id: 'resident3',
            position: 'Sekretaris RT',
            parentId: 'resident2',
            name: 'Fidela',
        },
        {
            id: 'resident4',
            position: 'Bendahara RT',
            parentId: 'resident2',
            name: 'Putri',
        },
    ];

    const columns: ColumnDef<Position>[] = [
        {
            accessorKey: 'name',
            header: 'Nama Jabatan',
        },
        {
            accessorKey: 'jobDescription',
            header: 'Tugas Pokok dan Fungsi',
        },
    ];

    const data: Position[] = [
        {
            level: 'rt',
            name: 'Ketua',
            jobDescription: '- Menjadi ketua anjas',
        },
        {
            level: 'rt',
            name: 'Wakil Ketua',
            jobDescription: '- Menjadi wakil ketua anjas',
        },
        {
            level: 'rt',
            name: 'Sekretaris',
            jobDescription: '- Menjadi sekretaris anjas',
        },
        {
            level: 'rt',
            name: 'Bendahara',
            jobDescription: '- Menjadi Bendahara anjas',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Struktur Organisasi" />
            <div className="flex flex-1 flex-col gap-2 rounded-xl p-4">
                <div className="relative h-[400px] overflow-hidden rounded-xl border border-sidebar-border/70">
                    <span className="absolute top-4 left-4 text-sm font-medium">
                        Struktur RT
                    </span>
                    <OrganizationChart data={chartData} />
                </div>
                <div className="flex flex-col gap-4 rounded-xl border border-sidebar-border/70 p-4">
                    <span className="text-sm font-medium">Jabatan</span>

                    <DataTable columns={columns} data={data} />
                </div>
            </div>
        </AppLayout>
    );
}
