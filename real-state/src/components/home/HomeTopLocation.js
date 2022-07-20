import React, { Component } from "react";

export default class HomeTopLocation extends Component {
    render() {
        
        const pathImgB1 = "images/blog/b-1.jpg";
        const pathImgB2 = "images/blog/b-2.jpg";
        const pathImgB3 = "images/blog/b-3.jpg";
        const pathImgB4 = "images/blog/b-4.jpg";
        const pathImgB5 = "images/blog/b-5.jpg";
        const pathImgB6 = "images/blog/b-6.jpg";
        const pathImgB7 = "images/blog/b-7.jpg";
        const pathImgB8 = "images/blog/b-8.jpg";

        return(
            <section className="top-location">
                <h4>TOP LOCATION</h4>
                <div className="owl-carousel owl-theme" id="tp-carousel">
                    <div className="item">
                        <div className="tp-caption">
                            <h6>Park Ave, New York City</h6>
                            <strong>Property For Sale</strong>
                            <p>Price:&nbsp; $230,000</p>
                        </div>
                        <img src={pathImgB1} alt='' />
                    </div>
                    <div className="item">
                        <div className="tp-caption">
                            <h6>Park Ave, New York City</h6>
                            <strong>Property For Sale</strong>
                            <p>Price:&nbsp; $230,000</p>
                        </div>
                        <img src={pathImgB2} alt='' />
                    </div>
                    <div className="item">
                        <div className="tp-caption">
                            <h6>Park Ave, New York City</h6>
                            <strong>Property For Sale</strong>
                            <p>Price:&nbsp; $230,000</p>
                        </div>
                        <img src={pathImgB3} alt='' />
                    </div>
                    <div className="item">
                        <div className="tp-caption">
                            <h6>Park Ave, New York City</h6>
                            <strong>Property For Sale</strong>
                            <p>Price:&nbsp; $230,000</p>
                        </div>
                        <img src={pathImgB4} alt='' />
                    </div>
                    <div className="item">
                        <div className="tp-caption">
                            <h6>Park Ave, New York City</h6>
                            <strong>Property For Sale</strong>
                            <p>Price:&nbsp; $230,000</p>
                        </div>
                        <img src={pathImgB5} alt='' />
                    </div>
                    <div className="item">
                        <div className="tp-caption">
                            <h6>Park Ave, New York City</h6>
                            <strong>Property For Sale</strong>
                            <p>Price:&nbsp; $230,000</p>
                        </div>
                        <img src={pathImgB6} alt='' />
                    </div>
                    <div className="item">
                        <div className="tp-caption">
                            <h6>Park Ave, New York City</h6>
                            <strong>Property For Sale</strong>
                            <p>Price:&nbsp; $230,000</p>
                        </div>
                        <img src={pathImgB7} alt='' />
                    </div>
                    <div className="item">
                        <div className="tp-caption">
                            <h6>Park Ave, New York City</h6>
                            <strong>Property For Sale</strong>
                            <p>Price:&nbsp; $230,000</p>
                        </div>
                        <img src={pathImgB8} alt=''/>
                    </div>
                </div>
            </section>
        )
    }
}