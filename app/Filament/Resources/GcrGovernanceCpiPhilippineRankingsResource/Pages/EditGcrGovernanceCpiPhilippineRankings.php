<?php

namespace App\Filament\Resources\GcrGovernanceCpiPhilippineRankingsResource\Pages;

use App\Filament\Resources\GcrGovernanceCpiPhilippineRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrGovernanceCpiPhilippineRankings extends EditRecord
{
    protected static string $resource = GcrGovernanceCpiPhilippineRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
