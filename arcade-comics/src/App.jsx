import React, { useState } from 'react';
import ProdutoCard from './components/ProdutoCard';
import { catalogoGibis } from './data/produtos';
import './App.css';

function App() {
  // 1. ESTADO: Guardando o que o usuário digita na busca e no filtro
  const [termoBusca, setTermoBusca] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('');

  // 2. LÓGICA: Filtrando os gibis antes de renderizar
  const gibisFiltrados = catalogoGibis.filter((gibi) => {
    const bateComBusca = gibi.nome.toLowerCase().includes(termoBusca.toLowerCase());

    const bateComCategoria = filtroCategoria === '' || gibi.categoria === filtroCategoria;

    return bateComBusca && bateComCategoria;
  });

  // Calculando o valor total apenas dos itens que estão aparecendo na tela filtrada
  const valorTotalAcervo = gibisFiltrados.reduce((total, gibi) => total + gibi.preco, 0);

  return (
    <div className="container">
      <header>
        <h1>🕹️ ARCADE COMICS 🕹️</h1>
        <h2>Painel de Administração do Acervo</h2>
      </header>

      <main>
        {/* Painel de Filtros com Lógica Vinculada */}
        <section className="painel-filtros">
          <input
            type="text"
            placeholder="🔍 Buscar gibi pelo nome..."
            className="input-arcade"
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
          />
          <select
            className="input-arcade"
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
          >
            <option value="">Todas as Editoras</option>
            <option value="Marvel">Marvel</option>
            <option value="DC">DC</option>
            <option value="Image">Image</option>
            <option value="Mangá">Mangá</option>
          </select>
        </section>

        {/* Formulário */}
        <section className="painel-cadastro">
          <h3>📥 Cadastrar Nova Raridade</h3>
          <form className="form-arcade" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Nome da HQ" className="input-arcade" />
            <input type="number" placeholder="Preço (R$)" className="input-arcade" />
            <input type="text" placeholder="Editora/Categoria" className="input-arcade" />
            <button type="submit" className="btn-arcade btn-add">ADICIONAR AO COFRE</button>
          </form>
        </section>

        {/* Renderizando a lista filtrada em vez do catálogo inteiro */}
        <section className="grid-produtos">
          {gibisFiltrados.length > 0 ? (
            gibisFiltrados.map((gibi) => (
              <ProdutoCard
                // Fallback de segurança
                key={gibi.id || crypto.randomUUID()}
                nome={gibi.nome}
                preco={gibi.preco}
                categoria={gibi.categoria}
                condicao={gibi.condicao}
                promocao={gibi.promocao}
              >
                <button className="btn-arcade btn-comprar">Comprar</button>
                <button className="btn-arcade btn-remover">Remover</button>
              </ProdutoCard>
            ))
          ) : (
            <p className="msg-vazio">Nenhum gibi encontrado com esses filtros. 👾</p>
          )}
        </section>

        <section className="painel-total">
          <h3>STATUS DO COFRE:</h3>
          <p>Valor em tela: <strong>R$ {valorTotalAcervo.toFixed(2)}</strong></p>
        </section>
      </main>
    </div>
  );
}

export default App;