// Imports for clipping images
import artikel1 from "@/assets/kliping/artikel-1.jpg";
import artikel2 from "@/assets/kliping/artikel-2.jpg";
import artikel3 from "@/assets/kliping/artikel-3.jpg";
import artikel4 from "@/assets/kliping/artikel-4.jpg";
import artikel5 from "@/assets/kliping/artikel-5.jpg";
import artikel6 from "@/assets/kliping/artikel-6.jpg";
import artikel7 from "@/assets/kliping/artikel-7.jpg";
import artikel8 from "@/assets/kliping/artikel-8.jpg";
import artikel9 from "@/assets/kliping/artikel-9.jpg";
import artikel10 from "@/assets/kliping/artikel-10.jpg";
import artikel11 from "@/assets/kliping/artikel-11.jpg";
import artikel12 from "@/assets/kliping/artikel-12.jpg";
import artikel13 from "@/assets/kliping/artikel-13.jpg";
import artikel14 from "@/assets/kliping/artikel-14.jpg";
import artikel15 from "@/assets/kliping/artikel-15.jpg";
import artikel17 from "@/assets/kliping/artikel-17.jpg";
import artikel18 from "@/assets/kliping/artikel-18.jpg";
import artikel19 from "@/assets/kliping/artikel-19.jpg";
import artikel21 from "@/assets/kliping/artikel-21.jpg";
import artikel22 from "@/assets/kliping/artikel-22.jpg";
import artikel23 from "@/assets/kliping/artikel-23.jpg";
import artikel24 from "@/assets/kliping/artikel-24.jpg";
import artikel25 from "@/assets/kliping/artikel-25.jpg";
import artikel26 from "@/assets/kliping/artikel-26.jpg";
import artikel27 from "@/assets/kliping/artikel-27.jpg";
import artikel28 from "@/assets/kliping/artikel-28.jpg";
import artikel29 from "@/assets/kliping/artikel-29.jpg";
import artikel30 from "@/assets/kliping/artikel-30.jpg";
import artikel31 from "@/assets/kliping/artikel-31.jpg";
import artikel32 from "@/assets/kliping/artikel-32.jpg";
import artikel33 from "@/assets/kliping/artikel-33.jpg";
import artikel34 from "@/assets/kliping/artikel-34.jpg";

export type JenisTerbitan = 'koran';

export interface Article {
  id: string;
  judul: string;
  pengarang: string;
  subjek: string[];
  abstrak: string;
  namaMedia: string;
  jenisTerbitan: JenisTerbitan;
  tanggalTerbit: string;
  tahunTerbit: number;
  halamanKolom: string;
  kataKunci: string[];
  lokasiKoleksi: string;
  fotoUrl?: string;
}

export const subjects = [
  'Literasi',
  'Literasi Digital',
  'Literasi Anak',
  'Literasi Keuangan',
  'Literasi Bencana',
  'Perpustakaan',
  'Pustakawan',
  'Bahasa & Budaya',
];

export const mediaList = [
  { nama: 'Jawa Pos', jenis: 'koran' as JenisTerbitan },
  { nama: 'Kompas', jenis: 'koran' as JenisTerbitan },
  { nama: 'Tribun Academy', jenis: 'koran' as JenisTerbitan },
  { nama: 'Radar Blitar', jenis: 'koran' as JenisTerbitan },
];

export const sampleArticles: Article[] = [
  {
    id: "1",
    judul: "Minat Baca Membaik, Durasi Masih Pendek",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi"],
    abstrak: "Dalam tantangan besar saat ini masyarakat Jawa Timur masih tergolong pendek dalam hal literasi membaca. Gubernur Jawa Timur mengungkapkan bahwa padahal angka minat baca saat ini sudah termasuk tinggi mencapai 64,2 persen.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-05-18",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 6, Kol. 1-2",
    kataKunci: ["Minat Baca", "Literasi"],
    lokasiKoleksi: "Arsip Koran Mei 2025",
    fotoUrl: artikel1
  },
  {
    id: "2",
    judul: "Literasi Desain Grafis tentang Bung Karno, Wujudkan Masyarakat Gemar Berkreasi",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi"],
    abstrak: "Perpustakaan Bung Karno menggelar acara desain grafis yang dimana acara ini untuk meningkatkan kesejahteraan masyarakat. Acara ini langsung dibuka oleh Plt UPT Perpustakaan Bung Karno yaitu Dr. Hartono SS Hum.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-05-18",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 16, Kol. 1-6",
    kataKunci: ["Literasi", "Desain Grafis"],
    lokasiKoleksi: "Arsip Koran Mei 2025",
    fotoUrl: artikel2
  },
  {
    id: "3",
    judul: "Literasi Desain Grafis tentang Bung Karno, Wujudkan Masyarakat Gemar Berkreasi (Lanjutan)",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi"],
    abstrak: "Dalam rangkaian literasi desain grafis model perkembangan perpustakaan berbasis inklusi agar bisa menjadikan program penguatan literasi untuk kesejahteraan masyarakat dan pengentasan kemiskinan.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-05-18",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 17, Kol. 1-4",
    kataKunci: ["Literasi", "Desain Grafis"],
    lokasiKoleksi: "Arsip Koran Mei 2025",
    fotoUrl: artikel3
  },
  {
    id: "4",
    judul: "Literasi Desain Grafis tentang Bung Karno, Bekal Tingkatkan Kesejahteraan",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi"],
    abstrak: "Dalam agenda ini peserta sangat antusias dalam melakukan kegiatan tersebut.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-05-21",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 16, Kol. 1-4",
    kataKunci: ["Literasi", "Desain Grafis"],
    lokasiKoleksi: "Arsip Koran Mei 2025",
    fotoUrl: artikel4
  },
  {
    id: "5",
    judul: "Literasi Pelatihan Peserta Menulis Konten Kreatif Dinas Perpustakaan dan Kearsipan Kabupaten Blitar",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi"],
    abstrak: "Acara ini diikuti oleh 50 santri se-Kabupaten Blitar yang dimana lomba tersebut mempunyai berbagai tujuan yaitu tentang pemanfaatan membangun konten yang berkualitas tinggi yang unik serta menarik berdasarkan karakteristik kita.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-05-21",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 16, Kol. 1-7",
    kataKunci: ["Literasi", "Pelatihan Menulis Konten"],
    lokasiKoleksi: "Arsip Koran Mei 2025",
    fotoUrl: artikel5
  },
  {
    id: "6",
    judul: "Literasi Wastra Nusantara, Lestarikan dan Gairahkan Budaya",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi", "Bahasa & Budaya"],
    abstrak: "Literasi Wastra Nusantara, Lestarikan dan Gairahkan Budaya Bangsa dengan digelarnya acara ini bertujuan untuk membimbing serta memotivasi untuk mengembangkan potensi kita, serta memfasilitasi dan kontribusi di bidang wastra nusantara.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-06-30",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 17, Kol. 1-4",
    kataKunci: ["Literasi", "Wastra Nusantara"],
    lokasiKoleksi: "Arsip Koran Juni 2025",
    fotoUrl: artikel6
  },
  {
    id: "7",
    judul: "Koleksi UPT Perpustakaan Bung Karno untuk Referensi Vlogging",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi", "Perpustakaan"],
    abstrak: "Koleksi yang ada di UPT Perpustakaan Bung Karno dapat menjadikan referensi bagi masyarakat dalam berkreasi membuat vlog.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-09-03",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 18, Kol. 1-5",
    kataKunci: ["Literasi"],
    lokasiKoleksi: "Arsip Koran Sep 2025",
    fotoUrl: artikel7
  },
  {
    id: "8",
    judul: "Pelatihan Kreasi untuk Peningkatan Ekonomi Masyarakat",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi"],
    abstrak: "Dalam kegiatan ini difokuskan untuk memberikan pelatihan kepada masyarakat untuk lebih berkreasi dalam berusaha yang bisa menghasilkan produk peningkatan ekonomi.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-09-21",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 15, Kol. 1-4",
    kataKunci: ["Literasi"],
    lokasiKoleksi: "Arsip Koran Sep 2025",
    fotoUrl: artikel8
  },
  {
    id: "9",
    judul: "Kekuasaan Bersenjata Bahasa: Daya Tarik Korea",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi", "Bahasa & Budaya"],
    abstrak: "Korea telah berhasil menciptakan daya tarik yang kuat, mengubah penggemar budaya menjadi duta yang secara tidak langsung yang membantu memperluas pengaruhnya.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-07-19",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 6, Kol. 1-7",
    kataKunci: ["Literasi", "Bahasa"],
    lokasiKoleksi: "Arsip Koran Juli 2025",
    fotoUrl: artikel9
  },
  {
    id: "10",
    judul: "Jayabaya dan Bahasa Jawa: Cerminan Kehidupan Pedesaan",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi", "Bahasa & Budaya"],
    abstrak: "Jayabaya mulai menulis bahasa Jawa sejak berkuliah dan menjadi mahasiswa Prof. Dr. Suripan Sadi Hutomo, yang pada saat itu menurutnya bahasa daerah (Jawa) sangat mencerminkan kehidupan masyarakat pedesaan yang tenang, tetapi juga banyak tantangan seperti dengan menurunnya minat membaca yang menjadi salah satu tantangan.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-07-19",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 7, Kol. 1-7",
    kataKunci: ["Literasi", "Sastra"],
    lokasiKoleksi: "Arsip Koran Juli 2025",
    fotoUrl: artikel10
  },
  {
    id: "11",
    judul: "Strategi Pemasaran Ikan Koi Blitar dengan Storytelling Digital",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi Digital"],
    abstrak: "Strategi pemasaran ikan koi di kota Blitar yang sudah beralih dari sistem offline ke digital melalui media sosial. Pelaku usaha tidak hanya menjual produk tetapi juga menggunakan storytelling dan konten edukatif di medsos untuk menarik konsumen serta memperluas pasar.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-08-10",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 17, Kol. 1-4",
    kataKunci: ["Literasi", "Storytelling"],
    lokasiKoleksi: "Arsip Koran Agu 2025",
    fotoUrl: artikel11
  },
  {
    id: "12",
    judul: "Hoaks, Anak, dan Krisis Keadaban Digital",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi Digital"],
    abstrak: "Banyaknya hoaks di ruang digital dan dampaknya terhadap anak-anak, serta kurangnya kemampuan literasi digital membuat generasi muda sulit membedakan mana informasi yang benar dan salah. Hal ini menimbulkan krisis digital untuk membentuk masyarakat yang bijak di era digital.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-08-15",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 6, Kol. 1-5",
    kataKunci: ["Literasi Digital"],
    lokasiKoleksi: "Arsip Koran Agu 2025",
    fotoUrl: artikel12
  },
  {
    id: "13",
    judul: "Menyelamatkan Aksara lewat Digitalisasi",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi Digital", "Bahasa & Budaya"],
    abstrak: "Pentingnya Digitalisasi untuk menyelamatkan aksara Nusantara yang terancam punah dengan mendokumentasikan dan mengembangkan aksara lokal seperti Jawa, Batak, Bugis dan lainnya kedalam bentuk digital dan dapat dilestarikan serta lebih mudah untuk diakses.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-08-20",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 12, Kol. 1-4",
    kataKunci: ["Literasi Digital", "Aksara"],
    lokasiKoleksi: "Arsip Koran Agu 2025",
    fotoUrl: artikel13
  },
  {
    id: "14",
    judul: "Ingin Angkat Sejarah Lokal Lewat Dongeng Ilustrasi",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi"],
    abstrak: "Upaya pelestarian sejarah dan budaya lokal jeng kabupaten Blitar berupaya mengenalkan sejarah dan budaya lokal melalui dongeng ilustrasi. Melalui publik speaking dan ide kreatif, yang dikemas dengan menarik dan diharapkan mampu meningkatkan minat baca sekaligus mempromosikan potensi budaya di Blitar.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-08-25",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 15, Kol. 1-5",
    kataKunci: ["Literasi"],
    lokasiKoleksi: "Arsip Koran Agu 2025",
    fotoUrl: artikel14
  },
  {
    id: "15",
    judul: "Prosa Perjalanan: Sebuah Dokumenter Naratif",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi"],
    abstrak: "Prosa perjalanan adalah tulisan secara singkat tentang perjalanan yang tidak hanya mencatat fakta, tapi juga menambahkan perasaan, imajinasi, serta pengalaman pribadi. Tulisan perjalanan ini akan menjadi lebih hidup dan menarik.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-09-01",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 10, Kol. 1-4",
    kataKunci: ["Literasi"],
    lokasiKoleksi: "Arsip Koran Sep 2025",
    fotoUrl: artikel15
  },
  {
    id: "16",
    judul: "Pengguna Medsos Didominasi Gen Z",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi Digital"],
    abstrak: "Media sosial sekarang yang didominasi Gen Z dengan aktivitas mereka di ruang digital yang memperlihatkan peran besar media sosial dalam kehidupan sehari-hari, mulai dari hiburan, komunikasi, hingga pencarian informasi. Hal ini juga berkaitan erat dengan pentingnya literasi digital.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-09-05",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 8, Kol. 1-5",
    kataKunci: ["Literasi"],
    lokasiKoleksi: "Arsip Koran Sep 2025",
    fotoUrl: artikel15
  },
  {
    id: "17",
    judul: "Literasi Digital Bekal Bersikap Kritis",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi Digital"],
    abstrak: "Pentingnya literasi digital sebagai kemampuan dasar yang harus dimiliki masyarakat di era informasi. Literasi digital tidak hanya mencakup keterampilan menggunakan teknologi, tetapi juga kemampuan berpikir kritis, memilah informasi, serta mencegah penyebaran hoaks.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-09-10",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 6, Kol. 1-4",
    kataKunci: ["Literasi Digital"],
    lokasiKoleksi: "Arsip Koran Sep 2025",
    fotoUrl: artikel17
  },
  {
    id: "18",
    judul: "Menghidupkan Perpustakaan Lewat Inovasi",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Perpustakaan"],
    abstrak: "Novy Diana Fauzie, Kepala Perpustakaan Universitas Muhammadiyah Yogyakarta (UMY), yang berhasil menghidupkan perpustakaan melalui berbagai inovasi layanan dan program literasi digital. Dengan pengalaman lebih dari 14 tahun, Novy memanfaatkan teknologi informasi untuk mengembangkan layanan MyPustaka.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-09-12",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 12, Kol. 1-6",
    kataKunci: ["Inovasi Perpustakaan"],
    lokasiKoleksi: "Arsip Koran Sep 2025",
    fotoUrl: artikel18
  },
  {
    id: "19",
    judul: "Layanan Offline Jadi Andalan",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Perpustakaan"],
    abstrak: "Layanan perpustakaan di Kabupaten Trenggalek tahun 2025 yang masih didominasi oleh kunjungan secara offline. Meskipun transformasi digital terus didorong, minat masyarakat terhadap layanan langsung tetap tinggi dengan jumlah pengunjung mencapai lebih dari 24 ribu orang.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-09-15",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 16, Kol. 1-5",
    kataKunci: ["Perpustakaan"],
    lokasiKoleksi: "Arsip Koran Sep 2025",
    fotoUrl: artikel19
  },
  {
    id: "21",
    judul: "Minat Baca Diklaim Masih Ada",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi"],
    abstrak: "Minat baca masyarakat Tulungagung yang terlihat pada kegiatan Hari Kunjung Perpustakaan 2025, ditandai dengan pameran dan bazar buku yang menarik banyak pengunjung dari berbagai kalangan, mulai dari pelajar hingga mahasiswa.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-09-18",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 15, Kol. 1-5",
    kataKunci: ["Minat Baca"],
    lokasiKoleksi: "Arsip Koran Sep 2025",
    fotoUrl: artikel21
  },
  {
    id: "22",
    judul: "Petualangan Literasi di Perpustakaan Rungkut",
    pengarang: "Tim Tribun Academy",
    subjek: ["Literasi Anak"],
    abstrak: "Kegiatan literasi yang diadakan di Perpustakaan Rungkut, Surabaya, dalam rangka memperingati Bulan Pancasila. Kegiatan ini melibatkan siswa sekolah dasar yang diajak mengenal nilai-nilai Pancasila melalui cerita rakyat, permainan tradisional, dan kegiatan interaktif.",
    namaMedia: "Tribun Academy",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-09-21",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 2, Kol. 1-4",
    kataKunci: ["Literasi Anak"],
    lokasiKoleksi: "Arsip Koran Sep 2025",
    fotoUrl: artikel22
  },
  {
    id: "23",
    judul: "Jumlah Pustakawan Masih Timpang dan Belum Merata",
    pengarang: "Tim Redaksi Kompas",
    subjek: ["Pustakawan", "Perpustakaan"],
    abstrak: "Meskipun jumlah perpustakaan meningkat setiap tahun, pertumbuhan pustakawan masih rendah dan belum merata antar daerah. Kondisi ini menyebabkan banyak perpustakaan, terutama di wilayah timur Indonesia, kekurangan tenaga pustakawan profesional dan bersertifikat.",
    namaMedia: "Kompas",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-09-16",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 1, 15, Kol. 1-7",
    kataKunci: ["Pustakawan", "Ketimpangan", "Literasi", "Perpustakaan Nasional"],
    lokasiKoleksi: "Arsip Koran Sep 2025",
    fotoUrl: artikel23
  },
  {
    id: "24",
    judul: "Agar Perpustakaan Tak Menjadi Sarang Hantu",
    pengarang: "Tim Redaksi Kompas",
    subjek: ["Perpustakaan", "Pustakawan"],
    abstrak: "Program Badik Pustaka yang digagas oleh pustakawan Hery Syahrullah di Dinas Perpustakaan Kota Parepare, Sulawesi Selatan. Melalui kegiatan seperti kelas literasi, pelatihan jurnalistik, dan pameran karya, pustakawan berupaya menarik minat kunjungan masyarakat ke perpustakaan.",
    namaMedia: "Kompas",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-09-16",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 1, 15, Kol. 1-6",
    kataKunci: ["Inovasi Pustakawan"],
    lokasiKoleksi: "Arsip Koran Sep 2025",
    fotoUrl: artikel24
  },
  {
    id: "25",
    judul: "Mendunia Lewat Pustaka - Friska Titi Nova",
    pengarang: "Tim Redaksi Kompas",
    subjek: ["Literasi", "Pustakawan"],
    abstrak: "Friska Titi Nova, seorang pustakawan yang berawal dari hobi membaca hingga menjadi penggerak literasi internasional. Friska memulai kariernya sebagai pustakawan sekolah di Papua dan berinovasi dalam mengajarkan siswa membaca melalui pendekatan kreatif seperti film, musik, dan proyek literasi.",
    namaMedia: "Kompas",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-09-16",
    tahunTerbit: 2025,
    halamanKolom: "Sosok, Kol. 1-7",
    kataKunci: ["Literasi", "Inovasi Pustakawan", "Pendidikan"],
    lokasiKoleksi: "Arsip Koran Sep 2025",
    fotoUrl: artikel25
  },
  {
    id: "26",
    judul: "Pustakawan, Penjaga Literasi Kurang Gaji",
    pengarang: "Tim Redaksi Kompas",
    subjek: ["Pustakawan"],
    abstrak: "Kondisi kesejahteraan pustakawan di Indonesia yang masih memprihatinkan. Berdasarkan survei Harian Kompas, sekitar 41,7% pustakawan menerima gaji di bawah Rp 2 juta per bulan, dan hanya 14,1% yang memperoleh gaji di atas Rp 7 juta.",
    namaMedia: "Kompas",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-09-15",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 1, Kol. 1-7",
    kataKunci: ["Kesejahteraan Pustakawan"],
    lokasiKoleksi: "Arsip Koran Sep 2025",
    fotoUrl: artikel26
  },
  {
    id: "27",
    judul: "Dongeng Pagi dan Literasi Bagi Generasi Muda Kemudian Hari",
    pengarang: "Tim Redaksi Kompas",
    subjek: ["Literasi Anak"],
    abstrak: "Pentingnya kegiatan dongeng sebagai sarana menumbuhkan literasi dan nilai karakter bagi anak-anak. Dalam acara Hari Literasi Internasional di Happy Hope International Preschool, Gubernur DKI Jakarta Pramono Anung menekankan bahwa literasi tidak hanya soal kemampuan membaca dan menulis.",
    namaMedia: "Kompas",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-09-15",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 12, Kol. 1-6",
    kataKunci: ["Literasi Anak", "Dongeng", "Pendidikan Karakter"],
    lokasiKoleksi: "Arsip Koran Sep 2025",
    fotoUrl: artikel27
  },
  {
    id: "28",
    judul: "Pustakawan Pekerja Informasi Era Digital",
    pengarang: "Tim Redaksi Kompas",
    subjek: ["Pustakawan", "Literasi Digital"],
    abstrak: "Peran pustakawan sebagai pekerja informasi di era digital yang semakin penting dalam mengelola dan menyebarkan informasi yang valid dan terpercaya kepada masyarakat.",
    namaMedia: "Kompas",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-09-16",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 5, Kol. 1-5",
    kataKunci: ["Pustakawan", "Era Digital"],
    lokasiKoleksi: "Arsip Koran Sep 2025",
    fotoUrl: artikel28
  },
  {
    id: "29",
    judul: "Indeks Pembangunan Literasi Masyarakat Kabupaten Blitar Naik",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi"],
    abstrak: "Pembangunan literasi masyarakat Blitar menunjukkan adanya peningkatan, peningkatan ini menunjukkan bahwa minat baca masyarakat terus tumbuh. Faktor pembentuknya mencangkup frekuensi membaca, durasi membaca, serta frekuensi dan durasi akses internet.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-10-17",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 16, Kol. 1-7",
    kataKunci: ["Pembangunan Literasi", "Literasi Masyarakat", "Minat Baca"],
    lokasiKoleksi: "Arsip Koran Okt 2025",
    fotoUrl: artikel29
  },
  {
    id: "30",
    judul: "Tingkatkan Literasi Baca dari Perpustakaan Desa",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi", "Perpustakaan"],
    abstrak: "Dalam upaya meningkatkan minat baca masyarakat, Desa Kedungsigit menghadirkan Pojok Baca di area Balai Desa. Kehadiran Pojok Baca ini terbuka untuk seluruh warga terutama pelajar yang ingin menghabiskan waktu di balai desa sambil menambah wawasan.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-10-20",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 20, Kol. 1-3",
    kataKunci: ["Tingkat Literasi", "Perpustakaan Desa"],
    lokasiKoleksi: "Arsip Koran Okt 2025",
    fotoUrl: artikel30
  },
  {
    id: "31",
    judul: "Literasi Asuransi 45,45 Persen, Inklusi Capai 28,5 Persen",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi Keuangan"],
    abstrak: "Literasi dan inklusi menjadi suatu tantangan dalam industri asuransi. Menurut Indeks Literasi dan Inklusi Keuangan 2025, literasi mengenal perasuransian masih mencapai 45,45 persen. Angka tersebut dibawah sektor perbankan yang mencapai 65,5 persen.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-11-04",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 3, Kol. 1-2",
    kataKunci: ["Literasi Asuransi", "Inklusi Keuangan"],
    lokasiKoleksi: "Arsip Koran Nov 2025",
    fotoUrl: artikel31
  },
  {
    id: "32",
    judul: "Dedikasi untuk Literasi Bencana",
    pengarang: "Tim Redaksi Kompas",
    subjek: ["Literasi Bencana"],
    abstrak: "Melihat kenyataan bahwa masyarakat masih kurang terliterasi soal bencana. Prof. Adi Maulana berdedikasi dalam meningkatkan literasi bencana melalui edukasi publik, riset geologi dan advokasi kebijakan.",
    namaMedia: "Kompas",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-11-05",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 16, Kol. 1-5",
    kataKunci: ["Literasi Bencana", "Edukasi Publik"],
    lokasiKoleksi: "Arsip Koran Nov 2025",
    fotoUrl: artikel32
  },
  {
    id: "33",
    judul: "Kementerian Buku Hasil Penulisan Ulang Sejarah Dirilis Desember",
    pengarang: "Tim Redaksi Jawa Pos",
    subjek: ["Literasi"],
    abstrak: "Menteri Kebudayaan (Menbud) Fadli Zon memastikan bahwa buku sejarah hasil penulisan ulang akan segera diluncurkan pada akhir tahun ini. Rencanannya bertepatan dengan Hari Sejarah tanggal 12 atau 14 Desember.",
    namaMedia: "Jawa Pos",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-10-23",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 7, Kol. 3",
    kataKunci: ["Literasi", "Sejarah", "Buku"],
    lokasiKoleksi: "Arsip Koran Okt 2025",
    fotoUrl: artikel33
  },
  {
    id: "34",
    judul: "Momen Regenerasi Fashion Designer Blitar Raya, Praktik Benahi Presentasi Mood Sketch",
    pengarang: "Tim Radar Blitar",
    subjek: ["Literasi"],
    abstrak: "From Idea to Market with Hand Embroidery Application menjadi tema penting dalam Literasi Fashion Design. Kegiatan TPBIS ini diselenggarakan di UPT Perpustakaan Bung Karno. Kegiatan ini dilakukan secara berkala dengan tema yang berbeda untuk menunjang seorang fashion designer harus memiliki skill.",
    namaMedia: "Radar Blitar",
    jenisTerbitan: "koran",
    tanggalTerbit: "2025-10-23",
    tahunTerbit: 2025,
    halamanKolom: "Hal. 5, 16, Kol. 1, 4",
    kataKunci: ["Literasi", "TPBIS", "Fashion"],
    lokasiKoleksi: "Arsip Koran Okt 2025",
    fotoUrl: artikel34
  }
];

export const statistics = {
  totalArticles: 34,
  newspapers: 34,
  sources: 4,
  years: 1
};
