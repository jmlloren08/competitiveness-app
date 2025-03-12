<?php

namespace App\Filament\Resources\GcrDigitalGtmiPhRanksResource\Pages;

use App\Filament\Resources\GcrDigitalGtmiPhRanksResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrDigitalGtmiPhRanks extends EditRecord
{
    protected static string $resource = GcrDigitalGtmiPhRanksResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
