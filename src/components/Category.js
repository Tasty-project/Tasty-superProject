import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchItems from './SearchItems';
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

    render() {
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
                <h2 className="Home__Headline">Or go through our categories</h2>
                <section className="Home__Section">
                    {this.state.dataIsReady && this.state.data.categories.map(elt =>
                        <Link className="Home__Link" to={`/${elt.strCategory}`} key={elt.idCategory}>
                            <div key={elt.idCategory}>
                                <h1 className="Home__Title">{elt.strCategory}</h1>
                                <img className="Home__Image" src={elt.strCategoryThumb} alt=""></img>
                            </div>
                        </Link>)}
                </section>
            </>
        );
    }
}

export default Category;