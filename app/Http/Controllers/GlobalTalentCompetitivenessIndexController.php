<?php

namespace App\Http\Controllers;

use App\Models\GcrEtiGiiIndicatorRankings;
use App\Models\GcrEtiGtciIndicatorRankings;
use App\Models\GcrEtiGtciPhilippineRankings;
use App\Models\GcrEtiGtciViewTheRankings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class GlobalTalentCompetitivenessIndexController extends Controller
{
    public function getETIGTCIPhilippineRanking()
    {
        try {

            $gaugeData = GcrEtiGtciPhilippineRankings::select('area_block')->distinct()->first();
            $latestYear = GcrEtiGtciPhilippineRankings::max('year');
            $overall = GcrEtiGtciPhilippineRankings::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrEtiGtciPhilippineRankings::select('rank_in_asean', 'remarks')->distinct()->get();

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
    public function getETIGTCIViewTheRanking()
    {
        try {

            $years = GcrEtiGtciViewTheRankings::select('gtci_year')->distinct()->orderBy('gtci_year', 'asc')->get();
            $countries = GcrEtiGtciViewTheRankings::select('gtci_country')->distinct()->get();
            $gtciData = GcrEtiGtciViewTheRankings::select('gtci_country', 'gtci_count', 'gtci_year', 'gtci_economy')->get();

            return response()->json([
                'years' => $years,
                'countries' => $countries,
                'data' => $gtciData
            ]);
        } catch (\Exception $e) {

            Log::error("Error fetching View the Ranking: " . $e->getMessage());
        }
    }
    public function getETIGTCIIndicatorRanking()
    {
        try {

            $data = [];

            for ($year = 2019; $year <= 2023; $year++) {
                $data[$year] = GcrEtiGtciIndicatorRankings::select('indicator_ranking', 'years', 'country', 'counts')
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
