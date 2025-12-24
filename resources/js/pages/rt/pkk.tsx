import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import RtLayout from '@/layouts/rt-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

interface Resident {
    id: number;
    name: string;
    nik: string;
}

interface Position {
    id: number;
    position_name: string;
    resident_id: number | null;
    resident?: Resident;
}

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    rt: {
        id: number;
        number: string;
        name: string;
    };
}

interface Props {
    auth: {
        user: User;
    };
    positions: Position[];
    residents: Resident[];
    members: any[];
}

export default function PKK({ auth, positions, residents, members }: Props) {
    const [editingId, setEditingId] = useState<number | null>(null);
    const { data, setData, put, processing } = useForm({ resident_id: null });

    const handleEdit = (position: Position) => {
        setEditingId(position.id);
        setData('resident_id', position.resident_id);
    };

    const handleSave = (positionId: number) => {
        put(`/rt/pkk/${positionId}`, {
            onSuccess: () => setEditingId(null),
        });
    };

    const handleCancel = () => {
        setEditingId(null);
        setData('resident_id', null);
    };

    return (
        <RtLayout title="PKK RT" auth={auth}>
            <Head title={`PKK RT - ${auth.user.rt.name}`} />

            <div className="space-y-6">
                <div>
                    <h2 className="text-lg font-medium text-gray-900">
                        Struktur PKK {auth.user.rt.name}
                    </h2>
                    <p className="text-sm text-gray-600">
                        Kelola struktur organisasi PKK (Pemberdayaan
                        Kesejahteraan Keluarga)
                    </p>
                </div>

                {/* PKK Committee Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Struktur PKK RT</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            Jabatan
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            Nama
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            NIK
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {positions.map((position) => (
                                        <tr
                                            key={position.id}
                                            className="hover:bg-gray-50"
                                        >
                                            <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                                                {position.position_name}
                                            </td>
                                            <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                                                {position.resident?.name || '-'}
                                            </td>
                                            <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                                                {position.resident?.nik || '-'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {editingId === position.id ? (
                                                    <Select
                                                        value={
                                                            data.resident_id?.toString() ||
                                                            '0'
                                                        }
                                                        onValueChange={(
                                                            value,
                                                        ) =>
                                                            setData(
                                                                'resident_id',
                                                                value === '0'
                                                                    ? null
                                                                    : parseInt(
                                                                          value,
                                                                      ),
                                                            )
                                                        }
                                                    >
                                                        <SelectTrigger className="w-48">
                                                            <SelectValue placeholder="Pilih warga" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="0">
                                                                Kosong
                                                            </SelectItem>
                                                            {residents.map(
                                                                (resident) => (
                                                                    <SelectItem
                                                                        key={
                                                                            resident.id
                                                                        }
                                                                        value={resident.id.toString()}
                                                                    >
                                                                        {
                                                                            resident.name
                                                                        }
                                                                    </SelectItem>
                                                                ),
                                                            )}
                                                        </SelectContent>
                                                    </Select>
                                                ) : (
                                                    <span
                                                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                                                            position.resident
                                                                ? 'bg-green-100 text-green-800'
                                                                : 'bg-gray-100 text-gray-800'
                                                        }`}
                                                    >
                                                        {position.resident
                                                            ? 'Terisi'
                                                            : 'Kosong'}
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                {editingId === position.id ? (
                                                    <div className="flex space-x-2">
                                                        <Button
                                                            size="sm"
                                                            onClick={() =>
                                                                handleSave(
                                                                    position.id,
                                                                )
                                                            }
                                                            disabled={
                                                                processing
                                                            }
                                                        >
                                                            Simpan
                                                        </Button>
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={
                                                                handleCancel
                                                            }
                                                        >
                                                            Batal
                                                        </Button>
                                                    </div>
                                                ) : (
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        onClick={() =>
                                                            handleEdit(position)
                                                        }
                                                    >
                                                        Edit
                                                    </Button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>

                {/* Members Table */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>Anggota PKK RT</CardTitle>
                            <Link href="/rt/pkk/members/create">
                                <Button size="sm">Tambah Anggota</Button>
                            </Link>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            Nama
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            NIK
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            Peran
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            Bergabung
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {members.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan={5}
                                                className="px-6 py-4 text-center text-gray-500"
                                            >
                                                Belum ada anggota
                                            </td>
                                        </tr>
                                    ) : (
                                        members.map((member: any) => (
                                            <tr
                                                key={member.id}
                                                className="hover:bg-gray-50"
                                            >
                                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                                                    {member.resident.name}
                                                </td>
                                                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                                                    {member.resident.nik}
                                                </td>
                                                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                                                    {member.role || 'Anggota'}
                                                </td>
                                                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                                                    {new Date(
                                                        member.joined_date,
                                                    ).toLocaleDateString(
                                                        'id-ID',
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                                    <div className="flex space-x-2">
                                                        <Link
                                                            href={`/rt/pkk/members/${member.id}/edit`}
                                                        >
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                            >
                                                                Edit
                                                            </Button>
                                                        </Link>
                                                        <Link
                                                            href={`/rt/pkk/members/${member.id}`}
                                                            method="delete"
                                                            as="button"
                                                        >
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                className="text-red-600"
                                                            >
                                                                Hapus
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </RtLayout>
    );
}
