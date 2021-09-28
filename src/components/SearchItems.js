import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

class SearchItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchItem: [],
            checkSearch: false,
            myInput: ""
        }
    }

    handleMyInput = (event) => {
        if (event.target.value.length > 0) {
            this.setState({ myInput: event.target.value })
            fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${event.target.value}`)
                .then(response => response.json())
                .then(json => {
                    if (json.meals) {
                        this.setState({
                            test2: json.meals.map((elt, i) =>
                                <Link className="Home__Link" key={i} to={`/search/${elt.idMeal}`}>
                                    <div>
                                        <h1 className="Home__Title">{elt.strMeal}</h1>
                                        <img className="Home__Image" style={{ width: "35%" }} src={elt.strMealThumb} alt=""></img>
                                    </div>
                                </Link>
                            ),
                        }, () => this.setState({ checkSearch: true }));
                    } else {
                        this.setState({ test2: <h1 className="Home__Title" style={{ color: "#fff" }} >Not found</h1> });
                    }
                })
        } else {
            this.setState({ myInput: event.target.value, checkSearch: false })
        }
    }

    render() {


        return (
            <>
                <section >
                    <Link to="/" className="logo">
                        <img src="../img/logo.svg" alt=""></img>
                    </Link>
                    <div className="search__div" >
                        <input id="valueSearch" type="text" placeholder="Search" value={this.state.myInput} onChange={this.handleMyInput}></input>
                    </div>
                </section >
                {!this.state.checkSearch ? null : <section className="Flexy_Section">
                    <div className="Home__Section">{this.state.test2}</div></section>}
            </>
        );
    }
}

export default SearchItems;