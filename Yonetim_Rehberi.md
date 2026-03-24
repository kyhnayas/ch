# CH Hukuk Bürosu Web Sitesi Yönetim Rehberi

Bu rehber, web sitenizin içeriğini oluşturan **Markdown (.md)** dosyalarının nasıl düzenleneceğini açıklamaktadır. Sitenizdeki *Ana Sayfa, Hakkımızda, Avukat Detayları* ve *Emsal Kararlar* gibi alanların metinleri ve görselleri bu dosyalar üzerinden yönetilmektedir.

## 1. Markdown (.md) Nedir?

Markdown, yazıları biçimlendirmek için kullanılan çok basit bir metin formatıdır. Dosya yapısı iki ana bölümden oluşur:
1. **Frontmatter (Özet/Veri Alanı):** Dosyanın en üstünde, iki `---` çizgisi arasında yer alır. Burada başlıklar, isimler, resim yolları veya pozisyonlar gibi sabit bilgiler `"Değer"` şeklinde tanımlanır.
2. **Body (İçerik Alanı):** İkinci `---` çizgisinden sonra başlayan alandır. Buraya düz yazı şeklinde istediğiniz kadar paragraf ve içerik girebilirsiniz. HTML kodları gibi karmaşık yapılara ihtiyaç duyulmaz.

---

## 2. Düzenlenebilir Dosyalar ve Konumları

Tüm içerik yönetimi proje ana dizinindeki `content/` klasörü altından yapılmaktadır:

- **`content/home.md`**: Ana Sayfa'daki büyük karşılama (hero) yazıları ve "Hakkımızda" bölümünün kısa özeti.
- **`content/attorneys/`**: Tüm avukatların detay dosyalarının bulunduğu klasör.
- **`content/cases/`**: Tüm emsal kararların dosyalarının bulunduğu klasör.

---

## 3. Avukat Profilini Düzenleme Örneği

Örneğin **Hasan Yaşa**'nın bilgilerini güncellemek istiyorsunuz:
1. Bilgisayarda veya kod düzenleyici (VS Code gibi) üzerinden projenin içindeki `content/attorneys/Hasan-Yasa.md` dosyasını açın.
2. Dosya şuna benzer görünecektir:

```md
---
name: "Arb. Av. Hasan Yaşa"
position: "Kurucu Ortak Avukat"
practiceArea: "Aile Hukuku, Ceza Hukuku"
experience: "15 Yıl"
phone: "0530 799 35 43"
facebook: "https://facebook.com/kullaniciadi"
twitter: "#"
education:
  - "Sakarya Üniversitesi Hukuk Fakültesi"
---

Buradaki alana dilediğiniz gibi biyografi, avukatın iş yaklaşımı ve uzun yazılarını ekleyebilirsiniz.
```

- **Bilgiyi Değiştirmek:** Tırnak işaretleri içindeki kısmı değiştirmeniz yeterlidir. Örneğin `"15 Yıl"` yerine `"16 Yıl"` yazıp kaydettiğinizde sitede anında güncellenir.
- **Sosyal Medya Linki:** `#` olan yerlere ilgili sosyal medya profil linkini koyarsanız buton sitede aktif olur. Profil linki yoksa `#` olarak bırakın veya o satırı silin.
- **Eğitim/Liste Ekleme:** `education:` kısmının altına `- "Yeni Okul Adı"` şeklinde satırlar ekleyerek eğitimi uzatabilirsiniz. Liste olduğu için tire (-)  ve boşlukla başlamalıdır.

---

## 4. Emsal Kararları Düzenleme

Emsal kararlar `content/cases/` klasöründe yer alır. Örneğin `Family-Issue.md` dosyasını açtığınızda:

```md
---
title: "Aile ve Boşanma Davaları"
subTitle: "Aile Hukuku"
summary: "Boşanma, velayet, nafaka... kısa özet açıklaması."
---

Alt kısımda makale gibi uzun yazınızı, davanın detaylarını, kazanılan sonuçları uzun uzun yazabilirsiniz. Buraya yazdıklarınız sitede karar detay sayfasında görünür.
```

**Sisteme Yeni Karar veya Avukat Eklemek:**
Eğer *yeni* bir avukat veya karar eklenecekse öncelikle teknik olarak `api/attorneys.js` veya `api/case.js` dosyasına fotoğrafın ve kısa yolun (slug) eklenmesi, sonrasında da `content/` klasörüne aynı "slug" adında bir .md dosyası oluşturulması gerekir. Yeni ekleme işleminde teknik destek almanız gerekebilir ancak **var olanları düzenlemek** tamamen sizin yetkinizdedir.

---

## 5. İpuçları ve Dikkat Edilmesi Gerekenler

- **Tırnak İşaretleri:** Frontmatter alanında (`---` arası) yazıların başında ve sonunda bulunan `" "` çift tırnak işaretlerini silmemeye özen gösterin.
- **Sayfa Yenileme:** Değişikliği yapıp kaydettikten sonra web sitenizin sayfasını yenilendiğinizde değişiklikler hemen yansıyacaktır. Dosyayı kaydetmeniz yeterlidir.
- **İçerik Stilleri:** Alt kısımdaki hikaye/paragraf alanlarına istediğiniz uzunlukta metin yapıştırabilirsiniz. Kalınlaştırmak istediğiniz kelimelerin başına ve sonuna çift yıldız (`**kalın metin**`) koyabilirsiniz. Liste yapmak için tire (`- liste elemanı`) kullanabilirsiniz.
