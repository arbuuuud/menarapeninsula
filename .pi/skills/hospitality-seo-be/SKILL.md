---
name: hospitality-seo-be
description: Skill khusus untuk optimasi SEO teknis hospitality, skema data hotel, integrasi Booking Engine, dan penanganan alur reservasi website perhotelan bintang 4-5.
---

# Hospitality & Luxury Booking Engine Skill

Skill ini memandu AI dalam melakukan audit, optimasi, dan implementasi kode untuk meningkatkan direct booking dan performa web pada website hotel mewah.

## Fitur Utama

- **Integrasi Booking Engine (BE):** Rekomendasi parameter widget, sticky widgets, parameter URL transfer (e.g. check-in, check-out, guests, promo code).
- **Hospitality Schema Markup:** Struktur JSON-LD yang kompatibel dengan Google Rich Snippets untuk Hotel, Room types, LocalBusiness, dan Event (MICE).
- **UX Konversi Kamar:** Struktur landing page kamar yang memicu konversi cepat (CTA "Book Now" persisten, galeri foto teroptimasi, highlight amenities penting).

## Panduan Implementasi

### 1. Struktur JSON-LD (Schema Markup) Hotel

Gunakan JSON-LD berikut sebagai cetak biru di setiap halaman detail hotel atau beranda:

```json
{
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Menara Peninsula Hotel Jakarta",
  "description": "Hotel bisnis dan MICE bintang 4 strategis di Slipi, Jakarta Barat.",
  "image": "https://www.menarapeninsula.com/assets/hero-image.webp",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Letnan Jenderal S. Parman No.78, Slipi",
    "addressLocality": "Jakarta Barat",
    "addressRegion": "DKI Jakarta",
    "postalCode": "11410",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-6.198943",
    "longitude": "106.799307"
  },
  "telephone": "+62-21-5350888",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "4"
  },
  "priceRange": "$$ (Rp 600,000 - Rp 1,500,000 per night)"
}
```

### 2. Standardisasi Parameter Booking Widget

Saat menghubungkan form input hotel ke Booking Engine (e.g. SynXis, D-EDGE, Siteminder), gunakan format parsing URL berikut untuk mengarahkan pengguna ke halaman hasil pencarian kamar:

```javascript
/**
 * Fungsi untuk mengarahkan user ke Booking Engine eksternal
 * dengan format query parameter standar.
 */
function redirectToBookingEngine(checkInDate, checkOutDate, adults, children, promoCode = '') {
  const baseUrl = 'https://booking.menarapeninsula.com/reserve/';
  
  // Format check-in & check-out ke YYYY-MM-DD
  const formatDate = (date) => new Date(date).toISOString().split('T')[0];
  
  const params = new URLSearchParams({
    checkin: formatDate(checkInDate),
    checkout: formatDate(checkOutDate),
    adults: adults.toString(),
    children: children.toString(),
    hotel_code: 'MPJ11410' // Contoh kode hotel
  });

  if (promoCode) {
    params.append('promo', promoCode);
  }

  window.open(`${baseUrl}?${params.toString()}`, '_blank');
}
```

### 3. Checklist Audit Performa (Core Web Vitals)
- Gunakan Next.js `<Image />` atau Nuxt `<NuxtImg />` untuk konversi otomatis gambar ke format WebP/AVIF dengan dynamic sizing.
- Tempatkan Video Hero di section paling atas dengan tag `preload="metadata"` dan attributes `muted autoplay loop playsinline`. Matikan video autoplay jika user berada dalam mode data-saver.
