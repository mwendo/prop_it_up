import React, { Component } from 'react';

class Personcard extends Component {
    render() {
        return <div>
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
            <p>Age: {this.props.age}</p>
            <p>Hair color: {this.props.hairColor}</p>
            <p>Hair color: {this.props.random}</p>
        </div>
    }
}

export default Personcard;