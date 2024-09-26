<?php

namespace App\Http\Controllers;

use App\Models\GcrGeneralWcyIrPhVsAseans;
use App\Models\GcrGeneralWcyIrPhVsAseanss;
use App\Models\GcrGeneralWcyPhRanks;
use App\Models\GcrGeneralWcyPhVsAseans;
use Illuminate\Support\Facades\Log;

class WorldCompetitivenessRankingController extends Controller
{
    public function getPhRanksWCR()
    {
        try {
            $gaugeData = GcrGeneralWcyPhRanks::select('area_block')->distinct()->first();
            $latestYear = GcrGeneralWcyPhRanks::max('year');
            $overall = GcrGeneralWcyPhRanks::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrGeneralWcyPhRanks::select('rank_in_asean', 'remarks')->distinct()->get();

            return response()->json([
                'gauge' => $gaugeData,
                'latestYear' => $latestYear,
                'overall' => $overall,
                'vsAseanEconomies' => $vsAseanEconomies
            ]);
        } catch (\Exception $e) {

            Log::error("Error fetching PH Ranks: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
    public function getWorldCompetitivenessRanking()
    {
        try {
            $years = GcrGeneralWcyPhVsAseans::select('wcy_year')->distinct()->orderBy('wcy_year', 'asc')->get();
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
    public function getIndicatorRankingWCR()
    {
        try {

            // $maxYear = GcrGeneralWcyIrPhVsAseanss::max('years');
            // $minYear = GcrGeneralWcyIrPhVsAseanss::max('years');

            $data = [];

            for ($year = 2019; $year <= 2024; $year++) {
                $data[$year] = GcrGeneralWcyIrPhVsAseanss::select('indicator_ranking', 'years', 'country', 'counts')
                    ->where('years', $year)
                    ->orderBy('country_id')
                    ->orderBy('id')
                    ->get();
            }

            return response()->json($data);
        } catch (\Exception $e) {

            Log::error("Error fetching Indicator Ranking for WCR: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
}
