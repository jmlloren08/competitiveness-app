<?php

namespace App\Filament\Resources\GcrDigitalNriIrPhVsAseansResource\Pages;

use App\Filament\Resources\GcrDigitalNriIrPhVsAseansResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrDigitalNriIrPhVsAseans extends EditRecord
{
    protected static string $resource = GcrDigitalNriIrPhVsAseansResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
