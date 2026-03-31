import React from 'react';

export default function ProdutoCard({ nome, preco, categoria, condicao, promocao }) {
  return (
    <div className={`card ${promocao ? 'card-destaque' : ''}`}>
      <h3>{nome}</h3>
      <p><strong>Editora:</strong> {categoria}</p>
      <p><strong>Condição:</strong> {condicao}</p>

      {/* Operador Ternário para destacar a promoção */}
      {promocao ? (
        <div className="promocao-tag">
          <p className="preco-riscado">De: R$ {(preco * 1.2).toFixed(2)}</p>
          <p className="preco-promocao">Por: R$ {preco.toFixed(2)} 💥</p>
        </div>
      ) : (
        <p className="preco-normal">R$ {preco.toFixed(2)}</p>
      )}
    </div>
  );
}