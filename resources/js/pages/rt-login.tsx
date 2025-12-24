import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function RtLogin() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <>
            <Head title="Login RT - TPJ2 RW 5" />
            
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4">
                <div className="max-w-md w-full">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <Link href="/" className="inline-flex items-center mb-6">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-white font-bold text-xl">RT</span>
                            </div>
                            <div className="text-left">
                                <h1 className="text-xl font-semibold text-gray-900">TPJ2 RW 5</h1>
                                <p className="text-sm text-gray-500">Portal RT</p>
                            </div>
                        </Link>
                    </div>

                    {/* Login Card */}
                    <Card className="shadow-xl">
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl font-bold text-gray-900">Login RT</CardTitle>
                            <CardDescription>
                                Masuk ke sistem manajemen RT
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={submit} className="space-y-4">
                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="rt01@tpj2rw5.id"
                                        className="mt-1"
                                        required
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        className="mt-1"
                                        required
                                    />
                                    {errors.password && (
                                        <p className="text-sm text-red-600 mt-1">{errors.password}</p>
                                    )}
                                </div>

                                <Button 
                                    type="submit" 
                                    className="w-full bg-blue-600 hover:bg-blue-700"
                                    disabled={processing}
                                >
                                    {processing ? 'Masuk...' : 'Masuk'}
                                </Button>
                            </form>

                            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <h3 className="font-medium text-blue-900 mb-2">Demo Account</h3>
                                <div className="text-sm text-blue-700 space-y-1">
                                    <p>Email: rt01@tpj2rw5.id</p>
                                    <p>Password: password</p>
                                </div>
                            </div>

                            <div className="mt-4 text-center">
                                <Link href="/portal" className="text-sm text-gray-600 hover:text-blue-600">
                                    ← Kembali ke Portal
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}