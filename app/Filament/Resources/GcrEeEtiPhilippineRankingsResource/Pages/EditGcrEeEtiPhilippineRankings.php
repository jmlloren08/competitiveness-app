<?php

namespace App\Filament\Resources\GcrEeEtiPhilippineRankingsResource\Pages;

use App\Filament\Resources\GcrEeEtiPhilippineRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrEeEtiPhilippineRankings extends EditRecord
{
    protected static string $resource = GcrEeEtiPhilippineRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
