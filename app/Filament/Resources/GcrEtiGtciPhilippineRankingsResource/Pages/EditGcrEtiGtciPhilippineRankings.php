<?php

namespace App\Filament\Resources\GcrEtiGtciPhilippineRankingsResource\Pages;

use App\Filament\Resources\GcrEtiGtciPhilippineRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrEtiGtciPhilippineRankings extends EditRecord
{
    protected static string $resource = GcrEtiGtciPhilippineRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
