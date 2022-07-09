import React, { Component } from "react";

export default class HomePartners extends Component {
    render() {
        return(
            <div>
                {/* STAR SECTION PARTNERS */}
                <div className="partners">
                    <div className="container">
                        <div className="section-title">
                            <h3>Nossos</h3>
                            <h2>Parceiros</h2>
                        </div>
                        <div className="owl-carousel style2">
                            <div className="owl-item"><img src="images/partners/1.png" alt='' /></div>
                            <div className="owl-item"><img src="images/partners/2.png" alt='' /></div>
                            <div className="owl-item"><img src="images/partners/3.png" alt='' /></div>
                            <div className="owl-item"><img src="images/partners/4.png" alt='' /></div>
                            <div className="owl-item"><img src="images/partners/5.png" alt='' /></div>
                            <div className="owl-item"><img src="images/partners/6.png" alt='' /></div>
                            <div className="owl-item"><img src="images/partners/7.png" alt='' /></div>
                            <div className="owl-item"><img src="images/partners/8.png" alt='' /></div>
                            <div className="owl-item"><img src="images/partners/9.png" alt='' /></div>
                            <div className="owl-item"><img src="images/partners/10.png" alt='' /></div>
                        </div>
                    </div>
                </div>
                {/* END SECTION PARTNERS */}
            </div>
        )
    }
}