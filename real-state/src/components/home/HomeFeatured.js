import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { FaMapMarker, FaBed, FaBath, FaObjectGroup, FaExchangeAlt, FaShareAlt, FaRegHeart } from "react-icons/fa";



export default class HomeFeatured extends Component {
    render() {
        return(
            <section className="featured portfolio">
                <div className="container">
                    <div className="row">
                        <div className="section-title col-md-5">
                            <h3>Featured</h3>
                            <h2>Properties</h2>
                        </div>
                    </div>
                    <div className="row portfolio-items">
                        <div className="item col-lg-4 col-md-6 col-xs-12 landscapes sale">
                            <div className="homes">
                                <Link to="properties-details.html" className="homes-img added-effect">
                                    <div className="homes-tag button alt featured">Featured</div>
                                    <div className="homes-tag button sale">For Sale</div>
                                    <div className="homes-price">Family Home</div>
                                    <img src="images/feature-properties/fp-1.jpg" alt="home-1" className="img-responsive" />
                                </Link>
                                <div className="homes-content">
                                    <h3 className="homes-address mb-3">
                                        <Link to="properties-details.html">
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
                                            <Link to="properties-details.html">$ 230,000</Link>
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
                        <div className="item col-lg-4 col-md-6 col-xs-12 people rent">
                            <div className="homes">
                                <Link to="properties-details.html" className="homes-img added-effect">
                                    <div className="homes-tag button alt featured">Featured</div>
                                    <div className="homes-tag button sale rent">For Rent</div>
                                    <div className="homes-price">Family Home</div>
                                    <img src="images/feature-properties/fp-2.jpg" alt="home-1" className="img-responsive" />
                                </Link>
                                <div className="homes-content">
                                    <h3 className="homes-address mb-3">
                                        <Link to="properties-details.html">
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
                                            <Link to="properties-details.html">$ 230,000</Link>
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
                        <div className="item col-lg-4 col-md-6 col-xs-12 people landscapes sale">
                            <div className="homes">
                                <Link to="properties-details.html" className="homes-img added-effect">
                                    <div className="homes-tag button alt featured">Featured</div>
                                    <div className="homes-tag button sale">For Sale</div>
                                    <div className="homes-price">Family Home</div>
                                    <img src="images/feature-properties/fp-3.jpg" alt="home-1" className="img-responsive" />
                                </Link>
                                <div className="homes-content">
                                    <h3 className="homes-address mb-3">
                                        <Link to="properties-details.html">
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
                                            <Link to="properties-details.html">$ 230,000</Link>
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
                        <div className="item col-lg-4 col-md-6 col-xs-12 people landscapes rent no-pb">
                            <div className="homes no-mb">
                                <Link to="properties-details.html" className="homes-img added-effect">
                                    <div className="homes-tag button alt featured">Featured</div>
                                    <div className="homes-tag button sale rent">For Rent</div>
                                    <div className="homes-price">Family Home</div>
                                    <img src="images/feature-properties/fp-4.jpg" alt="home-1" className="img-responsive" />
                                </Link>
                                <div className="homes-content">
                                    <h3 className="homes-address mb-3">
                                        <Link to="properties-details.html">
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
                                            <Link to="properties-details.html">$ 230,000</Link>
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
                        <div className="item col-lg-4 col-md-6 col-xs-12 people sale no-pb">
                            <div className="homes no-mb">
                                {/* homes img */}
                                <Link to="properties-details.html" className="homes-img added-effect">
                                    <div className="homes-tag button alt featured">Featured</div>
                                    <div className="homes-tag button sale">For Sale</div>
                                    <div className="homes-price">Family Home</div>
                                    <img src="images/feature-properties/fp-5.jpg" alt="home-1" className="img-responsive" />
                                </Link>
                                <div className="homes-content">
                                    <h3 className="homes-address mb-3">
                                        <Link to="properties-details.html">
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
                                            <Link to="properties-details.html">$ 230,000</Link>
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
                        <div className="item col-lg-4 col-md-6 it2 col-xs-12 web rent no-pb">
                            <div className="homes no-mb last">
                                {/* homes img */}
                                <Link to="properties-details.html" className="homes-img added-effect">
                                    <div className="homes-tag button alt featured">Featured</div>
                                    <div className="homes-tag button sale rent">For Rent</div>
                                    <div className="homes-price">Family Home</div>
                                    <img src="images/feature-properties/fp-6.jpg" alt="home-1" className="img-responsive" />
                                </Link>
                                <div className="homes-content">
                                    <h3 className="homes-address mb-3">
                                        <Link to="properties-details.html">
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
                                            <Link to="properties-details.html">$ 230,000</Link>
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