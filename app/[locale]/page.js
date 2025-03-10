import Hero from '../../components/home/Hero';
import Cards from '../../components/home/Cards';
import Testimonials from '../../components/home/Testimonials';

import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.section}>
      <Hero />
      <Cards />
      <Testimonials />
    </section>
  );
}

