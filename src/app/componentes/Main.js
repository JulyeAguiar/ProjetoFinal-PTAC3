import React from 'react';
import { listaDeLols } from '../api/route';
import Image from 'next/image';

const Main = () => {

  return (
    <main>
      {listaDeLols.map((produto) => (
        <div key={produto.id}>
          <Image width={250} height={250} src={produto.foto} />
          <p>{produto.produto}</p>
          <p>{produto.serie}</p>
          <p>{produto.preco}</p>
        </div>
      ))}
    </main>
  );
};

export default Main;
