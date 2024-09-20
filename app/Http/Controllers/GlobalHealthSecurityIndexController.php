<?php

namespace App\Http\Controllers;

use App\Models\GcrHnGhsiIndicatorRankings;
use App\Models\GcrHnGhsiPhilippineRankings;
use App\Models\GcrHnGhsiViewTheRankings;
use Illuminate\Support\Facades\Log;

class GlobalHealthSecurityIndexController extends Controller
{
    public function getHNGHSIPhilippineRanking()
    {
        try {

            $gaugeData = GcrHnGhsiPhilippineRankings::select('area_block')->distinct()->first();
            $latestYear = GcrHnGhsiPhilippineRankings::max('year');
            $overall = GcrHnGhsiPhilippineRankings::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrHnGhsiPhilippineRankings::select('rank_in_asean', 'remarks')->distinct()->get();

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
    public function getHNGHSIViewTheRanking()
    {
        try {

            $years = GcrHnGhsiViewTheRankings::select('ghsi_year')->distinct()->orderBy('ghsi_year', 'desc')->get();
            $countries = GcrHnGhsiViewTheRankings::select('ghsi_country')->distinct()->get();
            $ghsiData = GcrHnGhsiViewTheRankings::select('ghsi_country', 'ghsi_count', 'ghsi_year', 'ghsi_economy')->get();

            return response()->json([
                'years' => $years,
                'countries' => $countries,
                'data' => $ghsiData
            ]);
        } catch (\Exception $e) {

            Log::error("Error fetching View the Ranking: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
    public function getHNGHSIIndicatorRanking()
    {
        try {

            $data = [];

            for ($year = 2019; $year <= 2021; $year++) {
                $data[$year] = GcrHnGhsiIndicatorRankings::select('indicator_ranking', 'years', 'country', 'counts')
                    ->where('years', $year)
                    ->orderBy('country_id')
                    ->orderBy('id')
                    ->get();
            }

            return response()->json($data);
        } catch (\Exception $e) {

            Log::error("Error fetching Indicator Ranking: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
}
