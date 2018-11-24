import React, { Component } from 'react';
import SimpleMenu from './Components/Menu';
import RecipeReviewCard from './Components/Reciept'
import SearchAppBar from './Components/NavBar';
import Menu from './View/Menu.css'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import RecepitList from './Components/ReceiptList';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App"> 
      <SearchAppBar /> 
      
      <RecepitList />
    </div>
    );
  }
}

export default App;
