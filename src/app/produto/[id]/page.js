import Image from "next/image";
import styles from "../produto.module.css";

export default async function Produto({ params }) {
    const response = await fetch("http://localhost:3000/api/" + params.id, {next:{revalidate:1}} )
    const data = await response.json()

    return (
        <main className={styles.listaProdutos}>
            <div className={styles.cartaoProduto}>
                <div className={styles.imagemContainer}>
                    <Image className={styles.imagemProduto} width={500} height={500} src={data.foto} alt={data.produto} />
                </div>
                <div className={styles.detalhesProduto}>
                    <p className={styles.nomeProduto}>{data.produto}</p>
                    <p className={styles.serieProduto}>Série: {data.serie}</p>

                    <p className={styles.tipoProduto}>Tipo: {data.tipo}</p>
                    <p className={styles.tipoProduto}>Tema: {data.tema}</p>
                    <p className={styles.tipoProduto}>Descrição: {data.descricao}</p>

                    <p className={styles.precoProduto}>Preço: R${data.preco}</p>
                    <button className={styles.botaoCompra}>Comprar Agora</button>
                </div>
            </div>
        </main>
    )
}