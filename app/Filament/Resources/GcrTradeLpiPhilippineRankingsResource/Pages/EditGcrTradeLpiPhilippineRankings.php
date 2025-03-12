<?php

namespace App\Filament\Resources\GcrTradeLpiPhilippineRankingsResource\Pages;

use App\Filament\Resources\GcrTradeLpiPhilippineRankingsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrTradeLpiPhilippineRankings extends EditRecord
{
    protected static string $resource = GcrTradeLpiPhilippineRankingsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
