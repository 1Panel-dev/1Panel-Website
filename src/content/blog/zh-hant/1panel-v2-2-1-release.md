---
title: "1Panel v2.2.1 發布：防火牆埠白名單、多節點概覽與 Dynadot DNS"
description: "1Panel v2.2.1 新增 Dynadot DNS、防火牆埠白名單、遠端下載代理、多節點智能體與憑證概覽，並涵蓋 App Store、容器、排程、多節點等廣泛 UI 優化與修復。"
pubDate: 2026-06-11
updatedDate: 2026-06-11
tags:
  - 1Panel
  - 發布說明
  - Firewall
  - Multi-Node
  - MCP
  - File Browser
  - Certificates
  - Panel Settings
---

1Panel v2.2.1 現已可用。此版本擴展憑證與防火牆能力、強化多節點管理，並在容器、排程任務與系統設定上提供大量 UI 精煉與可靠性修復。

## 重點摘要

- **Dynadot DNS** — 新增 Dynadot DNS 服務商，支援自動化憑證簽發
- **防火牆埠白名單** — 集中管理允許連接埠，無需零散規則
- **多節點概覽** — 概覽頁展示智能體與憑證資訊，快速掌握叢集狀態
- **File Browser** — 遠端下載代理配置；表格支援 Shift 多行選取
- **面板告警** — 可新增多個同類型告警方式；簡訊告警支援顯示名稱與更嚴格校驗
- **全面打磨** — 容器日誌、深色主題、任務列表、MCP 選單標題、終端命令安全校驗等

---

## 新增功能

### Certificates

- **Dynadot DNS 服務商** — 使用 Dynadot 進行 DNS 驗證簽發與續期（[`#12829`](https://github.com/1Panel-dev/1Panel/pull/12829)）。

### File Browser

- **遠端下載代理** — 遠端檔案下載可配置代理（[`#12942`](https://github.com/1Panel-dev/1Panel/pull/12942)）。

### Firewall

- **埠白名單管理** — 在面板中定義與管理防火牆埠白名單（[`#12912`](https://github.com/1Panel-dev/1Panel/pull/12912)）。

### Multi-Node

- **概覽：智能體與憑證** — 多節點概覽頁展示智能體與憑證資訊（[`#12933`](https://github.com/1Panel-dev/1Panel/pull/12933)）。
- **系統安裝包管理** — 支援跨節點管理 1Panel 系統安裝包（[`#12982`](https://github.com/1Panel-dev/1Panel/pull/12982)）。

### Panel Settings

- **同類型多告警** — 可新增多個相同類型的告警方式（[`#12922`](https://github.com/1Panel-dev/1Panel/pull/12922)）。

---

## 功能優化

### Overview

- **備忘錄樣式** — 優化首頁備忘錄元件呈現（[`#12958`](https://github.com/1Panel-dev/1Panel/pull/12958)）。

### Containers

- **日誌展示** — 優化容器日誌檢視（[`#12939`](https://github.com/1Panel-dev/1Panel/pull/12939)）。
- **刪除鏡像日誌** — 刪除鏡像後自動展示任務日誌（[`#12868`](https://github.com/1Panel-dev/1Panel/pull/12868)）。

### File Browser

- **Shift 多選** — 按住 Shift 快速選取表格連續多行（[`#12941`](https://github.com/1Panel-dev/1Panel/pull/12941)）。
- **編輯器儲存** — 優化檔案編輯器儲存邏輯（[`#12852`](https://github.com/1Panel-dev/1Panel/pull/12852)）。

### Firewall

- **埠範圍占用檢查** — 埠範圍規則支援檢查埠是否已被占用（[`#12950`](https://github.com/1Panel-dev/1Panel/pull/12950)）。

### SSH Management

- **日誌解析** — 優化 SSH 日誌解析邏輯（[`#12803`](https://github.com/1Panel-dev/1Panel/pull/12803)）。

### Terminal

- **命令生成安全校驗** — 終端生成命令增加安全驗證（[`#12826`](https://github.com/1Panel-dev/1Panel/pull/12826)）。

### Multi-Node

- **節點數量限制** — 優化節點數量上限處理（[`#12867`](https://github.com/1Panel-dev/1Panel/pull/12867)）。
- **大規模切換** — 優化大量節點場景下的節點切換（[`#12928`](https://github.com/1Panel-dev/1Panel/pull/12928)）。

### MCP

- **選單標題** — 優化 MCP 選單標題展示（[`#12818`](https://github.com/1Panel-dev/1Panel/pull/12818)）。

### Panel Settings

- **簡訊告警** — 支援顯示名稱並增強配置校驗（[`#12945`](https://github.com/1Panel-dev/1Panel/pull/12945)）。
- **授權匯入警告** — 匯入授權時新增警告提示（[`#12952`](https://github.com/1Panel-dev/1Panel/pull/12952)）。

### System

- **命令結果展示** — 優化命令執行結果顯示（[`#12837`](https://github.com/1Panel-dev/1Panel/pull/12837)）。
- **任務列表與側欄** — 優化任務列表與側欄互動（[`#12839`](https://github.com/1Panel-dev/1Panel/pull/12839)）。
- **驗證碼校驗** — 優化驗證碼校驗方式（[`#12946`](https://github.com/1Panel-dev/1Panel/pull/12946)）。
- **API 文件** — 完善 API 文件註解與日誌（[`#12915`](https://github.com/1Panel-dev/1Panel/pull/12915)、[`#12962`](https://github.com/1Panel-dev/1Panel/pull/12962)）。
- **表格禁用按鈕** — 優化表格禁用按鈕樣式（[`#12937`](https://github.com/1Panel-dev/1Panel/pull/12937)）。
- **深色主題** — 優化深色主題樣式（[`#12944`](https://github.com/1Panel-dev/1Panel/pull/12944)）。

---

## 問題修復

| 模組 | 修復內容 |
|---|---|
| **App Store** | 修復使用自訂應用倉庫時無法建立運行環境（[`#12887`](https://github.com/1Panel-dev/1Panel/pull/12887)）。 |
| **Websites** | 修復自訂重寫模板名稱大小寫未保留（[`#12714`](https://github.com/1Panel-dev/1Panel/pull/12714)）。 |
| **Certificates** | 修復自動續簽後面板憑證未同步（[`#12858`](https://github.com/1Panel-dev/1Panel/pull/12858)）。 |
| **Containers** | 修復部分場景 Compose 升級後容器 IP 未保留（[`#12902`](https://github.com/1Panel-dev/1Panel/pull/12902)）。 |
| **File Browser** | 修復部分通配符檔案複製異常（[`#12883`](https://github.com/1Panel-dev/1Panel/pull/12883)）。 |
| **Firewall** | 修復防火牆埠占用資訊顯示異常（[`#12961`](https://github.com/1Panel-dev/1Panel/pull/12961)）。 |
| **Toolbox** | 修復部分場景病毒掃描失敗（[`#12892`](https://github.com/1Panel-dev/1Panel/pull/12892)）。 |
| **Toolbox** | 修復進程守護運行超過一天時解析異常（[`#12713`](https://github.com/1Panel-dev/1Panel/pull/12713)）。 |
| **SSH Management** | 修復部分場景 SSH 服務自動啟用異常（[`#12898`](https://github.com/1Panel-dev/1Panel/pull/12898)）。 |
| **Cron** | 修復子節點執行腳本庫失敗（[`#12869`](https://github.com/1Panel-dev/1Panel/pull/12869)）。 |
| **Cron** | 修復部分場景腳本更新時備份保留數量不生效（[`#12896`](https://github.com/1Panel-dev/1Panel/pull/12896)）。 |
| **Multi-Node** | 修復部分場景節點自動升級失敗（[`#12875`](https://github.com/1Panel-dev/1Panel/pull/12875)）。 |
| **Multi-Node** | 修復概覽頁節點終端連接失敗（[`#12901`](https://github.com/1Panel-dev/1Panel/pull/12901)）。 |
| **Log Audit** | 修復部分操作日誌顯示異常（[`#12936`](https://github.com/1Panel-dev/1Panel/pull/12936)）。 |
| **System** | 修復部分場景開啟檔案失敗導致系統異常（[`#12808`](https://github.com/1Panel-dev/1Panel/pull/12808)）。 |
| **System** | 修復匯入授權後主題更新延遲（[`#12911`](https://github.com/1Panel-dev/1Panel/pull/12911)）。 |
| **System** | 修復部分場景自訂登入背景圖顯示異常（[`#12977`](https://github.com/1Panel-dev/1Panel/pull/12977)）。 |

---

## 如何升級

在 1Panel 儀表板右下角點擊 `Update` 即可完成升級。

首次使用 1Panel？可前往 [1panel.pro](https://1panel.pro/) 了解更多。

---

## 來源

完整發版說明：[1Panel v2.2.1 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.2.1)
