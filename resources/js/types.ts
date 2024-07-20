import { Config } from "ziggy-js";

type DateTime = string;

export type Nullable<T> = T | null;

export function fileSize(size: number) {
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return (
    Number((size / Math.pow(1024, i)).toFixed(2)) +
    ' ' +
    ['B', 'kB', 'MB', 'GB', 'TB'][i]
  );
}


export interface Team {
  id: number;
  name: string;
  personal_team: boolean;
  created_at: DateTime;
  updated_at: DateTime;
}

export interface User {
  id: number;
  name: string;
  email: string;
  current_team_id: Nullable<number>;
  profile_photo_path: Nullable<string>;
  profile_photo_url: string;
  two_factor_enabled: boolean;
  email_verified_at: Nullable<DateTime>;
  created_at: DateTime;
  updated_at: DateTime;
}

export interface Auth {
  user: Nullable<
    User & {
      all_teams?: Team[];
      current_team?: Team;
    }
  >;
}

export interface Student {
  length: number;
  map(arg0: (data: any) => import("react").JSX.Element): import("react").ReactNode;
  id: number;
  kode_pendaftaran: string;
  nama: string;
  nis: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  tahun_lulus: string;
  diterima: string;
  nem: string;
  no_ijazah: string;
  alamat: string;
  url_foto: string;
  kartu_keluarga: string;
  ijazah: string;
  asal_sekolah: string;
  nama_ayah: string;
  pekerjaan_ayah: string;
  no_hp_ayah: string;
  nama_ibu: string;
  pekerjaan_ibu: string;
  no_hp_ibu: string;
  saran_dari: string;
}

export interface Schedule {
  length: number;
  map(arg0: (schedule: any) => any): import("react").ReactNode;
  id: number;
  name: string;
  tanggal: string;
  waktu: string;
  body: string;
}

export interface Kegiatans {
  data: any;
  links: any;
  map(arg0: (kegiatans: any) => any): import("react").ReactNode;
  id: number;
  title: string;
  file: string;
  desc: string;
}

export type InertiaSharedProps<T = {}> = T & {
  jetstream: {
    canCreateTeams: boolean;
    canManageTwoFactorAuthentication: boolean;
    canUpdatePassword: boolean;
    canUpdateProfileInformation: boolean;
    flash: any;
    hasAccountDeletionFeatures: boolean;
    hasApiFeatures: boolean;
    hasTeamFeatures: boolean;
    hasTermsAndPrivacyPolicyFeature: boolean;
    managesProfilePhotos: boolean;
    hasEmailVerification: boolean;
  };
  auth: Auth;
  errorBags: any;
  errors: any;
};

export interface Session {
  id: number;
  ip_address: string;
  is_current_device: boolean;
  agent: {
    is_desktop: boolean;
    platform: string;
    browser: string;
  };
  last_active: DateTime;
}

export interface ApiToken {
  id: number;
  name: string;
  abilities: string[];
  last_used_ago: Nullable<DateTime>;
  created_at: DateTime;
  updated_at: DateTime;
}

export interface JetstreamTeamPermissions {
  canAddTeamMembers: boolean;
  canDeleteTeam: boolean;
  canRemoveTeamMembers: boolean;
  canUpdateTeam: boolean;
}

export interface Role {
  key: string;
  name: string;
  permissions: string[];
  description: string;
}

export interface TeamInvitation {
  id: number;
  team_id: number;
  email: string;
  role: Nullable<string>;
  created_at: DateTime;
  updated_at: DateTime;
}
