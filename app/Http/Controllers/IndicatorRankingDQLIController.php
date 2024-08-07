<?php

namespace App\Http\Controllers;

use App\Models\GcrDigitalDqliIrphVsAseans;
use Illuminate\Support\Facades\Log;

class IndicatorRankingDQLIController extends Controller
{
    public function getIndicatorRankingDQLI()
    {
        try {

            $data = [];

            for ($year = 2019; $year <= 2023; $year++) {
                $data[$year] = GcrDigitalDqliIrphVsAseans::select('indicator_ranking', 'years', 'country', 'counts')
                    ->where('years', $year)
                    ->orderBy('country_id')
                    ->get();
            }

            return response()->json($data);
        } catch (\Exception $e) {

            Log::error("Error fetching Indicator Ranking for DQLI: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
}
