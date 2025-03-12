<?php

namespace App\Filament\Resources\GcrDigitalIctdiIrPhVsAseansResource\Pages;

use App\Filament\Resources\GcrDigitalIctdiIrPhVsAseansResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrDigitalIctdiIrPhVsAseans extends EditRecord
{
    protected static string $resource = GcrDigitalIctdiIrPhVsAseansResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
