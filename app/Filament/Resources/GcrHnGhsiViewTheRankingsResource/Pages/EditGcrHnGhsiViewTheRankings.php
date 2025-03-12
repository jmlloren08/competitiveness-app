<?php

namespace App\Filament\Resources\GcrHnGhsiViewTheRankingsResource\Pages;

use App\Filament\Resources\GcrHnGhsiViewTheRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrHnGhsiViewTheRankings extends EditRecord
{
    protected static string $resource = GcrHnGhsiViewTheRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
