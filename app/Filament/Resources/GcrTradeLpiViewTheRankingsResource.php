<?php

namespace App\Filament\Resources;

use App\Filament\Resources\GcrTradeLpiViewTheRankingsResource\Pages;
use App\Filament\Resources\GcrTradeLpiViewTheRankingsResource\RelationManagers;
use App\Models\GcrTradeLpiViewTheRankings;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Support\Enums\MaxWidth;

class GcrTradeLpiViewTheRankingsResource extends Resource
{
    protected static ?string $model = GcrTradeLpiViewTheRankings::class;
    protected static ?string $modelLabel = 'Logistics Performance Index Rankings by Country';
    protected static ?string $navigationLabel = 'LPI Rankings by Country';
    protected static ?string $navigationGroup = 'Trade';
    protected static ?string $navigationParentItem = 'LPI Philippine Rankings';

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
            Forms\Components\Select::make('lpi_country')
                ->label('Country')
                ->required()
                ->options(self::getCountryOptions())
                ->disabled(fn($record) => $record !== null)
                ->searchable(),

            Forms\Components\Select::make('lpi_year')
                ->label('Year Published')
                ->required()
                ->options(array_combine(range(date('Y'), 2000), range(date('Y'), 2000)))
                ->disabled(fn($record) => $record !== null)
                ->searchable(),

            Forms\Components\TextInput::make('lpi_count')
                ->label('LPI Rank')
                ->required()
                ->maxLength(255),

            Forms\Components\TextInput::make('lpi_economy')
                ->label('Economy')
                ->required()
                ->maxLength(255),
        ];
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('lpi_country')
                ->label('Country')
                ->sortable()
                ->searchable(),
                
                Tables\Columns\TextColumn::make('lpi_year')
                ->label('Year Published')
                ->sortable()
                ->alignCenter()
                ->searchable(),

                Tables\Columns\TextColumn::make('lpi_count')
                ->label('LPI Rank')
                ->sortable()
                ->alignCenter()
                ->searchable(),

                Tables\Columns\TextColumn::make('lpi_economy')
                ->label('Economy')
                ->sortable()
                ->searchable(),

                Tables\Columns\TextColumn::make('created_at')
                ->dateTime()
                ->sortable()
                ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('updated_at')
                ->dateTime()
                ->sortable()
                ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->defaultSort('lpi_year', 'desc')
            ->defaultSort('lpi_country', 'asc')
            ->filters([
                Tables\Filters\SelectFilter::make('lpi_country')
                    ->label('Filter by Country')
                    ->searchable()
                    ->multiple()
                    ->options(self::getCountryOptions()),
                
                Tables\Filters\SelectFilter::make('lpi_year')
                    ->label('Filter by Year')
                    ->options(array_combine(range(date('Y'), 2000), range(date('Y'), 2000)))
                    ->default(2023),
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make()
                    ->label('Create New Record')
                    ->modal()
                    ->modalWidth(MaxWidth::Large)
                    ->icon('heroicon-o-plus')
                    ->modalHeading('Create New Record')
                    ->form(fn() => self::getFormSchema()),
            ])
            ->actions([
                Tables\Actions\EditAction::make()
                    ->label('Edit Record')
                    ->modalHeading('Edit Record')
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
            'index' => Pages\ListGcrTradeLpiViewTheRankings::route('/'),
        ];
    }
}