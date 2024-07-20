<?php

namespace App\Filament\Widgets;

use App\Models\User;
use App\Models\Student;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Pengguna', User::count()),
            Stat::make('Total Pendaftar', Student::count()),
            Stat::make('Total Pendaftar Lulus Seleksi', Student::where('diterima', 1)->count()),
            Stat::make('Total Pendaftar Tidak Lulus Seleksi', Student::where('diterima', 0)->count()),
        ];
    }
}