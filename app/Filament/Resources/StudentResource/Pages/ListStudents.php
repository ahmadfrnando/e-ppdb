<?php

namespace App\Filament\Resources\StudentResource\Pages;

use App\Filament\Resources\StudentResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Filament\Forms\Components\Select;

class ListStudents extends ListRecords
{
  protected static string $resource = StudentResource::class;

  protected function getHeaderActions(): array
  {
    return [
      // Actions\CreateAction::make(),
      Actions\Action::make('Reports')->action(function () {
        return redirect()->route('export.laporan-seleksi');
      }),
    //   Actions\Action::make('Reports')
    //     ->icon('heroicon-o-printer')
    //     ->form([
    //       Select::make('diterima')
    //         ->options([
    //           0 => 'Proses Seleksi',
    //           1 => 'Diterima',
    //           2 => 'Ditolak',
    //         ])
    //         ->required(),
    //     ])
    //     ->action(function (array $data) {
    //       // Eksekusi logika setelah form disubmit
    //       $diterima = $data['diterima'];
    //       // Redirect ke route yang ditentukan dengan parameter tanggal
    //       return redirect()->route('download.laporan-seleksi', [
    //         'diterima' => $diterima,
    //       ]);
    //     }),
    ];
  }
}
