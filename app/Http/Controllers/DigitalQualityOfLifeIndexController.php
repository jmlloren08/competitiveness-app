<?php

namespace App\Http\Controllers;

use App\Models\GcrDigitalDqliPhRanks;
use App\Models\GcrDigitalDqliPhVsAseans;
use Illuminate\Support\Facades\Log;

class DigitalQualityOfLifeIndexController extends Controller
{
    public function getDigitalQualityOfLifeIndex()
    {
        try {
            $years = GcrDigitalDqliPhVsAseans::select('dqli_year')->distinct()->orderBy('dqli_year', 'desc')->get();
            $countries = GcrDigitalDqliPhVsAseans::select('dqli_country')->distinct()->get();
            $wcrData = GcrDigitalDqliPhVsAseans::select('dqli_country', 'dqli_count', 'dqli_year', 'dqli_economy')->get();

            return response()->json([
                'years' => $years,
                'countries' => $countries,
                'data' => $wcrData
            ]);
        } catch (\Exception $e) {

            Log::error("Error fetching Digital Quality of Life Index: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }

    public function getPhRanksDQLI()
    {
        try {
            $gaugeData = GcrDigitalDqliPhRanks::select('area_block')->distinct()->get();
            $overall = GcrDigitalDqliPhRanks::select('rank', 'baseline_economies')->where('year', 2023)->get();
            $vsAseanEconomies = GcrDigitalDqliPhRanks::select('rank_in_asean', 'remarks')->distinct()->get();

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
