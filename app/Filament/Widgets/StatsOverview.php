<?php

namespace App\Filament\Widgets;

use App\Filament\Clusters\WGIndicators\Resources\GcrGovernanceWgiRqPhilippineRankingsResource;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use App\Models\GcrGeneralWcyPhRanks;
use App\Models\GcrDigitalDqliPhRanks;
use Filament\Widgets\Concerns\InteractsWithPageFilters;
use App\Models\GcrDigitalGtmiPhRanks;
use App\Models\GcrDigitalIctdiPhRanks;
use App\Models\GcrEeEtiPhilippineRankings;
use App\Models\GcrDigitalNriPhRanks;
use App\Models\GcrDigitalEgdiPhRanks;
use App\Models\GcrDigitalWdcrPhilippineRankings;
use App\Models\GcrEtiGiiPhilippineRankings;
use App\Models\GcrEtiGtciPhilippineRankings;
use App\Models\GcrEtiPisaPhilippineRankings;
use App\Models\GcrEtiWtrPhilippineRankings;
use App\Models\GcrEeEpiPhilippineRankings;
use App\Models\GcrGovernanceBrDbrPhilippineRankings;
use App\Models\GcrGovernanceCpiPhilippineRankings;
use App\Models\GcrGovernanceEfiPhilippineRankings;
use App\Models\GcrGovernanceWgiCcPhilippineRankings;
use App\Models\GcrGovernanceWgiGePhilippineRankings;
use App\Models\GcrGovernanceWgiPsavtPhilippineRankings;
use App\Models\GcrGovernanceWgiRlPhilippineRankings;
use App\Models\GcrGovernanceWgiRqPhilippineRankings;
use App\Models\GcrGovernanceWgiVaPhilippineRankings;
use App\Models\GcrHnGhiPhilippineRankings;
use App\Models\GcrHnGhsiPhilippineRankings;
use App\Models\GcrTradeLpiPhilippineRankings;

class StatsOverview extends BaseWidget
{
    use InteractsWithPageFilters;

    protected static ?string $pollingInterval = '60s';
    protected static bool $isLazy = true;

    protected function getColumns(): int
    {
        return 2;
    }

    protected function getStats(): array
    {
        $filteredReport = $this->filters['report'] ?? null;

        // Map reports to their corresponding models
        $reportModels = [
            'World Competitiveness Yearbook' => GcrGeneralWcyPhRanks::class,
            'Digital Quality of Life Index' => GcrDigitalDqliPhRanks::class,
            'GovTech Maturity Index' => GcrDigitalGtmiPhRanks::class,
            'ICT Development Index' => GcrDigitalIctdiPhRanks::class,
            'E-Government Development Index' => GcrDigitalEgdiPhRanks::class,
            'Network Readiness Index' => GcrDigitalNriPhRanks::class,
            'World Digital Competitiveness Ranking' => GcrDigitalWdcrPhilippineRankings::class,
            'Global Innovation Index' => GcrEtiGiiPhilippineRankings::class,
            'Global Talent Competitiveness Index' => GcrEtiGtciPhilippineRankings::class,
            'Programme for International Student Assessment (PISA)' => GcrEtiPisaPhilippineRankings::class,
            'World Talent Ranking' => GcrEtiWtrPhilippineRankings::class,
            'Energy Transition Index (ETI)' => GcrEeEtiPhilippineRankings::class,
            'Environmental Performance Index' => GcrEeEpiPhilippineRankings::class,
            'B-Ready/Doing Business Report' => GcrGovernanceBrDbrPhilippineRankings::class,
            'Corruption Perceptions Index' => GcrGovernanceCpiPhilippineRankings::class,
            'Economic Freedom Index' => GcrGovernanceEfiPhilippineRankings::class,
            'WGI - Voice and Accountability' => GcrGovernanceWgiVaPhilippineRankings::class,
            'WGI - Political Stability and Absence of Violence/Terrorism' => GcrGovernanceWgiPsavtPhilippineRankings::class,
            'WGI - Government Effectiveness' => GcrGovernanceWgiGePhilippineRankings::class,
            'WGI - Regulatory Quality' => GcrGovernanceWgiRqPhilippineRankings::class,
            'WGI - Rule of Law' => GcrGovernanceWgiRlPhilippineRankings::class,
            'WGI - Control of Corruption' => GcrGovernanceWgiCcPhilippineRankings::class,
            'Global Health Security Index' => GcrHnGhsiPhilippineRankings::class,
            'Global Hunger Index' => GcrHnGhiPhilippineRankings::class,
            'Logistics Performance Index' => GcrTradeLpiPhilippineRankings::class,

        ];

        if (!isset($reportModels[$filteredReport])) {
            return [
                Stat::make('No Data', 'N/A')
                    ->description("No data available for the selected report")
                    ->icon('heroicon-o-exclamation-circle')
                    ->color('gray'),
            ];
        }

        $query = $reportModels[$filteredReport]::query()->where('report_name', $filteredReport);
        $rankings = $query->orderBy('year', 'asc')->get(['year', 'rank']);
        
        // Convert NDA values to 0
        $rankings->transform(function ($item) {
            $item->rank = is_numeric($item->rank) ? intval($item->rank) : 0;
            return $item;
        });

        $rankingsPerYear = $rankings->pluck('rank', 'year')->toArray();
        $latest = $rankings->last();
        $latestRank = is_numeric($latest->rank ?? null) ? intval($latest->rank) : 0;
        $latestYear = $latest->year ?? 'N/A';

        $previous = $rankings->where('year', '<', $latestYear)->last();
        $previousRank = is_numeric($previous->rank ?? null) ? intval($previous->rank) : 0;
        $previousYear = $previous->year ?? 'N/A';

        $trendIcon = 'heroicon-m-information-circle';
        $trendColor = 'gray';
        $trendText = "compared to";
        if ($latestRank < $previousRank) {
            $trendIcon = 'heroicon-m-arrow-trending-up';
            $trendColor = 'success';
            $trendText = "(better) than";
        } elseif ($latestRank > $previousRank) {
            $trendIcon = 'heroicon-m-arrow-trending-down';
            $trendColor = 'warning';
            $trendText = "(lower) than its previous rank";
        }

        $best = $rankings->sortBy('rank')->first();
        $bestRank = is_numeric($best->rank ?? null) ? intval($best->rank) : 0;
        $bestYear = $best->year ?? 'N/A';

        $worst = $rankings->sortByDesc('rank')->first();
        $worstRank = is_numeric($worst->rank ?? null) ? intval($worst->rank) : 0;
        $worstYear = $worst->year ?? 'N/A';

        $averageRank = $rankings->where('rank', '>', 0)->avg('rank');
        $averageRankFormatted = $averageRank ? number_format(floatval($averageRank), 1) : '0';

        $maxRank = $rankings->max('rank') ?? 100;
        $invertedRankingsPerYear = collect($rankingsPerYear)
            ->map(fn($rank) => is_numeric($rank) ? $maxRank - intval($rank) : $maxRank)
            ->toArray();

        return [
            Stat::make('Philippines Current Rank for ' . $filteredReport . ' Report', $latestRank)
                ->description("Ranking for $latestYear is $trendText $previousRank in $previousYear")
                ->icon('heroicon-o-chart-bar')
                ->descriptionIcon($trendIcon)
                ->chart(array_values($invertedRankingsPerYear))
                ->color($trendColor),

            Stat::make('Philippines Best Rank for ' . $filteredReport . ' Report', $bestRank)
                ->description("Best ranking recorded is in $bestYear")
                ->icon('heroicon-o-trophy')
                ->descriptionIcon('heroicon-m-star')
                ->color('success'),

            Stat::make('Philippines Average Rank for ' . $filteredReport . ' Report', $averageRankFormatted)
                ->description("Average rank")
                ->icon('heroicon-o-chart-pie')
                ->descriptionIcon('heroicon-m-information-circle')
                ->color('primary'),

            Stat::make('Philippines Lowest Rank for ' . $filteredReport . ' Report', $worstRank)
                ->description("Lowest rank ($worstRank) recorded is in $worstYear")
                ->icon('heroicon-o-presentation-chart-line')
                ->descriptionIcon('heroicon-o-arrow-trending-down')
                ->color('danger'),
        ];
    }
}
