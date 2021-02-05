import './App.css';
import React from 'react'
import Current from './components/Current';
import Namaz from './components/Namaz';
import Header from './components/Header';

const App = (props) => {
  return (
    <div>
      <Header name="Vrijeme Namaza"/>
      <Current/>
      <Namaz/>
    </div>
  )
}

export default App

