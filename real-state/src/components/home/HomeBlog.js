import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { FaHeart, FaComment, FaShareAlt } from "react-icons/fa";

export default class HomeBlog extends Component {
    render() {
        return(
            <div>
                {/* START SECTION BLOG */}
                <section className="blog-section">
                    <div className="container">
                        <div className="section-title">
                            <h3>Últimas</h3>
                            <h2>Novidades</h2>
                        </div>
                        <div className="news-wrap">
                            <div className="row">
                                <div className="col-xl-6 col-md-12 col-xs-12">
                                    <div className="news-item">
                                        <Link to="blog-details.html" className="news-img-link">
                                            <div className="news-item-img">
                                                <img className="img-responsive" src="images/blog/b-9.jpg" alt="blog" />
                                            </div>
                                        </Link>
                                        <div className="news-item-text">
                                            <Link to="blog-details.html"><h3>Real Estate Latest News</h3></Link>
                                            <span className="date">April 11, 2018 &nbsp;/&nbsp; By Admin</span>
                                            <div className="news-item-descr big-news">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                            </div>
                                            <div className="news-item-bottom">
                                                <Link to="blog-details.html" className="news-link">Read more...</Link>
                                                <ul className="action-list">
                                                    <li className="action-item"><FaHeart /> <span>306</span></li>
                                                    <li className="action-item"><FaComment /> <span>34</span></li>
                                                    <li className="action-item"><FaShareAlt /> <span>122</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-12 col-xs-12">
                                    <div className="news-item news-item-sm">
                                        <Link to="blog-details.html" className="news-img-link">
                                            <div className="news-item-img">
                                                <img className="resp-img" src="images/blog/b-8.jpg" alt="blog" />
                                            </div>
                                        </Link>
                                        <div className="news-item-text">
                                            <Link to="blog-details.html"><h3>Real Estate Latest News</h3></Link>
                                            <span className="date">April 11, 2018 &nbsp;/&nbsp; By Admin</span>
                                            <div className="news-item-descr">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                            </div>
                                            <div className="news-item-bottom">
                                                <Link to="blog-details.html" className="news-link">Read more...</Link>
                                                <ul className="action-list">
                                                    <li className="action-item"><FaHeart /> <span>306</span></li>
                                                    <li className="action-item"><FaComment /> <span>34</span></li>
                                                    <li className="action-item"><FaShareAlt /> <span>122</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="news-item news-item-sm">
                                        <Link to="blog-details.html" className="news-img-link">
                                            <div className="news-item-img">
                                                <img className="resp-img" src="images/blog/b-7.jpg" alt="blog" />
                                            </div>
                                        </Link>
                                        <div className="news-item-text">
                                            <Link to="blog-details.html"><h3>Real Estate Latest News</h3></Link>
                                            <span className="date">April 11, 2018 &nbsp;/&nbsp; By Admin</span>
                                            <div className="news-item-descr">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                            </div>
                                            <div className="news-item-bottom">
                                                <Link to="blog-details.html" className="news-link">Read more...</Link>
                                                <ul className="action-list">
                                                    <li className="action-item"><FaHeart /> <span>306</span></li>
                                                    <li className="action-item"><FaComment /> <span>34</span></li>
                                                    <li className="action-item"><FaShareAlt /> <span>122</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="news-item news-item-sm no-mb">
                                        <Link to="blog-details.html" className="news-img-link">
                                            <div className="news-item-img">
                                                <img className="resp-img" src="images/blog/b-6.jpg" alt="blog" />
                                            </div>
                                        </Link>
                                        <div className="news-item-text">
                                            <Link to="blog-details.html"><h3>Real Estate Latest News</h3></Link>
                                            <span className="date">April 11, 2018 &nbsp;/&nbsp; By Admin</span>
                                            <div className="news-item-descr">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                            </div>
                                            <div className="news-item-bottom">
                                                <Link to="blog-details.html" className="news-link">Read more...</Link>
                                                <ul className="action-list">
                                                    <li className="action-item"><FaHeart /> <span>306</span></li>
                                                    <li className="action-item"><FaComment /> <span>34</span></li>
                                                    <li className="action-item"><FaShareAlt /> <span>122</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END SECTION BLOG */}

            </div>
        )
    }
}