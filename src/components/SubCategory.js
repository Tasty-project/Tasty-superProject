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
        console.log(this.props.match.params.strCategory)
    }

    render() {
        console.log(this.state.data)
        console.log(this.state.dataIsReady)
        return (
            <section style={{ display: "flex", flexWrap: "wrap" }}>
                123
            </section>
        );
    }
}

export default SubCategory;