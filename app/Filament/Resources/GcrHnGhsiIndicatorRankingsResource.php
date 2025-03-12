<?php

namespace App\Filament\Resources;

use App\Filament\Resources\GcrHnGhsiIndicatorRankingsResource\Pages;
use App\Filament\Resources\GcrHnGhsiIndicatorRankingsResource\RelationManagers;
use App\Models\GcrHnGhsiIndicatorRankings;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Support\Enums\MaxWidth;

class GcrHnGhsiIndicatorRankingsResource extends Resource
{
    protected static ?string $model = GcrHnGhsiIndicatorRankings::class;
    protected static ?string $modelLabel = 'Global Health Security Index Rankings per Indicator';
    protected static ?string $navigationLabel = 'GHSI Rankings per Indicator';
    protected static ?string $navigationGroup = 'Health & Nutrition';
    protected static ?string $navigationParentItem = 'GHSI Philippine Rankings';

    private static function validateUniqueReport(): callable
    {
        return function ($get, $record) {
            return function ($attribute, $value, $fail) use ($get, $record) {
                if (!$get('years') || !$get('indicator_ranking') || !$get('country')) {
                    return;
                }

                $exists = GcrHnGhsiIndicatorRankings::where([
                    ['years', '=', $get('years')],
                    ['indicator_ranking', '=', $get('indicator_ranking')],
                    ['country', '=', $get('country')],
                ])
                    ->when($record, fn($query) => $query->where('id', '!=', $record->id))
                    ->exists();

                if ($exists) {
                    $fail('A report with this ranking indicator and year for this country already exists.');
                }
            };
        };
    }

    private static function getIndicatorOptions(): array
    {
        return [
            'Access to communications infrastructure' => 'Access to communications infrastructure',
            'Antimicrobial Resistance (AMR)' => 'Antimicrobial Resistance (AMR)',
            'Biosafety' => 'Biosafety',
            'Biosecurity' => 'Biosecurity',
            'Capacity to test and approve new medical countermeasures' => 'Capacity to test and approve new medical countermeasures',
            'Case-based Investigation' => 'Case-based Investigation',
            'Commitment to sharing of genetic and biological data and specimens' => 'Commitment to sharing of genetic and biological data and specimens',
            'Commitments to Improving National Capacity, Financing and Adherence to Norms' => 'Commitments to Improving National Capacity, Financing and Adherence to Norms',
            'Communications with healthcare workers during a public health emergency' => 'Communications with healthcare workers during a public health emergency',
            'Cross-border agreements on public and health emergency response' => 'Cross-border agreements on public and health emergency response',
            'Dual-use research and culture of responsible science' => 'Dual-use research and culture of responsible science',
            'Early Detection & Reporting for Epidemics of Potential International Concern' => 'Early Detection & Reporting for Epidemics of Potential International Concern',
            'Emergency preparedness and response planning' => 'Emergency preparedness and response planning',
            'Emergency response operation' => 'Emergency response operation',
            'Environmental risks' => 'Environmental risks',
            'Epidemiology workforce' => 'Epidemiology workforce',
            'Exercising response plans' => 'Exercising response plans',
            'Financing' => 'Financing',
            'Health capacity clinics, hospitals, and community care centers' => 'Health capacity clinics, hospitals, and community care centers',
            'Healthcare access' => 'Healthcare access',
            'IHR reporting compliance and disaster risk reduction' => 'IHR reporting compliance and disaster risk reduction',
            'Immunization' => 'Immunization',
            'Infection control practices' => 'Infection control practices',
            'Infrastructure adequacy' => 'Infrastructure adequacy',
            'International commitments' => 'International commitments',
            'JEE and PVS' => 'JEE and PVS',
            'Laboratory supply chains' => 'Laboratory supply chains',
            'Laboratory systems strength and quality' => 'Laboratory systems strength and quality',
            'Linking public health and security authorities' => 'Linking public health and security authorities',
            'Medical countermeasures and personnel deployment' => 'Medical countermeasures and personnel deployment',
            'Overall Risk Environment & Country Vulnerability to Biological Threats' => 'Overall Risk Environment & Country Vulnerability to Biological Threats',
            'Political and security risk' => 'Political and security risk',
            'Prevention of the Emergence or Release of Pathogens' => 'Prevention of the Emergence or Release of Pathogens',
            'Public health vulnerabilities' => 'Public health vulnerabilities',
            'Rapid Response to and Mitigation of the Spread of an Epidemic' => 'Rapid Response to and Mitigation of the Spread of an Epidemic',
            'Real-time surveillance and reporting' => 'Real-time surveillance and reporting',
            'Risk communication' => 'Risk communication',
            'Socio-economic resilience' => 'Socio-economic resilience',
            'Sufficient & Robust Health System to Treat the Sick & Protect Health Workers' => 'Sufficient & Robust Health System to Treat the Sick & Protect Health Workers',
            'Supply chain for health system and healthcare workers' => 'Supply chain for health system and healthcare workers',
            'Surveillance data accessibility and transparency' => 'Surveillance data accessibility and transparency',
            'Trade and travel restrictions' => 'Trade and travel restrictions',
            'Zoonotic Disease' => 'Zoonotic Disease',
        ];
    }

    private static function getCountryOptions(): array
    {
        return [
            'Philippines' => 'Philippines',
            'Brunei Darussalam' => 'Brunei Darussalam',
            'Cambodia' => 'Cambodia',
            'Indonesia' => 'Indonesia',
            'Lao PDR' => 'Lao PDR',
            'Malaysia' => 'Malaysia',
            'Myanmar' => 'Myanmar',
            'Singapore' => 'Singapore',
            'Thailand' => 'Thailand',
            'Vietnam' => 'Vietnam',
        ];
    }

    public static function getFormSchema(): array
    {
        return [
            Forms\Components\Select::make('indicator_ranking')
                ->label('Ranking Indicator')
                ->required()
                ->options(self::getIndicatorOptions())
                ->placeholder('Please select a ranking indicator')
                ->disabled(fn($record) => $record !== null)
                ->searchable()
                ->rule(self::validateUniqueReport()),

            Forms\Components\Select::make('country')
                ->label('Country')
                ->required()
                ->options(self::getCountryOptions())
                ->placeholder('Please select a country')
                ->disabled(fn($record) => $record !== null)
                ->searchable()
                ->rule(self::validateUniqueReport()),

            Forms\Components\Select::make('years')
                ->label('Year Published')
                ->required()
                ->placeholder('Please select a year')
                ->options(array_combine(range(date('Y'), 2019), range(date('Y'), 2019)))
                ->disabled(fn($record) => $record !== null)
                ->searchable()
                ->live()
                ->rule(self::validateUniqueReport()),

            Forms\Components\TextInput::make('counts')
                ->label('Rank')
                ->required()
                ->maxLength(255),
        ];
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('indicator_ranking')
                    ->label('Ranking Indicator')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('country_id')
                    ->label('Country ID')
                    ->numeric()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable()
                    ->alignCenter(),

                Tables\Columns\TextColumn::make('country')
                    ->label('Country')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('years')
                    ->label('Year Published')
                    ->sortable()
                    ->searchable()
                    ->alignCenter(),

                Tables\Columns\TextColumn::make('counts')
                    ->label('Rank')
                    ->sortable()
                    ->searchable()
                    ->alignCenter(),

                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->defaultSort('years', 'desc')
            ->defaultSort('country', 'asc')
            ->defaultSort('indicator_ranking', 'asc')
            ->filters([
                Tables\Filters\SelectFilter::make('years')
                    ->label('Filter by Year')
                    ->options(array_combine(range(date('Y'), 2000), range(date('Y'), 2000)))
                    ->default(2021),

                Tables\Filters\SelectFilter::make('country')
                    ->label('Filter by Country')
                    ->searchable()
                    ->multiple()
                    ->options(self::getCountryOptions())
                    ->default(['Philippines']),

                Tables\Filters\SelectFilter::make('indicator_ranking')
                    ->label('Search Indicator Ranking')
                    ->searchable()
                    ->multiple()
                    ->options(self::getIndicatorOptions()),
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make()
                    ->label('Create New Report')
                    ->modal()
                    ->modalWidth(MaxWidth::Large)
                    ->icon('heroicon-o-plus')
                    ->modalHeading('Create New Report')
                    ->form(fn() => self::getFormSchema()),
            ])
            ->actions([
                Tables\Actions\EditAction::make()
                    ->label('Edit Report')
                    ->modalHeading('Edit Report')
                    ->modal()
                    ->modalWidth(MaxWidth::Large)
                    ->form(fn() => self::getFormSchema()),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ])->label('Actions'),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListGcrHnGhsiIndicatorRankings::route('/'),
        ];
    }
}
