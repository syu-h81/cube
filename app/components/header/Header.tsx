import Link from "next/link";
import styles from './header.module.css'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href='/' className={styles.headerTitle}>
            <div className={styles.headerLogo}>CUBE</div>
          </Link>
          <nav className={styles.headerNav}>
            <ul className={styles.headerNavList}>
              <li className={styles.headerNavItem}><Link href="/">Home</Link></li>
              <li className={styles.headerNavItem}><Link href="/about">About</Link></li>
              <li className={styles.headerNavItem}><Link href="/contact">Blog</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}