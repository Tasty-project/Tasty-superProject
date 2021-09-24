import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Category.css';
import '../App.css';

class SubCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.match.params.strCategory}`)
            .then(response => response.json())
            .then(json => this.setState({ data: json }, () => {
                this.setState({ dataIsReady: true })
            }))
    }

    render() {
        console.log(this.props.match.params.strCategory)
        console.log(this.state.data)
        console.log(this.state.dataIsReady)
        return (
            <>
                <h2 className="Home__Headline"> Everything {this.props.match.params.strCategory} </h2>
                <section className="Home__Section">
                    {this.state.dataIsReady && this.state.data.meals.map((elt, i) =>
                        <Link className="Home__Link" key={i} to="">
                            <div>
                                <h1 className="Home__Title">{elt.strMeal}</h1>
                                <img className="Home__Image" style={{ width: "35%" }} src={elt.strMealThumb} alt=""></img>
                            </div>
                        </Link>
                    )}
                </section>
            </>
        );
    }
}

export default SubCategory;