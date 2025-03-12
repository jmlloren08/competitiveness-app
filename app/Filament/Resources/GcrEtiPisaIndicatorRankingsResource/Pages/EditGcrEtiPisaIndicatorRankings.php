<?php

namespace App\Filament\Resources\GcrEtiPisaIndicatorRankingsResource\Pages;

use App\Filament\Resources\GcrEtiPisaIndicatorRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrEtiPisaIndicatorRankings extends EditRecord
{
    protected static string $resource = GcrEtiPisaIndicatorRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
