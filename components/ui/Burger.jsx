import styles from './Burger.module.css';

export default function Burger({ isOpen, toggleMenu }) {

    return (
        <div
            className={`${styles.burger} ${isOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}
