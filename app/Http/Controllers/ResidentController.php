<?php

namespace App\Http\Controllers;

use App\Models\Resident;
use Inertia\Inertia;
use Inertia\Response;

class ResidentController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('residents', [
            'data' => Resident::all()
        ]);
    }
}
