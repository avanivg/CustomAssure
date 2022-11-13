import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Profile from './pages/profile';
import Statistics from './pages/statistics';
import Home from './pages/home';
import ProfilePage from './pages/profile_new';
 
function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/home' element={<Home />} />
		<Route path='/statistics' element={<Statistics/>} />
		<Route path='/profile' element={<ProfilePage/>} />
	</Routes>
	</Router>
);
}

export default App;
