import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

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
                <h2 className="HomeHeadline">Or go through our categories</h2>
                <section className="HomeSection">
                    {this.state.dataIsReady && this.state.data.categories.map(elt =>
                        <Link className="HomeLink" to={`/${elt.strCategory}`} key={elt.idCategory}>
                            <div key={elt.idCategory}>
                                <h1 className="HomeTitle">{elt.strCategory}</h1>
                                <img className="Home__Image" src={elt.strCategoryThumb} alt=""></img>
                            </div>
                        </Link>)}
                    <Link to="/random">Random</Link>
                </section>
            </>
        );
    }
}

export default Category;