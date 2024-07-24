import Image from "next/image"
import styles from "./menu.module.css"
import Link from "next/link"

export default function Footer() {
    return (
        <nav className={styles.footer}>
            <ul className={styles.footerList}>
                <li className={styles.footerItem}>
                    <Link href="https://www.instagram.com">
                        <Image width={45} height={45} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ohNFHA2_gxQ4d63potp3YdgfR34A7RqGUg&s"} alt="Instagram" />
                    </Link>
                </li>
                <li className={styles.footerItem}>
                    <Link href="https://x.com">
                        <Image width={45} height={45} src={"https://img.freepik.com/vetores-premium/novo-logotipo-do-twitter-icones-do-twitter-logotipo-do-twitter-x_1036746-408.jpg"} alt="Twitter" />
                    </Link>
                </li>
                <li className={styles.footerItem}>
                    <Link href="https://www.facebook.com">
                        <Image width={45} height={45} src={"https://freepnglogo.com/images/all_img/1713419166FB_Logo_PNG.png"} alt="Facebook" />
                    </Link>
                </li>
                <li className={styles.footerItem}>
                    <Link href="https://br.pinterest.com">
                        <Image width={45} height={45} src={"https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"} alt="Pinterest" />
                    </Link>
                </li>
            </ul>
            <p className={styles.linha}>Loja criada em 10/07/2006</p>
        </nav>
    )
}