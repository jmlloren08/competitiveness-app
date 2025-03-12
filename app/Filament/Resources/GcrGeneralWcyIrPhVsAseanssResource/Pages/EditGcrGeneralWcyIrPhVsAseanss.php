<?php

namespace App\Filament\Resources\GcrGeneralWcyIrPhVsAseanssResource\Pages;

use App\Filament\Resources\GcrGeneralWcyIrPhVsAseanssResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGcrGeneralWcyIrPhVsAseanss extends EditRecord
{
    protected static string $resource = GcrGeneralWcyIrPhVsAseanssResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
