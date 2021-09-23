import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataIsReady: false,
        }
    }

    componentDidMount() {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => response.json())
            .then(json => this.setState({ data: json }, () => {
                console.log("Data is Raedy")
                this.setState({ dataIsReady: true })
                console.log(this.state.data)
            }))
    }

    render() {
        return (
            <section style={{ display: "flex", flexWrap: "wrap" }}>
                {this.state.dataIsReady && this.state.data.categories.map(elt =>
                    <Link to={`/${elt.strCategory}`} key={elt.idCategory}>
                        <div>
                            <h1>{elt.strCategory}</h1>
                            <img src={elt.strCategoryThumb} alt=""></img>
                        </div>
                    </Link>
                )}
            </section>
        );
    }
}

export default Home;