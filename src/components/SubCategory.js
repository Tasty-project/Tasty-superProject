import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SubCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.match.params.strCategory}`)
            .then(response => response.json())
            .then(json => this.setState({ data: json })
            )
    }

    render() {
        return (
            <section style={{ display: "flex", flexWrap: "wrap" }}>
                {this.state.data?.meals?.map(elt =>
                    <div key={elt.strMeal}>
                        <h2> {elt.strMeal} </h2>
                        <img src={elt.strMealThumb} />

                    </div>
                )}

            </section>
        );
    }
}

export default SubCategory;