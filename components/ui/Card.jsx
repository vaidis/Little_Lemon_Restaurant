import styles from './Card.module.scss';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function Card(props) {
  const {title, description, price, image, index, testimonial} = props;
  const t = useTranslations('IndexPage');
  
  return (
    <div index={index} className={`${styles.card} ${testimonial ? styles.testimonial : ''}`}>
      <div className={styles.image}>
        <Image
          className={styles.image}
          src={image}
          alt={title}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {
          price && <div className={styles.button}>
            <div className={styles.price}>{price}€</div>
            <div className={styles.order}>{t('order')}</div>
          </div>
        }
      </div>
    </div>
  );
}
