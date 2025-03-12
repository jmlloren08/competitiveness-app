<?php

namespace App\Filament\Resources\GcrEtiGiiViewTheRankingsResource\Pages;

use App\Filament\Resources\GcrEtiGiiViewTheRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrEtiGiiViewTheRankings extends EditRecord
{
    protected static string $resource = GcrEtiGiiViewTheRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
