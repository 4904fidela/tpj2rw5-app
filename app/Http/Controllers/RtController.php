<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RtController extends Controller
{
    public function login()
    {
        return inertia('rt-login');
    }

    public function dashboard()
    {
        $user = auth()->user()->load('rt');
        
        if ($user->role !== 'rt') {
            return redirect()->route('dashboard');
        }

        return inertia('rt/dashboard', [
            'auth' => [
                'user' => $user
            ]
        ]);
    }

    public function residents()
    {
        $user = auth()->user()->load('rt');
        
        if ($user->role !== 'rt') {
            return redirect()->route('dashboard');
        }

        $residents = \App\Models\Resident::where('rt_id', $user->rt_id)->get();

        return inertia('rt/residents', [
            'auth' => [
                'user' => $user
            ],
            'residents' => $residents
        ]);
    }

    public function createResident()
    {
        $user = auth()->user()->load('rt');
        
        if ($user->role !== 'rt') {
            return redirect()->route('dashboard');
        }

        return inertia('rt/resident-form', [
            'auth' => [
                'user' => $user
            ]
        ]);
    }

    public function storeResident()
    {
        $user = auth()->user();
        
        request()->validate([
            'nik' => 'required|string|size:16|unique:residents',
            'name' => 'required|string|max:255',
            'gender' => 'required|in:L,P',
            'birth_date' => 'required|date',
            'birth_place' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'phone' => 'nullable|string|max:20',
            'status' => 'required|in:KK,Anggota',
            'kk_number' => 'nullable|string|size:16',
        ]);

        \App\Models\Resident::create([
            'rt_id' => $user->rt_id,
            'nik' => request('nik'),
            'name' => request('name'),
            'gender' => request('gender'),
            'birth_date' => request('birth_date'),
            'birth_place' => request('birth_place'),
            'address' => request('address'),
            'phone' => request('phone'),
            'status' => request('status'),
            'kk_number' => request('kk_number'),
        ]);

        return redirect()->route('rt.residents')->with('success', 'Data warga berhasil ditambahkan');
    }

    public function editResident($id)
    {
        $user = auth()->user()->load('rt');
        
        if ($user->role !== 'rt') {
            return redirect()->route('dashboard');
        }

        $resident = \App\Models\Resident::where('rt_id', $user->rt_id)->findOrFail($id);

        return inertia('rt/resident-form', [
            'auth' => [
                'user' => $user
            ],
            'resident' => $resident
        ]);
    }

    public function updateResident($id)
    {
        $user = auth()->user();
        $resident = \App\Models\Resident::where('rt_id', $user->rt_id)->findOrFail($id);

        request()->validate([
            'nik' => 'required|string|size:16|unique:residents,nik,' . $id,
            'name' => 'required|string|max:255',
            'gender' => 'required|in:L,P',
            'birth_date' => 'required|date',
            'birth_place' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'phone' => 'nullable|string|max:20',
            'status' => 'required|in:KK,Anggota',
            'kk_number' => 'nullable|string|size:16',
        ]);

        $resident->update([
            'nik' => request('nik'),
            'name' => request('name'),
            'gender' => request('gender'),
            'birth_date' => request('birth_date'),
            'birth_place' => request('birth_place'),
            'address' => request('address'),
            'phone' => request('phone'),
            'status' => request('status'),
            'kk_number' => request('kk_number'),
        ]);

        return redirect()->route('rt.residents')->with('success', 'Data warga berhasil diperbarui');
    }

    public function destroyResident($id)
    {
        $user = auth()->user();
        $resident = \App\Models\Resident::where('rt_id', $user->rt_id)->findOrFail($id);
        
        $resident->delete();

        return redirect()->route('rt.residents')->with('success', 'Data warga berhasil dihapus');
    }

    public function organization()
    {
        $user = auth()->user()->load('rt');
        
        if ($user->role !== 'rt') {
            return redirect()->route('dashboard');
        }

        $positions = \App\Models\OrganizationPosition::where('rt_id', $user->rt_id)
            ->with('resident')
            ->get()
            ->sortBy(function($position) {
                $order = [
                    'Ketua RT' => 1,
                    'Wakil Ketua RT' => 2,
                    'Sekretaris RT' => 3,
                    'Bendahara RT' => 4,
                    'Ketua PKK RT' => 5,
                    'Ketua Kartar RT' => 6
                ];
                return $order[$position->position_name] ?? 999;
            })->values();

        $residents = \App\Models\Resident::where('rt_id', $user->rt_id)->get();

        return inertia('rt/organization', [
            'auth' => [
                'user' => $user
            ],
            'positions' => $positions,
            'residents' => $residents
        ]);
    }

    public function updateOrganization($id)
    {
        $user = auth()->user();
        $position = \App\Models\OrganizationPosition::where('rt_id', $user->rt_id)->findOrFail($id);

        $residentId = request('resident_id');
        
        // Validate resident belongs to same RT if provided
        if ($residentId) {
            $resident = \App\Models\Resident::where('id', $residentId)
                ->where('rt_id', $user->rt_id)
                ->first();
            
            if (!$resident) {
                return back()->withErrors(['resident_id' => 'Warga tidak ditemukan atau bukan bagian dari RT ini']);
            }
        }

        $position->update(['resident_id' => $residentId]);

        return back()->with('success', 'Struktur organisasi berhasil diperbarui');
    }

    public function pkk()
    {
        $user = auth()->user()->load('rt');
        
        if ($user->role !== 'rt') {
            return redirect()->route('dashboard');
        }

        $positions = \App\Models\PkkPosition::where('rt_id', $user->rt_id)->with('resident')->get();
        $residents = \App\Models\Resident::where('rt_id', $user->rt_id)->get();
        $members = \App\Models\PkkMember::where('rt_id', $user->rt_id)->with('resident')->get();

        return inertia('rt/pkk', [
            'auth' => ['user' => $user],
            'positions' => $positions,
            'residents' => $residents,
            'members' => $members
        ]);
    }

    public function updatePkk($id)
    {
        $user = auth()->user();
        $position = \App\Models\PkkPosition::where('rt_id', $user->rt_id)->findOrFail($id);

        request()->validate([
            'resident_id' => 'nullable|exists:residents,id'
        ]);

        $position->update(['resident_id' => request('resident_id')]);

        return redirect()->route('rt.pkk')->with('success', 'Struktur PKK berhasil diperbarui');
    }

    public function kartar()
    {
        $user = auth()->user()->load('rt');
        
        if ($user->role !== 'rt') {
            return redirect()->route('dashboard');
        }

        $positions = \App\Models\KartarPosition::where('rt_id', $user->rt_id)->with('resident')->get();
        $residents = \App\Models\Resident::where('rt_id', $user->rt_id)->get();
        $members = \App\Models\KartarMember::where('rt_id', $user->rt_id)->with('resident')->get();

        return inertia('rt/kartar', [
            'auth' => ['user' => $user],
            'positions' => $positions,
            'residents' => $residents,
            'members' => $members
        ]);
    }

    public function updateKartar($id)
    {
        $user = auth()->user();
        $position = \App\Models\KartarPosition::where('rt_id', $user->rt_id)->findOrFail($id);

        request()->validate([
            'resident_id' => 'nullable|exists:residents,id'
        ]);

        $position->update(['resident_id' => request('resident_id')]);

        return redirect()->route('rt.kartar')->with('success', 'Struktur Kartar berhasil diperbarui');
    }

    // PKK Members CRUD
    public function createPkkMember()
    {
        $user = auth()->user()->load('rt');
        $residents = \App\Models\Resident::where('rt_id', $user->rt_id)->get();
        return inertia('rt/pkk-member-form', ['auth' => ['user' => $user], 'residents' => $residents]);
    }

    public function storePkkMember()
    {
        $user = auth()->user();
        request()->validate([
            'resident_id' => 'required|exists:residents,id',
            'role' => 'nullable|string|max:255',
            'joined_date' => 'required|date'
        ]);

        \App\Models\PkkMember::create([
            'rt_id' => $user->rt_id,
            'resident_id' => request('resident_id'),
            'role' => request('role'),
            'joined_date' => request('joined_date')
        ]);

        return redirect()->route('rt.pkk')->with('success', 'Anggota PKK berhasil ditambahkan');
    }

    public function editPkkMember($id)
    {
        $user = auth()->user()->load('rt');
        $member = \App\Models\PkkMember::where('rt_id', $user->rt_id)->findOrFail($id);
        $residents = \App\Models\Resident::where('rt_id', $user->rt_id)->get();
        return inertia('rt/pkk-member-form', ['auth' => ['user' => $user], 'residents' => $residents, 'member' => $member]);
    }

    public function updatePkkMember($id)
    {
        $user = auth()->user();
        $member = \App\Models\PkkMember::where('rt_id', $user->rt_id)->findOrFail($id);

        request()->validate([
            'resident_id' => 'required|exists:residents,id',
            'role' => 'nullable|string|max:255',
            'joined_date' => 'required|date'
        ]);

        $member->update([
            'resident_id' => request('resident_id'),
            'role' => request('role'),
            'joined_date' => request('joined_date')
        ]);

        return redirect()->route('rt.pkk')->with('success', 'Anggota PKK berhasil diperbarui');
    }

    public function destroyPkkMember($id)
    {
        $user = auth()->user();
        $member = \App\Models\PkkMember::where('rt_id', $user->rt_id)->findOrFail($id);
        $member->delete();
        return redirect()->route('rt.pkk')->with('success', 'Anggota PKK berhasil dihapus');
    }

    // Kartar Members CRUD
    public function createKartarMember()
    {
        $user = auth()->user()->load('rt');
        $residents = \App\Models\Resident::where('rt_id', $user->rt_id)->get();
        return inertia('rt/kartar-member-form', ['auth' => ['user' => $user], 'residents' => $residents]);
    }

    public function storeKartarMember()
    {
        $user = auth()->user();
        request()->validate([
            'resident_id' => 'required|exists:residents,id',
            'role' => 'nullable|string|max:255',
            'joined_date' => 'required|date'
        ]);

        \App\Models\KartarMember::create([
            'rt_id' => $user->rt_id,
            'resident_id' => request('resident_id'),
            'role' => request('role'),
            'joined_date' => request('joined_date')
        ]);

        return redirect()->route('rt.kartar')->with('success', 'Anggota Kartar berhasil ditambahkan');
    }

    public function editKartarMember($id)
    {
        $user = auth()->user()->load('rt');
        $member = \App\Models\KartarMember::where('rt_id', $user->rt_id)->findOrFail($id);
        $residents = \App\Models\Resident::where('rt_id', $user->rt_id)->get();
        return inertia('rt/kartar-member-form', ['auth' => ['user' => $user], 'residents' => $residents, 'member' => $member]);
    }

    public function updateKartarMember($id)
    {
        $user = auth()->user();
        $member = \App\Models\KartarMember::where('rt_id', $user->rt_id)->findOrFail($id);

        request()->validate([
            'resident_id' => 'required|exists:residents,id',
            'role' => 'nullable|string|max:255',
            'joined_date' => 'required|date'
        ]);

        $member->update([
            'resident_id' => request('resident_id'),
            'role' => request('role'),
            'joined_date' => request('joined_date')
        ]);

        return redirect()->route('rt.kartar')->with('success', 'Anggota Kartar berhasil diperbarui');
    }

    public function destroyKartarMember($id)
    {
        $user = auth()->user();
        $member = \App\Models\KartarMember::where('rt_id', $user->rt_id)->findOrFail($id);
        $member->delete();
        return redirect()->route('rt.kartar')->with('success', 'Anggota Kartar berhasil dihapus');
    }
}
