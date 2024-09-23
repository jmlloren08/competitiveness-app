<?php

namespace App\Http\Controllers;

use App\Models\GcrTradeLpiIndicatorRankings;
use App\Models\GcrTradeLpiPhilippineRankings;
use App\Models\GcrTradeLpiViewTheRankings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LogisticsPerformanceIndexController extends Controller
{
    public function getTradeLPIPhilippineRanking()
    {
        try {

            $gaugeData = GcrTradeLpiPhilippineRankings::select('area_block')->distinct()->first();
            $latestYear = GcrTradeLpiPhilippineRankings::max('year');
            $overall = GcrTradeLpiPhilippineRankings::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrTradeLpiPhilippineRankings::select('rank_in_asean', 'remarks')->distinct()->get();

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
    public function getTradeLPIViewTheRanking()
    {
        try {

            $years = GcrTradeLpiViewTheRankings::select('lpi_year')->distinct()->orderBy('lpi_year', 'desc')->get();
            $countries = GcrTradeLpiViewTheRankings::select('lpi_country')->distinct()->get();
            $lpiData = GcrTradeLpiViewTheRankings::select('lpi_country', 'lpi_count', 'lpi_year', 'lpi_economy')->get();

            return response()->json([
                'years' => $years,
                'countries' => $countries,
                'data' => $lpiData
            ]);
        } catch (\Exception $e) {

            Log::error("Error fetching View the Ranking: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
    public function getTradeLpiIndicatorRanking()
    {
        try {

            $data = [];

            for ($year = 2012; $year <= 2023; $year++) {
                $data[$year] = GcrTradeLpiIndicatorRankings::select('indicator_ranking', 'years', 'country', 'counts')
                    ->where('years', $year)
                    ->orderBy('country_id')
                    ->orderBy('id')
                    ->get();
            }

            return response()->json($data);
        } catch (\Exception $e) {

            Log::error("Error fetching Indicator Ranking: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
}
