<?php

namespace App\Filament\Resources\GcrTradeLpiIndicatorRankingsResource\Pages;

use App\Filament\Resources\GcrTradeLpiIndicatorRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrTradeLpiIndicatorRankings extends EditRecord
{
    protected static string $resource = GcrTradeLpiIndicatorRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
