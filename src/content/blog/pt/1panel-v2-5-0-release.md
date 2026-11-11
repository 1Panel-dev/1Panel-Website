---
title: "1Panel v2.5.0 lançado: gestão de GPU, vLLM e serviços de modelos reconstruídos para todo o fluxo de modelos locais"
description: "O 1Panel v2.5.0 reconstrói a gestão de GPU, a gestão de vLLM e os serviços de modelos para conectar preparação, implantação, monitoramento, benchmark e acesso via AI Gateway. A gestão de máquinas virtuais chega à Edição Comunitária, os relatórios de operações à Edição Profissional, além da gestão de serviços MCP do 1Panel, detecção de atualização de imagens de contêiner e upgrades em lote."
pubDate: 2026-11-11
updatedDate: 2026-11-11
tags:
  - 1Panel
  - Notas de versão
  - GPU
  - vLLM
  - Serviços de modelos
  - AI Gateway
  - Máquinas virtuais
  - MCP
---

O 1Panel v2.5.0 está disponível. Esta versão reconstrói a gestão de GPU, a gestão de vLLM e os serviços de modelos para conectar todo o fluxo de trabalho de modelos locais — da preparação e implantação ao monitoramento e benchmark, até a exposição dos modelos pelo AI Gateway. A gestão de máquinas virtuais agora está totalmente disponível para usuários da Edição Comunitária, os relatórios de operações para usuários da Edição Profissional, e a versão ainda introduz a gestão de serviços MCP do 1Panel, detecção de atualização de imagens de contêiner e upgrades em lote.

Em 11 de novembro de 2026, o 1Panel, painel de gerenciamento de servidores Linux da nova geração, lançou oficialmente a versão 2.5.0.

O 1Panel v2.5.0 tem como foco **melhorar a experiência de implantação de modelos locais**. Ele conecta o ciclo completo que vai da **gestão de GPU, preparação de modelos, implantação de modelos e serviços de modelos até o benchmark e a oferta de serviços de Token por meio do AI Gateway**. Com a nova versão, os usuários podem implantar e gerenciar modelos locais rapidamente em servidores de IA e concluir a verificação de ambiente, a configuração da implantação e o monitoramento em execução diretamente no painel, reduzindo a troca repetida entre ferramentas diferentes.

Ao mesmo tempo, o 1Panel v2.5.0 disponibiliza a gestão de máquinas virtuais integralmente para usuários da Edição Comunitária, abre os relatórios de operações para usuários da Edição Profissional e adiciona recursos práticos como a gestão de serviços MCP do 1Panel e a detecção de atualização de imagens com upgrades em lote, aprimorando continuamente a experiência de gerenciamento de servidores.

Usuários existentes podem clicar em **Verificar atualizações** no canto inferior direito do painel para concluir o upgrade online. Para o changelog completo, consulte a [versão v2.5.0](https://github.com/1Panel-dev/1Panel/releases/tag/v2.5.0).

**Agradecemos à comunidade pelo feedback e apoio contínuos. O 1Panel espera construir com você uma experiência de operações Linux mais eficiente, segura e inteligente.**

## Sumário

- [Destaques](#destaques)
- [Outros novos recursos](#outros-novos-recursos)
- [Melhorias](#melhorias)
- [Correções de bugs](#correções-de-bugs)
- [Como atualizar](#como-atualizar)

---

## Destaques

### Gestão de GPU reconstruída

Antes de implantar um modelo local, é preciso confirmar se a GPU foi reconhecida corretamente e se o driver e o runtime de contêiner estão prontos. O 1Panel v2.5.0 reconstrói completamente a gestão de GPU, reunindo em uma interface unificada as informações do dispositivo, o status do ambiente e o monitoramento em tempo real e histórico, para que os usuários entendam rapidamente as capacidades e a condição de operação do equipamento.

Em dispositivos NVIDIA, os usuários podem verificar no painel o status do driver e do NVIDIA Container Toolkit, além de consultar as orientações de instalação e configuração correspondentes. Para dispositivos de outros fabricantes, o painel fornece os diagnósticos de ambiente relevantes, ajudando a identificar quais preparativos ainda faltam.

Com o modelo em execução, é possível consultar métricas em tempo real como utilização da GPU, uso de memória, temperatura e consumo de energia, além de observar a variação de carga por curvas históricas. Cada dispositivo exibe as métricas que suporta, o que facilita investigar falta de recursos ou carga elevada e serve de referência para ajustes na implantação.

![Figura 1: Interface de gestão e monitoramento de GPU do 1Panel](/blog/1panel-v2-5-0-release/image-01.webp)

*Figura 1: Interface de gestão e monitoramento de GPU do 1Panel*

### Modelos selecionados, download de modelos e vLLM Recipes

Com o crescimento constante dos modelos de código aberto, escolher um modelo, saber onde baixá-lo e como configurar os parâmetros de inicialização são questões que precisam ser resolvidas antes da implantação.

O 1Panel v2.5.0 conecta modelos selecionados, download de modelos e vLLM Recipes para que a preparação do modelo seja baseada em referências mais claras. Os usuários podem consultar especificações, cenários de uso e tamanho dos pesos na lista de modelos selecionados e, em seguida, avançar para o fluxo de download a fim de preparar os arquivos locais necessários. Tarefas de download e arquivos de modelos locais podem ser gerenciados centralizadamente, facilitando encontrá-los e reutilizá-los depois.

Para modelos que precisam de uma configuração de inicialização de referência, os usuários também podem consultar os exemplos de configuração de implantação oferecidos pelo vLLM Recipes e ajustar os parâmetros conforme o hardware de destino, a versão do modelo e o ambiente de execução, reduzindo o esforço de montar uma configuração do zero.

![Figura 2: Modelos selecionados, download de modelos e vLLM Recipes do 1Panel](/blog/1panel-v2-5-0-release/image-02.webp)

*Figura 2: Modelos selecionados, download de modelos e vLLM Recipes do 1Panel*

### Gestão de vLLM reconstruída para configuração de implantação e monitoramento mais claros

Com os arquivos do modelo prontos, o próximo passo é garantir que ele rode de forma estável. O 1Panel v2.5.0 reconstrói completamente o módulo de gestão de vLLM e aprimora o fluxo em torno da criação de instâncias, configuração da implantação e monitoramento em execução, para que os usuários organizem as operações de implantação conforme o modelo e o hardware escolhidos. Ao criar uma instância, é possível selecionar a imagem de execução, os arquivos do modelo e o template de inicialização, além de configurar parâmetros de GPU e de inicialização do modelo.

Com a instância em execução, os usuários podem consultar o status e os logs do modelo em um só lugar e usar a página de monitoramento para ver volume de requisições, throughput de Tokens e latência de resposta. Combinado ao uso de recursos da GPU, isso facilita observar a carga do serviço e serve de base para ajustar os parâmetros da implantação.

![Figura 3: Implantação de uma instância vLLM no 1Panel](/blog/1panel-v2-5-0-release/image-03.webp)

*Figura 3: Implantação de uma instância vLLM no 1Panel*

![Figura 4: Monitoramento da inferência vLLM no 1Panel](/blog/1panel-v2-5-0-release/image-04.webp)

*Figura 4: Monitoramento da inferência vLLM no 1Panel*

### Gestão unificada de modelos locais, nuvem pública e contas de AI Gateway auto-hospedado

Na prática, modelos implantados localmente, modelos de nuvem pública e AI Gateways auto-hospedados costumam coexistir. O 1Panel v2.5.0 reconstrói completamente o módulo **Serviços de Modelos** e gerencia de forma centralizada serviços de modelos locais, contas de modelos de nuvem pública e contas de modelos de AI Gateways auto-hospedados, facilitando a revisão e a manutenção de serviços de modelos de diferentes origens.

Os usuários podem configurar endereço de conexão e credenciais de acesso conforme a origem do serviço, consultar a lista de modelos de cada conta e verificar a conectividade. Concluídas a implantação e a integração, as informações do serviço e os modelos disponíveis ficam mais claros, além de haver um ponto de entrada unificado para uso posterior e benchmarks.

![Figura 5: Gestão de serviços de modelos do 1Panel](/blog/1panel-v2-5-0-release/image-05.webp)

*Figura 5: Gestão de serviços de modelos do 1Panel*

### Presets de benchmark integrados

Depois que um modelo entra em produção, normalmente é preciso entender seu comportamento sob carga real, incluindo o tempo até o primeiro Token, a velocidade de saída sustentada e o throughput à medida que a concorrência aumenta. O 1Panel v2.5.0 oferece benchmark de serviços de modelos: os usuários selecionam o serviço e o modelo de destino e iniciam um teste de desempenho direcionado com presets como validação rápida, teste padrão e teste completo.

É possível ajustar o comprimento das requisições, o comprimento da saída e a concorrência, e consultar resultados como tempo até o primeiro Token (TTFT), latência das requisições e throughput de Tokens. Testar diferentes configurações de implantação com o mesmo preset ajuda a acompanhar o impacto das mudanças de parâmetros e serve de referência para planejamento de recursos e ajuste do serviço.

![Figura 6: Configuração e resultados do benchmark de serviços de modelos do 1Panel](/blog/1panel-v2-5-0-release/image-06.webp)

*Figura 6: Configuração e resultados do benchmark de serviços de modelos do 1Panel*

---

## Outros novos recursos

- **Máquinas virtuais** — A gestão de máquinas virtuais agora está disponível para usuários da Edição Comunitária.
- **Visão geral** — Nova visualização de status da GPU e monitoramento do throughput de Tokens do vLLM, além de suporte a vários atalhos de diretório.
- **Agentes** — Suporte a DeepSeek Harness e OctoP.
- **Gestão de MCP** — Nova gestão de serviços MCP do 1Panel.
- **Sites** — O tempo limite do proxy reverso agora pode ser configurado no ajuste de desempenho.
- **Certificados** — Certificados emitidos podem ser enviados a vários diretórios locais de uma só vez, e certificados raiz autoassinados podem ser importados.
- **Contêineres** — Diretórios de contêineres suportam upload de arquivos em lote.
- **Contêineres** — Nova detecção de atualização de imagens com indicadores de status, e a lista de contêineres suporta upgrades em lote.
- **Contêineres** — Suporte à busca de imagens remotas no Docker Hub.
- **Contêineres** — Novo switch para configuração do runtime de GPU NVIDIA.
- **Cron** — Tarefas de acesso a URL suportam a definição do cabeçalho User-Agent.
- **Sincronização de recursos** — Templates de extensões PHP podem ser sincronizados entre nós.
- **Relatório de operações (X-Pack)** — Os relatórios de operações agora estão disponíveis para usuários da Edição Profissional.
- **Multi-Node (X-Pack)** — Nós podem ser instalados e atualizados usando pacotes de instalação existentes.

---

## Melhorias

- **App Store** — A sincronização local de aplicativos agora pode incluir nós filhos, o prefixo de imagens pode ser configurado e habilitado de forma independente, e as requisições de recursos durante a sincronização foram reduzidas.
- **Agentes** — Lista de modelos e configuração padrão do MiniMax Flash atualizadas, assim como o nome do modelo padrão do DeepSeek.
- **Sites** — Mensagem de status aprimorada quando a configuração do Brotli ainda não entrou em vigor.
- **Runtime** — As atualizações agora aguardam a conclusão do pull da imagem antes de parar os contêineres existentes, reduzindo a interrupção do serviço causada pelo pull de imagens.
- **Bancos de dados** — Regras de validação de nome de usuário e senha unificadas.
- **Contêineres** — Ordenação por data de criação com restauração da ordem padrão ao limpar a ordenação, além de mitigação do longo período de carregamento da lista.
- **Arquivos** — Melhor tratamento da tecla Esc e do cancelamento ao renomear, e reforço na validação de origem de operações sensíveis em arquivos e no rastreamento de origem no histórico.
- **Terminal** — Melhor exibição da borda dos atalhos do terminal no modo escuro.
- **Configurações de interface** — Diálogos de log de tarefas e confirmação de exclusão unificados, e novo plano de fundo da página de login da Edição Enterprise.
- **Auditoria de logs** — Melhor registro do IP do cliente e retenção de informações de login ao usar proxies confiáveis.
- **Configurações do painel** — Suporte à exclusão de chaves de API revogadas, melhorias no armazenamento de backups e na validação de certificados de proxy HTTPS, e suporte a certificados CA personalizados.
- **Sistema** — Posição unificada das dicas de tabela, aumento do número máximo de itens por página e melhoria no layout responsivo das tabelas.
- **Sistema** — Restrições de acesso mais rígidas para sessões expiradas e uso de credenciais, melhor validação de certificados TLS em requisições a recursos externos e atualização das dependências de parsing de Markdown e HTML.
- **Multi-Node (X-Pack)** — Melhoria na velocidade de upload SFTP entre nós e ampliação do período de nova tentativa da sincronização de dados entre nós.

---

## Correções de bugs

- **App Store** — Corrigido o problema de senhas numéricas iniciadas por "+" ou "-0" serem alteradas ao instalar aplicativos ou alterar parâmetros.
- **App Store** — Corrigido o problema de valores de variáveis de ambiente serem alterados durante o upgrade de aplicativos, e de aplicativos de versões descontinuadas não poderem ser atualizados.
- **App Store** — Corrigidos erros de redirecionamento do ícone do aplicativo ao acessar por um proxy de nó, além de problemas na atualização do cache de recursos e nas opções de versão do runtime PHP.
- **Agentes** — Corrigidos erros de módulo ausente e QR codes não exibidos durante a configuração do canal WeChat do Hermes.
- **Agentes** — Corrigidos problemas de compatibilidade do plugin Feishu após upgrades do OpenClaw, preservando a configuração antiga do Feishu.
- **Sites** — Corrigido o problema de alterações no runtime PHP não serem sincronizadas com subsites.
- **Runtime** — Corrigido o problema de terminais de projetos informarem que o contêiner não foi encontrado e falharem na conexão.
- **Bancos de dados** — Corrigido o problema de os links de ferramentas de gestão não usarem o endereço de acesso web personalizado do aplicativo.
- **Contêineres** — Corrigido o problema de filtros de busca serem perdidos ao voltar para a lista após editar um contêiner, e de falha na limpeza de logs de instâncias de aplicativos com letras maiúsculas no nome.
- **Arquivos** — Corrigido o problema de renomear sobrescrever diretamente um arquivo de destino com o mesmo nome, de o caminho de salvamento de downloads poder sair do diretório selecionado e de injeção de argumentos no comando de compactação tar.
- **Terminal** — Corrigido o problema de a chave automática não ser exibida após adicionar um nó, o que ainda exigia senha SSH para conectar.
- **Cron** — Corrigido o problema de a sincronização da biblioteca de scripts usar um cache de recursos desatualizado.
- **Auditoria de logs** — Corrigido o problema de os logs de operação exibirem o ID do recurso em vez do nome ao trocar a versão de PHP de um site e ao excluir um runtime PHP.
- **Configurações do painel** — Corrigido o problema de o painel ficar inacessível após reativar a entrada de segurança, e de busca anormal de contas de backup por nome.
- **Sistema** — Corrigido o problema de a alteração de senha pelo comando `1pctl` não seguir as configurações de complexidade de senha.
- **Sistema** — Corrigido o problema de o relógio do sistema recuar uma hora quando a sincronização de horário ocorria no período repetido após o fim do horário de verão.
- **WAF (X-Pack)** — Corrigidos erros ao abrir as configurações do site e o problema de APIs básicas de nós filhos da Edição Comunitária não serem liberadas.
- **Monitoramento de sites (X-Pack)** — Corrigido um erro nas estatísticas de logs de requisições.

---

## Como atualizar

Usuários existentes podem clicar em **Verificar atualizações** no canto inferior direito do painel do 1Panel para concluir a atualização online.

Novo no 1Panel? Visite [1panel.pro](https://1panel.pro/) para começar.

---

## Fonte

Notas de versão completas: [1Panel v2.5.0 no GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.5.0)
