import styles from './Link.module.css';
import Link from 'next/link';
import useDeviceType from '../hooks/useDeviceType';
import {useSelectedLayoutSegment} from 'next/navigation';

export default function NavLink({label, href}) {
  const deviceType = useDeviceType();
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;
  
  return (
    <div className={`${styles[deviceType]} ${styles.link} menu-item ${isActive ? styles.active : ''} `}>
      <Link
        aria-current={isActive ? 'active' : ''}
        className={isActive ? 'active' : ''}
        href={`${href}`}
        onClick={() => console.log("Link ", href)}
      >
        {label}
      </Link>
    </div>
  )
}
