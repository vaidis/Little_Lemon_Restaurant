'use client';

import { useState } from 'react';
import MainMenu from './MainMenu';
import Burger from './ui/Burger';
import SlideSwitch from './ui/SlideSwitch';
import useDeviceType from './hooks/useDeviceType';

import enFlag from '../public/en.svg';
import grFlag from '../public/gr.svg';
import sun from '../public/sun.svg';
import moon from '../public/moon.svg';

import Logo from './Logo';
import styles from "./header.module.css";
import { useTheme } from '../app/theme-context';
import useLanguageToggle from './hooks/useLanguageToggle';

export default function Header() {

  const { theme, toggleTheme } = useTheme();
  const [ language, toggleLanguage ] = useLanguageToggle();
  const [isOpen, setIsOpen] = useState(false);
  const deviceType = useDeviceType();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      {deviceType === 'desktop' && (
        <nav
          className={styles.navbar}
          role="navigation"
          aria-label="Main Navigation"
        >
          <Logo />
          <div className={styles.navDesktop}>
            <MainMenu />
            <SlideSwitch
              state={language === 'en' ? false : true}
              toggleState={toggleLanguage}
              leftIcon={grFlag}
              rightIcon={enFlag}
            />
            <SlideSwitch
              state={theme === 'light' ? true : false}
              toggleState={toggleTheme}
              leftIcon={sun}
              rightIcon={moon}
            />
          </div>
        </nav>
      )}

      {deviceType === 'laptop' && (
        <>
          <nav
            className={styles.navbar}
            role="navigation"
            aria-label="Main Navigation"
          >
            <Logo />
            <div className={styles.flexend}>
              <div className={styles.navTablet}>
                <SlideSwitch
                  state={language === 'en' ? false : true}
                  toggleState={toggleLanguage}
                  leftIcon={grFlag}
                  rightIcon={enFlag}
                />
                <SlideSwitch
                  state={theme === 'light' ? true : false}
                  toggleState={toggleTheme}
                  leftIcon={sun}
                  rightIcon={moon}
                />
              </div>
              <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>
          </nav>
          {
            isOpen && <div className={styles.mobileMenu}>
              <MainMenu />
            </div>
          }
        </>
      )}

      {(deviceType === 'tablet' || deviceType === 'mobile') && (
        <>
          <nav
            className={styles.navbar}
            role="navigation"
            aria-label="Main Navigation"
          >
            <Logo />
            <div className={styles.navMobile}>
              <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>
          </nav>
          {
            isOpen && <div className={styles.mobileMenu}>
              <div className={styles.mobileSwitches}>
                <SlideSwitch
                  state={language === 'en' ? false : true}
                  toggleState={toggleLanguage}
                  leftIcon={grFlag}
                  rightIcon={enFlag}
                />
                <SlideSwitch
                  state={theme === 'light' ? true : false}
                  toggleState={toggleTheme}
                  leftIcon={sun}
                  rightIcon={moon}
                />
              </div>
              <MainMenu />
            </div>
          }
        </>
      )}

    </header>
  );
}

