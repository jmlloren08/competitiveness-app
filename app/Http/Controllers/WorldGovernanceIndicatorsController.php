<?php

namespace App\Http\Controllers;

use App\Models\GcrGovernanceWgiCcPhilippineRankings;
use App\Models\GcrGovernanceWgiGePhilippineRankings;
use App\Models\GcrGovernanceWgiPhilippineRankings;
use App\Models\GcrGovernanceWgiPsavtPhilippineRankings;
use App\Models\GcrGovernanceWgiRlPhilippineRankings;
use App\Models\GcrGovernanceWgiRqPhilippineRankings;
use App\Models\GcrGovernanceWgiVaPhilippineRankings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class WorldGovernanceIndicatorsController extends Controller
{
    public function getGovernanceWgiVoiceAndAccountabilityPhilipineRanking()
    {
        try {

            $gaugeData = GcrGovernanceWgiVaPhilippineRankings::select('area_block')->distinct()->first();
            $latestYear = GcrGovernanceWgiVaPhilippineRankings::max('year');
            $overall = GcrGovernanceWgiVaPhilippineRankings::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrGovernanceWgiVaPhilippineRankings::select('rank_in_asean', 'remarks')->distinct()->get();

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
    public function getGovernanceWgiPSAVTPhilipineRanking()
    {
        try {

            $gaugeData = GcrGovernanceWgiPsavtPhilippineRankings::select('area_block')->distinct()->first();
            $latestYear = GcrGovernanceWgiPsavtPhilippineRankings::max('year');
            $overall = GcrGovernanceWgiPsavtPhilippineRankings::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrGovernanceWgiPsavtPhilippineRankings::select('rank_in_asean', 'remarks')->distinct()->get();

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
    public function getGovernanceWgiGovernmentEffectivenessPhilipineRanking()
    {
        try {

            $gaugeData = GcrGovernanceWgiGePhilippineRankings::select('area_block')->distinct()->first();
            $latestYear = GcrGovernanceWgiGePhilippineRankings::max('year');
            $overall = GcrGovernanceWgiGePhilippineRankings::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrGovernanceWgiGePhilippineRankings::select('rank_in_asean', 'remarks')->distinct()->get();

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
    public function getGovernanceWgiRegulatoryQualityPhilipineRanking()
    {
        try {

            $gaugeData = GcrGovernanceWgiRqPhilippineRankings::select('area_block')->distinct()->first();
            $latestYear = GcrGovernanceWgiRqPhilippineRankings::max('year');
            $overall = GcrGovernanceWgiRqPhilippineRankings::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrGovernanceWgiRqPhilippineRankings::select('rank_in_asean', 'remarks')->distinct()->get();

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
    public function getGovernanceWgiRuleOfLawPhilipineRanking()
    {
        try {

            $gaugeData = GcrGovernanceWgiRlPhilippineRankings::select('area_block')->distinct()->first();
            $latestYear = GcrGovernanceWgiRlPhilippineRankings::max('year');
            $overall = GcrGovernanceWgiRlPhilippineRankings::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrGovernanceWgiRlPhilippineRankings::select('rank_in_asean', 'remarks')->distinct()->get();

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
    public function getGovernanceWgiControlOfCorruptionPhilipineRanking()
    {
        try {

            $gaugeData = GcrGovernanceWgiCcPhilippineRankings::select('area_block')->distinct()->first();
            $latestYear = GcrGovernanceWgiCcPhilippineRankings::max('year');
            $overall = GcrGovernanceWgiCcPhilippineRankings::select('source', 'rank', 'baseline_economies')->where('year', $latestYear)->get();
            $vsAseanEconomies = GcrGovernanceWgiCcPhilippineRankings::select('rank_in_asean', 'remarks')->distinct()->get();

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
}
