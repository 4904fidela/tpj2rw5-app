<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommitteeResource;
use App\Http\Resources\PositionResource;
use App\Models\Committee;
use App\Models\Position;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class OrganizationController extends Controller
{
    public function index(): Response
    {
        $rt_id = Auth::user()->rt_id;
        $positions = PositionResource::collection(Position::all())->resolve();
        $committee = CommitteeResource::collection(Committee::where('rt_id', $rt_id)->with(['resident', 'position'])->get())->resolve();


        return Inertia::render('organization', [
            'data' => [
                'positions' => $positions,
                'committees' => $committee
            ]
        ]);
    }
}
