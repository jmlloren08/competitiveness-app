<?php

namespace App\Http\Controllers;

use App\Models\PhilippinesReportsRanking;
use Illuminate\Support\Facades\Log;

class PhilippinesReportsRankingController extends Controller
{
    public function getPhilippinesReportsRanking()
    {
        try {

            $rankings = PhilippinesReportsRanking::select('gauge_id', 'gauge', 'category', 'report', 'source_publisher', 'ranks', 'remarks', 'as_of')
                ->orderBy('gauge_id', 'asc')
                ->get();

            $chartData = [];

            foreach ($rankings as $ranking) {
                $chartData[] = [
                    'report' => $ranking->report,
                    'source_publisher' => $ranking->source_publisher,
                    'ranks' => $ranking->ranks,
                    'gauge' => $ranking->gauge,
                    'category' => $ranking->category,
                    'remarks' => $ranking->remarks,
                    'as_of' => $ranking->as_of
                ];
            }

            return response()->json($chartData);
        } catch (\Exception $e) {

            Log::error("Error fetching Philippines Reports Ranking: " . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
}
