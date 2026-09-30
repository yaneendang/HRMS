# PERANCANGAN APLIKASI HRMS
## Human Resource Management System

---

# 1. Deskripsi Aplikasi

## 1.1 Nama Aplikasi

**Human Resource Management System (HRMS)**

## 1.2 Deskripsi Aplikasi

Human Resource Management System (HRMS) merupakan aplikasi berbasis web yang dirancang untuk membantu proses pengelolaan data kepegawaian dan sumber daya manusia dalam suatu perusahaan.

Aplikasi ini digunakan untuk mengelola data karyawan, departemen, jabatan, absensi, cuti, serta laporan kepegawaian.

Dengan adanya aplikasi HRMS, proses pengelolaan data kepegawaian dapat dilakukan secara lebih terstruktur, mudah dipantau, dan terpusat dalam satu sistem.

## 1.3 Tujuan Aplikasi

Tujuan dari perancangan aplikasi HRMS adalah:

1. Membantu admin atau bagian HR dalam mengelola data karyawan.
2. Mempermudah pengelolaan data departemen dan jabatan.
3. Membantu pencatatan data absensi karyawan.
4. Membantu pengelolaan data cuti karyawan.
5. Menyediakan informasi kepegawaian melalui dashboard.
6. Menyediakan laporan kepegawaian yang dapat digunakan oleh admin.
7. Membuat proses pengelolaan data kepegawaian menjadi lebih terstruktur.

## 1.4 Pengguna Sistem

Pengguna utama aplikasi adalah:

### Admin / HR

Admin atau bagian Human Resources memiliki hak akses untuk:

- Melihat dashboard.
- Mengelola data karyawan.
- Mengelola departemen.
- Mengelola jabatan.
- Melihat data absensi.
- Mengelola data cuti.
- Melihat laporan kepegawaian.
- Mencetak laporan.
- Keluar dari sistem.

---

# 2. Struktur Menu / Hierarki Aplikasi

Struktur menu aplikasi HRMS dirancang untuk mempermudah admin dalam mengakses setiap fitur sistem.

```text
HRMS
│
├── Dashboard
│
├── Data Master
│   ├── Data Karyawan
│   ├── Departemen
│   └── Jabatan
│
├── Kepegawaian
│   ├── Absensi
│   └── Cuti
│
├── Laporan
│
└── Logout
2.1 Dashboard

Dashboard merupakan halaman utama aplikasi setelah admin berhasil masuk ke sistem.

Dashboard menampilkan ringkasan informasi kepegawaian seperti:

Total karyawan.
Total karyawan aktif.
Total karyawan cuti.
Total karyawan tidak hadir.
Grafik jumlah karyawan berdasarkan departemen.
Grafik status karyawan.
Data absensi terbaru.
2.2 Data Master

Data Master merupakan menu yang digunakan untuk mengelola data utama aplikasi.

Data Karyawan

Fitur Data Karyawan digunakan untuk:

Melihat data karyawan.
Menambahkan data karyawan.
Mengubah data karyawan.
Menghapus data karyawan.
Mencari data karyawan.
Memfilter data karyawan.
Departemen

Fitur Departemen digunakan untuk mengelola data departemen perusahaan.

Jabatan

Fitur Jabatan digunakan untuk mengelola data jabatan yang dimiliki oleh karyawan.

2.3 Kepegawaian

Menu Kepegawaian digunakan untuk mengelola aktivitas yang berhubungan dengan karyawan.

Absensi

Digunakan untuk melihat dan mengelola data kehadiran karyawan.

Cuti

Digunakan untuk mengelola data pengajuan cuti karyawan.

2.4 Laporan

Menu Laporan digunakan untuk menampilkan ringkasan data kepegawaian.

Admin dapat melakukan filter berdasarkan:

Periode.
Departemen.
Status karyawan.

Laporan dapat digunakan sebagai dokumentasi dan dapat dicetak.

2.5 Logout

Menu Logout digunakan untuk keluar dari aplikasi dan mengakhiri sesi pengguna.

3. Perancangan ERD

Entity Relationship Diagram (ERD) digunakan untuk menggambarkan hubungan antarentitas yang terdapat pada aplikasi HRMS.

Entitas yang digunakan dalam aplikasi adalah:

DEPARTEMEN
JABATAN
KARYAWAN
ABSENSI
CUTI
3.1 Relasi Antarentitas

Relasi antarentitas pada sistem adalah:

Satu departemen memiliki banyak karyawan.
Satu jabatan dapat dimiliki oleh banyak karyawan.
Satu karyawan memiliki banyak data absensi.
Satu karyawan dapat mengajukan banyak data cuti.
3.2 ERD Menggunakan Mermaid
3.3 Penjelasan Entitas
DEPARTEMEN

Entitas DEPARTEMEN digunakan untuk menyimpan data departemen dalam perusahaan.

Atribut:

id_departemen sebagai Primary Key.
nama_departemen sebagai nama departemen.
JABATAN

Entitas JABATAN digunakan untuk menyimpan data jabatan karyawan.

Atribut:

id_jabatan sebagai Primary Key.
nama_jabatan sebagai nama jabatan.
KARYAWAN

Entitas KARYAWAN digunakan untuk menyimpan data utama karyawan.

Atribut:

id_karyawan sebagai Primary Key.
nik sebagai nomor identitas karyawan.
nama sebagai nama karyawan.
email sebagai alamat email.
no_hp sebagai nomor telepon.
alamat sebagai alamat karyawan.
id_departemen sebagai Foreign Key.
id_jabatan sebagai Foreign Key.
status sebagai status karyawan.
ABSENSI

Entitas ABSENSI digunakan untuk menyimpan data kehadiran karyawan.

Atribut:

id_absensi sebagai Primary Key.
id_karyawan sebagai Foreign Key.
tanggal sebagai tanggal absensi.
jam_masuk sebagai waktu masuk.
jam_keluar sebagai waktu keluar.
status sebagai status kehadiran.
CUTI

Entitas CUTI digunakan untuk menyimpan data pengajuan cuti karyawan.

Atribut:

id_cuti sebagai Primary Key.
id_karyawan sebagai Foreign Key.
tanggal_mulai sebagai tanggal awal cuti.
tanggal_selesai sebagai tanggal akhir cuti.
alasan sebagai alasan cuti.
status sebagai status pengajuan cuti.
4. User Flow

Alur utama penggunaan aplikasi HRMS adalah sebagai berikut:

                    ┌──────────────┐
                    │    LOGIN     │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │  DASHBOARD   │
                    └──────┬───────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
   DATA MASTER       KEPEGAWAIAN         LAPORAN
          │                │                │
    ┌─────┼─────┐      ┌───┴───┐           │
    │     │     │      │       │           │
    ▼     ▼     ▼      ▼       ▼           ▼
Karyawan Dept. Jabatan Absensi Cuti    Cetak Laporan
5. Perancangan Design System

Design System digunakan sebagai pedoman visual agar seluruh halaman aplikasi HRMS memiliki tampilan yang konsisten.

Design System terdiri dari:

Color Palette.
Typography.
Button.
Input.
Card.
Table.
Sidebar.
Navigation.
6. Color Palette

Warna utama aplikasi menggunakan warna biru/indigo yang memberikan kesan profesional dan sesuai dengan kebutuhan aplikasi administrasi kepegawaian.

Nama Warna	HEX	Penggunaan
Primary	#4F46E5	Tombol utama dan elemen utama
Secondary	#6366F1	Elemen pendukung
Background	#F8FAFC	Latar belakang halaman
Text	#1E293B	Teks utama
Success	#22C55E	Status aktif/berhasil
Warning	#F59E0B	Status peringatan
Danger	#EF4444	Hapus/kesalahan
7. Typography

Font yang digunakan pada desain aplikasi adalah:

Inter

Pengaturan ukuran typography:

Heading 1 : 32px / Bold
Heading 2 : 24px / Bold
Heading 3 : 20px / Semi Bold
Body      : 16px / Regular
Small     : 14px / Regular

Typography digunakan secara konsisten pada seluruh halaman aplikasi.

8. Komponen UI
8.1 Button

Button digunakan sebagai elemen interaksi pengguna.

Primary Button

Digunakan untuk aksi utama seperti:

Tambah Karyawan.
Simpan.
Tampilkan.

Warna utama:

#4F46E5
Secondary Button

Digunakan untuk aksi tambahan seperti:

Batal.
Reset.
Danger Button

Digunakan untuk aksi yang berhubungan dengan penghapusan data.

Contoh:

Hapus

Warna:

#EF4444
8.2 Input

Input digunakan untuk menerima data dari pengguna.

Contoh:

Nama Karyawan
[ Masukkan nama karyawan ]

Input digunakan pada halaman Form Karyawan.

8.3 Card

Card digunakan untuk menampilkan informasi secara ringkas.

Contoh:

Total Karyawan
1.248

Card digunakan pada halaman Dashboard dan Laporan.

8.4 Table

Table digunakan untuk menampilkan data karyawan dan laporan.

Contoh struktur tabel:

No | NIK | Nama | Departemen | Jabatan | Status | Aksi
8.5 Sidebar

Sidebar digunakan sebagai navigasi utama aplikasi.

Struktur sidebar:

HRMS

Dashboard

DATA MASTER
- Data Karyawan
- Departemen
- Jabatan

KEPEGAWAIAN
- Absensi
- Cuti

Laporan

Logout
9. High-Fidelity UI Design

High-Fidelity UI dibuat berdasarkan hasil rancangan awal menggunakan Stitch dan kemudian dikembangkan pada Figma.

Halaman yang dirancang terdiri dari:

Design System.
Dashboard.
Data Karyawan.
Form Karyawan.
Laporan.
10. Halaman Design System

Halaman Design System berisi komponen dasar yang digunakan pada aplikasi.

Komponen yang dirancang meliputi:

Color Palette.
Typography.
Button.
Input.
Card.
Table.

Design System digunakan sebagai acuan dalam pembuatan halaman aplikasi agar memiliki tampilan yang konsisten.

11. Halaman Dashboard

Dashboard merupakan halaman utama aplikasi HRMS.

Dashboard menampilkan beberapa informasi seperti:

Total Karyawan.
Karyawan Aktif.
Karyawan Cuti.
Karyawan Tidak Hadir.
Grafik jumlah karyawan berdasarkan departemen.
Grafik status karyawan.
Data absensi terbaru.

Dashboard dirancang agar admin dapat memperoleh gambaran umum mengenai kondisi kepegawaian dengan cepat.

12. Halaman Data Karyawan

Halaman Data Karyawan digunakan untuk mengelola data karyawan.

Fitur yang tersedia:

Search data karyawan.
Filter departemen.
Filter status.
Tambah karyawan.
Edit data karyawan.
Hapus data karyawan.
Pagination.

Struktur tabel:

No
NIK
Nama
Departemen
Jabatan
Status
Aksi
13. Halaman Form Karyawan

Halaman Form Karyawan digunakan untuk menambahkan atau mengubah data karyawan.

Field yang digunakan:

NIK
Nama Lengkap
Email
Nomor HP
Alamat
Departemen
Jabatan
Status

Tombol:

Batal
Simpan

Pada tahap implementasi, form akan dilengkapi dengan validasi JavaScript.

Validasi yang direncanakan:

NIK wajib diisi.
Nama wajib diisi.
Email harus memiliki format yang benar.
Nomor HP wajib diisi.
Departemen wajib dipilih.
Jabatan wajib dipilih.
Status wajib dipilih.
14. Halaman Laporan

Halaman Laporan digunakan untuk menampilkan informasi kepegawaian.

Filter laporan:

Periode
Departemen
Status

Tombol:

Tampilkan
Cetak

Ringkasan informasi:

Total Karyawan.
Karyawan Aktif.
Karyawan Tidak Aktif.
Karyawan Cuti.

Tabel laporan:

No
NIK
Nama
Departemen
Jabatan
Status
Tanggal Bergabung
15. Slicing dan Layouting

Pada Milestone 2, desain yang telah dibuat pada Figma akan diterjemahkan ke dalam HTML dan CSS.

Tahap slicing meliputi:

Mengambil warna dari desain Figma.
Mengambil ukuran font.
Mengambil ukuran padding dan margin.
Mengambil ukuran komponen.
Membuat struktur HTML.
Membuat CSS.
Membuat layout responsif menggunakan Flexbox atau Grid.

Layout utama akan terdiri dari:

┌─────────────────────────────────────┐
│              HEADER                 │
├──────────────┬──────────────────────┤
│              │                      │
│   SIDEBAR    │     CONTENT AREA     │
│              │                      │
│              │                      │
└──────────────┴──────────────────────┘
16. Rencana Struktur Folder Project

Struktur folder project HRMS yang digunakan adalah:

HRMS/
│
├── docs/
│   └── PERANCANGAN.md
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── script.js
│   │
│   └── img/
│
├── pages/
│   ├── dashboard.html
│   ├── data-master.html
│   ├── form.html
│   └── laporan.html
│
└── index.html

Keterangan:

docs/

Digunakan untuk menyimpan dokumentasi perancangan aplikasi.

assets/css/

Digunakan untuk menyimpan file CSS.

assets/js/

Digunakan untuk menyimpan JavaScript.

assets/img/

Digunakan untuk menyimpan gambar dan aset visual.

pages/

Digunakan untuk menyimpan halaman HTML aplikasi.

index.html

Digunakan sebagai halaman utama atau login admin.

17. Link Dokumentasi
17.1 Link Stitch

Hasil perancangan awal menggunakan Stitch:

https://stitch.withgoogle.com/projects/6875176548037012603

17.2 Link Figma

Hasil perancangan High-Fidelity UI menggunakan Figma:

https://www.figma.com/design/x0uEfCRHLRTbbgtHj5tOsR/HRMS---Human-Resource-Management-System?node-id=1-187&t=bVLtpfnj0dHk49qj-1

(image.png)

18. Dokumentasi Hasil Rancangan

Hasil rancangan aplikasi HRMS pada Figma terdiri dari beberapa bagian utama.

18.1 Design System

Berisi:

Color Palette.
Typography.
Button.
Input.
Card.
Table.
18.2 Dashboard

Berisi ringkasan data kepegawaian, grafik, card informasi, dan data absensi terbaru.

18.3 Data Karyawan

Berisi tabel data karyawan dengan fitur pencarian, filter, tambah, edit, dan hapus.

18.4 Form Karyawan

Berisi form input data karyawan yang terdiri dari NIK, nama, email, nomor HP, alamat, departemen, jabatan, dan status.

18.5 Laporan

Berisi ringkasan dan tabel laporan kepegawaian berdasarkan filter periode, departemen, dan status.

19. Hubungan dengan Milestone

Perancangan ini menjadi dasar untuk pelaksanaan tugas pada setiap milestone.

Milestone 1

Tahap perencanaan dan desain:

Perencanaan struktur menu.
ERD.
User Flow.
Design System.
Wireframing.
High-Fidelity UI.
Dokumentasi Stitch.
Dokumentasi Figma.
Milestone 2

Tahap Slicing dan Layouting:

Mengubah desain Figma menjadi HTML.
Membuat CSS.
Membuat Sidebar.
Membuat Header.
Membuat Content Area.
Membuat Footer.
Membuat layout responsif.
Milestone 3

Tahap implementasi komponen dan interaktivitas:

Dashboard.
Data Master.
Form Karyawan.
Laporan.
JavaScript.
Validasi Form.
Modal konfirmasi.
Toggle Sidebar.
Manipulasi data pada tabel.
Integrasi Chart.js untuk grafik.
20. Kesimpulan

Perancangan aplikasi Human Resource Management System (HRMS) telah dilakukan melalui beberapa tahapan, yaitu perencanaan struktur menu, perancangan ERD, pembuatan user flow, penyusunan Design System, serta pembuatan High-Fidelity UI menggunakan Stitch dan Figma.

Aplikasi HRMS dirancang untuk membantu pengelolaan data kepegawaian yang meliputi data karyawan, departemen, jabatan, absensi, cuti, dan laporan.

Hasil perancangan ini selanjutnya akan digunakan sebagai dasar untuk proses Slicing dan Layouting pada Milestone 2 serta implementasi interaktivitas menggunakan JavaScript pada Milestone 3.
