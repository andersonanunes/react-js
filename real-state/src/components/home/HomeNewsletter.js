import React, { Component } from "react";

export default class HomeNewsletter extends Component {
    render() {
        return(
            <div>
                {/* START SECTION NEWSLETTER */}
                <section className="subscribe">
                    <div className="realhome_subscribe">
                        <div className="realhome container">
                            <h2>Assine nossa Newsletter</h2>
                            <div className="row align-center">
                                <div className="col-lg-6 col-md-6">
                                    <form className="realhome_form_subscribe mailchimp form-inline" method="post">
                                        <input type="email" id="subscribeEmail" name="EMAIL" className="form_email" placeholder="Digite seu Email" />
                                        <button type="submit" value="Subscribe">Enviar</button>
                                        <label htmlFor="subscribeEmail" className="error" />
                                        <p className="subscription-success" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END SECTION NEWSLETTER */}
            </div>
        )
    }
}