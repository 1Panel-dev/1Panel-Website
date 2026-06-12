---
title: "1Panel v2.2.1 yayinlandi: guvenlik duvari port beyaz listesi, coklu dugum ozeti, Dynadot DNS"
description: "1Panel v2.2.1 Dynadot DNS, guvenlik duvari port beyaz listesi, uzak indirme vekili, coklu dugum agents/sertifika ozeti ve genis UI iyilestirmeleri ile duzeltmeler icerir."
pubDate: 2026-06-11
updatedDate: 2026-06-11
tags:
  - 1Panel
  - Release Notes
  - Firewall
  - Multi-Node
  - MCP
  - File Browser
  - Certificates
  - Panel Settings
---

1Panel v2.2.1 kullanima sunuldu. Surum; sertifika ve guvenlik duvari yeteneklerini genisletir, coklu dugum yonetimini guclendirir ve konteynerler, cron ile sistem ayarlarinda kapsamli UI iyilestirmeleri ve hata duzeltmeleri getirir.

## Highlights

- **Dynadot DNS** — otomatik sertifika icin yeni DNS saglayicisi
- **Port beyaz listesi** — guvenlik duvarinda izinli portlari merkezi yonetim
- **Coklu dugum ozeti** — overview sayfasinda agents ve sertifikalar
- **File Browser** — uzak indirme vekili; Shift ile coklu satir secimi
- **Panel uyarilari** — ayni turden birden fazla uyari; SMS gorunen ad ve siki dogrulama
- **Genis cilalama** — konteyner loglari, karanlik tema, gorev listesi, MCP menusu, terminal guvenligi

---

## New Features

### Certificates

- **Dynadot DNS saglayicisi** — Dynadot DNS dogrulamasi ile sertifika verme ve yenileme ([`#12829`](https://github.com/1Panel-dev/1Panel/pull/12829)).

### File Browser

- **Uzak indirme vekili** — dogrudan erisim engellendiginde veya yonlendirildiginde vekil yapilandirma ([`#12942`](https://github.com/1Panel-dev/1Panel/pull/12942)).

### Firewall

- **Port beyaz listesi yonetimi** — panelden guvenlik duvari port beyaz listelerini tanimlama ([`#12912`](https://github.com/1Panel-dev/1Panel/pull/12912)).

### Multi-Node

- **Overview: agents ve sertifikalar** — coklu dugum overview sayfasinda agents ve sertifika bilgisi ([`#12933`](https://github.com/1Panel-dev/1Panel/pull/12933)).
- **Sistem paketi yonetimi** — dugumler arasi 1Panel sistem kurulum paketleri ([`#12982`](https://github.com/1Panel-dev/1Panel/pull/12982)).

### Panel Settings

- **Ayni turden birden fazla uyari** — kanal turu basina birden fazla uyari yontemi ([`#12922`](https://github.com/1Panel-dev/1Panel/pull/12922)).

---

## Enhancements

### Overview

- **Not stilleri** — ana sayfa not widget gorunumu iyilestirildi ([`#12958`](https://github.com/1Panel-dev/1Panel/pull/12958)).

### Containers

- **Log gorunumu** — konteyner loglari daha okunakli ([`#12939`](https://github.com/1Panel-dev/1Panel/pull/12939)).
- **Goruntu silme sonrasi loglar** — goruntu silindikten sonra gorev loglari otomatik acilir ([`#12868`](https://github.com/1Panel-dev/1Panel/pull/12868)).

### File Browser

- **Shift coklu secim** — Shift ile ardışık satirlari hizlica secin ([`#12941`](https://github.com/1Panel-dev/1Panel/pull/12941)).
- **Editor kaydetme mantigi** — dosya editoru kaydetme davranisi iyilestirildi ([`#12852`](https://github.com/1Panel-dev/1Panel/pull/12852)).

### Firewall

- **Port araligi doluluk kontrolu** — port araligi kurallari kullanimi dogrular ([`#12950`](https://github.com/1Panel-dev/1Panel/pull/12950)).

### SSH Management

- **Log ayristirma** — SSH log ayristirma mantigi iyilestirildi ([`#12803`](https://github.com/1Panel-dev/1Panel/pull/12803)).

### Terminal

- **Uretilen komut guvenligi** — uretilen terminal komutlari icin ek guvenlik dogrulamasi ([`#12826`](https://github.com/1Panel-dev/1Panel/pull/12826)).

### Multi-Node

- **Dugum sayisi limiti** — limite ulasilinca daha net davranis ([`#12867`](https://github.com/1Panel-dev/1Panel/pull/12867)).
- **Buyuk filo gecisi** — cok dugumlu ortamlarda dugum gecisi optimize edildi ([`#12928`](https://github.com/1Panel-dev/1Panel/pull/12928)).

### MCP

- **Menu basliklari** — kenar cubugunda MCP menu basliklari tutarli ([`#12818`](https://github.com/1Panel-dev/1Panel/pull/12818)).

### Panel Settings

- **SMS uyarilari** — gorunen adlar ve guclendirilmis yapilandirma dogrulamasi ([`#12945`](https://github.com/1Panel-dev/1Panel/pull/12945)).
- **Lisans ice aktarma uyarilari** — lisans ice aktarirken uyari ([`#12952`](https://github.com/1Panel-dev/1Panel/pull/12952)).

### System

- **Komut sonucu gorunumu** — komut cikisi daha okunakli ([`#12837`](https://github.com/1Panel-dev/1Panel/pull/12837)).
- **Gorev listesi ve kenar cubugu** — etkilesimler daha akici ([`#12839`](https://github.com/1Panel-dev/1Panel/pull/12839)).
- **Captcha** — dogrulama yontemi optimize edildi ([`#12946`](https://github.com/1Panel-dev/1Panel/pull/12946)).
- **API dokumantasyonu** — ek açıklamalar ve loglar iyilestirildi ([`#12915`](https://github.com/1Panel-dev/1Panel/pull/12915), [`#12962`](https://github.com/1Panel-dev/1Panel/pull/12962)).
- **Tablo devre disi dugmeler** — devre disi dugme stilleri netlestirildi ([`#12937`](https://github.com/1Panel-dev/1Panel/pull/12937)).
- **Karanlik tema** — karanlik tema stilleri iyilestirildi ([`#12944`](https://github.com/1Panel-dev/1Panel/pull/12944)).

---

## Bug Fixes

| Alan | Duzeltme |
|---|---|
| **App Store** | Ozel uygulama depolariyla runtime ortamlari yeniden olusturulabilir ([`#12887`](https://github.com/1Panel-dev/1Panel/pull/12887)). |
| **Websites** | Ozel rewrite sablon adlari buyuk/kucuk harfi korur ([`#12714`](https://github.com/1Panel-dev/1Panel/pull/12714)). |
| **Certificates** | Otomatik yenileme sonrasi panel sertifikalari senkronize olur ([`#12858`](https://github.com/1Panel-dev/1Panel/pull/12858)). |
| **Containers** | Compose yukseltmesi sonrasi konteyner IP'leri korunur ([`#12902`](https://github.com/1Panel-dev/1Panel/pull/12902)). |
| **File Browser** | Joker karakterli dosya kopyasi duzeltildi ([`#12883`](https://github.com/1Panel-dev/1Panel/pull/12883)). |
| **Firewall** | Port doluluk bilgisi dogru gosterilir ([`#12961`](https://github.com/1Panel-dev/1Panel/pull/12961)). |
| **Toolbox** | Virus taramasi beklenmedik sekilde basarisiz olmaz ([`#12892`](https://github.com/1Panel-dev/1Panel/pull/12892)). |
| **Toolbox** | Sureci koruma uptime 1 gunu asinca dogru ayristirilir ([`#12713`](https://github.com/1Panel-dev/1Panel/pull/12713)). |
| **SSH Management** | SSH otomatik etkinlestirme duzeltildi ([`#12898`](https://github.com/1Panel-dev/1Panel/pull/12898)). |
| **Cron** | Alt dugumlerde betik kutuphaneleri calisir ([`#12869`](https://github.com/1Panel-dev/1Panel/pull/12869)). |
| **Cron** | Betik guncellenirken yedek saklama sayisi uygulanir ([`#12896`](https://github.com/1Panel-dev/1Panel/pull/12896)). |
| **Multi-Node** | Dugum otomatik yukseltmesi basariyla tamamlanir ([`#12875`](https://github.com/1Panel-dev/1Panel/pull/12875)). |
| **Multi-Node** | Overview'dan dugum terminali baglantisi yeniden calisir ([`#12901`](https://github.com/1Panel-dev/1Panel/pull/12901)). |
| **Log Audit** | Islem loglari dogru gosterilir ([`#12936`](https://github.com/1Panel-dev/1Panel/pull/12936)). |
| **System** | Dosya acma hatalari sistem istisnasina yol acmaz ([`#12808`](https://github.com/1Panel-dev/1Panel/pull/12808)). |
| **System** | Lisans ice aktarildiktan sonra tema gecikmesiz guncellenir ([`#12911`](https://github.com/1Panel-dev/1Panel/pull/12911)). |
| **System** | Ozel giris arka plan gorselleri dogru gosterilir ([`#12977`](https://github.com/1Panel-dev/1Panel/pull/12977)). |

---

## How to Upgrade

Kontrol panelinde sag alttaki `Update` dugmesine tiklayin.

1Panel'e yeni misiniz? [1panel.pro](https://1panel.pro/) adresine bakin.

---

## Source

Tam surum notlari: [1Panel v2.2.1 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.2.1)
