# 🕹️ Arcade Comics - E-commerce de Gibis Raros

Bem-vindo ao repositório do **Arcade Comics**, uma plataforma de e-commerce dedicada a colecionadores de quadrinhos raros, *first appearances* e edições vintage. 

Este projeto está sendo desenvolvido de forma progressiva, evoluindo de fundamentos de JavaScript puro para uma aplicação robusta utilizando o ecossistema React. A identidade visual do projeto remete à era de ouro dos fliperamas dos anos 90: cores vibrantes, contrastes em neon e tipografia retrô.

---

## 🚀 Stack Tecnológica e Arquitetura

O projeto adota uma arquitetura moderna baseada em componentes, priorizando código limpo e escalabilidade.

* **Frontend Vanilla (Fase Inicial):** HTML5, CSS3, JavaScript (ES6+ Modules).
* **Frontend React (Fase Madura):** React.js (via Vite), JSX, Hooks (`useState`, `useEffect`).
* **Integrações:** Simulação de API via `fetch` consumindo um arquivo `produtos.json`.
* **Persistência de Dados:** Armazenamento local com a API do `localStorage` do navegador.

---

## 📦 Entregas e Progresso das Atividades

O desenvolvimento foi fatiado em 4 etapas principais de complexidade crescente:

* [x] **Atividade 1: Catálogo no Console (Fundamentos JS)**
    Revisão de variáveis, funções, classes ES6, manipulação de arrays (`map`, `filter`, `reduce`), destructuring e módulos. Executado via console do navegador.
* [ ] **Atividade 2: Primeiros Passos com React**
    Migração para o Vite, criação da estrutura de componentes (ex: `ProdutoCard.jsx`) e renderização de listas dinâmicas com JSX.
* [ ] **Atividade 3: Componentização Avançada**
    Uso de `props`, `children`, estilização dos cards em Grid e criação da interface visual do formulário de cadastro de novos gibis.
* [ ] **Atividade 4: Estado, Efeitos e Assincronismo**
    Gerenciamento de estado para adicionar/remover produtos, consumo assíncrono de dados do estoque inicial via `fetch` e persistência do carrinho/estoque utilizando `localStorage`.

---

## 🛠️ Como Executar o Projeto Localmente

### Rodando a Atividade 1 (Módulos ES6 no Console)
Como o projeto utiliza a sintaxe de Módulos ES6 (`import`/`export`), ele não funcionará abrindo o arquivo `index.html` diretamente no navegador devido a bloqueios de CORS. 

1. Abra a pasta do projeto no VS Code.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.
4. No navegador, abra o **Console do Desenvolvedor (F12)** para ver as operações de catálogo