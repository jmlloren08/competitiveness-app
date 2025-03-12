<?php

namespace App\Filament\Resources\GcrHnGhsiIndicatorRankingsResource\Pages;

use App\Filament\Resources\GcrHnGhsiIndicatorRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrHnGhsiIndicatorRankings extends EditRecord
{
    protected static string $resource = GcrHnGhsiIndicatorRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
