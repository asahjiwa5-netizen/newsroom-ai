# 🚀 Newsroom AI - Aplikasi Editing Berita dengan AI

Aplikasi web untuk membantu wartawan dalam:
- ✅ Memperbaiki grammar dan ejaan
- ✅ Optimasi lead berita yang menarik
- ✅ Perbaikan struktur kalimat jurnalistik
- ✅ Generate 5 pilihan judul
- ✅ Auto-generate caption media sosial (Instagram, Facebook, Twitter, TikTok)

---

## **Quick Start - Deploy ke Vercel (5 Menit)**

### **1️⃣ Buat GitHub Account**
- Buka [github.com](https://github.com)
- Klik Sign Up
- Isi data dan verifikasi email

### **2️⃣ Upload File ke GitHub**
- Di GitHub, klik **"+"** di top-right → **"New repository"**
- Nama: `newsroom-ai`
- Pilih **"Public"**
- Klik **"Create repository"**
- Klik **"uploading an existing file"**
- Upload semua file dari folder ini

### **3️⃣ Deploy ke Vercel**
- Buka [vercel.com](https://vercel.com)
- Klik **"Sign Up with GitHub"**
- Authorize Vercel
- Klik **"Add New"** → **"Project"**
- Pilih repository `newsroom-ai`
- Klik **"Deploy"**

### **4️⃣ Setup API Key**
- Buka [console.anthropic.com](https://console.anthropic.com)
- Login / Sign Up
- Cari menu **"API Keys"**
- Klik **"Create Key"**
- Copy key yang generated

- Kembali ke Vercel
- Buka project → **"Settings"** → **"Environment Variables"**
- Klik **"Add"**
  - Name: `ANTHROPIC_API_KEY`
  - Value: Paste API key dari Anthropic
- Klik **"Save"**

- Buka tab **"Deployments"**
- Pilih deployment terbaru
- Klik **"..."** → **"Redeploy"**

### **5️⃣ Selesai! 🎉**
- Link aplikasi akan muncul di Vercel dashboard
- Copy link dan share ke teman
- Teman bisa langsung buka di HP/browser

---

## **File yang Disertakan**

```
newsroom-ai-vercel/
├── api/process.js        ← Backend API (jangan diubah)
├── public/index.html     ← Frontend aplikasi
├── package.json          ← Dependencies
├── vercel.json           ← Konfigurasi Vercel
├── DEPLOYMENT_GUIDE.md   ← Panduan lengkap
└── README.md             ← File ini
```

---

## **Cara Pakai Aplikasi**

1. **Buka link** dari Vercel
2. **Paste artikel** di kolom input
3. **Klik "Proses Editing"**
4. **Tunggu ~20-30 detik**
5. **Copy hasil** dan pakai untuk:
   - Artikel yang siap publish
   - Caption media sosial
   - Pilihan judul terbaik

---

## **Fitur Lengkap**

### **📋 Editing Artikel**
- Perbaikan grammar & ejaan
- Optimasi lead berita (5W1H)
- Perbaikan kalimat langsung/tidak langsung
- Analisis susunan kalimat standar jurnalistik

### **✍️ Judul Menarik**
- 5 pilihan judul berbeda strategi
- Rekomendasi judul terbaik
- SEO-optimized

### **📄 Artikel Siap Publish**
- Judul + isi lengkap yang sudah diperbaiki
- Tinggal copy-paste ke CMS/WordPress

### **📱 Caption Media Sosial**
- Instagram: caption + 3 hashtag
- Facebook: deskripsi + 5 hashtag
- Twitter/X: tweet + 3 hashtag
- TikTok: hook + 3 hashtag

---

## **Informasi Teknis**

- **Frontend:** HTML + CSS + JavaScript (vanilla)
- **Backend:** Node.js + Express (Vercel Serverless Functions)
- **AI Engine:** Claude API by Anthropic
- **Hosting:** Vercel (gratis + unlimited scalability)

---

## **Biaya**

- ✅ **Vercel:** Gratis (free tier)
- ⚠️ **Anthropic API:** Gratis terbatas, bayar per usage (monthly dari ~$0 - tergantung usage)
- ✅ **GitHub:** Gratis

---

## **Troubleshooting**

**Aplikasi error saat dijalankan?**
- Pastikan API key Anthropic sudah di-set di Vercel environment variables
- Cek logs di Vercel dashboard → Deployments → Functions

**Lambat loading pertama kali?**
- Normal (cold start Vercel, ~5-10 detik)
- Requests berikutnya akan lebih cepat

**Mau performa lebih baik?**
- Upgrade ke Vercel Pro (~$20/bulan)
- Atau upgrade Anthropic API plan

---

## **Lisensi & Kredit**

Dikembangkan untuk **TRANSPLUS.ID**
- Founder: Hani (Wartawan & Entrepreneur)
- AI Engine: Claude by Anthropic
- Hosting: Vercel

---

## **Support & Contact**

Untuk masalah atau feedback:
- Cek **DEPLOYMENT_GUIDE.md** untuk panduan lengkap
- Cek logs di Vercel dashboard
- Hubungi tim TRANSPLUS.ID

---

**Happy editing! 🚀**

*Newsroom AI v1.0 - Dibuat dengan ❤️ untuk wartawan Indonesia*
