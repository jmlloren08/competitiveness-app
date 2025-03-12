<?php

namespace App\Filament\Resources\GcrDigitalDqliPhRanksResource\Pages;

use App\Filament\Resources\GcrDigitalDqliPhRanksResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrDigitalDqliPhRanks extends EditRecord
{
    protected static string $resource = GcrDigitalDqliPhRanksResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
