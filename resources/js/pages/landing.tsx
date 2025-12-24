import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Landing() {
    return (
        <>
            <Head title="Taman Pondok Jati 2 RW 5" />
            
            {/* Navigation */}
            <nav className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center">
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">RW</span>
                                </div>
                                <div className="ml-3">
                                    <h1 className="text-xl font-semibold text-gray-900">TPJ2 RW 5</h1>
                                    <p className="text-sm text-gray-500">Smart Management System</p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Menu */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="#home" className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium">
                                    Home
                                </a>
                                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                                    About
                                </a>
                                <Link href="/portal" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                                    Portal RW/RT
                                </Link>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button className="text-gray-700 hover:text-blue-600 p-2">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Selamat Datang di
                            <span className="block text-blue-600">Taman Pondok Jati 2 RW 5</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Sistem manajemen cerdas untuk meningkatkan pelayanan dan komunikasi antara warga dengan pengurus RW/RT
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                                Layanan Warga
                            </Button>
                            <Button variant="outline" size="lg">
                                Informasi Terkini
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Information Cards */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Informasi RW 5</h2>
                        <p className="text-lg text-gray-600">Dapatkan informasi terbaru seputar kegiatan dan layanan di lingkungan kita</p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Pengumuman */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                        </svg>
                                    </div>
                                    Pengumuman
                                </CardTitle>
                                <CardDescription>
                                    Informasi penting dan pengumuman terbaru dari pengurus RW
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <p className="text-sm font-medium text-gray-900">Rapat Bulanan RW</p>
                                        <p className="text-xs text-gray-500">15 Januari 2024</p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <p className="text-sm font-medium text-gray-900">Gotong Royong Mingguan</p>
                                        <p className="text-xs text-gray-500">Setiap Minggu</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Layanan */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    Layanan
                                </CardTitle>
                                <CardDescription>
                                    Berbagai layanan administrasi dan kemasyarakatan
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex items-center text-sm">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        Surat Pengantar
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        Surat Keterangan Domisili
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        Surat Keterangan Usaha
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        Pengaduan Warga
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Kontak */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    Kontak
                                </CardTitle>
                                <CardDescription>
                                    Hubungi pengurus RW/RT untuk informasi lebih lanjut
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Ketua RW 05</p>
                                        <p className="text-sm text-gray-600">Bapak [Nama Ketua RW]</p>
                                        <p className="text-sm text-gray-500">+62 xxx-xxxx-xxxx</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Sekretaris</p>
                                        <p className="text-sm text-gray-600">Ibu [Nama Sekretaris]</p>
                                        <p className="text-sm text-gray-500">+62 xxx-xxxx-xxxx</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang RW 5</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Taman Pondok Jati 2 RW 5 adalah komunitas yang berkomitmen untuk menciptakan lingkungan yang aman, 
                                nyaman, dan harmonis bagi seluruh warga. Dengan sistem manajemen yang modern, kami berupaya 
                                memberikan pelayanan terbaik kepada masyarakat.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                                    <div className="text-2xl font-bold text-blue-600">[XXX]</div>
                                    <div className="text-sm text-gray-600">Total KK</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                                    <div className="text-2xl font-bold text-green-600">[X]</div>
                                    <div className="text-sm text-gray-600">RT</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Visi & Misi</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Visi</h4>
                                    <p className="text-gray-600 text-sm">
                                        Mewujudkan lingkungan RW 5 yang aman, nyaman, dan sejahtera dengan 
                                        mengedepankan gotong royong dan kekeluargaan.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Misi</h4>
                                    <ul className="text-gray-600 text-sm space-y-1">
                                        <li>• Meningkatkan pelayanan kepada warga</li>
                                        <li>• Memfasilitasi kegiatan kemasyarakatan</li>
                                        <li>• Menjaga keamanan dan ketertiban lingkungan</li>
                                        <li>• Mengembangkan potensi warga</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                                    <span className="text-white font-bold">RW</span>
                                </div>
                                <span className="text-lg font-semibold">TPJ2 RW 5</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Sistem manajemen cerdas untuk pelayanan warga yang lebih baik.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Alamat</h3>
                            <p className="text-gray-400 text-sm">
                                Taman Pondok Jati 2 RW 5<br />
                                [Alamat Lengkap]<br />
                                [Kota, Kode Pos]
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Jam Pelayanan</h3>
                            <div className="text-gray-400 text-sm space-y-1">
                                <p>Senin - Jumat: 08:00 - 16:00</p>
                                <p>Sabtu: 08:00 - 12:00</p>
                                <p>Minggu: Tutup</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                        <p className="text-gray-400 text-sm">
                            © 2024 Taman Pondok Jati 2 RW 5. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}