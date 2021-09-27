import { Component } from 'react';
import SearchItems from './SearchItems';
import './TastyItem.css'
class Random extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(json => this.setState({ data: json }, () => {
                console.log("Data is Raedy")
                this.setState({ dataIsReady: true })
                console.log('the random arr', this.state.data)
            }))
    }
    render() {
        return (
            <>
                <SearchItems />
                {this.state.dataIsReady && this.state.data.meals.map(elt =>
                    <section className="Item__section">
                        <div className="Item__flex">
                            <img className="Item__img" src={elt.strMealThumb} alt=""></img>
                        </div>
                        <div className="Item__flex">
                            <div className="Item__leftSide">
                                <h1 className="Item__color">{elt.strMeal}</h1>
                                <ul>
                                    {elt.strInstructions.split('.').map(elt => <li>{elt + "."}</li>)}
                                </ul>
                            </div>
                            <div className="Item__rightSide" >
                                <h1 className="Item__color" >Ingredients</h1>
                                <p>{elt.strMeasure1} {elt.strIngredient1}</p>
                                <p>{elt.strMeasure2} {elt.strIngredient2}</p>
                                <p>{elt.strMeasure3} {elt.strIngredient3}</p>
                                <p>{elt.strMeasure4} {elt.strIngredient4}</p>
                                <p>{elt.strMeasure5} {elt.strIngredient5}</p>
                                <p>{elt.strMeasure6} {elt.strIngredient6}</p>
                                <p>{elt.strMeasure7} {elt.strIngredient7}</p>
                                <p>{elt.strMeasure8} {elt.strIngredient8}</p>
                                <p>{elt.strMeasure9} {elt.strIngredient9}</p>
                                <p>{elt.strMeasure10} {elt.strIngredient10}</p>
                                <p>{elt.strMeasure11} {elt.strIngredient11}</p>
                                <p>{elt.strMeasure12} {elt.strIngredient12}</p>
                                <p>{elt.strMeasure13} {elt.strIngredient13}</p>
                                <p>{elt.strMeasure14} {elt.strIngredient14}</p>
                                <p>{elt.strMeasure15} {elt.strIngredient15}</p>
                                <p>{elt.strMeasure16} {elt.strIngredient16}</p>
                                <p>{elt.strMeasure17} {elt.strIngredient17}</p>
                                <p>{elt.strMeasure18} {elt.strIngredient18}</p>
                                <p>{elt.strMeasure19} {elt.strIngredient19}</p>
                                <p>{elt.strMeasure20} {elt.strIngredient20}</p>
                                <a className="youtube" href={elt.strYoutube}>YouTube</a>
                            </div>
                        </div>
                    </section>
                )}

            </>
        );
    }
}

export default Random;