import Link from './ui/Link';
import {useTranslations} from 'next-intl';

export default function Links() {
  const t = useTranslations('nav');

  const items = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/about' },
    { label: t('contact'), href: '/contact' },
  ];

  return (
    <>
      {
        items.map(
          (item, index) => <Link key={index} label={item.label} href={item.href} />
        )
      }
    </>
  )
}
