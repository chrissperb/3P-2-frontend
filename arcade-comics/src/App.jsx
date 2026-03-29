import React from 'react';
import ProdutoCard from './components/ProdutoCard';
import { catalogoGibis } from './data/produtos';
import './App.css';

function App() {
  // Calculando o preço total usando reduce
  const valorTotalAcervo = catalogoGibis.reduce((total, gibi) => total + gibi.preco, 0);

  return (
    <div className="container">
      <header>
        <h1>🕹️ ARCADE COMICS 🕹️</h1>
        <h2>Acervo de Raridades</h2>
      </header>

      <main>
        <section className="grid-produtos">
          {/* Usando MAP para listar os produtos */}
          {catalogoGibis.map((gibi) => (
            <ProdutoCard
              key={gibi.id}
              nome={gibi.nome}
              preco={gibi.preco}
              categoria={gibi.categoria}
              condicao={gibi.condicao}
              promocao={gibi.promocao}
            />
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