import React, { Component } from "react";

export default class HomerCounter extends Component {
    render() {
        return(
            <div>
                {/* START SECTION COUNTER UP */}
                <section className="counterup">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-xs-12">
                                <div className="countr">
                                    <i className="fa fa-home" aria-hidden="true" />
                                    <div className="count-me">
                                        <p className="counter text-left">300</p>
                                        <h3>Sold Houses</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12">
                                <div className="countr">
                                    <i className="fa fa-list" aria-hidden="true" />
                                    <div className="count-me">
                                        <p className="counter text-left">400</p>
                                        <h3>Daily Listings</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12">
                                <div className="countr mb-0">
                                    <i className="fa fa-users" aria-hidden="true" />
                                    <div className="count-me">
                                        <p className="counter text-left">250</p>
                                        <h3>Expert Agents</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xs-12">
                                <div className="countr mb-0 last">
                                    <i className="fa fa-trophy" aria-hidden="true" />
                                    <div className="count-me">
                                        <p className="counter text-left">200</p>
                                        <h3>Won Awars</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END SECTION COUNTER UP */}

            </div>
        )
    }
}