<?php

namespace App\Filament\Widgets;

use Filament\Widgets\Concerns\InteractsWithPageFilters;
use Filament\Widgets\ChartWidget;
use App\Models\GcrGeneralWcyPhRanks;
use App\Models\GcrDigitalDqliPhVsAseans;

class ChartsOverview extends ChartWidget
{
    use InteractsWithPageFilters;

    protected static ?string $pollingInterval = '60s';
    protected static bool $isLazy = true;

    protected static ?string $heading = 'Rankings Over Time';
    
    protected function getType(): string
    {
        return 'line';
    }

    protected function getData(): array
{
    $filteredReport = $this->filters['report'] ?? null;

    $reportModels = [
        'World Competitiveness Yearbook' => GcrGeneralWcyPhRanks::class,
        'Digital Quality of Life Index' => GcrDigitalDqliPhVsAseans::class,
    ];

    if (!isset($reportModels[$filteredReport])) {
        return [
            'datasets' => [],
            'labels' => [],
        ];
    }

    // Fetch data from the corresponding model
    $query = $reportModels[$filteredReport]::query();
    $data = $query->orderBy('dqli_year', 'asc')->get(['dqli_year', 'dqli_count', 'dqli_country']);

    $groupedData = $data->groupBy('dqli_country');

    $labels = $data->pluck('dqli_year')->unique()->values()->toArray();
    $datasets = [];

    foreach ($groupedData as $country => $values) {
        $datasets[] = [
            'label' => $country,
            'data' => $values->pluck('dqli_count')->toArray(),
            'borderColor' => '#' . substr(md5($country), 0, 6),
            'fill' => false,
        ];
    }

    return [
        'labels' => $labels,
        'datasets' => $datasets,
        'options' => [
            'scales' => [
                'y' => [
                    'reverse' => true, // Inverts the y-axis
                    'title' => [
                        'display' => true,
                        'text' => 'Ranking', 
                    ],
                    'ticks' => [
                        'beginAtZero' => false, // Ensure rankings display properly
                    ],
                ],
            ],
        ],
    ];
}

}
