<?php

namespace App\Filament\Resources\GcrHnGhiViewTheRankingsResource\Pages;

use App\Filament\Resources\GcrHnGhiViewTheRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrHnGhiViewTheRankings extends EditRecord
{
    protected static string $resource = GcrHnGhiViewTheRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
