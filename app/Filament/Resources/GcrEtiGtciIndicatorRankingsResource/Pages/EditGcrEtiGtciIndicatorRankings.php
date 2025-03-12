<?php

namespace App\Filament\Resources\GcrEtiGtciIndicatorRankingsResource\Pages;

use App\Filament\Resources\GcrEtiGtciIndicatorRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrEtiGtciIndicatorRankings extends EditRecord
{
    protected static string $resource = GcrEtiGtciIndicatorRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
