<?php

namespace App\Filament\Resources\GcrDigitalEgdiPhVsAseansResource\Pages;

use App\Filament\Resources\GcrDigitalEgdiPhVsAseansResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrDigitalEgdiPhVsAseans extends EditRecord
{
    protected static string $resource = GcrDigitalEgdiPhVsAseansResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
