export type JenisTerbitan = 'koran' | 'jurnal' | 'majalah' | 'buletin';

export interface Article {
  id: string;
  judul: string;
  pengarang: string;
  subjek: string[];
  abstrak: string;
  namaMedia: string;
  jenisTerbitan: JenisTerbitan;
  volume?: string;
  nomor?: string;
  tanggalTerbit: string;
  tahunTerbit: number;
  halamanKolom: string;
  kataKunci: string[];
  lokasiKoleksi: string;
  issn?: string;
  fotoUrl?: string;
}

export const subjects = [
  'Literasi Digital',
  'Literasi Anak',
  'Pustakawan & Perpustakaan',
  'Bahasa & Budaya',
  'Pendidikan',
  'Teknologi Informasi',
  'Ekonomi & Bisnis',
  'Kesehatan',
  'Sosial Politik',
  'Seni & Sastra',
];

export const mediaList = [
  { nama: 'Radar Blitar', jenis: 'koran' as JenisTerbitan },
  { nama: 'Kompas', jenis: 'koran' as JenisTerbitan },
  { nama: 'Media Indonesia', jenis: 'koran' as JenisTerbitan },
  { nama: 'Republika', jenis: 'koran' as JenisTerbitan },
  { nama: 'Jawa Pos', jenis: 'koran' as JenisTerbitan },
  { nama: 'Suara Merdeka', jenis: 'koran' as JenisTerbitan },
  { nama: 'Pikiran Rakyat', jenis: 'koran' as JenisTerbitan },
  { nama: 'Kedaulatan Rakyat', jenis: 'koran' as JenisTerbitan },
];

export const sampleArticles: Article[] = [
  {
    id: '1',
    judul: 'Indeks Pembangunan Literasi Masyarakat Kabupaten Blitar Naik',
    pengarang: 'Tim Redaksi Radar Blitar',
    subjek: ['Literasi Anak', 'Pendidikan', 'Sosial Politik'],
    abstrak: 'Tingkat kegemaran membaca (TKM) dan indeks pembangunan literasi masyarakat (IPLM) Kabupaten Blitar menunjukkan adanya peningkatan. Tren perkembangan positif tersebut dapat dilihat dalam tiga tahun terakhir. Meski begitu, peningkatan IPLM masih di bawah rata-rata provinsi dan nasional. Kepala Dinas Perpustakaan dan Kearsipan (Dispusip) Kabupaten Blitar, Jumali menjelaskan, angka TKM Kabupaten Blitar pada 2024 mencapai 70,68 poin, naik signifikan dari tahun sebelumnya yaitu 62,5 poin pada 2023 dan 59,6 poin pada 2022.',
    namaMedia: 'Radar Blitar',
    jenisTerbitan: 'koran',
    tanggalTerbit: '2025-10-17',
    tahunTerbit: 2025,
    halamanKolom: 'Hal. 16, Kol. 1-5',
    kataKunci: ['literasi masyarakat', 'TKM', 'IPLM', 'Kabupaten Blitar', 'minat baca'],
    lokasiKoleksi: 'Arsip Koran Okt 2025',
    fotoUrl: '/placeholder.svg',
  },
  {
    id: '2',
    judul: 'Tingkatkan Literasi Baca dari Perpustakaan Desa',
    pengarang: 'Gun/C1/Din',
    subjek: ['Literasi Anak', 'Pustakawan & Perpustakaan', 'Pendidikan'],
    abstrak: 'Dalam upaya meningkatkan minat baca masyarakat, khususnya anak-anak sekolah, Pemerintah Desa Kedungsigit, Kecamatan Karangan, menghadirkan Pojok Baca di area Balai Desa. Inisiatif tersebut menjadi salah satu langkah nyata desa dalam menciptakan ruang edukatif yang menyenangkan bagi warganya. Kepala Desa Kedungsigit, Arys Cahyo Widigdo, menegaskan bahwa kehadiran Pojok Baca ini terbuka untuk seluruh warga.',
    namaMedia: 'Radar Trenggalek',
    jenisTerbitan: 'koran',
    tanggalTerbit: '2025-10-14',
    tahunTerbit: 2025,
    halamanKolom: 'Hal. 14, Kol. 1-3',
    kataKunci: ['perpustakaan desa', 'Pojok Baca', 'literasi', 'Kedungsigit', 'minat baca'],
    lokasiKoleksi: 'Arsip Koran Okt 2025',
    fotoUrl: '/placeholder.svg',
  },
  {
    id: '3',
    judul: 'Kegemaran Anak-anak Membaca Turut Sumbang Kenaikan Skor TKM',
    pengarang: 'Kho/C1/Ynu',
    subjek: ['Literasi Anak', 'Pendidikan'],
    abstrak: 'Kegemaran anak-anak di Kabupaten Blitar dalam membaca turut sumbang kenaikan skor TKM. Merataan layanan perpustakaan, ketercukupan koleksi, tenaga perpustakaan, tingkat kunjungan harian, serta pembinaan sesuai standar nasional menjadi faktor pendukung. Selain itu juga dilihat dari keterlibatan masyarakat dalam kegiatan sosialisasi dan jumlah anggota perpustakaan.',
    namaMedia: 'Radar Blitar',
    jenisTerbitan: 'koran',
    tanggalTerbit: '2025-10-17',
    tahunTerbit: 2025,
    halamanKolom: 'Hal. 16, Kol. 1-4',
    kataKunci: ['TKM', 'membaca', 'anak-anak', 'perpustakaan', 'literasi'],
    lokasiKoleksi: 'Arsip Koran Okt 2025',
    fotoUrl: '/placeholder.svg',
  },
  {
    id: '4',
    judul: 'Perpustakaan Keliling Menjangkau Pelosok Desa',
    pengarang: 'Ahmad Fauzi',
    subjek: ['Pustakawan & Perpustakaan', 'Pendidikan'],
    abstrak: 'Dinas Perpustakaan dan Kearsipan meluncurkan program perpustakaan keliling untuk menjangkau wilayah pedesaan yang jauh dari akses perpustakaan. Program ini bertujuan meningkatkan TKM dan IPLM serta memastikan semua kecamatan memiliki akses literasi yang merata. Target tahun 2025 adalah meningkatkan layanan perpustakaan keliling dan digital.',
    namaMedia: 'Kompas',
    jenisTerbitan: 'koran',
    tanggalTerbit: '2025-09-05',
    tahunTerbit: 2025,
    halamanKolom: 'Hal. 12, Kol. 1-4',
    kataKunci: ['perpustakaan keliling', 'literasi', 'desa', 'akses literasi'],
    lokasiKoleksi: 'Arsip Koran Sep 2025',
    fotoUrl: '/placeholder.svg',
  },
  {
    id: '5',
    judul: 'Program Gerakan Literasi Sekolah Dorong Minat Baca Siswa',
    pengarang: 'Dewi Anggraini',
    subjek: ['Literasi Anak', 'Pendidikan'],
    abstrak: 'Gerakan Literasi Sekolah (GLS) yang digalakkan oleh Kementerian Pendidikan terus menunjukkan hasil positif. Di berbagai sekolah, program 15 menit membaca sebelum pelajaran dimulai telah meningkatkan kebiasaan membaca siswa. Beberapa sekolah bahkan menambahkan pojok baca di setiap kelas sebagai upaya mendukung program ini.',
    namaMedia: 'Media Indonesia',
    jenisTerbitan: 'koran',
    tanggalTerbit: '2025-08-20',
    tahunTerbit: 2025,
    halamanKolom: 'Hal. 8, Kol. 2-5',
    kataKunci: ['GLS', 'literasi sekolah', 'minat baca', 'siswa', 'pendidikan'],
    lokasiKoleksi: 'Arsip Koran Ags 2025',
    fotoUrl: '/placeholder.svg',
  },
  {
    id: '6',
    judul: 'Digitalisasi Perpustakaan Daerah Percepat Akses Informasi',
    pengarang: 'Budi Santoso',
    subjek: ['Literasi Digital', 'Pustakawan & Perpustakaan', 'Teknologi Informasi'],
    abstrak: 'Pemerintah daerah terus melakukan digitalisasi perpustakaan untuk mempercepat akses informasi bagi masyarakat. Layanan e-library dan aplikasi peminjaman buku online kini tersedia di beberapa kabupaten. Upaya ini diharapkan dapat menjangkau generasi muda yang lebih akrab dengan teknologi digital.',
    namaMedia: 'Republika',
    jenisTerbitan: 'koran',
    tanggalTerbit: '2025-07-15',
    tahunTerbit: 2025,
    halamanKolom: 'Hal. 10, Kol. 1-3',
    kataKunci: ['digitalisasi', 'perpustakaan', 'e-library', 'teknologi', 'akses informasi'],
    lokasiKoleksi: 'Arsip Koran Jul 2025',
    fotoUrl: '/placeholder.svg',
  },
  {
    id: '7',
    judul: 'Festival Literasi Nasional Digelar di Jakarta',
    pengarang: 'Rina Wulandari',
    subjek: ['Bahasa & Budaya', 'Pendidikan', 'Seni & Sastra'],
    abstrak: 'Festival Literasi Nasional 2025 resmi dibuka di Jakarta dengan mengusung tema "Membaca untuk Indonesia Maju". Acara yang berlangsung selama tiga hari ini menghadirkan berbagai kegiatan seperti bedah buku, workshop menulis, dan pameran buku dari penerbit seluruh Indonesia. Ribuan pengunjung memadati arena festival.',
    namaMedia: 'Jawa Pos',
    jenisTerbitan: 'koran',
    tanggalTerbit: '2025-06-10',
    tahunTerbit: 2025,
    halamanKolom: 'Hal. 1, Kol. 1-4',
    kataKunci: ['festival literasi', 'pameran buku', 'Jakarta', 'membaca', 'budaya'],
    lokasiKoleksi: 'Arsip Koran Jun 2025',
    fotoUrl: '/placeholder.svg',
  },
  {
    id: '8',
    judul: 'Taman Bacaan Masyarakat Bangkit Pasca Pandemi',
    pengarang: 'Hendra Wijaya',
    subjek: ['Pustakawan & Perpustakaan', 'Sosial Politik'],
    abstrak: 'Taman Bacaan Masyarakat (TBM) di berbagai daerah mulai bangkit setelah sempat terpuruk selama pandemi. Relawan dan pengelola TBM kembali mengaktifkan kegiatan membaca dan program literasi komunitas. Dukungan dari pemerintah dan donatur sangat dibutuhkan untuk menjaga keberlangsungan TBM.',
    namaMedia: 'Suara Merdeka',
    jenisTerbitan: 'koran',
    tanggalTerbit: '2025-05-25',
    tahunTerbit: 2025,
    halamanKolom: 'Hal. 15, Kol. 2-4',
    kataKunci: ['TBM', 'taman bacaan', 'pandemi', 'komunitas', 'literasi'],
    lokasiKoleksi: 'Arsip Koran Mei 2025',
    fotoUrl: '/placeholder.svg',
  },
  {
    id: '9',
    judul: 'Peran Pustakawan dalam Membangun Masyarakat Literat',
    pengarang: 'Sri Wahyuni',
    subjek: ['Pustakawan & Perpustakaan', 'Pendidikan'],
    abstrak: 'Profesi pustakawan memiliki peran strategis dalam membangun masyarakat yang literat. Selain mengelola koleksi perpustakaan, pustakawan juga dituntut untuk aktif dalam promosi literasi dan pendampingan membaca. Sertifikasi kompetensi pustakawan terus ditingkatkan untuk menjamin kualitas layanan.',
    namaMedia: 'Pikiran Rakyat',
    jenisTerbitan: 'koran',
    tanggalTerbit: '2025-04-18',
    tahunTerbit: 2025,
    halamanKolom: 'Hal. 7, Kol. 1-3',
    kataKunci: ['pustakawan', 'literasi', 'kompetensi', 'layanan perpustakaan'],
    lokasiKoleksi: 'Arsip Koran Apr 2025',
    fotoUrl: '/placeholder.svg',
  },
  {
    id: '10',
    judul: 'Donasi Buku untuk Perpustakaan Sekolah Terpencil',
    pengarang: 'Linda Kartika',
    subjek: ['Pendidikan', 'Sosial Politik'],
    abstrak: 'Komunitas pecinta buku menggelar aksi donasi buku untuk perpustakaan sekolah di daerah terpencil. Ribuan buku terkumpul dan didistribusikan ke puluhan sekolah di pelosok Jawa Timur. Kegiatan ini diharapkan dapat menumbuhkan minat baca siswa yang selama ini kekurangan akses buku bacaan.',
    namaMedia: 'Kedaulatan Rakyat',
    jenisTerbitan: 'koran',
    tanggalTerbit: '2025-03-12',
    tahunTerbit: 2025,
    halamanKolom: 'Hal. 9, Kol. 2-5',
    kataKunci: ['donasi buku', 'perpustakaan sekolah', 'terpencil', 'minat baca'],
    lokasiKoleksi: 'Arsip Koran Mar 2025',
    fotoUrl: '/placeholder.svg',
  },
  {
    id: '11',
    judul: 'Kolaborasi Perpustakaan dan Kafe Literasi',
    pengarang: 'Agus Prasetyo',
    subjek: ['Pustakawan & Perpustakaan', 'Ekonomi & Bisnis'],
    abstrak: 'Konsep kafe literasi mulai marak di berbagai kota besar. Kolaborasi antara perpustakaan dan pelaku usaha kafe menciptakan suasana baca yang nyaman sambil menikmati kopi. Model bisnis ini terbukti efektif menarik minat anak muda untuk lebih dekat dengan buku.',
    namaMedia: 'Kompas',
    jenisTerbitan: 'koran',
    tanggalTerbit: '2025-02-08',
    tahunTerbit: 2025,
    halamanKolom: 'Hal. 14, Kol. 1-4',
    kataKunci: ['kafe literasi', 'perpustakaan', 'kolaborasi', 'anak muda', 'bisnis'],
    lokasiKoleksi: 'Arsip Koran Feb 2025',
    fotoUrl: '/placeholder.svg',
  },
  {
    id: '12',
    judul: 'Pameran Koran Lama di Museum Pers',
    pengarang: 'Retno Wulandari',
    subjek: ['Bahasa & Budaya', 'Seni & Sastra'],
    abstrak: 'Museum Pers Nasional menggelar pameran koleksi koran lama dari era kemerdekaan hingga reformasi. Pengunjung dapat melihat langsung bagaimana perkembangan jurnalistik Indonesia dari masa ke masa. Pameran ini menjadi sarana edukasi sejarah pers bagi generasi muda.',
    namaMedia: 'Media Indonesia',
    jenisTerbitan: 'koran',
    tanggalTerbit: '2025-01-20',
    tahunTerbit: 2025,
    halamanKolom: 'Hal. 11, Kol. 1-3',
    kataKunci: ['pameran', 'koran lama', 'museum pers', 'sejarah', 'jurnalistik'],
    lokasiKoleksi: 'Arsip Koran Jan 2025',
    fotoUrl: '/placeholder.svg',
  },
];

export const statistics = {
  totalArticles: 1245,
  totalMedia: 8,
  yearRange: { start: 1985, end: 2025 },
  categories: {
    koran: 1245,
    jurnal: 0,
    majalah: 0,
    buletin: 0,
  },
};

export const getPublicationTypeLabel = (type: JenisTerbitan): string => {
  const labels: Record<JenisTerbitan, string> = {
    koran: 'Surat Kabar',
    jurnal: 'Jurnal Ilmiah',
    majalah: 'Majalah',
    buletin: 'Buletin',
  };
  return labels[type];
};

export const getPublicationTypeColor = (type: JenisTerbitan): string => {
  const colors: Record<JenisTerbitan, string> = {
    koran: 'bg-orange-500',
    jurnal: 'bg-blue-500',
    majalah: 'bg-purple-500',
    buletin: 'bg-emerald-500',
  };
  return colors[type];
};
