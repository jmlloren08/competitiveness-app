<?php

namespace App\Http\Controllers;

use App\Models\GcrEeEpiIndicatorRankings;
use App\Models\GcrEeEpiPhilippineRankings;
use App\Models\GcrEeEpiViewTheRankings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EnvironmentalPerformanceIndexController extends Controller
{
    public function getEEEPIPhilippineRanking()
    {
        try {

            $gaugeData = GcrEeEpiPhilippineRankings::select('area_block')->distinct()->first();
            $latestYear = GcrEeEpiPhilippineRankings::max('year');
            $overall = GcrEeEpiPhilippineRankings::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrEeEpiPhilippineRankings::select('rank_in_asean', 'remarks')->distinct()->get();

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
    public function getEEEPIViewTheRanking()
    {
        try {

            $years = GcrEeEpiViewTheRankings::select('ee_epi_year')->distinct()->orderBy('ee_epi_year', 'asc')->get();
            $countries = GcrEeEpiViewTheRankings::select('ee_epi_country')->distinct()->get();
            $eeEpiData = GcrEeEpiViewTheRankings::select('ee_epi_country', 'ee_epi_count', 'ee_epi_year', 'ee_epi_economy')->get();

            return response()->json([
                'years' => $years,
                'countries' => $countries,
                'data' => $eeEpiData
            ]);
        } catch (\Exception $e) {

            Log::error("Error fetching View the Ranking: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
    public function getEEEPIIndicatorRanking()
    {
        try {

            $data = [];

            for ($year = 2014; $year <= 2022; $year++) {
                $data[$year] = GcrEeEpiIndicatorRankings::select('indicator_ranking', 'years', 'country', 'counts')
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
