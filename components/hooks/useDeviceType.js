'use client';

import { useState, useEffect } from 'react';

/**
 * A custom hook that returns the current device type:
 * - "mobile"
 * - "tablet"
 * - "desktop"
 *
 * Breakpoints used (can be customized):
 *   - < 768px  => mobile
 *   - 768-1023 => tablet
 *   - >= 1024  => desktop
 */
export default function useDeviceType() {
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width < 640) { setDeviceType('mobile')} 
      else if (width < 768) { setDeviceType('tablet') } 
      else if (width < 1024) { setDeviceType('laptop') } 
      else { setDeviceType('desktop')}
    }

    // Check size on mount
    handleResize();

    // Listen for window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
}
