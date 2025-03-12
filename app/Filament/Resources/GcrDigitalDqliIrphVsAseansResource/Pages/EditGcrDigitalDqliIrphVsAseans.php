<?php

namespace App\Filament\Resources\GcrDigitalDqliIrphVsAseansResource\Pages;

use App\Filament\Resources\GcrDigitalDqliIrphVsAseansResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrDigitalDqliIrphVsAseans extends EditRecord
{
    protected static string $resource = GcrDigitalDqliIrphVsAseansResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
