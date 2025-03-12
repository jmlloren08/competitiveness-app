<?php

namespace App\Filament\Clusters\WGIndicators\Resources\GcrGovernanceWgiPsavtPhilippineRankingsResource\Pages;

use App\Filament\Clusters\WGIndicators\Resources\GcrGovernanceWgiPsavtPhilippineRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrGovernanceWgiPsavtPhilippineRankings extends EditRecord
{
    protected static string $resource = GcrGovernanceWgiPsavtPhilippineRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
