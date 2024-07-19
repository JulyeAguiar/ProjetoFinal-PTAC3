"use client"
import Image from 'next/image';
import { useEffect, useState } from "react";
import styles from "./menu.module.css"
import Link from "next/link";
import Carregando from './Carregando';
import ErrorFetch from './ErroComOFetch';

const Main = () => {

  const [listaDeProduto, setListaDeProduto] = useState([])
  const [Erro, setErro] = useState(false)


  useEffect(() => {
    const pegarProduto = async () => {
      try {
        const resposta = await fetch('/api/',
          {
            next:
              { revalidate: 1 }
          });
        const produto = await resposta.json();
        setListaDeProduto(produto)
      }

      catch {
        setErro(true)
      }
    }
    pegarProduto()
  }
  , [])

  if(Erro == true){
    return <ErrorFetch/>
  }

  if (listaDeProduto[0] == null) {
    return <Carregando />
  }

  return (
    <main className={styles.listaProdutos}>

      {listaDeProduto.map((produto) => (

        <div className={styles.cartaoProduto}>
          <Link href={"/produto/" + produto.id} key={produto.id} className={styles.a}>

            <div className={styles.imagemContainer}>
              <Image className={styles.imagemProduto} width={300} height={300} src={produto.foto} alt={produto.produto} />
            </div>

            <div className={styles.detalhesProduto}>
              <p className={styles.nomeProduto}>{produto.produto}</p>
              <p className={styles.serieProduto}>{produto.serie}</p>
              <p className={styles.precoProduto}>R${produto.preco}</p>
              <p className={styles.precoProduto}>R${produto.tipo}</p>
              <p className={styles.precoProduto}>R${produto.descricao}</p>
            </div>

          </Link>
        </div>
      ))}
    </main>
  );
};

export default Main;
