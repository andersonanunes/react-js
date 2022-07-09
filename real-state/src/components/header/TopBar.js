import React, { Component } from "react";

export default class TopBar extends Component {
    render() {
        return(
            <div>
                <div className="header-top">
                    <div className="container">
                        <div className="top-info hidden-sm-down">
                            <div className="call-header">
                                <p><i className="fa fa-phone" aria-hidden="true" /> (11) 97555.2914</p>
                            </div>
                            {/* <div className="address-header">
                                <p><i className="fa fa-map-marker" aria-hidden="true" /> 95 South Park Ave, USA</p>
                            </div> */}
                            <div className="mail-header">
                                <p><i className="fa fa-envelope" aria-hidden="true" /> info@compreseucantinho.com.br</p>
                            </div>
                        </div>
                        <div className="top-social hidden-sm-down">
                            <div className="login-wrap">
                                <ul className="d-flex">
                                    <li><a href="#"><i className="fa fa-user" /> Login</a></li>
                                    <li><a href="#"><i className="fa fa-sign-in" /> Cadastre-se</a></li>
                                </ul>
                            </div>
                            <div className="social-icons-header">
                                <div className="social-icons">
                                    <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                    <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                    <a href="#"><i className="fa fa-youtube" aria-hidden="true" /></a>
                                </div>
                            </div>
                            <div className="dropdown">
                                <button className="btn-dropdown dropdown-toggle" type="button" id="dropdownlang" data-toggle="dropdown" aria-haspopup="true">
                                    <img src="images/en.png" alt="lang" /> Português
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownlang">
                                    <li><img src="images/en.png" alt="lang" />Inglês</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}