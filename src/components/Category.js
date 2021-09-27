import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

const flexy = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchItem: [],
            checkSearch: false,
            myInput: ""
        }
    }

    componentDidMount() {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => response.json())
            .then(json => this.setState({ data: json }, () => {
                console.log("Data is Raedy")
                this.setState({ dataIsReady: true })
            }))
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
                                <Link className="Home__Link" key={i} to={`/${this.props.match.params.strCategory}/${elt.idMeal}`}>
                                    <div>
                                        <h1 className="Home__Title">{elt.strMeal}</h1>
                                        <img className="Home__Image" style={{ width: "35%" }} src={elt.strMealThumb} alt=""></img>
                                    </div>
                                </Link>

                            )
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
        console.log(this.state.searchItem)
        console.log(this.state.checkSearch)
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
                {this.state.dataIsReady ? <section style={flexy}>
                    <Link to="/" style={{ width: "17%", textAlign: "center" }}>
                        <img src="../img/logo.svg" alt=""></img>
                    </Link>
                    <div>
                        <input id="valueSearch" type="text" placeholder="Type something to search" value={this.state.myInput} onChange={this.handleMyInput}></input>
                        <input type="button" value="Search" onClick={this.search}></input>
                    </div>
                </section > : null}
                {!this.state.checkSearch ? test : this.state.test2}
                <Link to="/random">random</Link>
            </>
        );
    }
}

export default Category;