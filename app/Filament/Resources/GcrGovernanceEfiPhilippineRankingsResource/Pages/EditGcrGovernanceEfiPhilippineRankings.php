<?php

namespace App\Filament\Resources\GcrGovernanceEfiPhilippineRankingsResource\Pages;

use App\Filament\Resources\GcrGovernanceEfiPhilippineRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrGovernanceEfiPhilippineRankings extends EditRecord
{
    protected static string $resource = GcrGovernanceEfiPhilippineRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
