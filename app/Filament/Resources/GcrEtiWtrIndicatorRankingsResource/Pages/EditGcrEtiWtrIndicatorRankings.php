<?php

namespace App\Filament\Resources\GcrEtiWtrIndicatorRankingsResource\Pages;

use App\Filament\Resources\GcrEtiWtrIndicatorRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrEtiWtrIndicatorRankings extends EditRecord
{
    protected static string $resource = GcrEtiWtrIndicatorRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
