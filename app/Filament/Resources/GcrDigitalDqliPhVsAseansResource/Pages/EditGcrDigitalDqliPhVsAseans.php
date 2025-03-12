<?php

namespace App\Filament\Resources\GcrDigitalDqliPhVsAseansResource\Pages;

use App\Filament\Resources\GcrDigitalDqliPhVsAseansResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrDigitalDqliPhVsAseans extends EditRecord
{
    protected static string $resource = GcrDigitalDqliPhVsAseansResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
