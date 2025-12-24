import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Portal() {
    return (
        <>
            <Head title="Portal RW/RT - TPJ2 RW 5" />
            
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                {/* Navigation */}
                <nav className="bg-white shadow-sm border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <Link href="/" className="flex items-center">
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">RW</span>
                                </div>
                                <div className="ml-3">
                                    <h1 className="text-xl font-semibold text-gray-900">TPJ2 RW 5</h1>
                                    <p className="text-sm text-gray-500">Portal Committee</p>
                                </div>
                            </Link>
                            <Link href="/" className="text-gray-600 hover:text-blue-600">
                                ← Kembali ke Beranda
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Portal Content */}
                <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
                    <div className="max-w-md w-full mx-4">
                        <Card className="shadow-xl">
                            <CardHeader className="text-center pb-6">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <CardTitle className="text-2xl font-bold text-gray-900">Portal RW/RT</CardTitle>
                                <CardDescription className="text-gray-600">
                                    Akses khusus untuk pengurus RW dan RT
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <Link href="/login">
                                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            Login RW
                                        </Button>
                                    </Link>
                                    <Link href="/rt/login">
                                        <Button variant="outline" className="w-full">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            Login RT
                                        </Button>
                                    </Link>
                                </div>
                                
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">atau</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                        <h3 className="font-medium text-blue-900 mb-2">Fitur Portal RW/RT</h3>
                                        <ul className="text-sm text-blue-700 space-y-1">
                                            <li>• Manajemen data warga</li>
                                            <li>• Pengelolaan surat-menyurat</li>
                                            <li>• Laporan keuangan</li>
                                            <li>• Pengumuman dan informasi</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                                        <h3 className="font-medium text-amber-900 mb-2">Butuh Akses?</h3>
                                        <p className="text-sm text-amber-700 mb-2">
                                            Hubungi administrator untuk mendapatkan akun login
                                        </p>
                                        <Button variant="outline" size="sm" className="text-amber-700 border-amber-300 hover:bg-amber-100">
                                            Hubungi Admin
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}