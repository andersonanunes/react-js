import React, { Component } from "react";

export default class HomeFeatured extends Component {
    render() {
        return(
            <div>
                {/* START SECTION FEATURED PROPERTIES */}
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
                                    {/* homes img */}
                                    <a href="properties-details.html" className="homes-img added-effect">
                                        <div className="homes-tag button alt featured">Featured</div>
                                        <div className="homes-tag button sale">For Sale</div>
                                        <div className="homes-price">Family Home</div>
                                        <img src="images/feature-properties/fp-1.jpg" alt="home-1" className="img-responsive" />
                                    </a>
                                    {/* homes content */}
                                    <div className="homes-content">
                                        {/* homes address */}
                                        <h3 className="homes-address mb-3">
                                            <a href="properties-details.html">
                                                <i className="fa fa-map-marker" /><span>Park Ave, New York City</span>
                                            </a>
                                        </h3>
                                        {/* homes List */}
                                        <ul className="homes-list clearfix">
                                            <li>
                                                <i className="fa fa-bed" aria-hidden="true" />
                                                <span>Beds 6</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-bath" aria-hidden="true" />
                                                <span>Baths 3</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-object-group" aria-hidden="true" />
                                                <span>720 sq ft</span>
                                            </li>
                                        </ul>
                                        {/* Price */}
                                        <div className="price-properties">
                                            <h3 className="title mt-3">
                                                <a href="properties-details.html">$ 230,000</a>
                                            </h3>
                                            <div className="compare">
                                                <a href="#" title="Compare">
                                                    <i className="fas fa-exchange-alt" />
                                                </a>
                                                <a href="#" title="Share">
                                                    <i className="fas fa-share-alt" />
                                                </a>
                                                <a href="#" title="Favorites">
                                                    <i className="fa fa-heart-o" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item col-lg-4 col-md-6 col-xs-12 people rent">
                                <div className="homes">
                                    {/* homes img */}
                                    <a href="properties-details.html" className="homes-img added-effect">
                                        <div className="homes-tag button alt featured">Featured</div>
                                        <div className="homes-tag button sale rent">For Rent</div>
                                        <div className="homes-price">Family Home</div>
                                        <img src="images/feature-properties/fp-2.jpg" alt="home-1" className="img-responsive" />
                                    </a>
                                    {/* homes content */}
                                    <div className="homes-content">
                                        {/* homes address */}
                                        <h3 className="homes-address mb-3">
                                            <a href="car-details.html">
                                                <i className="fa fa-map-marker" /><span>Park Ave, New York City</span>
                                            </a>
                                        </h3>
                                        {/* homes List */}
                                        <ul className="homes-list clearfix">
                                            <li>
                                                <i className="fa fa-bed" aria-hidden="true" />
                                                <span>Beds 6</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-bath" aria-hidden="true" />
                                                <span>Baths 3</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-object-group" aria-hidden="true" />
                                                <span>720 sq ft</span>
                                            </li>
                                        </ul>
                                        {/* Price */}
                                        <div className="price-properties">
                                            <h3 className="title mt-3">
                                                <a href="properties-details.html">$ 230,000</a>
                                            </h3>
                                            <div className="compare">
                                                <a href="#" title="Compare">
                                                    <i className="fas fa-exchange-alt" />
                                                </a>
                                                <a href="#" title="Share">
                                                    <i className="fas fa-share-alt" />
                                                </a>
                                                <a href="#" title="Favorites">
                                                    <i className="fa fa-heart-o" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item col-lg-4 col-md-6 col-xs-12 people landscapes sale">
                                <div className="homes">
                                    {/* homes img */}
                                    <a href="properties-details.html" className="homes-img added-effect">
                                        <div className="homes-tag button alt featured">Featured</div>
                                        <div className="homes-tag button sale">For Sale</div>
                                        <div className="homes-price">Family Home</div>
                                        <img src="images/feature-properties/fp-3.jpg" alt="home-1" className="img-responsive" />
                                    </a>
                                    {/* homes content */}
                                    <div className="homes-content">
                                        {/* homes address */}
                                        <h3 className="homes-address mb-3">
                                            <a href="properties-details.html">
                                                <i className="fa fa-map-marker" /><span>Park Ave, New York City</span>
                                            </a>
                                        </h3>
                                        {/* homes List */}
                                        <ul className="homes-list clearfix">
                                            <li>
                                                <i className="fa fa-bed" aria-hidden="true" />
                                                <span>Beds 6</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-bath" aria-hidden="true" />
                                                <span>Baths 3</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-object-group" aria-hidden="true" />
                                                <span>720 sq ft</span>
                                            </li>
                                        </ul>
                                        {/* Price */}
                                        <div className="price-properties">
                                            <h3 className="title mt-3">
                                                <a href="properties-details.html">$ 230,000</a>
                                            </h3>
                                            <div className="compare">
                                                <a href="#" title="Compare">
                                                    <i className="fas fa-exchange-alt" />
                                                </a>
                                                <a href="#" title="Share">
                                                    <i className="fas fa-share-alt" />
                                                </a>
                                                <a href="#" title="Favorites">
                                                    <i className="fa fa-heart-o" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item col-lg-4 col-md-6 col-xs-12 people landscapes rent no-pb">
                                <div className="homes no-mb">
                                    {/* homes img */}
                                    <a href="properties-details.html" className="homes-img added-effect">
                                        <div className="homes-tag button alt featured">Featured</div>
                                        <div className="homes-tag button sale rent">For Rent</div>
                                        <div className="homes-price">Family Home</div>
                                        <img src="images/feature-properties/fp-4.jpg" alt="home-1" className="img-responsive" />
                                    </a>
                                    {/* homes content */}
                                    <div className="homes-content">
                                        {/* homes address */}
                                        <h3 className="homes-address mb-3">
                                            <a href="properties-details.html">
                                                <i className="fa fa-map-marker" /><span>Park Ave, New York City</span>
                                            </a>
                                        </h3>
                                        {/* homes List */}
                                        <ul className="homes-list clearfix">
                                            <li>
                                                <i className="fa fa-bed" aria-hidden="true" />
                                                <span>Beds 6</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-bath" aria-hidden="true" />
                                                <span>Baths 3</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-object-group" aria-hidden="true" />
                                                <span>720 sq ft</span>
                                            </li>
                                        </ul>
                                        {/* Price */}
                                        <div className="price-properties">
                                            <h3 className="title mt-3">
                                                <a href="properties-details.html">$ 230,000</a>
                                            </h3>
                                            <div className="compare">
                                                <a href="#" title="Compare">
                                                    <i className="fas fa-exchange-alt" />
                                                </a>
                                                <a href="#" title="Share">
                                                    <i className="fas fa-share-alt" />
                                                </a>
                                                <a href="#" title="Favorites">
                                                    <i className="fa fa-heart-o" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item col-lg-4 col-md-6 col-xs-12 people sale no-pb">
                                <div className="homes no-mb">
                                    {/* homes img */}
                                    <a href="properties-details.html" className="homes-img added-effect">
                                        <div className="homes-tag button alt featured">Featured</div>
                                        <div className="homes-tag button sale">For Sale</div>
                                        <div className="homes-price">Family Home</div>
                                        <img src="images/feature-properties/fp-5.jpg" alt="home-1" className="img-responsive" />
                                    </a>
                                    {/* homes content */}
                                    <div className="homes-content">
                                        {/* homes address */}
                                        <h3 className="homes-address mb-3">
                                            <a href="properties-details.html">
                                                <i className="fa fa-map-marker" /><span>Park Ave, New York City</span>
                                            </a>
                                        </h3>
                                        {/* homes List */}
                                        <ul className="homes-list clearfix">
                                            <li>
                                                <i className="fa fa-bed" aria-hidden="true" />
                                                <span>Beds 6</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-bath" aria-hidden="true" />
                                                <span>Baths 3</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-object-group" aria-hidden="true" />
                                                <span>720 sq ft</span>
                                            </li>
                                        </ul>
                                        {/* Price */}
                                        <div className="price-properties">
                                            <h3 className="title mt-3">
                                                <a href="properties-details.html">$ 230,000</a>
                                            </h3>
                                            <div className="compare">
                                                <a href="#" title="Compare">
                                                    <i className="fas fa-exchange-alt" />
                                                </a>
                                                <a href="#" title="Share">
                                                    <i className="fas fa-share-alt" />
                                                </a>
                                                <a href="#" title="Favorites">
                                                    <i className="fa fa-heart-o" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item col-lg-4 col-md-6 it2 col-xs-12 web rent no-pb">
                                <div className="homes no-mb last">
                                    {/* homes img */}
                                    <a href="properties-details.html" className="homes-img added-effect">
                                        <div className="homes-tag button alt featured">Featured</div>
                                        <div className="homes-tag button sale rent">For Rent</div>
                                        <div className="homes-price">Family Home</div>
                                        <img src="images/feature-properties/fp-6.jpg" alt="home-1" className="img-responsive" />
                                    </a>
                                    {/* homes content */}
                                    <div className="homes-content">
                                        {/* homes address */}
                                        <h3 className="homes-address mb-3">
                                            <a href="properties-details.html">
                                                <i className="fa fa-map-marker" /><span>Park Ave, New York City</span>
                                            </a>
                                        </h3>
                                        {/* homes List */}
                                        <ul className="homes-list clearfix">
                                            <li>
                                                <i className="fa fa-bed" aria-hidden="true" />
                                                <span>Beds 6</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-bath" aria-hidden="true" />
                                                <span>Baths 3</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-object-group" aria-hidden="true" />
                                                <span>720 sq ft</span>
                                            </li>
                                        </ul>
                                        {/* Price */}
                                        <div className="price-properties">
                                            <h3 className="title mt-3">
                                                <a href="properties-details.html">$ 230,000</a>
                                            </h3>
                                            <div className="compare">
                                                <a href="#" title="Compare">
                                                    <i className="fas fa-exchange-alt" />
                                                </a>
                                                <a href="#" title="Share">
                                                    <i className="fas fa-share-alt" />
                                                </a>
                                                <a href="#" title="Favorites">
                                                    <i className="fa fa-heart-o" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*END SECTION FEATURED PROPERTIES*/}
            
            </div>
        )
    }
}