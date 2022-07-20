import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaUser, FaSignInAlt, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

import styles from './TopBar.module.css'


export default class TopBar extends Component {
    render() {
        return(
            <div className={styles.headerTop}>
                <div className="container">
                    <div className="topInfo hidden-sm-down">
                        <div className="call-header">
                            <p><FaPhone aria-hidden="true" /> (11) 97555.2914</p>
                        </div>
                        <div className="mail-header">
                            <p><FaEnvelope aria-hidden="true" /> info@compreseucantinho.com.br</p>
                        </div>
                    </div>
                    <div className={[styles.topSocial, styles.hiddenSmDown]}>
                        <div className={styles.loginWrap}>
                            <ul className="d-flex">
                                <li><Link to="#"><FaUser /> Login</Link></li>
                                <li><Link to="#"><FaSignInAlt /> Cadastre-se</Link></li>
                            </ul>
                        </div>
                        <div className={styles.socialIconsHeader}>
                            <div className={styles.socialIcons}>
                                <Link to="#"><FaFacebook aria-hidden="true" /></Link>
                                <Link to="#"><FaTwitter aria-hidden="true" /></Link>
                                <Link to="#"><FaYoutube aria-hidden="true" /></Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="btn-dropdown dropdown-toggle" type="button" id="dropdownlang" data-toggle="dropdown" aria-haspopup="true">
                                <img src="images/en.png" alt="lang" /> Português
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownlang">
                                <li><img src="images/en.png" alt="lang" />Inglês</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}