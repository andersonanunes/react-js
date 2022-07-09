import React, { Component } from "react";

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
                                        <a href="index.html" className="logo">
                                            <img src="images/logo-footer.svg" alt="netcom" />
                                        </a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus impedit perferendis, laudantium molestiae ipsam rem veniam facere quos! Temporibus, minima culpa deleniti magnam.</p>
                                        <a href="about.html" className="btn btn-secondary">Read More...</a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="navigation">
                                        <h3>Navigation</h3>
                                        <div className="nav-footer">
                                            <ul>
                                                <li><a href="index.html">Home One</a></li>
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
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget">
                                        <h3>Twitter Feeds</h3>
                                        <div className="twitter-widget contuct">
                                            <div className="twitter-area">
                                                <div className="single-item">
                                                    <div className="icon-holder">
                                                        <i className="fa fa-twitter" aria-hidden="true" />
                                                    </div>
                                                    <div className="text">
                                                        <h5><a href="#">@findhouses</a> all share them with me baby said inspet.</h5>
                                                        <h4>about 5 days ago</h4>
                                                    </div>
                                                </div>
                                                <div className="single-item">
                                                    <div className="icon-holder">
                                                        <i className="fa fa-twitter" aria-hidden="true" />
                                                    </div>
                                                    <div className="text">
                                                        <h5><a href="#">@findhouses</a> all share them with me baby said inspet.</h5>
                                                        <h4>about 5 days ago</h4>
                                                    </div>
                                                </div>
                                                <div className="single-item">
                                                    <div className="icon-holder">
                                                        <i className="fa fa-twitter" aria-hidden="true" />
                                                    </div>
                                                    <div className="text">
                                                        <h5><a href="#">@findhouses</a> all share them with me baby said inspet.</h5>
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
                                                    <i className="fa fa-map-marker" aria-hidden="true" />
                                                    <p className="in-p">95 South Park Ave, USA</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="info">
                                                    <i className="fa fa-phone" aria-hidden="true" />
                                                    <p className="in-p">+456 875 369 208</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="info">
                                                    <i className="fa fa-envelope" aria-hidden="true" />
                                                    <p className="in-p ti">support@findhouses.com</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <ul className="netsocials">
                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                                        <li><a href="#"><i className="fa fa-youtube" aria-hidden="true" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="second-footer">
                        <div className="container">
                            <p>2022 © Copyright - All Rights Reserved.</p>
                            <p>Made With <i className="fa fa-heart" aria-hidden="true" /> by WhoDesigners</p>
                        </div>
                    </div>
                </footer>
           
            </div>
        )
    }
}