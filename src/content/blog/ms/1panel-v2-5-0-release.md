---
title: "1Panel v2.5.0 Dilancarkan: Pengurusan GPU, vLLM dan Perkhidmatan Model Dibina Semula untuk Seluruh Aliran Kerja Model Tempatan"
description: "1Panel v2.5.0 membina semula pengurusan GPU, pengurusan vLLM dan perkhidmatan model untuk menghubungkan penyediaan model, penggunaan, pemantauan, penanda aras dan akses melalui AI Gateway. Pengurusan mesin maya kini tersedia dalam Edisi Komuniti, laporan operasi dalam Edisi Profesional, serta pengurusan perkhidmatan MCP 1Panel, pengesanan kemas kini imej kontena dan peningkatan pukal."
pubDate: 2026-11-11
updatedDate: 2026-11-11
tags:
  - 1Panel
  - Nota Lepasan
  - GPU
  - vLLM
  - Perkhidmatan Model
  - AI Gateway
  - Mesin Maya
  - MCP
---

1Panel v2.5.0 kini tersedia. Lepasan ini membina semula pengurusan GPU, pengurusan vLLM dan perkhidmatan model untuk menghubungkan keseluruhan aliran kerja model tempatan — daripada penyediaan model, penggunaan dan pemantauan hinggalah penanda aras dan pendedahan model melalui AI Gateway. Pengurusan mesin maya kini tersedia sepenuhnya kepada pengguna Edisi Komuniti, laporan operasi tersedia kepada pengguna Edisi Profesional, dan lepasan ini turut memperkenalkan pengurusan perkhidmatan MCP 1Panel, pengesanan kemas kini imej kontena serta peningkatan pukal.

Pada 11 November 2026, 1Panel, panel pengurusan pelayan Linux generasi baharu, secara rasmi melancarkan versi 2.5.0.

1Panel v2.5.0 memberi tumpuan kepada **penambahbaikan pengalaman penggunaan model tempatan**. Ia menghubungkan keseluruhan kitaran daripada **pengurusan GPU, penyediaan model, penggunaan model dan perkhidmatan model hinggalah penanda aras dan penyediaan perkhidmatan Token melalui AI Gateway**. Dengan versi baharu ini, pengguna boleh menggunakan dan mengurus model tempatan dengan pantas pada pelayan AI serta melengkapkan pemeriksaan persekitaran, konfigurasi penggunaan dan pemantauan masa jalan terus dalam panel, seterusnya mengurangkan peralihan berulang antara alat yang berbeza.

Pada masa yang sama, 1Panel v2.5.0 membuka pengurusan mesin maya sepenuhnya kepada pengguna Edisi Komuniti, membuka laporan operasi kepada pengguna Edisi Profesional, dan menambah keupayaan praktikal seperti pengurusan perkhidmatan MCP 1Panel serta pengesanan kemas kini imej kontena dengan peningkatan pukal, sambil terus memperbaiki pengalaman pengurusan pelayan.

Pengguna sedia ada boleh mengklik **Semak kemas kini** di penjuru kanan bawah panel untuk melakukan peningkatan dalam talian. Untuk senarai perubahan penuh, lihat [lepasan v2.5.0](https://github.com/1Panel-dev/1Panel/releases/tag/v2.5.0).

**Terima kasih kepada komuniti atas maklum balas dan sokongan berterusan. 1Panel berharap dapat membina pengalaman operasi Linux yang lebih cekap, selamat dan pintar bersama anda.**

## Kandungan

- [Sorotan](#sorotan)
- [Ciri Baharu Lain](#ciri-baharu-lain)
- [Penambahbaikan](#penambahbaikan)
- [Pembetulan Pepijat](#pembetulan-pepijat)
- [Cara Menaik Taraf](#cara-menaik-taraf)

---

## Sorotan

### Pengurusan GPU dibina semula

Sebelum menggunakan model tempatan, anda perlu memastikan GPU dikesan dengan betul dan pemacu serta runtime kontena sudah sedia. 1Panel v2.5.0 membina semula pengurusan GPU sepenuhnya, memaparkan maklumat peranti, status persekitaran serta pemantauan masa nyata dan sejarah dalam satu antara muka bersatu, supaya pengguna dapat memahami keupayaan dan keadaan operasi peranti semasa dengan sekali pandang.

Untuk peranti NVIDIA, pengguna boleh menyemak status pemacu dan NVIDIA Container Toolkit terus dalam panel serta melihat panduan pemasangan dan konfigurasi yang berkaitan. Bagi peranti daripada vendor lain, panel menyediakan diagnostik persekitaran yang berkaitan untuk membantu pengguna menentukan kerja persediaan yang masih tinggal.

Selepas model berjalan, pengguna boleh melihat metrik masa nyata seperti penggunaan GPU, penggunaan memori, suhu dan penggunaan kuasa, serta memerhati perubahan beban melalui lengkung sejarah. Setiap peranti memaparkan metrik yang disokongnya, memudahkan siasatan kekurangan sumber atau beban tinggi dan menjadi rujukan untuk pelarasan penggunaan.

![Rajah 1: Antara muka pengurusan dan pemantauan GPU 1Panel](/blog/1panel-v2-5-0-release/image-01.webp)

*Rajah 1: Antara muka pengurusan dan pemantauan GPU 1Panel*

### Model pilihan, muat turun model dan vLLM Recipes

Dengan bilangan model sumber terbuka yang semakin meningkat, memilih model, mengetahui tempat memuat turunnya dan menetapkan parameter permulaan ialah persoalan yang perlu diselesaikan sebelum penggunaan.

1Panel v2.5.0 menghubungkan model pilihan, muat turun model dan vLLM Recipes supaya penyediaan model berpandukan rujukan yang lebih jelas. Pengguna boleh menyemak spesifikasi model, senario penggunaan dan saiz pemberat daripada senarai model pilihan, kemudian beralih ke aliran muat turun untuk menyediakan fail tempatan yang diperlukan. Tugasan muat turun dan fail model tempatan boleh diurus secara berpusat, memudahkan pencarian dan penggunaan semula kemudian.

Bagi model yang memerlukan rujukan konfigurasi permulaan, pengguna juga boleh melihat contoh konfigurasi penggunaan yang disediakan oleh vLLM Recipes dan melaraskan parameter mengikut perkakasan sasaran, versi model dan persekitaran masa jalan, seterusnya mengurangkan usaha membina konfigurasi dari awal.

![Rajah 2: Model pilihan, muat turun model dan vLLM Recipes 1Panel](/blog/1panel-v2-5-0-release/image-02.webp)

*Rajah 2: Model pilihan, muat turun model dan vLLM Recipes 1Panel*

### Pengurusan vLLM dibina semula untuk konfigurasi penggunaan dan pemantauan yang lebih jelas

Setelah fail model sedia, langkah seterusnya ialah memastikan model berjalan dengan stabil. 1Panel v2.5.0 membina semula modul pengurusan vLLM sepenuhnya dan memperhalusi aliran kerja sekitar penciptaan instans, konfigurasi penggunaan dan pemantauan masa jalan, supaya pengguna dapat menyusun operasi penggunaan mengikut model dan persekitaran perkakasan yang dipilih. Semasa mencipta instans, pengguna boleh memilih imej masa jalan, fail model dan templat permulaan, serta mengkonfigurasi parameter GPU dan permulaan model.

Selepas instans berjalan, pengguna boleh melihat status dan log model di satu tempat serta menggunakan halaman pemantauan untuk menyemak jumlah permintaan, daya pemprosesan Token dan kependaman respons. Digabungkan dengan penggunaan sumber GPU, ini memudahkan pemerhatian beban perkhidmatan dan menjadi asas untuk pelarasan parameter penggunaan seterusnya.

![Rajah 3: Antara muka penggunaan instans vLLM 1Panel](/blog/1panel-v2-5-0-release/image-03.webp)

*Rajah 3: Antara muka penggunaan instans vLLM 1Panel*

![Rajah 4: Antara muka pemantauan inferens vLLM 1Panel](/blog/1panel-v2-5-0-release/image-04.webp)

*Rajah 4: Antara muka pemantauan inferens vLLM 1Panel*

### Pengurusan bersatu model tempatan, awan awam dan akaun AI Gateway binaan sendiri

Dalam amalan, model yang digunakan secara tempatan, model awan awam dan AI Gateway binaan sendiri sering wujud serentak. 1Panel v2.5.0 membina semula modul **Perkhidmatan Model** sepenuhnya dan menguruskan perkhidmatan model tempatan, akaun model awan awam serta akaun model daripada AI Gateway binaan sendiri secara berpusat, memudahkan semakan dan penyelenggaraan perkhidmatan model daripada sumber yang berbeza.

Pengguna boleh mengkonfigurasi alamat sambungan dan kelayakan akses mengikut sumber perkhidmatan, melihat senarai model di bawah setiap akaun dan mengesahkan sambungan. Setelah penggunaan dan penyambungan selesai, maklumat perkhidmatan dan model yang tersedia menjadi lebih jelas, dan ia menyediakan titik masuk pilihan bersatu untuk penggunaan dan penanda aras kemudian.

![Rajah 5: Antara muka pengurusan perkhidmatan model 1Panel](/blog/1panel-v2-5-0-release/image-05.webp)

*Rajah 5: Antara muka pengurusan perkhidmatan model 1Panel*

### Pratetap penanda aras terbina dalam

Selepas model dilancarkan, pengguna biasanya perlu memahami prestasinya di bawah beban sebenar, termasuk masa untuk Token pertama, kelajuan output berterusan dan daya pemprosesan apabila konkurensi meningkat. 1Panel v2.5.0 menyediakan penanda aras perkhidmatan model: pengguna memilih perkhidmatan dan model sasaran, kemudian menjalankan ujian prestasi yang disasarkan menggunakan pratetap seperti pengesahan pantas, ujian standard dan ujian penuh.

Pengguna boleh melaraskan panjang permintaan, panjang output dan konkurensi, serta menyemak keputusan seperti masa ke Token pertama (TTFT), kependaman permintaan dan daya pemprosesan Token. Menguji konfigurasi penggunaan yang berbeza dengan pratetap yang sama membantu pengguna memahami kesan perubahan parameter dan menjadi rujukan untuk perancangan sumber serta penalaan perkhidmatan.

![Rajah 6: Antara muka konfigurasi dan keputusan penanda aras perkhidmatan model 1Panel](/blog/1panel-v2-5-0-release/image-06.webp)

*Rajah 6: Antara muka konfigurasi dan keputusan penanda aras perkhidmatan model 1Panel*

---

## Ciri Baharu Lain

- **Mesin Maya** — Pengurusan mesin maya kini tersedia kepada pengguna Edisi Komuniti.
- **Gambaran Keseluruhan** — Paparan status GPU dan pemantauan daya pemprosesan Token vLLM ditambah, serta sokongan berbilang pintasan direktori.
- **Ejen** — Sokongan untuk DeepSeek Harness dan OctoP.
- **Pengurusan MCP** — Pengurusan perkhidmatan MCP 1Panel ditambah.
- **Laman Web** — Tamat masa proksi songsang kini boleh dikonfigurasi dalam penalaan prestasi.
- **Sijil** — Sijil yang dikeluarkan boleh ditolak ke berbilang direktori tempatan sekali gus, dan sijil akar tandatangan sendiri boleh diimport.
- **Kontena** — Direktori kontena menyokong muat naik fail secara pukal.
- **Kontena** — Pengesanan kemas kini imej dan penunjuk status ditambah, dan senarai kontena menyokong peningkatan pukal.
- **Kontena** — Sokongan carian imej jauh di Docker Hub.
- **Kontena** — Suis konfigurasi runtime GPU NVIDIA ditambah.
- **Cron** — Tugasan akses URL menyokong penetapan pengepala permintaan User-Agent.
- **Penyegerakan Sumber** — Templat sambungan PHP boleh disegerakkan merentas nod.
- **Laporan Operasi (X-Pack)** — Laporan operasi kini tersedia kepada pengguna Edisi Profesional.
- **Berbilang Nod (X-Pack)** — Nod boleh dipasang dan dinaik taraf menggunakan pakej pemasangan sedia ada.

---

## Penambahbaikan

- **App Store** — Penyegerakan apl tempatan kini boleh merangkumi nod anak, awalan imej boleh dikonfigurasi dan dihidupkan secara berasingan, dan permintaan sumber semasa penyegerakan dikurangkan.
- **Ejen** — Senarai model dan konfigurasi lalai MiniMax Flash serta nama model lalai DeepSeek dikemas kini.
- **Laman Web** — Mesej status diperbaiki apabila konfigurasi Brotli belum berkuat kuasa.
- **Runtime** — Kemas kini kini menunggu tarikan imej selesai sebelum menghentikan kontena sedia ada, memendekkan gangguan perkhidmatan akibat tarikan imej.
- **Pangkalan Data** — Peraturan pengesahan nama pengguna dan kata laluan disatukan.
- **Kontena** — Susunan mengikut masa penciptaan ditambah dengan pemulihan susunan lalai apabila susunan dikosongkan, dan senarai yang kekal dalam keadaan memuatkan untuk masa lama dikurangkan.
- **Fail** — Pengendalian kekunci Esc dan pembatalan semasa menamakan semula diperbaiki, serta pengesahan sumber operasi fail sensitif dan penjejakan sumber dalam rekod sejarah diperkukuh.
- **Terminal** — Paparan sempadan pintasan terminal dalam mod gelap diperbaiki.
- **Tetapan Antara Muka** — Dialog log tugasan dan pengesahan pemadaman disatukan, dan latar belakang halaman log masuk Edisi Enterprise dikemas kini.
- **Audit Log** — Rakaman IP klien dan penyimpanan maklumat log masuk diperbaiki apabila menggunakan proksi dipercayai.
- **Tetapan Panel** — Sokongan memadam kunci API yang dibatalkan, pengesahan storan sandaran dan sijil proksi HTTPS diperbaiki, serta sokongan sijil CA tersuai.
- **Sistem** — Kedudukan petua jadual disatukan, bilangan maksimum item setiap halaman dinaikkan, dan susun atur jadual responsif diperbaiki.
- **Sistem** — Sekatan akses terhadap sesi tamat tempoh dan penggunaan kelayakan diperketat, pengesahan sijil TLS untuk permintaan sumber luaran diperbaiki, dan kebergantungan penghuraian Markdown serta HTML dinaik taraf.
- **Berbilang Nod (X-Pack)** — Kelajuan muat naik SFTP antara nod diperbaiki dan tempoh cubaan semula penyegerakan data nod dilanjutkan.

---

## Pembetulan Pepijat

- **App Store** — Membetulkan kata laluan berangka yang bermula dengan "+" atau "-0" ditulis semula semasa memasang apl atau menukar parameter apl.
- **App Store** — Membetulkan nilai pemboleh ubah persekitaran ditulis semula semasa peningkatan apl, dan apl daripada versi yang telah ditarik tidak dapat dinaik taraf.
- **App Store** — Membetulkan ralat pengalihan ikon apl apabila diakses melalui proksi nod, serta isu dalam muat semula cache sumber dan pilihan versi runtime PHP.
- **Ejen** — Membetulkan ralat modul hilang dan kod QR tidak dipaparkan semasa penyediaan saluran WeChat Hermes.
- **Ejen** — Membetulkan isu keserasian pemalam Feishu selepas peningkatan OpenClaw sambil mengekalkan konfigurasi Feishu lama.
- **Laman Web** — Membetulkan perubahan runtime PHP tidak disegerakkan ke sublaman.
- **Runtime** — Membetulkan terminal projek melaporkan kontena tidak ditemui dan gagal disambungkan.
- **Pangkalan Data** — Membetulkan pautan alat pengurusan tidak menggunakan alamat akses web tersuai apl.
- **Kontena** — Membetulkan penapis carian hilang apabila kembali ke senarai selepas mengedit kontena, dan pembersihan log gagal untuk nama instans apl yang mengandungi huruf besar.
- **Fail** — Membetulkan penamaan semula terus menimpa fail sasaran dengan nama sama, laluan simpanan muat turun berpotensi keluar dari direktori yang dipilih, dan suntikan argumen dalam arahan pemampatan tar.
- **Terminal** — Membetulkan kunci automatik tidak dipaparkan selepas menambah nod, yang masih memerlukan kata laluan SSH untuk menyambung.
- **Cron** — Membetulkan penyegerakan pustaka skrip menggunakan cache sumber yang lapuk.
- **Audit Log** — Membetulkan log operasi memaparkan ID sumber dan bukannya nama apabila menukar versi PHP laman web dan memadam runtime PHP.
- **Tetapan Panel** — Membetulkan panel tidak dapat diakses selepas mengaktifkan semula pintu keselamatan, dan carian akaun sandaran mengikut nama tidak normal.
- **Sistem** — Membetulkan perubahan kata laluan melalui arahan `1pctl` tidak mengikut tetapan kerumitan kata laluan.
- **Sistem** — Membetulkan jam sistem berundur satu jam apabila penyegerakan masa berlaku dalam tempoh berulang selepas waktu siang tamat.
- **WAF (X-Pack)** — Membetulkan ralat semasa membuka tetapan laman web, dan API asas nod anak Edisi Komuniti tidak dibenarkan.
- **Pemantauan Laman Web (X-Pack)** — Membetulkan ralat dalam statistik log permintaan.

---

## Cara Menaik Taraf

Pengguna sedia ada boleh mengklik **Semak kemas kini** di penjuru kanan bawah papan pemuka 1Panel untuk melengkapkan peningkatan dalam talian.

Baharu menggunakan 1Panel? Lawati [1panel.pro](https://1panel.pro/) untuk bermula.

---

## Sumber

Nota lepasan penuh: [1Panel v2.5.0 di GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.5.0)
