<?php

namespace App\Http\Controllers;

use App\Models\GcrDigitalNriIrPhVsAseans;
use App\Models\GcrDigitalNriPhRanks;
use App\Models\GcrDigitalNriPhVsAseans;
use Illuminate\Support\Facades\Log;

class NetworkReadinessIndexController extends Controller
{
    public function getPhRanksNRI()
    {
        try {

            $gaugeData = GcrDigitalNriPhRanks::select('area_block')->distinct()->first();
            $latestYear = GcrDigitalNriPhRanks::max('year');
            $overall = GcrDigitalNriPhRanks::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrDigitalNriPhRanks::select('rank_in_asean', 'remarks')->distinct()->get();

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
    public function getNetworkReadinessIndex()
    {
        try {

            $years = GcrDigitalNriPhVsAseans::select('nri_year')->distinct()->orderBy('nri_year', 'desc')->get();
            $countries = GcrDigitalNriPhVsAseans::select('nri_country')->distinct()->get();
            $nriData = GcrDigitalNriPhVsAseans::select('nri_country', 'nri_count', 'nri_year', 'nri_economy')->get();

            return response()->json([
                'years' => $years,
                'countries' => $countries,
                'data' => $nriData
            ]);
        } catch (\Exception $e) {

            Log::error("Error fetching Network Readiness Index: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
    public function getIndicatorRankingNRI()
    {
        try {

            $data = [];

            for ($year = 2019; $year <= 2023; $year++) {
                $data[$year] = GcrDigitalNriIrPhVsAseans::select('indicator_ranking', 'years', 'country', 'counts')
                    ->where('years', $year)
                    ->orderBy('country_id')
                    ->get();
            }

            return response()->json($data);
        } catch (\Exception $e) {

            Log::error("Error fetching Indicator Ranking for NRI: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
}
