import { Link } from 'react-router-dom'
import React, { Component } from "react";

import { FaSearch, FaBars, FaShareAlt } from "react-icons/fa";

import NavBar from "../layout/NavBar";
import Container from '../layout/Container';




export default class Menu extends Component {
    render() {

        const logo = '../../images/logo.svg'

        return(

            <div className="header-bottom heading sticky-header" id="heading">
                <Container className="container">
                    <Link to='/'><img src={logo} alt="realhome" /></Link>
                    <NavBar />
                    <button type="button" className="search-button" data-toggle="collapse" data-target="#bloq-search" aria-expanded="false">
                        <FaSearch aria-hidden="true" />
                    </button>
                    <div className="get-quote hidden-lg-down">
                        <Link to="/submitProperty"><p>Cadastrar Imóvel</p></Link>
                    </div>
                    <button type="button" className="button-menu hidden-lg-up" data-toggle="collapse" data-target="#main-menu" aria-expanded="false">
                        <FaBars aria-hidden="true" />
                    </button>
                    <form action="#" id="bloq-search" className="collapse">
                        <div className="bloq-search">
                            <input type="text" placeholder="search..." />
                            <input type="submit" defaultValue="Search" />
                        </div>
                    </form>
                </Container>
            </div>
        )
    }
}