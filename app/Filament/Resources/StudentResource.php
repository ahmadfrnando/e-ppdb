<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use Random\Randomizer;
use App\Models\Student;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Filament\Resources\Resource;
use Illuminate\Support\Facades\Date;
use Filament\Forms\Components\Select;
use Illuminate\Http\RedirectResponse;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\Textarea;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Tables\Filters\SelectFilter;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\StudentResource\Pages;
use Ramsey\Uuid\Generator\RandomGeneratorFactory;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Ramsey\Uuid\Generator\RandomGeneratorInterface;
use App\Filament\Resources\StudentResource\RelationManagers;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;

class StudentResource extends Resource
{
    protected static ?string $model = Student::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationLabel = 'Pendaftaran Siswa';

    public static function getPluralLabel(): ?string
    {
        $locale = app()->getLocale();
        if ($locale == 'id') {
            return "Daftar Calon Siswa";
        } else
            return "Daftar Calon Siswa";
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Identitas Diri')
                    ->schema([
                        TextInput::make('nama')->label('Nama Lengkap')->required()->autocomplete(false),
                        TextInput::make('nis')->label('NIS')->numeric()->required()->autocomplete(false),
                        TextInput::make('tempat_lahir')->required()->autocomplete(false),
                        DatePicker::make('tanggal_lahir')->required(),
                        Select::make('jenis_kelamin')->required()->options([
                            'Laki-laki' => 'Laki-laki',
                            'Perempuan' => 'Perempuan',
                        ]),
                        TextInput::make('nem')->label('NEM')->required()->autocomplete(false),
                        TextInput::make('no_ijazah')->required()->autocomplete(false),
                        Select::make('tahun_lulus')->required()->options([
                            '2022' => '2022',
                            '2023' => '2023',
                            '2024' => '2024',
                        ]),
                        Textarea::make('alamat')->required()->autocomplete(false),
                        TextInput::make('asal_sekolah')->required()->autocomplete(false),
                        FileUpload::make('url_foto')->label('Pas Foto 3x4')
                            ->directory('Pas-Foto')
                            ->image()
                            ->getUploadedFileNameForStorageUsing(
                                fn (TemporaryUploadedFile $file): string => (string) str($file->getClientOriginalName())
                                    ->prepend('Pas Foto-'),
                            )
                            ->uploadingMessage('Uploading attachment...')
                            ->maxSize(1024)
                            ->required()
                            ->columnSpan(2),
                        FileUpload::make('kartu_keluarga')->label('Kartu Keluarga')
                            ->directory('Kartu-Keluarga')
                            ->image()
                            ->getUploadedFileNameForStorageUsing(
                                fn (TemporaryUploadedFile $file): string => (string) str($file->getClientOriginalName())
                                    ->prepend('Kartu Keluarga-'),
                            )
                            ->uploadingMessage('Uploading attachment...')
                            ->maxSize(1024)
                            ->required()
                            ->columnSpan(2),
                        FileUpload::make('ijazah')->label('Ijazah SD')
                            ->directory('Ijazah')
                            ->image()
                            ->getUploadedFileNameForStorageUsing(
                                fn (TemporaryUploadedFile $file): string => (string) str($file->getClientOriginalName())
                                    ->prepend('Ijazah-'),
                            )
                            ->uploadingMessage('Uploading attachment...')
                            ->maxSize(1024)
                            ->required()
                            ->columnSpan(2),
                    ])->columns(2),
                Section::make('Identitas Orang Tua')
                    ->schema([
                        TextInput::make('nama_ayah')->required()->autocomplete(false),
                        TextInput::make('pekerjaan_ayah')->required()->autocomplete(false),
                        TextInput::make('no_hp_ayah')->numeric()->required()->autocomplete(false),
                        TextInput::make('nama_ibu')->required()->autocomplete(false),
                        TextInput::make('pekerjaan_ibu')->required()->autocomplete(false),
                        TextInput::make('no_hp_ibu')->numeric()->required()->autocomplete(false),
                    ])->columns(2),
                Section::make('Tambahan')
                    ->schema([
                        TextInput::make('saran_dari'),
                    ])->columns(2)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('kode_pendaftaran')->searchable(),
                TextColumn::make('nama')->searchable(),
                TextColumn::make('nis')->searchable(),
                ImageColumn::make('url_foto')->square()->label('Pas Foto'),
                TextColumn::make('nilai')->label('Nilai Seleksi')->suffix(' / 100'),
                TextColumn::make('diterima')
                    ->searchable()
                    ->badge()
                    ->getStateUsing(function (Student $record): string {
                        return $record->status;
                    })
                    ->color(fn (string $state): string => match ($state) {
                        'default' => 'gray',
                        'Proses Seleksi' => 'info',
                        'Diterima' => 'success',
                        'Ditolak' => 'danger',
                    }),
            ])
            ->filters([
                SelectFilter::make('diterima')
                    ->label('Seleksi')
                    ->options([
                        0 => 'Proses Seleksi',
                        1 => 'Diterima',
                        2 => 'Ditolak',
                    ]),
                SelectFilter::make('tahun_lulus')
                    ->label('Tahun Lulus')
                    ->options([
                        '2022' => '2022',
                        '2023' => '2023',
                        '2024' => '2024',
                    ])
            ])
            ->actions([
                Tables\Actions\Action::make('update')
                    ->label('')
                    ->icon('heroicon-c-arrow-path')
                    ->color('warning')
                    ->form([
                        Select::make('diterima')
                            ->options([
                                0 => 'Proses Seleksi',
                                1 => 'Diterima',
                            ])
                            ->required(),
                    ])
                    ->action(function (array $data, Student $record): void {
                        $record->diterima = $data['diterima'];
                        $record->save();
                        if ($data['diterima'] == 1) {
                            redirect()->route('seleksi.diterima', $record->id);;
                        }
                    }),
                Tables\Actions\ViewAction::make()->label(''),
                Tables\Actions\EditAction::make()->label(''),
                Tables\Actions\DeleteAction::make()->Label(''),
                // Tables\Actions\Action::make('delete')
                //     ->label('')
                //     ->icon('heroicon-o-trash')
                //     ->color('danger')
                //     ->action(fn (Student $record) => $record->delete())
                //     ->requiresConfirmation()
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListStudents::route('/'),
            'create' => Pages\CreateStudent::route('/create'),
            'view' => Pages\ViewStudent::route('/{record}'),
            'edit' => Pages\EditStudent::route('/{record}/edit'),
        ];
    }
}