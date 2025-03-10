import {useTranslations} from 'next-intl';

import Card from '../../components/ui/Card';
import card1 from '../../public/card1.png';
import card2 from '../../public/card2.png';
import card3 from '../../public/card3.png';

import styles from "./Cards.module.scss";

export default function Cards() {
  const t = useTranslations('IndexPage');

  const cards = [
    {
      title: t('card1.title'),
      description: t('card1.description'),
      image: card1,
      price: 12.34
    }, {
      title: t('card2.title'),
      description: t('card2.description'),
      image: card2,
      price: 23.45
    }, {
      title: t('card3.title'),
      description: t('card3.description'),
      image: card3,
      price: 34.56
    }
  ];

  return (
    <div className={styles.specials}>
      <h2 className={styles.title}>{t('specials')}</h2>
      <div className={styles.cards}>
        {
          cards.map((card, index) => <Card index={index} key={index} {...card} />)
        }
      </div>
    </div>
  );
}

