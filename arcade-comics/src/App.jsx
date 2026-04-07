import React from 'react';
import ProdutoCard from './components/ProdutoCard';
import { catalogoGibis } from './data/produtos';
import './App.css';

function App() {
  const valorTotalAcervo = catalogoGibis.reduce((total, gibi) => total + gibi.preco, 0);

  return (
    <div className="container">
      <header>
        <h1>🕹️ ARCADE COMICS 🕹️</h1>
        <h2>Painel de Administração do Acervo</h2>
      </header>

      <main>
        <section className="painel-filtros">
          <input type="text" placeholder="🔍 Buscar gibi pelo nome..." className="input-arcade" />
          <select className="input-arcade">
            <option value="">Todas as Editoras</option>
            <option value="Marvel">Marvel</option>
            <option value="DC">DC</option>
            <option value="Image">Image</option>
            <option value="Mangá">Mangá</option>
          </select>
        </section>

        <section className="painel-cadastro">
          <h3>📥 Cadastrar Nova Raridade</h3>
          <form className="form-arcade" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Nome da HQ" className="input-arcade" />
            <input type="number" placeholder="Preço (R$)" className="input-arcade" />
            <input type="text" placeholder="Editora/Categoria" className="input-arcade" />
            <button type="submit" className="btn-arcade btn-add">ADICIONAR AO COFRE</button>
          </form>
        </section>

        <section className="grid-produtos">
          {catalogoGibis.map((gibi) => (
            <ProdutoCard
              key={gibi.id}
              nome={gibi.nome}
              preco={gibi.preco}
              categoria={gibi.categoria}
              condicao={gibi.condicao}
              promocao={gibi.promocao}
            >
              <button className="btn-arcade btn-comprar">Comprar</button>
              <button className="btn-arcade btn-remover">Remover</button>
            </ProdutoCard>
          ))}
        </section>

        <section className="painel-total">
          <h3>STATUS DO COFRE:</h3>
          <p>Valor total do acervo: <strong>R$ {valorTotalAcervo.toFixed(2)}</strong></p>
        </section>
      </main>
    </div>
  );
}

export default App;