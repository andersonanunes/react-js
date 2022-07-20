import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { FaMapMarker, FaBed, FaBath, FaObjectGroup, FaExchangeAlt, FaShareAlt, FaRegHeart } from "react-icons/fa";

export default class HomeRecents extends Component {
    render() {
        return(
            <section className="recently portfolio">
                <div className="container-fluid">
                    <div className="section-title">
                        <h3>Pesquisas</h3>
                        <h2>Recentes</h2>
                    </div>
                    <div className="row portfolio-items">
                        <div className="item col-lg-3 col-md-6 col-xs-12 landscapes">
                            <div className="homes">
                                {/* homes img */}
                                <Link to="/propertiesDetails" className="homes-img added-effect">
                                    <div className="homes-tag button alt featured">Featured</div>
                                    <div className="homes-tag button sale">For Sale</div>
                                    <div className="homes-price">Family Home</div>
                                    <img src="images/feature-properties/fp-1.jpg" alt="home-1" className="img-responsive" />
                                </Link>s
                                <div className="homes-content">
                                    <h3 className="homes-address mb-3">
                                        <Link to="/propertiesDetails">
                                            <FaMapMarker /><span>Park Ave, New York City</span>
                                        </Link>
                                    </h3>
                                    <ul className="homes-list clearfix">
                                        <li>
                                            <FaBed aria-hidden="true" />
                                            <span>Beds 6</span>
                                        </li>
                                        <li>
                                            <FaBath aria-hidden="true" />
                                            <span>Baths 3</span>
                                        </li>
                                        <li>
                                            <FaObjectGroup aria-hidden="true" />
                                            <span>720 sq ft</span>
                                        </li>
                                    </ul>
                                    <div className="price-properties">
                                        <h3 className="title mt-3">
                                            <Link to="/propertiesDetails">$ 230,000</Link>
                                        </h3>
                                        <div className="compare">
                                            <Link to="#" title="Compare"><FaExchangeAlt /></Link>
                                            <Link to="#" title="Share"><FaShareAlt /></Link>
                                            <Link to="#" title="Favorites"><FaRegHeart /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item col-lg-3 col-md-6 col-xs-12 people">
                            <div className="homes">
                                {/* homes img */}
                                <Link to="/propertiesDetails" className="homes-img added-effect">
                                    <div className="homes-tag button alt featured">Featured</div>
                                    <div className="homes-tag button sale rent">For Rent</div>
                                    <div className="homes-price">Family Home</div>
                                    <img src="images/feature-properties/fp-2.jpg" alt="home-1" className="img-responsive" />
                                </Link>
                                <div className="homes-content">
                                    <h3 className="homes-address mb-3">
                                        <Link to="/propertiesDetails">
                                            <FaMapMarker /><span>Park Ave, New York City</span>
                                        </Link>
                                    </h3>
                                    <ul className="homes-list clearfix">
                                        <li>
                                            <FaBed aria-hidden="true" />
                                            <span>Beds 6</span>
                                        </li>
                                        <li>
                                            <FaBath aria-hidden="true" />
                                            <span>Baths 3</span>
                                        </li>
                                        <li>
                                            <FaObjectGroup aria-hidden="true" />
                                            <span>720 sq ft</span>
                                        </li>
                                    </ul>
                                    <div className="price-properties">
                                        <h3 className="title mt-3">
                                            <Link to="/propertiesDetails">$ 230,000</Link>
                                        </h3>
                                        <div className="compare">
                                            <Link to="#" title="Compare"><FaExchangeAlt /></Link>
                                            <Link to="#" title="Share"><FaShareAlt /></Link>
                                            <Link to="#" title="Favorites"><FaRegHeart /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item col-lg-3 col-md-6 col-xs-12 people landscapes no-pb pbp-3">
                            <div className="homes no-mb mbp-3">
                                <Link to="properties-details.html" className="homes-img added-effect">
                                    <div className="homes-tag button alt featured">Featured</div>
                                    <div className="homes-tag button sale">For Sale</div>
                                    <div className="homes-price">Family Home</div>
                                    <img src="images/feature-properties/fp-3.jpg" alt="home" className="img-responsive" />
                                </Link>
                                <div className="homes-content">
                                    <h3 className="homes-address mb-3">
                                        <Link to="/propertiesDetails">
                                            <FaMapMarker /><span>Park Ave, New York City</span>
                                        </Link>
                                    </h3>
                                    <ul className="homes-list clearfix">
                                        <li>
                                            <FaBed aria-hidden="true" />
                                            <span>Beds 6</span>
                                        </li>
                                        <li>
                                            <FaBath aria-hidden="true" />
                                            <span>Baths 3</span>
                                        </li>
                                        <li>
                                            <FaObjectGroup aria-hidden="true" />
                                            <span>720 sq ft</span>
                                        </li>
                                    </ul>
                                    <div className="price-properties">
                                        <h3 className="title mt-3">
                                            <Link to="/propertiesDetails">$ 230,000</Link>
                                        </h3>
                                        <div className="compare">
                                            <Link to="#" title="Compare"><FaExchangeAlt /></Link>
                                            <Link to="#" title="Share"><FaShareAlt /></Link>
                                            <Link to="#" title="Favorites"><FaRegHeart /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item col-lg-3 col-md-6 col-xs-12 people landscapes no-pb">
                            <div className="homes no-mb">
                                <Link to="properties-details.html" className="homes-img added-effect">
                                    <div className="homes-tag button alt featured">Featured</div>
                                    <div className="homes-tag button sale rent">For Rent</div>
                                    <div className="homes-price">Family Home</div>
                                    <img src="images/feature-properties/fp-4.jpg" alt="home-1" className="img-responsive" />
                                </Link>
                                <div className="homes-content">
                                    <h3 className="homes-address mb-3">
                                        <Link to="/propertiesDetails">
                                            <FaMapMarker /><span>Park Ave, New York City</span>
                                        </Link>
                                    </h3>
                                    <ul className="homes-list clearfix">
                                        <li>
                                            <FaBed aria-hidden="true" />
                                            <span>Beds 6</span>
                                        </li>
                                        <li>
                                            <FaBath aria-hidden="true" />
                                            <span>Baths 3</span>
                                        </li>
                                        <li>
                                            <FaObjectGroup aria-hidden="true" />
                                            <span>720 sq ft</span>
                                        </li>
                                    </ul>
                                    <div className="price-properties">
                                        <h3 className="title mt-3">
                                            <Link to="/propertiesDetails">$ 230,000</Link>
                                        </h3>
                                        <div className="compare">
                                            <Link to="#" title="Compare"><FaExchangeAlt /></Link>
                                            <Link to="#" title="Share"><FaShareAlt /></Link>
                                            <Link to="#" title="Favorites"><FaRegHeart /></Link>
                                        </div>
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