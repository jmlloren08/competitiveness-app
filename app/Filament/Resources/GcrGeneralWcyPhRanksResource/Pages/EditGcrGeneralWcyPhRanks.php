<?php

namespace App\Filament\Resources\GcrGeneralWcyPhRanksResource\Pages;

use App\Filament\Resources\GcrGeneralWcyPhRanksResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrGeneralWcyPhRanks extends EditRecord
{
    protected static string $resource = GcrGeneralWcyPhRanksResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
