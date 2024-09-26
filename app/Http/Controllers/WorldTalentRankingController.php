<?php

namespace App\Http\Controllers;

use App\Models\GcrEtiWtrIndicatorRankings;
use App\Models\GcrEtiWtrPhilippineRankings;
use App\Models\GcrEtiWtrViewTheRankings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class WorldTalentRankingController extends Controller
{
    public function getETIWTRPhilippineRanking()
    {
        try {

            $gaugeData = GcrEtiWtrPhilippineRankings::select('area_block')->distinct()->first();
            $latestYear = GcrEtiWtrPhilippineRankings::max('year');
            $overall = GcrEtiWtrPhilippineRankings::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrEtiWtrPhilippineRankings::select('rank_in_asean', 'remarks')->distinct()->get();

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
    public function getETIWTRViewTheRanking()
    {
        try {

            $years = GcrEtiWtrViewTheRankings::select('wtr_year')->distinct()->orderBy('wtr_year', 'asc')->get();
            $countries = GcrEtiWtrViewTheRankings::select('wtr_country')->distinct()->get();
            $wtrData = GcrEtiWtrViewTheRankings::select('wtr_country', 'wtr_count', 'wtr_year', 'wtr_economy')->get();

            return response()->json([
                'years' => $years,
                'countries' => $countries,
                'data' => $wtrData
            ]);
        } catch (\Exception $e) {

            Log::error("Error fetching View the Ranking: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
    public function getETIWTRIndicatorRanking()
    {
        try {

            // $maxYear = GcrEtiWtrIndicatorRankings::max('years');
            // $minYear = GcrEtiWtrIndicatorRankings::min('years');

            $data = [];

            for ($year = 2019; $year <= 2024; $year++) {
                $data[$year] = GcrEtiWtrIndicatorRankings::select('indicator_ranking', 'years', 'country', 'counts')
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
