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

  const filtro_AZ = () => {
    const lisAux = [...listaDeProduto].sort((a, b) => a.produto.localeCompare(b.title))
    setListaDeProduto(lisAux)
  }

  const filtro_ZA = () => {
    const lisAux = [...listaDeProduto].sort((a, b) => b.produto.localeCompare(a.title))
    setListaDeProduto(lisAux)
  }

  const filtro_baratoCaro = () => {
    const lisAux = [...listaDeProduto].sort((a, b) => b.preco - a.preco)
    setListaDeProduto(lisAux)
  }

  const filtroCarobarato = () => {
    const lisAux = [...listaDeProduto].sort((a, b) => a.preco - b.preco)
    setListaDeProduto(lisAux)
  }

  if (Erro == true) {
    return <ErrorFetch />
  }

  if (listaDeProduto[0] == null) {
    return <Carregando />
  }

  return (
    <>
    <div className={styles.body}>
      <br/>
      <div>
        <div className={styles.filterContainer}>
          <button className={styles.filterButton} onClick={filtro_AZ}>Produtos de A a Z</button>
          <button className={styles.filterButton} onClick={filtro_ZA}>Produtos de Z a A</button>
          <button className={styles.filterButton} onClick={filtro_baratoCaro}>Mais caro para o mais barato</button>
          <button className={styles.filterButton} onClick={filtroCarobarato}>Mais barato para o mais caro</button>
        </div>
      </div>

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
                <p className={styles.precoProduto}>Tema: {produto.tema}</p>
              </div>

            </Link>
          </div>
        ))}
      </main>
      </div>
    </>
  );
};

export default Main;
