import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const flexy = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}

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
                        this.setState({ test2: 'not found' });
                    }
                })
        } else {
            this.setState({ myInput: event.target.value, checkSearch: false })
        }
    }

    render() {
        let test =
            this.state.dataIsReady && this.state.data.categories.map(elt =>
                <Link className="Home__Link" to={`/${elt.strCategory}`} key={elt.idCategory}>
                    <div key={elt.idCategory}>
                        <h1 className="Home__Title">{elt.strCategory}</h1>
                        <img className="Home__Image" src={elt.strCategoryThumb} alt=""></img>
                    </div>
                </Link>

            )
        return (
            <>
                <section style={flexy}>
                    <Link to="/" style={{ width: "17%", textAlign: "center" }}>
                        <img src="../img/logo.svg" alt=""></img>
                    </Link>
                    <div>
                        <input id="valueSearch" type="text" placeholder="Type something to search" value={this.state.myInput} onChange={this.handleMyInput}></input>
                    </div>
                </section >
                {!this.state.checkSearch ? test : this.state.test2}
            </>
        );
    }
}

export default SearchItems;