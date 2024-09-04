<?php

namespace App\Http\Controllers;

use App\Models\GcrDigitalDqliPhRanks;
use App\Models\GcrDigitalDqliPhVsAseans;
use App\Models\GcrDigitalDqliIrPhVsAseans;
use Illuminate\Support\Facades\Log;

class DigitalQualityOfLifeIndexController extends Controller
{
    public function getPhRanksDQLI()
    {
        try {
            $gaugeData = GcrDigitalDqliPhRanks::select('area_block')->distinct()->first();
            $latestYear = GcrDigitalDqliPhRanks::max('year');
            $overall = GcrDigitalDqliPhRanks::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrDigitalDqliPhRanks::select('rank_in_asean', 'remarks')->distinct()->get();

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
    public function getDigitalQualityOfLifeIndex()
    {
        try {
            $years = GcrDigitalDqliPhVsAseans::select('dqli_year')->distinct()->orderBy('dqli_year', 'asc')->get();
            $countries = GcrDigitalDqliPhVsAseans::select('dqli_country')->distinct()->get();
            $dqliData = GcrDigitalDqliPhVsAseans::select('dqli_country', 'dqli_count', 'dqli_year', 'dqli_economy')->get();

            return response()->json([
                'years' => $years,
                'countries' => $countries,
                'data' => $dqliData
            ]);
        } catch (\Exception $e) {

            Log::error("Error fetching Digital Quality of Life Index: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
    public function getIndicatorRankingDQLI()
    {
        try {

            $data = [];

            for ($year = 2019; $year <= 2023; $year++) {
                $data[$year] = GcrDigitalDqliIrPhVsAseans::select('indicator_ranking', 'years', 'country', 'counts')
                    ->where('years', $year)
                    ->orderBy('country_id')
                    ->get();
            }

            return response()->json($data);
        } catch (\Exception $e) {

            Log::error("Error fetching Indicator Ranking for DQLI: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
}
