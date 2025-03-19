import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import {NextIntlClientProvider} from 'next-intl';

const locale = 'el';
const messages = require(`../messages/${locale}.json`);

const FooterWithIntl = () => ( 
  <NextIntlClientProvider locale={locale} messages={messages}>
    <Footer />
  </NextIntlClientProvider>
)

describe('Footer component', () => {
  it("Contains menu labels", () => {
    render(<FooterWithIntl />);
    expect(screen.findAllByText("Menu"));
    expect(screen.findAllByText("Contact"));
    expect(screen.findAllByText("Social"));
  });

  it('Count links', () => {
    render(<FooterWithIntl />);
    const menuItems = screen.getAllByRole('link');
    expect(menuItems).toHaveLength(6);
  });

  it('renders social items correctly', () => {
    render(<FooterWithIntl />);
    const socialItems = screen.getAllByRole('link', { name: /Instagram|Facebook|Twitter/ });
    expect(socialItems).toHaveLength(3);
  });

  it('Social links open in new tab', () => {
    render(<FooterWithIntl />);
    const socialLinks = screen.getAllByRole('link', { name: /Instagram|Facebook|Twitter/ });
    socialLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});

