<?php

namespace App\Filament\Resources\GcrDigitalEgdiPhRanksResource\Pages;

use App\Filament\Resources\GcrDigitalEgdiPhRanksResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrDigitalEgdiPhRanks extends EditRecord
{
    protected static string $resource = GcrDigitalEgdiPhRanksResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
