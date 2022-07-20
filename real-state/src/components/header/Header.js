import React, { Component } from "react";
import TopBar from "./TopBar";
import Menu from "./Menu";

export default class Header extends Component {
    render() {
        return(
            <div className="header">
                <TopBar />
                <Menu />
            </div>
        )
    }
}