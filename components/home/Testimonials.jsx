'use client';

import useDeviceType from '../hooks/useDeviceType';
import Card from '../../components/ui/Card';
import card1 from '../../public/card1.png';
import card2 from '../../public/card2.png';
import card3 from '../../public/card3.png';

import styles from "./Testimonials.module.scss";

const testimonials = [
  {
    title: 'John Doegreen',
    rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit. Sed do eiusmod tempor',
    image: card1
  },{
    title: 'Jane Blackdoe',
    rating: 4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt',
    image: card2
  },{
    title: 'Jane LoremIps',
    rating: 4,
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    image: card2
  },{
    title: 'John Smith',
    rating: 3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: card3
  },{
    title: 'Dolor Doeamet',
    rating: 4,
    description: 'Lorem ipsum dolor amet. Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur  ',
    image: card2
  },{
    title: 'Jane Blackdoe',
    rating: 4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut.',
    image: card2
  }
]

export default function Testimonials() {
const deviceType = useDeviceType();
  return (
    <div className={styles.testimonials}>
      <h2 className={styles.title}>Testimonials</h2>
      <div className={styles.cards}>
        {
          testimonials
            .slice(0, 
              deviceType === 'desktop' ? 5 
            : deviceType === 'laptop' ? 6 
            : deviceType === 'tablet' ? 4 
            : deviceType === 'mobile' ? 3 
            : testimonials.length)
            .map((testimonial, index) => 
            <Card 
              index={index}
              key={index}
              testimonial
              {...testimonial} 
            />)
        }
      </div>
    </div>
  );
}

