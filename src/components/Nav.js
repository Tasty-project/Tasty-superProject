import React, { Component } from 'react';
import {Link} from 'react-router-dom'
const flexy = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log(this.props.component)
        return (
            <section style={flexy}>
                <Link to="/" style={{ width: "17%" },{textAlign: "center"}}>
                <img  src="../img/logo.svg" alt=""></img>
                </Link>
                <div>
                    <input type="text" placeholder="Type something to search"></input>
                    <input type="button" value="Search"></input>
                </div>
            </section>
        );
    }
}

export default Nav;