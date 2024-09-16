<?php

namespace App\Http\Controllers;

use App\Models\GcrEtiPisaIndicatorRankings;
use App\Models\GcrEtiPisaPhilippineRankings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PISAController extends Controller
{
    public function getETIPISAPhilippineRanking()
    {
        try {

            $gaugeData = GcrEtiPisaPhilippineRankings::select('area_block')->distinct()->first();
            $latestYear = GcrEtiPisaPhilippineRankings::max('year');
            $overall = GcrEtiPisaPhilippineRankings::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrEtiPisaPhilippineRankings::select('rank_in_asean', 'remarks')->distinct()->get();

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
    public function getETIPISAIndicatorRanking()
    {
        try {

            $data = [];

            for ($year = 2018; $year <= 2022; $year++) {
                $data[$year] = GcrEtiPisaIndicatorRankings::select('indicator_ranking', 'years', 'country', 'counts')
                    ->where('years', $year)
                    ->orderBy('country_id')
                    ->get();
            }

            return response()->json($data);
        } catch (\Exception $e) {

            Log::error("Error fetching Indicator Ranking: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
}
