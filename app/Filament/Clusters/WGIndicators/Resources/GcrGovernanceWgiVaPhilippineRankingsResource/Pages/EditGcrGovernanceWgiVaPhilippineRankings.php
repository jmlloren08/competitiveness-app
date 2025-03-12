<?php

namespace App\Filament\Clusters\WGIndicators\Resources\GcrGovernanceWgiVaPhilippineRankingsResource\Pages;

use App\Filament\Clusters\WGIndicators\Resources\GcrGovernanceWgiVaPhilippineRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrGovernanceWgiVaPhilippineRankings extends EditRecord
{
    protected static string $resource = GcrGovernanceWgiVaPhilippineRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
