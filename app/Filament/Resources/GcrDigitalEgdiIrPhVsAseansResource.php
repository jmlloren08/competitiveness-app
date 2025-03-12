<?php

namespace App\Filament\Resources;

use App\Filament\Resources\GcrDigitalEgdiIrPhVsAseansResource\Pages;
use App\Filament\Resources\GcrDigitalEgdiIrPhVsAseansResource\RelationManagers;
use App\Models\GcrDigitalEgdiIrPhVsAseans;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Support\Enums\MaxWidth;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class GcrDigitalEgdiIrPhVsAseansResource extends Resource
{
    protected static ?string $model = GcrDigitalEgdiIrPhVsAseans::class;
    protected static ?string $modelLabel = 'E-Government Development Index Rankings per Indicator';
    protected static ?string $navigationLabel = 'EGDI Rankings per Indicator';
    protected static ?string $navigationGroup = 'Digital';
    protected static ?string $navigationParentItem = 'EGDI Philippine Rankings';

    private static function validateUniqueReport(): callable
    {
        return function ($get, $record) {
            return function ($attribute, $value, $fail) use ($get, $record) {
                if (!$get('years') || !$get('indicator_ranking') || !$get('country')) {
                    return;
                }

                $exists = GcrDigitalEgdiIrPhVsAseans::where([
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
            'Human Capital Index (HCI)' => 'Human Capital Index (HCI)',
            'Online Service Index (OSI)' => 'Online Service Index (OSI)',
            'Sub-pillar 1.1 Fixed telephone subscriptions per 100 inhabitants' => 'Sub-pillar 1.1 Fixed telephone subscriptions per 100 inhabitants',
            'Sub-pillar 1.1 Institutional Framework (IF)' => 'Sub-pillar 1.1 Institutional Framework (IF)',
            'Sub-pillar 1.1 Internet Users (Percent %)' => 'Sub-pillar 1.1 Internet Users (Percent %)',
            'Sub-pillar 1.1 Mobile-cellular subscriptions per 100 inhabitants' => 'Sub-pillar 1.1 Mobile-cellular subscriptions per 100 inhabitants',
            'Sub-pillar 1.1 Stage 1: Emerging Information Services (%)' => 'Sub-pillar 1.1 Stage 1: Emerging Information Services (%)',
            'Sub-pillar 1.2 Content Provision (CP)' => 'Sub-pillar 1.2 Content Provision (CP)',
            'Sub-pillar 1.2 Fixed telephone subscriptions per 100 inhabitants' => 'Sub-pillar 1.2 Fixed telephone subscriptions per 100 inhabitants',
            'Sub-pillar 1.2 Internet Users (Percent %)' => 'Sub-pillar 1.2 Internet Users (Percent %)',
            'Sub-pillar 1.2 Mobile-cellular subscriptions per 100 inhabitants' => 'Sub-pillar 1.2 Mobile-cellular subscriptions per 100 inhabitants',
            'Sub-pillar 1.2 Stage 2: Enhanced Information Services (%)' => 'Sub-pillar 1.2 Stage 2: Enhanced Information Services (%)',
            'Sub-pillar 1.3 Fixed broadband subscriptions per 100 inhabitants' => 'Sub-pillar 1.3 Fixed broadband subscriptions per 100 inhabitants',
            'Sub-pillar 1.3 Internet Users (Percent %)' => 'Sub-pillar 1.3 Internet Users (Percent %)',
            'Sub-pillar 1.3 Mobile-cellular subscriptions per 100 inhabitants' => 'Sub-pillar 1.3 Mobile-cellular subscriptions per 100 inhabitants',
            'Sub-pillar 1.3 Services Provision (SP)' => 'Sub-pillar 1.3 Services Provision (SP)',
            'Sub-pillar 1.3 Stage 3: Transactional Services (%)' => 'Sub-pillar 1.3 Stage 3: Transactional Services (%)',
            'Sub-pillar 1.4 Active mobile-broadband subscriptions' => 'Sub-pillar 1.4 Active mobile-broadband subscriptions',
            'Sub-pillar 1.4 E-Participation Index (EPI)' => 'Sub-pillar 1.4 E-Participation Index (EPI)',
            'Sub-pillar 1.4 Fixed (wired) broadband subscriptions per 100 inhabitants' => 'Sub-pillar 1.4 Fixed (wired) broadband subscriptions per 100 inhabitants',
            'Sub-pillar 1.4 Fixed (wired)-broadband subscriptions per 100 inhabitants' => 'Sub-pillar 1.4 Fixed (wired)-broadband subscriptions per 100 inhabitants',
            'Sub-pillar 1.4 Fixed broadband subscriptions per 100 inhabitants' => 'Sub-pillar 1.4 Fixed broadband subscriptions per 100 inhabitants',
            'Sub-pillar 1.4 Stage 4: Connected Services (%)' => 'Sub-pillar 1.4 Stage 4: Connected Services (%)',
            'Sub-pillar 1.4 Wireless broadband subscriptions per 100 inhabitants' => 'Sub-pillar 1.4 Wireless broadband subscriptions per 100 inhabitants',
            'Sub-pillar 1.5 Active mobile-broadband subscriptions' => 'Sub-pillar 1.5 Active mobile-broadband subscriptions',
            'Sub-pillar 1.5 Technology (TEC)' => 'Sub-pillar 1.5 Technology (TEC)',
            'Sub-pillar 1.5 Total (%)' => 'Sub-pillar 1.5 Total (%)',
            'Sub-pillar 1.5 Wireless broadband subscriptions per 100 inhabitants' => 'Sub-pillar 1.5 Wireless broadband subscriptions per 100 inhabitants',
            'Sub-pillar 2.1 Adult Literacy' => 'Sub-pillar 2.1 Adult Literacy',
            'Sub-pillar 2.2 Gross Enrolment Ratio' => 'Sub-pillar 2.2 Gross Enrolment Ratio',
            'Sub-pillar 2.3 Expected years of schooling' => 'Sub-pillar 2.3 Expected years of schooling',
            'Sub-pillar 2.4 Mean years of schooling (MYS)' => 'Sub-pillar 2.4 Mean years of schooling (MYS)',
            'Telecommunications Infrastructure Index (TII)' => 'Telecommunications Infrastructure Index (TII)',
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
            'index' => Pages\ListGcrDigitalEgdiIrPhVsAseans::route('/'),
        ];
    }
}
