<?php

namespace App\Http\Controllers;

use App\Models\GcrDigitalIctdiPhRanks;
use App\Models\GcrDigitalIctdiPhVsAseans;
use App\Models\GcrDigitalIctdiIrPhVsAseans;
use Illuminate\Support\Facades\Log;

class ICTDevelopmentIndexController extends Controller
{
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
    public function getICTDevelopmentIndex()
    {
        try {

            $countries = GcrDigitalIctdiPhVsAseans::select('ictdi_country')->distinct()->get();
            $ictdiData = GcrDigitalIctdiPhVsAseans::select('ictdi_country', 'ictdi_count', 'ictdi_year', 'ictdi_economy')->get();

            return response()->json([
                'countries' => $countries,
                'data' => $ictdiData
            ]);
        } catch (\Exception $e) {

            Log::error("Error fetching ICT Development Index: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
    public function getIndicatorRankingICTDI()
    {
        try {

            $data = [];

            for ($year = 2019; $year <= 2023; $year++) {
                $data[$year] = GcrDigitalIctdiIrPhVsAseans::select('indicator_ranking', 'years', 'country', 'counts')
                    ->where('years', $year)
                    ->orderBy('country_id')
                    ->get();
            }

            return response()->json($data);
        } catch (\Exception $e) {

            Log::error("Error fetching Indicator Ranking for ICTDI: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
}
