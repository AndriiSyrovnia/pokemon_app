import React, { Component } from "react";

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          pokemon: {},
        };
      }
      componentDidMount() {
        fetch(this.props.url)
        .then(response => response.json())
        .then((pokeData)=>{
            console.log(pokeData)
            this.setState({
                pokemon: pokeData
              });
        })
      }
      render() {
        const { error, isLoaded, pokemon } = this.state;
          return <div>
          {this.props.name} {this.props.url}
          </div>
      };
}