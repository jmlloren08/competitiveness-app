<?php

namespace App\Http\Controllers;

use App\Models\GcrEeEtiIndicatorRankings;
use App\Models\GcrEeEtiPhilippineRankings;
use App\Models\GcrEeEtiViewTheRankings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EnergyTransitionIndexController extends Controller
{
    public function getEEETIPhilippineRanking()
    {
        try {

            $gaugeData = GcrEeEtiPhilippineRankings::select('area_block')->distinct()->first();
            $latestYear = GcrEeEtiPhilippineRankings::max('year');
            $overall = GcrEeEtiPhilippineRankings::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrEeEtiPhilippineRankings::select('rank_in_asean', 'remarks')->distinct()->get();

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
    public function getEEETIViewTheRanking()
    {
        try {

            $years = GcrEeEtiViewTheRankings::select('ee_eti_year')->distinct()->orderBy('ee_eti_year', 'asc')->get();
            $countries = GcrEeEtiViewTheRankings::select('ee_eti_country')->distinct()->get();
            $eeEtiData = GcrEeEtiViewTheRankings::select('ee_eti_country', 'ee_eti_count', 'ee_eti_year', 'ee_eti_economy')->get();

            return response()->json([
                'years' => $years,
                'countries' => $countries,
                'data' => $eeEtiData
            ]);
        } catch (\Exception $e) {

            Log::error("Error fetching View the Ranking: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
    public function getEEETIIndicatorRanking()
    {
        try {

            $data = [];

            for ($year = 2019; $year <= 2023; $year++) {
                $data[$year] = GcrEeEtiIndicatorRankings::select('indicator_ranking', 'years', 'country', 'counts')
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
