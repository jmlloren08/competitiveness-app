<?php

namespace App\Http\Controllers;

use App\Models\GcrDigitalWdcrIndicatorRankings;
use App\Models\GcrDigitalWdcrPhilippineRankings;
use App\Models\GcrDigitalWdcrViewTheRankings;
use Illuminate\Support\Facades\Log;

class WorldDigitalCompetitivenessRankingController extends Controller
{
    public function getDigitalWDCRPhilippineRanking()
    {
        try {

            $gaugeData = GcrDigitalWdcrPhilippineRankings::select('area_block')->distinct()->first();
            $latestYear = GcrDigitalWdcrPhilippineRankings::max('year');
            $overall = GcrDigitalWdcrPhilippineRankings::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrDigitalWdcrPhilippineRankings::select('rank_in_asean', 'remarks')->distinct()->get();

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
    public function getDigitalWDCRViewTheRanking()
    {
        try {
            $years = GcrDigitalWdcrIndicatorRankings::select('wdcr_year')->distinct()->orderBy('wdcr_year', 'asc')->get();
            $countries = GcrDigitalWdcrIndicatorRankings::select('wdcr_country')->distinct()->get();
            $wdcrData = GcrDigitalWdcrIndicatorRankings::select('wdcr_country', 'wdcr_count', 'wdcr_year', 'wdcr_economy')->get();

            return response()->json([
                'years' => $years,
                'countries' => $countries,
                'data' => $wdcrData
            ]);
        } catch (\Exception $e) {

            Log::error("Error fetching View the Ranking: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
    public function getDigitalWDCRIndicatorRanking()
    {
        try {

            $data = [];

            for ($year = 2019; $year <= 2023; $year++) {
                $data[$year] = GcrDigitalWdcrViewTheRankings::select('indicator_ranking', 'years', 'country', 'counts')
                    ->where('years', $year)
                    ->orderBy('country_id')
                    ->get();
            }

            return response()->json($data);
        } catch (\Exception $e) {

            Log::error("Error fetching Indicator Ranking: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
}
