<?php

namespace App\Filament\Resources\GcrDigitalIctdiPhRanksResource\Pages;

use App\Filament\Resources\GcrDigitalIctdiPhRanksResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrDigitalIctdiPhRanks extends EditRecord
{
    protected static string $resource = GcrDigitalIctdiPhRanksResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
