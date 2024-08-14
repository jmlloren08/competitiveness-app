<?php

namespace App\Http\Controllers;

use App\Models\GcrDigitalGtmiPhRanks;
use Illuminate\Support\Facades\Log;

class GovTechMaturityIndexController extends Controller
{
    public function getPhRanksGTMI()
    {
        try {
            $gaugeData = GcrDigitalGtmiPhRanks::select('area_block')->distinct()->first();
            $latestYear = GcrDigitalGtmiPhRanks::max('year');
            $overall = GcrDigitalGtmiPhRanks::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrDigitalGtmiPhRanks::select('rank_in_asean', 'remarks')->distinct()->get();

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