---
title: "1Panel v2.5.0 yayında: GPU yönetimi, vLLM ve model hizmetleri yerel model iş akışının tamamı için yeniden tasarlandı"
description: "1Panel v2.5.0; GPU yönetimi, vLLM yönetimi ve model hizmetlerini yeniden tasarlayarak model hazırlığı, dağıtım, izleme, kıyaslama ve AI Gateway üzerinden erişimi tek akışta birleştiriyor. Sanal makine yönetimi Community Edition'a, operasyon raporları Professional Edition'a açılıyor; ayrıca 1Panel MCP hizmet yönetimi, konteyner imaj güncellemesi algılama ve toplu yükseltme geliyor."
pubDate: 2026-11-11
updatedDate: 2026-11-11
tags:
  - 1Panel
  - Sürüm Notları
  - GPU
  - vLLM
  - Model Hizmetleri
  - AI Gateway
  - Sanal Makineler
  - MCP
---

1Panel v2.5.0 kullanıma sunuldu. Bu sürüm; GPU yönetimi, vLLM yönetimi ve model hizmetlerini yeniden tasarlayarak yerel model iş akışının tamamını birbirine bağlıyor: model hazırlığı, dağıtım ve izlemeden kıyaslamaya ve modellerin AI Gateway üzerinden sunulmasına kadar. Sanal makine yönetimi artık Community Edition kullanıcılarına tamamen açık, operasyon raporları Professional Edition kullanıcılarına sunuluyor; ayrıca 1Panel MCP hizmet yönetimi, konteyner imaj güncellemesi algılama ve toplu yükseltme özellikleri ekleniyor.

11 Kasım 2026 tarihinde, yeni nesil Linux sunucu yönetim paneli 1Panel, 2.5.0 sürümünü resmî olarak yayınladı.

1Panel v2.5.0, **yerel model dağıtım deneyimini iyileştirmeye** odaklanıyor. **GPU yönetimi, model hazırlığı, model dağıtımı ve model hizmetlerinden kıyaslamaya ve AI Gateway üzerinden Token hizmeti sunmaya** kadar tüm döngüyü birleştiriyor. Yeni sürümle kullanıcılar AI sunucularında yerel modelleri hızlıca dağıtıp yönetebiliyor; ortam kontrolü, dağıtım yapılandırması ve çalışma zamanı izlemesini doğrudan panel üzerinde tamamlayabiliyor. Bu da farklı araçlar arasında sürekli geçiş yapma ihtiyacını azaltıyor.

Aynı zamanda 1Panel v2.5.0, sanal makine yönetimini Community Edition kullanıcılarına tamamen açıyor, operasyon raporlarını Professional Edition kullanıcılarına sunuyor ve 1Panel MCP hizmet yönetimi ile konteyner imaj güncellemesi algılama ve toplu yükseltme gibi pratik yetenekler ekleyerek sunucu yönetimi deneyimini sürekli geliştiriyor.

Mevcut kullanıcılar, çevrimiçi yükseltmeyi tamamlamak için panelin sağ alt köşesindeki **Güncellemeleri kontrol et** düğmesine tıklayabilir. Değişikliklerin tamamı için [v2.5.0 sürümüne](https://github.com/1Panel-dev/1Panel/releases/tag/v2.5.0) göz atın.

**Sürekli geri bildirim ve destekleri için topluluğa teşekkür ederiz. 1Panel, sizinle birlikte daha verimli, güvenli ve akıllı bir Linux operasyon deneyimi oluşturmayı hedefliyor.**

## İçindekiler

- [Öne çıkanlar](#öne-çıkanlar)
- [Diğer yeni özellikler](#diğer-yeni-özellikler)
- [İyileştirmeler](#i̇yileştirmeler)
- [Hata düzeltmeleri](#hata-düzeltmeleri)
- [Nasıl yükseltilir](#nasıl-yükseltilir)

---

## Öne çıkanlar

### GPU yönetimi yeniden tasarlandı

Yerel bir modeli dağıtmadan önce GPU'nun doğru tanındığını, sürücünün ve konteyner çalışma zamanının hazır olduğunu doğrulamak gerekir. 1Panel v2.5.0, GPU yönetimini tamamen yeniden tasarlayarak cihaz bilgilerini, ortam durumunu, gerçek zamanlı ve geçmiş izlemeyi tek bir arayüzde topluyor. Böylece kullanıcılar cihazın kullanım koşullarını ve çalışma durumunu tek bakışta görebiliyor.

NVIDIA cihazlarda sürücü ve NVIDIA Container Toolkit durumu doğrudan panelden kontrol edilebiliyor ve ilgili kurulum ile yapılandırma yönergeleri görüntülenebiliyor. Diğer üreticilerin cihazlarında panel, ilgili ortam tanılama bilgilerini sunarak hangi hazırlık adımlarının kaldığını belirlemeye yardımcı oluyor.

Model çalıştıktan sonra GPU kullanımı, bellek kullanımı, sıcaklık ve güç tüketimi gibi ölçümler gerçek zamanlı izlenebiliyor, yük değişimleri geçmiş eğrilerle gözlemlenebiliyor. Her cihaz desteklediği ölçümleri gösterdiğinden kaynak sıkışıklığı veya yüksek yük durumlarını incelemek kolaylaşıyor ve dağıtım ayarlamaları için referans sağlıyor.

![Şekil 1: 1Panel GPU yönetimi ve izleme arayüzü](/blog/1panel-v2-5-0-release/image-01.webp)

*Şekil 1: 1Panel GPU yönetimi ve izleme arayüzü*

### Seçkin modeller, model indirme ve vLLM Recipes

Sürekli çoğalan açık kaynak modeller karşısında hangi modelin seçileceği, nereden indirileceği ve başlatma parametrelerinin nasıl yapılandırılacağı dağıtımdan önce yanıtlanması gereken sorulardır.

1Panel v2.5.0; seçkin modelleri, model indirmeyi ve vLLM Recipes'i birbirine bağlayarak model hazırlığının daha net referanslara dayanmasını sağlıyor. Kullanıcılar seçkin model listesinde model özelliklerini, kullanım senaryolarını ve ağırlık boyutlarını inceleyebiliyor, ardından indirme akışına geçerek dağıtım için gereken yerel dosyaları hazırlayabiliyor. İndirme görevleri ve yerel model dosyaları merkezî olarak yönetilebiliyor, böylece daha sonra bulmak ve yeniden kullanmak kolaylaşıyor.

Başlatma yapılandırmasına referans gereken modeller için vLLM Recipes tarafından sunulan dağıtım yapılandırma örnekleri incelenebiliyor; hedef donanım, model sürümü ve çalışma ortamına göre parametreler ayarlanabiliyor. Bu da yapılandırmayı sıfırdan oluşturma yükünü azaltıyor.

![Şekil 2: 1Panel seçkin modeller, model indirme ve vLLM Recipes arayüzü](/blog/1panel-v2-5-0-release/image-02.webp)

*Şekil 2: 1Panel seçkin modeller, model indirme ve vLLM Recipes arayüzü*

### vLLM yönetimi yeniden tasarlandı: daha net dağıtım yapılandırması ve izleme

Model dosyaları hazır olduğunda sıradaki adım modeli istikrarlı biçimde çalıştırmaktır. 1Panel v2.5.0, vLLM yönetim modülünü tamamen yeniden tasarlayarak örnek oluşturma, dağıtım yapılandırması ve çalışma zamanı izleme adımlarını iyileştiriyor. Böylece kullanıcılar dağıtım işlemlerini seçtikleri model ve donanım ortamına göre düzenleyebiliyor. Örnek oluştururken çalışma zamanı imajı, model dosyaları ve başlatma şablonu seçilebiliyor; GPU ve model başlatma parametreleri yapılandırılabiliyor.

Örnek çalıştıktan sonra modelin durumu ve günlükleri tek yerden görüntülenebiliyor, izleme sayfasında istek hacmi, Token aktarım hızı ve yanıt gecikmesi incelenebiliyor. GPU kaynak kullanımıyla birlikte hizmet yükünü gözlemlemek kolaylaşıyor ve sonraki dağıtım parametresi ayarlamaları için dayanak sağlıyor.

![Şekil 3: 1Panel vLLM örnek dağıtım arayüzü](/blog/1panel-v2-5-0-release/image-03.webp)

*Şekil 3: 1Panel vLLM örnek dağıtım arayüzü*

![Şekil 4: 1Panel vLLM çıkarım izleme arayüzü](/blog/1panel-v2-5-0-release/image-04.webp)

*Şekil 4: 1Panel vLLM çıkarım izleme arayüzü*

### Yerel modeller, genel bulut ve kendi AI Gateway hesaplarının birleşik yönetimi

Uygulamada yerel olarak dağıtılan modeller, genel bulut modelleri ve kendi barındırılan AI Gateway'ler sıklıkla bir arada bulunur. 1Panel v2.5.0, **Model Hizmetleri** modülünü tamamen yeniden tasarlayarak yerel model hizmetlerini, genel bulut model hesaplarını ve kendi barındırılan AI Gateway model hesaplarını merkezî olarak yönetiyor. Böylece farklı kaynaklardan gelen model hizmetlerini incelemek ve bakımını yapmak kolaylaşıyor.

Kullanıcılar hizmet kaynağına göre bağlantı adresini ve erişim kimlik bilgilerini yapılandırabiliyor, her hesabın model listesini görüntüleyebiliyor ve bağlantıyı doğrulayabiliyor. Dağıtım ve bağlantı tamamlandığında hizmet bilgileri ve kullanılabilir modeller daha net hale geliyor; sonraki kullanım ve kıyaslamalar için birleşik bir seçim noktası sunuluyor.

![Şekil 5: 1Panel model hizmetleri yönetim arayüzü](/blog/1panel-v2-5-0-release/image-05.webp)

*Şekil 5: 1Panel model hizmetleri yönetim arayüzü*

### Hazır kıyaslama şablonları

Bir model yayına alındıktan sonra genellikle gerçek yük altındaki davranışını anlamak gerekir: ilk Token'a kadar geçen süre, sürdürülebilir çıktı hızı ve eşzamanlılık arttıkça aktarım hızı. 1Panel v2.5.0 model hizmeti kıyaslaması sunuyor: kullanıcılar hedef hizmeti ve modeli seçtikten sonra hızlı doğrulama, standart test ve tam test gibi hazır şablonlarla hedefli bir performans testi başlatabiliyor.

İstek uzunluğu, çıktı uzunluğu ve eşzamanlılık ayarlanabiliyor; ilk Token'a kadar geçen süre (TTFT), istek gecikmesi ve Token aktarım hızı gibi sonuçlar incelenebiliyor. Aynı şablonla farklı dağıtım yapılandırmalarını test etmek, parametre değişikliklerinin etkisini izlemeye yardımcı oluyor ve kaynak planlaması ile hizmet ince ayarı için referans sağlıyor.

![Şekil 6: 1Panel model hizmeti kıyaslama yapılandırması ve sonuçları](/blog/1panel-v2-5-0-release/image-06.webp)

*Şekil 6: 1Panel model hizmeti kıyaslama yapılandırması ve sonuçları*

---

## Diğer yeni özellikler

- **Sanal Makineler** — Sanal makine yönetimi artık Community Edition kullanıcılarına açık.
- **Genel Bakış** — GPU durum görünümü ve vLLM Token aktarım hızı izleme eklendi, birden fazla dizin kısayolu destekleniyor.
- **Ajanlar** — DeepSeek Harness ve OctoP desteği.
- **MCP Yönetimi** — 1Panel MCP hizmet yönetimi eklendi.
- **Web Siteleri** — Performans ayarlarında ters proxy zaman aşımı yapılandırılabiliyor.
- **Sertifikalar** — Verilen sertifikalar aynı anda birden fazla yerel dizine gönderilebiliyor ve kendinden imzalı kök sertifikalar içe aktarılabiliyor.
- **Konteynerler** — Konteyner dizinleri toplu dosya yüklemeyi destekliyor.
- **Konteynerler** — İmaj güncellemesi algılama ve durum göstergeleri eklendi; konteyner listesi toplu yükseltmeyi destekliyor.
- **Konteynerler** — Docker Hub'da uzak imaj arama desteği.
- **Konteynerler** — NVIDIA GPU çalışma zamanı yapılandırması için anahtar eklendi.
- **Cron** — URL erişim görevleri User-Agent istek başlığını ayarlamayı destekliyor.
- **Kaynak Eşitleme** — PHP eklenti şablonları düğümler arasında eşitlenebiliyor.
- **Operasyon Raporu (X-Pack)** — Operasyon raporları artık Professional Edition kullanıcılarına açık.
- **Çok Düğümlü (X-Pack)** — Düğümler mevcut kurulum paketleri kullanılarak kurulabiliyor ve yükseltilebiliyor.

---

## İyileştirmeler

- **Uygulama Mağazası** — Yerel uygulama eşitlemesi alt düğümleri içerebiliyor, imaj öneki bağımsız olarak yapılandırılıp etkinleştirilebiliyor ve eşitleme sırasındaki kaynak istekleri azaltıldı.
- **Ajanlar** — MiniMax Flash model listesi ve varsayılan yapılandırması ile DeepSeek varsayılan model adı güncellendi.
- **Web Siteleri** — Brotli yapılandırması henüz etkin değilken gösterilen durum mesajı iyileştirildi.
- **Çalışma Zamanı** — Güncellemeler artık mevcut konteynerleri durdurmadan önce imaj çekiminin tamamlanmasını bekliyor; böylece imaj çekiminden kaynaklanan hizmet kesintisi kısalıyor.
- **Veritabanları** — Kullanıcı adı ve parola doğrulama kuralları birleştirildi.
- **Konteynerler** — Oluşturma zamanına göre sıralama eklendi, sıralama temizlendiğinde varsayılan sıraya dönülüyor ve listenin uzun süre yükleniyor durumunda kalması hafifletildi.
- **Dosyalar** — Yeniden adlandırma sırasında Esc tuşu ve iptal işlemleri iyileştirildi; hassas dosya işlemlerinin kaynak doğrulaması ve geçmişteki kaynak izleme güçlendirildi.
- **Terminal** — Karanlık modda terminal kısayollarının kenarlık gösterimi iyileştirildi.
- **Arayüz Ayarları** — Görev günlüğü ve silme onayı iletişim kutuları birleştirildi, Enterprise Edition giriş sayfası arka planı güncellendi.
- **Günlük Denetimi** — Güvenilir proxy kullanımında istemci IP kaydı ve oturum açma bilgilerinin saklanması iyileştirildi.
- **Panel Ayarları** — İptal edilmiş API anahtarlarını silme desteği, yedekleme depolama ve HTTPS proxy sertifika doğrulamasında iyileştirmeler ve özel CA sertifikaları desteği eklendi.
- **Sistem** — Tablo ipuçlarının konumu birleştirildi, sayfa başına maksimum öğe sayısı artırıldı ve tabloların duyarlı yerleşimi iyileştirildi.
- **Sistem** — Süresi dolmuş oturumlar ve kimlik bilgisi kullanımı için erişim kısıtlamaları güçlendirildi, dış kaynak isteklerinde TLS sertifika doğrulaması iyileştirildi ve Markdown ile HTML ayrıştırma bağımlılıkları yükseltildi.
- **Çok Düğümlü (X-Pack)** — Düğümler arası SFTP yükleme hızı iyileştirildi ve düğüm verisi eşitlemesinin yeniden deneme süresi uzatıldı.

---

## Hata düzeltmeleri

- **Uygulama Mağazası** — "+" veya "-0" ile başlayan sayısal parolaların uygulama kurulumu veya uygulama parametresi değişikliği sırasında değiştirilmesi sorunu giderildi.
- **Uygulama Mağazası** — Uygulama yükseltmesi sırasında ortam değişkeni değerlerinin değiştirilmesi ve yayından kaldırılmış sürümlerdeki uygulamaların yükseltilememesi sorunu giderildi.
- **Uygulama Mağazası** — Düğüm proxy'si üzerinden erişimde uygulama simgesi yönlendirme hataları, kaynak önbelleği yenileme ve PHP çalışma zamanı sürüm seçeneklerindeki sorunlar giderildi.
- **Ajanlar** — Hermes WeChat kanalı kurulumunda eksik modül hatası ve QR kodunun görüntülenmemesi sorunu giderildi.
- **Ajanlar** — OpenClaw yükseltmeleri sonrasında Feishu eklentisi uyumluluk sorunları giderildi ve eski Feishu yapılandırması korundu.
- **Web Siteleri** — PHP çalışma zamanı değişikliklerinin alt sitelere eşitlenmemesi sorunu giderildi.
- **Çalışma Zamanı** — Proje terminallerinin konteyneri bulamaması ve bağlanamaması sorunu giderildi.
- **Veritabanları** — Yönetim aracı bağlantılarının uygulamanın özel web erişim adresini kullanmaması sorunu giderildi.
- **Konteynerler** — Konteyner düzenlendikten sonra listeye dönüldüğünde arama filtrelerinin kaybolması ve adında büyük harf bulunan uygulama örneklerinin günlüklerinin temizlenememesi sorunu giderildi.
- **Dosyalar** — Yeniden adlandırma sırasında aynı adlı hedef dosyanın doğrudan üzerine yazılması, indirme kayıt yolunun seçilen dizinin dışına çıkabilmesi ve tar sıkıştırma komutunda argüman enjeksiyonu sorunları giderildi.
- **Terminal** — Düğüm eklendikten sonra otomatik anahtarın gösterilmemesi ve bağlantı için hâlâ SSH parolası istenmesi sorunu giderildi.
- **Cron** — Betik kitaplığı eşitlemesinin eski kaynak önbelleğini kullanması sorunu giderildi.
- **Günlük Denetimi** — Web sitesi PHP sürümü değiştirilirken ve PHP çalışma zamanı silinirken işlem günlüklerinin kaynak adı yerine kaynak kimliğini göstermesi sorunu giderildi.
- **Panel Ayarları** — Güvenlik girişi yeniden etkinleştirildikten sonra panele erişilememesi ve yedekleme hesaplarının ada göre aranmasındaki anormallik giderildi.
- **Sistem** — `1pctl` komutuyla parola değiştirmenin parola karmaşıklığı ayarlarına uymaması sorunu giderildi.
- **Sistem** — Yaz saati uygulaması sona erdikten sonra tekrarlanan zaman aralığında saat eşitlemesinin sistem saatini bir saat geri alması sorunu giderildi.
- **WAF (X-Pack)** — Web sitesi ayarları açılırken oluşan hatalar ve Community Edition alt düğümlerinin temel API'lerine izin verilmemesi sorunu giderildi.
- **Web Sitesi İzleme (X-Pack)** — İstek günlüğü istatistiklerindeki hata giderildi.

---

## Nasıl yükseltilir

Mevcut kullanıcılar, çevrimiçi yükseltmeyi tamamlamak için 1Panel panosunun sağ alt köşesindeki **Güncellemeleri kontrol et** düğmesine tıklayabilir.

1Panel'de yeni misiniz? Başlamak için [1panel.pro](https://1panel.pro/) adresini ziyaret edin.

---

## Kaynak

Tam sürüm notları: [GitHub'da 1Panel v2.5.0](https://github.com/1Panel-dev/1Panel/releases/tag/v2.5.0)
