export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { articleText, processType } = req.body;

    if (!articleText || !processType) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Get API key from environment variable
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    let prompt = '';

    switch (processType) {
      case 'quality':
        prompt = `Anda adalah editor profesional media online Indonesia berpengalaman. Analisis artikel berita ini dan lakukan:

1. PERBAIKAN GRAMMAR & EJAAN: Identifikasi dan perbaiki typo, ejaan, tanda baca
2. OPTIMASI LEAD: Buat lead yang lebih menarik, ringkas, dan mengena (5W1H)
3. PERBAIKAN KALIMAT: Perbaiki kalimat langsung dan tidak langsung agar lebih natural
4. SUSUNAN KALIMAT RAPI & BENAR (STANDAR JURNALISTIK): Analisis dan perbaiki susunan kalimat agar:
   - Subjek-Predikat-Objek (SPO) jelas dan tegas
   - Kalimat efektif tanpa kata-kata berlebihan
   - Alur pemikiran logis dan mudah diikuti
   - Sesuai gaya penulisan jurnalistik Indonesia
   - Tidak ada kalimat ambigu atau membingungkan

ARTIKEL:
"${articleText}"

BERIKAN RESPONS DALAM FORMAT INI:
[PERBAIKAN GRAMMAR & EJAAN]
- Daftar kesalahan yang ditemukan dan perbaikannya

[LEAD YANG DIOPTIMASI]
Tuliskan lead baru yang lebih menarik

[PERBAIKAN KALIMAT LANGSUNG & TIDAK LANGSUNG]
Tuliskan bagian artikel dengan perbaikan kalimat

[ANALISIS SUSUNAN KALIMAT (STANDAR JURNALISTIK)]
- Identifikasi masalah struktur kalimat
- Perbaikan untuk setiap kalimat yang bermasalah
- Penjelasan mengapa diperbaiki demikian

[ARTIKEL FINAL YANG SUDAH DIPERBAIKI]
Tuliskan artikel lengkap yang sudah diperbaiki semua`;
        break;

      case 'title':
        prompt = `Buatkan 5 pilihan judul berita yang menarik, catchy, dan SEO-friendly untuk artikel ini:

"${articleText}"

Persyaratan judul:
- Judul 1: Straight news (berita langsung, jelas)
- Judul 2: Emotional appeal (menarik secara emosional)
- Judul 3: Question headline (berbentuk pertanyaan)
- Judul 4: Curiosity-driven (menciptakan rasa ingin tahu)
- Judul 5: SEO-optimized (mengandung keyword penting)

FORMAT RESPONS:
[PILIHAN JUDUL BERITA]
1. [Judul 1]: Judul di sini
2. [Judul 2]: Judul di sini
3. [Judul 3]: Judul di sini
4. [Judul 4]: Judul di sini
5. [Judul 5]: Judul di sini

[REKOMENDASI]
Judul yang paling recommended adalah: [nomor judul] karena alasan berikut...`;
        break;

      case 'fullArticle':
        prompt = `Buatkan artikel berita yang sudah diperbaiki secara utuh berdasarkan artikel ini:

"${articleText}"

Lakukan:
1. Gunakan judul yang menarik dan SEO-friendly
2. Perbaiki semua grammar, ejaan, dan tanda baca
3. Optimalkan lead dengan 5W1H yang jelas
4. Perbaiki kalimat langsung dan tidak langsung
5. Pastikan flow artikel smooth dan mudah dipahami
6. Tambahkan struktur yang jelas (lead, body, kesimpulan)

FORMAT OUTPUT:
[JUDUL BERITA]
Judul di sini

[ARTIKEL UTUH YANG SUDAH DIPERBAIKI]
Isi artikel lengkap di sini`;
        break;

      case 'social':
        prompt = `Buatkan konten media sosial untuk artikel berita ini:

"${articleText}"

Buatkan untuk platform:
1. INSTAGRAM: Caption menarik (max 150 karakter) + 3 hashtag
2. FACEBOOK: Deskripsi (max 200 karakter) + 5 hashtag
3. TWITTER/X: Tweet (max 280 karakter) + 3 hashtag
4. TIKTOK: Hook/intro video (max 100 karakter) + 3 hashtag

FORMAT RESPONS:
[INSTAGRAM]
Caption: ...
Hashtag: ...

[FACEBOOK]
Deskripsi: ...
Hashtag: ...

[TWITTER/X]
Tweet: ...
Hashtag: ...

[TIKTOK]
Hook: ...
Hashtag: ...`;
        break;

      default:
        return res.status(400).json({ error: 'Invalid process type' });
    }

    // Call Claude API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: processType === 'quality' ? 2500 : processType === 'fullArticle' ? 2000 : 1000,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Claude API error:', error);
      return res.status(response.status).json({ error: 'Claude API error', details: error });
    }

    const data = await response.json();
    const result = data.content[0].text;

    return res.status(200).json({ success: true, result });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error', message: error.message });
  }
}
