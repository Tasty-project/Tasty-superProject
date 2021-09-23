import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            <section style={{ display: "flex", flexWrap: "wrap" }}>
                {this.state.dataIsReady && this.state.data.meals.map((elt, i) =>
                    <Link key={i} to="">
                        <div>
                            <h1>{elt.strMeal}</h1>
                            <img style={{ width: "30%" }} src={elt.strMealThumb} alt=""></img>
                        </div>
                    </Link>
                )}
            </section>
        );
    }
}

export default SubCategory;