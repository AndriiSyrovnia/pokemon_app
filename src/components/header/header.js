import {React, Component} from "react";
import Card from "./../components/card/card";

export default class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
      };
    }
    componentDidMount() {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=6")
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.results,
            });
          },
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
        return (
          <ul>
            {items.map((item) => (
              <li key={item.url}>
                <Card name={item.name} url={item.url}/>
              </li>
            ))}
          </ul>
        );
      }
    }
  }