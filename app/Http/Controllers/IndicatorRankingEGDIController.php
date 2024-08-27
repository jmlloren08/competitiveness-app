<?php

namespace App\Http\Controllers;

use App\Models\GcrDigitalEgdiIrPhVsAseans;
use Illuminate\Support\Facades\Log;

class IndicatorRankingEGDIController extends Controller
{
    public function getIndicatorRankingEGDI()
    {
        try {

            $data = [];

            for ($year = 2014; $year <= 2022; $year++) {
                $data[$year] = GcrDigitalEgdiIrPhVsAseans::select('indicator_ranking', 'years', 'country', 'counts')
                    ->where('years', $year)
                    ->orderBy('country_id')
                    ->get();
            }

            return response()->json($data);
        } catch (\Exception $e) {

            Log::error("Error fetching Indicator Ranking for EGDI: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
}
