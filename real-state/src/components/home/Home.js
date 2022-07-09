import React, { Component } from "react";
import HomeBanner from "./HomeBanner";
import HomeRecents from "./HomeRecents";
import HomeWelcome from "./HomeWelcome";
import HomeServices from "./HomeServices";
import HomeFeatured from "./HomeFeatured";
import HomeAgents from "./HomeAgents";
import HomeTopLocation from "./HomeTopLocation";
import HomeBlog from "./HomeBlog";
import HomeTestimonials from "./HomeTestimonials";
import HomePartners from "./HomePartners";
import HomeNewsletter from "./HomeNewsletter";

export default class Home extends Component {
    render() {
        return(
            <div>
                <HomeBanner />
                <HomeRecents />
                <HomeWelcome />
                <HomeServices />
                <HomeFeatured />
                <HomeAgents />
                <HomeTopLocation />
                <HomeBlog />
                <HomeTestimonials />
                <HomePartners />
                <HomeNewsletter />
            </div>
        )
    }
}