---
title: "1Panel v2.2.1 Released: Firewall port whitelist, multi-node overview, and Dynadot DNS"
description: "1Panel v2.2.1 adds Dynadot DNS, firewall port whitelists, remote download proxies, multi-node agents and certificate overview, plus broad UI polish and fixes across App Store, containers, cron, and multi-node operations."
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

1Panel v2.2.1 is now available. This release expands certificate and firewall capabilities, strengthens multi-node management, and delivers a wide set of UI refinements and reliability fixes across containers, cron jobs, and system settings.

## Table of Contents

- [Highlights](#highlights)
- [New Features](#new-features)
- [Enhancements](#enhancements)
- [Bug Fixes](#bug-fixes)
- [How to Upgrade](#how-to-upgrade)

---

## Highlights

- **Dynadot DNS** — Automate certificate issuance with a new Dynadot DNS provider integration
- **Firewall port whitelist** — Manage allowed ports centrally instead of relying on ad hoc rules
- **Multi-node overview** — Agents and certificates surface on the overview page for faster fleet insight
- **File Browser upgrades** — Remote download proxy support and Shift-key multi-row selection in tables
- **Panel alerts** — Add multiple alert channels of the same type; SMS alerts gain display names and stricter validation
- **Broad polish** — Container logs, dark theme, task list interactions, MCP menu titles, and terminal command safety checks

---

## New Features

### Certificates

- **Dynadot DNS provider** — Issue and renew certificates using Dynadot for DNS validation ([`#12829`](https://github.com/1Panel-dev/1Panel/pull/12829)).

### File Browser

- **Remote download proxy** — Configure a proxy for remote file downloads when direct access is blocked or routed ([`#12942`](https://github.com/1Panel-dev/1Panel/pull/12942)).

### Firewall

- **Port whitelist management** — Define and manage firewall port whitelists from the panel ([`#12912`](https://github.com/1Panel-dev/1Panel/pull/12912)).

### Multi-Node

- **Overview: agents and certificates** — The multi-node overview page now shows agent and certificate information ([`#12933`](https://github.com/1Panel-dev/1Panel/pull/12933)).
- **System package management** — Manage 1Panel system installation packages across nodes ([`#12982`](https://github.com/1Panel-dev/1Panel/pull/12982)).

### Panel Settings

- **Multiple alerts of the same type** — Add more than one alert method per channel type (e.g., multiple email or SMS destinations) ([`#12922`](https://github.com/1Panel-dev/1Panel/pull/12922)).

---

## Enhancements

### Overview

- **Memo styles** — Refined memo widget presentation on the homepage ([`#12958`](https://github.com/1Panel-dev/1Panel/pull/12958)).

### Containers

- **Log display** — Container log viewing is clearer and easier to scan ([`#12939`](https://github.com/1Panel-dev/1Panel/pull/12939)).
- **Image deletion logs** — Task logs open automatically after image deletion completes ([`#12868`](https://github.com/1Panel-dev/1Panel/pull/12868)).

### File Browser

- **Shift multi-select** — Hold Shift to select contiguous rows in file tables quickly ([`#12941`](https://github.com/1Panel-dev/1Panel/pull/12941)).
- **Editor save logic** — File editor save behavior is more predictable ([`#12852`](https://github.com/1Panel-dev/1Panel/pull/12852)).

### Firewall

- **Port range occupancy checks** — Port range rules can verify whether ports are already in use ([`#12950`](https://github.com/1Panel-dev/1Panel/pull/12950)).

### SSH Management

- **Log parsing** — SSH log parsing logic is improved for accuracy ([`#12803`](https://github.com/1Panel-dev/1Panel/pull/12803)).

### Terminal

- **Command generation safety** — Generated terminal commands pass additional security validation ([`#12826`](https://github.com/1Panel-dev/1Panel/pull/12826)).

### Multi-Node

- **Node count limits** — Handling when node count limits are reached is clearer ([`#12867`](https://github.com/1Panel-dev/1Panel/pull/12867)).
- **Large fleet switching** — Node switching is optimized for environments with many nodes ([`#12928`](https://github.com/1Panel-dev/1Panel/pull/12928)).

### MCP

- **Menu title display** — MCP menu titles render more consistently in the sidebar ([`#12818`](https://github.com/1Panel-dev/1Panel/pull/12818)).

### Panel Settings

- **SMS alerts** — Display names and stronger configuration validation for SMS alert channels ([`#12945`](https://github.com/1Panel-dev/1Panel/pull/12945)).
- **License import warnings** — Warning prompts when importing licenses to reduce misconfiguration ([`#12952`](https://github.com/1Panel-dev/1Panel/pull/12952)).

### System

- **Command result display** — Command execution output is easier to read ([`#12837`](https://github.com/1Panel-dev/1Panel/pull/12837)).
- **Task list and sidebar** — Task list and sidebar interactions are smoother ([`#12839`](https://github.com/1Panel-dev/1Panel/pull/12839)).
- **Captcha verification** — Captcha validation method is optimized ([`#12946`](https://github.com/1Panel-dev/1Panel/pull/12946)).
- **API documentation** — API doc annotations and log output are improved ([`#12915`](https://github.com/1Panel-dev/1Panel/pull/12915), [`#12962`](https://github.com/1Panel-dev/1Panel/pull/12962)).
- **Table disabled buttons** — Disabled button styling in tables is clearer ([`#12937`](https://github.com/1Panel-dev/1Panel/pull/12937)).
- **Dark theme** — Dark theme styles are refined across common views ([`#12944`](https://github.com/1Panel-dev/1Panel/pull/12944)).

---

## Bug Fixes

| Area | Fix |
|---|---|
| **App Store** | Runtime environments can be created again when using custom app repositories ([`#12887`](https://github.com/1Panel-dev/1Panel/pull/12887)). |
| **Websites** | Custom rewrite template names preserve original casing ([`#12714`](https://github.com/1Panel-dev/1Panel/pull/12714)). |
| **Certificates** | Panel certificates sync correctly after automatic renewal ([`#12858`](https://github.com/1Panel-dev/1Panel/pull/12858)). |
| **Containers** | Container IPs are preserved after Compose upgrades in scenarios where they were dropped ([`#12902`](https://github.com/1Panel-dev/1Panel/pull/12902)). |
| **File Browser** | Wildcard file copy behaves correctly in edge cases ([`#12883`](https://github.com/1Panel-dev/1Panel/pull/12883)). |
| **Firewall** | Port occupancy information displays accurately ([`#12961`](https://github.com/1Panel-dev/1Panel/pull/12961)). |
| **Toolbox** | Virus scans no longer fail unexpectedly in some scenarios ([`#12892`](https://github.com/1Panel-dev/1Panel/pull/12892)). |
| **Toolbox** | Process guard uptime over one day parses correctly ([`#12713`](https://github.com/1Panel-dev/1Panel/pull/12713)). |
| **SSH Management** | SSH service auto-enable behaves correctly in scenarios where it previously failed ([`#12898`](https://github.com/1Panel-dev/1Panel/pull/12898)). |
| **Cron** | Script libraries execute successfully on child nodes ([`#12869`](https://github.com/1Panel-dev/1Panel/pull/12869)). |
| **Cron** | Backup retention count applies when updating scripts ([`#12896`](https://github.com/1Panel-dev/1Panel/pull/12896)). |
| **Multi-Node** | Node auto-upgrade completes in scenarios where it previously failed ([`#12875`](https://github.com/1Panel-dev/1Panel/pull/12875)). |
| **Multi-Node** | Node terminal connections from the overview page work again ([`#12901`](https://github.com/1Panel-dev/1Panel/pull/12901)). |
| **Log Audit** | Operation logs display correctly in scenarios where entries were malformed ([`#12936`](https://github.com/1Panel-dev/1Panel/pull/12936)). |
| **System** | File open failures no longer cause system-wide exceptions ([`#12808`](https://github.com/1Panel-dev/1Panel/pull/12808)). |
| **System** | Theme updates apply promptly after importing a license ([`#12911`](https://github.com/1Panel-dev/1Panel/pull/12911)). |
| **System** | Custom login background images display correctly ([`#12977`](https://github.com/1Panel-dev/1Panel/pull/12977)). |

---

## How to Upgrade

Simply click the 'Update' button in the lower right corner on your 1Panel dashboard.

New to 1Panel? Visit [1panel.pro](https://1panel.pro/) to get started.

---

## Source

Full release notes: [1Panel v2.2.1 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.2.1)
