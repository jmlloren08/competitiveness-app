<?php

namespace App\Filament\Resources\GcrGovernanceBrDbrPhilippineRankingsResource\Pages;

use App\Filament\Resources\GcrGovernanceBrDbrPhilippineRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrGovernanceBrDbrPhilippineRankings extends EditRecord
{
    protected static string $resource = GcrGovernanceBrDbrPhilippineRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
