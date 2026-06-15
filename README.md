# Sistema de Monitoramento Logístico Automatizado

🚀 Automação desenvolvida com Google Sheets e Google Apps Script

📈 Redução superior a 90% do trabalho manual

⚡ Processamento de mais de 100 registros em menos de 5 segundos

📊 Dashboard para monitoramento operacional e acompanhamento logístico

---

## Sobre o Projeto

Este projeto foi desenvolvido para automatizar o acompanhamento logístico de pedidos e notas fiscais.

Anteriormente, o processo exigia a consulta manual de planilhas exportadas da transportadora, atualização de status, previsões de entrega e ocorrências, consumindo entre 2 e 5 horas por execução.

A solução automatiza toda a consolidação dos dados através de Google Apps Script, permitindo que o usuário atualize centenas de registros em poucos segundos e consulte apenas as informações realmente necessárias através de filtros e indicadores.

---

## Problema

### Processo anterior

1. Exportar relatório da transportadora;
2. Consultar pedidos manualmente;
3. Atualizar status um a um;
4. Atualizar previsões de entrega;
5. Atualizar ocorrências;
6. Identificar pedidos atrasados manualmente.

Tempo médio:

⏱️ Entre 2 e 5 horas por execução.

---

## Solução

### Fluxo da Automação

Transportadora → Aba Transportadora → Apps Script → Aba Controle → Dashboard

### Funcionalidades

* Consolidação automática de dados;
* Correlação por Nota Fiscal;
* Atualização automática de status;
* Atualização de previsões de entrega;
* Atualização de ocorrências;
* Atualização de datas de ocorrência;
* Dashboard gerencial;
* Filtros por status;
* Destaque visual de situações críticas.

---
## Tela da Transportadora

![Tela Transportadora](docs/tela-transportadora.png)

Nessa tela o usuário apenas importa os dados da planilha baixada no site da transportadora para servir como base de dados para o script puxar as informações atualizadas de rastreamento de cada nota fiscal.

## Tela Principal

![Tela Principal](docs/tela-principal.png)

A partir da aba principal, o usuário apenas executa a automação através do botão "FILTRAR" e os dados já são amarrados as notas da aba "Controle".

---

## Dashboard

![Dashboard](docs/dashboard.png)

O dashboard permite visualizar rapidamente:

* Total de registros;
* Distribuição por status;
* Entregas atrasadas;
* Entregas em andamento;
* Filtros para consultas centralizadas.

---

## Arquitetura

![Fluxo](docs/fluxo-processo.png)

---

## 🎬 Demonstração do Projeto

👉 [Clique aqui para assistir a demo no YouTube](https://youtu.be/Niyhc0SxgzQ)

---

## Tecnologias Utilizadas

* Google Sheets
* Google Apps Script
* JavaScript
* Manipulação de Dados
* Dashboards Operacionais
* Automação de Processos

---

## Script Principal

O código principal da automação pode ser consultado em:

➡️ [scripts/atualizarTransportadora.js](scripts/atualizarTransportadora.js)

Principais responsabilidades:

* Leitura das abas Controle e Transportadora;
* Identificação dinâmica dos cabeçalhos;
* Tratamento de múltiplas notas fiscais;
* Correlação automática dos registros;
* Atualização em lote para melhor desempenho.

---

## Resultados

| Indicador                 | Resultado           |
| ------------------------- | ------------------- |
| Tempo anterior            | 2 a 5 horas         |
| Tempo atual               | Menos de 5 segundos |
| Registros testados        | +100                |
| Redução do esforço manual | >90%                |
| Desenvolvedor             | Projeto individual  |

---

## Aprendizados

Durante o desenvolvimento foram aplicados conceitos de:

* Automação de Processos;
* Estruturas de Dados (Mapas/Objetos);
* Manipulação e Tratamento de Dados;
* Dashboards Operacionais;
* Otimização de Processamento;
* Análise de Fluxos Operacionais.

---

## Autor

Lucas Almeida Oliveira

Projeto desenvolvido para automatizar processos logísticos e demonstrar conhecimentos em automação, análise de dados e desenvolvimento de soluções operacionais.
