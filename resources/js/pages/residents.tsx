import DataTable from '@/components/data-table';
import AppLayout from '@/layouts/app-layout';
import { residents } from '@/routes';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Kependudukan',
        href: residents().url,
    },
];

type ResidentsProps = {
    data: Resident[];
};

export default function Residents({ data }: ResidentsProps) {
    const columns: ColumnDef<Resident>[] = [
        {
            id: 'index',
            header: 'No.',
            cell: ({ row }) => row.index + 1,
        },
        {
            accessorKey: 'name',
            header: 'Nama',
        },
        {
            accessorKey: 'gender',
            header: 'Jenis Kelamin',
        },
        {
            accessorKey: 'address',
            header: 'Alamat',
        },
        {
            accessorKey: 'occupation',
            header: 'Pekerjaan',
        },
        {
            accessorKey: 'marital_status',
            header: 'Status Menikah',
        },
        {
            accessorKey: 'nik',
            header: 'NIK',
        },
        {
            accessorKey: 'kk',
            header: 'No. KK',
        },
        {
            accessorKey: 'education',
            header: 'Tingkat Pendidikan',
        },
        {
            accessorKey: 'birth_date',
            header: 'Tanggal Lahir',
        },
        {
            accessorKey: 'birth_place',
            header: 'Tempat Lahir',
        },
        {
            accessorKey: 'religion',
            header: 'Agama',
        },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Kependudukan" />
            <div className="flex flex-1 flex-col gap-2 rounded-xl p-4">
                <div className="flex flex-col gap-4 rounded-xl border border-sidebar-border/70 p-4">
                    <span className="text-sm font-medium">Penduduk</span>

                    <DataTable columns={columns} data={data} />
                </div>
            </div>
        </AppLayout>
    );
}
