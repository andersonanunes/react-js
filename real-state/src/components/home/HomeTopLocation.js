import React, { Component } from "react";

export default class HomeTopLocation extends Component {
    render() {
        const pathImg = "images/blog";
        return(
            <div>
                {/* START SECTION TOP LOCATION */}
                <section className="top-location">
                    <h4>TOP LOCATION</h4>
                    <div className="owl-carousel owl-theme" id="tp-carousel">
                        <div className="item">
                            <div className="tp-caption">
                                <h6>Park Ave, New York City</h6>
                                <strong>Property For Sale</strong>
                                <p>Price:&nbsp; $230,000</p>
                            </div>
                            <img src="{pathImg}/b-1.jpg" alt='' />
                        </div>
                        <div className="item">
                            <div className="tp-caption">
                                <h6>Park Ave, New York City</h6>
                                <strong>Property For Sale</strong>
                                <p>Price:&nbsp; $230,000</p>
                            </div>
                            <img src="{pathImg}/b-2.jpg" alt='' />
                        </div>
                        <div className="item">
                            <div className="tp-caption">
                                <h6>Park Ave, New York City</h6>
                                <strong>Property For Sale</strong>
                                <p>Price:&nbsp; $230,000</p>
                            </div>
                            <img src="{pathImg}/b-3.jpg" alt='' />
                        </div>
                        <div className="item">
                            <div className="tp-caption">
                                <h6>Park Ave, New York City</h6>
                                <strong>Property For Sale</strong>
                                <p>Price:&nbsp; $230,000</p>
                            </div>
                            <img src="{pathImg}/b-4.jpg" alt='' />
                        </div>
                        <div className="item">
                            <div className="tp-caption">
                                <h6>Park Ave, New York City</h6>
                                <strong>Property For Sale</strong>
                                <p>Price:&nbsp; $230,000</p>
                            </div>
                            <img src="{pathImg}/b-5.jpg" alt='' />
                        </div>
                        <div className="item">
                            <div className="tp-caption">
                                <h6>Park Ave, New York City</h6>
                                <strong>Property For Sale</strong>
                                <p>Price:&nbsp; $230,000</p>
                            </div>
                            <img src="{pathImg}/b-6.jpg" alt='' />
                        </div>
                        <div className="item">
                            <div className="tp-caption">
                                <h6>Park Ave, New York City</h6>
                                <strong>Property For Sale</strong>
                                <p>Price:&nbsp; $230,000</p>
                            </div>
                            <img src="{pathImg}/b-7.jpg" alt='' />
                        </div>
                        <div className="item">
                            <div className="tp-caption">
                                <h6>Park Ave, New York City</h6>
                                <strong>Property For Sale</strong>
                                <p>Price:&nbsp; $230,000</p>
                            </div>
                            <img src="{pathImg}/b-8.jpg" alt=''/>
                        </div>
                    </div>
                </section>
                {/* END SECTION TOP LOCATION */}
            </div>
        )
    }
}