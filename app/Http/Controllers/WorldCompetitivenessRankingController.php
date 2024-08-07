<?php

namespace App\Http\Controllers;

use App\Models\GcrGeneralWcyPhRanks;
use App\Models\GcrGeneralWcyPhVsAseans;
use Illuminate\Support\Facades\Log;

class WorldCompetitivenessRankingController extends Controller
{
    public function getWorldCompetitivenessRanking()
    {
        try {
            $years = GcrGeneralWcyPhVsAseans::select('wcy_year')->distinct()->orderBy('wcy_year', 'desc')->get();
            $countries = GcrGeneralWcyPhVsAseans::select('wcy_country')->distinct()->get();
            $wcrData = GcrGeneralWcyPhVsAseans::select('wcy_country', 'wcy_count', 'wcy_year', 'wcy_economy')->get();

            return response()->json([
                'years' => $years,
                'countries' => $countries,
                'data' => $wcrData
            ]);
        } catch (\Exception $e) {

            Log::error("Error fetching World Competitiveness Ranking: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }

    public function getPhRanks()
    {
        try {
            $gaugeData = GcrGeneralWcyPhRanks::select('area_block')->distinct()->get();
            $overall = GcrGeneralWcyPhRanks::select('rank', 'baseline_economies')->where('year', 2023)->get();
            $vsAseanEconomies = GcrGeneralWcyPhRanks::select('rank_in_asean', 'remarks')->distinct()->get();

            return response()->json([
                'gauge' => $gaugeData,
                'overall' => $overall,
                'vsAseanEconomies' => $vsAseanEconomies
            ]);
        } catch (\Exception $e) {

            Log::error("Error fetching PH Ranks: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
}
