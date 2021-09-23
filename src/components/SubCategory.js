import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SubCategory extends Component {
    constructor(props) {
<<<<<<< HEAD
        super(props);
        this.state = {
        }
=======
        super(props)
        this.state = {}
>>>>>>> fe189c9aad50eb3fe56f874c55d48829029714b0
    }

    componentDidMount() {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.match.params.strCategory}`)
            .then(response => response.json())
<<<<<<< HEAD
            .then(json => this.setState({ data: json }, () => {
                this.setState({ dataIsReady: true })
            }))
        console.log(this.props.match.params.strCategory)
=======
            .then(json => this.setState({ data: json })
            )
>>>>>>> fe189c9aad50eb3fe56f874c55d48829029714b0
    }

    render() {
        console.log(this.state.data)
        console.log(this.state.dataIsReady)
        return (
            <section style={{ display: "flex", flexWrap: "wrap" }}>
<<<<<<< HEAD
                123
=======
                {this.state.data?.meals?.map(elt =>
                    <div key={elt.strMeal}>
                        <h2> {elt.strMeal} </h2>
                        <img src={elt.strMealThumb} />

                    </div>
                )}

>>>>>>> fe189c9aad50eb3fe56f874c55d48829029714b0
            </section>
        );
    }
}

export default SubCategory;