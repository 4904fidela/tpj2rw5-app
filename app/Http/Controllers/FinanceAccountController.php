<?php

namespace App\Http\Controllers;

use App\Models\FinanceAccount;
use Inertia\Inertia;
use Inertia\Response;

class FinanceAccountController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('finances', [
            'data' => FinanceAccount::all()
        ]);
    }
}
