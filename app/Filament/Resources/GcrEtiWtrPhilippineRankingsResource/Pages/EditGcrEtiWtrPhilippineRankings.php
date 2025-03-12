<?php

namespace App\Filament\Resources\GcrEtiWtrPhilippineRankingsResource\Pages;

use App\Filament\Resources\GcrEtiWtrPhilippineRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrEtiWtrPhilippineRankings extends EditRecord
{
    protected static string $resource = GcrEtiWtrPhilippineRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
