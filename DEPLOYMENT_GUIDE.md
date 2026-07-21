# 🚀 Panduan Deploy Newsroom AI ke Vercel

Dokumentasi lengkap untuk men-deploy aplikasi Newsroom AI ke Vercel sehingga bisa diakses oleh siapa saja via link.

---

## **Langkah-Langkah Deployment**

### **Langkah 1: Persiapkan GitHub Account**
1. Buat akun **GitHub** (gratis) di [github.com](https://github.com)
2. Login ke GitHub

### **Langkah 2: Upload File ke GitHub**

Ada 2 cara:

#### **Cara A: Menggunakan GitHub Web Interface (Paling Mudah)**
1. Buat repository baru di GitHub:
   - Klik **"+"** di top-right → **"New repository"**
   - Nama: `newsroom-ai` (atau nama lain)
   - Pilih **"Public"** agar bisa diakses
   - Klik **"Create repository"**

2. Upload file-file:
   - Klik **"Add file"** → **"Upload files"**
   - Upload 4 file ini:
     - `package.json`
     - `vercel.json`
     - Folder `api/` dengan file `process.js`
     - Folder `public/` dengan file `index.html`

3. Commit dengan pesan: "Initial commit - Newsroom AI"

#### **Cara B: Menggunakan Git Command (Lebih Cepat untuk Dev)**
```bash
# Jika sudah punya Git installed
git init
git add .
git commit -m "Initial commit - Newsroom AI"
git branch -M main
git remote add origin https://github.com/USERNAME/newsroom-ai.git
git push -u origin main
```

### **Langkah 3: Setup Vercel Account**
1. Buat akun **Vercel** (gratis) di [vercel.com](https://vercel.com)
2. Login dengan GitHub account Anda
3. Biarkan Vercel access ke GitHub Anda

### **Langkah 4: Import Project ke Vercel**
1. Di Vercel dashboard, klik **"Add New"** → **"Project"**
2. Pilih repository `newsroom-ai` yang baru dibuat
3. Vercel akan auto-detect konfigurasi
4. Klik **"Deploy"** (atau ikuti config yang ditawarkan)

### **Langkah 5: Setup Environment Variable**
1. Di Vercel dashboard, buka project `newsroom-ai`
2. Buka tab **"Settings"** → **"Environment Variables"**
3. Klik **"Add Environment Variable"**
4. Isi:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** Paste API key Anthropic Anda
5. Klik **"Save"**

   > **Bagaimana mendapat API key Anthropic?**
   > - Buka [console.anthropic.com](https://console.anthropic.com)
   > - Login atau buat akun
   > - Di menu, cari **"API Keys"**
   > - Klik **"Create Key"**
   > - Copy key yang generated (jangan share)
   > - Paste di Vercel environment variable

6. Setelah save, redeploy:
   - Klik **"Deployments"** tab
   - Pilih deployment terbaru
   - Klik **"..."** → **"Redeploy"**

### **Langkah 6: Test Aplikasi**
1. Setelah redeploy selesai, klik link deployment (biasanya ada di halaman Vercel)
2. Aplikasi Newsroom AI sudah live! 🎉
3. Coba input artikel test dan proses

---

## **Sharing Link ke Teman**

Setelah deployment selesai:

1. **Copy deployment link** dari Vercel (format: `https://newsroom-ai-xxx.vercel.app`)
2. **Share ke teman via:**
   - WhatsApp
   - Email
   - Telegram
   - Chat apapun

3. **Teman tinggal:**
   - Klik link
   - Buka di HP atau browser
   - Langsung bisa pakai! ✅

---

## **Troubleshooting**

### **Error: "API key not configured"**
- Pastikan environment variable `ANTHROPIC_API_KEY` sudah di-set di Vercel
- Pastikan sudah di-redeploy setelah menambah environment variable

### **Error: "Internal server error"**
- Check logs di Vercel: **"Deployments"** → **"Functions"** tab
- Pastikan API key Vercel valid
- Pastikan sudah ada credit di Anthropic (jika ada monthly limit)

### **Aplikasi lambat loading**
- Vercel free tier punya cold start delay (normal, 5-10 detik pertama kali)
- Subsequent requests akan lebih cepat
- Upgrade ke paid plan jika perlu performance lebih

---

## **File Structure**

```
newsroom-ai/
├── api/
│   └── process.js          (Backend API endpoint)
├── public/
│   └── index.html          (Frontend aplikasi)
├── package.json            (Dependencies)
├── vercel.json             (Vercel configuration)
└── DEPLOYMENT_GUIDE.md     (Dokumentasi ini)
```

---

## **FAQ**

**Q: Apa gratis?**
A: Ya! Vercel punya free tier yang cukup untuk kebutuhan ini. Anthropic juga punya free tier tapi terbatas.

**Q: Bisa custom domain?**
A: Ya, bisa di Vercel dashboard (Pro feature, tapi domain free + SSL)

**Q: Data artikel disimpan?**
A: Tidak. Data hanya di-process dan tidak tersimpan di server.

**Q: Berapa lama proses artikel?**
A: Tergantung panjang artikel, biasanya 10-30 detik per artikel.

---

## **Support**

Kalau ada masalah:
1. Check logs di Vercel dashboard
2. Cek console browser (F12) untuk error details
3. Cek status Anthropic API: [status.anthropic.com](https://status.anthropic.com)

---

**Happy deploying! 🚀**
