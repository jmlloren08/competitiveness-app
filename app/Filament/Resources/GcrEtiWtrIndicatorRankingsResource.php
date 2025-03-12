<?php

namespace App\Filament\Resources;

use App\Filament\Resources\GcrEtiWtrIndicatorRankingsResource\Pages;
use App\Filament\Resources\GcrEtiWtrIndicatorRankingsResource\RelationManagers;
use App\Models\GcrEtiWtrIndicatorRankings;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Support\Enums\MaxWidth;

class GcrEtiWtrIndicatorRankingsResource extends Resource
{
    protected static ?string $model = GcrEtiWtrIndicatorRankings::class;
    protected static ?string $modelLabel = 'World Talent Ranking Index Rankings per Indicator';
    protected static ?string $navigationLabel = 'WTR Rankings per Indicator';
    protected static ?string $navigationGroup = 'Education Talent & Innovation';
    protected static ?string $navigationParentItem = 'WTR Philippine Rankings';

    private static function validateUniqueReport(): callable
    {
        return function ($get, $record) {
            return function ($attribute, $value, $fail) use ($get, $record) {
                if (!$get('years') || !$get('indicator_ranking') || !$get('country')) {
                    return;
                }

                $exists = GcrEtiWtrIndicatorRankings::where([
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
            ' Exposure to particle pollution' => ' Exposure to particle pollution',
            'Appeal' => 'Appeal',
            'Apprenticeships' => 'Apprenticeships',
            'Attracting and retaining talents' => 'Attracting and retaining talents',
            'Brain drain' => 'Brain drain',
            'Collected personal income tax' => 'Collected personal income tax',
            'Competent senior managers' => 'Competent senior managers',
            'Cost-of-living index' => 'Cost-of-living index',
            'Educational assessment - PISA' => 'Educational assessment - PISA',
            'Employee training' => 'Employee training',
            'Female labor force' => 'Female labor force',
            'Finance skills' => 'Finance skills',
            'Foreign highly skilled personnel' => 'Foreign highly skilled personnel',
            'Government expenditure on education per student' => 'Government expenditure on education per student',
            'Graduates in Sciences' => 'Graduates in Sciences',
            'Health infrastructure' => 'Health infrastructure',
            'International experience' => 'International experience',
            'Investment & Development' => 'Investment & Development',
            'Justice' => 'Justice',
            'Labor force growth' => 'Labor force growth',
            'Language skills' => 'Language skills',
            'Management education' => 'Management education',
            'Primary and secondary education' => 'Primary and secondary education',
            'Pupil-teacher ratio (primary education)' => 'Pupil-teacher ratio (primary education)',
            'Pupil-teacher ratio (secondary education)' => 'Pupil-teacher ratio (secondary education)',
            'Quality of life' => 'Quality of life',
            'Readiness' => 'Readiness',
            'Remuneration in services professions' => 'Remuneration in services professions',
            'Remuneration of management' => 'Remuneration of management',
            'Skilled labor' => 'Skilled labor',
            'Statutory minimum wage' => 'Statutory minimum wage',
            'Student mobility inbound' => 'Student mobility inbound',
            'Total public exp. on education per student' => 'Total public exp. on education per student',
            'Total public expenditure on education' => 'Total public expenditure on education',
            'University education' => 'University education',
            'Worker motivation' => 'Worker motivation',
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
                    ->default(2022),

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
            'index' => Pages\ListGcrEtiWtrIndicatorRankings::route('/'),
        ];
    }
}
