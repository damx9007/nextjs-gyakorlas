import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <a href="/applications/orders">Raktár</a>
    </div>
  );
}