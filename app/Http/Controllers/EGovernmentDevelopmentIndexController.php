<?php

namespace App\Http\Controllers;

use App\Models\GcrDigitalEgdiPhRanks;
use App\Models\GcrDigitalEgdiPhVsAseans;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EGovernmentDevelopmentIndexController extends Controller
{
    public function getEGovernmentDevelopmentIndex()
    {
        try {
            $years = GcrDigitalEgdiPhVsAseans::select('egdi_year')->distinct()->orderBy('egdi_year', 'desc')->get();
            $countries = GcrDigitalEgdiPhVsAseans::select('egdi_country')->distinct()->get();
            $egdiData = GcrDigitalEgdiPhVsAseans::select('egdi_country', 'egdi_count', 'egdi_year', 'egdi_economy')->get();

            return response()->json([
                'years' => $years,
                'countries' => $countries,
                'data' => $egdiData
            ]);
        } catch (\Exception $e) {

            Log::error("Error fetching E-Government Development Index: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
    public function getPhRanksEGDI()
    {
        try {
            $gaugeData = GcrDigitalEgdiPhRanks::select('area_block')->distinct()->first();
            $latestYear = GcrDigitalEgdiPhRanks::max('year');
            $overall = GcrDigitalEgdiPhRanks::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrDigitalEgdiPhRanks::select('rank_in_asean', 'remarks')->distinct()->get();

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
