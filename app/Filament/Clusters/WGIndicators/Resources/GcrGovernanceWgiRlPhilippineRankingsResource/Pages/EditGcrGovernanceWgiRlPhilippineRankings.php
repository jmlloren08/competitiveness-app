<?php

namespace App\Filament\Clusters\WGIndicators\Resources\GcrGovernanceWgiRlPhilippineRankingsResource\Pages;

use App\Filament\Clusters\WGIndicators\Resources\GcrGovernanceWgiRlPhilippineRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrGovernanceWgiRlPhilippineRankings extends EditRecord
{
    protected static string $resource = GcrGovernanceWgiRlPhilippineRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
