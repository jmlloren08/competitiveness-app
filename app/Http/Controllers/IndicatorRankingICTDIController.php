<?php

namespace App\Http\Controllers;

use App\Models\GcrDigitalIctdiIrPhVsAseans;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class IndicatorRankingICTDIController extends Controller
{
    public function getIndicatorRankingICTDI()
    {
        try {

            $data = [];

            for ($year = 2019; $year <= 2023; $year++) {
                $data[$year] = GcrDigitalIctdiIrPhVsAseans::select('indicator_ranking', 'years', 'country', 'counts')
                    ->where('years', $year)
                    ->orderBy('country_id')
                    ->get();
            }

            return response()->json($data);
        } catch (\Exception $e) {

            Log::error("Error fetching Indicator Ranking for ICTDI: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
}
