---
title: "Релиз 1Panel v2.2.1: белый список портов, обзор мультиузла и Dynadot DNS"
description: "1Panel v2.2.1 добавляет Dynadot DNS, белый список портов firewall, прокси удалённых загрузок, обзор agents и сертификатов в мультиузле, а также широкие улучшения UI и исправления."
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

Доступна версия 1Panel v2.2.1. Релиз расширяет сертификаты и firewall, усиливает управление мультиузлом и содержит много улучшений UI и исправлений для контейнеров, cron и настроек системы.

## Highlights

- **Dynadot DNS** — новый DNS-провайдер для автоматической выдачи сертификатов
- **Белый список портов** — централизованное управление разрешёнными портами firewall
- **Обзор мультиузла** — agents и сертификаты на странице overview
- **File Browser** — прокси удалённых загрузок; выбор нескольких строк с Shift
- **Оповещения панели** — несколько каналов одного типа; SMS с отображаемым именем и строгой проверкой
- **Широкая полировка** — логи контейнеров, тёмная тема, список задач, меню MCP, безопасность терминала

---

## New Features

### Certificates

- **Провайдер Dynadot DNS** — выпуск и продление сертификатов с DNS-валидацией Dynadot ([`#12829`](https://github.com/1Panel-dev/1Panel/pull/12829)).

### File Browser

- **Прокси удалённых загрузок** — настройка прокси при блокировке или маршрутизации прямого доступа ([`#12942`](https://github.com/1Panel-dev/1Panel/pull/12942)).

### Firewall

- **Управление белым списком портов** — определение и управление whitelist из панели ([`#12912`](https://github.com/1Panel-dev/1Panel/pull/12912)).

### Multi-Node

- **Overview: agents и сертификаты** — страница overview мультиузла показывает agents и сертификаты ([`#12933`](https://github.com/1Panel-dev/1Panel/pull/12933)).
- **Управление системными пакетами** — управление пакетами установки 1Panel между узлами ([`#12982`](https://github.com/1Panel-dev/1Panel/pull/12982)).

### Panel Settings

- **Несколько оповещений одного типа** — более одного метода оповещения на тип канала ([`#12922`](https://github.com/1Panel-dev/1Panel/pull/12922)).

---

## Enhancements

### Overview

- **Стили заметок** — улучшено отображение виджета заметок на главной ([`#12958`](https://github.com/1Panel-dev/1Panel/pull/12958)).

### Containers

- **Отображение логов** — логи контейнеров читаются нагляднее ([`#12939`](https://github.com/1Panel-dev/1Panel/pull/12939)).
- **Логи после удаления образа** — логи задачи открываются автоматически ([`#12868`](https://github.com/1Panel-dev/1Panel/pull/12868)).

### File Browser

- **Множественный выбор с Shift** — удерживайте Shift для выбора смежных строк ([`#12941`](https://github.com/1Panel-dev/1Panel/pull/12941)).
- **Логика сохранения редактора** — более предсказуемое сохранение ([`#12852`](https://github.com/1Panel-dev/1Panel/pull/12852)).

### Firewall

- **Проверка занятости диапазона портов** — правила диапазона проверяют занятость портов ([`#12950`](https://github.com/1Panel-dev/1Panel/pull/12950)).

### SSH Management

- **Разбор логов** — улучшена логика парсинга SSH-логов ([`#12803`](https://github.com/1Panel-dev/1Panel/pull/12803)).

### Terminal

- **Безопасность генерируемых команд** — дополнительная проверка безопасности ([`#12826`](https://github.com/1Panel-dev/1Panel/pull/12826)).

### Multi-Node

- **Лимит узлов** — более понятная обработка при достижении лимита ([`#12867`](https://github.com/1Panel-dev/1Panel/pull/12867)).
- **Переключение в больших кластерах** — оптимизировано переключение узлов ([`#12928`](https://github.com/1Panel-dev/1Panel/pull/12928)).

### MCP

- **Заголовки меню** — более согласованные заголовки MCP в боковой панели ([`#12818`](https://github.com/1Panel-dev/1Panel/pull/12818)).

### Panel Settings

- **SMS-оповещения** — отображаемые имена и усиленная проверка конфигурации ([`#12945`](https://github.com/1Panel-dev/1Panel/pull/12945)).
- **Предупреждения при импорте лицензии** — предупреждения при импорте ([`#12952`](https://github.com/1Panel-dev/1Panel/pull/12952)).

### System

- **Отображение результатов команд** — вывод выполнения команд читается легче ([`#12837`](https://github.com/1Panel-dev/1Panel/pull/12837)).
- **Список задач и боковая панель** — более плавное взаимодействие ([`#12839`](https://github.com/1Panel-dev/1Panel/pull/12839)).
- **Captcha** — оптимизирован метод проверки ([`#12946`](https://github.com/1Panel-dev/1Panel/pull/12946)).
- **Документация API** — улучшены аннотации и логи ([`#12915`](https://github.com/1Panel-dev/1Panel/pull/12915), [`#12962`](https://github.com/1Panel-dev/1Panel/pull/12962)).
- **Отключённые кнопки в таблицах** — более понятный стиль ([`#12937`](https://github.com/1Panel-dev/1Panel/pull/12937)).
- **Тёмная тема** — улучшены стили тёмной темы ([`#12944`](https://github.com/1Panel-dev/1Panel/pull/12944)).

---

## Bug Fixes

| Область | Исправление |
|---|---|
| **App Store** | Среды runtime снова создаются с пользовательскими репозиториями ([`#12887`](https://github.com/1Panel-dev/1Panel/pull/12887)). |
| **Websites** | Имена пользовательских rewrite-шаблонов сохраняют регистр ([`#12714`](https://github.com/1Panel-dev/1Panel/pull/12714)). |
| **Certificates** | Сертификаты панели синхронизируются после auto-renew ([`#12858`](https://github.com/1Panel-dev/1Panel/pull/12858)). |
| **Containers** | IP контейнеров сохраняются после upgrade Compose ([`#12902`](https://github.com/1Panel-dev/1Panel/pull/12902)). |
| **File Browser** | Копирование с wildcard работает корректно ([`#12883`](https://github.com/1Panel-dev/1Panel/pull/12883)). |
| **Firewall** | Информация о занятости портов отображается правильно ([`#12961`](https://github.com/1Panel-dev/1Panel/pull/12961)). |
| **Toolbox** | Антивирусное сканирование не падает неожиданно ([`#12892`](https://github.com/1Panel-dev/1Panel/pull/12892)). |
| **Toolbox** | Uptime стража процессов более суток парсится верно ([`#12713`](https://github.com/1Panel-dev/1Panel/pull/12713)). |
| **SSH Management** | Автовключение SSH работает корректно ([`#12898`](https://github.com/1Panel-dev/1Panel/pull/12898)). |
| **Cron** | Библиотеки скриптов выполняются на дочерних узлах ([`#12869`](https://github.com/1Panel-dev/1Panel/pull/12869)). |
| **Cron** | Число хранимых backup применяется при обновлении скриптов ([`#12896`](https://github.com/1Panel-dev/1Panel/pull/12896)). |
| **Multi-Node** | Автообновление узлов завершается успешно ([`#12875`](https://github.com/1Panel-dev/1Panel/pull/12875)). |
| **Multi-Node** | Терминал узла со страницы overview снова работает ([`#12901`](https://github.com/1Panel-dev/1Panel/pull/12901)). |
| **Log Audit** | Операционные логи отображаются корректно ([`#12936`](https://github.com/1Panel-dev/1Panel/pull/12936)). |
| **System** | Ошибки открытия файлов не вызывают системных исключений ([`#12808`](https://github.com/1Panel-dev/1Panel/pull/12808)). |
| **System** | Тема обновляется сразу после импорта лицензии ([`#12911`](https://github.com/1Panel-dev/1Panel/pull/12911)). |
| **System** | Пользовательские фоны входа отображаются правильно ([`#12977`](https://github.com/1Panel-dev/1Panel/pull/12977)). |

---

## How to Upgrade

Нажмите кнопку `Update` в правом нижнем углу панели.

Впервые знакомитесь с 1Panel? Сайт [1panel.pro](https://1panel.pro/).

---

## Source

Полные заметки релиза: [1Panel v2.2.1 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.2.1)
