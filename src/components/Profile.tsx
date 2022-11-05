import Image from 'next/image';
import Social from './SocialMedia';
import { SocialMediaProps } from '../pages/api/social';
import styles from '../styles/Profile.module.css';

type Props = {
  socialMedias: SocialMediaProps[]
}

export default function Profile({ socialMedias }: Props) {
  return (
    <section>
      <div className={styles.profile}>
        <div className={styles.profilePic}>
          {/* <Image src="/img/gabriel-desenho.png" alt="Gabriel da Silva Borges desenho busto" width={150} height={150} /> */}
          <Image src="/img/gabriel-real.jpg" alt="Gabriel da Silva Borges real busto" width={150} height={150} />
        </div>

        <span className={styles.profileDesc}>Eae! Eu me chamo Gabriel, mas meu nome por aí é Borgez.</span>
      </div>

      <div className={styles.socialMedias}>
        {socialMedias?.map(socialMedia => (<Social key={socialMedia.name} config={socialMedia} />))}
      </div>
    </section>
  );
}