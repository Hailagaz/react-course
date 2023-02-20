import React from 'react';
import './App.css';
import { Footer } from './Footer';

const user = {
	username: 'User'
}


const App = () => (
	<div className="App">
		<h1>Good afternoon, {user.username}</h1>
		<Footer copyright='C' />
	</div>
)

export default App;
