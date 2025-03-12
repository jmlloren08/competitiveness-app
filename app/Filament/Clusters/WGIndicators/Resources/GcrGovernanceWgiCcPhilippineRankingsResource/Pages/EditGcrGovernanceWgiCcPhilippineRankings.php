<?php

namespace App\Filament\Clusters\WGIndicators\Resources\GcrGovernanceWgiCcPhilippineRankingsResource\Pages;

use App\Filament\Clusters\WGIndicators\Resources\GcrGovernanceWgiCcPhilippineRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrGovernanceWgiCcPhilippineRankings extends EditRecord
{
    protected static string $resource = GcrGovernanceWgiCcPhilippineRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
