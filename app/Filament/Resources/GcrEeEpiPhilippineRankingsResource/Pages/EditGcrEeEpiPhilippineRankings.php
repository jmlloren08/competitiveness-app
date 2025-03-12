<?php

namespace App\Filament\Resources\GcrEeEpiPhilippineRankingsResource\Pages;

use App\Filament\Resources\GcrEeEpiPhilippineRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrEeEpiPhilippineRankings extends EditRecord
{
    protected static string $resource = GcrEeEpiPhilippineRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
