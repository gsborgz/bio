import Head from 'next/head';
import Skeleton from 'react-loading-skeleton';
import Profile from '../components/Profile';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import api from '../services/api';
import { SocialMedia } from './api/social';

export default function Home() {
  const [socialMedias, setSocialMedias] = useState<SocialMedia[]>();
  
  useEffect(() => {
    api.get('/social')
      .then(response => {
        setSocialMedias(response.data);
      })
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>BORGEZ</title>
        <meta name="description" content="Mídias sociais de Gabriel da Silva Borges" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        Gabriel da Silva Borges
      </header>

      <main className={styles.main}>
        { !socialMedias?.length ? <Skeleton /> : <Profile socialMedias={socialMedias} />}
      </main>

      <footer className={styles.footer}>
        Feito por Gabriel da Silva Borges
      </footer>
    </div>
  )
}
