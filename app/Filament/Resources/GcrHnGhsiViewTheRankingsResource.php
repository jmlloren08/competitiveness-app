<?php

namespace App\Filament\Resources;

use App\Filament\Resources\GcrHnGhsiViewTheRankingsResource\Pages;
use App\Filament\Resources\GcrHnGhsiViewTheRankingsResource\RelationManagers;
use App\Models\GcrHnGhsiViewTheRankings;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Support\Enums\MaxWidth;

class GcrHnGhsiViewTheRankingsResource extends Resource
{
    protected static ?string $model = GcrHnGhsiViewTheRankings::class;
    protected static ?string $modelLabel = 'Global Health Security Index Rankings by Country';
    protected static ?string $navigationLabel = 'GHSI Rankings by Country';
    protected static ?string $navigationGroup = 'Health & Nutrition';
    protected static ?string $navigationParentItem = 'GHSI Philippine Rankings';

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
            Forms\Components\Select::make('ghsi_country')
                ->label('Country')
                ->required()
                ->options(self::getCountryOptions())
                ->disabled(fn($record) => $record !== null)
                ->searchable(),

            Forms\Components\Select::make('ghsi_year')
                ->label('Year Published')
                ->required()
                ->options(array_combine(range(date('Y'), 2000), range(date('Y'), 2000)))
                ->disabled(fn($record) => $record !== null)
                ->searchable(),

            Forms\Components\TextInput::make('ghsi_count')
                ->label('GHSI Rank')
                ->required()
                ->maxLength(255),

            Forms\Components\TextInput::make('ghsi_economy')
                ->label('Economy')
                ->required()
                ->maxLength(255),
        ];
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('ghsi_country')
                ->label('Country')
                ->sortable()
                ->searchable(),
                
                Tables\Columns\TextColumn::make('ghsi_year')
                ->label('Year Published')
                ->sortable()
                ->alignCenter()
                ->searchable(),

                Tables\Columns\TextColumn::make('ghsi_count')
                ->label('GHSI Rank')
                ->sortable()
                ->alignCenter()
                ->searchable(),

                Tables\Columns\TextColumn::make('ghsi_economy')
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
            ->defaultSort('ghsi_year', 'desc')
            ->defaultSort('ghsi_country', 'asc')
            ->filters([
                Tables\Filters\SelectFilter::make('ghsi_country')
                    ->label('Filter by Country')
                    ->searchable()
                    ->multiple()
                    ->options(self::getCountryOptions()),
                
                Tables\Filters\SelectFilter::make('ghsi_year')
                    ->label('Filter by Year')
                    ->options(array_combine(range(date('Y'), 2000), range(date('Y'), 2000)))
                    ->default(2021),
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
            'index' => Pages\ListGcrHnGhsiViewTheRankings::route('/'),
        ];
    }
}