<?php

namespace App\Http\Controllers;

use App\Models\GcrDigitalIctdiPhRanks;
use App\Models\GcrDigitalIctdiPhVsAseans;
use Illuminate\Support\Facades\Log;

class ICTDevelopmentIndexController extends Controller
{
    public function getICTDevelopmentIndex()
    {
        try {
            $years = GcrDigitalIctdiPhVsAseans::select('ictdi_year')->distinct()->orderBy('ictdi_year','desc')->get();
            $countries = GcrDigitalIctdiPhVsAseans::select('ictdi_country')->distinct()->get();
            $ictdiData = GcrDigitalIctdiPhVsAseans::select('ictdi_country', 'ictdi_count', 'ictdi_year', 'ictdi_economy')->get();

            return response()->json([
                'years' => $years,
                'countries' => $countries,
                'data' => $ictdiData
            ]);
        } catch (\Exception $e) {

            Log::error("Error fetching ICT Development Index: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
    public function getPhRanksICTDI()
    {
        try {

            $gaugeData = GcrDigitalIctdiPhRanks::select('area_block')->distinct()->first();
            $latestYear = GcrDigitalIctdiPhRanks::max('year');
            $overall = GcrDigitalIctdiPhRanks::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrDigitalIctdiPhRanks::select('rank_in_asean', 'remarks')->distinct()->get();

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
}
