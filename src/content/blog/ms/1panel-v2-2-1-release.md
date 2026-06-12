---
title: "1Panel v2.2.1 dilancarkan: senarai putih port firewall, overview multi-nod dan Dynadot DNS"
description: "1Panel v2.2.1 menambah Dynadot DNS, senarai putih port firewall, proksi muat turun jauh, overview agents dan sijil multi-nod, serta penambahbaikan UI dan pembetulan meluas."
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

1Panel v2.2.1 kini tersedia. Keluaran ini meluaskan sijil dan firewall, mengukuhkan pengurusan multi-nod, dan membawa banyak penambahbaikan UI serta pembetulan kebolehpercayaan untuk kontena, cron dan tetapan sistem.

## Highlights

- **Dynadot DNS** — penyedia DNS baharu untuk pengeluaran sijil automatik
- **Senarai putih port** — urus port dibenarkan firewall secara pusat
- **Overview multi-nod** — agents dan sijil dipaparkan di halaman ringkasan
- **File Browser** — proksi muat turun jauh; pilihan berbilang baris dengan Shift
- **Amaran panel** — berbilang kaedah amaran jenis sama; SMS dengan nama paparan dan validasi ketat
- **Penambahbaikan meluas** — log kontena, tema gelap, senarai tugas, menu MCP, keselamatan terminal

---

## New Features

### Certificates

- **Penyedia Dynadot DNS** — keluarkan dan perbaharui sijil dengan pengesahan DNS Dynadot ([`#12829`](https://github.com/1Panel-dev/1Panel/pull/12829)).

### File Browser

- **Proksi muat turun jauh** — konfigurasi proksi apabila akses langsung disekat atau dihalakan ([`#12942`](https://github.com/1Panel-dev/1Panel/pull/12942)).

### Firewall

- **Pengurusan senarai putih port** — tentukan dan urus senarai putih port dari panel ([`#12912`](https://github.com/1Panel-dev/1Panel/pull/12912)).

### Multi-Node

- **Overview: agents dan sijil** — halaman overview multi-nod memaparkan maklumat agents dan sijil ([`#12933`](https://github.com/1Panel-dev/1Panel/pull/12933)).
- **Pengurusan pakej sistem** — urus pakej pemasangan sistem 1Panel merentasi nod ([`#12982`](https://github.com/1Panel-dev/1Panel/pull/12982)).

### Panel Settings

- **Berbilang amaran jenis sama** — tambah lebih daripada satu kaedah amaran setiap jenis saluran ([`#12922`](https://github.com/1Panel-dev/1Panel/pull/12922)).

---

## Enhancements

### Overview

- **Gaya memo** — paparan widget memo laman utama diperhalus ([`#12958`](https://github.com/1Panel-dev/1Panel/pull/12958)).

### Containers

- **Paparan log** — log kontena lebih jelas ([`#12939`](https://github.com/1Panel-dev/1Panel/pull/12939)).
- **Log selepas padam imej** — log tugas dibuka automatik selepas padam imej ([`#12868`](https://github.com/1Panel-dev/1Panel/pull/12868)).

### File Browser

- **Pilihan berbilang dengan Shift** — tahan Shift untuk pilih baris berturutan ([`#12941`](https://github.com/1Panel-dev/1Panel/pull/12941)).
- **Logik simpan editor** — tingkah laku simpan editor lebih boleh diramal ([`#12852`](https://github.com/1Panel-dev/1Panel/pull/12852)).

### Firewall

- **Semakan penghunian julat port** — peraturan julat port mengesahkan port sudah digunakan ([`#12950`](https://github.com/1Panel-dev/1Panel/pull/12950)).

### SSH Management

- **Penghuraian log** — logik parsing log SSH diperbaiki ([`#12803`](https://github.com/1Panel-dev/1Panel/pull/12803)).

### Terminal

- **Keselamatan arahan dijana** — pengesahan keselamatan tambahan untuk arahan terminal ([`#12826`](https://github.com/1Panel-dev/1Panel/pull/12826)).

### Multi-Node

- **Had bilangan nod** — pengendalian had nod lebih jelas ([`#12867`](https://github.com/1Panel-dev/1Panel/pull/12867)).
- **Pertukaran fleet besar** — pertukaran nod dioptimumkan untuk banyak nod ([`#12928`](https://github.com/1Panel-dev/1Panel/pull/12928)).

### MCP

- **Tajuk menu** — tajuk menu MCP lebih konsisten di sidebar ([`#12818`](https://github.com/1Panel-dev/1Panel/pull/12818)).

### Panel Settings

- **Amaran SMS** — nama paparan dan validasi konfigurasi diperkukuh ([`#12945`](https://github.com/1Panel-dev/1Panel/pull/12945)).
- **Amaran import lesen** — amaran semasa import lesen ([`#12952`](https://github.com/1Panel-dev/1Panel/pull/12952)).

### System

- **Paparan hasil arahan** — output pelaksanaan arahan lebih mudah dibaca ([`#12837`](https://github.com/1Panel-dev/1Panel/pull/12837)).
- **Senarai tugas dan sidebar** — interaksi lebih lancar ([`#12839`](https://github.com/1Panel-dev/1Panel/pull/12839)).
- **Captcha** — kaedah pengesahan dioptimumkan ([`#12946`](https://github.com/1Panel-dev/1Panel/pull/12946)).
- **Dokumentasi API** — anotasi dan log diperbaiki ([`#12915`](https://github.com/1Panel-dev/1Panel/pull/12915), [`#12962`](https://github.com/1Panel-dev/1Panel/pull/12962)).
- **Butang dilumpuhkan dalam jadual** — gaya lebih jelas ([`#12937`](https://github.com/1Panel-dev/1Panel/pull/12937)).
- **Tema gelap** — gaya tema gelap diperhalus ([`#12944`](https://github.com/1Panel-dev/1Panel/pull/12944)).

---

## Bug Fixes

| Kawasan | Pembetulan |
|---|---|
| **App Store** | Persekitaran runtime boleh dicipta semula dengan repositori apl tersuai ([`#12887`](https://github.com/1Panel-dev/1Panel/pull/12887)). |
| **Websites** | Nama templat rewrite tersuai mengekalkan huruf besar/kecil ([`#12714`](https://github.com/1Panel-dev/1Panel/pull/12714)). |
| **Certificates** | Sijil panel disegerakkan selepas pembaharuan automatik ([`#12858`](https://github.com/1Panel-dev/1Panel/pull/12858)). |
| **Containers** | IP kontena dikekalkan selepas naik taraf Compose ([`#12902`](https://github.com/1Panel-dev/1Panel/pull/12902)). |
| **File Browser** | Salinan fail wildcard betul dalam kes tepi ([`#12883`](https://github.com/1Panel-dev/1Panel/pull/12883)). |
| **Firewall** | Maklumat penghunian port dipaparkan dengan betul ([`#12961`](https://github.com/1Panel-dev/1Panel/pull/12961)). |
| **Toolbox** | Imbasan virus tidak lagi gagal secara tidak dijangka ([`#12892`](https://github.com/1Panel-dev/1Panel/pull/12892)). |
| **Toolbox** | Uptime penjaga proses melebihi sehari dihuraikan dengan betul ([`#12713`](https://github.com/1Panel-dev/1Panel/pull/12713)). |
| **SSH Management** | Auto-enable SSH berkelakuan betul ([`#12898`](https://github.com/1Panel-dev/1Panel/pull/12898)). |
| **Cron** | Pustaka skrip berjaya di nod anak ([`#12869`](https://github.com/1Panel-dev/1Panel/pull/12869)). |
| **Cron** | Kiraan retention sandaran terpakai semasa kemas kini skrip ([`#12896`](https://github.com/1Panel-dev/1Panel/pull/12896)). |
| **Multi-Node** | Auto-naik taraf nod selesai dengan jayanya ([`#12875`](https://github.com/1Panel-dev/1Panel/pull/12875)). |
| **Multi-Node** | Sambungan terminal nod dari overview berfungsi semula ([`#12901`](https://github.com/1Panel-dev/1Panel/pull/12901)). |
| **Log Audit** | Log operasi dipaparkan dengan betul ([`#12936`](https://github.com/1Panel-dev/1Panel/pull/12936)). |
| **System** | Kegagalan buka fail tidak lagi menyebabkan pengecualian sistem ([`#12808`](https://github.com/1Panel-dev/1Panel/pull/12808)). |
| **System** | Tema dikemas kini segera selepas import lesen ([`#12911`](https://github.com/1Panel-dev/1Panel/pull/12911)). |
| **System** | Imej latar log masuk tersuai dipaparkan dengan betul ([`#12977`](https://github.com/1Panel-dev/1Panel/pull/12977)). |

---

## How to Upgrade

Klik butang `Update` di penjuru kanan bawah pada papan pemuka.

Baru mengenali 1Panel? Lawati [1panel.pro](https://1panel.pro/).

---

## Source

Nota keluaran penuh: [1Panel v2.2.1 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.2.1)
