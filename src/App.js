import React, { Component } from 'react';
import './App.css';
import './component/Loading.css';
import Box from './component/MH';
import Titre from './component/titre';
import Present from './component/present';
import Couleurs from './component/couleurs';
import AppRouter from './component/AppRouter';



class App extends Component {
  render() {
   
    return (
      <AppRouter/>
    );
  }
}
export default App;