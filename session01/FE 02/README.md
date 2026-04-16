# 🚀 Mini Project FE-02 — Landing Page Sederhana

## 📋 Tentang Project Ini
Landing page sederhana yang dibangun menggunakan **HTML & CSS murni** (tanpa framework).
Merupakan Mini Project dari Modul **FE-02: CSS Dasar** — Fullstack Engineer Bootcamp.

---

## 📁 Struktur File

```
landing-page/
├── index.html    ← Semua struktur HTML di sini
├── style.css     ← Semua styling CSS di sini
└── README.md     ← Dokumentasi project ini
```

---

## 🎯 Konsep CSS yang Dipraktikkan

| Konsep | Digunakan Di | Property |
|--------|-------------|----------|
| **Flexbox** | Navbar, Hero, Fitur, Tentang, Footer | `display: flex`, `justify-content`, `align-items`, `gap` |
| **CSS Variables** | Seluruh file | `:root { --nama: nilai; }`, `var(--nama)` |
| **Hover Effect** | Kartu, Tombol, Link | `transition`, `transform: translateY()`, `:hover` |
| **Responsive** | Semua section | `@media (max-width: 768px)` |
| **Box Model** | Semua elemen | `padding`, `margin`, `border` |
| **Flexbox wrap** | Kartu Grid, Tombol Grup | `flex-wrap: wrap`, `flex: 1`, `min-width` |

---

## 🏗️ Bagian-bagian Halaman

### 1. Navbar
- Logo di **kiri**, menu di **kanan** → `justify-content: space-between`
- Menu berjajar horizontal → `display: flex; gap: 32px`
- Menempel di atas saat scroll → `position: sticky; top: 0`

### 2. Hero Section
- Konten di tengah secara vertikal → `display: flex; align-items: center`
- Tinggi minimal 90% layar → `min-height: 90vh`
- Dua tombol berjajar → `display: flex; gap: 16px`

### 3. Section Fitur (3 Kartu)
- 3 kartu berjajar → `display: flex; gap: 24px`
- Kartu bagi ruang rata → `flex: 1`
- Pindah baris di layar kecil → `flex-wrap: wrap`
- Naik saat hover → `transform: translateY(-8px)`

### 4. Section Tentang
- 2 kolom (teks 3/5, list 2/5) → `flex: 3` dan `flex: 2`

### 5. Footer
- Teks kiri, sosial media kanan → `justify-content: space-between`

---

## 🚀 Cara Menjalankan

1. Download / clone folder ini
2. Buka file `index.html` langsung di browser
3. Tidak perlu install apapun!

> 💡 **Tip**: Install ekstensi **Live Server** di VS Code, lalu klik kanan `index.html` → "Open with Live Server" agar halaman auto-refresh saat kamu edit file.

---

## 🎨 Warna yang Digunakan

| Nama Variable | Nilai Hex | Digunakan Untuk |
|--------------|-----------|-----------------|
| `--warna-utama` | `#E94560` | Aksen merah — tombol, highlight |
| `--bg-gelap` | `#1A1A2E` | Navbar, background tentang |
| `--bg-biru` | `#0F3460` | Hero section |
| `--bg-kartu` | `#1E2A3A` | Background kartu fitur |
| `--teks-abu` | `#94A3B8` | Teks sekunder |

---

## 📚 Tantangan Selanjutnya

Setelah selesai project ini, coba tambahkan:

- [ ] **Section Testimoni** — 3 kartu kutipan dari pengguna
- [ ] **Animasi fade-in** saat halaman dimuat (CSS `@keyframes`)
- [ ] **Dark/Light mode toggle** dengan JavaScript + CSS Variables
- [ ] **Form Kontak** sederhana dengan Flexbox
- [ ] **Responsif tablet** — breakpoint `max-width: 1024px`

---

## 📖 Referensi Belajar
- [MDN CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Flexbox Froggy](https://flexboxfroggy.com) — Game belajar Flexbox
- [CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

*Fullstack Engineer Bootcamp · Modul FE-02 CSS · Mini Project Sesi 2*
