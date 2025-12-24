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
    id: number;
    name: string;
    nik: string;
}

interface Member {
    id?: number;
    resident_id: number;
    role: string;
    joined_date: string;
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
    residents: Resident[];
    member?: Member;
}

export default function KartarMemberForm({ auth, residents, member }: Props) {
    const { data, setData, post, put, processing, errors } = useForm({
        resident_id: member?.resident_id || '',
        role: member?.role || '',
        joined_date: member?.joined_date
            ? new Date(member.joined_date).toISOString().split('T')[0]
            : '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (member) {
            put(`/rt/kartar/members/${member.id}`);
        } else {
            post('/rt/kartar/members');
        }
    };

    return (
        <RtLayout
            title={member ? 'Edit Anggota Kartar' : 'Tambah Anggota Kartar'}
            auth={auth}
        >
            <Head
                title={`${member ? 'Edit' : 'Tambah'} Anggota Kartar - ${auth.user.rt.name}`}
            />

            <Card className="max-w-2xl">
                <CardHeader>
                    <CardTitle>
                        {member
                            ? 'Edit Anggota Kartar'
                            : 'Tambah Anggota Kartar'}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <Label htmlFor="resident_id">Warga</Label>
                            <Select
                                value={data.resident_id.toString()}
                                onValueChange={(value) =>
                                    setData('resident_id', parseInt(value))
                                }
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Pilih warga" />
                                </SelectTrigger>
                                <SelectContent>
                                    {residents.map((resident) => (
                                        <SelectItem
                                            key={resident.id}
                                            value={resident.id.toString()}
                                        >
                                            {resident.name} - {resident.nik}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.resident_id && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.resident_id}
                                </p>
                            )}
                        </div>

                        <div>
                            <Label htmlFor="role">Peran</Label>
                            <Input
                                id="role"
                                value={data.role}
                                onChange={(e) =>
                                    setData('role', e.target.value)
                                }
                                placeholder="Contoh: Anggota, Koordinator Kegiatan"
                            />
                            {errors.role && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.role}
                                </p>
                            )}
                        </div>

                        <div>
                            <Label htmlFor="joined_date">
                                Tanggal Bergabung
                            </Label>
                            <Input
                                id="joined_date"
                                type="date"
                                value={data.joined_date}
                                onChange={(e) =>
                                    setData('joined_date', e.target.value)
                                }
                                required
                            />
                            {errors.joined_date && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.joined_date}
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
