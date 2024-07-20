<?php

namespace App\Filament\Resources\StudentResource\Pages;

use Filament\Actions;
use App\Models\Student;
use Filament\Forms\Components\Select;
use Filament\Resources\Pages\ViewRecord;
use App\Filament\Resources\StudentResource;

class ViewStudent extends ViewRecord
{
    protected static string $resource = StudentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
            Actions\Action::make('diterima')
                    ->label('Seleksi')
                    ->color('warning')
                    ->form([
                        Select::make('diterima')
                            ->options([
                                0 => 'Proses Seleksi',
                                1 => 'Diterima',
                                2 => 'Ditolak',
                            ])
                            ->required(),
                    ])
                    ->action(function (array $data, Student $record): void {
                        $record->diterima = $data['diterima'];
                        $record->save();
                        if($data['diterima'] == 1){
                            redirect()->route('seleksi.diterima', $record->id);;
                        }
                    })
        ];
    }
}