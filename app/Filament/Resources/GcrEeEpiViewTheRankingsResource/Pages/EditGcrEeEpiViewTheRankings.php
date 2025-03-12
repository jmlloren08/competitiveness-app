<?php

namespace App\Filament\Resources\GcrEeEpiViewTheRankingsResource\Pages;

use App\Filament\Resources\GcrEeEpiViewTheRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrEeEpiViewTheRankings extends EditRecord
{
    protected static string $resource = GcrEeEpiViewTheRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
