import React, { Component } from "react";
import { FaHome, FaList, FaUsers, FaTrophy } from "react-icons/fa";

export default class HomerCounter extends Component {
    render() {
        return(
            <section className="counterup">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <div className="countr">
                                <FaHome aria-hidden="true" />
                                <div className="count-me">
                                    <p className="counter text-left">300</p>
                                    <h3>Sold Houses</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <div className="countr">
                                <FaList aria-hidden="true" />
                                <div className="count-me">
                                    <p className="counter text-left">400</p>
                                    <h3>Daily Listings</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <div className="countr mb-0">
                                <FaUsers aria-hidden="true" />
                                <div className="count-me">
                                    <p className="counter text-left">250</p>
                                    <h3>Expert Agents</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <div className="countr mb-0 last">
                                <FaTrophy aria-hidden="true" />
                                <div className="count-me">
                                    <p className="counter text-left">200</p>
                                    <h3>Won Awars</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}