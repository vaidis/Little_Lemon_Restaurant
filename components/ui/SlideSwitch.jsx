'use client';

import Image from 'next/image';
import styles from './SlideSwitch.module.css';

export default function LangSwitch({state, toggleState, leftIcon, rightIcon}) {

  return (
    true && (
      <div className={styles.switch}>
        <label className={styles.toggle} arial-label="Toggle dark mode">
          <input defaultChecked={state} onClick={() => toggleState()} type="checkbox" />
          <div className={styles.movable}>
            <div className={styles.knob}></div>
            <div className={styles.images}>
              <Image
                className={styles.imageLeft}
                src={leftIcon}
                alt="On"
                width={60}
              />
              <Image
                className={styles.imageRight}
                src={rightIcon}
                alt="Off"
                width={60}
              />
            </div>
          </div>
        </label>
      </div>
    ));
}
