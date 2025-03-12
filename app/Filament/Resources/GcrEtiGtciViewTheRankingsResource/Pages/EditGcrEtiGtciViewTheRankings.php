<?php

namespace App\Filament\Resources\GcrEtiGtciViewTheRankingsResource\Pages;

use App\Filament\Resources\GcrEtiGtciViewTheRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrEtiGtciViewTheRankings extends EditRecord
{
    protected static string $resource = GcrEtiGtciViewTheRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
