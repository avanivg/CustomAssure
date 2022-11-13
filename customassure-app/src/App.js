import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Profile from './pages/profile';
import Home from './pages/home';
 
function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/home' element={<Home />} />
		<Route path='/profile' element={<Profile/>} />
	</Routes>
	</Router>
);
}

export default App;
