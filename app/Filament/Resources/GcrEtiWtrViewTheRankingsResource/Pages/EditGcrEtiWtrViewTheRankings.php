<?php

namespace App\Filament\Resources\GcrEtiWtrViewTheRankingsResource\Pages;

use App\Filament\Resources\GcrEtiWtrViewTheRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrEtiWtrViewTheRankings extends EditRecord
{
    protected static string $resource = GcrEtiWtrViewTheRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
