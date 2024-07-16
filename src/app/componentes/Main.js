"use client"
import Image from 'next/image';
import { useEffect, useState } from "react";
import styles from "./menu.module.css"
import Link from "next/link";

const Main = () => {

  const [listaDeProduto, setListaDeProduto] = useState([])

  useEffect(() => {
    const getProduct = async () => {
        const resposta = await fetch('/api',
          {
            next:
              { revalidate: 1 }
          });
        const produto = await resposta.json();
        setListaDeProduto(produto)
    }
    getProduct()
  }, [])

  return (
    <main className={styles.listaProdutos}>

      {listaDeProduto.map((produto) => (

        <div className={styles.cartaoProduto}>
          <Link href={"/api/" + produto.id} key={produto.id} className={styles.a}>

            <div className={styles.imagemContainer}>
              <Image className={styles.imagemProduto} width={300} height={300} src={produto.foto} alt={produto.produto} />
            </div>

            <div className={styles.detalhesProduto}>
              <p className={styles.nomeProduto}>{produto.produto}</p>
              <p className={styles.serieProduto}>{produto.serie}</p>
              <p className={styles.precoProduto}>R${produto.preco}</p>
            </div>

          </Link>
        </div>
      ))}
    </main>
  );
};

export default Main;
