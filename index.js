import { Produto } from './Produto.js';

console.log("=== 👾 INICIANDO SISTEMA ARCADE COMICS 👾 ===\n");

// 1. Variáveis
const nomeLoja = "Arcade Comics";
let descontoPadrao = 0.10; // 10%
var categoriaDestaque = "Marvel";

// 2. Funções e Arrow Functions
function calcularPrecoFinal(preco, desconto) {
    return preco - (preco * desconto);
}

const calcularPrecoFinalArrow = (preco, desconto) => preco - (preco * desconto);

// 3. Objetos e Classes
const gibiRaroLiteral = {
    nome: "The Amazing Spider-Man #15 (First Appearance)",
    preco: 25000.00,
    categoria: "Marvel",
    condicao: "Fair",
    capa: "spiderman15.jpg"
};

// 4. Arrays e Manipulação de Arrays
const catalogoGibis = [
    new Produto("X-Men #1", 15000.00, "Marvel", "Near Mint", "xmen1.jpg"),
    new Produto("Batman: The Dark Knight Returns #1", 350.00, "DC", "Mint", "batman_dkr.jpg"),
    new Produto("Spawn #1", 120.00, "Image", "Mint", "spawn1.jpg"),
    new Produto("Akira Vol. 1", 200.00, "Mangá", "Near Mint", "akira1.jpg"),
    new Produto("Action Comics #1", 50000.00, "DC", "Fair", "action1.jpg")
];

const nomesDosGibis = catalogoGibis.map(gibi => gibi.nome);
console.log("📚 Títulos no Acervo:", nomesDosGibis);

const gibisDC = catalogoGibis.filter(gibi => gibi.categoria === "DC");
console.log("\n🦇 Apenas Gibis da DC:", gibisDC);

const valorTotalAcervo = catalogoGibis.reduce((acumulador, gibi) => acumulador + gibi.preco, 0);
console.log(`\n💰 Valor Total do Acervo: R$ ${valorTotalAcervo.toFixed(2)}`);

// 5. Destructuring e Template Literals
const { nome, preco } = gibiRaroLiteral;

// Template Literal para exibição
console.log(`\n💎 Destaque do Dia: ${nome} custa R$${preco.toFixed(2)}`);

// 7. Operadores
const mensagemPromocao = preco > 1000
    ? "Sim, frete grátis garantido!"
    : "Não, preço fixo.";
console.log(`O gibi em destaque tem promoção especial? ${mensagemPromocao}`);

const novaAquisicao = new Produto("Watchmen #1", 400.00, "DC", "Mint", "watchmen1.jpg");
const catalogoAtualizado = [...catalogoGibis, novaAquisicao];

console.log(`\n📦 Novo lote recebido! O catálogo passou de ${catalogoGibis.length} para ${catalogoAtualizado.length} itens.`);