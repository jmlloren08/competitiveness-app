<?php

namespace App\Http\Controllers;

use App\Models\GcrGeneralWcyIrphVsAseans;
use Illuminate\Support\Facades\Log;

class IndicatorRankingWCRController extends Controller
{
    public function getIndicatorRankingWCR()
    {
        try {

            $data = [];

            for ($year = 2019; $year <= 2023; $year++) {
                $data[$year] = GcrGeneralWcyIrphVsAseans::select('indicator_ranking', 'years', 'country', 'counts')
                    ->where('years', $year)
                    ->orderBy('country_id')
                    ->get();
            }

            return response()->json($data);
        } catch (\Exception $e) {

            Log::error("Error fetching Indicator Ranking for WCR: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
}
