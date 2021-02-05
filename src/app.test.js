import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Current from './components/Current'
import Header from './components/Header'
import Namaz from './components/Namaz'
import Places from './components/Places'


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

it('renders without crashing2', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Current />, div);
});

it('renders without crashing3', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
});

it('renders without crashing4', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Namaz />, div);
});

it('renders without crashing5', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Places />, div);
});