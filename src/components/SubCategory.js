import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SubCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataIsReady: false,
        }
    }

    componentDidMount() {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.match.params.strCategory}`)
            .then(response => response.json())
            .then(json => this.setState({ data: json }, () => {
                this.setState({ dataIsReady: true })
                console.log(this.props.match.params.strCategory)
                console.log(this.state.data.meals)
            }))
    }

    render() {
        return (
           <div>
               {this.state.dataIsReady && this.state.data.meals.map(elt => 

                    <div>
                        <h2>{elt.strMealThumb}</h2>
                    </div>
               

                

               )}
           </div>
        );
    }
}

export default SubCategory;