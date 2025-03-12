<?php

namespace App\Filament\Resources;

use App\Filament\Resources\GcrDigitalWdcrViewTheRankingsResource\Pages;
use App\Filament\Resources\GcrDigitalWdcrViewTheRankingsResource\RelationManagers;
use App\Models\GcrDigitalWdcrViewTheRankings;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Support\Enums\MaxWidth;

class GcrDigitalWdcrViewTheRankingsResource extends Resource
{
    protected static ?string $model = GcrDigitalWdcrViewTheRankings::class;
    protected static ?string $modelLabel = 'World Digital Competitiveness Rankings per Indicator';
    protected static ?string $navigationLabel = 'WDCR Rankings per Indicator';
    protected static ?string $navigationGroup = 'Digital';
    protected static ?string $navigationParentItem = 'WDCR Philippine Rankings';
    protected static ?int $navigationSort = 2;

    private static function validateUniqueReport(): callable
    {
        return function ($get, $record) {
            return function ($attribute, $value, $fail) use ($get, $record) {
                if (!$get('years') || !$get('indicator_ranking') || !$get('country')) {
                    return;
                }

                $exists = GcrDigitalWdcrViewTheRankings::where([
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
            'Adaptive Attitudes' => 'Adaptive Attitudes',
            'Business Agility' => 'Business Agility',
            'Capital' => 'Capital',
            'Future Readiness' => 'Future Readiness',
            'IT Integration' => 'IT Integration',
            'Knowledge' => 'Knowledge',
            'Regulatory Framework' => 'Regulatory Framework',
            'Scientific Concentration' => 'Scientific Concentration',
            'Talent' => 'Talent',
            'Technological Framework' => 'Technological Framework',
            'Technology' => 'Technology',
            'Training and Education' => 'Training and Education',
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
                    ->default(2023),

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
            'index' => Pages\ListGcrDigitalWdcrViewTheRankings::route('/'),
        ];
    }
}
