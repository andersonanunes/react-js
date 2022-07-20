import { useState, useEffect } from "react";

import { FaSearch } from "react-icons/fa";
import Label from "../layout/Label";
import Select from "../layout/Select";
import SubmitButton from "../layout/SubmitButton";


function HomeBanner ({ btnText, handleSubmit, findPropertyData }) {

    const [categories, setCategories] = useState([]);
    const [findProperty, setFindProperty] = useState(findPropertyData || {})

    // chamada da API
    useEffect(() => {
        fetch("http://localhost:5000/findProperty", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(findProperty);
        console.log(findProperty)
    };

    function handleChange(e) {
        setFindProperty({ ...findProperty, [e.target.name]: e.target.value });
    }

    function handleCategory(e) {
        setFindProperty({
            ...findProperty,
            properties: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        });
    }

    return(
        <section className="header-map google-maps">
            <div id="map-canvas" />
            <div className="container">
                <div className="filter">
                    <div className="filter-toggle hidden-md-up"><FaSearch />
                        <h6>START SEARCHING</h6>
                    </div>
                    <form method="get">
                        <Select 
                            name="property-status"
                            text="Eu quero"
                            options={categories}
                            handleOnChange={handleChange}
                            value={findProperty}
                        />
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
                        <SubmitButton className="filterItem">
                            <Label className="labelSubmit">Pesquisar</Label>
                            <br />
                            <input type="submit" className="button alt" defaultValue="PESQUISAR IMÓVEL" />
                        </SubmitButton>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default HomeBanner