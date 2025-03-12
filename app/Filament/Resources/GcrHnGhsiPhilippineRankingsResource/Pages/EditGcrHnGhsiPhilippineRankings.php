<?php

namespace App\Filament\Resources\GcrHnGhsiPhilippineRankingsResource\Pages;

use App\Filament\Resources\GcrHnGhsiPhilippineRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrHnGhsiPhilippineRankings extends EditRecord
{
    protected static string $resource = GcrHnGhsiPhilippineRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
