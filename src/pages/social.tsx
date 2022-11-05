import Skeleton from 'react-loading-skeleton';
import Profile from '../components/Profile';
import { useEffect, useState } from 'react';
import { SocialMediaProps } from './api/social';
import api from '../services/api';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Social() {
  const [socialMedias, setSocialMedias] = useState<SocialMediaProps[]>();
  
  useEffect(() => {
    api.get('/social')
      .then(response => {
        setSocialMedias(response.data);
      })
  }, []);

  return (
    <section>
      <Head>
        <title>BORGEZ</title>
        <meta name="description" content="Mídias sociais de Gabriel da Silva Borges" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        { !socialMedias?.length ? <Skeleton /> : <Profile socialMedias={socialMedias} />}
      </main>
    </section>
  );
}