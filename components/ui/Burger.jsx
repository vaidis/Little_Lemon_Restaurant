import styles from './Burger.module.css';

export default function Burger({ isOpen, toggleMenu }) {

    return (
        <div
            className={`${styles.burger} ${isOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
        >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </div>
    );
}
