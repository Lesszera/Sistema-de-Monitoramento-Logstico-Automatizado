# Sistema de Monitoramento Logístico Automatizado

## Visão Geral

Este projeto foi desenvolvido para automatizar o processo de acompanhamento logístico de pedidos e notas fiscais.

Anteriormente, a atividade era realizada manualmente, exigindo consultas repetitivas em planilhas exportadas da transportadora e atualização manual das informações em uma planilha de controle operacional.

A solução foi desenvolvida utilizando Google Sheets e Google Apps Script, permitindo a atualização automática dos dados, consolidação das informações e visualização através de um dashboard gerencial.

## Problema

O processo manual exigia:

* Exportação de dados da transportadora;
* Consulta individual de pedidos;
* Atualização manual de status;
* Atualização de previsões de entrega;
* Registro de ocorrências;
* Identificação manual de atrasos.

O tempo gasto variava entre 2 e 5 horas por execução.

## Solução

Foi criada uma automação que:

* Importa dados exportados da transportadora;
* Correlaciona automaticamente as notas fiscais;
* Atualiza status logísticos;
* Atualiza previsões de entrega;
* Atualiza ocorrências;
* Atualiza datas de ocorrência;
* Alimenta um dashboard operacional;
* Permite filtragem rápida por status.

## Tecnologias Utilizadas

* Google Sheets
* Google Apps Script
* JavaScript
* Automação de Processos
* Manipulação de Dados
* Dashboards Operacionais

## Fluxo da Solução

1. Exportar planilha da transportadora;
2. Colar os dados na aba "Transportadora";
3. Acionar o botão "Filtrar";
4. Executar a correlação automática dos dados;
5. Atualizar informações operacionais;
6. Atualizar dashboard e indicadores.

## Resultados

* Redução superior a 90% do trabalho manual;
* Tempo reduzido de até 5 horas para menos de 5 segundos;
* Processamento validado com mais de 100 registros;
* Maior confiabilidade das informações;
* Visão operacional centralizada.

## Funcionalidades

* Consolidação automática de dados;
* Atualização em lote;
* Dashboard gerencial;
* Filtros por status;
* Controle de entregas atrasadas;
* Identificação visual por cores;
* Monitoramento logístico em tempo real.
