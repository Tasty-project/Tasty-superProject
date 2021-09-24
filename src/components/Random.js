import {Component} from 'react';
class Random extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(json => this.setState({ data: json }, () => {
                console.log("Data is Raedy")
                this.setState({ dataIsReady: true })
                console.log('the random arr',this.state.data)
            }))
    }
    render() { 
        return ( 
            <div>
                
            </div>
         );
    }
}
 
export default Random;