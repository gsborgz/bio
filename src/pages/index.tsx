import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BORGEZ</title>
        <meta name="description" content="Mídias sociais de Gabriel da Silva Borges" />
        <link rel="icon" href="/icon.png" />
      </Head>

      {/* <header className={styles.header}>
        Gabriel da Silva Borges
      </header> */}

      <main className={styles.main}>
        OPA!
      </main>

      {/* <footer className={styles.footer}>
        Feito por Gabriel da Silva Borges
      </footer> */}
    </div>
  )
}
