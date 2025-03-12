<?php

namespace App\Filament\Resources\GcrEtiPisaPhilippineRankingsResource\Pages;

use App\Filament\Resources\GcrEtiPisaPhilippineRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrEtiPisaPhilippineRankings extends EditRecord
{
    protected static string $resource = GcrEtiPisaPhilippineRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
