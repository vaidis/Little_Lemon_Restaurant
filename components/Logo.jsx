'use client';

import Image from 'next/image';
import React from 'react';

import styles from "./header.module.css";
import logo from '../public/logo2.png';

export default function Logo() {
  return (
    <div style={{ position: 'relative', width: '250px', height: '82px' }}>
      <Image
        src={logo}
        alt="Brand Logo"
        fill
        style={{ objectFit: 'contain' }}
        // sizes="(max-width: 768px) 30vw,
        //        (max-width: 1200px) 15vw,
        //        10vw"
      />
    </div>
  );
}
