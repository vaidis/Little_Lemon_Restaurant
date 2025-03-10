'use client';

import {useTranslations} from 'next-intl';
import styles from './Footer.module.scss';
import {useSelectedLayoutSegment} from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import fb from '../public/fb.svg';
import is from '../public/is.svg';
import tw from '../public/tw.svg';

export default function Footer() {
  const t = useTranslations('nav');
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = (href) => pathname === href;

  const menuItems = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/about' },
    { label: t('contact'), href: '/contact' },
  ];

  const socialItems = [
    { label: 'Instagram', image: is, href: 'https://instagram.com/vercel' },
    { label: 'Facebook', image: fb, href: 'https://facebook.com/vercel' },
    { label: 'Twitter', image: tw, href: 'https://twitter.com/vercel' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <div className={styles.menu}>
          <h3>Menu</h3>
          {
            menuItems.map(
              (item, index) => 
                <Link
                  key={index}
                  aria-current={isActive(item.href) ? 'active' : ''}
                  className={isActive(item.href) ? 'active' : ''}
                  href={`${item.href}`}
                  onClick={() => console.log("Link ", item.href)}
                >
                  {item.label}
                </Link>
            )
          }
        </div>

        <div className={styles.contact}>
          <h3>Contact</h3>
          <p>2800 Flagler St Miami FL, 00000</p>
          <p>1 800 545 0000</p>
          <p>littlelemon@mail.com</p>
        </div>

        <div className={styles.social}>
          <h3>Follow Us</h3>
          <div className={styles.icons}>
            {
              socialItems.map((item, index) => 
                <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" >
                  <Image
                    className={styles.image}
                    src={item.image}
                    alt={item.label}
                    width={30}
                    height={30}
                  />
                </a>
              )
            }
          </div>
        </div>

      </div>
    </footer>
  )
}
