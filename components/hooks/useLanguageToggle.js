'use client';

import {usePathname, useRouter} from '../../i18n/routing';
import {useLocale} from 'next-intl';

export default function useLanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const language = locale;
  const isEnglish = locale === 'en';
  
  const toggleLanguage = () => {
    const newLocale = isEnglish ? 'el' : 'en';
    setTimeout(() => {
      router.replace(pathname, { locale: newLocale });
    }, 140);
  };

  return [language, toggleLanguage];
}
