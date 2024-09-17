<?php

namespace App\Http\Controllers;

use App\Models\GcrEtiGiiIndicatorRankings;
use App\Models\GcrEtiGiiPhilippineRankings;
use App\Models\GcrEtiGiiViewTheRankings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class GlobalInnovationIndexController extends Controller
{
    public function getETIGIIPhilippineRanking()
    {
        try {

            $gaugeData = GcrEtiGiiPhilippineRankings::select('area_block')->distinct()->first();
            $latestYear = GcrEtiGiiPhilippineRankings::max('year');
            $overall = GcrEtiGiiPhilippineRankings::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrEtiGiiPhilippineRankings::select('rank_in_asean', 'remarks')->distinct()->get();

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
    public function getETIGIIViewTheRanking()
    {
        try {
            $years = GcrEtiGiiViewTheRankings::select('gii_year')->distinct()->orderBy('gii_year', 'asc')->get();
            $countries = GcrEtiGiiViewTheRankings::select('gii_country')->distinct()->get();
            $wcrData = GcrEtiGiiViewTheRankings::select('gii_country', 'gii_count', 'gii_year', 'gii_economy')->get();

            return response()->json([
                'years' => $years,
                'countries' => $countries,
                'data' => $wcrData
            ]);
        } catch (\Exception $e) {

            Log::error("Error fetching View the Ranking: " . $e->getMessage());
        }
    }
    public function getETIGIIIndicatorRanking()
    {
        try {

            $data = [];

            for ($year = 2019; $year <= 2023; $year++) {
                $data[$year] = GcrEtiGiiIndicatorRankings::select('indicator_ranking', 'years', 'country', 'counts')
                    ->where('years', $year)
                    ->orderBy('country_id')
                    ->orderBy(column: 'id')
                    ->get();
            }

            return response()->json($data);
        } catch (\Exception $e) {

            Log::error("Error fetching Indicator Ranking: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
}
