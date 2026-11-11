---
title: "1Panel v2.5.0 veröffentlicht: Neu aufgesetzte GPU-Verwaltung, vLLM und Modellservices für den gesamten lokalen Modell-Workflow"
description: "1Panel v2.5.0 baut GPU-Verwaltung, vLLM-Verwaltung und Modellservices neu auf und verbindet Modellvorbereitung, Deployment, Monitoring, Benchmarking und den Zugriff über das AI Gateway. Die VM-Verwaltung steht nun auch in der Community Edition zur Verfügung, Betriebsberichte in der Professional Edition, dazu kommen 1Panel-MCP-Serviceverwaltung, Erkennung von Container-Image-Updates und Batch-Upgrades."
pubDate: 2026-11-11
updatedDate: 2026-11-11
tags:
  - 1Panel
  - Release Notes
  - GPU
  - vLLM
  - Modellservices
  - AI Gateway
  - Virtuelle Maschinen
  - MCP
---

1Panel v2.5.0 ist verfügbar. Dieses Release baut GPU-Verwaltung, vLLM-Verwaltung und Modellservices neu auf und verbindet den gesamten Workflow für lokale Modelle – von Modellvorbereitung, Deployment und Monitoring bis hin zu Benchmarking und der Bereitstellung über das AI Gateway. Die Verwaltung virtueller Maschinen steht nun vollständig auch Community-Edition-Nutzern zur Verfügung, Betriebsberichte sind für die Professional Edition verfügbar, und das Release führt außerdem die 1Panel-MCP-Serviceverwaltung sowie die Erkennung von Container-Image-Updates mit Batch-Upgrades ein.

Am 11. November 2026 hat 1Panel, das Linux-Server-Verwaltungspanel der nächsten Generation, offiziell Version 2.5.0 veröffentlicht.

1Panel v2.5.0 konzentriert sich auf die **Verbesserung des lokalen Modell-Deployments**. Es schließt den gesamten Kreislauf von **GPU-Verwaltung, Modellvorbereitung, Modell-Deployment und Modellservices bis hin zu Benchmarking und der Bereitstellung von Token-Services über das AI Gateway**. Mit der neuen Version können Anwender lokale Modelle auf AI-Servern schnell bereitstellen und verwalten sowie Umgebungsprüfungen, Deployment-Konfiguration und Laufzeitüberwachung direkt im Panel erledigen. Das reduziert den wiederholten Wechsel zwischen verschiedenen Werkzeugen.

Gleichzeitig macht 1Panel v2.5.0 die VM-Verwaltung vollständig für Community-Edition-Nutzer verfügbar, öffnet Betriebsberichte für die Professional Edition und ergänzt praktische Funktionen wie die 1Panel-MCP-Serviceverwaltung sowie die Erkennung von Image-Updates mit Batch-Upgrades, um die Serververwaltung kontinuierlich zu verbessern.

Bestehende Anwender können unten rechts im Panel auf **Auf Updates prüfen** klicken und das Online-Upgrade durchführen. Die vollständige Änderungsliste finden Sie im [v2.5.0-Release](https://github.com/1Panel-dev/1Panel/releases/tag/v2.5.0).

**Vielen Dank an die Community für das kontinuierliche Feedback und die Unterstützung. 1Panel freut sich darauf, gemeinsam mit Ihnen eine effizientere, sicherere und intelligentere Linux-Betriebserfahrung zu gestalten.**

## Inhaltsverzeichnis

- [Highlights](#highlights)
- [Weitere neue Funktionen](#weitere-neue-funktionen)
- [Verbesserungen](#verbesserungen)
- [Fehlerbehebungen](#fehlerbehebungen)
- [Upgrade durchführen](#upgrade-durchführen)

---

## Highlights

### Neu aufgesetzte GPU-Verwaltung

Vor dem Deployment eines lokalen Modells muss zunächst geprüft werden, ob die GPU korrekt erkannt wird und ob Treiber und Container-Runtime bereit sind. 1Panel v2.5.0 baut die GPU-Verwaltung vollständig neu auf und zeigt Geräteinformationen, Umgebungsstatus sowie Echtzeit- und Verlaufsmonitoring in einer einheitlichen Oberfläche. So erkennen Anwender die Fähigkeiten und den Betriebszustand des aktuellen Geräts auf einen Blick.

Für NVIDIA-Geräte lässt sich der Status von Treiber und NVIDIA Container Toolkit direkt im Panel prüfen, inklusive der passenden Installations- und Konfigurationshinweise. Für Geräte anderer Hersteller stellt das Panel die jeweiligen Umgebungsdiagnosen bereit, damit klar ist, welche Vorbereitungsschritte noch fehlen.

Läuft ein Modell, lassen sich Kennzahlen wie GPU-Auslastung, Speicherbelegung, Temperatur und Leistungsaufnahme in Echtzeit verfolgen und Laständerungen über Verlaufskurven beobachten. Jedes Gerät zeigt die unterstützten Kennzahlen, was die Analyse von Ressourcenengpässen oder hoher Last erleichtert und als Grundlage für Anpassungen am Deployment dient.

![Abbildung 1: GPU-Verwaltung und -Monitoring in 1Panel](/blog/1panel-v2-5-0-release/image-01.webp)

*Abbildung 1: GPU-Verwaltung und -Monitoring in 1Panel*

### Kuratierte Modelle, Modell-Downloads und vLLM Recipes

Bei der stetig wachsenden Zahl Open-Source-Modelle stellen sich vor dem Deployment drei Fragen: Welches Modell passt, wo lässt es sich herunterladen und wie sollten die Startparameter aussehen?

1Panel v2.5.0 verknüpft kuratierte Modelle, Modell-Downloads und vLLM Recipes, sodass die Modellvorbereitung auf klareren Referenzen basiert. Anwender können in der Liste kuratierter Modelle Spezifikationen, Einsatzszenarien und Gewichtsgrößen einsehen und anschließend in den Download-Workflow wechseln, um die für das Deployment benötigten lokalen Dateien vorzubereiten. Download-Aufgaben und lokale Modelldateien lassen sich zentral verwalten und später leichter wiederfinden und wiederverwenden.

Für Modelle, die eine Referenzkonfiguration benötigen, stehen in den vLLM Recipes Beispiele für Deployment-Konfigurationen bereit. Diese lassen sich an Zielhardware, Modellversion und Laufzeitumgebung anpassen, sodass die Konfiguration nicht von Grund auf erstellt werden muss.

![Abbildung 2: Kuratierte Modelle, Modell-Downloads und vLLM Recipes in 1Panel](/blog/1panel-v2-5-0-release/image-02.webp)

*Abbildung 2: Kuratierte Modelle, Modell-Downloads und vLLM Recipes in 1Panel*

### Neu aufgesetzte vLLM-Verwaltung für klarere Deployment-Konfiguration und Laufzeitüberwachung

Sind die Modelldateien vorbereitet, muss das Modell zuverlässig laufen. 1Panel v2.5.0 baut das vLLM-Verwaltungsmodul vollständig neu auf und schärft den Ablauf rund um Instanzerstellung, Deployment-Konfiguration und Laufzeitüberwachung, damit sich Deployment-Schritte am gewählten Modell und der Hardwareumgebung orientieren. Beim Erstellen einer Instanz lassen sich Laufzeit-Image, Modelldateien und Startvorlage auswählen sowie GPU- und Modell-Startparameter konfigurieren.

Läuft die Instanz, können Status und Logs des Modells zentral eingesehen und auf der Monitoring-Seite Anfragevolumen, Token-Durchsatz und Antwortlatenz geprüft werden. Zusammen mit der GPU-Auslastung lässt sich die Dienstlast besser beobachten, was eine Grundlage für die Feinabstimmung der Deployment-Parameter schafft.

![Abbildung 3: Deployment einer vLLM-Instanz in 1Panel](/blog/1panel-v2-5-0-release/image-03.webp)

*Abbildung 3: Deployment einer vLLM-Instanz in 1Panel*

![Abbildung 4: Monitoring der vLLM-Inferenz in 1Panel](/blog/1panel-v2-5-0-release/image-04.webp)

*Abbildung 4: Monitoring der vLLM-Inferenz in 1Panel*

### Einheitliche Verwaltung lokaler Modelle, Public-Cloud- und selbst gehosteter AI-Gateway-Konten

In der Praxis bestehen lokal bereitgestellte Modelle, Public-Cloud-Modelle und selbst gehostete AI Gateways häufig nebeneinander. 1Panel v2.5.0 baut das Modul **Modellservices** vollständig neu auf und verwaltet lokale Modellservices, Public-Cloud-Modellkonten sowie Modellkonten selbst gehosteter AI Gateways zentral. So lassen sich Modellservices unterschiedlicher Herkunft leichter überblicken und pflegen.

Anwender konfigurieren Verbindungsadresse und Zugangsdaten je Quelle, sehen die Modellliste des jeweiligen Kontos und prüfen die Verbindung. Nach Deployment und Anbindung sind Serviceinformationen und verfügbare Modelle klarer, und es gibt einen einheitlichen Einstiegspunkt für die spätere Nutzung und für Benchmarks.

![Abbildung 5: Verwaltung der Modellservices in 1Panel](/blog/1panel-v2-5-0-release/image-05.webp)

*Abbildung 5: Verwaltung der Modellservices in 1Panel*

### Vordefinierte Benchmark-Szenarien

Nach dem Go-live müssen Anwender in der Regel verstehen, wie sich ein Modell unter realer Last verhält – etwa Zeit bis zum ersten Token, anhaltende Ausgabegeschwindigkeit und Durchsatz bei steigender Parallelität. 1Panel v2.5.0 bietet Benchmarks für Modellservices: Zielservice und Modell werden ausgewählt, anschließend startet ein gezielter Performancetest mit Voreinstellungen wie Schnellprüfung, Standardtest und Volltest.

Anfragelänge, Ausgabelänge und Parallelität lassen sich anpassen, und Ergebnisse wie Zeit bis zum ersten Token (TTFT), Anfragelatenz und Token-Durchsatz werden angezeigt. Werden verschiedene Deployment-Konfigurationen mit demselben Szenario getestet, lassen sich die Auswirkungen von Parameteränderungen nachvollziehen – eine gute Grundlage für Ressourcenplanung und Service-Tuning.

![Abbildung 6: Konfiguration und Ergebnisse eines Modellservice-Benchmarks in 1Panel](/blog/1panel-v2-5-0-release/image-06.webp)

*Abbildung 6: Konfiguration und Ergebnisse eines Modellservice-Benchmarks in 1Panel*

---

## Weitere neue Funktionen

- **Virtuelle Maschinen** — Die VM-Verwaltung steht nun auch Nutzern der Community Edition zur Verfügung.
- **Übersicht** — Neue GPU-Statusansicht und Monitoring des vLLM-Token-Durchsatzes, außerdem Unterstützung mehrerer Verzeichnis-Schnellzugriffe.
- **Agents** — Unterstützung für DeepSeek Harness und OctoP.
- **MCP-Verwaltung** — Neue Verwaltung von 1Panel-MCP-Services.
- **Websites** — Der Timeout des Reverse Proxy lässt sich nun in der Performance-Optimierung konfigurieren.
- **Zertifikate** — Ausgestellte Zertifikate können gleichzeitig in mehrere lokale Verzeichnisse geschoben werden; selbstsignierte Root-Zertifikate lassen sich importieren.
- **Container** — Container-Verzeichnisse unterstützen Batch-Uploads von Dateien.
- **Container** — Neue Erkennung von Image-Updates mit Statusanzeige; die Container-Liste unterstützt Batch-Upgrades.
- **Container** — Suche nach Remote-Images auf Docker Hub.
- **Container** — Neuer Schalter für die NVIDIA-GPU-Runtime-Konfiguration.
- **Cron** — URL-Aufrufaufgaben unterstützen das Setzen des User-Agent-Headers.
- **Ressourcen-Synchronisierung** — PHP-Erweiterungsvorlagen lassen sich knotenübergreifend synchronisieren.
- **Betriebsbericht (X-Pack)** — Betriebsberichte sind nun für die Professional Edition verfügbar.
- **Multi-Node (X-Pack)** — Knoten lassen sich mit vorhandenen Installationspaketen installieren und aktualisieren.

---

## Verbesserungen

- **App Store** — Die lokale App-Synchronisierung kann untergeordnete Knoten einbeziehen, das Image-Präfix lässt sich unabhängig konfigurieren und aktivieren, und der Ressourcenbedarf während der Synchronisierung sinkt.
- **Agents** — Modellliste und Standardkonfiguration von MiniMax Flash sowie der Standardmodellname von DeepSeek wurden aktualisiert.
- **Websites** — Verbesserte Statusanzeige, wenn die Brotli-Konfiguration noch nicht wirksam ist.
- **Runtime** — Updates warten nun auf den Abschluss des Image-Pulls, bevor bestehende Container gestoppt werden, wodurch sich die durch Image-Pulls verursachte Ausfallzeit verkürzt.
- **Datenbank** — Einheitliche Validierungsregeln für Benutzernamen und Passwörter.
- **Container** — Sortierung nach Erstellungszeit; beim Aufheben der Sortierung wird die Standardreihenfolge wiederhergestellt. Zudem wird ein länger anhaltender Ladezustand der Liste entschärft.
- **Dateien** — Verbesserte Behandlung von Esc-Taste und Abbrechen beim Umbenennen; stärkere Quellenvalidierung für sensitive Dateioperationen und Quellenverfolgung im Verlauf.
- **Terminal** — Verbesserte Rahmenanzeige der Terminal-Schnellzugriffe im Dunkelmodus.
- **Oberflächeneinstellungen** — Einheitliche Dialoge für Aufgabenprotokolle und Löschbestätigungen; aktualisierter Hintergrund der Enterprise-Edition-Anmeldeseite.
- **Protokollprüfung** — Verbesserte Erfassung der Client-IP und Aufbewahrung von Anmeldeinformationen bei vertrauenswürdigen Proxys.
- **Panel-Einstellungen** — Widerrufene API-Schlüssel lassen sich löschen; verbesserte Backup-Speicherung und Zertifikatsprüfung für HTTPS-Proxys; Unterstützung benutzerdefinierter CA-Zertifikate.
- **System** — Einheitliche Position von Tabellen-Tooltips, höhere maximale Einträge pro Seite und verbesserte responsive Tabellenlayouts.
- **System** — Strengere Zugriffsbeschränkungen für abgelaufene Sitzungen und Credentials, verbesserte TLS-Zertifikatsprüfung für externe Ressourcen und aktualisierte Abhängigkeiten für Markdown- und HTML-Parsing.
- **Multi-Node (X-Pack)** — Höhere SFTP-Upload-Geschwindigkeit zwischen Knoten und längere Wiederholungszeit für die Knotendatensynchronisierung.

---

## Fehlerbehebungen

- **App Store** — Behoben: Numerische Passwörter, die mit „+“ oder „-0“ beginnen, wurden beim Installieren von Apps oder Ändern von App-Parametern verändert.
- **App Store** — Behoben: Umgebungsvariablen wurden beim App-Upgrade verändert, und Apps aus abgekündigten Versionen ließen sich nicht aktualisieren.
- **App Store** — Behoben: Fehlerhafte App-Icon-Weiterleitungen bei Zugriff über einen Knoten-Proxy sowie Probleme beim Aktualisieren des Ressourcen-Caches und bei den Optionen für PHP-Runtime-Versionen.
- **Agents** — Behoben: Fehlende Module und nicht angezeigte QR-Codes bei der Einrichtung des Hermes-WeChat-Kanals.
- **Agents** — Behoben: Kompatibilitätsprobleme des Feishu-Plugins nach OpenClaw-Upgrades bei gleichzeitiger Beibehaltung der alten Feishu-Konfiguration.
- **Websites** — Behoben: Änderungen der PHP-Runtime wurden nicht an Subsites synchronisiert.
- **Runtime** — Behoben: Projektterminale meldeten einen fehlenden Container und konnten keine Verbindung herstellen.
- **Datenbank** — Behoben: Links zu Verwaltungswerkzeugen verwendeten nicht die benutzerdefinierte Web-Adresse der App.
- **Container** — Behoben: Suchfilter gingen beim Zurückkehren zur Liste nach dem Bearbeiten eines Containers verloren; die Protokollbereinigung schlug bei App-Instanznamen mit Großbuchstaben fehl.
- **Dateien** — Behoben: Beim Umbenennen wurde eine gleichnamige Zieldatei direkt überschrieben, Download-Speicherpfade konnten das gewählte Verzeichnis verlassen, und bei tar-Komprimierungsbefehlen war Argumentinjektion möglich.
- **Terminal** — Behoben: Nach dem Hinzufügen eines Knotens wurde der automatische Schlüssel nicht angezeigt und die Verbindung verlangte weiterhin ein SSH-Passwort.
- **Cron** — Behoben: Die Skriptbibliothek-Synchronisierung verwendete einen veralteten Ressourcen-Cache.
- **Protokollprüfung** — Behoben: Betriebsprotokolle zeigten die Ressourcen-ID statt des Namens, wenn die PHP-Version einer Website gewechselt oder eine PHP-Runtime gelöscht wurde.
- **Panel-Einstellungen** — Behoben: Nach dem erneuten Aktivieren des Sicherheitszugangs war das Panel nicht erreichbar; die Suche nach Backup-Konten per Name war fehlerhaft.
- **System** — Behoben: Passwortänderungen über den Befehl `1pctl` hielten die Einstellungen zur Passwortkomplexität nicht ein.
- **System** — Behoben: Nach dem Ende der Sommerzeit konnte die Zeitsynchronisierung im wiederholten Zeitraum die Systemuhr um eine Stunde zurückstellen.
- **WAF (X-Pack)** — Behoben: Fehler beim Öffnen der Website-Einstellungen und nicht freigegebene Basis-APIs von Community-Edition-Unterknoten.
- **Website-Monitoring (X-Pack)** — Behoben: Fehler in der Statistik der Anfrageprotokolle.

---

## Upgrade durchführen

Bestehende Anwender klicken unten rechts im 1Panel-Dashboard auf **Auf Updates prüfen**, um das Online-Upgrade abzuschließen.

Neu bei 1Panel? Besuchen Sie [1panel.pro](https://1panel.pro/), um zu starten.

---

## Quelle

Vollständige Release Notes: [1Panel v2.5.0 auf GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.5.0)
