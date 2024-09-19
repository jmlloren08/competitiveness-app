<?php

namespace App\Http\Controllers;

use App\Models\GcrGovernanceCpiPhilippineRankings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CorruptionPerceptionsIndexController extends Controller
{
    public function getGovernanceCPIPhilippineRanking()
    {
        try {

            $gaugeData = GcrGovernanceCpiPhilippineRankings::select('area_block')->distinct()->first();
            $latestYear = GcrGovernanceCpiPhilippineRankings::max('year');
            $overall = GcrGovernanceCpiPhilippineRankings::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrGovernanceCpiPhilippineRankings::select('rank_in_asean', 'remarks')->distinct()->get();

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
