import { FaFacebook, FaHeart, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className = {styles.socialList}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p className={styles.copyright}><span>Costs </span> &copy; | Feito com <FaHeart /> por Whodesigners - 2022</p>
        </footer>
    )
}

export default Footer