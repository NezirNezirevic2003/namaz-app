import './App.css';
import React from 'react'
import Current from './components/Current';
import Namaz from './components/Namaz';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header/>
      <Current/>
      <Namaz/>
    </div>
  )
}

export default App

