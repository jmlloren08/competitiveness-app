<?php

namespace App\Filament\Pages;

use Filament\Pages\Dashboard as BaseDashboard;
use Filament\Pages\Dashboard\Concerns\HasFiltersForm;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use App\Filament\Widgets\StatsOverview;
use App\Filament\Widgets\ChartsOverview;

class Dashboard extends BaseDashboard
{
    use HasFiltersForm;

    protected static ?string $navigationIcon = 'heroicon-o-home';

    //Filter part
    private static function getCategoryOptions(): array
    {
        return [
            'General' => 'General',
            'Digital' => 'Digital',
            'Education Talent & Innovation' => 'Education Talent & Innovation',
            'Energy & Environment' => 'Energy & Environment',
            'Governance' => 'Governance',
            'Health & Nutrition' => 'Health & Nutrition',
            'Trade' => 'Trade',
        ];
    }

    private static function getReportGeneral(): array
    {
        return [
            'World Competitiveness Yearbook' => 'World Competitiveness Yearbook',
        ];
    }

    private static function getReportDigital(): array
    {
        return [
            'Digital Quality of Life Index' => 'Digital Quality of Life Index',
            'GovTech Maturity Index' => 'GovTech Maturity Index',
            'ICT Development Index' => 'ICT Development Index',
            'E-Government Development Index' => 'E-Government Development Index',
            'Network Readiness Index' => 'Network Readiness Index',
            'World Digital Competitiveness Ranking' => 'World Digital Competitiveness Ranking',
        ];
    }

    private static function getReportETI(): array
    {
        return [
            'Global Innovation Index' => 'Global Innovation Index',
            'Global Talent Competitiveness Index' => 'Global Talent Competitiveness Index',
            'Programme for International Student Assessment (PISA)' => 'Programme for International Student Assessment (PISA)',
            'World Talent Ranking' => 'World Talent Ranking',
        ];
    }

    private static function getReportEE(): array
    {
        return [
            'Energy Transition Index (ETI)' => 'Energy Transition Index (ETI)',
            'Environmental Performance Index' => 'Environmental Performance Index',
        ];
    }

    private static function getReportGovernance(): array
    {
        return [
            'B-Ready/Doing Business Report' => 'B-Ready/Doing Business Report',
            'Corruption Perceptions Index' => 'Corruption Perceptions Index',
            'Economic Freedom Index' => 'Economic Freedom Index',
            'WGI - Voice and Accountability' => 'WGI - Voice and Accountability',
            'WGI - Political Stability and Absence of Violence/Terrorism' => 'WGI - Political Stability and Absence of Violence/Terrorism',
            'WGI - Government Effectiveness' => 'WGI - Government Effectiveness',
            'WGI - Regulatory Quality' => 'WGI - Regulatory Quality',
            'WGI - Rule of Law' => 'WGI - Rule of Law',
            'WGI - Control of Corruption' => 'WGI - Control of Corruption',
        ];
    }

    private static function getReportHN(): array
    {
        return [
            'Global Health Security Index' => 'Global Health Security Index',
            'Global Hunger Index' => 'Global Hunger Index',
        ];
    }

    private static function getReportTrade(): array
    {
        return [
            'Logistics Performance Index' => 'Logistics Performance Index',
        ];
    }

    public function filtersForm(Form $form): Form
    {
        return $form->schema([
            Section::make('')->schema([
                Select::make('category')
                    ->label('Category')
                    ->options(self::getCategoryOptions())
                    ->placeholder('Please select a category')
                    ->searchable()
                    ->reactive(), // Ensure this updates dynamically
    
                Select::make('report')
                    ->label('Report')
                    ->options(fn ($get) => match ($get('category')) {
                        'General' => self::getReportGeneral(),
                        'Digital' => self::getReportDigital(),
                        'Education Talent & Innovation' => self::getReportETI(),
                        'Energy & Environment' => self::getReportEE(),
                        'Governance' => self::getReportGovernance(),
                        'Health & Nutrition' => self::getReportHN(),
                        'Trade' => self::getReportTrade(),
                        default => [],
                    })
                    ->placeholder('Please select a report')
                    ->searchable(),
            ])->columns(2),
        ]);
    }

    //Stats Widget
    public function getWidgets(): array
    {
        return [
            StatsOverview::class,
            // ChartsOverview::class,
        ];
    }

    //Chart Widget
}
