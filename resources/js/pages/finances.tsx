import DataTable from '@/components/data-table';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';

type FinancesProps = {
    data: FinanceAccount[];
};

export default function Finances({ data }: FinancesProps) {
    const columns: ColumnDef<FinanceAccount>[] = [
        {
            accessorKey: 'name',
            header: 'Nama Akun',
        },
        {
            accessorKey: 'description',
            header: 'Deskripsi',
        },
    ];

    return (
        <AppLayout>
            <Head title="Keuangan" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex flex-col gap-4 rounded-xl border border-sidebar-border/70 p-4">
                    <span className="text-sm font-medium">Akun Keuangan</span>

                    <DataTable columns={columns} data={data} />
                </div>
            </div>
        </AppLayout>
    );
}
