<?php

namespace App\Http\Controllers;

use App\Models\GcrHnGhiPhilippineRankings;
use App\Models\GcrHnGhiViewTheRankings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class GlobalHungerIndexController extends Controller
{
    public function getHNGHIPhilippineRanking()
    {
        try {

            $gaugeData = GcrHnGhiPhilippineRankings::select('area_block')->distinct()->first();
            $latestYear = GcrHnGhiPhilippineRankings::max('year');
            $overall = GcrHnGhiPhilippineRankings::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrHnGhiPhilippineRankings::select('rank_in_asean', 'remarks')->distinct()->get();

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
    public function getHNGHIViewTheRanking()
    {
        try {

            $years = GcrHnGhiViewTheRankings::select('ghi_year')->distinct()->orderBy('ghi_year', 'desc')->get();
            $countries = GcrHnGhiViewTheRankings::select('ghi_country')->distinct()->get();
            $ghiData = GcrHnGhiViewTheRankings::select('ghi_country', 'ghi_count', 'ghi_year', 'ghi_economy')->get();

            return response()->json([
                'years' => $years,
                'countries' => $countries,
                'data' => $ghiData
            ]);
        } catch (\Exception $e) {

            Log::error("Error fetching View the Ranking: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
}
