import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';

export default function PathnamesPage({params: {locale}}) {
  setRequestLocale(locale);

  const t = useTranslations('PathnamesPage');

  return (
      <div>
        {t.rich('description', {
          p: (chunks) => <p>{chunks}</p>,
          code: (chunks) => (
            <code>{chunks}</code>
          )
        })}
      </div>
  );
}
