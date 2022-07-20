import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default class HomeAgents extends Component {
    render() {
        return(
            <section className="team">
                <div className="container">
                    <div className="section-title col-md-5">
                        <h3>Meet Our</h3>
                        <h2>Agents</h2>
                    </div>
                    <div className="row team-all">
                        <div className="col-lg-3 col-md-6 team-pro hover-effect">
                            <div className="team-wrap">
                                <div className="team-img">
                                    <img src="images/team/t-5.jpg" alt="" />
                                </div>
                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>Carls Jhons</h3>
                                        <p>Real Estate Agent</p>
                                        <div className="team-socials">
                                            <ul>
                                                <li>
                                                    <Link to="#" title="facebook"><FaFacebook aria-hidden="true" /></Link>
                                                    <Link to="#" title="twitter"><FaTwitter aria-hidden="true" /></Link>
                                                    <Link to="#" title="instagran"><FaInstagram aria-hidden="true" /></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <span><Link to="agent-details.html">View Profile</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 team-pro hover-effect">
                            <div className="team-wrap">
                                <div className="team-img">
                                    <img src="images/team/t-6.jpg" alt="" />
                                </div>
                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>Arling Tracy</h3>
                                        <p>Real Estate Agent</p>
                                        <div className="team-socials">
                                            <ul>
                                                <li>
                                                    <Link to="#" title="facebook"><FaFacebook aria-hidden="true" /></Link>
                                                    <Link to="#" title="twitter"><FaTwitter aria-hidden="true" /></Link>
                                                    <Link to="#" title="instagran"><FaInstagram aria-hidden="true" /></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <span><Link to="agent-details.html">View Profile</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 team-pro pb-none hover-effect">
                            <div className="team-wrap">
                                <div className="team-img">
                                    <img src="images/team/t-7.jpg" alt="" />
                                </div>
                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>Mark Web</h3>
                                        <p>Real Estate Agent</p>
                                        <div className="team-socials">
                                            <ul>
                                                <li>
                                                    <Link to="#" title="facebook"><FaFacebook aria-hidden="true" /></Link>
                                                    <Link to="#" title="twitter"><FaTwitter aria-hidden="true" /></Link>
                                                    <Link to="#" title="instagran"><FaInstagram aria-hidden="true" /></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <span><Link to="agent-details.html">View Profile</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 team-pro hover-effect">
                            <div className="team-wrap">
                                <div className="team-img">
                                    <img src="images/team/t-8.jpg" alt="" />
                                </div>
                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>Katy Grace</h3>
                                        <p>Real Estate Agent</p>
                                        <div className="team-socials">
                                            <ul>
                                                <li>
                                                    <Link to="#" title="facebook"><FaFacebook aria-hidden="true" /></Link>
                                                    <Link to="#" title="twitter"><FaTwitter aria-hidden="true" /></Link>
                                                    <Link to="#" title="instagran"><FaInstagram aria-hidden="true" /></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <span><Link to="agent-details.html">View Profile</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}