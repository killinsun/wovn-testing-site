/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import styles from '../../styles/Header.module.css';

const Header: React.FC = () => (
  <header className={styles.header}>
    <h1>
      <Link href="/">
        <a>WOVN Test Site on Next.js</a>
      </Link>
    </h1>
  </header>
);

export default Header;
