import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import RtLayout from '@/layouts/rt-layout';
import { Head, useForm } from '@inertiajs/react';

interface Resident {
    id?: number;
    nik: string;
    name: string;
    gender: string;
    birth_date: string;
    birth_place: string;
    address: string;
    phone: string;
    status: string;
    kk_number: string;
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
    resident?: Resident;
}

export default function ResidentForm({ auth, resident }: Props) {
    const { data, setData, post, put, processing, errors } = useForm({
        nik: resident?.nik || '',
        name: resident?.name || '',
        gender: resident?.gender || '',
        birth_date: resident?.birth_date
            ? new Date(resident.birth_date).toISOString().split('T')[0]
            : '',
        birth_place: resident?.birth_place || '',
        address: resident?.address || '',
        phone: resident?.phone || '',
        status: resident?.status || 'Anggota',
        kk_number: resident?.kk_number || '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (resident) {
            put(`/rt/residents/${resident.id}`);
        } else {
            post('/rt/residents');
        }
    };

    return (
        <RtLayout title={resident ? 'Edit Warga' : 'Tambah Warga'} auth={auth}>
            <Head
                title={`${resident ? 'Edit' : 'Tambah'} Warga - ${auth.user.rt.name}`}
            />

            <Card className="max-w-2xl">
                <CardHeader>
                    <CardTitle>
                        {resident ? 'Edit Data Warga' : 'Tambah Warga Baru'}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="nik">NIK</Label>
                                <Input
                                    id="nik"
                                    value={data.nik}
                                    onChange={(e) =>
                                        setData('nik', e.target.value)
                                    }
                                    maxLength={16}
                                    required
                                />
                                {errors.nik && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.nik}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="name">Nama Lengkap</Label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    required
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="gender">Jenis Kelamin</Label>
                                <Select
                                    value={data.gender}
                                    onValueChange={(value) =>
                                        setData('gender', value)
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pilih jenis kelamin" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="L">
                                            Laki-laki
                                        </SelectItem>
                                        <SelectItem value="P">
                                            Perempuan
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.gender && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.gender}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="birth_date">
                                    Tanggal Lahir
                                </Label>
                                <Input
                                    id="birth_date"
                                    type="date"
                                    value={data.birth_date}
                                    onChange={(e) =>
                                        setData('birth_date', e.target.value)
                                    }
                                    required
                                />
                                {errors.birth_date && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.birth_date}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="birth_place">Tempat Lahir</Label>
                            <Input
                                id="birth_place"
                                value={data.birth_place}
                                onChange={(e) =>
                                    setData('birth_place', e.target.value)
                                }
                                required
                            />
                            {errors.birth_place && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.birth_place}
                                </p>
                            )}
                        </div>

                        <div>
                            <Label htmlFor="address">Alamat</Label>
                            <Input
                                id="address"
                                value={data.address}
                                onChange={(e) =>
                                    setData('address', e.target.value)
                                }
                                required
                            />
                            {errors.address && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.address}
                                </p>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="phone">No. Telepon</Label>
                                <Input
                                    id="phone"
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData('phone', e.target.value)
                                    }
                                />
                                {errors.phone && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label htmlFor="status">Status</Label>
                                <Select
                                    value={data.status}
                                    onValueChange={(value) =>
                                        setData('status', value)
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="KK">
                                            Kepala Keluarga
                                        </SelectItem>
                                        <SelectItem value="Anggota">
                                            Anggota Keluarga
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.status && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.status}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="kk_number">No. KK</Label>
                            <Input
                                id="kk_number"
                                value={data.kk_number}
                                onChange={(e) =>
                                    setData('kk_number', e.target.value)
                                }
                                maxLength={16}
                            />
                            {errors.kk_number && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.kk_number}
                                </p>
                            )}
                        </div>

                        <div className="flex justify-end space-x-2 pt-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => window.history.back()}
                            >
                                Batal
                            </Button>
                            <Button type="submit" disabled={processing}>
                                {processing ? 'Menyimpan...' : 'Simpan'}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </RtLayout>
    );
}
