import Image from 'next/image';
import Link from 'next/link';
import { SocialMediaProps } from '../pages/api/social'
import styles from '../styles/Link.module.css'

type Props = {
  config: SocialMediaProps;
}

export default function Social(props: Props) {
  const { config } = props;
  const { name, description, icon, url } = config;
  
  return (
    <Link href={{ pathname: url }} target="_blank" className={styles.container}>
      <div className={styles.socialMedia}>
        <Image src={ '/icon/social/' + icon } alt={ name } width={40} height={40} />
        <span>{ name }</span>
      </div>

      <Image src="/icon/up-right-arrow.svg" className={styles.upRightArrowIcon} alt="Up right arrow" width={35} height={35} />
    </Link>
  )
}
