<?php

namespace App\Filament\Resources\GcrEtiGiiPhilippineRankingsResource\Pages;

use App\Filament\Resources\GcrEtiGiiPhilippineRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrEtiGiiPhilippineRankings extends EditRecord
{
    protected static string $resource = GcrEtiGiiPhilippineRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
