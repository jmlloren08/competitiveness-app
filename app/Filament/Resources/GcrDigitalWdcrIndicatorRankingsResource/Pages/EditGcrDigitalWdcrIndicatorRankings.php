<?php

namespace App\Filament\Resources\GcrDigitalWdcrIndicatorRankingsResource\Pages;

use App\Filament\Resources\GcrDigitalWdcrIndicatorRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrDigitalWdcrIndicatorRankings extends EditRecord
{
    protected static string $resource = GcrDigitalWdcrIndicatorRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
