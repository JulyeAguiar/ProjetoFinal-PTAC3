import Image from "next/image"
import styles from "./menu.module.css"
import Link from "next/link"

export default function Header() {
    return (
        <nav className={styles.header}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/" className={styles.navLink}>
                        <Image width={260} height={100} src={"https://i.pinimg.com/564x/d9/18/db/d918db47ed0607640c19530cab378ef2.jpg"} alt="Logo" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}