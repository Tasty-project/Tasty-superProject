import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Category.css';
import SearchItems from './SearchItems';

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
                <SearchItems />
                <section className="Flexy_Section">
                    <h2 className="Home__Headline">Or go through our categories</h2>
                    <div className="Home__Section">
                        {this.state.dataIsReady && this.state.data.categories.map(elt =>
                            <Link className="Home__Link" to={`/${elt.strCategory}`} key={elt.idCategory}>
                                <div key={elt.idCategory}>
                                    <h1 className="Home__Title">{elt.strCategory}</h1>
                                    <img className="Home__Image" src={elt.strCategoryThumb} alt=""></img>
                                </div>
                            </Link>)}
                        <Link className="Home__Link" to="/random"><h1 className="Home__Title">RANDOM</h1></Link>
                    </div>
                </section>
            </>
        );
    }
}

export default Category;