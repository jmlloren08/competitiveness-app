<?php

namespace App\Http\Controllers;

use App\Models\GcrGovernanceEfiPhilippineRankings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EconomicFreedomIndexController extends Controller
{
    public function getGovernanceEFIPhilippineRanking()
    {
        try {

            $gaugeData = GcrGovernanceEfiPhilippineRankings::select('area_block')->distinct()->first();
            $latestYear = GcrGovernanceEfiPhilippineRankings::max('year');
            $overall = GcrGovernanceEfiPhilippineRankings::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrGovernanceEfiPhilippineRankings::select('rank_in_asean', 'remarks')->distinct()->get();

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
