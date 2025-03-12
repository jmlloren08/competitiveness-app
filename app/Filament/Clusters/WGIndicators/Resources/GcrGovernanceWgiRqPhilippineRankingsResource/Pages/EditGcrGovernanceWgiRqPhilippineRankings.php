<?php

namespace App\Filament\Clusters\WGIndicators\Resources\GcrGovernanceWgiRqPhilippineRankingsResource\Pages;

use App\Filament\Clusters\WGIndicators\Resources\GcrGovernanceWgiRqPhilippineRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrGovernanceWgiRqPhilippineRankings extends EditRecord
{
    protected static string $resource = GcrGovernanceWgiRqPhilippineRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
