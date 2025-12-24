import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { router, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';

interface Resident {
    id: number;
    name: string;
    nik: string;
}

interface Position {
    id: number;
    position_name: string;
    resident_id: number | null;
    job_description: string;
    resident?: Resident;
}

interface PositionCardProps {
    position: Position;
    residents: Resident[];
}

export default function PositionCard({
    position,
    residents,
}: PositionCardProps) {
    const [isEditing, setIsEditing] = useState(false);
    const { data, setData, put, processing, errors, reset } = useForm({
        resident_id: position.resident_id,
    });

    useEffect(() => {
        setData('resident_id', position.resident_id);
    }, [position.resident_id, setData]);

    const handleEdit = () => {
        setIsEditing(true);
        reset();
        setData('resident_id', position.resident_id);
    };

    const handleSave = () => {
        put(`/rt/organization/${position.id}`, {
            onSuccess: () => {
                setIsEditing(false);
                reset();
            },
        });
    };

    const handleClear = () => {
        router.put(`/rt/organization/${position.id}`, 
            { resident_id: null },
            {
                onSuccess: () => {
                    setIsEditing(false);
                    reset();
                },
            }
        );
    };

    const handleCancel = () => {
        setIsEditing(false);
        reset();
        setData('resident_id', position.resident_id);
    };

    return (
        <Card className="relative">
            <CardHeader className="pb-3">
                <CardTitle className="text-center text-lg">
                    {position.position_name}
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
                {isEditing ? (
                    <div className="space-y-3">
                        <Select
                            value={data.resident_id?.toString() || '0'}
                            onValueChange={(value) =>
                                setData(
                                    'resident_id',
                                    value === '0' ? null : parseInt(value),
                                )
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Pilih warga" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="0">Kosong</SelectItem>
                                {residents.map((resident) => (
                                    <SelectItem
                                        key={resident.id}
                                        value={resident.id.toString()}
                                    >
                                        {resident.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.resident_id && (
                            <p className="text-sm text-red-600">
                                {errors.resident_id}
                            </p>
                        )}
                        <div className="flex space-x-2">
                            <Button
                                size="sm"
                                onClick={handleSave}
                                disabled={processing}
                            >
                                Simpan
                            </Button>
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={handleCancel}
                                disabled={processing}
                            >
                                Batal
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-3 text-center">
                        <div className="flex h-16 items-center justify-center">
                            {position.resident ? (
                                <div>
                                    <p className="font-medium text-gray-900">
                                        {position.resident.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {position.resident.nik}
                                    </p>
                                </div>
                            ) : (
                                <p className="text-gray-400 italic">
                                    Belum ada pejabat
                                </p>
                            )}
                        </div>
                        <div className="flex justify-center space-x-2">
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={handleEdit}
                            >
                                {position.resident ? 'Ubah' : 'Pilih'}
                            </Button>
                            {position.resident && (
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={handleClear}
                                    className="text-red-600 hover:text-red-800"
                                    disabled={processing}
                                >
                                    Kosongkan
                                </Button>
                            )}
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
