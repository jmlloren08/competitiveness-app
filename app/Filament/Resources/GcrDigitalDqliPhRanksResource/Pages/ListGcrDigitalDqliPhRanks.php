<?php

namespace App\Filament\Resources\GcrDigitalDqliPhRanksResource\Pages;

use App\Filament\Resources\GcrDigitalDqliPhRanksResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListGcrDigitalDqliPhRanks extends ListRecords
{
    protected static string $resource = GcrDigitalDqliPhRanksResource::class;

    // protected function getHeaderActions(): array
    // {
    //     return [
    //         Actions\Action::make('addModal')
    //             ->label('Add New Report')
    //             // ->color('primary')
    //             ->icon('heroicon-o-plus')
    //             ->modal()
    //             ->form(GcrDigitalDqliPhRanksResource::getFormSchema())// Load the form schema
    //             ->action(function (array $data) {
    //                 \App\Models\GcrDigitalDqliPhRanks::create($data);
    //             }),
    //     ];
    // }
}
