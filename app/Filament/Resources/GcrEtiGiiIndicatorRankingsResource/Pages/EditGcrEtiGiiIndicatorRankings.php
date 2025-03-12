<?php

namespace App\Filament\Resources\GcrEtiGiiIndicatorRankingsResource\Pages;

use App\Filament\Resources\GcrEtiGiiIndicatorRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrEtiGiiIndicatorRankings extends EditRecord
{
    protected static string $resource = GcrEtiGiiIndicatorRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
