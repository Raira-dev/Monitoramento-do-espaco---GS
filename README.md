# Monitoramento da missão

Aplicativo mobile em React Native + Expo para monitoramento de missões espaciais.

## Informações do Projeto
* **Curso:** Ciência da Computação (2º Ano) - FIAP
* **Disciplina:** Cross-Platform Application Development

## 👥 Integrantes da Equipe
* **Anny Elly Pantoja Martin** - RM565055
* **Larissa Machado Silva** - RM564168
* **Raira de Teves Costa** - RM564850

## Descrição do Sistema
Este aplicativo simula um painel de controle e telemetria para gerenciamento de parâmetros críticos de missões espaciais. Ele fornece dados em tempo real sobre sensores, energia, links de comunicação e estabilidade orbital, agindo dinamicamente em caso de anomalias atmosféricas ou mecânicas.

## Tecnologias e Requisitos Implementados
- **React Native + Expo (v51/SDK Atual):** Estrutura base do projeto mobile.
- **Expo Router:** Arquitetura estrutural de navegação baseada em arquivos por abas (Tab Navigation).
- **Context API:** Controle e dispatch de estado global e verificação em tempo real de limites de segurança.
- **AsyncStorage:** Mecanismo de persistência local para salvar os dados modificados pelo painel do comandante.
- **Validação de Formulários:** Filtros de tipos de dados e limites numéricos restritos de 0 a 100%.
- **Componentização:** Isolamento e modularização de cards de telemetria visual.
