<?php

namespace App\Filament\Resources\GcrEeEtiViewTheRankingsResource\Pages;

use App\Filament\Resources\GcrEeEtiViewTheRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrEeEtiViewTheRankings extends EditRecord
{
    protected static string $resource = GcrEeEtiViewTheRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
