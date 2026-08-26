# Dokumen Cetak Biru Teknis & Strategi UI/UX
## Proyek Revamp Website Menara Peninsula Hotel Jakarta

---

## 1. Pendahuluan & Ringkasan Eksekutif

### 1.1 Latar Belakang
Menara Peninsula Hotel Jakarta adalah hotel bintang 4 dengan 380 kamar yang berlokasi strategis di kawasan Slipi (perbatasan Jakarta Barat & Jakarta Pusat). Hotel ini memiliki target pasar yang kuat di sektor bisnis (MICE - *Meeting, Incentive, Convention, and Exhibition*) serta wisatawan *leisure*. 

Saat ini, website lama (https://www.menarapeninsula.com/) menghadapi tantangan dalam hal performa pemuatan (loading speed), arsitektur informasi yang kurang modern, ketergantungan yang tinggi pada Online Travel Agencies (OTA) karena rendahnya tingkat konversi pemesanan langsung (*direct booking*), serta kompleksitas bagi tim internal (Sales & Marcom) untuk melakukan pembaruan konten promosi secara cepat dan mandiri.

### 1.2 Tujuan Proyek Revamp
1. **Meningkatkan Direct Booking:** Merancang antarmuka pengguna (UI/UX) yang intuitif dengan alur konversi yang lancar guna mengurangi ketergantungan pada OTA dan menghindari komisi tinggi.
2. **Revitalisasi Citra Brand:** Mengubah visual website agar merepresentasikan citra hotel bintang 4 yang mewah, modern, dinamis, dan *immersive*.
3. **Kemandirian Konten (Content Empowerment):** Menerapkan sistem manajemen konten (CMS) modern yang ramah pengguna agar tim Sales & Marcom dapat mengelola promo, harga kamar, dan acara dengan mudah.
4. **Optimasi Performa Web & SEO:** Mencapai nilai Core Web Vitals yang luar biasa (skor >90 di Google PageSpeed Insights) untuk memberikan pengalaman akses seluler yang mulus serta memuncaki halaman pencarian organik (SEO).

---

## 2. Strategi & Arsitektur UI/UX (Fokus Konversi)

### 2.1 Arsitektur Informasi & Sitemap Rekayasa Ulang
Struktur navigasi baru dirancang minimalis namun informatif. Setiap halaman dirancang dengan pendekatan *mobile-first* karena lebih dari 70% trafik hospitality berasal dari perangkat seluler.

```
[Homepage]
   ├── [Rooms & Suites] ──► [Room Detail (dengan CTA Book Now Persisten)]
   ├── [Dining] ──► [Restoran & Lounge List]
   ├── [Offers & Promos] ──► [Detail Promo dengan Kode Promo Otomatis]
   ├── [MICE & Weddings Hub] ──► [Interactive RFP & Capacity Chart]
   └── [Facilities & Gallery]
```

### 2.2 Alur Pengguna (User Flow) Konversi Cepat
Alur dirancang untuk meminimalkan jumlah klik dari penemuan informasi ke penyelesaian transaksi:
1. **Landing:** Pengguna masuk ke halaman beranda atau landing page kamar via iklan/SEO.
2. **Discovery:** Pengguna langsung disajikan visual kamar yang mewah, testimoni tamu, dan penawaran eksklusif *direct booking* (misalnya: gratis sarapan atau diskon khusus).
3. **Widget Pemesanan:** Booking widget selalu terlihat (*Sticky/Floating*) baik di desktop maupun seluler.
4. **Booking:** Pengguna memasukkan tanggal dan jumlah tamu, lalu dialihkan ke Booking Engine dengan data yang sudah terisi otomatis.

### 2.3 Desain Widget Pemesanan Terintegrasi (*Sticky Book Now*)
* **Desktop:** Widget horizontal yang menempel (*sticky*) di bawah header saat pengguna menggulir ke bawah, atau berbentuk panel samping yang elegan.
* **Mobile:** Tombol floating "Book Now" berwarna kontras (misal: aksen emas/luxury dark) yang selalu berada di bagian bawah layar (*bottom sheet style*) untuk aksesibilitas jempol satu tangan yang optimal.
* **Integrasi Parameter:** Form mencakup tanggal check-in (input kalender visual), check-out, jumlah tamu (dewasa/anak), dan kolom kode promo tersembunyi/ekspansif.

### 2.4 Mikro-Interaksi & Estetika Visual Mewah
* **Hero Section Dinamis:** Mengganti slider gambar statis yang lambat dengan *background video autoplay loop* (tanpa suara, durasi pendek 10-15 detik) yang menampilkan suasana lobi yang megah, kenyamanan kamar, makanan lezat, dan fasilitas kolam renang.
* **Transisi Halus:** Efek *fade-in-up* yang halus saat memuat komponen (*scroll animation*) menggunakan library CSS ringan.
* **Hover State Mewah:** Efek pembesaran gambar tipis (scale 1.05) dengan overlay warna gelap transparan saat kursor diarahkan ke kartu kamar atau promo.

### 2.5 Hub Interaktif MICE & Pernikahan (Wedding)
Halaman MICE statis diganti dengan portal penjualan B2B interaktif:
* **Tabel Kapasitas Interaktif:** Filter kapasitas berdasarkan tipe tata letak ruangan (Classroom, Theatre, U-Shape, Banquet) dan jumlah tamu.
* **Interactive Floor Plan:** Denah ruangan 2D/3D yang interaktif, di mana pengguna dapat mengeklik area tertentu untuk melihat visual aslinya.
* **Form RFP (Request for Proposal) Cepat:** Form berperingkat (step-by-step form) yang ramah pengguna untuk mengumpulkan kebutuhan tanggal acara, tipe acara, jumlah tamu, kebutuhan katering, dan detail kontak secara cepat dan langsung masuk ke database tim Sales.

---

## 3. Rekomendasi Tumpukan Teknologi (Tech Stack)

Untuk anggaran tingkat menengah-atas (mid-to-high tier) dengan estimasi budget pengembangan sekitar **Rp 100.000.000 (Seratus Juta Rupiah)**, kami merekomendasikan pendekatan **Jamstack / Headless Architecture** guna menghindari overload server dan menjamin kecepatan loading maksimum.

| Komponen | Pilihan Teknologi | Alasan Pemilihan |
| :--- | :--- | :--- |
| **Frontend Framework** | **Next.js (React)** atau **Nuxt.js (Vue)** | Menyediakan Server-Side Rendering (SSR) dan Static Site Generation (SSG). Menghasilkan SPA feel yang sangat cepat saat berpindah halaman dan sangat ramah SEO. |
| **Headless CMS** | **Strapi (Self-hosted)** atau **WordPress (Decoupled)** | Tim Marcom tetap mendapatkan panel admin yang mudah digunakan untuk mengedit konten, sementara frontend terpisah sepenuhnya melalui REST/GraphQL API. WordPress decoupled dipilih jika tim terbiasa dengan ekosistem WordPress. |
| **Penyimpanan Media** | **Cloudinary** atau **AWS S3 + Cloudflare CDN** | Mengotomatiskan konversi gambar ke WebP/AVIF, kompresi otomatis, dan pengiriman media super cepat dari server terdekat. |
| **Hosting & Deployment** | **Vercel** atau **Netlify** | Menyediakan infrastruktur serverless global dengan integrasi Git CI/CD otomatis untuk pembaharuan kode yang aman. |
| **Database (CMS)** | **PostgreSQL** | Standar keandalan data tinggi untuk menyimpan data relasional CMS. |

### Alokasi Anggaran Pengembangan (Estimasi Rp 100.000.000)
1. **Desain UI/UX & Wireframing (Figma):** Rp 20.000.000
2. **Pengembangan Frontend (Next.js/Nuxt.js):** Rp 35.000.000
3. **Pengaturan Headless CMS & Integrasi API:** Rp 25.000.000
4. **Integrasi Pihak Ketiga & Payment Gateway:** Rp 10.000.000
5. **QA, Performance Tuning, SEO, & Deployment:** Rp 10.000.000

---

## 4. Integrasi Pihak Ketiga

Situs web baru bertindak sebagai gerbang depan digital yang terhubung langsung ke ekosistem operasional hotel:

```
[Website Frontend]
       │
       ├─► [Booking Engine API / Redirect] (D-EDGE / SynXis / Siteminder)
       ├─► [Payment Gateway API] (Midtrans / Xendit)
       └─► [Channel Manager] (Sinkronisasi Stok Kamar ke OTA secara Real-time)
```

1. **Booking Engine (BE):**
   Integrasi parameter URL transfer langsung dengan sistem BE Menara Peninsula saat ini (misalnya D-EDGE atau SynXis). Hal ini memastikan harga dan ketersediaan kamar yang dicari tamu di website utama langsung tercermin secara real-time pada halaman transaksi pemesanan.
2. **Payment Gateway (PG):**
   Integrasi dengan gateway lokal Indonesia seperti **Midtrans** atau **Xendit**. Fitur ini mempermudah pembayaran lokal tamu Indonesia (Virtual Account, E-Wallet seperti GoPay/OVO/Dana, kartu kredit lokal, dan QRIS) yang sering kali gagal diproses jika hanya menggunakan sistem kartu kredit tradisional bawaan booking engine global.
3. **Channel Manager (CM):**
   Integrasi API untuk memastikan sinkronisasi inventaris kamar antara website utama, booking engine, dan OTA (seperti Agoda, Booking.com, Traveloka). Perubahan harga promo di website langsung terdistribusi ke seluruh kanal penjualan secara otomatis demi menghindari *overbooking*.

---

## 5. Fitur Performa, SEO, & Keamanan

### 5.1 Performa & Optimasi Media (Core Web Vitals)
* **Format Gambar Next-Gen:** Seluruh aset gambar hotel dikonversi otomatis ke format **WebP** atau **AVIF** yang menghemat ukuran file hingga 50-70% tanpa mengurangi kualitas visual.
* **Lazy Loading & Placeholder:** Menggunakan teknik blur-up placeholder untuk memberikan transisi visual yang baik saat gambar dimuat secara bertahap.
* **Asset Offloading:** Seluruh file media berat (foto resolusi tinggi, video kamar, brosur MICE) di-host di CDN (Content Delivery Network) global untuk meminimalkan beban server utama.

### 5.2 Strategi Technical SEO
* **Hotel Schema Markup (JSON-LD):** Menyematkan metadata terstruktur di setiap halaman agar Google dapat menampilkan hasil pencarian kaya (*Rich Snippets*), termasuk informasi harga terendah, ulasan tamu, bintang hotel, dan lokasi geografis.
* **Sitemap Dinamis:** Pembuatan sitemap otomatis yang selalu diperbarui ketika ada penawaran promo baru atau tipe kamar baru yang diterbitkan dari CMS.
* **Lokalisasi Konten (Multilingual):** Penyediaan opsi bahasa Indonesia dan bahasa Inggris dengan penandaan tag `hreflang` yang benar agar Google dapat merekomendasikan bahasa yang tepat sesuai preferensi pengguna.

### 5.3 Keamanan Standar Industri
* **SSL/TLS Terenkripsi:** Enkripsi data end-to-end yang ketat untuk seluruh interaksi form pemesanan dan RFP.
* **Web Application Firewall (WAF):** Integrasi dengan Cloudflare untuk menangkal serangan DDoS, brute force, dan menyaring trafik bot berbahaya.
* **Kepatuhan Privasi (GDPR & PDP):** Implementasi banner persetujuan cookie (*cookie consent banner*) demi mematuhi undang-undang perlindungan data pribadi lokal (UU PDP) maupun internasional.

---

## 6. Referensi & Inspirasi (Benchmarking)

| Referensi Website | Mengapa Menjadi Referensi? | Fitur yang Harus Ditiru untuk Menara Peninsula |
| :--- | :--- | :--- |
| **The Langham, Jakarta** | Standar kemewahan hospitality tertinggi di Jakarta. | Penggunaan video sinematik berkualitas tinggi di Hero Section, tipografi serif modern yang elegan, serta navigasi yang minim gangguan. |
| **Hotel Indonesia Kempinski** | Representasi hotel ikonik dan bersejarah yang dinamis di pusat kota. | Arsitektur informasi yang sangat rapi untuk menyeimbangkan penawaran kamar dan promosi kuliner/event tanpa membuat halaman berantakan. |
| **Alila SCBD Jakarta** | Konsep hotel bisnis modern dan gaya hidup urban yang dinamis. | Penempatan widget pemesanan yang sangat menonjol (*prominent booking widget*), desain *card-layout* yang modern, dan integrasi peta interaktif. |
| **The Mulia Bali & Jakarta** | Kecepatan luar biasa dalam memuat situs web yang penuh aset media berat. | Teknik pemuatan galeri foto yang cepat (*immersive gallery*), pengoptimalan Core Web Vitals, dan alur konversi galeri ke booking engine. |

---

## 7. Rencana Kerja & Garis Waktu Pengembangan

Proyek revamp ini diproyeksikan memakan waktu **16 Minggu (4 Bulan)** dengan pembagian fase sebagai berikut:

```
[Fase 1: Analisis & Wireframe] (Minggu 1-4)
       │
[Fase 2: Desain UI/UX & Figma] (Minggu 5-8)
       │
[Fase 3: Pengembangan Frontend & CMS] (Minggu 9-12)
       │
[Fase 4: QA, Integrasi API & Pelatihan Staf] (Minggu 13-14)
       │
[Fase 5: Uji Coba, Launching & Handover] (Minggu 15-16)
```

1. **Fase 1: Discovery & Sitemap Wireframing (Minggu 1-4)**
   * Penyelarasan dengan tim Sales, Marketing, dan IT Menara Peninsula.
   * Pembuatan arsitektur informasi baru dan wireframe hitam-putih untuk user flow.
2. **Fase 2: Visual Design (Figma) (Minggu 5-8)**
   * Pembuatan aset visual, pemilihan warna brand yang lebih mewah, tipografi, dan pembuatan prototipe desain interaktif untuk versi mobile dan desktop.
3. **Fase 3: Frontend & CMS Development (Minggu 9-12)**
   * Pembuatan frontend Next.js/Nuxt.js.
   * Integrasi Strapi/WordPress Headless CMS.
   * Optimasi media dan pengisian data konten awal.
4. **Fase 4: Integrasi & Pengujian (Minggu 13-14)**
   * Integrasi API Booking Engine dan Payment Gateway lokal.
   * Pengujian kompatibilitas browser, keamanan data, dan kepatuhan GDPR/PDP.
   * Pelatihan bagi staf Marcom hotel untuk pengelolaan CMS.
5. **Fase 5: Peluncuran & Pemeliharaan (Minggu 15-16)**
   * Migrasi DNS dan peluncuran website baru secara penuh.
   * Pemantauan analitik performa pasca-peluncuran dan penyerahan dokumentasi teknis lengkap (*handover*).
