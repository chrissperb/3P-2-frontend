# 🕹️ Arcade Comics - E-commerce de Gibis Raros

Bem-vindo ao repositório do **Arcade Comics**, uma plataforma de e-commerce dedicada a colecionadores de quadrinhos raros, *first appearances* e edições vintage. 

Este projeto está sendo desenvolvido de forma progressiva, evoluindo de fundamentos de JavaScript puro para uma aplicação robusta utilizando o ecossistema React. A identidade visual do projeto remete à era de ouro dos fliperamas dos anos 90: cores vibrantes, contrastes em neon e tipografia retrô.

---

## 🚀 Stack Tecnológica e Arquitetura

O projeto adota uma arquitetura moderna baseada em componentes, priorizando código limpo e escalabilidade.

* **Frontend Vanilla (Fase 1):** HTML5, CSS3, JavaScript (ES6+ Modules).
* **Frontend React (Fases 2 e 3):** React.js (via Vite), JSX, Componentização (`ProdutoCard`), prop `children` e UI responsiva.
* **Integrações (Futuro):** Simulação de API via `fetch` consumindo um arquivo `produtos.json`.
* **Persistência de Dados (Futuro):** Armazenamento local com a API do `localStorage` do navegador.

---

## 📦 Entregas e Progresso das Atividades

O desenvolvimento foi fatiado em 4 etapas principais de complexidade crescente:

* [x] **Atividade 1: Catálogo no Console (Fundamentos JS)**
    Revisão de variáveis, funções, classes ES6, manipulação de arrays (`map`, `filter`, `reduce`), destructuring e módulos. Executado via console do navegador.
* [x] **Atividade 2: Primeiros Passos com React**
    Migração para o Vite, criação da estrutura de pastas (`components`, `data`), componentização (`ProdutoCard.jsx`) e renderização de listas dinâmicas com JSX utilizando `map`, `reduce` e operadores ternários para condicional visual.
* [x] **Atividade 3: Componentização Avançada**
    Evolução do `ProdutoCard` para receber a prop `children` (injetando botões de ação dinamicamente). Criação da interface visual do formulário de cadastro de novos gibis, barra de busca e filtro por categoria, tudo estilizado com CSS em Grid e temática Arcade.
* [ ] **Atividade 4: Estado, Efeitos e Assincronismo**
    Gerenciamento de estado (`useState`) para adicionar/remover produtos, consumo assíncrono de dados via `fetch` (`useEffect`) e persistência do estoque utilizando `localStorage`.

---

## 🛠️ Como Executar o Projeto Localmente

### Fase 1: Rodando a Atividade 1 (Módulos ES6 no Console)
Como a Fase 1 utiliza a sintaxe de Módulos ES6 (`import`/`export`), ela necessita de um servidor local.
1. Navegue até a pasta da Fase 1 (se estiver separada).
2. Utilize a extensão **Live Server** no VS Code (clique com o botão direito no `index.html` > "Open with Live Server").
3. No navegador, abra o **Console do Desenvolvedor (F12)**.

### Fases 2 e 3: Rodando a Aplicação React (Vite)
A partir da Atividade 2, o projeto roda no ecossistema do Node.js com o bundler Vite.

1. Abra o terminal e navegue até a pasta do projeto React:
   ```bash
   cd arcade-comics
   ```

2. Instale as dependências (necessário apenas na primeira vez):

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

4. Acesse o endereço local (geralmente http://localhost:5173) no seu navegador.

---
"Construindo o melhor acervo de gibis para a sua Batcaverna." 🦇