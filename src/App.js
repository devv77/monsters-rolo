import React, {Component} from 'react'
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import {SearchBox} from './components/search-box/searchbox.component';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello everyone</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends Component {
  constructor() {
    super();
    
    this.state={
      monsters: [],
      searchField: '' 
    }

    //this.handleChange = this.handleChange.bind(this);

  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(user => this.setState({monsters:user}));
  }
  
  render() {
    const { monsters, searchField } = this.state;
    const fileteredMonsters=monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder='search...' handleChange={this.handleChange} ></SearchBox>
      <CardList monsters={fileteredMonsters}></CardList>
      
    </div>
    )
  }  
}

export default App;
