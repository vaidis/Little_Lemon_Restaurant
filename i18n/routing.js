import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

// routing.lcales       : defines which locales your app supports
// routing.defaultLocale: and what the default locale is
// routing.pathnames    : specific routes are translated between locales
export const routing = defineRouting({
  locales: ['en', 'el'],
  defaultLocale: 'en',
  //pathnames: {
  //  '/': '/',
  //  '/pathnames': {
  //    en: '/pathnames',
  //    el: '/pathnames'
  //  }
  //}
});

// createNavigatio creates helper utilities
export const {Link, getPathname, redirect, usePathname, useRouter} =
  createNavigation(routing);

