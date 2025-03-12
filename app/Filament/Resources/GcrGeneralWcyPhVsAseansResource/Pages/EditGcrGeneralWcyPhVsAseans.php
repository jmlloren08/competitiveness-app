<?php

namespace App\Filament\Resources\GcrGeneralWcyPhVsAseansResource\Pages;

use App\Filament\Resources\GcrGeneralWcyPhVsAseansResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrGeneralWcyPhVsAseans extends EditRecord
{
    protected static string $resource = GcrGeneralWcyPhVsAseansResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
