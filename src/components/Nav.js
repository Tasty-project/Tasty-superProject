import React, { Component } from 'react';

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
        return (
            <section style={flexy}>
                <img style={{ width: "10%" }} src="../img/logo.svg"></img>
                <h1>Find a recipe, an idea, an inspiration...</h1>
                <div>
                    <input type="text" placeholder="Type something to search"></input>
                    <input type="button" value="Search"></input>
                </div>
            </section>
        );
    }
}

export default Nav;