import { render, screen } from "@testing-library/react";
import {NextIntlClientProvider} from 'next-intl';

import Hero from '../../components/home/Hero';
import Cards from '../../components/home/Cards';
import Testimonials from '../../components/home/Testimonials';

const WithIntl = ({children}) => { 
  const locale = 'el';
  const messages = require(`../../messages/${locale}.json`);
  return ( 
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}

describe('Section component', () => {
  it('renders hero', async () => {
    render(<WithIntl><Hero/></WithIntl>);
    const elements = await screen.findAllByText("Αυθεντικό Ελληνικό Εστιατόριο");
    expect(elements.length).toBe(1);
  });

  it('renders cards', async () => {
    render(<WithIntl><Cards/></WithIntl>);
    const elements = await screen.findAllByText("Τα πιάτα της εβδομάδας");
    expect(elements.length).toBe(1);
  });

  it('renders Testimonials', async () => {
    render(<WithIntl><Testimonials/></WithIntl>);
    const elements = await screen.findAllByText("Testimonials");
    expect(elements.length).toBe(1);
  });


});


