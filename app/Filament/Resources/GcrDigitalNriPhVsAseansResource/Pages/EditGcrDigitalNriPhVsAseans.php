<?php

namespace App\Filament\Resources\GcrDigitalNriPhVsAseansResource\Pages;

use App\Filament\Resources\GcrDigitalNriPhVsAseansResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrDigitalNriPhVsAseans extends EditRecord
{
    protected static string $resource = GcrDigitalNriPhVsAseansResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
