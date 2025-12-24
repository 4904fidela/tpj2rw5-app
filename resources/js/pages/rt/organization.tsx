import PositionCard from '@/components/position-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import RtLayout from '@/layouts/rt-layout';
import { Head, Link } from '@inertiajs/react';

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
}

export default function Organization({ auth, positions, residents }: Props) {
    return (
        <RtLayout title="Struktur Organisasi" auth={auth}>
            <Head title={`Struktur Organisasi - ${auth.user.rt.name}`} />

            <div className="space-y-6">
                <div>
                    <h2 className="text-lg font-medium text-gray-900">
                        Struktur Organisasi {auth.user.rt.name}
                    </h2>
                    <p className="text-sm text-gray-600">
                        Kelola struktur organisasi dan pejabat RT
                    </p>
                </div>

                {/* Organization Chart */}
                <div className="space-y-6">
                    {/* Top Level - Ketua RT */}
                    {positions.find((p) => p.position_name === 'Ketua RT') && (
                        <div className="flex justify-center">
                            <div className="w-64">
                                <PositionCard
                                    position={
                                        positions.find(
                                            (p) =>
                                                p.position_name === 'Ketua RT',
                                        )!
                                    }
                                    residents={residents}
                                />
                            </div>
                        </div>
                    )}

                    {/* Second Level - Wakil Ketua */}
                    {positions.find(
                        (p) => p.position_name === 'Wakil Ketua RT',
                    ) && (
                        <div className="flex justify-center">
                            <div className="w-64">
                                <PositionCard
                                    position={
                                        positions.find(
                                            (p) =>
                                                p.position_name ===
                                                'Wakil Ketua RT',
                                        )!
                                    }
                                    residents={residents}
                                />
                            </div>
                        </div>
                    )}

                    {/* Third Level - Core Positions */}
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">
                        {positions.find(
                            (p) => p.position_name === 'Sekretaris RT',
                        ) && (
                            <PositionCard
                                position={
                                    positions.find(
                                        (p) =>
                                            p.position_name === 'Sekretaris RT',
                                    )!
                                }
                                residents={residents}
                            />
                        )}
                        {positions.find(
                            (p) => p.position_name === 'Bendahara RT',
                        ) && (
                            <PositionCard
                                position={
                                    positions.find(
                                        (p) =>
                                            p.position_name === 'Bendahara RT',
                                    )!
                                }
                                residents={residents}
                            />
                        )}
                    </div>

                    {/* Fourth Level - Coordinators */}
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">
                        {positions.find(
                            (p) => p.position_name === 'Ketua PKK RT',
                        ) && (
                            <div className="space-y-3">
                                <PositionCard
                                    position={
                                        positions.find(
                                            (p) =>
                                                p.position_name ===
                                                'Ketua PKK RT',
                                        )!
                                    }
                                    residents={residents}
                                />
                                <Link href="/rt/pkk">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full"
                                    >
                                        Kelola Struktur PKK
                                    </Button>
                                </Link>
                            </div>
                        )}

                        {positions.find(
                            (p) => p.position_name === 'Ketua Kartar RT',
                        ) && (
                            <div className="space-y-3">
                                <PositionCard
                                    position={
                                        positions.find(
                                            (p) =>
                                                p.position_name ===
                                                'Ketua Kartar RT',
                                        )!
                                    }
                                    residents={residents}
                                />
                                <Link href="/rt/kartar">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full"
                                    >
                                        Kelola Struktur Kartar
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Job Descriptions */}
                <Card>
                    <CardHeader>
                        <CardTitle>Deskripsi Tugas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            {positions.map((position) => (
                                <div
                                    key={position.id}
                                    className="border-l-4 border-blue-500 pl-4"
                                >
                                    <h4 className="font-medium text-gray-900">
                                        {position.position_name}
                                    </h4>
                                    <p className="mt-1 text-sm text-gray-600">
                                        {position.job_description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </RtLayout>
    );
}
