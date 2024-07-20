<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PengumumanNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
                    ->subject('Pemberitahuan Penerimaan Siswa Baru')
                    ->line('Selamat! Anda dinyatakan lulus seleksi masuk SMP 1 Nasrani Medan. Silahkan periksa akun anda, dan lihat pengumuman')
                    ->from('admin@smp1nasrani.com', 'Petugas Tata Usaha')
                    ->greeting('Hai!')
                    ->action('SMP 1 NASRANI MEDAN', url('/login'))
                    ->line('Terima Kasih');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}