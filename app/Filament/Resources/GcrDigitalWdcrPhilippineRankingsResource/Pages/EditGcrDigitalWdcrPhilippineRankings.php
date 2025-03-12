<?php

namespace App\Filament\Resources\GcrDigitalWdcrPhilippineRankingsResource\Pages;

use App\Filament\Resources\GcrDigitalWdcrPhilippineRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrDigitalWdcrPhilippineRankings extends EditRecord
{
    protected static string $resource = GcrDigitalWdcrPhilippineRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
