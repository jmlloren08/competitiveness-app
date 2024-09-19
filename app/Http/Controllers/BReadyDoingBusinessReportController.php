<?php

namespace App\Http\Controllers;

use App\Models\GcrGovernanceBrDbrPhilippineRankings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class BReadyDoingBusinessReportController extends Controller
{
    public function getGovernanceBrdbrPhilippineRankings()
    {
        try {

            $gaugeData = GcrGovernanceBrDbrPhilippineRankings::select('area_block')->distinct()->first();
            $latestYear = GcrGovernanceBrDbrPhilippineRankings::max('year');
            $overall = GcrGovernanceBrDbrPhilippineRankings::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrGovernanceBrDbrPhilippineRankings::select('rank_in_asean', 'remarks')->distinct()->get();

            return response()->json([
                'gauge' => $gaugeData,
                'latestYear' => $latestYear,
                'overall' => $overall,
                'vsAseanEconomies' => $vsAseanEconomies
            ]);
        } catch (\Exception $e) {

            Log::error("Error fetching Philippine Ranking: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
}
