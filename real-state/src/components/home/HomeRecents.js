import React, { Component } from "react";

export default class HomeRecents extends Component {
    render() {
        return(
            <div>
                {/* START SECTION RECENTLY PROPERTIES */}
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
                        <div className="item col-lg-3 col-md-6 col-xs-12 people">
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
                        <div className="item col-lg-3 col-md-6 col-xs-12 people landscapes no-pb pbp-3">
                            <div className="homes no-mb mbp-3">
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
                        <div className="item col-lg-3 col-md-6 col-xs-12 people landscapes no-pb">
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
                    </div>
                </div>
                </section>
                {/* END SECTION RECENTLY PROPERTIES */}
           
            </div>
        )
    }
}