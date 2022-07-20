import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { FaMapMarker, FaPhone, FaEnvelope, FaHeart, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

import NavFooter from "../layout/NavFooter";



export default class Footer extends Component {
    render() {
        return(
            <div>
                {/* START FOOTER */}
                <footer className="first-footer">
                    <div className="top-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="netabout">
                                        <Link to="index.html" className="logo">
                                            <img src="images/logo-footer.svg" alt="netcom" />
                                        </Link>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus impedit perferendis, laudantium molestiae ipsam rem veniam facere quos! Temporibus, minima culpa deleniti magnam.</p>
                                        <Link to="about.html" className="btn btn-secondary">Read More...</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="navigation">
                                        <h3>Navigation</h3>
                                        <NavFooter />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget">
                                        <h3>Twitter Feeds</h3>
                                        <div className="twitter-widget contuct">
                                            <div className="twitter-area">
                                                <div className="single-item">
                                                    <div className="icon-holder">
                                                        <FaTwitter aria-hidden="true" />
                                                    </div>
                                                    <div className="text">
                                                        <h5><Link to="#">@findhouses</Link> all share them with me baby said inspet.</h5>
                                                        <h4>about 5 days ago</h4>
                                                    </div>
                                                </div>
                                                <div className="single-item">
                                                    <div className="icon-holder">
                                                        <FaTwitter aria-hidden="true" />
                                                    </div>
                                                    <div className="text">
                                                        <h5><Link to="#">@findhouses</Link> all share them with me baby said inspet.</h5>
                                                        <h4>about 5 days ago</h4>
                                                    </div>
                                                </div>
                                                <div className="single-item">
                                                    <div className="icon-holder">
                                                        <FaTwitter aria-hidden="true" />
                                                    </div>
                                                    <div className="text">
                                                        <h5><Link to="#">@findhouses</Link> all share them with me baby said inspet.</h5>
                                                        <h4>about 5 days ago</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="contactus">
                                        <h3>Contact Us</h3>
                                        <ul>
                                            <li>
                                                <div className="info">
                                                    <FaMapMarker aria-hidden="true" />
                                                    <p className="in-p">95 South Park Ave, USA</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="info">
                                                    <FaPhone aria-hidden="true" />
                                                    <p className="in-p">+456 875 369 208</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="info">
                                                    <FaEnvelope aria-hidden="true" />
                                                    <p className="in-p ti">support@findhouses.com</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <ul className="netsocials">
                                        <li><Link to="#"><FaFacebook aria-hidden="true" /></Link></li>
                                        <li><Link to="#"><FaTwitter aria-hidden="true" /></Link></li>
                                        <li><Link to="#"><FaInstagram aria-hidden="true" /></Link></li>
                                        <li><Link to="#"><FaYoutube aria-hidden="true" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="second-footer">
                        <div className="container">
                            <p>2022 © Copyright - All Rights Reserved.</p>
                            <p>Made With <FaHeart aria-hidden="true" /> by WhoDesigners</p>
                        </div>
                    </div>
                </footer>
           
            </div>
        )
    }
}