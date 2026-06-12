---
title: "1Panel v2.2.1 リリース: ファイアウォールポートホワイトリスト、マルチノード概要、Dynadot DNS"
description: "1Panel v2.2.1 は Dynadot DNS、ファイアウォールポートホワイトリスト、リモートダウンロードプロキシ、マルチノード概要での Agents/証明書表示、App Store・コンテナ・Cron・マルチノード向けの広範な改善と修正を含みます。"
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

1Panel v2.2.1 を公開しました。証明書とファイアウォール機能の拡張、マルチノード管理の強化、コンテナ・Cron・システム設定の UI 改善と信頼性修正が中心です。

## Highlights

- **Dynadot DNS** — 証明書自動発行用 DNS プロバイダを追加
- **ポートホワイトリスト** — ファイアウォールで許可ポートを集中管理
- **マルチノード概要** — 概要ページに Agents と証明書情報を表示
- **File Browser** — リモートダウンロードのプロキシ、Shift による複数行選択
- **パネルアラート** — 同一タイプの複数通知、SMS 表示名と検証強化
- **全体の磨き込み** — コンテナログ、ダークテーマ、タスク一覧、MCP メニュー、ターミナル安全検証

---

## New Features

### Certificates

- **Dynadot DNS プロバイダ** — Dynadot で DNS 検証による証明書の発行・更新（[`#12829`](https://github.com/1Panel-dev/1Panel/pull/12829)）。

### File Browser

- **リモートダウンロードプロキシ** — 直接アクセスがブロックまたはルーティングされる場合にプロキシを設定（[`#12942`](https://github.com/1Panel-dev/1Panel/pull/12942)）。

### Firewall

- **ポートホワイトリスト管理** — パネルからファイアウォールのポートホワイトリストを定義・管理（[`#12912`](https://github.com/1Panel-dev/1Panel/pull/12912)）。

### Multi-Node

- **概要: Agents と証明書** — マルチノード概要ページに Agents と証明書情報を表示（[`#12933`](https://github.com/1Panel-dev/1Panel/pull/12933)）。
- **システムパッケージ管理** — ノード間で 1Panel システムインストールパッケージを管理（[`#12982`](https://github.com/1Panel-dev/1Panel/pull/12982)）。

### Panel Settings

- **同一タイプの複数アラート** — チャネルタイプごとに複数の通知方法を追加（[`#12922`](https://github.com/1Panel-dev/1Panel/pull/12922)）。

---

## Enhancements

### Overview

- **メモスタイル** — ホームのメモウィジェット表示を改善（[`#12958`](https://github.com/1Panel-dev/1Panel/pull/12958)）。

### Containers

- **ログ表示** — コンテナログの閲覧性を向上（[`#12939`](https://github.com/1Panel-dev/1Panel/pull/12939)）。
- **イメージ削除後のログ** — イメージ削除後にタスクログを自動表示（[`#12868`](https://github.com/1Panel-dev/1Panel/pull/12868)）。

### File Browser

- **Shift 複数選択** — Shift キーで連続行を素早く選択（[`#12941`](https://github.com/1Panel-dev/1Panel/pull/12941)）。
- **エディタ保存ロジック** — ファイルエディタの保存動作を改善（[`#12852`](https://github.com/1Panel-dev/1Panel/pull/12852)）。

### Firewall

- **ポート範囲の占有チェック** — ポート範囲ルールで使用中ポートを確認（[`#12950`](https://github.com/1Panel-dev/1Panel/pull/12950)）。

### SSH Management

- **ログ解析** — SSH ログ解析ロジックを改善（[`#12803`](https://github.com/1Panel-dev/1Panel/pull/12803)）。

### Terminal

- **生成コマンドの安全検証** — 生成されたターミナルコマンドに追加のセキュリティ検証（[`#12826`](https://github.com/1Panel-dev/1Panel/pull/12826)）。

### Multi-Node

- **ノード数制限** — ノード上限到達時の処理を改善（[`#12867`](https://github.com/1Panel-dev/1Panel/pull/12867)）。
- **大規模環境の切り替え** — 多数ノード環境でのノード切り替えを最適化（[`#12928`](https://github.com/1Panel-dev/1Panel/pull/12928)）。

### MCP

- **メニュータイトル** — サイドバーの MCP メニュータイトル表示を改善（[`#12818`](https://github.com/1Panel-dev/1Panel/pull/12818)）。

### Panel Settings

- **SMS アラート** — 表示名と設定検証の強化（[`#12945`](https://github.com/1Panel-dev/1Panel/pull/12945)）。
- **ライセンスインポート警告** — ライセンスインポート時の警告表示（[`#12952`](https://github.com/1Panel-dev/1Panel/pull/12952)）。

### System

- **コマンド結果表示** — コマンド実行結果の可読性を向上（[`#12837`](https://github.com/1Panel-dev/1Panel/pull/12837)）。
- **タスク一覧とサイドバー** — 操作感を改善（[`#12839`](https://github.com/1Panel-dev/1Panel/pull/12839)）。
- **Captcha 検証** — 検証方式を最適化（[`#12946`](https://github.com/1Panel-dev/1Panel/pull/12946)）。
- **API ドキュメント** — 注釈とログ出力を改善（[`#12915`](https://github.com/1Panel-dev/1Panel/pull/12915)、[`#12962`](https://github.com/1Panel-dev/1Panel/pull/12962)）。
- **テーブル無効ボタン** — 無効ボタンのスタイルを改善（[`#12937`](https://github.com/1Panel-dev/1Panel/pull/12937)）。
- **ダークテーマ** — ダークテーマスタイルを改善（[`#12944`](https://github.com/1Panel-dev/1Panel/pull/12944)）。

---

## Bug Fixes

| 領域 | 修正内容 |
|---|---|
| **App Store** | カスタムアプリリポジトリ使用時に Runtime 環境を作成可能に（[`#12887`](https://github.com/1Panel-dev/1Panel/pull/12887)）。 |
| **Websites** | カスタム rewrite テンプレート名の大文字小文字を保持（[`#12714`](https://github.com/1Panel-dev/1Panel/pull/12714)）。 |
| **Certificates** | 自動更新後にパネル証明書が正しく同期（[`#12858`](https://github.com/1Panel-dev/1Panel/pull/12858)）。 |
| **Containers** | Compose アップグレード後もコンテナ IP を保持（[`#12902`](https://github.com/1Panel-dev/1Panel/pull/12902)）。 |
| **File Browser** | ワイルドカードファイルコピーの異常を修正（[`#12883`](https://github.com/1Panel-dev/1Panel/pull/12883)）。 |
| **Firewall** | ポート占有情報の表示を修正（[`#12961`](https://github.com/1Panel-dev/1Panel/pull/12961)）。 |
| **Toolbox** | 一部シナリオでのウイルススキャン失敗を修正（[`#12892`](https://github.com/1Panel-dev/1Panel/pull/12892)）。 |
| **Toolbox** | プロセスガードの稼働 1 日超の解析を修正（[`#12713`](https://github.com/1Panel-dev/1Panel/pull/12713)）。 |
| **SSH Management** | SSH サービスの自動有効化を修正（[`#12898`](https://github.com/1Panel-dev/1Panel/pull/12898)）。 |
| **Cron** | 子ノードでのスクリプトライブラリ実行を修正（[`#12869`](https://github.com/1Panel-dev/1Panel/pull/12869)）。 |
| **Cron** | スクリプト更新時のバックアップ保持数を修正（[`#12896`](https://github.com/1Panel-dev/1Panel/pull/12896)）。 |
| **Multi-Node** | ノード自動アップグレード失敗を修正（[`#12875`](https://github.com/1Panel-dev/1Panel/pull/12875)）。 |
| **Multi-Node** | 概要ページからのノードターミナル接続を修正（[`#12901`](https://github.com/1Panel-dev/1Panel/pull/12901)）。 |
| **Log Audit** | 操作ログ表示の異常を修正（[`#12936`](https://github.com/1Panel-dev/1Panel/pull/12936)）。 |
| **System** | ファイルオープン失敗によるシステム例外を修正（[`#12808`](https://github.com/1Panel-dev/1Panel/pull/12808)）。 |
| **System** | ライセンスインポート後のテーマ更新遅延を修正（[`#12911`](https://github.com/1Panel-dev/1Panel/pull/12911)）。 |
| **System** | カスタムログイン背景画像の表示を修正（[`#12977`](https://github.com/1Panel-dev/1Panel/pull/12977)）。 |

---

## How to Upgrade

ダッシュボード右下の `Update` からアップグレードできます。

はじめての方は [1panel.pro](https://1panel.pro/) をご覧ください。

---

## Source

詳細なリリースノート: [1Panel v2.2.1 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.2.1)
