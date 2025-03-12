<?php

namespace App\Filament\Resources\GcrHnGhiPhilippineRankingsResource\Pages;

use App\Filament\Resources\GcrHnGhiPhilippineRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrHnGhiPhilippineRankings extends EditRecord
{
    protected static string $resource = GcrHnGhiPhilippineRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
