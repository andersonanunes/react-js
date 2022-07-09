import React, { Component } from "react";

export default class HomeBanner extends Component {
    render() {
        return(
            <div>
                {/* STAR HEADER GOOGLE MAP */}
                <section className="header-map google-maps">
                    <div id="map-canvas" />
                    <div className="container">
                        <div className="filter">
                            <div className="filter-toggle hidden-md-up"><i className="fa fa-search" />
                                <h6>START SEARCHING</h6></div>
                            <form method="get">
                                <div className="filter-item">
                                    <label>Eu quero</label>
                                    <select name="property-status">
                                        <option value>Todos</option>
                                        <option value="for-sale">Comprar</option>
                                        <option value="for-rent">Alugar</option>
                                        <option value="sold">Vender</option>
                                    </select>
                                </div>
                                <div className="filter-item">
                                    <label>Tipo de Imóvel</label>
                                    <select name="property-type">
                                        <option value>Todos</option>
                                        <option value="family-house">Casa</option>
                                        <option value="apartment">Apartamento</option>
                                        <option value="condo">Casa de Condomínio</option>
                                        <option value="chacara">Chácara</option>
                                    </select>
                                </div>
                                <div className="filter-item">
                                    <label>Estado</label>
                                    <select name="property-type">
                                        <option value>Qualquer Estado</option>
                                        <option value="family-house">SP</option>
                                        <option value="apartment">RJ</option>
                                        <option value="condo">MG</option>
                                    </select>
                                </div>
                                <div className="filter-item">
                                    <label>Cidade</label>
                                    <select name="property-type">
                                        <option value>Qualquer Cidade</option>
                                        <option value="family-house">São Roque</option>
                                        <option value="apartment">Ibiúna</option>
                                        <option value="condo">Mairinque</option>
                                    </select>
                                </div>
                                <div className="filter-item mb-5 mt-3">
                                    <input type="text" disabled className="slider_amount m-t-lg-30 m-t-xs-0 m-t-sm-10 mb-3" />
                                    <div className="slider-range" />
                                </div>
                                <div className="filter-item filter-half">
                                    <label>Quartos</label>
                                    <select name="beds" id="property-beds">
                                        <option value>Todos</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                        <option value={10}>10</option>
                                    </select>
                                </div>
                                <div className="filter-item filter-half filter-half-last">
                                    <label>Banheiros</label>
                                    <select name="baths" id="property-baths">
                                        <option value>Todos</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                        <option value={10}>10</option>
                                    </select>
                                </div>
                                <div className="clear" />
                                <div className="filter-item">
                                    <label>Area</label>
                                    <input type="number" name="areaMin" className="area-filter filter-1" placeholder="Min" />
                                    <input type="number" name="areaMax" className="area-filter" placeholder="Max" />
                                    <div className="clear" />
                                </div>
                                <div className="filter-item">
                                    <label className="label-submit">Pesquisar</label>
                                    <br />
                                    <input type="submit" className="button alt" defaultValue="PESQUISAR IMÓVEL" />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                {/* END HEADER GOOGLE MAP */}
            
            </div>
        )
    }
}