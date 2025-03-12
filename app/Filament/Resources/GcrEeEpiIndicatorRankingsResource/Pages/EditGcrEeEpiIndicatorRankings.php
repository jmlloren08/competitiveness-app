<?php

namespace App\Filament\Resources\GcrEeEpiIndicatorRankingsResource\Pages;

use App\Filament\Resources\GcrEeEpiIndicatorRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrEeEpiIndicatorRankings extends EditRecord
{
    protected static string $resource = GcrEeEpiIndicatorRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
