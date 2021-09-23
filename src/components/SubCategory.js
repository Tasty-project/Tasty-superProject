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
                console.log(this.props.match.params.strCategory)
            }))
    }

    render() {
        console.log(this.props.match.params.strCategory)
        console.log(this.state.data)
        console.log(this.state.dataIsReady)
        return (
<<<<<<< HEAD
            <div>
                {this.state.dataIsReady && this.state.data.meals.map(elt =>
=======
            <section style={{ display: "flex", flexWrap: "wrap" }}>
<<<<<<< HEAD
                {this.state.dataIsReady && this.state.data.meals.map((elt, i) =>
                    <Link key={i} to="">
                        <div>
                            <h1>{elt.strMeal}</h1>
                            <img style={{ width: "30%" }} src={elt.strMealThumb} alt=""></img>
                        </div>
                    </Link>
                )}
=======
<<<<<<< HEAD
                123
=======
                {this.state.data?.meals?.map(elt =>
                    <div key={elt.strMeal}>
                        <h2> {elt.strMeal} </h2>
                        <img src={elt.strMealThumb} />
>>>>>>> 8d0c3f3decc48af65009c9328d6c9ddd174e7edd

                    <div>
                        <h2>{elt.strMealThumb}</h2>
                    </div>




<<<<<<< HEAD
                )}
            </div>
=======
>>>>>>> fe189c9aad50eb3fe56f874c55d48829029714b0
>>>>>>> 675e5a8bf65a18ceb0da6ed80dc833ea537960a4
            </section >
>>>>>>> 8d0c3f3decc48af65009c9328d6c9ddd174e7edd
        );
    }
}

export default SubCategory;