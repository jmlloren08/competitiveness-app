<?php

namespace App\Filament\Resources;

use App\Filament\Resources\GcrDigitalEgdiPhRanksResource\Pages;
use App\Filament\Resources\GcrDigitalEgdiPhRanksResource\RelationManagers;
use App\Models\GcrDigitalEgdiPhRanks;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class GcrDigitalEgdiPhRanksResource extends Resource
{
    protected static ?string $model = GcrDigitalEgdiPhRanks::class;
    protected static ?string $modelLabel = 'E-Government Development Index Philippine Rankings';
    protected static ?string $navigationLabel = 'EGDI Philippine Rankings';
    protected static ?string $navigationGroup = 'Digital';
    protected static ?string $navigationIcon = '/backend/assets/images/icon-egdi.png';

    /**
     * Prevents duplicate entries for 'source' and 'year'.
     */
    private static function validateUniqueYear(): callable
    {
        return function ($get, $record) {
            return function ($attribute, $value, $fail) use ($record) {
                $exists = GcrDigitalEgdiPhRanks::where('year', $value)
                    ->when($record, fn($query) => $query->where('id', '!=', $record->id))
                    ->exists();

                if ($exists) {
                    $fail('A report for this year already exists.');
                }
            };
        };
    }

    /**
     * Returns the form schema.
     */
    public static function getFormSchema(): array
    {
        return [
            Forms\Components\Group::make()->schema([
                Forms\Components\Grid::make(2)->schema([
                    Forms\Components\TextInput::make('source')
                        ->label('Report Source')
                        ->required()
                        ->maxLength(255),

                    Forms\Components\Select::make('year')
                        ->label('Year Published')
                        ->required()
                        ->placeholder('Please select a year')
                        ->options(array_combine(range(date('Y'), 2000), range(date('Y'), 2000)))
                        ->searchable()
                        ->disabled(fn($record) => $record !== null)
                        ->rule(self::validateUniqueYear()),

                    Forms\Components\TextInput::make('rank')
                        ->label('Rank')
                        ->required()
                        ->numeric()
                        ->minValue(0),

                    Forms\Components\TextInput::make('rank_in_asean')
                        ->label('ASEAN Ranking')
                        ->required()
                        ->numeric()
                        ->minValue(0),

                    Forms\Components\TextInput::make('baseline_economies')
                        ->label('Baseline Economies')
                        ->required()
                        ->numeric()
                        ->minValue(0),

                    Forms\Components\Select::make('area_block')
                        ->label('Area Block')
                        ->required()
                        ->placeholder('Please select an area block')
                        ->options([
                            'Top Third' => 'Top Third',
                            'Middle Third' => 'Middle Third',
                            'Bottom Third' => 'Bottom Third',
                        ])
                        ->searchable(),

                    Forms\Components\TextInput::make('remarks')
                        ->label('Remarks')
                        ->required()
                        ->maxLength(255),
                ]),
            ]),
        ];
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('report_name')
                    ->label('Report Title')
                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('source')
                    ->label('Report Source')
                    ->searchable(),

                Tables\Columns\TextColumn::make('year')
                    ->label('Year Published')
                    ->searchable()
                    ->sortable()
                    ->alignCenter(),

                Tables\Columns\TextColumn::make('rank')
                    ->label('Rank')
                    ->numeric()
                    ->sortable()
                    ->searchable()
                    ->alignCenter(),

                Tables\Columns\TextColumn::make('rank_in_asean')
                    ->label('ASEAN Ranking')
                    ->searchable()
                    ->numeric()
                    ->sortable()
                    ->alignCenter(),

                Tables\Columns\TextColumn::make('baseline_economies')
                    ->label('Baseline Economies')
                    ->numeric()
                    ->sortable()
                    ->searchable()
                    ->alignCenter(),

                Tables\Columns\TextColumn::make('area_block')
                    ->label('Area Block')
                    ->searchable()
                    ->formatStateUsing(fn($state) => ucfirst($state)) // Capitalizes first letter
                    ->badge() // Enables badge display
                    ->color(fn($state) => match ($state) {
                        'Top Third' => 'success',  // 🟢 Green
                        'Middle Third' => 'warning', // 🟡 Yellow
                        'Bottom Third' => 'danger',  // 🔴 Red
                        default => 'gray', // Fallback color
                    }),

                Tables\Columns\TextColumn::make('remarks')
                    ->label('Remarks')
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
            ->defaultSort('year', 'desc')
            ->headerActions([
                Tables\Actions\CreateAction::make()
                    ->label('Create New Report')
                    ->icon('heroicon-o-plus')
                    ->modalHeading('Create New Report')
                    ->form(fn() => self::getFormSchema()),
            ])
            ->actions([
                Tables\Actions\EditAction::make()
                    ->label('Edit Report')
                    ->modalHeading('Edit Report')
                    ->modal()
                    ->form(fn() => self::getFormSchema()),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ])->label('Actions'),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListGcrDigitalEgdiPhRanks::route('/'),
        ];
    }
}
