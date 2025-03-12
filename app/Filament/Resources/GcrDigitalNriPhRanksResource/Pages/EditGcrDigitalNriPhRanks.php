<?php

namespace App\Filament\Resources\GcrDigitalNriPhRanksResource\Pages;

use App\Filament\Resources\GcrDigitalNriPhRanksResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrDigitalNriPhRanks extends EditRecord
{
    protected static string $resource = GcrDigitalNriPhRanksResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
