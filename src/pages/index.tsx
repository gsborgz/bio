import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Social from '../components/Link';
import api from '../services/api';
import styles from '../styles/Home.module.css'
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

      <main className={styles.main}>
        <section className={styles.profile}>
          <div className={styles.profilePic}>
            <Image src="/img/gabriel-desenho.png" alt="Gabriel da Silva Borges desenho busto" width={150} height={150} />
            <Image src="/img/gabriel-real.jpg" alt="Gabriel da Silva Borges real busto" width={150} height={150} />
          </div>

          <span className={styles.profileDesc}>Eae! Eu me chamo Gabriel, mas meu nome por aí é Borgez.</span>
        </section>

        <section className={styles.socialMedias}>
          {socialMedias?.map(socialMedia => (<Social key={socialMedia.name} config={socialMedia} />))}
        </section>
      </main>

      {/* <footer className={styles.footer}>
        footer
      </footer> */}
    </div>
  )
}
