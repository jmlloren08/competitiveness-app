<?php

namespace App\Filament\Resources\GcrDigitalIctdiPhVsAseansResource\Pages;

use App\Filament\Resources\GcrDigitalIctdiPhVsAseansResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrDigitalIctdiPhVsAseans extends EditRecord
{
    protected static string $resource = GcrDigitalIctdiPhVsAseansResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
