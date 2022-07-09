import React, { Component } from "react";

export default class Menu extends Component {
    render() {
        return(
            <div>
                <div className="header-bottom heading sticky-header" id="heading">
                    <div className="container">
                        <a href="index.html" className="logo">
                            <img src="images/logo.svg" alt="realhome" />
                        </a>
                        <button type="button" className="search-button" data-toggle="collapse" data-target="#bloq-search" aria-expanded="false">
                            <i className="fa fa-search" aria-hidden="true" />
                        </button>
                        <div className="get-quote hidden-lg-down">
                            <a href="submit-property.html">
                                <p>Cadastrar Imóvel</p>
                            </a>
                        </div>
                        <button type="button" className="button-menu hidden-lg-up" data-toggle="collapse" data-target="#main-menu" aria-expanded="false">
                            <i className="fa fa-bars" aria-hidden="true" />
                        </button>
                        <form action="#" id="bloq-search" className="collapse">
                            <div className="bloq-search">
                                <input type="text" placeholder="search..." />
                                <input type="submit" defaultValue="Search" />
                            </div>
                        </form>
                        <nav id="main-menu" className="collapse">
                            <ul>
                                {/* STAR COLLAPSE MOBILE MENU */}
                                <li className="hidden-lg-up">
                                    <div className="po">
                                        <a data-toggle="collapse" href="#home" aria-expanded="false">Home</a>
                                    </div>
                                    <div className="collapse" id="home">
                                        <div className="card card-block">
                                            <a className="dropdown-item" href="index.html">Home Map</a>
                                            <a className="dropdown-item" href="index-2.html">Home Image</a>
                                            <a className="dropdown-item" href="index-3.html">Home Video</a>
                                            <a className="dropdown-item" href="index-4.html">Home Slider</a>
                                        </div>
                                    </div>
                                </li>
                                {/* END COLLAPSE MOBILE MENU */}
                                <li className="dropdown hidden-md-down">
                                    <a className="active dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">Home</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="index.html">Home Map</a>
                                        <a className="dropdown-item" href="index-2.html">Home Image</a>
                                        <a className="dropdown-item" href="index-3.html">Home Video</a>
                                        <a className="dropdown-item" href="index-4.html">Home Slider</a>
                                    </div>
                                </li>
                                {/* STAR COLLAPSE MOBILE MENU */}
                                <li className="hidden-lg-up">
                                    <div className="po">
                                        <a data-toggle="collapse" href="#listing" aria-expanded="false">Imóveis</a>
                                    </div>
                                    <div className="collapse" id="listing">
                                        <div className="card card-block">
                                            <a className="dropdown-item" href="properties-right-sidebar.html">Comprar</a>
                                            <a className="dropdown-item" href="properties-full-list.html">Alugar</a>
                                            <a className="dropdown-item" href="properties-details.html">Vender</a>
                                        </div>
                                    </div>
                                </li>
                                {/* END COLLAPSE MOBILE MENU */}
                                <li className="dropdown hidden-md-down">
                                    <a className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">Imóveis</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="properties-right-sidebar.html">Comprar</a>
                                        <a className="dropdown-item" href="properties-full-list.html">Alugar</a>
                                        <a className="dropdown-item" href="properties-details.html">Vender</a>
                                    </div>
                                </li>
                                {/* STAR COLLAPSE MOBILE MENU */}
                                <li className="hidden-lg-up">
                                    <div className="po">
                                        <a data-toggle="collapse" href="#about" aria-expanded="false">Pages</a>
                                    </div>
                                    <div className="collapse" id="about">
                                        <div className="card card-block">
                                            <a className="dropdown-item" href="about.html">About Us</a>
                                            <a className="dropdown-item" href="faq.html">Faq</a>
                                            <a className="dropdown-item" href="pricing-table.html">Pricing</a>
                                            <a className="dropdown-item" href="404.html">404</a>
                                            <a className="dropdown-item" href="coming-soon.html">Coming Soon</a>
                                            <a className="dropdown-item" href="under-construction.html">Under Construction</a>
                                        </div>
                                    </div>
                                </li>
                                {/* END COLLAPSE MOBILE MENU */}
                                <li className="dropdown hidden-md-down">
                                    <a className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">Pages</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="about.html">About Us</a>
                                        <a className="dropdown-item" href="faq.html">Faq</a>
                                        <a className="dropdown-item" href="pricing-table.html">Pricing</a>
                                        <a className="dropdown-item" href="404.html">404</a>
                                        <a className="dropdown-item" href="coming-soon.html">Coming Soon</a>
                                        <a className="dropdown-item" href="under-construction.html">Under Construction</a>
                                    </div>
                                </li>
                                {/* STAR COLLAPSE MOBILE MENU */}
                                <li className="hidden-lg-up">
                                    <div className="po">
                                        <a data-toggle="collapse" href="#blog" aria-expanded="false">Blog</a>
                                    </div>
                                    <div className="collapse" id="blog">
                                        <div className="card card-block">
                                            <a className="dropdown-item" href="blog.html">Blog Default</a>
                                            <a className="dropdown-item" href="blog-rightsidebar.html">Blog Right Sidebar</a>
                                            <a className="dropdown-item" href="blog-details.html">Blog Details</a>
                                        </div>
                                    </div>
                                </li>
                                {/* END COLLAPSE MOBILE MENU */}
                                <li className="dropdown hidden-md-down">
                                    <a className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">Blog</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="blog.html">Blog Default</a>
                                        <a className="dropdown-item" href="blog-rightsidebar.html">Blog Right Sidebar</a>
                                        <a className="dropdown-item" href="blog-details.html">Blog Details</a>
                                    </div>
                                </li>
                                <li><a href="contact-us.html">Contato</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>                
            </div>
        )
    }
}