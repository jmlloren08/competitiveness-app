<?php

namespace App\Http\Controllers;

use App\Models\GcrGovernanceWgiPhilippineRankings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class WorldGovernanceIndicatorsController extends Controller
{
    public function getGovernanceWgiPhilipineRanking()
    {
        try {

            $gaugeData = GcrGovernanceWgiPhilippineRankings::select('area_block')->distinct()->first();
            $latestYear = GcrGovernanceWgiPhilippineRankings::max('year');
            $overall = GcrGovernanceWgiPhilippineRankings::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrGovernanceWgiPhilippineRankings::select('rank_in_asean', 'remarks')->distinct()->get();

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
