---
title: "1Panel v2.2.1 verfuegbar: Firewall-Port-Whitelist, Multi-Node-Uebersicht und Dynadot DNS"
description: "1Panel v2.2.1 fuegt Dynadot DNS, Firewall-Port-Whitelists, Remote-Download-Proxys und Multi-Node-Uebersicht fuer Agents und Zertifikate hinzu — plus UI-Verbesserungen und Fixes in App Store, Containern, Cron und Multi-Node."
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

1Panel v2.2.1 ist verfuegbar. Der Release erweitert Zertifikats- und Firewall-Funktionen, staerkt Multi-Node-Management und liefert viele UI-Verbesserungen sowie Zuverlaessigkeitsfixes fuer Container, Cron-Jobs und Systemeinstellungen.

## Highlights

- **Dynadot DNS** — neuer DNS-Anbieter fuer automatische Zertifikatsausstellung
- **Firewall-Port-Whitelist** — erlaubte Ports zentral verwalten statt Einzelregeln
- **Multi-Node-Uebersicht** — Agents und Zertifikate auf der Overview-Seite fuer schnelleren Fleet-Ueberblick
- **File Browser** — Proxy fuer Remote-Downloads; Shift-Mehrfachauswahl in Tabellen
- **Panel-Alerts** — mehrere Alarme gleichen Typs; SMS mit Anzeigenamen und strengerer Validierung
- **Breite Politur** — Container-Logs, Dark Theme, Task-Liste, MCP-Menue, Terminal-Sicherheit

---

## New Features

### Certificates

- **Dynadot DNS-Anbieter** — Zertifikate per Dynadot-DNS-Validierung ausstellen und erneuern ([`#12829`](https://github.com/1Panel-dev/1Panel/pull/12829)).

### File Browser

- **Remote-Download-Proxy** — Proxy fuer Remote-Downloads konfigurieren, wenn direkter Zugriff blockiert oder geroutet ist ([`#12942`](https://github.com/1Panel-dev/1Panel/pull/12942)).

### Firewall

- **Port-Whitelist-Verwaltung** — Firewall-Port-Whitelists im Panel definieren und verwalten ([`#12912`](https://github.com/1Panel-dev/1Panel/pull/12912)).

### Multi-Node

- **Overview: Agents und Zertifikate** — Multi-Node-Overview zeigt Agent- und Zertifikatsinformationen ([`#12933`](https://github.com/1Panel-dev/1Panel/pull/12933)).
- **Systempaket-Verwaltung** — 1Panel-Installationspakete ueber Knoten hinweg verwalten ([`#12982`](https://github.com/1Panel-dev/1Panel/pull/12982)).

### Panel Settings

- **Mehrere Alarme gleichen Typs** — mehr als eine Alarmmethode pro Kanaltyp (z. B. mehrere E-Mail- oder SMS-Ziele) ([`#12922`](https://github.com/1Panel-dev/1Panel/pull/12922)).

---

## Enhancements

### Overview

- **Memo-Stile** — verfeinerte Memo-Darstellung auf der Startseite ([`#12958`](https://github.com/1Panel-dev/1Panel/pull/12958)).

### Containers

- **Log-Anzeige** — Container-Logs sind uebersichtlicher ([`#12939`](https://github.com/1Panel-dev/1Panel/pull/12939)).
- **Image-Loesch-Logs** — Task-Logs oeffnen sich automatisch nach Image-Loeschung ([`#12868`](https://github.com/1Panel-dev/1Panel/pull/12868)).

### File Browser

- **Shift-Mehrfachauswahl** — Shift gedrueckt halten fuer schnelle Auswahl zusammenhaengender Tabellenzeilen ([`#12941`](https://github.com/1Panel-dev/1Panel/pull/12941)).
- **Editor-Speicherlogik** — vorhersehbares Speicherverhalten im Dateieditor ([`#12852`](https://github.com/1Panel-dev/1Panel/pull/12852)).

### Firewall

- **Portbelegungspruefung fuer Bereiche** — Portbereichsregeln pruefen, ob Ports bereits belegt sind ([`#12950`](https://github.com/1Panel-dev/1Panel/pull/12950)).

### SSH Management

- **Log-Parsing** — genauere SSH-Log-Auswertung ([`#12803`](https://github.com/1Panel-dev/1Panel/pull/12803)).

### Terminal

- **Sicherheit generierter Befehle** — zusaetzliche Validierung fuer generierte Terminal-Befehle ([`#12826`](https://github.com/1Panel-dev/1Panel/pull/12826)).

### Multi-Node

- **Knotenlimit** — klarere Behandlung bei Erreichen des Knotenlimits ([`#12867`](https://github.com/1Panel-dev/1Panel/pull/12867)).
- **Umschalten bei vielen Knoten** — optimiertes Knotenwechseln in grossen Umgebungen ([`#12928`](https://github.com/1Panel-dev/1Panel/pull/12928)).

### MCP

- **Menuetitel** — konsistentere MCP-Menue-Titel in der Sidebar ([`#12818`](https://github.com/1Panel-dev/1Panel/pull/12818)).

### Panel Settings

- **SMS-Alerts** — Anzeigenamen und staerkere Konfigurationsvalidierung ([`#12945`](https://github.com/1Panel-dev/1Panel/pull/12945)).
- **Lizenz-Import-Warnungen** — Warnhinweise beim Import von Lizenzen ([`#12952`](https://github.com/1Panel-dev/1Panel/pull/12952)).

### System

- **Befehlsausgabe** — lesbarere Ausgabe bei Befehlsausfuehrung ([`#12837`](https://github.com/1Panel-dev/1Panel/pull/12837)).
- **Task-Liste und Sidebar** — fluessigere Interaktionen ([`#12839`](https://github.com/1Panel-dev/1Panel/pull/12839)).
- **Captcha** — optimierte Captcha-Validierung ([`#12946`](https://github.com/1Panel-dev/1Panel/pull/12946)).
- **API-Dokumentation** — verbesserte Annotationen und Logs ([`#12915`](https://github.com/1Panel-dev/1Panel/pull/12915), [`#12962`](https://github.com/1Panel-dev/1Panel/pull/12962)).
- **Deaktivierte Tabellen-Buttons** — klarere Darstellung ([`#12937`](https://github.com/1Panel-dev/1Panel/pull/12937)).
- **Dark Theme** — verfeinerte Dark-Theme-Stile ([`#12944`](https://github.com/1Panel-dev/1Panel/pull/12944)).

---

## Bug Fixes

| Bereich | Fix |
|---|---|
| **App Store** | Runtime-Umgebungen lassen sich wieder mit benutzerdefinierten App-Repos erstellen ([`#12887`](https://github.com/1Panel-dev/1Panel/pull/12887)). |
| **Websites** | Gross-/Kleinschreibung bei benutzerdefinierten Rewrite-Vorlagen bleibt erhalten ([`#12714`](https://github.com/1Panel-dev/1Panel/pull/12714)). |
| **Certificates** | Panel-Zertifikate synchronisieren nach Auto-Renewal korrekt ([`#12858`](https://github.com/1Panel-dev/1Panel/pull/12858)). |
| **Containers** | Container-IPs bleiben nach Compose-Upgrades erhalten ([`#12902`](https://github.com/1Panel-dev/1Panel/pull/12902)). |
| **File Browser** | Wildcard-Dateikopie in Randfaellen korrigiert ([`#12883`](https://github.com/1Panel-dev/1Panel/pull/12883)). |
| **Firewall** | Portbelegungsinformationen werden korrekt angezeigt ([`#12961`](https://github.com/1Panel-dev/1Panel/pull/12961)). |
| **Toolbox** | Virenscans schlagen nicht mehr unerwartet fehl ([`#12892`](https://github.com/1Panel-dev/1Panel/pull/12892)). |
| **Toolbox** | Prozesswachter-Laufzeit ueber einen Tag wird korrekt geparst ([`#12713`](https://github.com/1Panel-dev/1Panel/pull/12713)). |
| **SSH Management** | SSH-Auto-Enable verhaelt sich wieder erwartungsgemaess ([`#12898`](https://github.com/1Panel-dev/1Panel/pull/12898)). |
| **Cron** | Skriptbibliotheken auf Kindknoten laufen erfolgreich ([`#12869`](https://github.com/1Panel-dev/1Panel/pull/12869)). |
| **Cron** | Backup-Aufbewahrungsanzahl gilt beim Skript-Update ([`#12896`](https://github.com/1Panel-dev/1Panel/pull/12896)). |
| **Multi-Node** | Knoten-Auto-Upgrade schliesst wieder erfolgreich ab ([`#12875`](https://github.com/1Panel-dev/1Panel/pull/12875)). |
| **Multi-Node** | Knoten-Terminal von der Overview-Seite funktioniert wieder ([`#12901`](https://github.com/1Panel-dev/1Panel/pull/12901)). |
| **Log Audit** | Operationslogs werden korrekt angezeigt ([`#12936`](https://github.com/1Panel-dev/1Panel/pull/12936)). |
| **System** | Datei-Oeffnungsfehler verursachen keine Systemausnahmen mehr ([`#12808`](https://github.com/1Panel-dev/1Panel/pull/12808)). |
| **System** | Theme-Updates nach Lizenzimport ohne Verzoegerung ([`#12911`](https://github.com/1Panel-dev/1Panel/pull/12911)). |
| **System** | Benutzerdefinierte Login-Hintergrundbilder werden korrekt angezeigt ([`#12977`](https://github.com/1Panel-dev/1Panel/pull/12977)). |

---

## How to Upgrade

Im Dashboard unten rechts auf `Update` klicken.

Neu bei 1Panel? [1panel.pro](https://1panel.pro/)

---

## Source

Vollstaendige Release Notes: [1Panel v2.2.1 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.2.1)
