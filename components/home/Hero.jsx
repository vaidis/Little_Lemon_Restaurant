'use client'

import Image from 'next/image';
import { useState } from "react";
import {useTranslations} from 'next-intl';

import BookingForm from './BookingForm';
import Modal from '../ui/Modal';
import styles from "./Hero.module.css";
import background from '../../public/background.png';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations('IndexPage');
  return (
    <div className={styles.hero}>

      <Image
        src={background}
        alt="Restaurant background"
        fill
        style={{ objectFit: 'cover' }}
      />

      <div className={styles.blob}></div>

      <div className={styles.promo} >
        <h1>Little Lemmon</h1>
        <p>{t('booking.description')}</p>
        <button className={styles.button} onClick={() => setIsModalOpen(true)}>
          {t('booking.button')}
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <BookingForm />
      </Modal>

    </div>
  );
}


