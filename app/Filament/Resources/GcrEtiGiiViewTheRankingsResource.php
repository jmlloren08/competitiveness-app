<?php

namespace App\Filament\Resources;

use App\Filament\Resources\GcrEtiGiiViewTheRankingsResource\Pages;
use App\Filament\Resources\GcrEtiGiiViewTheRankingsResource\RelationManagers;
use App\Models\GcrEtiGiiViewTheRankings;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Support\Enums\MaxWidth;

class GcrEtiGiiViewTheRankingsResource extends Resource
{
    protected static ?string $model = GcrEtiGiiViewTheRankings::class;
    protected static ?string $modelLabel = 'Global Innovation Index Rankings by Country';
    protected static ?string $navigationLabel = 'GII Rankings by Country';
    protected static ?string $navigationGroup = 'Education Talent & Innovation';
    protected static ?string $navigationParentItem = 'GII Philippine Rankings';

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
            Forms\Components\Select::make('gii_country')
                ->label('Country')
                ->required()
                ->options(self::getCountryOptions())
                ->disabled(fn($record) => $record !== null)
                ->searchable(),

            Forms\Components\Select::make('gii_year')
                ->label('Year Published')
                ->required()
                ->options(array_combine(range(date('Y'), 2000), range(date('Y'), 2000)))
                ->disabled(fn($record) => $record !== null)
                ->searchable(),

            Forms\Components\TextInput::make('gii_count')
                ->label('GII Rank')
                ->required()
                ->maxLength(255),

            Forms\Components\TextInput::make('gii_economy')
                ->label('Economy')
                ->required()
                ->maxLength(255),
        ];
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('gii_country')
                ->label('Country')
                ->sortable()
                ->searchable(),
                
                Tables\Columns\TextColumn::make('gii_year')
                ->label('Year Published')
                ->sortable()
                ->alignCenter()
                ->searchable(),

                Tables\Columns\TextColumn::make('gii_count')
                ->label('GII Rank')
                ->sortable()
                ->alignCenter()
                ->searchable(),

                Tables\Columns\TextColumn::make('gii_economy')
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
            ->defaultSort('gii_year', 'desc')
            ->defaultSort('gii_country', 'asc')
            ->filters([
                Tables\Filters\SelectFilter::make('gii_country')
                    ->label('Filter by Country')
                    ->searchable()
                    ->multiple()
                    ->options(self::getCountryOptions()),
                
                Tables\Filters\SelectFilter::make('gii_year')
                    ->label('Filter by Year')
                    ->options(array_combine(range(date('Y'), 2000), range(date('Y'), 2000)))
                    ->default(2022),
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
            'index' => Pages\ListGcrEtiGiiViewTheRankings::route('/'),
        ];
    }
}