import { Link } from 'react-router-dom'

import styles from './NavBar.module.css'


function NavBar() {
    return (
        <nav id="main-menu" className={styles.collapse}>
            <ul>
                <li className={styles.hiddenLgUp}>
                    <div className="po">
                        <Link data-toggle="collapse" href="#home" aria-expanded="false">Home</Link>
                    </div>
                    <div className={styles.collapse} id="home">
                        <div className="card card-block">
                            <Link to="/" className={styles.dropdownItem}>Home Map</Link>
                        </div>
                    </div>
                </li>
                <li className={[styles.hiddenMdDown, styles.dropdown]}>
                    <Link to="#" className="active dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</Link>
                    <div className={styles.dropdownMenu}>
                        <Link to="/" className={styles.dropdownItem}>Home Map</Link>
                    </div>
                </li>
                <li className={styles.hiddenLgUp}>
                    <div className="po">
                        <Link data-toggle="collapse" href="#listing" aria-expanded="false">Imóveis</Link>
                    </div>
                    <div className={styles.collapse} id="listing">
                        <div className="card card-block">
                            <Link className={styles.dropdownItem} href="/propertiesRightSidebar">Comprar</Link>
                            <Link className={styles.dropdownItem} href="/propertiesFullList">Alugar</Link>
                            <Link className={styles.dropdownItem} href="/propertiesDetails">Vender</Link>
                        </div>
                    </div>
                </li>
                <li className={[styles.hiddenMdDown, styles.dropdown]}>
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Imóveis</Link>
                    <div className={styles.dropdownMenu}>
                        <Link className={styles.dropdownItem} href="/propertiesRightSidebar">Comprar</Link>
                        <Link className={styles.dropdownItem} href="/propertiesFullList">Alugar</Link>
                        <Link className={styles.dropdownItem} href="/propertiesDetails">Vender</Link>
                    </div>
                </li>
                <li className={styles.hiddenLgUp}>
                    <div className="po">
                        <Link data-toggle="collapse" href="#about" aria-expanded="false">Pages</Link>
                    </div>
                    <div className="collapse" id="about">
                        <div className="card card-block">
                            <Link className={styles.dropdownItem} href="/about">About Us</Link>
                            <Link className={styles.dropdownItem} href="/faq">Faq</Link>
                            <Link className={styles.dropdownItem} href="/pricingTable">Pricing</Link>
                            <Link className={styles.dropdownItem} href="/404">404</Link>
                            <Link className={styles.dropdownItem} href="/comingSoon">Coming Soon</Link>
                            <Link className={styles.dropdownItem} href="/underConstruction">Under Construction</Link>
                        </div>
                    </div>
                </li>
                <li className={[styles.hiddenMdDown, styles.dropdown]}>
                    <Link className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">Pages</Link>
                    <div className={styles.dropdownMenu}>
                        <Link className={styles.dropdownItem} href="/about">About Us</Link>
                        <Link className={styles.dropdownItem} href="/faq">Faq</Link>
                        <Link className={styles.dropdownItem} href="/pricingTable">Pricing</Link>
                        <Link className={styles.dropdownItem} href="/404">404</Link>
                        <Link className={styles.dropdownItem} href="/comingSoon">Coming Soon</Link>
                        <Link className={styles.dropdownItem} href="/underConstruction">Under Construction</Link>
                    </div>
                </li>
                <li className={styles.hiddenLgUp}>
                    <div className="po">
                        <Link data-toggle="collapse" href="#blog" aria-expanded="false">Blog</Link>
                    </div>
                    <div className={styles.collapse} id="blog">
                        <div className="card card-block">
                            <Link className={styles.dropdownItem} href="/blog">Blog Default</Link>
                            <Link className={styles.dropdownItem} href="/blogRightSidebar">Blog Right Sidebar</Link>
                            <Link className={styles.dropdownItem} href="/blogDetails">Blog Details</Link>
                        </div>
                    </div>
                </li>
                <li className="dropdown hidden-md-down">
                    <Link className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">Blog</Link>
                    <div className={styles.dropdownMenu}>
                        <Link className={styles.dropdownItem} href="/blog">Blog Default</Link>
                        <Link className={styles.dropdownItem} href="/blogRightSidebar">Blog Right Sidebar</Link>
                        <Link className={styles.dropdownItem} href="/blogDetails">Blog Details</Link>
                    </div>
                </li>
                <li><Link href="/contact">Contato</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar