import React, { Component } from "react";

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
                                        <a href="blog-details.html" className="news-img-link">
                                            <div className="news-item-img">
                                                <img className="img-responsive" src="images/blog/b-9.jpg" alt="blog image" />
                                            </div>
                                        </a>
                                        <div className="news-item-text">
                                            <a href="blog-details.html"><h3>Real Estate Latest News</h3></a>
                                            <span className="date">April 11, 2018 &nbsp;/&nbsp; By Admin</span>
                                            <div className="news-item-descr big-news">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                            </div>
                                            <div className="news-item-bottom">
                                                <a href="blog-details.html" className="news-link">Read more...</a>
                                                <ul className="action-list">
                                                    <li className="action-item"><i className="fa fa-heart" /> <span>306</span></li>
                                                    <li className="action-item"><i className="fa fa-comment" /> <span>34</span></li>
                                                    <li className="action-item"><i className="fa fa-share-alt" /> <span>122</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-12 col-xs-12">
                                    <div className="news-item news-item-sm">
                                        <a href="blog-details.html" className="news-img-link">
                                            <div className="news-item-img">
                                                <img className="resp-img" src="images/blog/b-8.jpg" alt="blog image" />
                                            </div>
                                        </a>
                                        <div className="news-item-text">
                                            <a href="blog-details.html"><h3>Real Estate Latest News</h3></a>
                                            <span className="date">April 11, 2018 &nbsp;/&nbsp; By Admin</span>
                                            <div className="news-item-descr">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                            </div>
                                            <div className="news-item-bottom">
                                                <a href="blog-details.html" className="news-link">Read more...</a>
                                                <ul className="action-list">
                                                    <li className="action-item"><i className="fa fa-heart" /> <span>306</span></li>
                                                    <li className="action-item"><i className="fa fa-comment" /> <span>34</span></li>
                                                    <li className="action-item"><i className="fa fa-share-alt" /> <span>122</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="news-item news-item-sm">
                                        <a href="blog-details.html" className="news-img-link">
                                            <div className="news-item-img">
                                                <img className="resp-img" src="images/blog/b-7.jpg" alt="blog image" />
                                            </div>
                                        </a>
                                        <div className="news-item-text">
                                            <a href="blog-details.html"><h3>Real Estate Latest News</h3></a>
                                            <span className="date">April 11, 2018 &nbsp;/&nbsp; By Admin</span>
                                            <div className="news-item-descr">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                            </div>
                                            <div className="news-item-bottom">
                                                <a href="blog-details.html" className="news-link">Read more...</a>
                                                <ul className="action-list">
                                                    <li className="action-item"><i className="fa fa-heart" /> <span>306</span></li>
                                                    <li className="action-item"><i className="fa fa-comment" /> <span>34</span></li>
                                                    <li className="action-item"><i className="fa fa-share-alt" /> <span>122</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="news-item news-item-sm no-mb">
                                        <a href="blog-details.html" className="news-img-link">
                                            <div className="news-item-img">
                                                <img className="resp-img" src="images/blog/b-6.jpg" alt="blog image" />
                                            </div>
                                        </a>
                                        <div className="news-item-text">
                                            <a href="blog-details.html"><h3>Real Estate Latest News</h3></a>
                                            <span className="date">April 11, 2018 &nbsp;/&nbsp; By Admin</span>
                                            <div className="news-item-descr">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                            </div>
                                            <div className="news-item-bottom">
                                                <a href="blog-details.html" className="news-link">Read more...</a>
                                                <ul className="action-list">
                                                    <li className="action-item"><i className="fa fa-heart" /> <span>306</span></li>
                                                    <li className="action-item"><i className="fa fa-comment" /> <span>34</span></li>
                                                    <li className="action-item"><i className="fa fa-share-alt" /> <span>122</span></li>
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