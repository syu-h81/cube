import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Link href='/' className={styles.footerTitle}>
          <div className={styles.footerLogo}>CUBE</div>
        </Link>
        <nav className={styles.footerNav}>
          <ul className={styles.footerNavList}>
            <li className={styles.footerNavItem}>
              <Image
                src="/images/x-icon.png"
                alt="x-icon"
                width={25}
                height={25}
                className={styles.footerNavIcon}
              />
            </li>
            <li className={styles.footerNavItem}>
              <Image
                src="/images/facebook-icon.png"
                alt="facebook-icon"
                width={15}
                height={25}
                className={styles.footerNavIcon}
              />
            </li>
            <li className={styles.footerNavItem}>
              <Image
                src="/images/github-icon.png"
                alt="github-icon"
                width={25}
                height={25}
                className={styles.footerNavIcon}
              />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}