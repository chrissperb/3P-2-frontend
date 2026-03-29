export class Produto {
    constructor(nome, preco, categoria, condicao, capa) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.condicao = condicao;
        this.capa = capa;
    }

    aplicarDesconto(percentualDesconto) {
        return this.preco - (this.preco * percentualDesconto);
    }

    exibirInfo() {
        return `[${this.categoria}] ${this.nome} (${this.condicao}) - R$ ${this.preco.toFixed(2)}`;
    }
}