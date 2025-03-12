<?php

namespace App\Filament\Resources\GcrDigitalWdcrViewTheRankingsResource\Pages;

use App\Filament\Resources\GcrDigitalWdcrViewTheRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrDigitalWdcrViewTheRankings extends EditRecord
{
    protected static string $resource = GcrDigitalWdcrViewTheRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
