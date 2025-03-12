<?php

namespace App\Filament\Clusters\WGIndicators\Resources\GcrGovernanceWgiGePhilippineRankingsResource\Pages;

use App\Filament\Clusters\WGIndicators\Resources\GcrGovernanceWgiGePhilippineRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrGovernanceWgiGePhilippineRankings extends EditRecord
{
    protected static string $resource = GcrGovernanceWgiGePhilippineRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
