# Monitoramento da missão

Aplicativo mobile em React Native + Expo para monitoramento de missões espaciais.

## Informações do Projeto
* **Curso:** Ciência da Computação (2º Ano) - FIAP
* **Disciplina:** Cross-Platform Application Development

## 👥 Integrantes da Equipe
* **Anny Elly Pantoja Martin** - RM565055
* **Larissa Machado Silva** - RM564168
* **Raira T.C.** - RM564850

## Descrição do Projeto
O objetivo do aplicativo é monitorar parâmetros de uma missão espacial em tempo real, exibindo informações como:
- Energia da nave
- Comunicação
- Estabilidade orbital
- Alertas automáticos
- Configurações da missão

O sistema foi desenvolvido com foco em:
- Interface futurista  
- Navegação entre telas  
- Persistência local de dados  
- Gerenciamento de estado global  
- Formulários com validação  

## Tecnologias e Requisitos Implementados
- **React Native + Expo (v51/SDK Atual):** Estrutura base do projeto mobile.
- **Expo Router:** Arquitetura estrutural de navegação baseada em arquivos por abas (Tab Navigation).
- **Context API:** Controle e dispatch de estado global e verificação em tempo real de limites de segurança.
- **AsyncStorage:** Mecanismo de persistência local para salvar os dados modificados pelo painel do comandante.
- **Validação de Formulários:** Filtros de tipos de dados e limites numéricos restritos de 0 a 100%.
- **Componentização:** Isolamento e modularização de cards de telemetria visual.

# Estrutura do Projeto

```txt
app
 ├── _layout.tsx
 ├── index.tsx
 ├── dashboard.tsx
 └── config.tsx

context
 └── MissionContext.tsx
│

└── package.json
