<?php

namespace App\Filament\Resources\GcrEeEtiIndicatorRankingsResource\Pages;

use App\Filament\Resources\GcrEeEtiIndicatorRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrEeEtiIndicatorRankings extends EditRecord
{
    protected static string $resource = GcrEeEtiIndicatorRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
