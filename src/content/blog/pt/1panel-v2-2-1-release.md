---
title: "1Panel v2.2.1 lancado: whitelist de portas, overview multi-no e Dynadot DNS"
description: "O 1Panel v2.2.1 adiciona Dynadot DNS, whitelist de portas do firewall, proxy para downloads remotos, overview de agents e certificados em multi-no, e amplas melhorias de UI e correcoes."
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

O 1Panel v2.2.1 ja esta disponivel. O release expande certificados e firewall, reforca a gestao multi-no e traz muitas melhorias de UI e correcoes de confiabilidade em conteineres, cron e configuracoes do sistema.

## Highlights

- **Dynadot DNS** — novo provedor DNS para emissao automatica de certificados
- **Whitelist de portas** — gerenciamento centralizado de portas permitidas no firewall
- **Overview multi-no** — agents e certificados visiveis na pagina de visao geral
- **File Browser** — proxy em downloads remotos; selecao multi-linha com Shift
- **Alertas do painel** — multiplos metodos do mesmo tipo; SMS com nome de exibicao e validacao reforcada
- **Polimento amplo** — logs de conteineres, tema escuro, lista de tarefas, menu MCP, seguranca no terminal

---

## New Features

### Certificates

- **Provedor Dynadot DNS** — emitir e renovar certificados com validacao DNS na Dynadot ([`#12829`](https://github.com/1Panel-dev/1Panel/pull/12829)).

### File Browser

- **Proxy para downloads remotos** — configurar proxy quando o acesso direto e bloqueado ou roteado ([`#12942`](https://github.com/1Panel-dev/1Panel/pull/12942)).

### Firewall

- **Gerenciamento de whitelist de portas** — definir e gerenciar whitelists no painel ([`#12912`](https://github.com/1Panel-dev/1Panel/pull/12912)).

### Multi-Node

- **Overview: agents e certificados** — a pagina de overview multi-no exibe informacoes de agents e certificados ([`#12933`](https://github.com/1Panel-dev/1Panel/pull/12933)).
- **Gerenciamento de pacotes do sistema** — administrar pacotes de instalacao do 1Panel entre nos ([`#12982`](https://github.com/1Panel-dev/1Panel/pull/12982)).

### Panel Settings

- **Multiplos alertas do mesmo tipo** — mais de um metodo de alerta por tipo de canal ([`#12922`](https://github.com/1Panel-dev/1Panel/pull/12922)).

---

## Enhancements

### Overview

- **Estilos de memorando** — apresentacao refinada do widget de memorando na pagina inicial ([`#12958`](https://github.com/1Panel-dev/1Panel/pull/12958)).

### Containers

- **Exibicao de logs** — logs de conteineres mais claros ([`#12939`](https://github.com/1Panel-dev/1Panel/pull/12939)).
- **Logs apos exclusao de imagem** — logs de tarefa abrem automaticamente apos excluir imagem ([`#12868`](https://github.com/1Panel-dev/1Panel/pull/12868)).

### File Browser

- **Selecao multipla com Shift** — manter Shift para selecionar linhas contiguas ([`#12941`](https://github.com/1Panel-dev/1Panel/pull/12941)).
- **Logica de salvamento do editor** — salvamento mais previsivel ([`#12852`](https://github.com/1Panel-dev/1Panel/pull/12852)).

### Firewall

- **Verificacao de ocupacao em faixas** — regras de faixa verificam se portas estao em uso ([`#12950`](https://github.com/1Panel-dev/1Panel/pull/12950)).

### SSH Management

- **Analise de logs** — logica de parsing de logs SSH melhorada ([`#12803`](https://github.com/1Panel-dev/1Panel/pull/12803)).

### Terminal

- **Seguranca de comandos gerados** — validacao de seguranca adicional ([`#12826`](https://github.com/1Panel-dev/1Panel/pull/12826)).

### Multi-Node

- **Limites de nos** — tratamento mais claro ao atingir o limite ([`#12867`](https://github.com/1Panel-dev/1Panel/pull/12867)).
- **Troca em fleets grandes** — troca de no otimizada para muitos nos ([`#12928`](https://github.com/1Panel-dev/1Panel/pull/12928)).

### MCP

- **Titulos do menu** — titulos MCP mais consistentes na barra lateral ([`#12818`](https://github.com/1Panel-dev/1Panel/pull/12818)).

### Panel Settings

- **Alertas SMS** — nomes de exibicao e validacao de configuracao reforcada ([`#12945`](https://github.com/1Panel-dev/1Panel/pull/12945)).
- **Avisos ao importar licenca** — alertas ao importar licencas ([`#12952`](https://github.com/1Panel-dev/1Panel/pull/12952)).

### System

- **Resultado de comandos** — saida de execucao mais legivel ([`#12837`](https://github.com/1Panel-dev/1Panel/pull/12837)).
- **Lista de tarefas e barra lateral** — interacoes mais fluidas ([`#12839`](https://github.com/1Panel-dev/1Panel/pull/12839)).
- **Captcha** — metodo de validacao otimizado ([`#12946`](https://github.com/1Panel-dev/1Panel/pull/12946)).
- **Documentacao API** — anotacoes e logs melhorados ([`#12915`](https://github.com/1Panel-dev/1Panel/pull/12915), [`#12962`](https://github.com/1Panel-dev/1Panel/pull/12962)).
- **Botoes desabilitados em tabelas** — estilo mais claro ([`#12937`](https://github.com/1Panel-dev/1Panel/pull/12937)).
- **Tema escuro** — estilos refinados ([`#12944`](https://github.com/1Panel-dev/1Panel/pull/12944)).

---

## Bug Fixes

| Area | Correcao |
|---|---|
| **App Store** | Ambientes runtime podem ser criados novamente com repositorios de apps personalizados ([`#12887`](https://github.com/1Panel-dev/1Panel/pull/12887)). |
| **Websites** | Nomes de templates rewrite personalizados preservam maiusculas/minusculas ([`#12714`](https://github.com/1Panel-dev/1Panel/pull/12714)). |
| **Certificates** | Certificados do painel sincronizam apos renovacao automatica ([`#12858`](https://github.com/1Panel-dev/1Panel/pull/12858)). |
| **Containers** | IPs de conteineres sao preservados apos upgrades do Compose ([`#12902`](https://github.com/1Panel-dev/1Panel/pull/12902)). |
| **File Browser** | Copia com curingas funciona corretamente ([`#12883`](https://github.com/1Panel-dev/1Panel/pull/12883)). |
| **Firewall** | Informacoes de ocupacao de portas exibidas corretamente ([`#12961`](https://github.com/1Panel-dev/1Panel/pull/12961)). |
| **Toolbox** | Varreduras antivirus nao falham mais inesperadamente ([`#12892`](https://github.com/1Panel-dev/1Panel/pull/12892)). |
| **Toolbox** | Uptime do guard de processos acima de um dia e analisado corretamente ([`#12713`](https://github.com/1Panel-dev/1Panel/pull/12713)). |
| **SSH Management** | Auto-habilitacao SSH se comporta corretamente ([`#12898`](https://github.com/1Panel-dev/1Panel/pull/12898)). |
| **Cron** | Bibliotecas de scripts executam em nos filhos ([`#12869`](https://github.com/1Panel-dev/1Panel/pull/12869)). |
| **Cron** | Contagem de retencao de backup aplica ao atualizar scripts ([`#12896`](https://github.com/1Panel-dev/1Panel/pull/12896)). |
| **Multi-Node** | Auto-atualizacao de nos conclui com sucesso ([`#12875`](https://github.com/1Panel-dev/1Panel/pull/12875)). |
| **Multi-Node** | Terminal de no a partir do overview funciona novamente ([`#12901`](https://github.com/1Panel-dev/1Panel/pull/12901)). |
| **Log Audit** | Logs de operacao exibidos corretamente ([`#12936`](https://github.com/1Panel-dev/1Panel/pull/12936)). |
| **System** | Falhas ao abrir arquivos nao causam mais excecoes do sistema ([`#12808`](https://github.com/1Panel-dev/1Panel/pull/12808)). |
| **System** | Tema atualiza imediatamente apos importar licenca ([`#12911`](https://github.com/1Panel-dev/1Panel/pull/12911)). |
| **System** | Imagens de fundo de login personalizadas exibidas corretamente ([`#12977`](https://github.com/1Panel-dev/1Panel/pull/12977)). |

---

## How to Upgrade

Clique em `Update` no canto inferior direito do painel.

Novo no 1Panel? Acesse [1panel.pro](https://1panel.pro/).

---

## Source

Notas completas: [1Panel v2.2.1 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.2.1)
