'use client';

import Image from 'next/image';
import React from 'react';
import logo from '../public/logo2.png';

export default function Logo() {
  return (
    <div style={{ position: 'relative', width: '250px', height: '82px' }}>
      <Image
        src={logo}
        alt="Brand Logo"
        fill
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}
