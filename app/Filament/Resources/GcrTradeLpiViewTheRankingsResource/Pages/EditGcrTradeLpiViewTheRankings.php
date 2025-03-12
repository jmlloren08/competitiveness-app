<?php

namespace App\Filament\Resources\GcrTradeLpiViewTheRankingsResource\Pages;

use App\Filament\Resources\GcrTradeLpiViewTheRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrTradeLpiViewTheRankings extends EditRecord
{
    protected static string $resource = GcrTradeLpiViewTheRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
