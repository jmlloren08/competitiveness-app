<?php

namespace App\Filament\Resources\GcrDigitalEgdiIrPhVsAseansResource\Pages;

use App\Filament\Resources\GcrDigitalEgdiIrPhVsAseansResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrDigitalEgdiIrPhVsAseans extends EditRecord
{
    protected static string $resource = GcrDigitalEgdiIrPhVsAseansResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
