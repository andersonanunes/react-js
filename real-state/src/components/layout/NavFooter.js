import { Link } from 'react-router-dom'

import styles from './NavFooter.module.css'

function NavFooter() {
    return (
        <div className={styles.navFooter}>
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><a href="properties-right-sidebar.html">Properties Right</a></li>
                <li><a href="properties-full-list.html">Properties List</a></li>
                <li><a href="properties-details.html">Property Details</a></li>
                <li className="no-mgb"><a href="agents-listing-grid.html">Agents Listing</a></li>
            </ul>
            <ul className="nav-right">
                <li><a href="agent-details.html">Agents Details</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="blog.html">Blog Default</a></li>
                <li><a href="blog-details.html">Blog Details</a></li>
                <li className="no-mgb"><a href="contact-us.html">Contact Us</a></li>
            </ul>
        </div>
    )
}

export default NavFooter