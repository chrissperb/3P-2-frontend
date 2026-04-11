import React, { useState, useEffect } from 'react';
import ProdutoCard from './components/ProdutoCard';
import './App.css';

function App() {
  // 1. ESTADOS PRINCIPAIS
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Estados para Filtros
  const [termoBusca, setTermoBusca] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('');

  // Estados para o Formulário de Cadastro
  const [nomeForm, setNomeForm] = useState('');
  const [precoForm, setPrecoForm] = useState('');
  const [categoriaForm, setCategoriaForm] = useState('');

  // 2. EFEITOS COLATERAIS (useEffect e Fetch API)
  useEffect(() => {
    const buscarDados = async () => {
      try {
        // Simula um pequeno delay para aparecer a mensagem de "Carregando..."
        await new Promise(resolve => setTimeout(resolve, 800));

        const dadosSalvos = localStorage.getItem('arcade_comics_estoque');

        if (dadosSalvos) {
          setProdutos(JSON.parse(dadosSalvos));
        } else {
          // Se não tiver no LocalStorage, busca do produtos.json
          const resposta = await fetch('/produtos.json');
          const dados = await resposta.json();
          setProdutos(dados);
          localStorage.setItem('arcade_comics_estoque', JSON.stringify(dados));
        }
      } catch (erro) {
        console.error("Erro na conexão com a matriz:", erro);
      } finally {
        setCarregando(false);
      }
    };

    buscarDados();
  }, []);

  // 3. EVENTOS (Adicionar e Remover)
  const adicionarGibi = (e) => {
    e.preventDefault();

    if (!nomeForm || !precoForm || !categoriaForm) {
      alert("Preencha todos os campos para cadastrar!");
      return;
    }

    const novoGibi = {
      id: crypto.randomUUID(),
      nome: nomeForm,
      preco: parseFloat(precoForm),
      categoria: categoriaForm,
      condicao: "Mint",
      promocao: false
    };

    // Atualiza o estado
    const novaLista = [...produtos, novoGibi];
    setProdutos(novaLista);

    localStorage.setItem('arcade_comics_estoque', JSON.stringify(novaLista));

    // Limpa os campos do formulário
    setNomeForm('');
    setPrecoForm('');
    setCategoriaForm('');
  };

  const removerGibi = (idParaRemover) => {
    const novaLista = produtos.filter((gibi) => gibi.id !== idParaRemover);
    setProdutos(novaLista);
    localStorage.setItem('arcade_comics_estoque', JSON.stringify(novaLista));
  };

  // 4. LÓGICA DE RENDERIZAÇÃO
  const gibisFiltrados = produtos.filter((gibi) => {
    const bateComBusca = gibi.nome.toLowerCase().includes(termoBusca.toLowerCase());
    const bateComCategoria = filtroCategoria === '' || gibi.categoria === filtroCategoria;
    return bateComBusca && bateComCategoria;
  });

  const valorTotalAcervo = gibisFiltrados.reduce((total, gibi) => total + gibi.preco, 0);

  // Tela de carregamento
  if (carregando) {
    return (
      <div className="container">
        <h2 className="msg-carregando">⏳ Conectando ao Banco de Dados da Batcaverna...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <header>
        <h1>🕹️ ARCADE COMICS 🕹️</h1>
        <h2>Painel de Administração do Acervo</h2>
      </header>

      <main>
        {/* Painel de Filtros */}
        <section className="painel-filtros">
          <input
            type="text" placeholder="🔍 Buscar gibi pelo nome..." className="input-arcade"
            value={termoBusca} onChange={(e) => setTermoBusca(e.target.value)}
          />
          <select
            className="input-arcade"
            value={filtroCategoria} onChange={(e) => setFiltroCategoria(e.target.value)}
          >
            <option value="">Todas as Editoras</option>
            <option value="Marvel">Marvel</option>
            <option value="DC">DC</option>
            <option value="Image">Image</option>
            <option value="Mangá">Mangá</option>
          </select>
        </section>

        {/* Formulário com evento onSubmit e vinculação de estado nos inputs */}
        <section className="painel-cadastro">
          <h3>📥 Cadastrar Nova Raridade</h3>
          <form className="form-arcade" onSubmit={adicionarGibi}>
            <input
              type="text" placeholder="Nome da HQ" className="input-arcade"
              value={nomeForm} onChange={(e) => setNomeForm(e.target.value)}
            />
            <input
              type="number" step="0.01" placeholder="Preço (R$)" className="input-arcade"
              value={precoForm} onChange={(e) => setPrecoForm(e.target.value)}
            />
            <select className="input-arcade" value={categoriaForm} onChange={(e) => setCategoriaForm(e.target.value)}>
              <option value="">Selecione Editora</option>
              <option value="Marvel">Marvel</option>
              <option value="DC">DC</option>
              <option value="Image">Image</option>
              <option value="Mangá">Mangá</option>
            </select>
            <button type="submit" className="btn-arcade btn-add">ADICIONAR AO COFRE</button>
          </form>
        </section>

        {/* Vitrine */}
        <section className="grid-produtos">
          {gibisFiltrados.length > 0 ? (
            gibisFiltrados.map((gibi) => (
              <ProdutoCard
                key={gibi.id}
                nome={gibi.nome}
                preco={gibi.preco}
                categoria={gibi.categoria}
                condicao={gibi.condicao}
                promocao={gibi.promocao}
              >
                <button className="btn-arcade btn-comprar" onClick={() => alert(`Comprando: ${gibi.nome}`)}>Comprar</button>
                <button className="btn-arcade btn-remover" onClick={() => removerGibi(gibi.id)}>Remover</button>
              </ProdutoCard>
            ))
          ) : (
            <p className="msg-vazio">Nenhum gibi encontrado. 👾</p>
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