import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import RtLayout from '@/layouts/rt-layout';
import { Head } from '@inertiajs/react';

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
}

export default function Dashboard({ auth }: Props) {
    return (
        <RtLayout title="Dashboard" auth={auth}>
            <Head title={`Dashboard ${auth.user.rt.name}`} />
            
            {/* Stats Cards */}
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                                <svg
                                    className="h-6 w-6 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">
                                    Total KK
                                </p>
                                <p className="text-2xl font-bold text-gray-900">
                                    45
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                                <svg
                                    className="h-6 w-6 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">
                                    Total Warga
                                </p>
                                <p className="text-2xl font-bold text-gray-900">
                                    156
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                                <svg
                                    className="h-6 w-6 text-yellow-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">
                                    Surat Bulan Ini
                                </p>
                                <p className="text-2xl font-bold text-gray-900">
                                    12
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                                <svg
                                    className="h-6 w-6 text-purple-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                                    />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">
                                    Pengaduan
                                </p>
                                <p className="text-2xl font-bold text-gray-900">
                                    3
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity */}
            <Card>
                <CardHeader>
                    <CardTitle>Aktivitas Terbaru</CardTitle>
                    <CardDescription>
                        Ringkasan aktivitas terbaru di {auth.user.rt.name}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-center rounded-lg bg-blue-50 p-4">
                            <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">
                                    Surat Pengantar dibuat
                                </p>
                                <p className="text-xs text-gray-500">
                                    2 jam yang lalu
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center rounded-lg bg-green-50 p-4">
                            <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">
                                    Data warga baru ditambahkan
                                </p>
                                <p className="text-xs text-gray-500">
                                    5 jam yang lalu
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center rounded-lg bg-yellow-50 p-4">
                            <div className="mr-3 h-2 w-2 rounded-full bg-yellow-500"></div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">
                                    Pengaduan baru diterima
                                </p>
                                <p className="text-xs text-gray-500">
                                    1 hari yang lalu
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </RtLayout>
    );
}
